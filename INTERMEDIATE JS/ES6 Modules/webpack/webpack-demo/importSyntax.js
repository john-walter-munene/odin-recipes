import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { default as alias } from "module-name";
import { export1, export2 } from "module-name";
import { export1, export2 as alias2, /* … */ } from "module-name";
// import { "string name" as alias } from "module-name";
import defaultExport, { export1, /* … */ } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";


// Named imports.
import { myExport } from "/modules/my-module.js";

// Importing multiple names
import { foo, bar } from "/modules/my-module.js";

// You can also rename it like.
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";

import { "a-b" as a } from "myModules.js";

// Importing default with namespace.
import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default and myDefault point to the same binding

import { default as myDefault } from "/modules/my-module.js";


