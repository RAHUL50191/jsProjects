//dataset of convertions
allList = {
  length: {
    Meter: 1,
    Kilometer: 0.001,
    Centimeter: 100,
    Millimeter: 1000,
    Micrometer: 1000000,
    Nanometer: 1000000000,
    Mile: 0.000621371,
    Yard: 1.09361,
    Foot: 3.28084,
    Inch: 39.3701,
    LightYear: 1.057e-16,
  },
  temperature: {
    Celsius: {
      Celsius: function (value) {
        return value;
      },
      Kelvin: function (value) {
        return value * 1 + 273.15;
      },
      Fahrenheit: function (value) {
        return (value * 9) / 5 + 32;
      },
    },
    Kelvin: {
      Celsius: function (value) {
        return value - 273.15;
      },
      Kelvin: function (value) {
        return value;
      },
      Fahrenheit: function (value) {
        return (value * 9) / 5 - 459.67;
      },
    },
    Fahrenheit: {
      Kelvin: function (value) {
        return ((value - 32) * 5) / 9;
      },
      Celsius: function (value) {
        return ((value + 459.67) * 5) / 9;
      },
      Fahrenheit: function (value) {
        return value;
      },
    },
  },
  area: {
    Square: 1,
    MeterSquare: 1,
    KilometerSquare: 0.000001,
    CentimeterSquare: 10000,
    MillimeterSquare: 1000000,
    MicrometerHectareSquare: 0.0001,
    MileSquare: 3.861e-7,
    YardSquare: 1.19599,
    FootSquare: 10.7639,
    InchAcre: 0.000000247105,
  },
  volume: {
    "Cubic Meter": 1,
    "Cubic Kilometer": 0.000000000001,
    "Cubic Centimeter": 1000000,
    "Cubic Millimeter": 1000000000,
    Liter: 1000,
    Milliliter: 1000000,
    USGallon: 264.172,
    "US Quart": 1056.69,
    "US Pint": 2113.38,
    "US Cup": 4166.67,
    "US Fluid Ounce": 33814,
    "US Table Spoon": 67628,
    "US Tea Spoon": 202884,
    "Imperial Gallon": 219.969,
    "Imperial Quart": 879.877,
    "Imperial Pint": 1759.75,
    "Imperial Fluid Ounce": 35195.1,
    "Imperial Table Spoon": 56312.2,
    "Imperial Tea Spoon": 168936,
    "Cubic Mile": 2.39913e-10,
    "Cubic Yard": 1.30795,
    "Cubic Foot": 35.3147,
    "Cubic Inch": 61023.7,
  },
  weight: {
    Kilogram: 1,
    Gram: 1000,
    Milligram: 1000000,
    "Metric Ton": 0.001,
    "Long Ton": 0.000984207,
    "Short Ton": 0.00110231,
    Pound: 2.20462,
    Ounce: 35.274,
    Carrat: 5000,
    "Atomic Mass Unit": 6.02214e26,
  },
  time: {
    Second: 1,
    Millisecond: 1000,
    Microsecond: 1000000,
    Nanosecond: 1000000000,
    Picosecond: 1000000000000,
    Minute: 1 / 60,
    Hour: 1 / 3600,
    Day: 1 / 86400,
    Week: 1 / 604800,
    Month: 1 / 2592000,
    Year: 1 / 31536000,
  },
};
//htmlElements
let from = document.getElementById("from");
let to = document.getElementById("to");
let Type = document.getElementById("type");
let Output = document.getElementById("output");

//initialize the length on load
window.onload = () => updateIndex("length");

//update select option
function updateIndex(type) {
  console.log(allList[type]);

  let str = "<select>";
  for (let unit in allList[type]) {
    str += `<option value="${unit}">${unit}</option>`;
  }
  str += "</select>";
  from.innerHTML = str;
  to.innerHTML = str;
  Type.innerHTML = type;
  document.querySelector(".fromTo").append(from, to, Type);
}

//after input compute result
function output(event, fromEle, toEle, type) {
  let fromValue = fromEle.querySelector("select").value;
  let toValue = toEle.querySelector("select").value;
  let typeValue = this.type.innerHTML;
  let userInput = event.target.value;
  if (typeValue !== "temperature") {
    let output = `${(userInput * allList[typeValue][toValue]) / allList[typeValue][fromValue]}`;
    console.log(output);
    Output.value = output;
  } else {
    let output = allList[typeValue][fromValue][toValue](userInput);
    console.log(output);
    Output.value = output;
  }
}
console.log("infunc");
