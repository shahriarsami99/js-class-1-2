// function sum(){
  //  let a = 20;
  //  let b = 30;
  //  document.write(a+b);
//}
// sum();

// function printUserName(){
 //   document.write(`Sami`);
//}
//printUserName();

//function printUserName(username){
   // document.write(username);

//}
//printUserName(`Rakib`);
//printUserName(`Sami`);
//printUserName(`Noyon`);

//let printUserName = (username)=>{
   // document.write(username);
//}
//printUserName(`Syed`);
//printUserName(`Omer`);
//printUserName(`Shahriar`);

//let num1 = Number(prompt());
//let num2 = Number(prompt());
//document.write(num1+num2);

let num = 101;
if (num >= 80 && num <= 100) {
    document.write("A+");
} else if (num >= 70 && num < 80) {
    document.write ("A");
} else if (num => 60 && num < 70) {
    document.write("A-");
} else if(num >= 50 && < 60){
    document.write ("B");

} else if (num >= 40 && < 50) {
    document.write("C");
} else if (num >= 33 && < 40){
    document.write("D");

} else if(num >= 0 && < 33){
    document.write("F");
}else{
    document.write("Invalid Number");
}
