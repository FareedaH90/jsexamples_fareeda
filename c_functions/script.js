
/* 
  ftnSalutation is a conventional JS function
  it returns an array of strings where each
  element (or index) of the array consists
  of the salutations to pupulate inputSelect
  found in index.html
*/
function ftnSalutation(){
<<<<<<< HEAD
    return new Array("Mr.", "Mrs.", "Ms.", "Dr.");
=======
  //  implement your statement(s) here
  return new Array("Mr.", "Mrs.", "Ms.", "Dr.");
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
}

/* 
  ftnSalutation written as an ARROW function
  it uses the passed-in parameters to form
  a greeting to be returned to the function that
  calls it
*/
const ftnGreeting = (salutation, user) => {
<<<<<<< HEAD
    // implement your statement(s) here
    const msg = `Hi, ${salutation} ${user}!`;
    return msg;
};

=======
    //  implement your statement(s) here
    return `Hi, ${salutation} ${user}!`;
}
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710

/*
Complete the challenge statement below
Create the function validateInputs below
Hint: 
- validateInputs accepts two arguments (choice, name)
- name should include a default value name=""
- validateInputs returns false if either choice or name is incorrectly filled
- validateInputs returns true if both choice and name are correctly filled
*/
<<<<<<< HEAD
function validateInputs(choice, name = "") {
    return choice !== "" && name !== "";
}
=======
function validateInputs(choice = "", name = ""){

  return choice !== "" && name !== "";

}
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
