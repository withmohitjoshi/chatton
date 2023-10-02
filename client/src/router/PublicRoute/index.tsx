import { Outlet } from "react-router-dom";
import BoxLayout from "../../layouts/BoxLayout";

const PublicRoute = () => {
  return <BoxLayout><Outlet /></BoxLayout>;
};

export default PublicRoute;
