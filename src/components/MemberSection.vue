<template>
  <section id="pricing" class="pb-8">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-card style="width: 100%">
            <h1 class="text-center pt-6 font-weight-light display-2">Grupa projektowa</h1>
            <v-divider class="my-6"></v-divider>
            <v-row class="text-center">
              <v-col class="col-12 col-sm-6 col-md-6">
                <div class="flex-center">
                  <v-card-text>
                    <div class="text-uppercase text-h4 mt-6 green--text">Lider Zespołu</div>
                    <div class="flex-center">
                        <div class="circle1">
                          <v-img src="~@/assets/img/kuba.jpg" class="team-image" />
                      </div>
                    </div>
                    <div class="text--disabled text-uppercase text-h5 my-2">Jakub Nowak</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase green--text">jakub.nowak@greenwhale.pl</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase green--text"><a href="https://www.facebook.com/profile.php?id=100062807602636" target="_blank">Profil na Facebooku</a></div>
                    <v-divider class="my-2"/>

                  </v-card-text>
                  <v-divider style="margin-right: -23px" vertical v-if="this.$vuetify.breakpoint.smAndUp"></v-divider>
                </div>
                <v-divider class="mx-4" v-if="!this.$vuetify.breakpoint.smAndUp"></v-divider>
              </v-col>
              <v-col class="col-12 col-sm-6 col-md-6">
                <div class="flex-center">
                  <v-card-text>
                    <div class="text-uppercase text-h4 mt-6 green--text">Technik</div>
                    <div class="flex-center">
                      <div class="circle1">
                          <v-img src="~@/assets/img/filip.png" class="team-image"/>
                      </div>
                    </div>
                    <div class="text--disabled text-uppercase text-h5 my-2">Filip Kubecki</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase green--text">filip.kubecki@greenwhale.pl</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase green--text"><a href="https://www.facebook.com/profile.php?id=100008509653578" target="_blank">Profil na Facebooku</a></div>
                    <v-divider class="my-2"/>


                  </v-card-text>
                  <v-divider style="margin-right: -23px" vertical v-if="this.$vuetify.breakpoint.mdAndUp"></v-divider>
                </div>
                <v-divider class="mx-4" v-if="!this.$vuetify.breakpoint.smAndUp"></v-divider>
              </v-col>
              <v-col class="col-12 col-sm-6 col-md-6">
                <v-divider v-if="this.$vuetify.breakpoint.smOnly" class="mx-4"></v-divider>

                <div class="flex-center">
                  <v-card-text>
                    <div class="text-uppercase text-h4 mt-6 green--text">Grafik</div>
                    <div class="flex-center">
                      <div class="circle1">
                          <v-img src="~@/assets/img/patryk.png" class="team-image"/>
                      </div>
                    </div>
                    <div class="text--disabled text-uppercase text-h5 my-2">Patryk Maj</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase green--text">patryk.maj@greenwhale.pl</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase green--text"><a href="https://www.facebook.com/Paprycek" target="_blank">Profil na Facebooku</a></div>
                    <v-divider class="my-2"/>

                  </v-card-text>
                  <v-divider style="margin-right: -23px" vertical v-if="this.$vuetify.breakpoint.smAndUp"></v-divider>
                </div>
              </v-col>
                                        <v-col class="col-12 col-sm-6 col-md-6">
                <v-divider v-if="this.$vuetify.breakpoint.smOnly" class="mx-4"></v-divider>

                <div class="flex-center">  
                  <v-card-text>
                    <div class="text-uppercase text-h4 mt-6 green--text text-center">Developer</div>
                    <div class="flex-center">
                      <div class="circle1">
                          <v-img src="~@/assets/img/kamil.jpg" class="team-image"/>
                      </div>
                    </div>
                    <div class="text--disabled text-uppercase text-h5 my-2 text-center">Kamil Badowicz</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase green--text text-center">kamil.badowicz@greenwhale.pl</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase green--text text-center"><a href="https://www.facebook.com/kamil.badowicz.33" target="_blank">Profil na Facebooku</a></div>
                    <v-divider class="my-2"/>

                  </v-card-text>
                </div>
              </v-col>
            </v-row>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-rounded text-light">

      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
      >
        <path
            d="M0,64L80,90.7C160,117,320,171,480,181.3C640,192,800,160,960,138.7C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
</template>

<style lang="scss">
$main_color: #283e79;

ul {
  font-size: 13px;
  line-height: 1.5em;
  margin: 5px 0 15px;
  padding: 0;

  li {
    list-style: none;
    position: relative;
    padding: 0 0 0 20px;
  }

  li {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 5px;
      width: 10px;
      height: 10px;
      background-color: $main_color;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-eeborder-radius: 50%;
    }
  }
}
</style>

<style scoped>
.header {
  background-color: #283e79;
  color: white;
}

.circle1 {
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

  .team-image {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }


.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-border-rounded svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #f4f7f5;
  z-index: -1;
}

#pricing {
  z-index: 0;
}

.content {
  z-index: 1;
}

svg {
  overflow: hidden;
}

section {
  position: relative;
}
</style>

<script>
export default {
  data: () => ({
    planos: [
      {
        title: "Básico",
        price: "R$100,00",
        img: "f1.png",
        features: [
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 1",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 2",
          },
          {
            icon: {
              text: "mdi-cancel",
              color: "red",
            },
            text: "Feature 3",
          },
          {
            icon: {
              text: "mdi-cancel",
              color: "red",
            },
            text: "Feature 4",
          },
        ],
      },
      {
        title: "Padrão",
        price: "R$150,00",
        img: "f2.png",
        features: [
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 1",
            color: "success",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 2",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 3",
            color: "success",
          },
          {
            icon: {
              text: "mdi-cancel",
              color: "red",
            },
            text: "Feature 4",
          },
        ],
      },
      {
        title: "Premium",
        price: "R$250,00",
        img: "f3.png",
        features: [
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 1",
            color: "success",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 2",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 3",
            color: "success",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 4",
            color: "success",
          },
        ],
      },
    ],
  }),
  computed: {
    size() {
      const size = {md: "large", xl: "x-large"}[
          this.$vuetify.breakpoint.name
          ];
      return size ? {[size]: true} : {};
    }
  },
};
</script>