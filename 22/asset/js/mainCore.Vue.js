import { receta } from "./receta.Component.Vue.js";

export const mainCore = {
  data: function () {
    return {
      API_RECETAS: "https://sheetdb.io/api/v1/wd56vlbp5yabg",
      errorPost: null,
      recetas: null,
      form: null,
      path_form_json: "./asset/js/formulario.json",
      receta: {
        nombre: "",
        cocinero: "",
        imagen: "",
        instructivo: "",
        tipo_comida: "",
      },
    };
  },
  components: {
    receta: receta,
  },
  created: async function () {
    const dataForm = await fetch(this.path_form_json);
    const data = await dataForm.json();
    this.form = data;
  },

  methods: {
    getRecetasHandler: async function () {
      const response = await fetch(this.API_RECETAS);
      const data = await response.json();

      this.recetas = data;
    },
    subirRecetaHandler: async function (e) {
      e.preventDefault();

      this.receta = {
        id: crypto.randomUUID(),
        ...this.receta,
      };

      try {
        const response = await fetch(this.API_RECETAS, {
          method: "POST",
          body: JSON.stringify(this.receta),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw Error("Error producido");
        }

        this.errorPost = "La receta ha sido creada";

        this.receta = {
          nombre: "",
          cocinero: "",
          imagen: "",
          instructivo: "",
          tipo_comida: "",
        };

        return;
      } catch (e) {
        this.errorPost = e;
      }
    },
  },
};
