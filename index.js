require('dotenv').config();

const myName = process.env.MY_NAME;
const myCity = process.env.MY_CITY;
const myLanguage = process.env.MY_LANGUAGE;

const message = `I am ${myName}, wilder in ${myCity}, and I love ${myLanguage}.`;

console.log(message);