<template>
  <v-container>
    <v-row class="justify-center mt-2">
      <v-responsive max-width="250">
        <v-text-field dense flat hide-details solo-inverted></v-text-field>
      </v-responsive>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text class="ml-3" v-bind="attrs" v-on="on">
            <v-icon> mdi-plus </v-icon>
          </v-btn>
        </template>
        <v-card class="mx-auto" max-width="344">
          <v-card-text>
            <div>
              <p class="text-h6 text--primary">add content to your profile</p>
              <p>Add learning, experience, and coursework to your profile.</p>
            </div>
            <div class="text--primary">
              <v-row>
                <v-btn depressed outlined small>Video</v-btn>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    reveal: false,
  }),
};
</script>
