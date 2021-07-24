/* a function that matches if a string starts with a vowel and ends with the same vowel it started with
   returns a boolean
*/

function vowelChecker(mystring){
    //checks first is the passed argument is a string
    if(typeof mystring !== "string"){
        return "passed Argument is not a String";
    }
    const regex = /^([aeiou])(\w+)\1$/;
    //the regex above matches any characteres in character set above
    //has arbitraty large characters in between
    //uses backward reference to make start character be the end character

    return regex.test(mystring);
}
