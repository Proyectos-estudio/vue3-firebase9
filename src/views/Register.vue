<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="Ingrese email" v-model.trim="email" />
      <input
        type="password"
        placeholder="Ingrese contraseña"
        v-model.trim="password"
      />
      <button type="submit" :disabled="userStore.loadingUser">Crear usuraio</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useUserStore } from "../stores/counter";
// import {useRouter} from 'vue-router'

const email = ref("");
const password = ref("");

const userStore = useUserStore();
// const router = useRouter()

const handleSubmit = async () => {
  if (!email.value || password.value.length < 6) {
    return alert("Campos sin llenar");
  }
  await userStore.registerUser(email.value, password.value)
  // router.push('/')

};
</script>

<style></style>
