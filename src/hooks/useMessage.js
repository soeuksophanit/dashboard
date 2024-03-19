import { messages } from "@/data/message";
import { useState } from "react";

export const useMessage = () => {
  const [message, setMessage] = useState([...messages]);

  return {
    message,
    setMessage,
  };
};
