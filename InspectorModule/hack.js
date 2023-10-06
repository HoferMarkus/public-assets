import babylonjsinspector from "https://cdn.jsdelivr.net/npm/@babylonjs/inspector@6.22.0/+esm";
import { EngineStore } from "https://cdn.jsdelivr.net/npm/@babylonjs/core@6.22.0/+esm";

console.log(EngineStore);
console.log(babylonjsinspector);

babylonjsinspector.Inspector.show(EngineStore._LastCreatedScene);
