<template>
    <div>
      <h1>Home</h1>
      <p>{{ userStore.userData?.email }}</p>
    </div>
  </template>
  
  <script setup>
  import {useUserStore} from '../stores/counter.js'
  const userStore = useUserStore();
  </script>
  
  <style>
  
  </style>