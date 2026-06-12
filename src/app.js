
const btnRef = document.getElementById("get-students-btn")
const tbodyRef = document.querySelector("tbody")
const formRef = document.getElementById("add-student-form")
let currentId = null

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
    isEnrolled:event.currentTarget.elements[5].checked
}
if(currentId){
    updateStudent(currentId, data).then(getStudents).then(res=>createStudents(res)).then(()=>{
        currentId === null
        formRef.reset()
    })
    return
}

addStudent(data).then(getStudents).then(res=>createStudents(res))
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

function addStudent(data) {
    const options = {

method: "POST",

body: JSON.stringify(data),

headers: {

"Content-Type": "application/json; charset=UTF-8",

},

};

return fetch("http://localhost:3000/students", options)

}




// Функція для оновлення студента

function updateStudent(id, data) {
const options = {

method: "PATCH",

body: JSON.stringify(data),

headers: {

"Content-Type": "application/json; charset=UTF-8",

},

};
return fetch(`http://localhost:3000/students/${id}`, options)

 }



// Функція для видалення студента

function deleteStudent(id) {
    const options = {
        method: "DELETE"
    }
    return fetch(`http://localhost:3000/students/${id}`, options)
    
}

tbodyRef.addEventListener("click",event=>{

    const action = event.target.dataset.action
    if(!action){
        return
    }
        const tr = event.target.closest("tr")
        const id = tr.id

        if(action === "delete"){
             deleteStudent(id).then(getStudents).then(res=>createStudents(res))
        }

        if(action === "edit"){
            currentId = id
            console.log(currentId);
            
            const td = tr.querySelectorAll("td");
          document.getElementById("name").value = td[1].textContent;
document.getElementById("age").value = td[2].textContent;
document.getElementById("course").value = td[3].textContent;
document.getElementById("skills").value = td[4].textContent;
document.getElementById("email").value = td[5].textContent;
document.getElementById("isEnrolled").checked =
    td[6].textContent === "true";
        }
        
        
})