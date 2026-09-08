package com.shubham.chat_app.service;

import com.shubham.chat_app.entity.Message;
import com.shubham.chat_app.entity.Room;

import java.util.List;

public interface RoomService {

    Room createRoom(String roomId);

    Room joinRoom(String roomId);

    List<Message> getMessage(String roomId, int Page, int size);
}
