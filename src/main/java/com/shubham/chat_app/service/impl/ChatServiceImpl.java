package com.shubham.chat_app.service.impl;

import com.shubham.chat_app.dto.MessageRequest;
import com.shubham.chat_app.entity.Message;
import com.shubham.chat_app.entity.Room;
import com.shubham.chat_app.repository.RoomRepository;
import com.shubham.chat_app.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class ChatServiceImpl implements ChatService {

    private final RoomRepository roomRepository;


    @Override
    public Message sendMessage(String roomId, MessageRequest request) {

        Room room = roomRepository.findByRoomId(request.getRoomId())
                .orElseThrow(() -> new RuntimeException("Room not found"));

        Message message = new Message();

        message.setContent(request.getContent());
        message.setSender(request.getSender());
        message.setTimeStamp(LocalDateTime.now());

        room.getMessages().add(message);
        roomRepository.save(room);

        return message;
    }
}
