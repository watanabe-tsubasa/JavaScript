const readline = require('readline/promises');

const input = async (name) => {
    const readInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    let string = await readInterface.question(name)
    readInterface.close();
    return string
}

let a
// let b

const input_A = async () => {
    a = await input('数値1>');
}    
// const input_B = async () => {
//     b = await input('数値1>');
// }        
async function main() {
    await input_A();
    // await input_B();
}

(async () => {
    await main();
  })();

console.log(a);
// console.log(b);
