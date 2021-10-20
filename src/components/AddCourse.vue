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
                <v-dialog v-model="dialog" persistent max-width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="py-4"
                      depressed
                      outlined
                      x-small
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon> mdi-youtube </v-icon>
                      Video
                    </v-btn>
                  </template>
                  <v-card>
                    <v-toolbar color="primary" dark> Add Video </v-toolbar>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-form>
                            <v-col cols="12">
                              <v-text-field
                                v-model="videoUrl"
                                v-if="dialog"
                                autofocus
                                label="Video URL"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <!--  What did you learn from this video?  -->
                              <v-textarea
                                dense
                                rows="3"
                                v-model="videoDescript"
                              >
                                <template v-slot:label>
                                  <div>What did you learn from this video?</div>
                                </template>
                              </v-textarea>
                            </v-col>
                          </v-form>
                        </v-row>
                      </v-container>
                      <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="dialog = false">
                        Close
                      </v-btn>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="submitVideoInfo"
                        :disabled="isBtnDisable"
                      >
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
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
    dialog: false,
    disable: true,
    videoUrl: "",
    videoDescript: "",
    userId: "",
    videoInfo: {},
  }),
  methods: {
    submitVideoInfo() {
      this.dialog = false;
      this.videoInfo = {
        videoUrl: this.videoUrl,
        videoDescript: this.videoDescript,
      };
      this.userId = this.getUserId();

      this.$store.dispatch("addVideoInfo", {
        userId: this.userId,
        videoInfo: this.videoInfo,
      });

      this.videoUrl = "";
      this.videoDescript = "";
    },
    getUserId() {
      let userData = JSON.parse(localStorage.getItem("userData"));
      return userData.id;
    },
  },
  computed: {
    isBtnDisable() {
      return this.videoUrl ? false : true;
    },
  },
};
</script>

<style lang="css" scoped></style>
