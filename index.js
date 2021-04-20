// const express=require('express');
// const { database } = require('firebase-admin');
// const admin=require('firebase-admin');
// const fs=require('fs');
// const app=express();
// const config=JSON.parse(fs.readFileSync('serviceAccountKey.json'))
// console.log(config)
// admin.initializeApp({
//     credential:admin.credential.cert(config)
// })
// console.log(admin)
// app.listen(6000,console.log('server is running on port 6000'))

const express=require('express');
const job=require('node-cron');
const nodemailer=require('nodemailer');
const app=express()

// const transport=nodemailer.createTransport({
//     host:'smtp.gmail.com',
//     port:'587',
//     secure:false,
//     igonreTLS:false,
//     auth:{
//         user:'bhupicool99@gmail.com',
//         pass:'codelikecool'
//     }
// });


const transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'',
        pass:''
    }
})

const mailOptions={
    to:'',
    from:'',
    text:'Hey Bhupender',
    subject:'Testing the emails'
}

transport.sendMail(mailOptions,function(err,info){
    if(err){
        console.log(err)
    }else{
        console.log(info)
    }
})

job.schedule(' */5 * * * *',()=>{
    const mailOptions={
        to:['',''],
        from:'',
        text:'you will get mails in each minutes',
        subject:'Testing the scheduler'
    }
    
    transport.sendMail(mailOptions,function(err,info){
        if(err){
            console.log(err)
        }else{
            console.log(info)
        }
    })

    console.log('email has been sent to all folks')
})

app.listen(7000,()=>console.log('server is runnning on port 7000'))