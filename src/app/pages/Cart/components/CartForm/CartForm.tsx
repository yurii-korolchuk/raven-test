import s from "./CartForm.module.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const CartForm = () => {
  return (
    <form className={s.root}>
      <input
        type="text"
        placeholder="name"
        name="firstName"
        required
        className={s.rootInput}
      />
      <input
        type="text"
        placeholder="surname"
        name="lastName"
        required
        className={s.rootInput}
      />
      <input
        type="text"
        placeholder="address"
        name="address"
        required
        className={s.rootInput}
      />
      <PhoneInput country={"us"} inputClass={s.rootInput} />
      <button type="submit" className={s.rootSubmit}>
        order
      </button>
    </form>
  );
};
