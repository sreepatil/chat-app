package com.shubham.chat_app.service.impl;

import com.shubham.chat_app.entity.Message;
import com.shubham.chat_app.entity.Room;
import com.shubham.chat_app.exception.RoomAlreadyExists;
import com.shubham.chat_app.repository.RoomRepository;
import com.shubham.chat_app.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoomServiceImpl implements RoomService {

    private final RoomRepository roomRepository;

    @Override
    public Room createRoom(String roomId) {

        roomId = roomId.trim();

        if (roomRepository.findByRoomId(roomId).isPresent()) {
            throw new RoomAlreadyExists("Room already exists!");
        }

        Room room = new Room();
        room.setRoomId(roomId);

        return roomRepository.save(room);
    }

    @Override
    public Room joinRoom(String roomId) {

        Room room = roomRepository.findByRoomId(roomId).orElseThrow(() ->
                new RuntimeException("Room not found !"));

        return room;
    }

    @Override
    public List<Message> getMessage(String roomId, int page, int size) {

        Room room = roomRepository.findByRoomId(roomId).orElseThrow(() ->
                new RuntimeException("Room not found !"));

        List<Message> messages = room.getMessages();

        int start = Math.max(0, messages.size() -  (page +1 ) * size);
        int end = Math.min(messages.size(), start + size);

        List<Message> paginatedMessage = messages.subList(start, end);

        return paginatedMessage;
    }
}
