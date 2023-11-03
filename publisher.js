const amqp = require('amqplib/callback_api');


amqp.connect('amqp://localhost', (err, connection) => {
    if (err) {
        throw err;
    }
    connection.createChannel((err, connection) => {
        if (err) {
            throw err;
        }
        let queueName = "RAJ";
        let message = "HELLO IAM RAJ";
        Channel.assertQueue(queueName, { durable: false });
        Channel.sendQueue(queueName,Buffer.from(message));
        setTimeout(() =>{
            connection.close();

        },1000)
    })

})


