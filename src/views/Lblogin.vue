<template>
  <div>
    <v-app>
      <v-content>
        <v-container fluid>
          <v-row>
            <v-card class="loginc">
              <v-col>
                <h1 style="text-align: center">Login</h1>
                <p style="text-align: center; color: #4f5665; font-size: 12px">
                  Welcome Back
                </p>
                <v-form ref="form" lazy-validation>
                  <p class="boxd">Email*</p>
                  <v-text-field
                    filled
                    rounded
                    dense
                    v-model="email"
                    color="white"
                    prepend-inner-icon="person_outline"
                    :rules="loginRules"
                    required
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
                    required
                  >
                  </v-text-field>

                  <p class="boxd">Forget Password?</p>

                  <v-btn
                    rounded
                    class="loginbut"
                    color="yellow darken-2 white--text uppercase"
                    @click="handleLogin"
                  >
                    Login
                  </v-btn>

                  <p>or</p>

                  <v-btn rounded class="regbut" outlined>
                    Login with Google
                  </v-btn>

                  <br />
                  <br />
                  <v-btn rounded class="regbut" color="grey" dark>
                    Login with kaidao.space
                  </v-btn>
                </v-form>
              </v-col>
            </v-card>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
    {{ $data }}
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: null,
      password: null,
      loginRules: [(v) => !!v || "Email is required"],
      passwordRules: [
        (value) => !!value || "Please type password.",
        (value) => (value && value.length >= 8) || "minimum 8 characters",
      ],
      error: null,
    };
  },
  methods: {
    handleLogin() {
      let formValid = this.$refs.form.validate();
      if (formValid) {
        this.$store
          .dispatch("loginAction", {
            email: this.email,
            password: this.password,
          })
          .then(() => {
            this.$router.push({
              name: "Main",
            });
          });
      }
    },
  },
};
</script>

<style>
.loginc {
  text-align: center;
  margin-left: 35%;
  width: 360px;
  height: 650px;
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

.loginbut {
  width: 300px;
  height: 56px;
  background: #ffc107;
  border-radius: 40px;
}
</style>
