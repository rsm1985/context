import React, { memo } from "react";
import Input from "./Input";
import List from "./List";

function Content() {
  return (
    <div className="App" style={{ margin: "0 auto", width: 500 }}>
      <Input />
      <List />
    </div>
  );
}
export default memo(Content);
