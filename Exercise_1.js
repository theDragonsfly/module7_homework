function methodsOfObject (obj) {
  for (let key in obj){
    console.log(key);
    if(obj.hasOwnProperty(key))
      console.log(obj[key]);
  }
}

let prototype = {
  "": "",
  color: "red",
  size: "huge"
};

let obj = Object.create(prototype);
obj.weight = 135;
methodsOfObject(obj);
