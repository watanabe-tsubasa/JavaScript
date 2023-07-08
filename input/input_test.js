const readline = require('readline/promises');

let a;

async function input(name){
    const readInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    const string = await readInterface.question(name);
 
    console.log( string );
    a = string
    readInterface.close();
}

input("文字列を入力してください >");
