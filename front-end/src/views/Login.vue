<template>
  <v-container>
    <v-layout row class="justify-center">
      <v-flex xs4 class="grey lighten-4">
        <v-container style="position: relative;top: 13%; display: inline-block" class="text-xs-center">
          <v-img src="../assets/main-logo.png"></v-img>
          <v-card flat>
            <v-card-title primary-title>
              <h4>Login</h4>
            </v-card-title>
            <v-form @submit.prevent="formSubmit" id="check-login-form">
              <v-text-field  name="Username" label="Username" v-model="username"></v-text-field>
              <v-text-field  name="Password" label="Password" type="password" v-model="password"></v-text-field>
              <v-select
                      v-model="role"
                      :items="items"
                      label="Role"
                      dense
              ></v-select>
              <v-card-actions>
                <v-btn primary large block type="submit" color="success" form="check-login-form">Login</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Basic',
    components: {
    },
    data() {
      return {
        items:['Staff', 'Driver', 'Admin'],
        username: '',
        password: '',
        role: '' ,
        output: ''
      };
    },
    methods: {
      formSubmit(e) {
        e.preventDefault();
        let currentObj = this;
        this.axios.post('https://code-4-good.herokuapp.com/login', {
          password: this.password,
          username: this.username
        }).then(function (response) {
          // eslint-disable-next-line no-console
          console.log(this.role);
          currentObj.output = response.data;
        }).catch(function (error) {
          currentObj.output = error;
        });
        // eslint-disable-next-line no-console
        if (this.role == 'Staff'){
          this.$router.push('/userhome');
        } else if(this.role == 'Driver'){
          this.$router.push('/driver');
        } else{
          this.$router.push('/adminhome');
        }
      }
    }
  }
</script>