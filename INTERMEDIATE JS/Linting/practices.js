// This is a collection of the best JavaScript coding practices.

// Types
const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar); // => 1, 9

//Complex
console.log(foo[0], bar[0]); // => 9, 9

//References
// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;

// bad
var count = 1;
if (true) {
  count += 1;
}

// good, use the let.
let count = 1;
if (true) {
  count += 1;
}

// const and let only exist in the blocks they are defined in.
{
    let a = 1;
    const b = 1;
    var c = 1;
  }
  console.log(a); // ReferenceError
  console.log(b); // ReferenceError
  console.log(c); // Prints 1

  // Objects.
  // bad
const item1 = new Object();

// good
const item = {};


function getKey(k) {
    return `a key named ${k}`;
  }
  
  // bad
  const obj = {
    id: 5,
    name: 'San Francisco',
  };
  obj[getKey('enabled')] = true;
  
  // good
  const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true,
  };

  // bad
const atom = {
    value: 1,
  
    addValue: function (value) {
      return atom.value + value;
    },
  };
  
  // good
  const atom1 = {
    value: 1,
  
    addValue(value) {
      return atom.value + value;
    },
  };

  const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// good
const obj = {
  lukeSkywalker,
};

const anakinSkywalker = 'Anakin Skywalker';

// bad
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};

// bad
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};

// bad
const bad = {
    'foo': 3,
    'bar': 4,
    'data-blah': 5,
  };
  
  // good
  const good = {
    foo: 3,
    bar: 4,
    'data-blah': 5,
  };

  // bad
console.log(object.hasOwnProperty(key));

// good
console.log(Object.prototype.hasOwnProperty.call(object, key));

// best
const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
console.log(has.call(object, key));
/* or */
import has from 'has'; // https://www.npmjs.com/package/has
console.log(has(object, key));
/* or */
console.log(Object.hasOwn(object, key)); // https://www.npmjs.com/package/object.hasown

// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
delete copy.a; // so does this

// bad
const original1 = { a: 1, b: 2 };
const copy1 = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original2 = { a: 1, b: 2 };
const copy2 = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }


//Arrays
// bad
const items = new Array();

// good
const items1 = [];

const someStack = [];

// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');

// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy1 = [...items];

const foo1 = document.querySelectorAll('.foo');

// good
const nodes = Array.from(foo1);

// best
const nodes1 = [...foo1];

const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };

// bad
const arr = Array.prototype.slice.call(arrLike);

// good
const arr1 = Array.from(arrLike);

// bad
const baz = [...foo].map(bar);

// good
const baz1 = Array.from(foo, bar);

// good
[1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
  });
  
  // good
  [1, 2, 3].map((x) => x + 1);
  
  // bad - no returned value means `acc` becomes undefined after the first iteration
  [[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
    const flatten = acc.concat(item);
  });
  
  // good
  [[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
    const flatten = acc.concat(item);
    return flatten;
  });
  
  // bad
  inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird') {
      return author === 'Harper Lee';
    } else {
      return false;
    }
  });
  
  // good
  inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird') {
      return author === 'Harper Lee';
    }
  
    return false;
  });

  // bad
const arrr = [
    [0, 1], [2, 3], [4, 5],
  ];
  
  const objectInArray = [{
    id: 1,
  }, {
    id: 2,
  }];
  
  const numberInArray1 = [
    1, 2,
  ];
  
  // good
  const arr2 = [[0, 1], [2, 3], [4, 5]];
  
  const objectInArray2 = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
  
  const numberInArray = [
    1,
    2,
  ];

  //Destructuring.
  // bad
function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;
  
    return `${firstName} ${lastName}`;
  }
  
  // good
  function getFullName(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
  }
  
  // best
  function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
  }

  const arr3 = [1, 2, 3, 4];

// bad
const firstt = arr[0];
const secondd = arr[1];

// good
const [first, second] = arr3;

// bad
function processInput(input) {
    // then a miracle occurs
    return [left, right, top, bottom];
  }
  
  // the caller needs to think about the order of return data
  const [leftt, __, topp] = processInput(input);
  
  // good
  function processInput(input) {
    // then a miracle occurs
    return { left, right, top, bottom };
  }
  
  // the caller selects only the data they need
  const { left, top } = processInput(input);

  
// Strings.
  // bad
const name = "Capt. Janeway";

// bad - template literals should contain interpolation or newlines
const name1 = `Capt. Janeway`;

// good
const name2 = 'Capt. Janeway';

// bad
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// bad
const errorMessage1 = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.';

// good
const errorMessage2 = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';


// bad
function sayHi(name) {
    return 'How are you, ' + name + '?';
  }
  
  // bad
  function sayHi(name) {
    return ['How are you, ', name, '?'].join();
  }
  
  // bad
  function sayHi(name) {
    return `How are you, ${ name }?`;
  }
  
  // good
  function sayHi(name) {
    return `How are you, ${name}?`;
  }

  // bad
const foo2 = '\'this\' \i\s \"quoted\"';

// good
const foo3 = '\'this\' is "quoted"';
const foo4 = `my name is '${name}'`;

// Functions.
// bad
function foo() {
    // ...
  }
  
  // bad
  const foo = function () {
    // ...
  };
  
  // good
  // lexical name distinguished from the variable-referenced invocation(s)
  const short = function longUniqueMoreDescriptiveLexicalFoo() {
    // ...
  };

  // immediately-invoked function expression (IIFE)
(function () {
    console.log('Welcome to the Internet. Please follow me.');
  }());

  // bad
if (currentUser) {
    function test() {
      console.log('Nope.');
    }
  }
  
  // good
  let test;
  if (currentUser) {
    test = () => {
      console.log('Yup.');
    };
  }

  // bad
function foo(name, options, argumentss) {
    // ...
  }
  
  // good
  function foo(name, options, args) {
    // ...
  }

  // bad
function concatenateAll() {
    const args = Array.prototype.slice.call(arguments);
    return args.join('');
  }
  
  // good
  function concatenateAll(...args) {
    return args.join('');
  }

  // really bad
function handleThings(opts) {
    // No! We shouldn’t mutate function arguments.
    // Double bad: if opts is falsy it'll be set to an object which may
    // be what you want but it can introduce subtle bugs.
    opts = opts || {};
    // ...
  }
  
  // still bad
  function handleThings(opts) {
    if (opts === void 0) {
      opts = {};
    }
    // ...
  }
  
  // good
  function handleThings(opts = {}) {
    // ...
  }

  let b = 1;
// bad
function count(a = b++) {
  console.log(a);
}
count();  // 1
count();  // 2
count(3); // 3
count();  // 3

// bad
function handleThings(opts = {}, name) {
    // ...
  }
  
  // good
  function handleThings(name, opts = {}) {
    // ...
  }

  // bad
const add = new Function('a', 'b', 'return a + b');

// still bad
const subtract = Function('a', 'b', 'return a - b');

// bad
const f = function(){};
const g = function (){};
const h = function() {};

// good
const x11 = function () {};
const y11 = function a() {};

// bad
function f1(obj) {
    obj.key = 1;
  }
  
  // good
  function f2(obj) {
    const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
  }

  // bad
function f1(a) {
    a = 1;
    // ...
  }
  
  function f2(a) {
    if (!a) { a = 1; }
    // ...
  }
  
  // good
  function f3(a) {
    const b = a || 1;
    // ...
  }
  
  function f4(a = 1) {
    // ...
  }

  // bad
const x2 = [1, 2, 3, 4, 5];
console.log.apply(console, x);

// good
const x1 = [1, 2, 3, 4, 5];
console.log(...x);

// bad
new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));

// good
new Date(...[2016, 8, 5]);

// bad
function foo(bar,
    baz,
    quux) {
// ...
}

// good
function foo(
bar,
baz,
quux,
) {
// ...
}

// bad
console.log(foo,
bar,
baz);

// good
console.log(
foo,
bar,
baz,
);

// Arrow functions.
// bad
[1, 2, 3].map(function (x) {
    const y = x + 1;
    return x * y;
  });
  
  // good
  [1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
  });

  // bad
[1, 2, 3].map((number) => {
    const nextNumber = number + 1;
    `A string containing the ${nextNumber}.`;
  });
  
  // good
  [1, 2, 3].map((number) => `A string containing the ${number + 1}.`);
  
  // good
  [1, 2, 3].map((number) => {
    const nextNumber = number + 1;
    return `A string containing the ${nextNumber}.`;
  });
  
  // good
  [1, 2, 3].map((number, index) => ({
    [index]: number,
  }));
  
  // No implicit return with side effects
  function foo(callback) {
    const val = callback();
    if (val === true) {
      // Do something if callback returns true
    }
  }
  
  let bool = false;
  
  // bad
  foo(() => bool = true);
  
  // good
  foo(() => {
    bool = true;
  });

  // bad
['get', 'post', 'put'].map((httpMethod) => Object.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod,
  )
);

// good
['get', 'post', 'put'].map((httpMethod) => (
  Object.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod,
  )
));

// bad
[1, 2, 3].map(x => x * x);

// good
[1, 2, 3].map((x) => x * x);

// bad
[1, 2, 3].map(number => (
  `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`
));

// good
[1, 2, 3].map((number) => (
  `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`
));

// bad
[1, 2, 3].map(x => {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

// bad
const itemHeight = (item) => item.height <= 256 ? item.largeSize : item.smallSize;

// bad
const itemHeight1 = (item) => item.height >= 256 ? item.largeSize : item.smallSize;

// good
const itemHeight2 = (item) => (item.height <= 256 ? item.largeSize : item.smallSize);

// good
const itemHeight3 = (item) => {
  const { height, largeSize, smallSize } = item;
  return height <= 256 ? largeSize : smallSize;
};

// bad
(foo) =>
  bar;

(foo) =>
  (bar);

// good
(foo) => bar;
(foo) => (bar);
(foo) => (
   bar
)

// Classes and constructors.
// bad
function Queue(contents = []) {
    this.queue = [...contents];
  }
  Queue.prototype.pop = function () {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
  };
  
  // good
  class Queue {
    constructor(contents = []) {
      this.queue = [...contents];
    }
    pop() {
      const value = this.queue[0];
      this.queue.splice(0, 1);
      return value;
    }
  }

  // bad
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function () {
  return this.queue[0];
};

// good
class PeekableQueue extends Queue {
  peek() {
    return this.queue[0];
  }
}

// bad
Jedi.prototype.jump = function () {
    this.jumping = true;
    return true;
  };
  
  Jedi.prototype.setHeight = function (height) {
    this.height = height;
  };
  
  const luke = new Jedi();
  luke.jump(); // => true
  luke.setHeight(20); // => undefined
  
  // good
  class Jedi {
    jump() {
      this.jumping = true;
      return this;
    }
  
    setHeight(height) {
      this.height = height;
      return this;
    }
  }
  
  const luke1 = new Jedi();
  
  luke.jump()
    .setHeight(20);

    class Jedi {
        constructor(options = {}) {
          this.name = options.name || 'no name';
        }
      
        getName() {
          return this.name;
        }
      
        toString() {
          return `Jedi - ${this.getName()}`;
        }
      }

// bad
class Jedi {
    constructor() {}
  
    getName() {
      return this.name;
    }
  }
  
  // bad
  class Rey extends Jedi {
    constructor(...args) {
      super(...args);
    }
  }
  
  // good
  class Rey extends Jedi {
    constructor(...args) {
      super(...args);
      this.name = 'Rey';
    }
  }

  // bad
class Foo {
    bar() { return 1; }
    bar() { return 2; }
  }
  
  // good
  class Foo {
    bar() { return 1; }
  }
  
  // good
  class Foo {
    bar() { return 2; }
  }

// bad
class Foo {
    bar() {
      console.log('bar');
    }
  }
  
  // good - this is used
  class Foo {
    bar() {
      console.log(this.bar);
    }
  }
  
  // good - constructor is exempt
  class Foo {
    constructor() {
      // ...
    }
  }
  
  // good - static methods aren't expected to use this
  class Foo {
    static bar() {
      console.log('bar');
    }
  }

  const numbers = [1, 2, 3, 4, 5];

  // bad
  let sum10 = 0;
  for (let num of numbers) {
    sum += num;
  }
  sum === 15;
  
  // good
  let sum2 = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  sum === 15;
  
  // best (use the functional force)
  const sum4 = numbers.reduce((total, num) => total + num, 0);
  sum === 15;
  
  // bad
  const increasedByOne1 = [];
  for (let i = 0; i < numbers.length; i++) {
    increasedByOne.push(numbers[i] + 1);
  }
  
  // good
  const increasedByOne2 = [];
  numbers.forEach((num) => {
    increasedByOne.push(num + 1);
  });
  
  // best (keeping it functional)
  const increasedByOne3 = numbers.map((num) => num + 1);

  // bad
function * foo() {
    // ...
  }
  
  // bad
  const bar6 = function * () {
    // ...
  };
  
  // bad
  const baz7 = function *() {
    // ...
  };
  
  // bad
  const quux = function*() {
    // ...
  };
  
  // bad
  function*foo() {
    // ...
  }
  
  // bad
  function *foo() {
    // ...
  }
  
  // very bad
  function
  *
  foo() {
    // ...
  }
  
  // very bad
  const wat = function
  *
  () {
    // ...
  };
  
  // good
  function* foo() {
    // ...
  }
  
  // good
  const foo = function* () {
    // ...
  };

  const luke5 = {
    jedi: true,
    age: 28,
  };
  
  // bad
  const isJedi3 = luke5['jedi'];
  
  // good
  const isJedi1 = luke5.jedi;

  const luke01 = {
    jedi: true,
    age: 28,
  };
  
  function getProp(prop) {
    return luke01[prop];
  }
  
  const isJedi = getProp('jedi');

// bad
const items5 = getItems(),
    goSportsTeam5 = true,
    dragonball5 = 'z';

// bad
// (compare to above, and try to spot the mistake)
const items6 = getItems(),
    goSportsTeam6 = true;
    dragonball6 = 'z';

// good
const items7 = getItems();
const goSportsTeam7 = true;
const dragonball7 = 'z';

// bad
(function example() {
    // JavaScript interprets this as
    // let a = ( b = ( c = 1 ) );
    // The let keyword only applies to variable a; variables b and c become
    // global variables.
    let a = b = c = 1;
  }());
  
  console.log(a); // throws ReferenceError
  console.log(b); // 1
  console.log(c); // 1
  
  // good
  (function example() {
    let a = 1;
    let b = a;
    let c = a;
  }());
  
  console.log(a); // throws ReferenceError
  console.log(b); // throws ReferenceError
  console.log(c); // throws ReferenceError
  
  // the same applies for `const`

// bad

const array = [1, 2, 3];
let num = 1;
num++;
--num;

let sum = 0;
let truthyCount = 0;
for (let i = 0; i < array.length; i++) {
  let value = array[i];
  sum += value;
  if (value) {
    truthyCount++;
  }
}

// good

const array1 = [1, 2, 3];
let num1 = 1;
num += 1;
num -= 1;

const sum1 = array.reduce((a, b) => a + b, 0);
const truthyCount1 = array.filter(Boolean).length;

// bad
const foo =
  superLongLongLongLongLongLongLongLongFunctionName();

// bad
const foo
  = 'superLongLongLongLongLongLongLongLongString';

// good
const foo = (
  superLongLongLongLongLongLongLongLongFunctionName()
);

// good
const foo = 'superLongLongLongLongLongLongLongLongString';


// bad

const some_unused_var = 42;

// Write-only variables are not considered as used.
let y4 = 10;
y = 5;

// A read for a modification of itself is not considered as used.
let z = 0;
z = z + 1;

// Unused function arguments.
function getX(x, y) {
    return x;
}

// good

function getXPlusY(x, y) {
  return x + y;
}

const x = 1;
const y = a + 2;

alert(getXPlusY(x, y));

// 'type' is ignored even if unused because it has a rest property sibling.
// This is a form of extracting an object that omits the specified keys.
const { type, ...coords } = data;
// 'coords' is now the 'data' object without its 'type' property.

