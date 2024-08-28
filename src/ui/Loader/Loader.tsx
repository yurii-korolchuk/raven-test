import s from "./Loader.module.scss";
import { Grid } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Grid
      height="80"
      width="80"
      ariaLabel="grid-loading"
      wrapperClass={s.root}
    />
  );
};
