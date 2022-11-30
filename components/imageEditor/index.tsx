import * as Slider from "@radix-ui/react-slider";
import { updateDoc } from "firebase/firestore";
import { useState, useContext, useCallback } from "react";
import Cropper from "react-easy-crop";
import { BiCrop } from "react-icons/bi";
import { CompsContext } from "../../context/compsContext";
import getCroppedImg from "../theme/services/common/cropImg";

const ImageEditor = ({
  image,
  setOpen,
  themeData,
  comps,
  itemIndex = undefined,
  compIndex,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  // const { comps, setComps } = useContext(CompsContext);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        image,
        croppedAreaPixels,
        rotation
      );
      setCroppedImage(croppedImage);
      const formData = new FormData();
      formData.append("file", croppedImage);
      formData.append("upload_preset", "my-upload");
      const data = await fetch(
        "https://api.cloudinary.com/v1_1/dxrdyke2n/image/upload",
        {
          method: "POST",
          body: formData,
        }
      ).then((r) => r.json());

      itemIndex || itemIndex === 0
        ? (comps[compIndex].compData.items[itemIndex].pic = data.secure_url)
        : (comps[compIndex].compData.pic = data.secure_url);

      await updateDoc(themeData, {
        allSections: [...comps],
      });
      setOpen(false);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation, croppedImage]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
    setOpen(false);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Cropper
        image={image}
        crop={crop}
        zoom={zoom}
        showGrid={false}
        objectFit="auto-cover"
        aspect={3 / 2}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
      <div className="absolute w-full rounded-t-md bg-[#353f4b]  shadow-md  bottom-0 left-0">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-between"
        >
          <div className="flex items-center  gap-3">
            <div className="border-r border-[rgba(179,190,202,.6)] border-solid p-2">
              <BiCrop color="white" size={24} />
            </div>
            <Slider.Root
              className="SliderRoot"
              defaultValue={[0]}
              min={1}
              max={3}
              step={0.1}
              value={[zoom]}
              aria-label="Zoom"
              onValueChange={(e) => {
                setZoom(e[0]);
              }}
            >
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" />
            </Slider.Root>
          </div>
          <div className="p-2 space-x-2">
            <button
              onClick={onClose}
              className="border-white border border-solid text-white rounded-full h-6 w-14 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={showCroppedImage}
              className="bg-[#23cba5] text-white rounded-full h-6 w-14 text-sm"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ImageEditor;
