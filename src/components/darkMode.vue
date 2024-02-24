<!-- App.vue -->
<template>
    <div :class="{ 'dark-mode': isDarkMode }">
      <button @click="toggleDarkMode">Toggle Dark Mode</button>
      <h1>Welcome to My App</h1>
      <!-- Your app content goes here -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDarkMode: false
      };
    },
    methods: {
      toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Light mode styles */
  .dark-mode {
    background-color: #333; /* Dark background color */
    color: #fff; /* Light text color */
  }
  
  /* Dark mode styles */
  .dark-mode h1 {
    color: #fff; /* Light text color in dark mode */
  }
  
  /* Add more styles for dark mode as needed */
  </style>
  