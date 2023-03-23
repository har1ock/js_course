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

//---additional tasks---
//---1st ad task---
function converter_km_to_milles(){
    const correlation = 0.621371;
    const how_many_kms = prompt("Enter how many kilometers you want to :");
    let miles = how_many_kms * correlation;
    alert(`The ${how_many_kms}km will be equal to ${miles}miles`)
}
converter_km_to_milles()

//---2nd ad task---
function how_many_time_to_end_of_a_day(){
    const user_hours = prompt("Enter what time now in hours")
    const user_minutes = prompt("Enter what time now in minutes")
    if (user_minutes){
        let current_minutes = 60 - user_minutes;
        let current_hours = 23- user_hours;
        alert(`Has left ${current_hours} hours and ${current_minutes} minutes`)
    }else{
        let current_hours = 24 - user_hours;
        let current_minutes = 00;
        alert(`Has left ${current_hours} hours and ${current_minutes} minutes`)
    }
}
how_many_time_to_end_of_a_day()
