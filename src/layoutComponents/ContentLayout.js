import React from "react";
import OuterLayout from "./OuterLayout";
import InnerLayout from "./InnerLayout";

const ContentLayout = ({content, leftSidebar, rightSidebar}) => {
  return (
    <OuterLayout justify="center">
      <InnerLayout flex="1 1 100%" maxWidth="1200px">
        <OuterLayout wrap="wrap" marginBetween={20}>
          <InnerLayout flex={1.5} minWidth={200}>{leftSidebar}</InnerLayout>
          <InnerLayout flex={7} minWidth={500} minHeight={700}>{content}</InnerLayout>
          <InnerLayout flex={1.5} minWidth={200}>{rightSidebar}</InnerLayout>
        </OuterLayout>
      </InnerLayout>
    </OuterLayout>
  );
};

export default ContentLayout;
