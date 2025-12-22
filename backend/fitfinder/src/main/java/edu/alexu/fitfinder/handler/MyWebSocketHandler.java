package edu.alexu.fitfinder.handler;

import org.springframework.web.socket.*;
import org.springframework.web.socket.handler.TextWebSocketHandler;
import java.util.concurrent.ConcurrentHashMap;

public class MyWebSocketHandler extends TextWebSocketHandler {

  // store all active sessions
  public static ConcurrentHashMap<String, WebSocketSession> sessions = new ConcurrentHashMap<>();

  @Override
  public void afterConnectionEstablished(WebSocketSession session) throws Exception {
    String sessionId = session.getId();
    sessions.put(sessionId, session);
    System.out.println("Websocket connected successfully with sessionId = " + sessionId);
    session.sendMessage(new TextMessage("{\"sessionId\": \"" + sessionId + "\"}"));
  }

  @Override
  public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
    String sessionId = session.getId();
    sessions.remove(sessionId);
    System.out.println("Websocket disconnected successfully with sessionId = " + sessionId);
  }
}
