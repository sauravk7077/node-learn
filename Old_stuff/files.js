const fs = require('fs');

// // reading the files
// fs.readFile('./docs/blog.txt', (err, data) => {
//     if(err)
//         console.log(err);
//     console.log(data.toString());
// })


// // Writing the files
// fs.writeFile('./docs/blog.txt','hey coders', ()=>{
//     console.log('file was written');
// });

// Making Directories
if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if(err)
            console.log(err);
        else
            console.log('Done is created.');
    });
}
else
{
    fs.rmdir('./assets', (err)=> {
        if(err)
            console.error(err);
        else
            console.log("The folder is deleted");
    });
}

//Deleting files

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err)=> {
        if(err)
            console.log(err);
        else
            console.log('The file is deleted.');
    });
}