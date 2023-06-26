// In top-level module
// We can consume the exports from a single module since parentModule
// "collected"/"bundled" them in a single source

import { myFunction, myVariable, MyClass } from "./parentModule.js";

myFunction()