package com.onnet.jwt.google.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GoogleController {

    @GetMapping("/secured")
    public String secured() {
        return "Hello, Secured!";
    }

}