// לרה חורי 211565445
// אחמד זובידאת 
////////////// STRING////////////////////
////////////// Task1///////////////////////


// let name = "Mary ";
// let activity = "drink tea";
// let bio = "Our guest " + name + activity + ".";
// console.log(bio.length); 
/////// 25 

////////////// Task2///////////////////////
// const str =
//   "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
// let index = 4; // נניח שזה המספר שהמשתמש הזין

// console.log("char #" + index + ' is: "' + str[index] + '"');

////////////// Task3///////////////////////
// let input = "hello"; // או תכניסי prompt('הכנס מחרוזת') בדפדפן
// let lastChar = input[input.length - 1];
// let beforeLastChar = input[input.length - 2];

// console.log("התו האחרון הוא: " + lastChar);
// console.log("התו שלפני האחרון הוא: " + beforeLastChar);

////////////// Task4///////////////////////
// let str = "abcde";
// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }

// console.log(reversed); // תוצאה: "edcba"

////////////// Task5///////////////////////
// let str = "js";
// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }

// reversed = reversed.toUpperCase();

// console.log(reversed); // תוצאה: "SJ"

////////////// Task6///////////////////////
// const str =
//   "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

// let search = "reader"; // כאן אפשר להחליף למה שהמשתמש מזין

// if (str.includes(search)) {
//   console.log("המחרוזת נמצאה!");
// } else {
//   console.log("המחרוזת לא נמצאה.");
// }

////////////// Task7///////////////////////
// let str = '1-2-3-4-5';
// let newStr = str.replace(/-/g, '.');

// console.log(newStr); // התוצאה: "1.2.3.4.5"

////////////// Task8///////////////////////
// let str = '1-2-3-4-5';
// let newStr = str.replaceAll('-', '.');

// console.log(newStr); // התוצאה: "1.2.3.4.5

////////////// Task9///////////////////////
// const str = 'sdfwe';
// console.log(str.substring(4, 2)); // fw

////////////// Task10///////////////////////
// const str = "I'm learning javascript!";
// const learning1 = str.slice(4, 13);
// const learning2 = str.substring(4, 13);
// const learning3 = str.substr(4, 8);

// const javascript1 = str.slice(13, 23);
// const javascript2 = str.substring(13, 23);
// const javascript3 = str.substr(13, 10); 

// console.log(learning1);     // learning
// console.log(learning2);     // learning
// console.log(learning3);     // learning

// console.log(javascript1);   // javascript
// console.log(javascript2);   // javascript
// console.log(javascript3);   // javascript

////////////// Task11///////////////////////
// const str = "http://www.notion.so/String-82...";

// if (str.indexOf("http://") === 0) {
//   console.log("המחרוזת מתחילה ב-http://");
// } else {
//   console.log("המחרוזת לא מתחילה ב-http://");
// }
// המחרוזת מתחילה ב-http://

////////////// Task12///////////////////////
// const str = "https://www.notion.html";
// const suffix = ".html";

// if (str.indexOf(suffix) === str.length - suffix.length) {
//   console.log("המחרוזת מסתיימת ב-.html");
// } else {
//   console.log("המחרוזת לא מסתיימת ב-.html");
// }
//המחרוזת מסתיימת ב-.html

////////////// Task13///////////////////////
// const str = 'ab cd cd cd ef';

// console.log(str.lastIndexOf('cd'));     // 9
// console.log(str.lastIndexOf('cd', 8));  // 6

////////////// Task14///////////////////////
// const str = "abcde";
// console.log(str.startsWith('abc'));     // true
// console.log(str.startsWith('xxx'));     // false
// console.log(str.startsWith('bc', 1));   // true

////////////// Task15///////////////////////
// const str = "abcde";
// console.log(str.endsWith('cde'));   // true
// console.log(str.endsWith('xxx'));   // false
// console.log(str.endsWith('bc', 3)); // true

////////////// Task16///////////////////////
// let str = "ab-cd-ef";
// console.log(str.split(' - ')); // ['ab-cd-ef']
// console.log(str.split(' - ', 2)); // ['ab-cd-ef']
// console.log(str.split(' ')); // ['ab-cd-ef']
// console.log(str.split(' ', 3)); // ['ab-cd-ef']

// let str2 = "12345";
// console.log(str2.split(' ')); // ['12345']


