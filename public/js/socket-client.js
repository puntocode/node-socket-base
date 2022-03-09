const socket = io();

const spOnline = document.querySelector('#st-online');
const spOffline = document.querySelector('#st-offline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');


socket.on('connect', () => {
    console.log('Conectado');
    spOnline.style.display = '';
    spOffline.style.display = 'none';
});


socket.on('disconnect', () => {
    console.log('Cliente desconectado');
    spOnline.style.display = 'none';
    spOffline.style.display = '';
})

socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
})


btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    const payload = { mensaje, id: '123ABV', fecha: new Date().getTime() };

    socket.emit('enviar-mensaje', payload, id => {
        console.log('Desde el server', id)
    });
})