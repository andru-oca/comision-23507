const formulario = {
    name: {
        texto: "Nombre de usuario",
        type: "text",
        placeholder: "Ingrese nombre de usuario",
    },
    fecha_de_nacimiento: {
        texto: "Edad de usuario",
        type: "date",
        placeholder: "Edad usuario",
    },
    mail: {
        texto: "Correo electronico",
        type: "email",
        placeholder: "Ingrese email",
    },
    picture: {
        texto: "Ingrese la ruta de su imagen",
        type: "url",
        placeholder: "Ingrese URL de la imagen",
    },
    password: {
        texto: "Ingrese password",
        type: "password",
        placeholder: "Ingrese su password",
    },
};

const formComponent = {
    template: `

<label class="marcos">{{texto}}</label>
<br />
<input
  :type="type"
  :placeholder="placeholder"
  @input="$emit('input',$event)"
  />

`,
    props: {
        key: String,
        texto: String,
        type: String,
        placeholder: String,
    },
};

const usuario = {
    template: `
    <div>
    <h1>{{usuario.name}}</h1>
    <img :src="usuario.picture" :alt="usuario.name" width='300'>
    <hr>
    <p>Correo : {{usuario.mail}}</p>
    <p>Fecha Nacimiento: {{usuario.fecha_de_nacimiento}}</p>
  </div>
    
    `,
    props: {
        usuario: Object,
    },
};

export const mainCore = {
    data: function () {
        return {
            formulario: formulario,
            API_NUBE: "https://sheetdb.io/api/v1/vh1rzkgop0be6",
            users: [],
            fetchUsuariosError: null,
            usuarioInput: {
                name: "",
                fecha_de_nacimiento: "",
                mail: "",
                picture: "",
                password: "",
            },
        };
    },

    components: {
        vueinput: formComponent,
        user: usuario,
    },

    methods: {
        usuariosHandler: function () {
            fetch(this.API_NUBE, {})
                .then((response) => response.json())
                .then((data) => (this.users = data))
                .catch((error) => (this.fetchUsuariosError = error));
        },
        uploadUserHandler: function (e) {
            e.preventDefault();
            console.log(this.usuarioInput);
        },
    },
};
