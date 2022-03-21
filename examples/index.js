// run yarn and yarn build before run this example
const { GeneratePerson } = require('../dist');

const person = new GeneratePerson('Will', 10);

console.log(person);
