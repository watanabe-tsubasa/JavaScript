const readline = require('readline');
 
const input = prompt =>{
    const readInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise( resolive =>readInterface.question(prompt,
        input=>{
            readInterface.close();
            resolive(input);
        }));
};
 
(async () => {
    let a = Number(await input('数値1>'));
    let b = Number(await input('数値2>'));
  
    console.log(a);
    console.log(b);
    console.log(a + b);
  })();