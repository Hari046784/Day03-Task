var json = [{
    "id": "001",
    "name": "Hari", 
    "qstn": "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task": "zen portal task no 3"
},
{
    "id": "002",
    "name": "Siva", 
    "qstn": "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task": "zen portal task no 3"
}];

// //for loop
for(var i = 0; i < json.length; i++) {
    var object = json[i];
    console.log(object.id);
    console.log(object.name);
    console.log(object.qstn);
    console.log(object.task);
}

// // //for Each
json.forEach(function(object) {
    console.log(object.id);
});

// //for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  console.log(json[key].name);
  console.log(json[key].qstn);
  console.log(json[key].task);
}}

// //for Of
let text = "";
for (let x of json[key].name) {
 text += x; 
}

console.log(text);