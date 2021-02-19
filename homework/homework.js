let printUser = document.getElementById('print-user');
let printBtn = document.getElementById('button');
let showForm = document.getElementById('show-form');
let tableUsers = document.getElementById('users-list')

// Inputs
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const cityInput = document.getElementById('city');
const countryInput = document.getElementById('country');
const ageInput = document.getElementById('age');
let spouseInput = document.getElementById('spouse'); 


let txtInputs = ([firstNameInput, lastNameInput, ageInput, countryInput, cityInput, spouseInput])

let users = [];
let pets = [];

showForm.style.display = 'block'
function listUsers() {
    
    if(validateInputs([firstNameInput,lastNameInput, ageInput, countryInput, cityInput])) {
        tableUsers.innerHTML += 
        `
        <tr>
                        <td>${getFullName(firstNameInput.value, lastNameInput.value)}</td>
                        <td>${firstNameInput.value}</td>
                        <td>${lastNameInput.value}</td>
                        <td>${ageInput.value}</td>
                        <td>${cityInput.value}</td>
                        <td>${countryInput.value}</td>
                        <td>${isMarried()}</td>
                        <td>${checkBoxesChecked()}</td>
        </tr>
        `
    let newUser = new User(firstNameInput.value, lastNameInput.value, ageInput.value, countryInput.value, cityInput.value, isMarried(), checkBoxesChecked());
    users.push(newUser)
    console.log(users);
    cleanUp(txtInputs);
    uncheckCheckbox();
    } else {
        alert('Check your inputs');
    }
}

const isMarried = () => {
    if (spouseInput.value.length == 0)
    { 
       return spouseInput.value = 'Not married yet';
    }else {
        return spouseInput.value;
    }
}

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function validateInputs(inputs) {
    for(let input of inputs) {
        if(!input.value) {
            return false;
        }
    }
    return true;
}

function cleanUp(inputs) {
    for(let input of inputs) {
        input.value = '';
    }
}

const checkBoxesChecked = () => {
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    for (let i = 0; i < checkboxes.length; i++) {
        pets.push(checkboxes[i].value);
    }
    return pets.join(', ')
}

const uncheckCheckbox = () => {
    let items = document.getElementsByName('pets');
	for(let i=0; i<items.length; i++){
	if(items[i].type=='checkbox')
		items[i].checked=false;
	}
}

printBtn.addEventListener('click', listUsers);

// Models 
function User(firstName, lastName, age, city, country, isMarried, pets) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
    this.country = country;
    this.isMarried = isMarried;
    this.pets = pets;
}

// https://stackoverflow.com/questions/17621515/how-to-show-and-hide-input-fields-based-on-radio-button-selection   