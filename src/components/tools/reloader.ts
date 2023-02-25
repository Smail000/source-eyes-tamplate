import { Socket } from "socket.io-client"

export default function reconnection(socket: Socket): void {
    socket.io.on("reconnect", () => {
        location.reload()
    })

    socket.on("reloader_mode", (mode: string) => {
        console.log(`Mode: ${mode}`)
    })
}