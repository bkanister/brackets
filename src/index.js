module.exports = function check(str, bracketsConfig) {
    let typesOfBrackets = [],
        index = 0,
        counter = 0;
    let arr = str.split('');
    for (let i = 0; i < bracketsConfig.length; i++) {
        typesOfBrackets.push(`${bracketsConfig[i][0]}${bracketsConfig[i][1]}`);
    }
    console.log(typesOfBrackets)
    while (counter <= 35) {
        counter++;
        typesOfBrackets.forEach(n => {
            index = str.indexOf(n);
            if (index !== -1) {
                arr.splice(index, 2);
                str = arr.join('');
            }
        });
    }
    return arr.length === 0;
};
