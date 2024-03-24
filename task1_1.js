
let year = 1986
let leapyear;

switch(true){
case year % 4 !=0 :
leapyear = 'not leap year';

    break;

case year % 4 ==0 && year % 100 !=0 :
leapyear = 'leap year';

    break;

case year % 4 ==0 && year % 100 ==0 && year % 400 !=0 :
leapyear = 'not leap year';

    break;

case year % 4 ==0 && year % 100 ==0 && year % 400 ==0 :
leapyear = 'leap year';

    break;
}

console.log(leapyear);