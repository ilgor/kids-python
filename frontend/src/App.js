import React from "react";
import AceEditor from "react-ace";
import { split as SplitEditor } from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

function onChange(newValue) {
  console.log("change", newValue);
}

function App() {
  return (
    <SplitEditor
      mode="java"
      theme="github"
      splits={2}
      orientation="below"
      value={["hi", "hello"]}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
    />
  );
}

export default App;
