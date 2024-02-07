const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault()

    if (nameInput.value === '' || emailInput === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please fill all'

        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(` ${nameInput.value} : ${emailInput.value} `))

        userList.appendChild(li)

        nameInput.value = '';
        emailInput.value = '';
    }
}


function changeBody(x) {
    var body = document.querySelector('body');
    body.style.backgroundColor = x.value
}
function changeHeading(x) {
    var header = document.querySelector('header');
    header.style.backgroundColor = x.value
}
function changeForm(x) {
    var form = document.querySelector('#my-form');
    form.style.backgroundColor = x.value
}
