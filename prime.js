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


(async () => {
    let a = Number(await input('数値1>'));
    let b = Number(await input('数値2>'));
  
    console.log(a);
    console.log(b);
    console.log(a + b);
  })();
