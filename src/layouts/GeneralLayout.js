/*rafc*/
import React from 'react';
import {Layout} from "antd";

export const GeneralLayout = (props) => {
  const {children} = props;
  return (
    <Layout>
        <h1>Navbar</h1>
        <h3>Content</h3>
        <h2>Footer</h2>
        {children}
    </Layout>
  );
};
