import { fastify } from "fastify"
import { fastifyCors } from "@fastify/cors"
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod"

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
    origin: "http://localhost:5173",
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.listen({ port: process.env.PORT ? Number(process.env.PORT) : 3333 }).then(() => {
    console.log(`HTTP Server is running on port ${process.env.PORT ? Number(process.env.PORT) : 3333}`)
})
