import {
  DragDropContext,
  Draggable,
  Droppable,
} from "react-beautiful-dnd-next";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNextIndex } from "../../../features/add-section";
import { addSectionTurnOff } from "../../../features/edit-sections";
import { selectCompName } from "../../../features/comp-name";
import ControlBtns from "./controlBtns";
const queryAttr = "data-rbd-drag-handle-draggable-id";
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const DragAndDrop = ({
  comps,
  containerWidth,
  setComps,
  device,
  editSections,
}) => {
  const dispatch = useDispatch();
  const [placeholderProps, setPlaceholderProps] = useState({});
  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    dispatch(addSectionTurnOff());
    setPlaceholderProps({});
    dispatch(getNextIndex(result.destination.index));
    const compName = comps[result.source.index].compName;
    dispatch(selectCompName(compName));
    setComps((items) =>
      reorder(items, result.source.index, result.destination.index)
    );
  };

  const onDragUpdate = (update) => {
    if (!update.destination) {
      return;
    }
    const draggableId = update.draggableId;
    const destinationIndex = update.destination.index;
    const domQuery = `[${queryAttr}='${draggableId}']`;
    const draggedDOM = document.querySelector(domQuery);

    if (!draggedDOM) {
      return;
    }
    const { clientHeight, clientWidth } = draggedDOM;

    const clientY =
      parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
      [...draggedDOM.parentNode.children]
        .slice(0, destinationIndex)
        .reduce((total, curr) => {
          const style = curr.currentStyle || window.getComputedStyle(curr);
          const marginBottom = parseFloat(style.marginBottom);
          return total + curr.clientHeight + marginBottom;
        }, 0);

    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY,
      clientX: parseFloat(
        window.getComputedStyle(draggedDOM.parentNode).paddingLeft
      ),
    });
  };

  // const onDragEnd = (result) => {
  //   const newItems = [...comps];
  //   const [removed] = newItems.splice(result.source.index, 1);
  //   console.log(result.destination);
  //   if (result.destination) {
  //     newItems.splice(result.destination.index, 0, removed);
  //     dispatch(getNextIndex(result.destination.index));
  //   } else {
  //     dispatch(getNextIndex(result.destination.index));
  //   }
  //   const compName = comps[result.source.index].compName;
  //   dispatch(selectCompName(compName));
  //   setComps(newItems);
  // };
  return (
    <div className="demo-inline">
      <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                margin: "0px auto",
                flex: "1 1 0%",
                transition: "width 0.2s ease 0s",
                width: containerWidth,
              }}
              className="flex flex-col"
            >
              {comps.map((comp, i) => {
                return (
                  <Draggable key={comp.id} draggableId={comp.id} index={i}>
                    {(provided) => (
                      <div
                        className="relative"
                        key={comp.id}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <comp.Component
                          comp={comp}
                          setComps={setComps}
                          comps={comps}
                          index={i}
                          device={device}
                          editSections={editSections}
                        />
                        <ControlBtns
                          comps={comps}
                          i={i}
                          comp={comp}
                          setComps={setComps}
                        />
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
              <div
                style={{
                  position: "absolute",
                  top: placeholderProps.clientY,
                  left: placeholderProps.clientX,
                  height: placeholderProps.clientHeight,
                  background: "tomato",
                  width: placeholderProps.clientWidth,
                }}
              />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DragAndDrop;
