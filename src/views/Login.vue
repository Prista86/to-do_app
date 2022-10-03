<template>
  <div class="about pa-6">    
    <h1>Login page</h1>  
    <v-text-field
      v-model="loginPersona"       
      class="pa-3" outlined
      label="Nome utente" 
      append-icon="mdi-account" 
      hide-details clearable
    ></v-text-field>
    <v-btn
      class= "about pa-6"
      @click="addPerson"
      depressed
      color="primary"
    >
      Login
    </v-btn> 
    <Home :nomeutente="items"/>   
  </div>  
</template>

<script>  
  import Home from './Todo.vue'
  export default {
  name: 'Login',   
  data() {     
    return {
      loginPersona:'',
       nUtente:'',
       items:['first', 'second', 'third']         
    }
  },
  components: {
    Home  
  },  
  methods: {
    addPerson(){
      let dati ={
        nUtente:this.loginPersona
      }      
      console.log(dati.nUtente);
    }

  }
}
</script>


