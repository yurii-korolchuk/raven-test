import { useState } from "react";

interface FormValues {
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
}

const initialFormValues: FormValues = {
  firstName: "",
  lastName: "",
  address: "",
  phone: "",
};

export const useCartForm = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const handleInput = (key: keyof FormValues, value: string) => {
    setFormValues((state) => ({ ...state, [key]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return { handleInput, handleFormSubmit };
};
