import React, { useRef, useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import useCloseEditor from "../../hooks/useCloseEditor";

const EditorComp = ({
  initialValue,
  keys,
  handleEdit,
  handleMultiEdit = false,
  id = undefined,
}) => {
  const { handleCloseEditor } = useCloseEditor();

  const [value, setValue] = useState(initialValue ?? "");

  useEffect(() => setValue(initialValue ?? ""), [initialValue]);
  const editorRef = useRef(null);

  return (
    <>
      <Editor
        value={value}
        onFocus={handleCloseEditor}
        apiKey="wofsz7vjfejaxoulvwsud2qp5pe1lqlyslyr4w7kqv5391u0"
        onBlur={() => {
          handleEdit
            ? handleEdit(value, keys)
            : handleMultiEdit(value, id, keys);
        }}
        onEditorChange={(newValue, editor) => {
          setValue(newValue);
        }}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={initialValue}
        init={{
          selector: ".tinymce-header",
          menubar: false,
          inline: true,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | removeformat | " +
            "bold italic underline Strikethrough FontSize  | alignleft aligncenter " +
            "alignright alignjustify | lineheight link forecolor backcolor | ",
        }}
      />
    </>
  );
};
export default EditorComp;
