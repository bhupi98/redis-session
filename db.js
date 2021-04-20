const {createPool}=require('mysql');
const pool=createPool({
    host:'localhost',
    port:3307,
    user:'root',
    password:'India@100',
    database:'employees'
})
pool.getConnection(err=>{
    if(err) console.log('error connecting to databases ')
    console.log('Connected to mysql')
})

module.exports=pool;