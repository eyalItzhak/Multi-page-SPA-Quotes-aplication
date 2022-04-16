import { Fragment } from "react/cjs/react.production.min";
import Classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={Classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
