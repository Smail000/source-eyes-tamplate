
import express from "express"
import { createServer } from "http"
import path from "path"
import ip from "ip"

const server = express()
const httpServer = createServer(server)
const PORT: string = process.env.PORT || "3000"
const MODE: string = process.env.MODE || "development"

server.use(express.static('./build'))
server.use(express.json())

server.get('/*', (req, res) => {
    res.sendFile(path.resolve('build', 'index.html'))
})

httpServer.on("error", (err: Error): void => {
    throw err
})

httpServer.listen(PORT, () => {
    console.log(`Server setting mode "${MODE}"`)
    console.log(`Custom server avaliable on`)
    console.log(`Localhost => http://localhost:${PORT}`)
    console.log(`Globalhost => http://${ip.address()}:${PORT}`)
})