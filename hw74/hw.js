(function () {
    'use strict';

    class Student {

        constructor(firstName, lastName, age, grade) {
            this.first = firstName;
            this.last = lastName;
            this.age = age;
            this.grade = grade;
        }
    }

    const students = [];

    students[0] = new Student('abe', 'smith', 18, 95);
    students[1] = new Student('joe', 'trump', 21, 87);
    students[2] = new Student('danny', 'harris', 15, 93);
    students[3] = new Student('jim', 'pence', 22, 100);

    console.log(students);

    function printStudents(inOrder, ...args) {
        for (let i = 0; i < args.length; i++) {
            if (inOrder) {
                console.log(`${args[i].first} ${args[i].last} ${args[i].age} ${args[i].grade}%`);
            }
            console.log(`${args[i].last} ${args[i].first} ${args[i].age} ${args[i].grade}%`);
        }
    }
    printStudents(false, ...students);

    function swapStudentName(student) {
        let { last, first, ...rest } = student;
        
        console.log(first, last, rest);
        const newStudent = new Student({ last, first, ...rest });

        return {
            last, first, ...rest  
        };
    }


    console.log(swapStudentName(students[0]));



}());