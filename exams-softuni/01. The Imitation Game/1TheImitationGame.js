function solve(input) {

    //console.log(key)
    let actions = {
        'ChangeAll': change,
        'Insert': insert,
        'Move': move
    }

    let result = input.shift()

    while (input[0] != 'Decode') {
        let tokens = input.shift().split('|')

        let commands = tokens[0]
        let action = actions[commands]
        action(tokens[1], tokens[2])
        // console.log(result)
    }
    console.log('The decrypted message is: ' + result)

    function validate(index) {
        return (index >= 0) && (index <= result.length)
    }
    function move(index) {
        index = Number(index)
        if (validate(index)) {
            let left = result.substring(0, index)
            let right = result.substring(index)

            return result = right + left
        }
    }
    function insert(index, value) {
        index = Number(index)
        if (validate(index)) {
            let left = result.substring(0, index)
            let right = result.substring(index)
            return result = left + value + right
        }
    }

   /* function change(subStr, replacement) {
        subStr = subStr.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
        let pattern = new RegExp(subStr, 'g');
        return result = result.replace(pattern, replacement);
    }*/

function change(subStr, replacement) { 
    while(result.includes(subStr)){ 
        result= result.replace(subStr,replacement); 
      }
      return result
    }
}
solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
])
console.log('---------')

solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
])