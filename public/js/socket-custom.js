let socket = io();

socket.on('connect', function(){
   console.log('conectado al servidor');
});

// cuando el servidor se desconecta,  on = escuchar
socket.on('disconnect', function(){

   console.log('perdimos conexion con el servidor');

});

// enviar iformación con emit
socket.emit('enviarMensaje', {
   usuario: 'Roos',
   mensaje: 'Hola chavo'
}, function(resp) {
   console.log('respuesta server', resp);
});

// escuchar informacion
socket.on('enviarMensaje', function(mensaje){
   console.log('Servidor:', mensaje);
});
