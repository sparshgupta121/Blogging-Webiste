import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Bindings } from 'hono/types'
import {verify,sign,decode} from 'hono/jwt'
import { signinInput } from "@sparsh121/blog-commons";
import { signupInput } from "@sparsh121/blog-commons";

export const userRouter = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET: string
  }}>();

userRouter.post("/signup",async(c)=>{

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const{success} = signupInput.safeParse(body)
    
if(!success){
    c.status(411);

    return c.json({
        message:"Incorrect Inputs"
    })
}
    try{
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password
      }
    })

    const jwt = await sign({id: user.id},c.env.JWT_SECRET)
    return c.json({ token: jwt })
    }
    
    catch(e){
      console.log(e);
      
      c.status(403);
        return c.json({ error: "error while signing up" });

    }

})


userRouter.post("/signin",async(c)=>{

  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const body= await c.req.json()

  const{success} = signinInput.safeParse(body)
if(!success){
    c.status(411);

    return c.json({
        message:"Incorrect Inputs"
    })
}
  const user= await prisma.user.findUnique({
    where:{
      email:body.email,
      password:body.password
    }
  });

  if(!user){
    c.status(403)
    return c.json({err: "User Not Found"})
  }

	const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({ jwt });

})
