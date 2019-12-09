package com.example.microservice;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("logs")
public class LogsController {

    @RequestMapping("")
    public String getLogs() {
        return "{ NotYetImplemented }";
    }
}
