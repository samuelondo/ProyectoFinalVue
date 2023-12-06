<template>
    <main>
        <form @submit.prevent="enviarData()" id="form" >
            
            <section>
                <input type="text" placeholder="producto.nombre" v-model="nombre">
            </section>
            <section>
                <input type="text" placeholder="producto.valor" v-model="valor">
            </section>
            <section>
                <input type="text" placeholder="producto.stock" v-model="stock">
            </section>
            <section>
                <input type="text" placeholder="producto.identifi" v-model="identificador">
            </section>
            
            <section class="buttons-section">
        <input type="submit" value="Actualizar" class="form-button">
        <router-link to="/home" class="form-button">Volver</router-link>
      </section>
        </form>
    </main>
</template>

<style src="../styles/actualizar.css">  </style>

<script>
import axios from 'axios'

export default {
    name: 'ActualizarView',
    data() {
        return{
            id: this.$route.params.id,
            nombre: '',
            valor: '',
            stock: '',
            identificador: '',
            producto: '',
            actualizado: ''
        }
    }, 
    methods: {
        async mostrar(){
            const response = await axios.get('http://localhost:3000/home')
            const producto = response.data.pte || [];

            this.producto = producto.find(p => p._id == this.id)

            if(this.producto){
                this.nombre = this.producto.nombre;
                this.valor = this.producto.valor;
                this.stock = this.producto.stock;
                this.identificador = this.producto.identificador;
            }
        },
        async enviarData() {
            await axios.put('http://localhost:3000/actualizar', {
                id: this.id,
                nombre: this.nombre,
                valor : this.valor,
                stock: this.stock,
                identificador: this.identificador
            }, )

            this.$router.push('/home')
        }
    },
    async created(){
        await this.mostrar();
    }
}
</script>