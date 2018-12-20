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
  // The average length of English words is 4.5 letters
  const TEXT =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam vero alias libero consequatur nulla quidem assumenda saepe, ducimus officiis reiciendis labore consequuntur iure minima dicta ipsum nesciunt. Recusandae, est.';
  const l = variate ? addVariation(length) : length;

  return TEXT.substr(0, l);
}
