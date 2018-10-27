import React, { Fragment } from "react";
import OverviewContainer from "../containerComponents/OverviewContainer";
import ImageBarView from "../viewComponents/ImageBarView";

const OverviewPage = () => {

  return (
    <Fragment>
      <ImageBarView text="CELKOVÝ PŘEHLED"/>
      <OverviewContainer/>
    </Fragment>
  );
};

export default OverviewPage;