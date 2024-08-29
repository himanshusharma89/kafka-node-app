const { Kafka } = require('kafkajs');

// Kafka configuration
const kafka = new Kafka({
  clientId: 'producer-app',
  brokers: ['kafka:9092'], // Adjust based on your cluster
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();
  console.log('Producer connected to Kafka');

  // Send a message to the 'test-topic'
  await producer.send({
    topic: 'test-topic',
    messages: [{ value: 'Hello, Kafka!' }],
  });

  console.log('Message sent successfully!');
  await producer.disconnect();
};

run().catch(console.error);