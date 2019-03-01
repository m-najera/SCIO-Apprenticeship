
exports.suma = (a,b) => {
    if (!validateNumber(a) || !validateNumber(b)) return "One of the parameters is not a number";
    return parseInt(a) + parseInt(b);
}
exports.resta = (a,b) => {
    if (!validateNumber(a) || !validateNumber(b)) return "One of the parameters is not a number";
    return parseInt(a) - parseInt(b);
}
exports.multiplicacion = (a,b) => {
    if (!validateNumber(a) || !validateNumber(b)) return "One of the parameters is not a number";
    return parseInt(a) * parseInt(b);
}
exports.division = (a,b) => {
    if (!validateNumber(a) || !validateNumber(b)) return "One of the parameters is not a number";
  b = parseInt(b);
  if (b===0) return "Can't divide by 0";
    return parseInt(a) / parseInt(b);
}

function validateNumber(n){
    var patt = /^[0-9]*\.?[0-9]*$/;
    return patt.test(n);
}