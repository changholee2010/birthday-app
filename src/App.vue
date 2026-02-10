<script setup>
import { auth } from './firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const login = async () => {
  const provider = new GoogleAuthProvider()
  const result = await signInWithPopup(auth, provider)
  console.log(result.user)
}
</script>

<template>
  <h1>Birthday App</h1>
  <button @click="login">Login with Google</button>
</template>
