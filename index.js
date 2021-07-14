const axios = require('axios').default;
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/:videoId', async (req, res) => {
  const videoId = req.params.videoId;

  if (!videoId) {
    return res.status(400).send('Bad request');
  }

  try {
    const response = await axios.get(
      `http://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
      {
        responseType: 'arraybuffer',
      }
    );
    const data = Buffer.from(response.data, 'binary').toString('base64');

    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
