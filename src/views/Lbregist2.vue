<template>
  
  <div id="app">
        <h3>Firebase Data</h3>
        {{ firebaseData }}

        <h3>Form Data</h3>
        {{ formData }}

    <form @submit.prevent="updateFirebase">
        <input type="text" name="name" v-model="formData.name" />
        <input type="email" name="name" v-model="formData.email"/>
        <input type="tel" name="name" v-model="formData.phone"/>

        <button type="submit"></button>

    </form>
  </div>

</template>

<script>
import { db } from '../firebase';

const documentPath = 'contacts/jeff';

export default {
    data() {
        return {
            firebaseData: null,
            FormData: {},
            state: 'loading'
        };
    },

    firestore() {
        return {
            firebaseData: db.doc(documentPath),
        };

    },
    methods: {
        async updateFirebase() {
            try {
                await db.doc(documentPath).set(this.formData);
                this.state = 'synced'
            } catch (error) {
                this.errorMessage = JSON.stringify(error)
                this.state = 'error';

            }
        }
    },
};
</script>

<style>

</style>