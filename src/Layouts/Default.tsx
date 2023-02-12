import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";

const Default = () => {
  return (
    <div className="layout">
      <SideBar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Default;
