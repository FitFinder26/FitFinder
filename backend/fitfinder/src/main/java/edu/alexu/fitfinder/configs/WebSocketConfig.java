package edu.alexu.fitfinder.configs;

import edu.alexu.fitfinder.handler.MyWebSocketHandler;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.socket.config.annotation.*;
import org.springframework.web.socket.server.standard.ServletServerContainerFactoryBean;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

  @Override
  public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
    registry.addHandler(new MyWebSocketHandler(), "/ws").setAllowedOriginPatterns("*");
  }

  @Bean
  public ServletServerContainerFactoryBean createWebSocketContainer() {
    ServletServerContainerFactoryBean container = new ServletServerContainerFactoryBean();

    container.setMaxTextMessageBufferSize(20 * 1024 * 1024); // 10 MB
    container.setMaxBinaryMessageBufferSize(20 * 1024 * 1024); // 10 MB
    //    container.setMaxSessionIdleTimeout(60_000L); // 60 second

    System.out.println("✅ WebSocket max text size set to 10 MB");

    return container;
  }
}
