import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
import { Loader } from "./Loader";

const AppLayout = () => {
  const ReactNavigation = useNavigation();

  if (ReactNavigation.state === "loading") return <Loader />;

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
