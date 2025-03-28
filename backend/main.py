from fastapi import FastAPI, WebSocket, WebSocketDisconnect
import json

app = FastAPI()

active_connections = {}

@app.websocket("/ws/chat/{roomID}")
async def websocket_endpoint(websocket: WebSocket, roomID: str):
  await websocket.accept()

  if roomID not in active_connections:
    active_connections[roomID] = {
      'history' : [],
      'users': []
    }

  active_connections[roomID].users.append(websocket)
  websocket.send_json(active_connections[roomID].history)


  try:
    while True:
      data = websocket.receive_json()

      for connection in active_connections[roomID].users:
        if connection != websocket:
          message = {'user': data.user, 'message': data.message }
          message = json.dumps(message)
          await connection.send_json(message)
  except WebSocketDisconnect:
    active_connections[roomID].users.discard(websocket)
    if not active_connections[roomID].users:
      del active_connections[roomID]
