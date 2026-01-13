import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../config/firebase';

/**
 * Register user with Firebase Authentication
 */
export const registerWithFirebase = async (email, password, fullName) => {
  try {
    console.log('🔥 Attempting Firebase registration...');
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update user profile with full name
    await updateProfile(userCredential.user, {
      displayName: fullName
    });
    
    console.log('✅ Registration successful:', userCredential.user.email);
    return userCredential.user;
  } catch (error) {
    console.error('❌ Firebase registration error:', error.code, error.message);
    throw new Error(getFirebaseErrorMessage(error.code));
  }
};

/**
 * Login user with Firebase Authentication
 */
export const loginWithFirebase = async (email, password) => {
  try {
    console.log('🔥 Attempting Firebase login...');
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('✅ Login successful:', userCredential.user.email);
    return userCredential.user;
  } catch (error) {
    console.error('❌ Firebase login error:', error.code, error.message);
    throw new Error(getFirebaseErrorMessage(error.code));
  }
};

/**
 * Logout user from Firebase
 */
export const logoutFromFirebase = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Firebase logout error:', error);
    throw error;
  }
};

/**
 * Sign in with Google
 */
export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error('Google sign-in error:', error);
    throw new Error(getFirebaseErrorMessage(error.code));
  }
};

/**
 * Sign in with GitHub
 */
export const signInWithGithub = async () => {
  try {
    const provider = new GithubAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error('GitHub sign-in error:', error);
    throw new Error(getFirebaseErrorMessage(error.code));
  }
};

/**
 * Get current Firebase user
 */
export const getCurrentFirebaseUser = () => {
  return auth.currentUser;
};

/**
 * Listen to auth state changes
 */
export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

/**
 * Get user-friendly error messages
 */
const getFirebaseErrorMessage = (errorCode) => {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'This email is already registered. Please login instead.';
    case 'auth/invalid-email':
      return 'Invalid email address.';
    case 'auth/operation-not-allowed':
      return 'Email/Password authentication is not enabled. Please enable it in Firebase Console: Authentication → Sign-in method → Email/Password.';
    case 'auth/weak-password':
      return 'Password is too weak. Please use at least 6 characters.';
    case 'auth/user-disabled':
      return 'This account has been disabled.';
    case 'auth/user-not-found':
      return 'No account found with this email.';
    case 'auth/wrong-password':
      return 'Incorrect password. Please try again.';
    case 'auth/invalid-credential':
      return 'Invalid credentials. Please check your email and password.';
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please try again later.';
    case 'auth/network-request-failed':
      return 'Network error. Please check your internet connection.';
    case 'auth/popup-closed-by-user':
      return 'Sign-in popup was closed. Please try again.';
    case 'auth/cancelled-popup-request':
      return 'Sign-in was cancelled.';
    case 'auth/unauthorized-domain':
      return 'This domain is not authorized. Please add it to Firebase Console: Authentication → Settings → Authorized domains.';
    default:
      return `Authentication error (${errorCode}). Please try again or contact support.`;
  }
};
