# 🔥 Firebase Authentication Setup Guide

## ⚠️ Error: "Operation not allowed"

This error occurs because **Email/Password authentication is not enabled** in your Firebase project.

## ✅ How to Fix:

### Step 1: Go to Firebase Console
1. Open [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **yourfundmate**

### Step 2: Enable Email/Password Authentication
1. In the left sidebar, click **"Authentication"**
2. Click on the **"Sign-in method"** tab
3. Find **"Email/Password"** in the list of providers
4. Click on **"Email/Password"**
5. Toggle **"Enable"** switch to ON
6. Click **"Save"**

![Firebase Auth Setup](https://i.imgur.com/example.png)

### Step 3: (Optional) Enable Other Sign-in Methods

#### Enable Google Sign-In:
1. In the same **"Sign-in method"** tab
2. Click on **"Google"**
3. Toggle **"Enable"** switch to ON
4. Select a support email
5. Click **"Save"**

#### Enable GitHub Sign-In:
1. First, create a GitHub OAuth App:
   - Go to GitHub Settings → Developer settings → OAuth Apps
   - Click "New OAuth App"
   - Fill in the details:
     - Application name: `FundMate`
     - Homepage URL: `https://yourfundmate.firebaseapp.com`
     - Authorization callback URL: `https://yourfundmate.firebaseapp.com/__/auth/handler`
   - Copy the Client ID and Client Secret

2. Back in Firebase Console:
   - In **"Sign-in method"** tab
   - Click on **"GitHub"**
   - Toggle **"Enable"** switch to ON
   - Paste Client ID and Client Secret
   - Click **"Save"**

3. Uncomment GitHub buttons in:
   - `src/pages/Login.jsx`
   - `src/pages/Register.jsx`

### Step 4: Add Authorized Domains (if needed)
1. In Firebase Console → Authentication
2. Click on **"Settings"** tab
3. Scroll to **"Authorized domains"**
4. Make sure these domains are added:
   - `localhost` (for local development)
   - Your production domain (e.g., `yourfundmate.web.app`)

## 🧪 Test Your Setup

After enabling Email/Password authentication:

1. Try registering a new account
2. Check Firebase Console → Authentication → Users to see the new user
3. Try logging in with the created account

## 📋 Checklist

- [ ] Email/Password authentication enabled
- [ ] Google Sign-in enabled (optional)
- [ ] GitHub Sign-in enabled (optional)
- [ ] Authorized domains configured
- [ ] Test registration works
- [ ] Test login works
- [ ] Test social sign-in works (if enabled)

## 🆘 Still Having Issues?

### Common Problems:

1. **"Unauthorized domain"** error:
   - Add your domain to Authorized domains in Firebase Console

2. **"API key not valid"** error:
   - Check your `.env` file has correct Firebase config values

3. **"Network error"** error:
   - Check your internet connection
   - Verify Firebase project is active (not in free tier limits)

4. **Google Sign-in not working**:
   - Make sure Google provider is enabled
   - Check that support email is selected
   - Clear browser cache and try again

## 📞 Need Help?

Check the official Firebase documentation:
- [Firebase Authentication Docs](https://firebase.google.com/docs/auth)
- [Email/Password Authentication](https://firebase.google.com/docs/auth/web/password-auth)
- [Google Sign-In](https://firebase.google.com/docs/auth/web/google-signin)
- [GitHub Sign-In](https://firebase.google.com/docs/auth/web/github-auth)
