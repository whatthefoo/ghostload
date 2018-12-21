export function addVariation(length = 15) {
  // Randomize length within a +-10% threshold
  const min = length - length * 0.1;
  const max = length + length * 0.1;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function buildClassName(props) {
  return Object.keys(props).reduce((sum, p) => {
    let str = '';
    if (p === 'fullWidth' && props[p]) {
      str = 'ghost--full-width ';
    }
    return sum + str;
  }, 'ghost ');
}

export function buildWordString(length = 15, variate = false) {
  const TEXT = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '.repeat(10);
  const l = variate ? addVariation(length) : length;

  return TEXT.substr(0, l);
}
