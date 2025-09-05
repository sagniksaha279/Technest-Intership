import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 4000;

// Serve static files (public folder)
app.use(express.static(path.join(__dirname, "public")));

// Store chat history in memory (per room)
const chatHistory = {};

// Serve index (client.html) on root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "client.html"));
});


io.on("connection", (socket) => {
  console.log("🔗 A user connected:", socket.id);

  // Join a room
  socket.on("joinRoom", (room) => {
    socket.join(room);
    console.log(`✅ ${socket.id} joined room ${room}`);

    // Send past messages
    if (chatHistory[room]) {
      chatHistory[room].forEach((msg) => {
        socket.emit("message", msg);
      });
    }
  });

  // Handle new messages
  socket.on("message", ({ room, text }) => {
    if (!room || !text) return;

    const msgData = {
      text,
      time: new Date().toLocaleTimeString(),
    };

    if (!chatHistory[room]) chatHistory[room] = [];
    chatHistory[room].push(msgData);

    io.to(room).emit("message", msgData);
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});

server.listen(PORT, () =>
  console.log(`🚀 Chat server running at http://localhost:${PORT}`)
);
