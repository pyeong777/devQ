import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getDatabase, ref, set, get, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}

export async function getHtmlList() {
  return get(ref(database, "html")).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function getCssList() {
  return get(ref(database, "css")).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function getJsList() {
  return get(ref(database, "javascript")).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function getReactList() {
  return get(ref(database, "react")).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function getCsList() {
  return get(ref(database, "cs")).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function getBookMark(userId) {
  return get(ref(database, `bookmark/${userId}`)).then((snapshot) => {
    const items = snapshot.val() || {};
    return Object.values(items);
  });
}

export async function addToBookMark(userId, quest) {
  return set(ref(database, `bookmark/${userId}/${quest.id}`), quest);
}

export async function removeFromBookMark(userId, questId) {
  return remove(ref(database, `bookmark/${userId}/${questId}`));
}

export async function getIsBookMark(userId, questId) {
  return get(ref(database, `bookmark/${userId}/${questId}`)).then(
    (snapshot) => {
      const items = snapshot.val() || {};
      return Object.values(items);
    }
  );
}
