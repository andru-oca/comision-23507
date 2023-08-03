import {createApp} from 'https://unpkg.com/vue@3.2.11/dist/vue.esm-browser.js' 


const id_container = "#app"

const appCore = {
    
    data : function(){
        return {
            linkers: [],
            db_path : "./assets/js/db.json",
            tutor: "Fernanda Torok",
            comision:"23507",
            instructorImg:"./assets/imgs/pic.jpg",
            horarios:"Miercoles y Viernes 08:00 - 09:30"
        }
    },
    methods: {
        fetchData: function(uri){
                fetch(uri)
                    .then((response) => response.json())
                    .then((data) => this.linkers = data
                    )
                    .catch((error) => {
                        console.log("error: " + error);
                    });
            
        }
    }
    ,
    created(){
        this.fetchData(this.db_path)
    } 
}

const app = createApp(appCore)
app.mount(id_container)