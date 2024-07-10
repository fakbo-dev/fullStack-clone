// Data structure: a data structure is a specific way of organizing, storing and accessing data.
// Algorithm: a set of instructions that tells a computer how to do something, or you can also say step-by-step solutions of the problem is called algorithms

// Problem 1

// Create an Array with 5 students names, after that create a function takes 2 parameters (allStudents, studentName) iterate over all students and find that specific user "studentName";


//Step 1 create an array of 5 students
const studentsName: string[] = ["Virgie Graham", "Catherine Fox", "Bessie Brewer", "Timothy Bell", "Hattie Griffin"];


//Step 2 create a function takes 2 parameters

function findStudents(allStudents: string[], studentName: string): void {

    // step 3 iterate over all student

    for (let i = 0; i < allStudents.length; i++) {
        // step 4 find specific user "studentName"
        let index = allStudents[i];

        if (index === studentName) {
            console.log(`Student Found:${index}`)
            break;
        }
        console.log(`Student Not found`);
    }
}


findStudents(studentsName, "Hattie Griffin");