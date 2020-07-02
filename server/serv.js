const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const relPath = './static';
let path = '';

const server = http.createServer((req,res)=>{

    //lodash
    const num = _.random(0,20);
    console.log(num);

    switch(req.url)
    {
        case '/':
            path = relPath + '/main.htm';
            res.statusCode = 200;
            break;
        case '/about':
            path = relPath + '/about.htm';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('location', '/about');
            res.end();
        default:
            res.statusCode = 404;
            path = relPath + '/404.htm';
    }
    rf = fs.readFileSync(path, {encoding: 'utf-8'});
    res.setHeader('Content-Type', 'text/html');
    // res.write(rf);
    res.end(rf);
})
.listen(3000, 'localhost', ()=>{
    console.log('Listening for request at localhost, port: 3000');
});