# Firebase Setup Guide

## 🔥 Firebase Configuration

This project uses Firebase for authentication and other services. The Firebase configuration is stored securely in environment variables.

## 📋 Setup Instructions

### 1. Environment Variables

Create a `.env` file in the root directory (it's already created, but here's the structure):

```env
# API Base URL
VITE_API_BASE_URL=http://localhost:5000

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
```

### 2. Firebase Services Available

The following Firebase services are initialized and ready to use:

- **Authentication** (`auth`) - User authentication
- **Firestore** (`db`) - NoSQL database
- **Storage** (`storage`) - File storage

### 3. Usage Examples

#### Import Firebase Services

```javascript
import { auth, db, storage } from './config/firebase'
```

#### Using Firebase Authentication Service

```javascript
import { 
  registerWithFirebase, 
  loginWithFirebase, 
  signInWithGoogle,
  signInWithGithub,
  logoutFromFirebase 
} from './services/firebaseAuthService'

// Register a new user
const user = await registerWithFirebase(email, password, fullName)

// Login user
const user = await loginWithFirebase(email, password)

// Sign in with Google
const user = await signInWithGoogle()

// Sign in with GitHub
const user = await signInWithGithub()

// Logout
await logoutFromFirebase()
```

## 🔐 Security Notes

- ✅ `.env` file is already in `.gitignore` - your secrets are safe
- ✅ Never commit `.env` file to version control
- ✅ Use `.env.example` as a template for other developers
- ✅ Firebase API keys are safe to expose in client-side code (they're restricted by domain)

## 📁 File Structure

```
src/
├── config/
│   ├── api.js              # API configuration
│   └── firebase.js         # Firebase configuration
├── services/
│   ├── authService.js      # Backend API authentication
│   └── firebaseAuthService.js  # Firebase authentication
```

## 🚀 Getting Started

1. Make sure Firebase is installed:
   ```bash
   npm install firebase
   ```

2. Configure your Firebase project at [Firebase Console](https://console.firebase.google.com/)

3. Enable authentication methods you want to use (Email/Password, Google, GitHub, etc.)

4. Update your `.env` file with your Firebase credentials

5. Start the development server:
   ```bash
   npm run dev
   ```

## 🔄 Hybrid Authentication

This project supports both:
- **Backend API Authentication** (via `/api/login` and `/api/register`)
- **Firebase Authentication** (Google, GitHub, Email/Password)

You can use either or both based on your needs!
