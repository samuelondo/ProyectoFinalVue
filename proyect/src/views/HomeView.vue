<template>
  <main>
    <nav>
      <div>
        <span>{{ }}</span>
        <router-link to="/insertar">Insertar</router-link>
        <router-link to="/">Cerrar Sesión</router-link>
      </div>
    </nav>

    <section>
      <table>
        <thead>
          <tr>
            <th>N°</th>
            <th>Nombre</th>
            <th>Valor</th>
            <th>Stock</th>
            <th>Identificador</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody v-if="producto && producto.length > 0">
          <tr v-for="(productoItem, index) in producto" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ productoItem.nombre }}</td>
            <td>{{ productoItem.valor }}</td>
            <td>{{ productoItem.stock }}</td>
            <td>{{ productoItem.identificador }}</td>
            <td>
              <form @submit.prevent="eliminar(index)">
                <button type="submit" onclick="return confirm('¿Estás seguro de eliminar este producto?')">ELIMINAR</button>
              </form>
              <router-link :to="{ name: 'Actualizar', params: { id: productoItem._id }}">Actualizar</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>
  

<style src="../styles/homeview.css"></style>

<script>
import axios from 'axios';

export default {
    name: 'HomeView',
    data(){
        return{
            producto: [],
            id: null
        }
    },
    mounted() {
        this.mostrar()
    },
    methods: {
        async mostrar(){
            const response = await axios.get('http://localhost:3000/home')
            this.producto = response.data.pte || [];
        },
        async nombre(){

        },
        async eliminar(index){
            this.id = this.producto[index]._id
            await axios.delete('http://localhost:3000/eliminar', {data: {id: this.id}})
            this.mostrar()
        }
    }
}
</script>