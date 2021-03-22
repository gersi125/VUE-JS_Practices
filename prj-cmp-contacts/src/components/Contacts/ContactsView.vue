<template>
  <li>
    <base-card>
     <header>
      <h3>{{ name + ' ' + surname}} {{ favoriteContact ? '(Favourite)' : ''}}</h3>
      <table>
      <td><base-button @click="toggleDetails" mode="flat"> {{ detailsVisible ? 'Hide' : 'Show'  }} Details</base-button></td>
      <td><base-button @click="removeContact(id)" mode="flat">Remove</base-button></td>
      </table>
     </header>
     <base-details-card v-if="detailsVisible">
     <table >
       <tr><th>Age: </th><td width=40%>{{ calculateAge }} Years</td><th v-if="!!phone">Phone: </th><td> {{ phone }}</td></tr>
       <tr><th>Gender: </th><td width=40%>{{ gender }}</td><th v-if="!!email">E-mail: </th><td>{{ email }}</td></tr>    
     </table>
     <br>
      <base-fav-button @click="toggleFavorites">{{ favoriteContact ? 'Remove from' : 'Add to' }} Favorite Contacts</base-fav-button>
     </base-details-card>
    </base-card>
  </li>
</template>

<script>
export default {
  data() {
    return {
         detailsVisible: false,
         favoriteContact: false
    }
  },
    props: {
      id: {
        type: String,
        required: true
      }, 
      name: {
        type: String,
        required: true
      }, 
      surname: {
        type: String,
        required: true
      }, 
      birth: {
        type: Date,
        required: true
      },
      gender: {
        type: String,
        required: true,
        validator(value) {
          return value === 'Male' || value === 'Female';
          }
      },
      phone: {
        type: String,
        required: false
      },
      email: {
          type: String,
          required: false
      }
    },
    inject: ['removeContact'],
    computed: {
      calculateAge() {
        const currDate = new Date().getFullYear();
        const birthDate = parseInt(this.birth);
        const age = currDate - birthDate;
        return age;
      }
    },
    methods: {
      toggleDetails() {
        this.detailsVisible = !this.detailsVisible;
      },
      toggleFavorites() {
        this.favoriteContact = !this.favoriteContact;
      }

    } 
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>