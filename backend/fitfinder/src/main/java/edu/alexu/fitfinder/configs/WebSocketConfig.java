package edu.alexu.fitfinder.configs;

import edu.alexu.fitfinder.handler.MyWebSocketHandler;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.*;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

  @Override
  public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {

    registry.addHandler(new MyWebSocketHandler(), "/ws").setAllowedOrigins("*");
  }
}
