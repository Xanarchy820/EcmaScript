const user = {username: "Xander", age: 19, country: "GT"};
const {username, ...values} = user;
console.log(username);
console.log(values);