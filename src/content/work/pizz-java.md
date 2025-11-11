---
title: 🍕 Let's make a pizza!
publishDate: 2025-11-11 00:00:01
featured: 3
visible: true
img: /assets/work/pizz-java.png
img_alt: PizzJava interface
description: Java Distributed System Development
tags:
    - MQTT
    - Distributed System
    - Java
---

##### [📁 Check the code on GitHub](https://github.com/Hugo-COLLIN/MIAGE_JavaAvance_Lets-make-a-pizza)

## Overview
"Let's make a pizza!" is a distributed system that allows customers to order pizzas, track their preparation, cooking, and delivery in real-time. The system implements asynchronous event-based communication using the MQTT protocol.

This project was developed as part of a university course on advanced Java programming, focusing on creating a scalable architecture that can handle multiple clients and pizzerias simultaneously.

## Goal
The primary goals behind "Let's make a pizza!" were to learn:
- How to build a distributed system using event-driven architecture
- How to implement asynchronous communication between components using MQTT
- How to create a multi-module Maven project with shared dependencies
- How to develop a JavaFX application with real-time updates
- How to integrate external libraries (Pizzaiolo) into a larger system

## Features developed
- **Client Application**: JavaFX interface allowing users to browse menu, place orders, and track delivery status
- **Pizzeria Service**: Java service that receives orders, manages preparation through the Pizzaiolo, and notifies clients
- **MQTT Communication**: Asynchronous messaging system enabling real-time updates between clients and pizzeria
- **Multi-module Architecture**: Maven project structure with shared common module for data models
- **Real-time Tracking**: Live status updates from order placement to delivery
- **Error Handling**: Comprehensive error management with user-friendly notifications
- **Parallel Processing**: Support for multiple simultaneous orders

## Challenges Faced
The main challenges encountered during development included:

1. **MQTT Integration**: Learning how to properly implement publish/subscribe patterns and manage topic subscriptions dynamically.

2. **JavaFX Threading**: Handling UI updates from background MQTT threads required careful use of `Platform.runLater()` to avoid threading issues.

3. **Multi-module Setup**: Configuring Maven to properly handle shared dependencies and create standalone JARs was complex.

4. **Pizzaiolo Integration**: Adapting the external Pizzaiolo library to work with our data models required implementing the Adapter pattern.

5. **Asynchronous Programming**: Managing `CompletableFuture` and callback patterns for non-blocking operations.

## Skills Acquired

| Skills | Details |
|--------|---------|
| Distributed Systems Architecture | Learned how to design and implement a distributed system using event-driven architecture with MQTT messaging. |
| JavaFX Development | Gained experience in building desktop applications with JavaFX, including FXML layouts and MVC pattern implementation. |
| MQTT Protocol | Mastered publish/subscribe messaging patterns, topic management, and real-time communication between distributed components. |
| Maven Multi-module Projects | Learned how to structure complex projects with multiple modules, shared dependencies, and automated build processes. |
| Asynchronous Programming | Developed skills in handling asynchronous operations using CompletableFuture, callbacks, and event-driven programming. |
| Design Patterns | Applied Adapter pattern for library integration and MVC pattern for UI architecture. |
| Error Handling & UX | Implemented comprehensive error handling with timeout management and user-friendly error notifications. |
| CI/CD Pipeline | Set up GitLab CI/CD pipeline for automated building and deployment of JAR artifacts. |

## Conclusion
Developing "Let's make a pizza!" was an incredibly enriching experience that provided deep insights into distributed systems architecture. The project successfully demonstrates how modern messaging protocols like MQTT can create responsive, scalable applications.

The multi-module Maven structure proved essential for code organization and reusability, while the JavaFX interface provided an excellent platform for creating a user interface with real-time updates.

Working with the external Pizzaiolo library taught me the importance of design patterns like Adapter for integrating third-party components seamlessly. The asynchronous nature of the system, while challenging initially, resulted in a functional application that can handle multiple concurrent operations.

This project has enhanced my understanding of distributed systems, event-driven architecture, and modern Java development practices. The skills acquired are directly applicable to enterprise-level software development and have prepared me well for future projects involving microservices and real-time communication systems.