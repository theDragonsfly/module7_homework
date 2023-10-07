function emptyObject() {
  let obj = new Object;
  return obj;
}

let obj = emptyObject();
obj.color = 'red';
console.log(obj.color);
