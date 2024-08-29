import { UserInfo, userInfoStorage } from "@/data";
import { useState } from "react";

const initialFormValues: UserInfo = userInfoStorage.get() || {
  firstName: "",
  lastName: "",
  address: "",
  phone: "",
};

export const useCartForm = () => {
  const [formValues, setFormValues] = useState<UserInfo>(initialFormValues);

  const handleInput = (key: keyof UserInfo, value: string) => {
    setFormValues((state) => ({ ...state, [key]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userInfoStorage.set(formValues);
  };

  return { formValues, handleInput, handleFormSubmit };
};
