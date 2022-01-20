// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.

// uncomment the renderer that you want to use

// run pixi renderer
import { main as pixiMain } from "./renderer-pixi";
pixiMain();

// run three renderer
// import { main as threeMain } from './renderer-three';
// threeMain();