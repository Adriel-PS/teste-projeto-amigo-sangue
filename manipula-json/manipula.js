//lib
const fs = require('fs')

//importando json e lendo dados(inicio da aplicação, sem atualização)
//const user = require('./user.json')
//console.log(user);
//console.log(user.name)
//nome_user =user.name
//email_user = user.email
//id_user = user.id

function log(data){
    console.log(data)
}

function console(data){
    return "<script>console.log(\""+data+"\");</script>";
  }

fs.readFile('./user.json', 'utf-8' (error , data)>{
    console(data);
    console.log(data);
    
})

