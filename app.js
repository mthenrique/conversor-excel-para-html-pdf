var Reader = require("./Reader");
var Writer = require("./Writer");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var PDFWriter = require("./PDFWriter");

var leitor = new Reader();
var escritor = new Writer();

async function main(){
    var dados = await leitor.Read("./dados.csv");
    var dadosProcessados = Processor.Process(dados);

    var dadosTabela = new Table(dadosProcessados);

    var html = await HtmlParser.Parse(dadosTabela);

    escritor.Write(Date.now() + ".html", html);
    PDFWriter.WritePDF(Date.now() + ".pdf", html);
    
}

main();