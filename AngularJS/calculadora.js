
exports.suma = (a,b) => {
    return parseInt(a) + parseInt(b);
}
exports.resta = (a,b) => {
    return parseInt(a) - parseInt(b);
}
exports.multiplicacion = (a,b) => {
    return parseInt(a) * parseInt(b);
}
exports.division = (a,b) => {
  b = parseInt(b);
  if (b===0) return "ERROR<br> DIV 0";
    return parseInt(a) / parseInt(b);
}