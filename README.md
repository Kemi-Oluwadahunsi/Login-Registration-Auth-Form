# Login/Registration Form with Firebase Authentication

This project is a login and registration form built with React and Vite. It uses Firebase for authentication (email/password and Google Sign-In) and Firestore to store user information. The form is styled using Tailwind CSS.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Setup Firebase](#setup-firebase)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration with email, password, and additional user information (username).
- User login with email and password.
- Google Sign-In pop-out for quick authentication.
- Form validation using React state hooks and regex.
- Secure storage of user information in Firestore.
- Responsive design using Tailwind CSS.

## Installation

To get started with this project, clone the repository and install the necessary dependencies.

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
npm install
```
## Setup Firebase
1. Go to the [Firebase Console](firebase.google.com/console) and create a new project.
2. Enable Authentication:
- Go to the Authentication section and enable Email/Password and Google Sign-In methods.
3. Set up Firestore:
- Go to Firestore Database, create a new database, and start in test mode.
4. Add your Firebase configuration to the project:
- Create a .env file in the root of your project and add your Firebase configuration:
   ```javascript
    VITE_FIREBASE_API_KEY=your-api-key
    VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
    VITE_FIREBASE_PROJECT_ID=your-project-id
    VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    VITE_FIREBASE_APP_ID=your-app-id
   ```

## Running the Application
```bash
npm run dev
```

## Usage
- Navigate to the Registration page by clicking on the signup button on the homepage.
  
  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716272242/Home_a7z2bw.png" alt="home" />
  
- Enter Your correct details in the input fields. Make sure you pass the validations by checking if the red times change to a green tick.
  
  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716272240/register_v9ubkt.png" alt="reg" />
  
- Click on submit, and you should see a toast message that says 'registration successful'.
- Alternatively, you can use the Google Sign-In button to log in with your Google account, it automatically signs you up as well.
- After a successful registration, you will be redirected automatically to the Login page.
  
  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716272663/login_wn6eqm.png" alt="login" />
  
- Enter your email and password used during registration and it should log you in.
  
  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716272239/signin_rqpyau.png" alt="success" />
  
- You will be redirected to a welcome page upon successful login, where you will also see the logout button that logs you out of the application.
  
  <img src="https://res.cloudinary.com/dee9teadk/image/upload/v1716272236/success_rmfjv2.png" alt="welcome" />

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -m 'Add your feature').
4. Push to the branch (git push origin feature/your-feature).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

