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
  </div>
</template>

<script>
  export default {
  name: 'Home',  
  data() {     
    return {
       nUtente:'a',  
    }
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


