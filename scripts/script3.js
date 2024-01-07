let date = new Date(); 

let hour = date.getHours(); 
let minutes = date.getMinutes();
let seconds = date.getSeconds(); 

if (minutes < 10 && seconds < 10) 
{
minutes = "0" + minutes;

seconds = "0" + seconds;
}

document.write("Current time: " + hour + ":" + minutes + ":" + seconds)