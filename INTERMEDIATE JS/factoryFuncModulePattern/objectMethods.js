// The Object.assign().
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

// Confirmation.
console.log(returnedTarget === target);
// Expected output: true

// For deep cloning of objects.
const obj1 = { a: 0, b: { c: 0 } };
const obj2 = Object.assign({}, obj1);
console.log(obj2); // { a: 0, b: { c: 0 } }

obj1.a = 1;
console.log(obj1); // { a: 1, b: { c: 0 } }
console.log(obj2); // { a: 0, b: { c: 0 } }

obj2.a = 2;
console.log(obj1); // { a: 1, b: { c: 0 } }
console.log(obj2); // { a: 2, b: { c: 0 } }

obj2.b.c = 3;
console.log(obj1); // { a: 1, b: { c: 3 } }
console.log(obj2); // { a: 2, b: { c: 3 } }

// Deep Clone
const obj3 = { a: 0, b: { c: 0 } };
const obj4 = JSON.parse(JSON.stringify(obj3));
obj3.a = 4;
obj3.b.c = 4;
console.log(obj4); // { a: 0, b: { c: 0 } }

// Merging objects.

const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj111 = Object.assign({}, o1, o2, o3);
console.log(obj111); // { a: 1, b: 2, c: 3 }

// Copying symbol typed props
const o11 = { a: 1 };
const o22 = { [Symbol("foo")]: 2 };

const obj11 = Object.assign({}, o11, o22);
console.log(obj11); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]

const objOne = Object.create(
    // foo is on obj's prototype chain.
    { foo: 1 },
    {
      bar: {
        value: 2, // bar is a non-enumerable property.
      },
      baz: {
        value: 3,
        enumerable: true, // baz is an own enumerable property.
      },
    },
  );
  
const copy1 = Object.assign({}, objOne);
console.log(copy1); // { baz: 3 }

// Primitives are wrapped to objects.
const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo");

const objTwo = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(objTwo); // { "0": "a", "1": "b", "2": "c" }

// Exceptions interupt ongoing copying task.
const targetOne = Object.defineProperty({}, "foo", {
    value: 1,
    writable: false,
  }); // target.foo is a read-only property
  
  Object.assign(targetOne, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
  // TypeError: "foo" is read-only
  // The Exception is thrown when assigning target.foo
  
  console.log(targetOne.bar); // 2, the first source was copied successfully.
  console.log(targetOne.foo2); // 3, the first property of the second source was copied successfully.
  console.log(targetOne.foo); // 1, exception is thrown here.
  console.log(targetOne.foo3); // undefined, assign method has finished, foo3 will not be copied.
  console.log(targetOne.baz); // undefined, the third source will not be copied either.
  
// Copying Accessors.
const obj = {
    foo: 1,
    get bar() {
      return 2;
    },
  };
  
let copy = Object.assign({}, obj);
  console.log(copy);
  // { foo: 1, bar: 2 }
  // The value of copy.bar is obj.bar's getter's return value.
  
  // This is an assign function that copies full descriptors
  function completeAssign(target, ...sources) {
    sources.forEach((source) => {
      const descriptors = Object.keys(source).reduce((descriptors, key) => {
        descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
        return descriptors;
      }, {});
  
      // By default, Object.assign copies enumerable Symbols, too
      Object.getOwnPropertySymbols(source).forEach((sym) => {
        const descriptor = Object.getOwnPropertyDescriptor(source, sym);
        if (descriptor.enumerable) {
          descriptors[sym] = descriptor;
        }
      });
      Object.defineProperties(target, descriptors);
    });
    return target;
  }
  
  copy = completeAssign({}, obj);
  console.log(copy);
  // { foo:1, get bar() { return 2 } }
  