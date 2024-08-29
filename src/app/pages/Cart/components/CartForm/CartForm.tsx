import PhoneInput from "react-phone-input-2";
import { useCartForm } from "./hooks/useCartForm";

import "react-phone-input-2/lib/style.css";
import s from "./CartForm.module.scss";

export const CartForm = () => {
  const { formValues, handleInput, handleFormSubmit } = useCartForm();

  return (
    <form className={s.root} onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="name"
        name="firstName"
        required
        value={formValues.firstName}
        onChange={(e) => handleInput("firstName", e.target.value)}
        className={s.rootInput}
      />
      <input
        type="text"
        placeholder="surname"
        name="lastName"
        required
        value={formValues.lastName}
        onChange={(e) => handleInput("lastName", e.target.value)}
        className={s.rootInput}
      />
      <input
        type="text"
        placeholder="address"
        name="address"
        required
        value={formValues.address}
        onChange={(e) => handleInput("address", e.target.value)}
        className={s.rootInput}
      />
      <PhoneInput
        inputClass={s.rootInput}
        inputProps={{ name: "phone", required: true }}
        value={formValues.phone}
        onChange={(phone: string) => handleInput("phone", phone)}
      />
      <button type="submit" className={s.rootSubmit}>
        order
      </button>
    </form>
  );
};
