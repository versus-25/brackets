module.exports = function check(str, bracketsConfig) {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
  let list_brackets = str.split('');
  if ((list_brackets.length % 2) != 0) {return false};

  let list_result = [];
  for (let x = 0; x < list_brackets.length; x++) {
    let current_bracket = list_brackets[x]

    for (let y = 0; y < bracketsConfig.length; y++) {
      let [open_bracket, close_bracket] = bracketsConfig[y];

      if (current_bracket === close_bracket && list_result.last() === open_bracket) {
        list_result.pop()
      } else if (current_bracket === open_bracket) {
        list_result.push(current_bracket)
      } else if (current_bracket === close_bracket && list_result.last() != open_bracket) {
        return false
      }
    }
  }
  return list_result.length == 0 
}
