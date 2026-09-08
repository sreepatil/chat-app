package com.shubham.chat_app.controller;

import com.shubham.chat_app.entity.Message;
import com.shubham.chat_app.entity.Room;
import com.shubham.chat_app.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/rooms")
@CrossOrigin("*")
public class RoomController {

    private final RoomService roomService;

    @PostMapping
    public ResponseEntity<Room> createRoom(@RequestBody String roomId){
        Room room = roomService.createRoom(roomId);

        return ResponseEntity.status(201).body(room);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Room> getRoom(@PathVariable("id") String roomId){
        Room room = roomService.joinRoom(roomId);

        return ResponseEntity.status(200).body(room);
    }

    @GetMapping("/{id}/messages")
    public ResponseEntity<List<Message>> getMessage(@PathVariable("id") String roomId,
                                                 @RequestParam(value = "pages", defaultValue = "0", required = false) int page,
                                                 @RequestParam(value = "size",defaultValue = "20", required = false) int size
                                                 ){

        List<Message> room = roomService.getMessage(roomId, page, size);

        return ResponseEntity.status(200).body(room);

    }

}
