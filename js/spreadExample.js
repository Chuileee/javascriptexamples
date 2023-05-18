function getStudents(firstStudent,secondStudent,thirdStudent){
    console.log("student 1: " +firstStudent);
    console.log("student 2: " +secondStudent);
    console.log("student 3: " +thirdStudent);
} 

getStudents(...["AA","BB","CC"]);