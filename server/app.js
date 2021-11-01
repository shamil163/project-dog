const express = require("express");
const morgan = require("morgan"); 
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors")

const app = express();
const PORT = 3005;




//для сессий
const redis = require("redis");
const session = require("express-session");
let RedisStore = require("connect-redis")(session);
let redisClient = redis.createClient();


//импорт ророутеров
const authRouter = require("./routes/authRouter")




//Unhandled Rejection (TypeError): Failed to fetch
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(morgan("dev"));
//app.use(express.static(path.join(__dirname, "public")));
//app.use(multer({ storage: storageConfig }).single("photo")); // мидлвара мултер
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
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1e3 * 86400, //жизнь куки
    },
  })
);
app.use((req, res, next) => {
  res.locals.user = req.session?.user;
  next();
});


// использование роутеров под определенные адреса
app.use("/",authRouter);




app.listen(PORT, () => {
  console.log("Сервер запустился", PORT);
});
