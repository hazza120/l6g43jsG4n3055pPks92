const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000; // You can change the port number if desired

app.use(express.json());

app.post('/log', (req, res) => {
  const ip = req.ip;
  const userAgent = req.headers['user-agent'];

  // Customize the Discord webhook URL based on your preferences
  const webhookUrl = 'YOUR_DISCORD_WEBHOOK_URL';

  const message = `IP: ${ip}\nUser-Agent: ${userAgent}`;

  // Send the log message to the Discord webhook
  axios.post(webhookUrl, { content: message })
    .then(() => res.sendStatus(200))
    .catch((error) => {
      console.error('Error sending log to Discord:', error);
      res.sendStatus(500);
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});