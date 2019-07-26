const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const BACON = [
  'AAAAA',
  'AAAAB',
  'AAABA',
  'AAABB',
  'AABAA',
  'AABAB',
  'AABBA',
  'AABBB',
  'ABAAA',
  'ABAAB',
  'ABABA',
  'ABABB',
  'ABBAA',
  'ABBAB',
  'ABBBA',
  'ABBBB',
  'BAAAA',
  'BAAAB',
  'BAABA',
  'BAABB',
  'BABAA',
  'BABAB',
  'BABBA',
  'BABBB',
  'BBAAA',
  'BBAAB'
];

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

exports.BACON_ALPHABET = BACON;
exports.ALPHABET = ALPHABET;

exports.gcd = gcd;
exports.coprime = (a, b) => gcd(a, b) === 1;

exports._mirror = code => 25 - code;

exports.bacon = {
  encrypt(input) {
    let alpha = ALPHABET.split('');
    let plain = input
      .toUpperCase()
      .replace(/[^A-Z\s]/g, '')
      .split('');
    return plain
      .map(char => {
        if (char === ' ') return ' ';
        let i = alpha.indexOf(char);
        return BACON[i];
      })
      .join('');
  },
  decrypt(input) {
    let out = '';
    let alpha = ALPHABET.split('');
    return input
      .match(/[AB]{5}|\s/g)
      .map(char => {
        if (char === ' ') return char;
        let i = BACON.indexOf(char);
        return alpha[i];
      })
      .join('');
  }
};

exports.mmi = (a, b) => {
  return (Math.pow(a, -1) * a) % b;
};
