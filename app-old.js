const http = require('http');

http.createServer((req, res) => {
    
    // REGRESA UN CSV (excel)
    // ********************************************************************
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'aplication/csv'})

    // res.write('ID, Nombre\n');
    // res.write('01, Ernesto\n');
    // res.write('02, Diana\n');
    // res.write('03, Mauricio\n');
    // ********************************************************************
    
    // REGRESA UN JSON
    // ********************************************************************
    res.writeHead(200, {'Content-Type': 'application/json'})

    const persona = {id: 01,nombre: 'Ernesto'}

    res.write(JSON.stringify(persona));
    // ********************************************************************

    res.end();
})
.listen(8081);

console.log('Escuchando en el puerto 8081');