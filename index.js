// Code your solutions in this file
function writeCards(array,event){
    let NewArray = [];
    for (let i = 0; i < array.length; i++){
        NewArray.push(`Thank you , ${array[i]} for the Wonderful ${event} gift!`);
    }
    return NewArray
}
writeCards(["Guadalupe", "Ollie", "Aki"],"suprise")

function countDown(num){

    while (num >= 0 ){
        console.log(num);
        num --; 
    }

}
countDown(10)
countDown(4)