const Reader = require('./Reader')
const Processor = require('./Processor')
const Table = require("./Table")
const HtmlParser = require('./HtmlParser')
const Writer = require('./Writer')
const PDFWriter = require('./PDFWriter')

var leitor = new Reader()
var escritor = new Writer()

async function main(){

    var dados = await leitor.Read('./users.csv')
    console.log(dados)
    var dadosProcessados = Processor.Process(dados)

    var usuarios = new Table(dadosProcessados)

    console.log(usuarios.RowCount)
    console.log(usuarios.ColumnCoutn)

    var html = await HtmlParser.Parse(usuarios)
    
    escritor.Write(Date.now() + '.html', html)

    PDFWriter.WritePDF(Date.now() + ".PDF",html)

}

main()