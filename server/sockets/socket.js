const { io } = require('../server')

io.on('connection', (client) => {

   console.log('usuario conectado');

   client.emit('enviarMensaje', {
      usuario: 'Admin',
      mensaje: 'Bienvenido a esta aplicación'
   });

   // ej. cuando el cliente cierra el tab
   client.on('disconnect', () => {
         console.log('usuario desconectado');
   });

   // escuchar al cliente
   client.on('enviarMensaje', (data, callback) => {

      console.log(data);

      // para respondar a todos
      client.broadcast.emit('enviarMensaje', data);

      // if (mensaje.usuario) {
      //    callback({
      //       res: 'todo salio bien'
      //    });
      // }else {
      //    callback({
      //       res: 'todo salió mal'
      //    });
      // }
   });

});
