import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-twilight";
import "./Editor.css";

function Code() {
  const [code, setCode] = useState("");
  const [test, setTest] = useState();
  const [language, setLanguage] = useState("python");

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div class="p-4 sm:ml-64 h-screen dark:bg-gray-900 mt-14">
      <div class="grid grid-cols-3">
        <div class="col-start-1 col-span-4">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Choose a programming language
          </label>
          <select
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
            value={language}
            onChange={handleLanguageChange}
          >
            <option selected>Choose a language</option>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="c_cpp">C++</option>
            <option value="csharp">C#</option>
            <option value="mysql">MYSQL</option>
            <option value="DE">HTML</option>
          </select>
          <AceEditor
            className="w-full h-full rounded-lg bg-gray-800"
            placeholder="Enter code"
            mode={language}
            theme="twilight"
            name="code-editor"
            onChange={handleCodeChange}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={code}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
        </div>

        <div class="col-start-1 col-end-4">
          <AceEditor
            className="w-full h-full rounded-lg mt-10 p-10 bg-gray-800"
            placeholder="Code Output >>"
            theme="twilight"
            name="code-editor"
            fontSize={14}
            value={test}
          />
        </div>
      </div>
    </div>
  );
}

export default Code;
