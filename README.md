# RabbitMQ microservice on Nodejs
https://www.youtube.com/watch?v=igaVS0S1hA4 

API call to logger service 

- Run rabbitMQ 
```bash
sudo docker compose up
```

creae folder loggerMS
```bash
npm init -y

npm i amqplib
```

- Steps to produce a message
1. Connect to the RabbitMQ server
2. Create a new channel on that connection
3. Create the exchange
4. Publish a message to thr exchange with a routing key 

