//All other bank codes can be added or be imported from an external JSON file
//TEST bankCode
var bankCode = {
    'firstBank' : '011'
};
//NUBAN Serial Number(dummy) *Don't do this*
var serial = prompt('Put in the Account serial number');

//Make sure Serial Number Number is valid and is a string
if(serial.length !== 9 || typeof serial !== 'string'){
    throw new Error('Serial Number must be equal to 9 and must be a string')
}

//Function to calculate NUBAN code
var calculateNuban = (serial) => {
    serial = (bankCode.firstBank + serial).split('');
    var dictionary = [3,7,3,3,7,3,3,7,3,3,7,3];
    var counter = 0;
    //Calculate Check Digit
    serial.forEach(function(currentValue,index){
        counter += currentValue * dictionary[index];
    });
    counter = 10 - (counter%10);
    counter = (counter == 10) ? 0 : counter;
    //Add check Digit onto NUBAN code
    serial.push(counter);
    //Remove bankCode from NUBAN code
    serial.splice(0,3);
    //Return NUBAN code for dummy account
    return serial.join('');
}
calculateNuban(serial);
