class Student {
    name = ""
    email = ""
    dob = ""
    score = 0

    constructor (nama: string, surel: string, tanggal: string, nilai: number) {
        this.name = nama
        this.email = surel
        this.dob = tanggal
        this.score = nilai
    }
    getAge() {
        const now = new Date()
        const date2 = new Date(this.dob)
        const diff = now.getTime() - date2.getTime()

        return Math.floor(diff/ (24 * 60 * 60 * 1000) / 365)
    }

}
const studentOne = new Student("Andi", "andi@gmail.com", "2002-01-01", 80);
const studentThree = new Student("Caca", "caca@gmail.com", "1998-01-01", 90);
const studentTwo = new Student("Budi", "budi@gmail.com", "2000-01-01", 85);

const arrStudent = [studentOne, studentTwo, studentThree]

function calculate(arr: Student[]) {
    const dataScore = arr.map((item) => item.score).sort((a, b) => a -b)
    const dataAge = arr.map((item) => item.getAge()).sort((a, b) => a -b)

    return {
        score: {
            lowest: dataScore[0],
            highest: dataScore[dataScore.length-1],
            average: dataScore.reduce((a, b) => a + b) / dataScore.length
        },
        age: {
            lowest: dataAge[0],
            highest: dataAge[dataAge.length-1],
            average: dataAge.reduce((a, b) => a + b) / dataAge.length
        }
    }
}

console.log(calculate(arrStudent));


//     getAge(): number {
//         const birthDate = new Date (this.dob)
//         const currentDate = new Date

//         let age = currentDate.getFullYear() - birthDate.getFullYear();
//         let monthDiff = currentDate.getMonth() - birthDate.getMonth();
//         let dayDiff = currentDate.getDay() - birthDate.getDay();

//         if (monthDiff < 0 || monthDiff === 0 && dayDiff < 0){
//             age--;
//         }
 
//         return age;
//     }
// }

// function calculateStudentStatistics(students: Student[]) {
//     if (students.length === 0) return null;
  
//     let totalScore = 0;
//     let totalAge = 0;
  
//     let highestScore = students[0].score;
//     let lowestScore = students[0].score;
//     let highestAge = students[0].getAge();
//     let lowestAge = students[0].getAge();
  
//     // Loop untuk menghitung total dan menemukan nilai tertinggi/terendah
//     for (const student of students) {
//       const studentScore = student.score;
//       const studentAge = student.getAge();
  
//       // Cek skor tertinggi dan terendah
//       if (studentScore > highestScore) highestScore = studentScore;
//       if (studentScore < lowestScore) lowestScore = studentScore;
  
//       // Cek umur tertinggi dan terendah
//       if (studentAge > highestAge) highestAge = studentAge;
//       if (studentAge < lowestAge) lowestAge = studentAge;
  
//       // Tambahkan total untuk skor dan usia
//       totalScore += studentScore;
//       totalAge += studentAge;
//     }
  
//     const averageScore = totalScore / students.length;
//     const averageAge = totalAge / students.length;
  
//     return {
//       score: {
//         highest: highestScore,
//         lowest: lowestScore,
//         average: averageScore,
//       },
//       age: {
//         highest: highestAge,
//         lowest: lowestAge,
//         average: averageAge,
//       },
//     };
//   }
  
//   const studentOne = new Student("Andi", "andi@gmail.com", "2002-01-01", 80);
//   const studentTwo = new Student("Budi", "budi@gmail.com", "2000-01-01", 85);
//   const studentThree = new Student("Caca", "caca@gmail.com", "1998-01-01", 90);
  
//   const arrStudent = [studentOne, studentTwo, studentThree];
  
//   const statistics = calculateStudentStatistics(arrStudent);
//   console.log(statistics);