<template>
    <div>
     <h1>Main Page</h1>
     <h2>Welcome: {{user.email}}</h2>
    </div>
</template>

<script>
   import {mapState} from 'vuex'

    export default {
        name: 'Main',
        computed: {
            ...mapState(['user'])
        }
        
    }
</script>

<style lang="scss" scoped>

</style>