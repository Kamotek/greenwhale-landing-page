<template>
  <section class="pb-8" id="contact">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col cols="12" sm="5">
              <h1 class="font-weight-light display-1">Skontaktuj się z nami</h1>
              <h3 class="font-weight-light mt-3">
                Zainteresował cię projekt? Masz pytania lub wątpliwości?
              </h3>
              <h3 class="font-weight-light mt-3">
                Zadzwoń, napisz maila, użyj panelu kontaktowego.
              </h3>
              <h3 class="font-weight-light mt-3">
                Odpowiemy najszybciej jak się da!
              </h3>
              <h3 class="font-weight-light mt-3">
                Telefon: +48 669 451 450
              </h3>
              <h3 class="font-weight-light">
                E-mail: kontakt@greenwhale.pl
              </h3>
            </v-col>
            <v-col cols="12" sm="7">
              <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Imię i nazwisko"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                ></v-text-field>

                <v-textarea
                    v-model="textArea"
                    :rules="textAreaRules"
                    label="Wiadomość"
                    required
                />

                <v-btn
                    :disabled="!valid"
                    color="primary"
                    :dark="valid"
                    rounded
                    block
                    class="mt-3"
                    @click="submit"
                >
                  Wyślij
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves text-white">
      <v-img src="~@/assets/img/borderWavesBlue.svg"/>
    </div>
    <v-snackbar
        v-model="snackbar.enabled"
        timeout="3000"
        right
        top
        :color="snackbar.color"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
            text
            v-bind="attrs"
            @click="snackbar.enabled = false"
        >
          Zamknij
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<style scoped>
#contact {
  background-color: #f4f7f5;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

</style>

<script>
 import {db} from '@/main'

export default {
  data: () => ({
    icons: ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"],
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "To pole jest wymagane",
      (v) => (v && v.length >= 6) || "To pole musi zawierać więcej niż 6 znaków",
      (v) => (v && v.length <= 100) || "To pole nie może zawierać więcej niż 100 znaków",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "To pole jest wymagane",
      (v) => /.+@.+\..+/.test(v) || "Niepoprawny adres email",
      (v) => (v && v.length <= 100) || "To pole nie może zawierać więcej niż 100 znaków",
    ],
    textArea: "",
    textAreaRules: [
      (v) => !!v || "To pole jest wymagane",
      (v) => (v && v.length >= 10) || "To pole musi zawierać więcej niż 10 znaków",
      (v) => (v && v.length <= 10000) || "To pole nie może zawierać więcej niż 10 000 znaków",
    ],
    lazy: false,
    snackbar: {
      enabled: false,
      text: '',
      color: ''
    }
  }),
  methods: {
    submit() {
      db.collection("contactData").add({
        name: this.name,
        email: this.email,
        message: this.textArea
      }).then(() => {
        this.snackbar.text = "Wiadomość pomyślnie wysłana"
        this.snackbar.color = "success"
        this.snackbar.enabled = true
      }).catch(() => {
        this.snackbar.text = "Błąd podczas wysłania wiadomości"
        this.snackbar.color = "danger"
        this.snackbar.enabled = true
      })
        this.$refs.form.reset()
    }
    
  }
};
</script>
