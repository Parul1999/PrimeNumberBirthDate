const readLineSync = require('readline-sync');
const chalk = require('chalk')

const userName = readLineSync.question(chalk.yellowBright("Hey , What's your name?\n"));

var day=0 ; 
const birthDate = readLineSync.question(chalk.yellowBright( userName.toUpperCase() +" , What's your birth-date ? (dd-mm)\n"))
var birthDateArray = birthDate.split('-');
  if
  (
    (birthDateArray !=undefined && birthDateArray.length ==2)
     &&
    (birthDateArray[0] != undefined && 
     birthDateArray[1] != undefined )
      &&
    (birthDateArray[0].length==2 && birthDateArray[0]>0 && birthDateArray[0]<=31  
    &&(birthDateArray[0]>0 && birthDateArray[1].length==2 && birthDateArray[1]<=12) )
  )
  {
     day = birthDateArray[0];
     let flag = 0;

     for( var i = 2 ; i<day/2 ;i++)
     {
       if(day % i ==0)
       {
         flag = 1;
         break;
       }
     }
     if(flag !=1)
     {
        console.log(chalk.greenBright("CONGRATULATIONS  !! , The date on which you were born is A PRIME NUMBER"))
     }
     else
     {
       console.log(chalk.greenBright("OH !! , The date on which you were born is not A PRIME NUMBER"))
     }
  }
  else if(birthDateArray[0] == 1|| birthDateArray[0] ==01){
      console.log(chalk.greenBright("CONGRATULATIONS  !! , The date on which you were born is A PRIME NUMBER"))
  }
  else
  {
     console.log(chalk.redBright("OH !! , Please Enter a valid date ,as asked"))
  }