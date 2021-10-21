const express = require("express");
const morgan = require("morgan"); 
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;




//для сессий
const redis = require("redis");
const session = require("express-session");
let RedisStore = require("connect-redis")(session);
let redisClient = redis.createClient();










app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(multer({ storage: storageConfig }).single("photo")); // мидлвара мултер
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//////Сессии
app.use(
  session({
    name: "sID",
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: false,
    secret: "secretKey",
    resave: false,
  })
);
app.use((req, res, next) => {
  res.locals.user = req.session?.user;
  next();
});


// использование роутеров под определенные адреса





app.listen(PORT, () => {
  console.log("Сервер запустился", PORT);
});
