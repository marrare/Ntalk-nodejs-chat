module.exports = (app, io) => {
    io.on('connection', (client) => { //Aguarda conexão ao socket.io e envie uma mensagem para o servidor.
        client.on('send-server', (data) => {
          const resposta = `<b>${data.nome}:</b> ${data.msg}<br>`;
          client.emit('send-client', resposta); // Resposta para o cliente
          client.broadcast.emit('send-client', resposta); // Resposta para todos os demais
        });
    });
}