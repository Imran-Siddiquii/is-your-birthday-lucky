const dateOfBirth = document.querySelector("#input-date");
const userInput = document.querySelector("#input-number");
const checkBtn = document.querySelector("#button");
const output = document.querySelector('.output')
output.style.display="none"

const birthLucky = () => {
output.style.display="inline-block"

    const birthDate = dateOfBirth.value;
    const sum = calculate(birthDate) //process to convert date into number and add that numbers

    console.log(sum) //add number
    const userInputNumber = userInput.value; // reference

    console.log(userInputNumber); //testing

    function checkBirthday(sum, userInputNumber) { // process check birthday is lucky or not
             if (sum == 0) {
            output.innerText = "Please Select A Data ";
            console.log("Plase enter date")
        }
        else if (userInputNumber == 0) {
            output.innerText = "Please Enter Your number";
        }
        else {
            if (sum % userInputNumber == 0) {
                output.innerText ="Yayy!! Your birthday is lucky 🥳 ";
            } else {
                output.innerText ="Your birthday is not lucky 😟";
            }
        }
    }

    checkBirthday(sum, userInputNumber); //calling function
}
function calculate(birthDate) {
    console.log(birthDate)  // testing
    const dob = birthDate.replaceAll("-", ""); //removing hypen
    let sum = 0;
    console.log(dob);
    for (var i = 0; i < dob.length; i++) {  //loop for taking string one by one
        // console.log(typeof dob);
        sum = sum + Number(dob.charAt(i)); //convert string into number using type casting
    }
    return sum;  //return sum number
}

checkBtn.addEventListener('click', birthLucky)