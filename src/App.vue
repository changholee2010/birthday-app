<template>
  <div class="container">
    <h1>🎂 Birthday Message Service</h1>
    <p>Vue + GitHub Pages + Firebase</p>
    <p>what is next?</p>
    <button @click="login">Login with Google</button>
  </div>
</template>

<script setup>
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const login = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  console.log(result.user);
};
</script>
