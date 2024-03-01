function checkValidMarks(){
    let marks = parseFloat(document.getElementById("marksInput").value);
    let error = document.querySelector("#marksInputError");
    if(isNaN(marks)){
        error.innerText = "Please enter a valid number";
    }
    else if(marks < 0){
        error.innerText = "Please enter a positive value (0-100)";
    }
    else if(marks>100){
        error.innerText = "Please enter a value between 0 and 100";
    }
    else if(marks>=0 && marks<101){
        gradeConverter();
        error.innerText = "";
    }
}

function gradeConverter(){
    let marks = parseFloat(document.getElementById("marksInput").value);
    let grade = document.getElementById("grade");
    if(marks>90){
        grade.innerText = " Grade: A";
    }
    else if(marks>80){
        grade.innerText = "Grade: B";
    }
    else if(marks>70){
        grade.innerText = "Grade: C";
    }
    else if(marks>50){
        grade.innerText = "Grade: D";
    }    
    else{
        grade.innerText = "Grade: F";
    }
}