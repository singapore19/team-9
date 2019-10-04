<template>
  <v-container>
    <v-layout row class="text-xs-center">
      <v-flex xs4 class="grey lighten-4">
        <v-container style="position: relative;top: 13%;" class="text-xs-center">
          <v-img src="../assets/main-logo.png"></v-img>
          <v-card flat>
            <v-card-title primary-title>
              <h4>Login</h4>
            </v-card-title>
              <v-form @submit.prevent="formSubmit" id="user-form">
              <v-text-field  name="Pickup" label="Pickup" v-model="pickup-point"></v-text-field>
              <v-text-field  name="Dropoff" label="Dropoff" v-model="dropoff-point"></v-text-field>
              <v-select
                      :items="items"
                      label="Role"
                      dense
              ></v-select>
              <v-text-field  name="Time" label="Time" v-model="time"></v-text-field>
              <v-checkbox v-model="priority" label="Priority" value="Priority"></v-checkbox>


              <v-card-actions>
                <v-btn primary large block type="submit" color="success" form="user-form">Login</v-btn>
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
        items:['Document', 'Cargo', 'Pick-up'],
        pickup-point: '',
        dropoff-point: '',
        time: '',
        priority: '',

        
      };
    },
    methods: {
      formSubmit(e) {
        e.preventDefault();
        let currentObj = this;
        this.axios.post('https://code-4-good.herokuapp.com/login', {
          pickup: this.pickup-point,
          dropoff: this.dropoff-point,
          time: this.time,
          priority: this.priority,

        }).then(function (response) {
          currentObj.output = response.data;
          window.location.href = '/driverview'
        }).catch(function (error) {
                  currentObj.output = error;
          window.location.href = '/driverview'
        });
      }
    }
  }
</script>
