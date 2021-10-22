<template>
  <v-container>
    <div>
      <v-row no-gutters>
        <v-col cols="6" md="5">
          <p class="topic">Lorem ipsum dolor sit amet</p>
          <p class="detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
            luctus sollicitudin vitae, nibh. Risus purus pretium sit congue nisl
            vestibulum orci, vitae risus at egestas viverra.
          </p>
          <v-btn
            to="/login"
            rounded
            class="regbut"
            color="yellow darken-2 white--text uppercase"
          >
            Get Started</v-btn
          >
        </v-col>

        <v-col cols="12" md="7">
          <img class="sayhi" src="./Saly-10.png" alt="" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Lbbody",
};
</script>

<style>
.sayhi {
  width: 613px;
  height: 613px;
}

.topic {
  padding-top: 120px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 70px;
}

.detail {
  padding-top: 10px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
}

.regbut {
  font-family: Rubik;
}
</style>
