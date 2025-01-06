const express = require('express');
const cors = require('cors');
const os = require('os');
const osu = require('os-utils');

const app = express();
const port = 3000;

app.use(cors());

app.get('/cpu', (req, res) => {
  osu.cpuUsage((usage) => {
    res.json({
      cpuUsage: (usage * 100).toFixed(2) + '%',
      totalMemory: (os.totalmem() / 1024 / 1024).toFixed(2) + ' MB',
      freeMemory: (os.freemem() / 1024 / 1024).toFixed(2) + ' MB',
      loadAverage: os.loadavg()
    });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});