let adeshsWeight = 90;
let adeshsHeight = 191;

function calculateBMI(weight, height) {
  weight = adeshsWeight;
  height = adeshsHeight;
  let BMI = (height / weight) * 10 + 3.45; //Totally made up formula :D
  //   24.67;
  return Number(BMI.toFixed(2));
}

function interpretBMI(BMI) {
  if (BMI < 18.5) {
    resBMI = `Underweight`;
  } else if (BMI >= 18.5 && BMI < 25) {
    resBMI = `Normal Weight`;
  } else if (BMI >= 25 && BMI < 30) {
    resBMI = `Over Weight`;
  } else {
    resBMI = `Obese`;
  }
  console.log(BMI); // for debug purposes
  return resBMI;
}

console.log(interpretBMI(calculateBMI(adeshsHeight, adeshsWeight)));
