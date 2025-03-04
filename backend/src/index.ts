import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Bindings } from 'hono/types'
import {verify,sign,decode} from 'hono/jwt'
import {blogRouter} from './routes/blog'
import { userRouter } from './routes/user'
import { cors } from 'hono/cors';

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET: string
  }}>();

app.use('/*',cors())
app.route("/api/v1/user",userRouter)
app.route("/api/v1/blog",blogRouter)


app.get("/", (c) => {
  return c.text("Hiii"); // Ensure the response is explicitly returned
});


export default app
