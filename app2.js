const readline = require('readline');
 
const inputString = prompt =>{
    const readInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise( resolive =>readInterface.question(prompt,
        inputString=>{
            readInterface.close();
            resolive( inputString);
        }));
};
 
const st_1 = async()=>{
    const string_1 = await inputString("文字列1 >");
 
console.log( string_1 );
}
st_1();

const st_2 = async()=>{
    const string_2 = await inputString("文字列2 >");
 
console.log( string_2 );
}
st_2();