import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Bindings, Variables } from 'hono/types'
import {verify,sign,decode} from 'hono/jwt'
import { createBlogInput } from "@sparsh121/blog-commons";
import { updateBlogInput } from "@sparsh121/blog-commons";
export const blogRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
    },
    Variables: {
      userId: string; // Define userid explicitly
    };
  }>();


  blogRouter.use("/*", async(c,next)=>{
  
    const header = c.req.header("authorization")||" ";
    const token = header.split(" ")[1]
    try{
    const resp =await verify(token,c.env.JWT_SECRET)
    if(resp){
        c.set("userId",resp.id as string)
        await next()
    }   
    else{
        c.status(403)
      return c.json({
      msg:"You are not logged in"
      })
    }
  }catch(e){ c.status(403)
    return c.json({
    msg:"You are not logged in"
    })  
  }

}
)
      
    blogRouter.post("/",async (c)=>{
        const body= await c.req.json();
        const authourId = c.get("userId");
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
          }).$extends(withAccelerate())

           const{success} = createBlogInput.safeParse(body)
          if(!success){
              c.status(411);
          
              return c.json({
                  message:"Incorrect Inputs"
              })
          }

          const blog = await prisma.blog.create({
            data: {
                title:body.title,
                content:body.content,
                authourId:authourId

            }
          })
      
    return c.json({
        id:blog.id
    })
  })

  blogRouter.put("/",async(c)=>{
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

     const{success} = updateBlogInput.safeParse(body)
    if(!success){
        c.status(411);
    
        return c.json({
            message:"Incorrect Inputs"
        })
    }
    
    const updated = await prisma.blog.update({
        where:{
            id:body.id
        },
            data:{
                title:body.title,
                content:body.content
            }
    })

    return c.json({
        id:updated.id
    })
  })

  blogRouter.get("/bulk",async (c)=>{

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

      const blogs = await prisma.blog.findMany();
    return c.json({
        blogs
    })
  })
  
  blogRouter.get("/:id",async (c)=>{
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

      const blog = await prisma.blog.findFirst({
        where:{
            id:id
        }
      })

      return c.json({
        blog
    })
  
 })
  
 
