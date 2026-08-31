let students = {
    name:"piyush",
    id:102,
    marks:{
        bangla:75,
        english:90,
        math:90

    }

};
let totalMarks=0;
let totalSubjects=0;
for (const subj in students.marks){
totalMarks+=students.marks[subj];
totalSubjects+=students.marks[subj]
}

console.log(totalSubjects);
let avg=totalMarks/totalSubjects;
console.log(avg)