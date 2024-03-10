const connect = require('connect');
const url = require('url');

const app = connect();


function calculate(req, res) {
    const query = url.parse(req.url, true).query;
    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);
    let result;

    switch (method) {
        case 'add':
            result = x + y;
            break;
        case 'subtract':
            result = x - y;
            break;
        case 'multiply':
            result = x * y;
            break;
        case 'divide':
            result = x / y;
            break;
        default:
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<div class="calculator-screen error">Unsupported method. Please use add, subtract, multiply, or divide.</div>');
            return;
    }

    const operation = method.replace('multiply', '*').replace('divide', '/').replace('add', '+').replace('subtract', '-');
    res.writeHead(200, {'Content-Type': 'text/html'});
  
//   HERE I JUST ADDED HTML AND CSS TO GET THE OUTPUT ON CALCULATOR DISPLAY .
  
    res.end(`
        <html>
        <head>
            <title>Calculator Result</title>
            <style>
                body { font-family: 'Lucida Grande', Tahoma, Verdana, Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f4f4f4; }
                .calculator { background-color: #e0e0e0; padding: 20px; border-radius: 20px; box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); }
                .calculator-screen { background-color: #fff; border: none; border-radius: 10px; padding: 20px; text-align: right; width: 300px; margin-bottom: 20px; font-size: 24px; color: #333; }
                .error { color: red; }
            </style>
        </head>
        <body>
            <div class="calculator">
                <div class="calculator-screen">
                    ${x} ${operation} ${y} = <strong>${result}</strong>
                </div>
            </div>
        </body>
        </html>
    `);
}


app.use(calculate);


app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/  (you can get the output on calculator screen!)');
});
