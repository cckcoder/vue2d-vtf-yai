<template>
 <v-container>
     <div>
       <v-row>
         <v-col cols="12">
          <a @click="$router.push('/')"><img class="logo" src="../views/Vectary texture.png" alt=""></a>
          <p class="bar"><b>SCBPhonlamuangdee</b></p>
          <v-spacer></v-spacer>
         </v-col>
       </v-row>
     </div>
            
 </v-container>
  
</template>

<script>
export default {
    name: 'Lbnavbar'
}
</script>

<style>
.logo{
 float: left;
}

.bar{
  float: left;
  padding-top: 1.5rem;
}

</style>