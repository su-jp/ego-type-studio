package com.egotype.studio.service;

import com.egotype.studio.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public boolean isEmailAvailable(String email) {
        return !userRepository.existsByEmail(email);
    }
}
