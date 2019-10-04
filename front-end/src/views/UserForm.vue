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
              <v-text-field  name="Description" label="Description" v-model="description"></v-text-field>
              <v-select
                      :items="items"
                      label="Type"
                      dense
                      v-model = 'type'
              ></v-select>
              <v-text-field  name="Time" label="Time" v-model="time"></v-text-field>
              <v-checkbox v-model="priority" label="Priority" value="Priority"></v-checkbox>
              <v-card-actions>
            
              </v-card-actions>
            </v-form>
            <div class="text-center">
              <v-dialog
                v-model="dialog"
                width="500"
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    color="red lighten-2"
                    dark
                    v-on="on"
                  >
                    Create Schedule
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title
                    class="headline grey lighten-2"
                    primary-title
                  >
                    Create Schedule
                  </v-card-title>

                  <v-card-text>
                    Schedule successfully created!
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <v-btn
                      color="primary"
                      text
                      @click="redirect()"
                    >
                      Ok
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
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
        description: '',  

        dialog: false,
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
        }).catch(function (error) {
                currentObj.output = error;
        });
        this.$router.push('/UserHome2');
      },
      redirect(){
        this.$router.push("/userhome2");
      }
    }
  }
</script>