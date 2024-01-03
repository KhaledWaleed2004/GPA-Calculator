let add = document.getElementById("add");
let courseCode = document.getElementById("course-code");
let unitLoad = document.getElementById("unit-load");
let grade = document.getElementById("grade");
let tbody = document.getElementById("tbody");
let tfoot = document.getElementById("tfoot");
let table = document.getElementById("table");
let calcGpa = document.getElementById("calc-gpa");
let clear = document.getElementById("clear");
let gpaArry = [];

add.addEventListener("click", () => {
  if (
    courseCode.value === "" ||
    unitLoad.value <= 0 ||
    grade.selectedIndex === 0
  ) {
    alert("Wrong input, check and try again");
  } else {
    let tr = document.createElement("tr");
    let tdCoure = document.createElement("td");
    tdCoure.innerHTML = courseCode.value;
    let tdUnitLoad = document.createElement("td");
    tdUnitLoad.innerHTML = unitLoad.value;
    let tdGrade = document.createElement("td");
    tdGrade.innerHTML = grade.options[grade.selectedIndex].text;

    tr.appendChild(tdCoure);
    tr.appendChild(tdUnitLoad);
    tr.appendChild(tdGrade);
    tbody.appendChild(tr);
    table.classList.remove("display-none");
    calcGpa.classList.remove("display-none");
    clear.classList.remove("display-none");
    gpaArry.push({
      unitLoad: unitLoad.value,
      grade: grade.options[grade.selectedIndex].value,
    });

    courseCode.value = "";
    unitLoad.value = "";
    grade.selectedIndex = "0";
  }
});

calcGpa.addEventListener("click", () => {
  let unitLoad = 0,
    productOfUnitLoad = 0,
    sumOfProductOfUnitLoad = 0;

  gpaArry.forEach((result) => {
    unitLoad += parseInt(result.unitLoad);
    productOfUnitLoad = parseInt(result.unitLoad) * parseInt(result.grade);
    sumOfProductOfUnitLoad += productOfUnitLoad;
  });

  let tr = document.createElement("tr");
  tdTotalUnitLoad = document.createElement("td");
  tdTotalUnitLoad.innerHTML = `Your Total Unit Load is => ${unitLoad}`;
  tdGpa = document.createElement("td");
  let resultOfGpa = ((sumOfProductOfUnitLoad / unitLoad).toFixed(2)) ;
  tdGpa.innerHTML = `Your Gpa is => ${resultOfGpa}`;
  tdGpa.classList.add("gpa-result");

  tr.appendChild(tdTotalUnitLoad);
  tr.appendChild(tdGpa);
  if(tfoot.querySelector('tr') !== null){
    tfoot.querySelector('tr').remove();  
  }
  tfoot.appendChild(tr);
});

clear.addEventListener("click", () =>{
    gpaArry = [];
    tbody.querySelectorAll('*').forEach(child => child.remove());
    
    if(tfoot.querySelector('tr') !== null){
      tfoot.querySelector('tr').remove();  
    }
    table.classList.add('display-none')
    calcGpa.classList.add('display-none')
    clear.classList.add('display-none')
})