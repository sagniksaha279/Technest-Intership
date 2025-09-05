# Socket Chat Server (Socket.IO)

Real-time chat server supporting multiple rooms, user messaging, timestamps, and optional MongoDB persistence.

## Features
- Users can connect and join rooms
- Users can send and receive messages in rooms
- Messages are broadcast to all users in the room
- Server timestamps each message
- Messages are stored in memory and optionally in MongoDB (if configured)

## Quick Start
1. Install dependencies:
   ```bash
   npm install
   ```
2. (Optional) Configure MongoDB in `.env` (copy from `.env.example`):
   - `MONGO_URI` = your MongoDB connection string
   - `SAVE_TO_MONGO=true` to enable persistence
3. Start server:
   ```bash
   npm start
   ```
4. Open the test client: `public/client.html` in your browser (open file:///... or serve the `public` folder).

## Socket events
- `connection` — socket connected
- `joinRoom` — client requests to join a room: `{ room, username }`
- `message` — send message: `{ room, username, text }`
- `chatMessage` — server -> clients in room: `{ username, text, room, createdAt }`
- `disconnect` — socket disconnected

## Files
- `server.js` — main server
- `models/Message.js` — Mongoose model (optional)
- `public/client.html` — minimal client to test connections
- `.env.example` — environment example

## Notes
This is a starter project. For production: add auth, rate-limiting, input validation, logging, and tests.