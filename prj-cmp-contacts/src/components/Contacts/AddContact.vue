<template>
<base-dialog v-if="invalidName" title="Invalid First Name Input" @close="confirmNameError">
    <template #default>
      <p>The Name field must not be empty!</p>
    </template>
    <template #actions>
      <base-button @click="confirmNameError">Okay</base-button>
    </template>
  </base-dialog>
  <base-dialog v-if="invalidSurname" title="Invalid Last Name Input" @close="confirmSurnameError">
  <template #default>
      <p>The Last Name field must not be empty!</p>
    </template>
    <template #actions>
      <base-button @click="confirmSurnameError">Okay</base-button>
    </template>
  </base-dialog>
    <base-dialog v-if="invalidBirthdate" title="Invalid Birth Date Input" @close="confirmBirthError">
  <template #default>
      <p>Please enter your birth date!</p>
    </template>
    <template #actions>
      <base-button @click="confirmBirthError">Okay</base-button>
    </template>
  </base-dialog>
      <base-dialog v-if="invalidGender" title="Invalid Gender Input" @close="confirmGenderError">
  <template #default>
      <p>Please select your gender!</p>
    </template>
    <template #actions>
      <base-button @click="confirmGenderError">Okay</base-button>
    </template>
  </base-dialog>
 <base-card>
    <form @submit.prevent="submitData">
       <div class="form-control">
            <label for="first-name">First Name</label>
            <input id="first-name" name="first-name" type="text" v-model="firstnameInput"><br>
            <label for="last-name">Last Name</label>
            <input id="last-name" name="last-name" type="text" v-model="lastnameInput">
        </div>
        <div class="form-control">
            <label for="birth-date">Date of Birth</label>
            <input id="birth-date" name="birth-date" type="date" v-model="birthdateInput">
        </div>
        <div class="form-control">
            <label for="gender">Gender</label>
            <table>
                <tr>
                  <th>Female</th>
                  <th><input id="female" name="gender" type="radio" value="Female" v-model="genderInput"></th>
                </tr>
                <tr>
                  <th>Male</th>
                  <th><input id="male" name="gender" type="radio" value="Male" v-model="genderInput"></th>     
                </tr>  
            </table>                    
        </div>
        <div class="form-control">
            <label for="phone-number">Phone Number</label>
            <input id="phone-number" name="phone-number" type="text" v-model="phoneInput">
        </div>
        <div class="form-control">
            <label for="email-address">E-Mail</label>
            <input id="email-address" name="email-address" type="text" v-model="emailInput">
        </div><br>
        <div>
        <base-button type="submit">Add Contact</base-button>
        </div>
    </form> 
 </base-card>
</template>

<script>

export default {
    inject: ['addContact'],
    data() {
        return {
            invalidName:      false,
            invalidSurname:   false,
            invalidBirthdate: false,
            invalidGender:    false
        }
    },
    provide() {
        return {
            validateMail: this.validateMail,
            validatePhone: this.validatePhone
        };
    },
    methods: {
        submitData() {
            const enteredName      = this.firstnameInput;
            const enteredSurname   = this.lastnameInput;
            const enteredBirthDate = this.birthdateInput;
            const enteredPhone     = this.phoneInput;
            const enteredEmail     = this.emailInput;
            const enteredGender    = this.genderInput;
           
            if(enteredName.trim() === '') {
               this.invalidName = true;
               return;
            } else if (!enteredSurname ||enteredSurname.trim() === '' ){
                this.invalidSurname = true;
                return;   
            } else if (!enteredBirthDate) {
                this.invalidBirthdate = true;
                return;
            } else if(!enteredGender) {
                this.invalidGender = true;
                return;
            }
            
            this.addContact(enteredName, enteredSurname, 
                            enteredBirthDate, enteredGender, 
                            enteredPhone, enteredEmail);
        },
        confirmNameError() {
            this.invalidName = false;
        },
        confirmSurnameError() {
            this.invalidSurname = false;
        },
        confirmBirthError() {
            this.invalidBirthdate = false;
        },
        confirmGenderError() {
            this.invalidGender = false;
        }
    } 
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input[type="date"] {
  display: block;
  width: 25%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

table {
    text-align: left;
}

.form-control {
  margin: 1rem 0;
}
</style>