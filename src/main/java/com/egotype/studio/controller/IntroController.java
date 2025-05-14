package com.egotype.studio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IntroController {

    @GetMapping("/")
    public String introPage() {
        return "intro";
    }
}