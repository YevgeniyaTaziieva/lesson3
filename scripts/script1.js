let FirstName = prompt('write your Name');
let LastName = prompt('write your LastName');
let SecondName = prompt('write your SecondName');

function showMessage() {
    let showMessage = FirstName + " " + LastName + " " +  SecondName;
    document.write(showMessage);
  }
  
  showMessage();