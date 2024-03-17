import { categories as allCategories } from "@/data/category";
import { users as allUser } from "@/data/user";
import { useEffect } from "react";
import { useState } from "react";
export const useData = () => {
  const [users, setUser] = useState([...allUser]);
  const [categories, setCategory] = useState([...allCategories]);
  const addNewProject = (data) => {
    setUser([
      ...users,
      {
        id: users.length + 1,
        name: data.position,
        type: data.type,
        company: data.company,
        startDate: data.startDate,
        endDate: data.endDate,
        detail: data.description,
      },
    ]);
  };

  return { users, categories, addNewProject, setCategory };
};
