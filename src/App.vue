<script>
import { RouterView } from 'vue-router'
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
}
</script>

<template>
  <div :class="{ 'dark-mode': isDarkMode }">
    <div class="navpage">
      <div class="logo">
          <img src="@/assets/Union.svg">
          <h1 style="font-weight: 100;">MetaBlog</h1>
      </div>
      <ul style="display: flex;">
        <li>Home</li>
        <li>Blog</li>
        <RouterLink to="/singlepost" style="text-decoration: none; color: black"><li>Single Post</li></RouterLink>
        <li>Pages</li>
        <li>Contact</li>
      </ul>
      <input type="text" value placeholder="Search" class="icon">
      <img @click="toggleDarkMode" src="@/assets/Swich.svg">
    </div>
    <RouterView /> 
  </div>
</template>

<style scoped>
.icon {
    padding: 8px;
    background: url("https://static.thenounproject.com/png/101791-200.png") no-repeat right;
    background-size: 16px;
    background-color: #F4F4F5;
    height: 25px;
    width: 166px;
    border: none;
    border-radius: 5px;
}
li{
    list-style: none; 
    margin: 10px;
}
.logo{
    width: 158px; 
    height: 36px; 
    display: flex;
    justify-content: center; 
    align-items: center;
}
.navpage{
    width: 1216px; 
    margin: auto; 
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    margin-bottom: 35px;
}
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