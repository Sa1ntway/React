import React, { Component } from "react";

function Layout(props) {
  return (
    <div classname={Layout}>
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
