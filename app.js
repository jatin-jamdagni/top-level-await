


const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
let data = await response.json();
console.log(data);

export default await data;
