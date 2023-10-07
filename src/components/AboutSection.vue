<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center" id="mainAboutContent">
            <v-col cols="12" md="7">
              <h1 class="font-weight-light display-2">Oczyszczanie ekosystemu wodnego</h1>
              <h1 class="font-weight-light display-1 mb-7">
                 I jak pomoże Nam w tym robot?
              </h1> 
              <v-row>
                <v-col cols="12" class="d-flex align-center" @click="slajd1()">
                  <v-img
                    src="@/assets/img/icon1.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="paragraph-description">
                    Zbieranie śmieci z powierzchni wody nie tylko usunie sprzed oczu przykry widok, lecz także zapobiegnie rozwojowi bakterii i uwalnianiu się szkodliwych związków chemicznych 
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon2.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="paragraph-description">
                    Panel fotowoltaiczny umieszczony na łodzi przyczyni się do zredukowania śladu węglowego i umożliwi dłuższą pracę robota       
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon3.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="paragraph-description">
                    Innowacyjny system zbierania oleju pozwoli zapobiegać katastrofom ekologicznym w niesamowicie szybki i prosty sposób.
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                src="@/assets/img/ill1.svg"
                class="d-block ml-auto mr-auto"
                max-width="400px"
              />
            </v-col>
          </v-row>

               <v-btn
                rounded
                large
                fab
                color="secondary"
                dark
                @click="slajdundo()"
              >
                <v-icon class="ml-2">mdi-arrow-left</v-icon>
              </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
#about {
  background-color: #f4f7f5;
}

.paragraph-description {
  text-align: justify;
  @media (max-width: 600px){
    text-align: left;
  }

}
</style>

<script>
export default {
  name: 'About',
  methods: {

    slajd1(){
       let mainAboutContent = document.getElementById('mainAboutContent')

        mainAboutContent.style.transition = "3000ms"
        mainAboutContent.style.transform = "translate3d(100vw, 0, 0)"

        

    },
     slajdundo(){
       let mainAboutContent = document.getElementById('mainAboutContent')

        mainAboutContent.style.transition = "3000ms"
        mainAboutContent.style.transform = "translate3d(0, 0, 0)"

        

    }

  }
}
</script>
