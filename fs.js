const fs = require('fs');
// eventloop, asynchronous 
 //fs.writeFile('message.txt', 'Hello there node', function(err){
//    if(err) throw err;
//    console.log('file has been written');
// })

fs.readFile('./message.txt', 'utf-8', function(err, data){
    if (err) throw err;
    console.log(data);
})