module.exports = function solveEquation(equation) {
    const expression = equation.split(' ');
    let result = [];
    const a = parseInt(expression[0]);
    const b = parseInt(expression[3] + expression[4]);
    const c = parseInt(expression[7] + expression[8]);
    const D = Math.sqrt((b * b) - (4 * a * c));
    result.push(Math.round((-b - D) / (2 * a)));
    result.push(Math.round((-b + D) / (2 * a)));
    return (result[0] > result[1]) ? result.reverse() : result;
}