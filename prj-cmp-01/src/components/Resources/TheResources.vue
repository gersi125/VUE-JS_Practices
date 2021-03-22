<template>
   <base-card>
     <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resurces</base-button>
     <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resources</base-button>
   </base-card>
   <keep-alive>
   <component :is="selectedTab"></component>
   </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource     from './AddResource.vue';

export default {
    components: {
        StoredResources,
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id:    'official-guide',
                    title: 'Vue Official-Guide',
                    desc:  'The official Vue.js Documentation.',
                    link:  'https://vuejs.org'
                },
                {
                    id:    'alphabeat',
                    title: 'Google',
                    desc:  'The official site for the World\'s most famous search-engine.',
                    link:  'https://google.com'
                },
                {
                    id:    'tsl-2020',
                    title: 'Tesla',
                    desc:  'The official site for the Tesla Motor electric cars.',
                    link:  'https://tesla.com'
                }
            ]
        }
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat';
        }
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            removeResource: this.removeResource
        };
    },

    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, desc, url)
        {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                desc: desc,
                link: url
            };
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
        removeResource(resourceId) {
            const resourceIndex = this.StoredResources.findIndex(res => res.id === resourceId);
            this.storedResources.splice(resourceIndex, 1);
        }
    }
}
</script>