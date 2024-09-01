import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import morgan from "morgan"

const app = express()

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials:true
    })
)

app.use(cookieParser()) // it helps to parse cookie
app.use(express.json) // it get data like json
app.use(morgan("dev")) // log middleware for nodejs
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true, limit: "50mb" })); //middleware function in Express.js that parses incoming requests with URL-encoded payloads


export {app}