[![Build Status](https://travis-ci.com/Alheimsins/pdf-make.svg?branch=master)](https://travis-ci.com/Alheimsins/pdf-make)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# pdf-make

High-level API for [pdfmake](https://www.npmjs.com/package/pdfmake) - *PDF
document generation library for server-side and client-side usage in pure
JavaScript.*

## Installation

```
$ npm install @alheimsins/pdf-make
```

## Usage

```js
(async () => {
  const pdfmake = require('@alheimsins/pdf-make')
  const fs = require('fs').promises

  const content = {
    content: [
      'test'
    ]
  }

  // Creates PDF buffer
  const buffer = await pdfmake(content)

  console.log(buffer)
  // Returns <Buffer 25 50 44 46 2d 31 2e 33 0a 25 ff ff ff ff 0a 38 20 30 20 6f 62 6a 0a 3c 3c 0a 2f 54 79 70 65 20 2f 45 78 74 47 53 74 61 74 65 0a 2f 63 61 20 31 0a 2f ... >

  console.log('data:application/pdf;base64' + buffer.toString('base64'))
  // Return data:application/pdf;base64JVBERi0xLjMKJf////8KOCAwIG9iago8PAovVHlwZSAvRXh0R1N0YXRlCi9jYSAxCi9DQSAxCj4+CmVuZG9iago3IDAgb2JqCjw8Ci9UeXBlIC9QYWdlCi9QYXJlbnQgMSAwIFIKL

  await fs.writeFile('test.pdf', buffer)
  // Create test.pdf file
})()
```

## Documentation

See [pdfmake documentation](https://pdfmake.github.io/docs/)

## License

[MIT](LICENSE)

## About

Created with ❤ for [Alheimsins](https://alheimsins.net)

<img src="https://image.ibb.co/dPH08G/logo_black.png" height="150px" width="150px" />

