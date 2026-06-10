

// Функція для отримання всіх студентів

function getStudents() {
return fetch(`http://localhost:3000/students`).then((res)=>res.json())}


getStudents().then((res)=>{
    console.log(res);
    
})



// Функція для відображення студентів у таблиці

function renderStudents(students) {

 // твій код

 

}



// Функція для додавання нового студента

function addStudent(e) {

 // твій код

  

}



// Функція для оновлення студента

function updateStudent(id) {

 // твій код



 }



// Функція для видалення студента

function deleteStudent(id) {

    // твій код

}