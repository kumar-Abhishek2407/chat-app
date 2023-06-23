const car = {
    color :"red",
    gears :5,
    engine :"petrol",
};

// const can be renamed : color to newcolor
// const color = car.color;
// const gears = car.gears;
// const engine = car.engine;

// const can't be renamed. It should be same as in object created
const {color,gears,engine} = car;
console.log("color->",color);
console.log("gears->",gears);
console.log("engine->",engine);

// to rename
const{color:newColor}=car;
//color variable doesn't exist
console.log("newColor->",newcolor);

