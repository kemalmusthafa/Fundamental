// Create a function to merge two array of student data and remove duplicate data
// ● Student data : name & email
// ● Example : 
// Array1 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  }, 
// { name: ‘Student 2’, email : ‘student2@mail.com’  }
// ]
// Array2 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  }, 
// { name: ‘Student 3’, email : ‘student3@mail.com’  }
// ]
// ● Result : 
// ArrayResult → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  }, 
// { name: ‘Student 2’, email : ‘student2@mail.com’  },
// { name: ‘Student 3’, email : ‘student3@mail.com’  }

interface StudentData {
    name: string
    email: string
}

const arrOne: StudentData[] = [
    {name : "Student 1", email: "student1@gmail.com"},
    {name : "Student 2", email: "student2@gmail.com"}
]
const arrTwo: StudentData[] = [
    {name : "Student 1", email: "student1@gmail.com"},
    {name : "Student 3", email: "student3@gmail.com"},
    {name : "Student 4", email: "student4@gmail.com"}
]

function mergeArr (arrOne: StudentData[], arrTwo: StudentData[]) {
    const result: StudentData[] = arrOne
    
    for (let item of arrTwo) {
        const idx = result.findIndex((val) =>val.name == item.name && val.email == item.email)
        if (idx == -1) result.push(item)
    }
    return result
}

console.log(mergeArr(arrOne,arrTwo));

