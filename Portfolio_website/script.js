// const name = document.getElementById('name');
// const password = document.getElementById('password');
// const form = document.getElementById('form');
// const errorElement = document.getElementById('error');

// form.addEventListener('submit', (e) => {
//     let messages = []
//     if (name.value === '' || name.value == null) {
//         messages.push('Name is required');
//     }

//     if (password.length <= 6) {
//         messages.push('Password must be more than 6 characters');
//     }

//     if (password.value.length >= 20) {
//         messages.push('Password must be less than 20 characters');
//     }

//     if (password.value === 'password') {
//         messages.push('Password cannot be password');
//     }

//     if (messages.length > 0) {
//         e.preventDefault()
//         errorElement.innerText = messages.join(', ');
//     }
// });

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;