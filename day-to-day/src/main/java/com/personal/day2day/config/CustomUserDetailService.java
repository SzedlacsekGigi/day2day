package com.personal.day2day.config;

import com.personal.day2day.model.AppUser;
import com.personal.day2day.repositories.AppUserRepository;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class CustomUserDetailService implements UserDetailsService {

    private AppUserRepository users;

    public CustomUserDetailService(AppUserRepository users){
        this.users = users;
    }

    // Loads the user from the DB and converts it to Spring Security's internal User object

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser appUser = users.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Username: " + username + " not found"));

        return new User(appUser.getUsername(), appUser.getPassword(),
                appUser.getRoles().stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList()));
    }
}
