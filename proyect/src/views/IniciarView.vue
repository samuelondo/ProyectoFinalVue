<template>
  <main>
    <form class="login" @submit.prevent="enviarData">
      <h1>Iniciar Sesion</h1>
      <section>
        <label id="text" for="Correo">Correo</label>
        <input class="answer" type="text" v-model="correo">
      </section>

      <section>
        <label id="text" for="Password">Contraseña</label>
        <input class="answer" type="password" v-model="password">
      </section>

      <h3> {{ error }}</h3>

      <section class="buttons-section">
        <router-link class="auth-button" to="/registro">Registrar</router-link>
        <input id="inicio" type="submit" value="Login" class="auth-button">
      </section>
    </form>
  </main>
</template>

<style src="../styles/login.css"></style>

<script>
import axios from 'axios';

export default {
  name: 'IniciarView',
  data() {
    return {
      correo: "",
      password: "",
      error: ""
    }
  },
  methods: {
    async enviarData() {
      if (!this.correo || !this.password) {
        this.error = "Por favor, complete todos los campos.";
        return;
      }

      const data = {
        correo: this.correo,
        password: this.password
      }

      try {
        const result = await axios.post('http://localhost:3000/iniciar', data);
        this.error = result.data.error;

        if (result.data.verificar) {
          this.$store.state.validado = true;
          this.$router.push('/home');
        }
      } catch (error) {
        console.error('Error al enviar la solicitud:', error);
      }
    }
  }
}
</script>
