const PdfPrinter = require('pdfmake')
const path = require('path')

const fonts = {
  Nunito: {
    normal: path.join(__dirname, '..', 'fonts/Nunito/Nunito-Regular.ttf'),
    bold: path.join(__dirname, '..', 'fonts/Nunito/Nunito-Bold.ttf'),
    italics: path.join(__dirname, '..', 'fonts/Nunito/Nunito-RegularItalic.ttf'),
    bolditalics: path.join(__dirname, '..', 'fonts/Nunito/Nunito-BoldItalic.ttf')
  },
  'Nunito Sans': {
    normal: path.join(__dirname, '..', 'fonts/Nunito_Sans/NunitoSans-Regular.ttf'),
    bold: path.join(__dirname, '..', 'fonts/Nunito_Sans/NunitoSans-Bold.ttf'),
    italics: path.join(__dirname, '..', 'fonts/Nunito_Sans/NunitoSans-RegularItalic.ttf'),
    bolditalics: path.join(__dirname, '..', 'fonts/Nunito_Sans/NunitoSans-BoldItalic.ttf')
  },
  Roboto: {
    normal: path.join(__dirname, '..', 'fonts/Roboto-Regular.ttf'),
    bold: path.join(__dirname, '..', 'fonts/Roboto-Medium.ttf'),
    italics: path.join(__dirname, '..', 'fonts/Roboto-Italic.ttf'),
    bolditalics: path.join(__dirname, '..', 'fonts/Roboto-MediumItalic.ttf')
  },
  Courier: {
    normal: 'Courier',
    bold: 'Courier-Bold',
    italics: 'Courier-Oblique',
    bolditalics: 'Courier-BoldOblique'
  },
  Helvetica: {
    normal: 'Helvetica',
    bold: 'Helvetica-Bold',
    italics: 'Helvetica-Oblique',
    bolditalics: 'Helvetica-BoldOblique'
  },
  Times: {
    normal: 'Times-Roman',
    bold: 'Times-Bold',
    italics: 'Times-Italic',
    bolditalics: 'Times-BoldItalic'
  },
  Symbol: {
    normal: 'Symbol'
  },
  ZapfDingbats: {
    normal: 'ZapfDingbats'
  }
}

const printer = new PdfPrinter(fonts)

const getDoc = pdfDoc => {
  const chunks = []
  return new Promise((resolve, reject) => {
    pdfDoc.on('data', chunk => chunks.push(chunk))
    pdfDoc.on('end', () => resolve(Buffer.concat(chunks)))
    pdfDoc.on('error', error => reject(error))
    pdfDoc.end()
  })
}

module.exports = doc => {
  if (!doc) {
    throw Error('Missing required input: content')
  }

  const pdfDoc = printer.createPdfKitDocument(doc)
  return getDoc(pdfDoc)
}
