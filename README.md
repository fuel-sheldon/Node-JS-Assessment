# Node JS Assessment

## Getting Started

### Prerequisites

Download and install Node.js

### Installing

- 1.Clone this repo.

```
git clone https://github.com/fuel-sheldon/Node-JS.git
```

- 2.Install all the dependencies in folder.

```
npm install
```

- 3.Add a .env file with below parameters.

```
MONGO_URL=mongodb+srv://user:password@clustername.kdpmzsy.mongodb.net/collectionname?retryWrites=true&w=majority
JWT_SECRET=yoursecretkey
JWT_LIFETIME=yourlifetime
```

### Paragraph

I have developed a user registration and login system using Node.js, Express.js, MongoDB, and JWT token. The system consists of multiple Restful API endpoint to handle various user actions such as registration, login , logout, profile management, and car list retrieval. For registration, the endpoint `api/register` allows new users to sign up by sending their username, password, and display name along with a timestamp. Upon successful registration the system responds with a token, user ID, and display name, ensuring secure and authenticated user sessions. The login process at `api/session/login` follows a similar pattern, where users provide their credentials and receive a JWT token upon successful authentication.

Additional functionalities include logging out via `api/session/logout` ,which invalidates the current session token, and profile management endpoints `/api/getprofile` and `/api/updateprofile` that allow users to view and update their profile information, respectively. The car list retrieval endpoint `/api/carlist` provides a paginated list of cars with details such as name, brand , and available variants, secured by a valid JWT token. This comprehensive system ensures secure user authentication and efficient data handling, leveraging the robustness of MongoDB for data storage and JWT tokens for maintaining session integrity.

### Video link

Part 1 : https://www.loom.com/share/558b19a1f0d8459d852416620664818d?sid=74faf207-0d0f-4f83-bd0d-72059f4c01ba

Part 2 : https://www.loom.com/share/f0fc970d5aa840708cf47217cc7b5870?sid=453eba24-fd6a-47cb-b77e-4e7c0a193f6f
