package com.shubham.chat_app.service;

import com.shubham.chat_app.dto.MessageRequest;
import com.shubham.chat_app.entity.Message;

public interface ChatService {

    Message sendMessage(String roomId, MessageRequest request);
}
