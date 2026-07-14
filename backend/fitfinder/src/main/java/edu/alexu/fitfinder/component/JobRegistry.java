package edu.alexu.fitfinder.component;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketSession;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class JobRegistry {

  private final ConcurrentHashMap<String, WebSocketSession> jobToSession =
      new ConcurrentHashMap<>();

  public void registerJob(String jobId, WebSocketSession session) {
    System.out.println("Job " + jobId + " has been registered with session " + session.getId());
    jobToSession.put(jobId, session);
  }

  public WebSocketSession getSession(String jobId) {
    return jobToSession.get(jobId);
  }

  public void removeJob(String jobId) {
    System.out.println("The websocket session is no longer registered with job " + jobId);
    jobToSession.remove(jobId);
  }
}
