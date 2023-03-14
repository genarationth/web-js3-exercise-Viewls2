let friendName1;
let friendName2;
let friendName3;
let friendYear1;
let friendYear2;
let friendYear3;
// function welcome + friend name
function hiFriend (friendName1,friendName2,friendName3,) {
    console.log('Welcome ' + friendName1+', '+friendName2+', '+friendName3+'.');
}
hiFriend('Pop','Mark','Joe');

// cal friend age
function ageFriend (friendYear1,friendYear2,friendYear3) {
    console.log(2023 - friendYear1);
    console.log(2023 - friendYear2);
    console.log(2023 - friendYear3);
}
ageFriend(1999,1998,1997);

// combine name & age 
function welcomeFriend (friendName1,friendName2,friendName3,friendYear1,friendYear2,friendYear3) {
    console.log(`Welcome ${friendName1}, you are ${friendYear1}. Welcome ${friendName2}, you are ${friendYear2}. Welcome ${friendName3}, you are ${friendYear3}.`);
}
welcomeFriend('Pop','Mark','Joe',1999,1998,1997);