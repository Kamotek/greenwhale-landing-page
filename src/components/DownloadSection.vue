<template>
  <section id="download">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4" class="hidden-xs-only">
              <v-img src="@/assets/img/ill2.svg" class="d-block ml-auto mr-auto" max-width="350px" />
            </v-col>
            <v-col cols="12" sm="8" class="white--text text-left who-are-we">
              <h1 class="font-weight-light display-2 mb-2">Kim jesteśmy?
              </h1>
              <h1 class="font-weight-light">
                GreenWhale to inicjatywa stworzona przez uczniów ZSTiO w Jarosławiu.
                Gorąca potrzeba zmian, oraz pogłębiający się problem zanieczyszczenia środowiska skłonił nas do wykorzystania swoich umiejętności w celu skonstuowania zdalnie sterowanego robota wyposażonego w innowacyjne technologie.
              </h1>
            <!--  <v-btn rounded outlined href="" target="_blank" large color="white" class="mt-4">
                <v-icon class="mr-2">
                  
                </v-icon>
                A i guziczek
              </v-btn> -->
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#download {
  background-image: url("~@/assets/img/bgDownload.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#download .container,
#download .row {
  height: 100%;
}
</style>

<style lang="scss">
  .who-are-we {
    @media (max-width: 600px) {  
    font-size: 75%
    }
  }
</style>