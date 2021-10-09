<template>
  <v-container>
    <div id="home">
      <h1>Hello Home</h1>  
      <h1 class="orange white--text"> BG and Text Color </h1>
      <h1 class="red white--text text--darken-4"> BG and Text Color </h1>
      <h1 class="display-4">Vuetify Font</h1>
      <h1 class="title">Vuetify Font</h1>
      <h1 class="topic">Vuetify Font</h1>
      <h1>Vuetify Font</h1>
      <h1>Vuetify Font</h1>
      <h1>Vuetify Font</h1>
      <h1>Vuetify Font</h1>
      <h1>Vuetify Font</h1>
      <v-btn class="success">Click</v-btn>
      <v-btn class="error">Click</v-btn>
      <v-btn class="warning">Click</v-btn>
      <v-btn class="info">Click</v-btn>
      <v-btn class="blue">Click</v-btn>
      <v-btn color="blue yellow--text">Click</v-btn>

      <v-btn color="blue yellow--text">Click
        <v-icon>pet</v-icon>
      </v-btn>

      <h1>Home</h1>
      <p class="orange lighten-3 red--text text--darken-2" >code hello</p>
      <p class="text-uppercase">Text Setting</p>
      <h1 class="display-4 text-uppercase">Text Setting</h1>
      <p class="caption">Text Setting</p>
      <p class="title font-weight-bold">Text Setting</p>

      <v-btn color="pink" dark mb-5>run</v-btn>
      <br>
      <br>
      <v-btn fab depressed class ="pink" dark ma-5>run</v-btn>
      <br>
      <br>
      <v-btn outlined color ="pink" class="ma-5">
        <span>Email</span>
        <v-icon>email</v-icon>
      </v-btn>
      <br>
      <br>
      <v-btn fab class ="grey" dark >
        <v-icon>language</v-icon>        
      </v-btn>
      <br>
      <br>
      <v-icon size="50">language</v-icon>


    </div>
  </v-container>    
</template>

<script>
export default {
    name: "home"

}
</script>

<style>
.topic{
    font-size: 30;
    color: blue;
    font-family: Roboto;
}
</style>