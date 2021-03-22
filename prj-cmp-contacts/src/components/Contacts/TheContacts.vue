<template>
   <base-card>
    <table width=100%>
     <th><base-button @click="setSelectedTab('saved-contacts')" :mode="savedContactsButtonMode">Saved Contacts</base-button></th>
     <th><base-button @click="setSelectedTab('add-contact')" :mode="addContactButtonMode">New Contact</base-button></th>
    </table>
   </base-card>
   <keep-alive>
   <component :is="selectedTab"></component>
   </keep-alive>
</template>

<script>
import SavedContacts from './SavedContacts.vue';
import AddContact    from './AddContact.vue';

export default {
    components: {
        SavedContacts,
        AddContact,
    },
    data() {
        return {
            selectedTab: 'add-contact',
            savedContacts: []
        }
    },
    computed: {
        savedContactsButtonMode() {
            return this.selectedTab === 'saved-contacts' ? null : 'flat';
        },
        addContactButtonMode() {
            return this.selectedTab === 'add-contact' ? null : 'flat';
        }
    },
    provide() {
        return {
            contacts: this.savedContacts,
            addContact: this.addContact,
            removeContact: this.removeContact
        };
    },

    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addContact(name, surname, birthdate, gender, phone, email)
        {
            const newContact = {
                id: new Date().toISOString(),
                firstName: name,
                lastName: surname,
                birthDate: birthdate,
                gender: gender,
                phoneNumber: phone,
                emailAddress: email
            };
            this.savedContacts.unshift(newContact);
            this.selectedTab = 'saved-contacts';
        },
        removeContact(contactId) {
            const contactIndex = this.savedContacts.findIndex(contact => contact.id === contactId);
            this.savedContacts.splice(contactIndex, 1);
        }
      
    }
}
</script>