<template>
    <div>
     <h1>Profile A </h1>
     <h2>Welcome: {{user.email}}</h2>
     <Profile/>
    </div>
</template>

<script>
   import Profile from '@/components/Profile'
   import {mapState} from 'vuex'

    export default {
        name: 'ProfileA',
        components: {
            Profile
        },
        computed: {
            ...mapState(['user'])
        }
        
    }
</script>

<style lang="css" scoped>

</style>