<template>
    <main>
        <form @submit.prevent="enviarData" id="registro">
            <h1>Registro</h1>
            <section>
                <label id="text" for="Nombre">Nombre</label>
                <input class="answer" type="text" v-model="nombre" placeholder="Nombre">
            </section>

            <section>
                <label id="text" for="Correo">Correo electrónico</label>
                <input class="answer" type="text" v-model="correo" placeholder="Correo electrónico">            
            </section>

            <section>
                <label id="text" for="Password">Contraseña</label>
                <input class="answer" type="password" v-model="password" placeholder="Contraseña">
            </section>

            <h3> {{ error }}</h3>
        
            <div id="registrar-container">
                <input id="registrar" type="submit" value="Registrar">
            </div>
        </form>
    </main>
</template>

<style src="../styles/registro.css">  </style>

<script>
import axios from 'axios'

export default {
    name: 'RegistroView',
    data() {
        return {
            nombre: '',
            correo: '',
            password: '',
            error: ""
        }
    }, 
    methods: {
        async enviarData() {
            if (!this.nombre || !this.correo || !this.password) {
                this.error = "Por favor, complete todos los campos.";
                return;
            }

            const data = {
                nombre: this.nombre,
                correo: this.correo,
                password: this.password
            }

            try {
                await axios.post('http://localhost:3000/registrar', data)
                this.$router.push('/')
            } catch (error) {
                console.error('Error al enviar la solicitud:', error)
            }
        }
    }
}
</script>
