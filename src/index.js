const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let arr = [];
  let arrStr = [];
  let res = '';
  for (let i = 0; i < expr.length; i += 10) {
    arr.push(expr.slice(i, i + 10));
  }
  for (let key of arr) {
    let words = [];
    if (key === '**********') {
      words.push(' ');
    } else {
      for (let i = 0; i < key.length; i += 2) {
        el = key.slice(i, i + 2);
        switch (el) {
          case '11':
            words.push('-');
            break;
          case '10':
            words.push('.');
            break;
        }
      }
    }
    arrStr.push(words.join(''));
  }
  for (let key of arrStr) {
    key === ' ' ? (res += ' ') : (res += MORSE_TABLE[key]);
  }
  return res;
}

module.exports = {
  decode,
};
