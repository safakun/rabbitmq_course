# RabbitMQ microservice on Nodejs
https://www.youtube.com/watch?v=igaVS0S1hA4 

API call to logger service 

- Run rabbitMQ 
```bash
sudo docker compose up
```
- access to RabbitMQ
http://localhost:15672

- login: guest
- password - guest


creae folder loggerMS
```bash
npm init -y

npm i amqplib
npm i express body-parser
```

For loggerMS
- Steps to produce a message
1. Connect to the RabbitMQ server
2. Create a new channel on that connection
3. Create the exchange
4. Publish a message to thr exchange with a routing key 

For infoMS
1. Connect to the RabbitMQ server
2. Create a new channel
3. Create the exchange
4. Create the queue
5. Bind the queue to the exchange
6. Consume messages from the queue 

```bash
npm init -y
npm i amqplib 

``` 

- POST http://localhost:5000/sendlog 

```json
{
    "logType": "Info",
    "message": "Download successful"
}
```