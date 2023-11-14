let name = document.getElementById('name')
let age = document.getElementById('age')
let displayName= document.getElementById('displayName')
let displayAge = document.getElementById('displayAge')
let submit = document.getElementById('submit')
let retrive = document.getElementById('retrive')

function submitForm() {
    let user = {}
    user.name = name.value
    user.age = age.value
    localStorage.setItem('user', JSON.stringify(user))
}

function retriveForm() {
    let user = JSON.parse(localStorage.getItem('user'))
    console.log(user);
    displayName.innerHTML = `Name: ${user.name}`
    displayAge.innerHTML = `Age: ${user.age}`
}


submit.addEventListener('click', submitForm)
retrive.addEventListener('click', retriveForm)