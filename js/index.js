const metricRadio = document.querySelector(".radio-metric")
const imperialRadio = document.querySelector(".radio-imperial")
const metricCalculator = document.querySelector(".metric-height-weight")
const imperialCalculator = document.querySelector(".imperial-height-weight")
const tabletBMI = document.querySelector(".bmi-limitations")
const tabletBMITablet = document.querySelector(".bmi-limitations-tablet")
const metricHeight = document.querySelector(".height-metric")
const metricWeight = document.querySelector(".weight-metric")
const BMIresult = document.querySelector(".BMI-result")
const classificaton = document.querySelector(".classification-span")
const weightRange = document.querySelector(".range-span")
const resultsEmpty = document.querySelector(".results-empty")
const resultsFilled = document.querySelector(".results-filled")
const BMIdescription = document.querySelector(".bmi-description-p")
const imperialHeightInputFt = document.querySelector(".imperial-height-input")
const imperialHeightInputIn = document.querySelector(".imperial-height-input-in")
const imperialWeightInputSt = document.querySelector(".imperial-weight-input")
const imperialWeightInputLbs = document.querySelector(".imperial-weight-input-lbs")
const betweenOverUnder = document.querySelector(".between-over-under")

metricRadio.addEventListener('click', () => {
    metricCalculator.classList.remove("hidden");
    imperialCalculator.classList.add("hidden");
})
imperialRadio.addEventListener('click', () => {
    metricCalculator.classList.add("hidden");
    imperialCalculator.classList.remove("hidden");
})
const mediaQueryMobile = window.matchMedia('(max-width: 549px)')
if (mediaQueryMobile.matches) {
  tabletBMITablet.classList.add("hidden");
  tabletBMI.classList.remove("hidden");
}
const mediaQueryTablet = window.matchMedia('(min-width: 550px)')
if (mediaQueryTablet.matches) {
  tabletBMITablet.classList.remove("hidden");
  tabletBMI.classList.add("hidden");
}
const mediaQueryDesktop = window.matchMedia('(min-width: 900px)')
if (mediaQueryDesktop.matches) {
  tabletBMITablet.classList.add("hidden");
  tabletBMI.classList.remove("hidden");
}
let heightM = Number(metricHeight.value);
let weightM = Number(metricWeight.value);

let BMInumber;
let BMIrange;

let heightImp = Number(imperialHeightInputFt.value)/12 + Number(imperialHeightInputIn.value);
let weightImp = Number(imperialWeightInputSt.value)/14 + Number(imperialWeightInputLbs.value);
document.addEventListener('keydown', (e) =>{
  if(e.key === "Enter"){
     e.preventDefault();
     heightM = Number(metricHeight.value);
     weightM = Number(metricWeight.value);
     if((imperialCalculator.classList.contains("hidden")) && (heightM !== 0) && (weightM !== 0)) {
        BMInumber = Number(weightM/(Math.pow(heightM/100, 2))).toFixed(1);
        BMIresult.innerHTML = BMInumber;
        if(BMInumber < 18.5) {
          classificaton.innerHTML = "underweight";
          betweenOverUnder.innerHTML = "over";
          weightRange.innerHTML = `${Number(18.5*(Math.pow(heightM/100, 2))).toFixed(1)}kg`;
          BMIdescription.innerHTML = `
          A BMI below 18.5 is considered a 'underweight.' Increasing your 
          weight may lower your chances of experiencing health issues later on. Aim for a nutritious diet with reduced 
          fat and sugar content, incorporating ample fruits and vegetables. Additionally, 
          strive for regular physical activity, ideally about 30 minutes daily for 
          five days a week.
          `;
        } else if(BMInumber >= 18.5 && BMInumber <=24.9) {
          classificaton.innerHTML = "a healthy weight";
          betweenOverUnder.innerHTML = "between";
          weightRange.innerHTML = `${Number((18.5)*(Math.pow(heightM/100, 2))).toFixed(1)}kg and ${Number((24.9)*(Math.pow(heightM/100, 2))).toFixed(1)}kg`;
          BMIdescription.innerHTML = `
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a 
          healthy weight may lower your chances of experiencing health issues later on, 
          such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced 
          fat and sugar content, incorporating ample fruits and vegetables. Additionally, 
          strive for regular physical activity, ideally about 30 minutes daily for 
          five days a week.
          `;
        } else if(BMInumber >= 25 && BMInumber <=29.9) {
          classificaton.innerHTML = "overweight";
          betweenOverUnder.innerHTML = "between";
          weightRange.innerHTML = `${Number(25*(Math.pow(heightM/100, 2))).toFixed(1)}kg and ${Number(29.9*(Math.pow(heightM/100, 2))).toFixed(1)}kg`;
          BMIdescription.innerHTML = `
          A BMI range of 25 to 29.9 is considered 'overweight.' Reducing 
          weight may lower your chances of experiencing health issues later on, 
          such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced 
          fat and sugar content, incorporating ample fruits and vegetables. Additionally, 
          strive for regular physical activity, ideally about 30 minutes daily for 
          five days a week.
          `;
        } else if(BMInumber >= 30) {
          classificaton.innerHTML = "obese";
          betweenOverUnder.innerHTML = "under";
          weightRange.innerHTML = `${Number(30*(Math.pow(heightM/100, 2))).toFixed(1)}kg`;
          BMIdescription.innerHTML = `
          A BMI of over 30 is considered 'obese.' Reducing
          weight may lower your chances of experiencing health issues later on, 
          such as type 2 diabetes. Aim for a nutritious diet with reduced 
          fat and sugar content, incorporating ample fruits and vegetables. Additionally, 
          strive for regular physical activity, ideally about 30 minutes daily for 
          five days a week.
          `;
        } 
     }
     let heightImp = Number(imperialHeightInputFt.value)*12 + Number(imperialHeightInputIn.value);
     let weightImp = Number(imperialWeightInputSt.value)*14 + Number(imperialWeightInputLbs.value);
     if((metricCalculator.classList.contains("hidden")) && (heightImp !== 0) && (weightImp !== 0)) {
      BMInumber = Number((weightImp/(Math.pow(heightImp, 2)))*703).toFixed(1);
      BMIresult.innerHTML = BMInumber;
      if(BMInumber < 18.5) {
        classificaton.innerHTML = "underweight";
        weightRange.innerHTML = `0lbs and ${Number((18.5/703)*(Math.pow(heightImp, 2))).toFixed(1)}lbs`;
        BMIdescription.innerHTML = `
        A BMI below 18.5 is considered a 'underweight.' Increasing your 
        weight may lower your chances of experiencing health issues later on. Aim for a nutritious diet with reduced 
        fat and sugar content, incorporating ample fruits and vegetables. Additionally, 
        strive for regular physical activity, ideally about 30 minutes daily for 
        five days a week.
        `;
      } else if(BMInumber >= 18.5 && BMInumber <=24.9) {
        classificaton.innerHTML = "a healthy weight";
        weightRange.innerHTML = `${Number((18.5/703)*(Math.pow(heightImp, 2))).toFixed(1)}lbs and ${Number((24.9/703)*(Math.pow(heightImp, 2))).toFixed(1)}lbs`;
        BMIdescription.innerHTML = `
        A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a 
        healthy weight may lower your chances of experiencing health issues later on, 
        such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced 
        fat and sugar content, incorporating ample fruits and vegetables. Additionally, 
        strive for regular physical activity, ideally about 30 minutes daily for 
        five days a week.
        `;
      } else if(BMInumber >= 25 && BMInumber <=29.9) {
        classificaton.innerHTML = "overweight";
        weightRange.innerHTML = `${Number((25/703)*(Math.pow(heightImp, 2))).toFixed(1)}lbs and ${Number((29.9/703)*(Math.pow(heightImp, 2))).toFixed(1)}lbs`;
        BMIdescription.innerHTML = `
        A BMI range of 25 to 29.9 is considered 'overweight.' Reducing 
        weight may lower your chances of experiencing health issues later on, 
        such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced 
        fat and sugar content, incorporating ample fruits and vegetables. Additionally, 
        strive for regular physical activity, ideally about 30 minutes daily for 
        five days a week.
        `;
      } else if(BMInumber >= 30) {
        classificaton.innerHTML = "obese";
        weightRange.innerHTML = `${Number((30/703)*(Math.pow(heightImp, 2))).toFixed(1)}lbs`;
        BMIdescription.innerHTML = `
        A BMI of over 30 is considered 'obese.' Reducing
        weight may lower your chances of experiencing health issues later on, 
        such as type 2 diabetes. Aim for a nutritious diet with reduced 
        fat and sugar content, incorporating ample fruits and vegetables. Additionally, 
        strive for regular physical activity, ideally about 30 minutes daily for 
        five days a week.
        `;
      } 
      console.log(weightImp)
      console.log(heightImp)
   }
    resultsEmpty.classList.add("hidden");
    resultsFilled.classList.remove("hidden");
  }
});