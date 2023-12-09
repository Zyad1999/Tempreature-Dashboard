
# Temperature Dashboard Application

This repository contains a full-stack application for monitoring and managing temperature data from devices. The system is divided into a Spring Boot backend, an Angular frontend, and utilizes MongoDB for data storage and RabbitMQ for message queuing and WebSockets for live updates.


## Tech Stack

**Client:** Spring Boot, MongoDB, RabbitMQ

**Server:** Angular, WebSocket


## Application Overview

The application consists of two main parts:

1-Device Table:
- Displays a table of devices along with their latest temperature readings.
- Clicking on a device shows its temperature history.

2- Real-time Updates:
- Simulates temperature updates through a textbox in the frontend.
- Live updates are sent from the backend to the frontend using WebSockets.
- Data is processed, saved in MongoDB, and pushed to the socket.
## Installation

Clone Github

```bash
  git clone https://github.com/your-username/temperature-dashboard-api.git
```
Install RabbitMQ Container

```bash
  docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```
 Install MongoDB  Container

```bash
  docker run -d --name devices-db -p 27017:27017 -e MONGO_INITDB_DATABASE=devices-db mongo
```
 Run The Backend

```bash
  cd temperature-dashboard-api
  ./mvnw spring-boot:run
```
 Run The Frontend

```bash
  cd temperature-dashboard
  npm install
  ng serve
```
## Access the Application
Visit http://localhost:4200 in your browser to access the Angular frontend.

The backend API will be available at http://localhost:8080.

Now, you have the Temperature Dashboard Application up and running locally!