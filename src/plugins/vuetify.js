import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#27a411",
                secondary: "#183417",
                accent: "#3de44b"
            }
        }
    }
});
