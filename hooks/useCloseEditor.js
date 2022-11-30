import { useState, useEffect } from "react";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../utlis/firebase";
const useCloseEditor = () => {
  const [themeId, setThemeId] = useState(null);

  useEffect(() => {
    onSnapshot(collection(db, "themes"), (snapshot) => {
      snapshot.docs.forEach((doc) => {
        setThemeId(doc.id);
      });
    });
  }, []);

  const handleCloseEditor = async () => {
    const themeData = doc(db, "themes", themeId);
    await updateDoc(themeData, {
      compName: "",
      editImg: false,
      editFiles: false,
      colorsEdit: false,
      fontEdit: false,
      addSection: false,
      editEffects: false,
      stylesEditing: false,
    });
  };

  return { handleCloseEditor };
};

export default useCloseEditor;
