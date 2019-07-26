const utils = require('./utils');

const shift = (input, amt) => {
  if (amt < 0) return shift(input, amt + 26);
  let out = '';
  input.split('').forEach(c => {
    let char = c;

    if (char.match(/[a-z]/i)) {
      char = char.charCodeAt();

      char = String.fromCharCode(
        char >= 65 && char <= 90
          ? ((char - 65 + amt) % 26) + 65
          : ((char - 97 + amt) % 26) + 97
      );
    }

    out += char;
  });

  return out;
};

const mirror = input => {
  let out = input
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('');

  out = out.map(el => {
    let code = el.charCodeAt();

    code = utils._mirror(code - 97) + 97;

    return String.fromCharCode(code);
  });

  return out;
};

const bacon = input => {
  // Mode 0 = Encrypt
  // Mode 1 = Decrypt
  let mode = 0;
  if (
    input.match(/[AB\s]+/) &&
    input.match(/[AB\s]+/)[0].length === input.length
  ) {
    mode = 1;
  }

  if (mode === 0) return utils.bacon.encrypt(input);
  return utils.bacon.decrypt(input);
};

// Sheharyar Naseer - https://sheharyar.me/  ~ Licensed under the MIT License
const affine = require('cipherjs').Affine;

// WIP
// Affine cipher

module.exports = {
  affine,
  bacon,
  mirror,
  shift
};
