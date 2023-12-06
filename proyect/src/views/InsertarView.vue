<template>
  <main>
    <form @submit.prevent="enviarData" id="cuadro" class="formulario">
      <h1>Enviar Datos</h1>
      <section class="campo">
        <label for="nombre">Nombre</label>
        <input type="text" placeholder="Nombre" v-model="nombre" class="input-text">
      </section>
      <section class="campo">
        <label for="valor">Valor</label>
        <input type="text" placeholder="Valor" v-model="valor" class="input-text">
      </section>
      <section class="campo">
        <label for="stock">Stock</label>
        <input type="text" placeholder="Stock" v-model="stock" class="input-text">
      </section>
      <section class="campo">
        <label for="identificador">Identificador</label>
        <input type="text" placeholder="Identificador" v-model="identificador" class="input-text">
      </section>
      <h3> {{ error }}</h3>
      <button type="submit" class="boton-submit">Enviar</button>
    </form>
  </main>
</template>
  
<style src="../styles/home.css"> </style>
  
<script>
import axios from 'axios';

export default {
  name: 'InsertarView',
  data() {
    return {
      nombre: '',
      valor: '',
      stock: '',
      identificador: '', 
      error: ''
    };
  },
  methods: {
    async enviarData() {
      if (!this.nombre || !this.valor || !this.stock || !this.identificador) {
        this.error = "Por favor, complete todos los campos.";
        return;
      }

      const data = {
        nombre: this.nombre,
        valor: this.valor,
        stock: this.stock,
        identificador: this.identificador
      };
      
      try {
        await axios.post('http://localhost:3000/insert', data);
        this.$router.push('/home');
      } catch (error) {
        console.error('Error al enviar la solicitud:', error);
      }
    }
  }
};
</script>
