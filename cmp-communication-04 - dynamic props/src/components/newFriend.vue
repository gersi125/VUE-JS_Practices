<template>
 <form @submit.prevent="submitData">
     <div>
         <label>Name</label>
         <input type="text" v-model="enteredName" />
     </div>
      <div>
         <label>Gender</label>
         <input type="gender" v-model="enteredGender" />
     </div>
     <div>
         <label>Phone</label>
         <input type="telephone"  v-model="enteredPhone"/>
     </div>
     <div>
         <label>E-Mail</label>
         <input type="email" v-model="enteredMail"/>
     </div>
      <div>
         <button>Add Contact</button>
     </div>
 </form>
</template>

<script>
 export default {
     emit: ['add-contact'],
     data() {
         return {
            enteredName:   '',
            enteredGender: '',
            enteredPhone:  '',
            enteredMail:   ''
        }
     },
     methods: {
         submitData() {
            this.$emit('add-contact', this.enteredName, this.enteredGender, this.enteredPhone, this.enteredMail);
         }
     }
 };
</script>

