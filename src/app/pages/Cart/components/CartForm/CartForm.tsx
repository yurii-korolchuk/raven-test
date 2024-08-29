import s from "./CartForm.module.scss";

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
      <input
        type="number"
        placeholder="phone"
        name="phone"
        required
        className={s.rootInput}
      />
      <button type="submit" className={s.rootSubmit}>
        order
      </button>
    </form>
  );
};
