import { cartActions, UserInfo, userInfoStorage } from "@/data";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const initialFormValues: UserInfo = userInfoStorage.get() || {
  firstName: "",
  lastName: "",
  address: "",
  phone: "",
};

export const useCartForm = () => {
  const [formValues, setFormValues] = useState<UserInfo>(initialFormValues);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (key: keyof UserInfo, value: string) => {
    setFormValues((state) => ({ ...state, [key]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userInfoStorage.set(formValues);

    // TODO: create separate collection for orders
    const JSONToSend = JSON.stringify(formValues);

    dispatch(cartActions.clearCart());
    navigate("/");
  };

  return { formValues, handleInput, handleFormSubmit };
};
