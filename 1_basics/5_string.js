// let name = "Meet"
// let surname = "Kothari"

// console.log(`My name is ${name} ${surname}`) // string interpolation

// const str = new String("Hello")

// console.log(str);
// console.log(str.__proto__); // {}
// console.log(str.length);

// console.log(str.charAt(1));
// console.log(str.indexOf('l'));

// const newStr = str.substring(2,4)
// console.log(newStr);

// const anotherStr = str.slice(-5,2)
// console.log(anotherStr);

// const str1 = "    Meet   Kothari     "
// console.log(str1.trim());

// const str2 = String("2+2")
// const str3 = new String("2+2")

// console.log(str2);
// console.log(str3);

// console.log(eval(str2));
// console.log(str2.valueOf());
// console.log(eval(str3.valueOf()));

// const str4 = "This is Rep content"
// console.log(str4.replace("Rep","Updated"));
// console.log(str4);
// console.log(str4.includes("Rep")); // returns True/false

// console.log(str4.at(-1)); // can take -ve index
// console.log(str4.charAt(1)); // can't allow -ve index

// str4[2] = "A" // No error, But not work
// console.log(str4);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13); // NaN => 0, -ve => backward
// let part = text.substring(7, 13); // NaN, -ve => 0
// console.log(part);

// let str5 = "Apple, Banana, Kiwi";
// let part = str5.substring(7, 8); // 7th index to 8th index
// console.log(part);

// let str5 = "Apple, Banana, Kiwi";
// let part = str5.substr(7, 10); // 7th index to next 10 index
// console.log(part);

// const str4 = "My name is Meet"
// const new_str4 = str4.replace("Meet","Kothari"); // replace Meet with Kothari
// console.log(str4);
// console.log(new_str4);

// let text = "5";
// let padded = text.padStart(4,"x");
// console.log(padded);

// let text = "5";
// let padded = text.padEnd(4,"x");
// console.log(padded);

// let text = "Hello world!";
// let result = text.repeat(2);
// console.log(result);

// let text = "Please visit Microsoft!";
// let newText = text.replace("MICROSOFT", "W3Schools"); // Not Replace as replace() is case-sensitive
// console.log(newText);

// let text = "Please visit icrosoft!";
// let newText = text.replace(/MICROSOFT/i, "W3Schools"); // RE /i for insensitive
// console.log(newText);

// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools"); // Only replace first Microsoft
// console.log(newText);

// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/g, "W3Schools"); // RE /g for global flag
// console.log(newText);

// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replaceAll("Microsoft", "W3Schools"); // replace all Microsoft
// console.log(newText);

// let text = "I love cats. Cats are very easy to love. Cats are very popular";
// text = text.replaceAll(/Cats/g,"Dogs");
// text = text.replaceAll(/cats/g,"dogs");
// console.log(text);

// let text = "a,b,c,d,e,f";
// const myArray = text.split(","); // split on ,(comma)
// console.log(myArray);

let text = "a,b,c,d,e,f";
const myArray = text.split(""); // split each character
console.log(myArray);