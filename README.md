# Shefat OceanOS — Extended Contact Section with Form

This pack replaces the previous Contact / Deep Station section with an extended version including:

- Full Name input
- Email input
- Phone Number input
- Subject input
- Rich text message editor
- Submit button
- Clear button
- Terms and conditions checkbox
- Terms modal with 6 profile-relevant conditions
- Mailto fallback submission

## Place files

Copy these files into your project:

```txt
src/components/sections/ContactDeepStationSection.jsx
src/components/sections/ContactDeepStationSection.css
src/data/contactContent.js
public/assets/contact/*
```

## Note

The submit action currently opens the user's email client with the message. For real backend submission, connect `handleSubmit` to your API endpoint later.
