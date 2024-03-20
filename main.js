//const Froyo = prompt("Enter your desired flavor")
//let splittedarray = Froyo.split(",")
//console.log(splittedarray)

let trackFlavors = (flavorArray) => {
  const observedFlavors = {};
 

  flavorArray.forEach(flavor => {
      if (!observedFlavors[flavor]) {
          observedFlavors[flavor] = 1;
      } else {
          observedFlavors[flavor]++;
      }
  });

  return observedFlavors;
}

const userInput = prompt("Enter strings separated by commas:");
const flavors = userInput.split(",");

const observedFlavors = trackFlavors(flavors);
console.log("Observed flavors:", observedFlavors);
