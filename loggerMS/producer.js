const amqp = require('amqplib');
const config = require('./config');

class Producer {
    channel;

    async createChannel() {
        const connection = await amqp.connect(config.rabbitMQ.url);

        this.channel = connection.createChannel();
    }

    async publishMessage(routingKey, message) {
        if (!this.channel) {
               await this.createChannel();
      }   

      const exchangeName = config.rabbitMQ.exchangeName;
      await this.channel.assertExchange(exchangeName, "direct");

      await this.channel.publish(exchangeName, routingKey, 
        Buffer.from(
            JSON.stringify({
            logType: routingKey,
            message: message,
            dateTime: new Date(),
        })
        )
        );
  }

}
