// Mini Projects

let students=[
    {id:1, name:"Piyush", age:22, department: "CS"},
    {id:2, name:"Rohit", age:23, department: "IT"},

]

function addStudent(name, age, department){
    let NewID= students.length>0 ? 
    students[students.length-1].id+1 :1;
    let newStudent={
        id: NewID, 
        name:name, 
        age:age, 
        department:department};
    students.push(newStudent);
    console.log("Students added successfully.");
}

addStudent("Das", 24, "CS");
console.log(students);

function getAll(){
    for (const student of students){
        console.log(student);
    }
}
getAll();

function findStudent(id){
    let foundStudent= null;

    for (const student of students){
        if (student.id==id){
            foundStudent= student;
            break;
        }
    }
    return foundStudent;
}

let foundStudent = findStudent(2);
if (foundStudent){
    console.log("Student found:", foundStudent);
} else {
    console.log("Student not found.");
}


function deleteStudent(id){

    let targetStudent =null; 

    for (let i=0; i<students.length; i++){
        if (students[i].id==id){
            foundStudent= i;
            break;
        }
}
if (targetStudent !== -1){
    let deletedStudent = students.splice(targetStudent, 1);
    console.log(`deleted ${deletedStudent[0].name} successfully.`);
} else {
    console.log("Student not found.");
}
}
deleteStudent(1);
getAll();