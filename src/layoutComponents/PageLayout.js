import React from "react";
import OuterLayout from "./OuterLayout";
import InnerLayout from "./InnerLayout";
import styled from "styled-components";

const Layout = styled(OuterLayout)`
  min-width: 350px;
`;

const PageLayout = ({header, content, footer}) => {
  return (
    <Layout align="stretch" direction="column">
      <InnerLayout>{header}</InnerLayout>
      <InnerLayout>{content}</InnerLayout>
      <InnerLayout>{footer}</InnerLayout>
    </Layout>
  );
};

export default PageLayout;
