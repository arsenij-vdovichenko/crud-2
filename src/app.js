
const btnRef = document.getElementById("get-students-btn")
const tbodyRef = document.querySelector("tbody")
const formRef = document.getElementById("add-student-form")


btnRef.addEventListener("click",()=>{
getStudents().then((res)=>{
    createStudents(res)
})
})



function createStudents(array){
    const item = array.map((students)=>{
        return`<tr id="${students.id}">

        <td>${students.id}</td>

          <td>${students.name}</td>

          <td>${students.age}</td>

          <td>${students.course}</td>

          <td>${students.skills}</td>

          <td>${students.email}</td>

          <td>${students.isEnrolled}</td>

          <td>
            <button type="button" data-action="edit">edit</button>
            <button type="button" data-action="delete">delete</button>
          </td>

        </tr>
`
    }).join("")
    tbodyRef.innerHTML = item
    
}

formRef.addEventListener("submit", (event)=>{
event.preventDefault()



const data = {
    name:event.currentTarget.elements[0].value,
    age:event.currentTarget.elements[1].value,
    course:event.currentTarget.elements[2].value,
    skills:event.currentTarget.elements[3].value,
    email:event.currentTarget.elements[4].value,
    isEnrolled:event.currentTarget.elements[5].value


}
console.log(data);
formRef.reset()
})

// Функція для отримання всіх студентів

function getStudents() {
return fetch(`http://localhost:3000/students`).then((res)=>res.json())}






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