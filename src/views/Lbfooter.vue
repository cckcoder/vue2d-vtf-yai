<template>
  <v-container fluid>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <div>
      <v-row class="footer1" no-gutters>

        <v-col class="col1" cols="6">
          <img class="logo" src="../views/Vectary texture.png" alt="" />
          <p class="bar"><b>SCBPhonlamuangdee</b></p>
          <p class="detailf">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit
            cursus nec, augue est.
          </p> 
          <a href="#"> <v-icon size="30">facebook</v-icon> </a>
          <span></span>
          <a href="#"> <v-icon size="30">language</v-icon> </a>
          <a href="#"> <v-icon size="30">call</v-icon> </a>
        </v-col>  

               

        <v-col class="col2" cols="2">
          <h4>Product</h4>
          <dl>
              <a href="#"><dt>lorem</dt></a>
              <a href="#"><dt>lorem</dt></a>
              <a href="#"><dt>lorem</dt></a>
              <a href="#"><dt>lorem</dt></a>
              <a href="#"><dt>lorem</dt></a>
              <a href="#"><dt>lorem</dt></a>
              <a href="#"><dt>lorem</dt></a>
              <a href="#"><dt>lorem</dt></a>
          </dl>
        </v-col>

        <v-col class="col3" cols="2">
          <h4>Engage</h4>
          <br>
          <dl>
              <a href="#"><dt>lorem</dt></a>
              <a href="#"><dt>lorem</dt></a>
              <a href="#"><dt>lorem</dt></a>
              <a href="#"><dt>lorem</dt></a>
              <a href="#"><dt>lorem</dt></a>
              <a href="#"><dt>lorem</dt></a>
              <a href="#"><dt>lorem</dt></a>
          </dl>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Lbfooter",
};
</script>

<style>
.footer1 {
  height: 563.12px;
  background-color: #f5f5f5;
  font-family: Rubik;
  text-align: justify;
}
.col1 {
  margin-top: 200px;
  margin-left: 180px; 
}
.col2 {
  margin-top: 200px;
}
.col3 {
  margin-top: 200px;
}

.detailf {
  clear: both;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #4f5665;
  padding-right: 500px;
}


</style>
