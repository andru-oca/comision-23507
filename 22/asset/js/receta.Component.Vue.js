export const receta = {
  template: `
        
    <div>

    <h2>Nombre del plato {{receta.nombre}}</h2>
    <h3>Nombre del chef : {{receta.cocinero}}</h3>
    <img :src="receta.imagen" width="200">
    <hr>
    <p>{{receta.instructivo}}</p>
    </div>

    `,
  props: {
    receta: Object,
  },
};
