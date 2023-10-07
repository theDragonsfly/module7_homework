let str = 'abracadabra';
let obj = {
  abracadabra: 'lumos'
};
let object = {
  jkhaho: 'hjidhf'
};

let isKeyOfObject = (str, obj) => { return str in obj };
console.log(isKeyOfObject(str, obj));
console.log(isKeyOfObject(str, object));
