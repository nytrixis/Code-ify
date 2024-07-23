import axios from "axios";
import { languageOptions } from "@/constants/language";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, editorRef) => {
  const editorValue = editorRef.current.getValue();
  const requestData = {
    language: language,
    version: languageOptions[language],
    files: [
      {
        content: editorValue,
      },
    ],
  };

  const response = await API.post("/execute", requestData);
  return response.data;
};
