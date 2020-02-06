module.exports = function(input) {
    let output = ''
    if(input % 3 === 0) 
        output += 'Fizz'
    if(input % 5 === 0) 
        output += 'Buzz'
    if(input % 99 == 0) output += 'Something'
    if(input % 101 == 0) output += 'New'

    return output.length > 0 ? output : input
}
