
//-----------------Servidor----------------------------
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

//configurar nunjuck(template engine)
nunjucks.configure('src/views', {
  express: server ,
  noCache:true,

})

server
//receber os dados do req.body
.use(express.urlencoded({extended:true}))
//Configurar arquivos estáticos 
.use(express.static("public")) //definição da pasta public como main
//rotas da aplicação 
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post('/save-classes', saveClasses)

.listen(5500)