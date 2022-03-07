const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/product'){
        res.setHeader('Content-Type','application/json');
        const data = [{id: 1, name: "Product A"}, {id: 2, name: "Product B"}];
        res.end(JSON.stringify(data));
    } else if(url === "/posts"){
        res.setHeader('Content-Type','application/json');
        const data = [{id: 1, name: "Post A"}, {id: 2, name: "Post B"}];
        res.end(JSON.stringify(data));
    } else {
        res.setHeader('Content-Type','text/html');
        res.write("<html>");
        res.write("<body>");
            res.write("<h1>Home Page</h1>")
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
});


const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Server running port ${PORT}`);
})
