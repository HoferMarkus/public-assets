import "https://cdn.jsdelivr.net/npm/@babylonjs/gui@6.23.0/2D/math2D.js/+esm";
import { EngineStore } from "https://cdn.jsdelivr.net/npm/@babylonjs/core@6.23.0/+esm";
import "https://cdn.jsdelivr.net/npm/@babylonjs/core@6.23.0/Debug/debugLayer.js/+esm";
import babylonjsinspector from "https://cdn.jsdelivr.net/npm/@babylonjs/inspector@6.23.0/+esm";

console.log(EngineStore);
console.log(babylonjsinspector);

babylonjsinspector.Inspector.show(EngineStore._LastCreatedScene);
