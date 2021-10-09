<template>
  <div>
    <v-app>
      <v-main>
        <v-container fluid>
          <v-row>
            <v-card class="regist">
              <v-col>
                <h1 style="text-align: center">Register</h1>
                <p style="text-align: center; color: #4f5665; font-size: 12px">
                  Welcome to SCBPhonlamuangdee
                </p>
                <v-form ref="form">
                  <p class="boxd">Username*</p>
                  <v-text-field
                    filled
                    rounded
                    dense
                    v-model="username"
                    color="white"
                    prepend-inner-icon="person_outline"
                  >
                  </v-text-field>

                  <p class="boxd">Email*</p>
                  <v-text-field
                    filled
                    rounded
                    v-model="email"
                    dense
                    :rules="emailRules"
                    color="white"
                    prepend-inner-icon="mail_outline"
                  >
                  </v-text-field>

                  <p class="boxd">Password*</p>
                  <v-text-field
                    filled
                    rounded
                    dense
                    v-model="password"
                    type="password"
                    :rules="passwordRules"
                    color="white"
                    prepend-inner-icon="lock"
                  >
                  </v-text-field>

                  <p class="boxd">Confirm Password*</p>
                  <v-text-field
                    filled
                    rounded
                    dense
                    type="password"
                    color="white"
                    :rules="[
                      this.password === this.confirmPassword ||
                        'Password must match',
                    ]"
                    v-model="confirmPassword"
                    prepend-inner-icon="lock"
                  >
                  </v-text-field>

                  <v-checkbox
                    v-model="checkBoxTerm"
                    label="I agree to terms & conditions?"
                    required
                    :rules="checkBoxTermRule"
                  ></v-checkbox>

                  <v-checkbox
                    v-model="checkBoxPrivacy"
                    label="I agree to privacy policy"
                    required
                  ></v-checkbox>

                  <v-row class="justify-center pt-5">
                    <v-btn
                      rounded
                      color="yellow darken-2 white--text uppercase"
                      :disabled="formComplete"
                      @click="handleSubmit"
                    >
                      Register
                    </v-btn>

                    <v-btn to="/login" rounded outlined color="success">
                      Login
                    </v-btn>
                  </v-row>

                  <p class="pt-5">or</p>

                  <v-btn rounded class="regbut" outlined>
                    Register with Google
                  </v-btn>

                  <br />
                  <br />
                  <v-btn rounded class="regbut" color="grey" dark>
                    Register with kaidao.space
                  </v-btn>
                </v-form>
              </v-col>
            </v-card>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
// import firebase from "firebase";
export default {
  name: "App",
  mounted() {},
  data: () => ({
    invalid: true,
    username: "",
    email: "",
    password: "",
    checkBoxTerm: null,
    checkBoxPrivacy: null,
    confirmPassword: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [
      (value) => !!value || "Please type password.",
      (value) => (value && value.length >= 8) || "minimum 8 characters",
    ],
    checkBoxTermRule: [(v) => !!v || "Please agree to terms and conditions"],
    error: null,
    isBoxTerm: null,
  }),
  methods: {
    handleSubmit() {
      this.$store.dispatch("registerAction", {
        username: this.username,
        email: this.email,
        password: this.password,
        checkBoxTerm: this.checkBoxTerm,
        checkBoxPrivacy: this.checkBoxPrivacy,
      });
    },
  },
  computed: {
    formComplete() {
      if (
        this.username &&
        this.emailRules &&
        this.password &&
        this.checkBoxTerm &&
        this.checkBoxPrivacy &&
        this.password === this.confirmPassword
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style>
.regist {
  text-align: center;
  margin-left: 35%;
  width: 360px;
  height: 830px;
  background: #ffffff;
  box-shadow: 0px 6px 20px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
.boxd {
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #4f5665;
}
.logbut {
  float: right;
  width: 165px;
  height: 45px;
  border: 1px solid #696f79;
  box-sizing: border-box;
  border-radius: 50px;
}
</style>
