const socketController = socket => {

    console.log('Cliente conectado', socket.id)

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {
        const id = 123456;
        callback(id);

        socket.broadcast.emit('enviar-mensaje', payload); //emite el mensaje al cliente
        //bodcast - le envia mensaje a todos menos a mi
    })
}

module.exports = {socketController}