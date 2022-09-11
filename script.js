 const fs = require('fs');
console.log(typeof fs);

fs.writeFile('./hello.txt', 'Hello!', () => {
    console.log('done creating file');
});


// let daysOfWeek = require('./days-of-week');

// let day = daysOfWeek.getWeekday(5);
// console.log(day);

// const request = require('request');
// request(
// 	'http://jsonplaceholder.typicode.com/users',
// 	function(err, res, body) {
// 		console.log(body);
// 	}
// );

// const random = require('./utilities/random');
// for (let i = 0; i < 10; i++) {
//     console.log( random(100, 200) );
// }

const circle = require('./utilities/circle');

// console.log(circle.area(50));

console.log(circle.circumference(75));