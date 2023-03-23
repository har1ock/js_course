//---1ST TASK---
function determines_the_age() {
    const year = 2023;
    const year_of_birth = prompt("Enter your year of birth:");
    let age = year - year_of_birth; 
    alert(`You are ${age} years old`);
}
determines_the_age();

//----2nd task----
function circle(){
    const radius = prompt("Enter the radius of circle:");

}

//---3rd task---
function the_user_speed() {
    const distance = prompt("Enter distance between two cities in km");
    const time = prompt("Enter time you have to spend two do this distance:");
    let speed = distance / time; 
    alert(`You have to drive  ${speed} kilometers per hour`);
}
the_user_speed();

//---4th task---
function converter_dollar_to_euro() {
    const course = 0.92;
    const amount_of_dollars = prompt("Enter the amount of dollars you want to change:");
    let euro_you_can_recive = amount_of_dollars * course;
    alert(`You can recive ${euro_you_can_recive} euro`);

}
converter_dollar_to_euro()

//---5tg tash---
function how_many_programs(){
    const file_size = 0.82;
    const flash_drive_capacity = prompt("Enter your flash drive capasity:");
    let amount_of_files = parseInt(flash_drive_capacity/file_size);
    alert(`Your flash drive can storage ${amount_of_files} files `);
}
how_many_programs()
