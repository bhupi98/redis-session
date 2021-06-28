const express = require("express");
const app = express();
const redis = require("redis");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 5000;
const connectRedis = require("connect-redis");
const session = require("express-session");
const multer = require("multer");
const { authenticate } = require("./auth");
const pool = require("./db");

const logger = require("./logger");
//const FormData=require('form-data')
//consolo.log
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("trust proxy", 1);

//i dont know how to move code from one branch to another
const redisStore = connectRedis(session);

const redisClient = redis.createClient({
  host: "localhost",
  port: 6379,
});

redisClient.on("error", (err) => {
  console.log("error connecting to redis" + err);
});
redisClient.on("connect", (err) => {
  console.log("Connected to radis");
});
app.use(
  session({
    store: new redisStore({ client: redisClient }),
    secret: "bhupisecret$%^134",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      secure: false,
      maxAge: 2000 * 60 * 1000,
    },
  })
);

app.get("/", authenticate, (req, res) => {
  const sess = req.session;
  console.log(req.sessionID);
  console.log(sess);
  // console.log(req.session.jwt)
  //    console.log(sess)
  //     if(sess.username && sess.password){
  //         if(sess.username){
  //             console.log(sess.username)
  //             res.send('Welcome')
  //         }
  //     }else{
  //         res.send('your session are not being stored')
  //     }

  if (sess.username) {
    res.send(req.user);
  } else {
    res.send("you need to login first");
  }
});

app.get("/allusers", (req, res) => {
  let sql = `select * from user`;
  pool.query(sql, (err, row) => {
    if (err) {
      res.send(500);
    } else {
      redisClient.setex("user", 3600, JSON.stringify(row));
      console.log(row[0].password);
      res.send(row);
    }
  });
});

app.post("/login", (req, res) => {
  const sess = req.session;
  const sessionId = req.sessionID;
  console.log(sessionId);
  console.log(sess);
  const { username, password } = req.body;
  if (username && password) {
    pool.query(
      "select * from user where username =? AND password=?",
      [username, password],
      (err, row) => {
        if (err) res.status(500).send();
        console.log(row.length);
        if (row.length > 0) {
          sess.username = username;
          sess.password = password;
          let token = jwt.sign({ row }, "bhupi", { expiresIn: "1d" });
          redisClient.setex("token", "3600", token);
          // pool.query('insert into user(token) values(?)',JSON.stringify(token),(err,t)=>{
          //     if(err){
          //         console.log(err)
          //     }
          //     console.log('token details', t)
          // })
          //console.log(row[0]['RowDataPacket'])
          // console.log(row[0]['username'] + " " + row[0]['email'])
          res.send({
            data: {
              id: row[0].id,
              username: row[0].username,
              email: row[0].email,
            },
            token: token,
          });
        } else {
          res.send("Incorrect Username and Password");
        }
      }
    );
  } else {
    res.send("you dont have correct password and username");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("you have been loggout");
    }
  });
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload/pics");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

app.post("/register", upload.single("file"), async (req, res) => {
  //     console.log(req.file)
  //     let form =new FormData();
  //    const formData= form.append('data',req.body.data)
  //    console.log(formData)
  const hashPass = await bcrypt.hash(req.body.password, 10);
  // const {username,email}=req.body;
  const user = {
    username: req.body.username,
    email: req.body.email,
  };
  // const username=req.body.username;
  // const password=req.body.password;
  // const email=req.body.email;
  // const token=req.body.token;
  const file = req.file;
  let sql =
    "insert into user(username, password , email ,images) values(?,?,?,?)";
  pool.query(
    sql,
    [user.username, hashPass, user.email, JSON.stringify(file)],
    (err, row) => {
      if (err) {
        res.status(500).send(err);
      } else {
        logger.log("info", {
          newUser: { username: user.username, email: user.email },
        });
        res
          .status(200)
          .send({ newUser: { username: user.username, email: user.email } });
      }
    }
  );
});

app.get("/redisdata", (req, res) => {
  const sesionData = req.sessionID;
  // console.log(sesionData)
  // console.log(redisClient)
  redisClient.get("user", (err, data) => {
    if (err) res.status(500).send();
    logger.log("info", JSON.parse(data));
    if (data) {
      let parseData = JSON.parse(data);
      res.status(200).send({
        data: parseData,
        message: "data received from cache",
      });
    } else {
      res.send("did not find the data");
    }
  });
});

app.get("/getImages", (req, res) => {
  let sql = "select convert(images using utf8) from user";
  pool.query(sql, (err, row) => {
    if (err) res.send(err);
    // console.log('rowData' , row)
    // const img=Buffer.from(row).toString('utf8')
    // console.log(img)
    res.send(row);
  });
});

app.get("/emp", (req, res) => {
  console.log(req.session);
  pool.query("select * from employeeData1", (err, row) => {
    if (err) res.send(err);
    req.session.data = row;
    console.log(req.session.data);
    res.send(row);
  });
});

app.get("/employee", (req, res) => {
  res.send(req.session.data);
});

// app.post('/profile',upload.single('file'),(req,res)=>{
//     console.log(req.file)
//     res.send(req.file)

// })

console.log("node");
console.log("node");
console.log("node");
console.log("node");
console.log("node");
console.log("node");
console.log("node");
console.log("node");
console.log("node");
console.log("node");
console.log("node");
console.log("node");
console.log("node");
console.log("node");
console.log("node");
console.log("node");
console.log("node");
console.log("node");

app.listen(port, logger.log("info", `server is running on port ${port}`));
