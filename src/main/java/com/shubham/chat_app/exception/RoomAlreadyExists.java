package com.shubham.chat_app.exception;

public class RoomAlreadyExists extends RuntimeException{

    public RoomAlreadyExists(String message){
        super(message);
    }
}
