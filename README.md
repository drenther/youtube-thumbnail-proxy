# youtube-thumbnail-proxy

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/drenther/youtube-thumbnail-proxy/tree/master)

A proxy server to get base64 encoded YouTube video thumbnail images

### API Reference

#### `GET /:videoId`

Pass the `videoId` for the YouTube video you want as the path on the base url of the API and you will get a base64 encoded image payload in response

Use that in the browser by prefixing `data:image/jpeg;base64,<response>`
