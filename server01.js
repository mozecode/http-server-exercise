const {createReadStream, createWriteStream}=require('fs');
const{createServer}=require('http');
const server = createServer();


server.on('request', (req, res) => {
   console.log("request url", req.url);
   const readStream = createReadStream('index.html');
   readStream.pipe(res)

});
server.listen(8081, ()=>{
    console.log('Listening on port 8081');
});



  // let url= req.url;
    // let path = req.url.slice(-1)==='/' ? url.slice(1).concat('index.html'): url.slice(1);
    // //-1 slices at last letter -- it's a string
    // //ex- "hello".slice(-1) gives you "o"
    // // "/".slice(-1) gives you /
    // //if I get a slash and nothing else, tack on index.html, if not, just send whatever's after the slash
    // readFile(path, (err, data)=>{
    //     if (err){
    //         res.statusCode = 404
    //         return res.end('not found');
    //     }
    //     res.end(data);
    // })