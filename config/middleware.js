module.exports = {
    //...
    settings: {
      cors: {
        enabled: true, 
        // headers: '*', 
        origin: ["http://localhost", "http://localhost:3000", "http://localhost:1337", 'https://foo.example'],
      },
    },
  };