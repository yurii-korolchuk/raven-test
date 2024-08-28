import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import s from "./Layout.module.scss";

export const Layout = () => (
  <>
    <Header />
    <main className={s.root}>
      <Outlet />
    </main>
  </>
);
