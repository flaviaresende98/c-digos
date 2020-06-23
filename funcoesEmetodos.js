const classA = [// array de class A
    {
        name: "Flávia",
        grade: 7.5
    },
    {
        name: "Daniel",
        grade: 3.2
    },
    {
        name: "Maria Clara",
        grade: 7.9
    },
    {
        name: 'Daniel',
        grade: 1.2
    }
]
const classB = [// array de class B
    {
        name: "Eliane",
        grade: 8.8
    },
    {
        name: "Sérgio",
        grade: 7.4
    },
    {
        name: "José",
        grade: 6.9
    },
    {
        name: "Novo student",
        grade: 5
    }
]
function calculateAvarage(students) {
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade

    }
    const avarage = sum / students.length
    return avarage
}


function sendMessage(avarage, studentsClass) {
    if (avarage > 5) {
        console.log(` ${studentsClass} avarage: ${avarage}. Congratulations!`)
    } else {
        console.log(` ${studentsClass} avarage: ${avarage} is not good enough!`)
    }
}


function markAsFlunked(student) {
    student.flunked = false;
    if (student.grade < 5) {
        student.flunked = true;
    }
}

function sendMessageflunked(student) {
    if (student.flunked) {
        console.log(`O student ${student.name} flunked!`)
    }
}

function studentsflunkeds(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendMessageflunkeds(student)
    }
}

const avarage1 = calculateAvarage(classA)
const avarage2 = calculateAvarage(classB)


sendMessage(avarage1, `class A`)
sendMessage(avarage2,`class B`)

sendMessageflunked(classA)
sendMessageflunked(classB)