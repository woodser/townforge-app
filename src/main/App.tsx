
// imports
import React, { useState, useRef, useEffect } from "react";
const townforgejs = require("townforge-wasm");
const LibraryUtils = townforgejs.LibraryUtils;
const TownforgeUtils = townforgejs.TownforgeUtils;

export default function App() {

  const CONFIG: string = "Hello!";
    
  const runTownforge: () => void = async function () {
    
    // load townforge wasm module
    await LibraryUtils.loadTownforgeModule();
    
    // call townforge source
    TownforgeUtils.startTownforge(CONFIG);
  };

  return (
    <div id = "app_container">
      <button
        style={{
          backgroundColor: "cyan",
          border: "1px solid black",
          position: "absolute"
        }}
        onClick={runTownforge}
      >
        Run Townforge
      </button>
    </div>
  );
}
