---
title: "LED Strip control"
summary: "Driving 25m of RGB LED strips from sound — turning the acoustic atmosphere into ambient light."
tags: ["LED", "Arduino", "PIC", "Android", "FFT"]
order: 7
---

## Reactive ambient lighting

As fascinated as I am by all kinds of interactive entertaining electronic devices, I could not resist buying 25 meters of RGB LED strips.

To me, these were representing the opportunity to create an infinite number of ambient light applications — from computer or smartphone event notifying to sweet evening dimming and morning wakening light. That said, I focused my work on trying to create a control system that generates an ambient light according to the surrounding **acoustic** atmosphere — being able to follow the progressions of noise and music, giving a kind of new **visual** dimension to the human hearing sense.

In this article, I will highlight the main steps of the long development process I ran through, trying to design the most handy and pleasant system as possible.

- **Arduino**
  - Analog inputs
  - Python script and serial communication
  - Fast Fourier Transform
- **PIC microcontroller**
  - Analog inputs
  - UART serial communication
- **Android smartphone**
  - TCP/IP server socket
  - Bluetooth
  - Embedded Fast Fourier Transform
