import React from "react";
import OuterLayout from "./OuterLayout";
import InnerLayout from "./InnerLayout";
import styled from "styled-components";

const Layout = styled(OuterLayout)`
  min-width: 350px;
`;

const PageLayout = ({header, content}) => {
  return (
    <Layout align="stretch" direction="column">
      <InnerLayout>{header}</InnerLayout>
      <InnerLayout>{content}</InnerLayout>
    </Layout>
  );
};

export default PageLayout;
