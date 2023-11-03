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
        Channel.assertQueue(queueName, { durable: false });
        Channel.consume(queueName,(msg)=>{
            console.log("recieved : $(msg.content.toString( ))"); 
        },{
            noAck : true
        });
    })

})