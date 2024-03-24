
let year = 2023

if (year % 4 !=0) {
    console.log('not leap year');
}

else if (year % 4 ==0 && year % 100 !=0) {
        console.log('leap year');
    }

else if (year % 4 ==0 && year % 100 ==0 && year % 400 !=0) {
    console.log('not leap year');
}

else if (year % 4 ==0 && year % 100 ==0 && year % 400 ==0) {
    console.log('leap year');
}