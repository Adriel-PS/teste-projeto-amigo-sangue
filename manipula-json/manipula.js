//lib
const fs = require('fs')

//importando json e lendo dados(inicio da aplicação, sem atualização)
//const user = require('./user.json')
//console.log(user);
//console.log(user.name)
//nome_user =user.name
//email_user = user.email
//id_user = user.id


fs.readFile('./user.json', 'utf-8',(err,id)>{
    console.log(id)
})

