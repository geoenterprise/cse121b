let firstName = 'Antonia';
let lastName = 'Francesca';

function fullName(first, last) {
    return `${first} ${last}`;   // or use string concatenation first + ' ' + last (not preferred)
  }
  
const fullName = function (first, last) {
    return `${first} ${last}`;
  }
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
    document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);
