<template>
  <router-view v-slot="slotProps">
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>  

<script>
export default {
  data() {
    return {
      usersVisibility: false,
      visibleParagraph: false, 
      dialogIsVisible: false,
      enterInterval: null,
      leaveInterval: null };
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enterMethod(el, done) {
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.004;
        round ++;
        if(round > 250) 
        {
          clearInterval(this.enterInterval);
          done();
        }
      },10);
    },
    afterEnter() {},
    enterCancelled(el) {
      console.log(el);
      clearInterval(this.enterInterval);
    },
    beforeLeave(el) {
      el.style.opacity = 1;
    },
    leaveMethod(el , done) {
      let round = 1;
      this.leaveInterval = setInterval(()=> {
        el.style.opacity = 1 -  round * 0.004;
        round ++;
        if(round > 250) 
        {
          clearInterval(this.leaveInterval);
          done();
        }
      },10);
    },
    afterLeave() {},
    leaveCancelled(el) {
      console.log(el);
      clearInterval(this.leaveInterval);
    },
    showUsers() {
      this.usersVisibility = true;
    },
    hideUsers() {
      this.usersVisibility = false;
    },
    toggleVisibility() {
      this.visibleParagraph = !this.visibleParagraph;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.para-enter-from {
  opacity: 0;
  transform: TranslateY(-30px);
}

.para-enter-active {
  transition: all 0.3s ease-out;
}

.para-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.para-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.para-leave-active {
  transition: all 0.3s ease-in;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(-30PX);
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
} 
</style>