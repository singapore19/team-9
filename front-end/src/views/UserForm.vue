<template>
  <v-container>
    <v-layout row class="justify-center">
      <v-flex xs4 class="grey lighten-4">
        <v-container style="position: relative;display: inline-block" class="text-xs-center">
          <v-img src="../assets/main-logo.png"></v-img>
          <v-card flat>
            <v-card-title primary-title>
              <h4>Create Schedule</h4>
            </v-card-title>
              <v-form @submit.prevent="userform" id="user-form">
              <v-text-field  name="Pickup" label="Pickup" v-model="pickuppoint"></v-text-field>
              <v-text-field  name="Dropoff" label="Dropoff" v-model="dropoffpoint"></v-text-field>
              <v-select
                      :items="items"
                      label="Role"
                      dense
                      v-model = 'type'
              ></v-select>
              <v-text-field  name="Time" label="Time" v-model="time"></v-text-field>
              <v-checkbox v-model="priority" label="Priority" value="Priority"></v-checkbox>


              <v-card-actions>
                <v-btn primary large block type="submit" color="success" form="user-form">Create Schedule</v-btn>
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
        pickuppoint: '',
        dropoffpoint: '',
        time: '',
        type: '',
        priority: '',

        
      };
    },
    methods: {
      userform(e) {
        e.preventDefault();
        let currentObj = this;
        this.axios.post('https://code-4-good.herokuapp.com/userform', {
          pickup: this.pickuppoint,
          dropoff: this.dropoffpoint,
          time: this.time,
          type: this.type,
          priority: this.priority,

        }).then(function (response) {
          currentObj.output = response.data;
          this.$router.push('/userHome');
        }).catch(function (error) {
                  currentObj.output = error;
          this.$router.push('/userHome');
        });
      }
    }
  }
</script>
