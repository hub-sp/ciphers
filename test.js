const c = require('./index');

console.log(c.affine.encrypt('Hello', 5, 3));
console.log(c.affine.decrypt('MXGGV', 5, 3));
