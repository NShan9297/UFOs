let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
for  (var i= 0; i< vegetables.length; i++){
  console.log("I love " +  vegetables[i] );
}

// i in this instance is referencing the iteration

for (var i = 0; i < 5; i++) {
  console.log("I am " + i);
}

let numbers = [1,2,3,4,5,6];
numbers.forEach(function(element){
  console.log(element**2);

})
// the ** is sqauring the numbers 