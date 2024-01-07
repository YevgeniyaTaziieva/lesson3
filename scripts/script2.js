function line(string) 
{
return string.length;
}

let any = prompt("Please enter any word...");

let number = line(any); 

document.write("You entered a word whose number of characters is equal to " + number);