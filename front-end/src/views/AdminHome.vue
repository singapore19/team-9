<template>
  <v-container>
    <v-layout row class="justify-center">
      <v-flex xs4 class="grey lighten-4">
        <v-container style="position: relative; display:inline-block" class="text-xs-center">
          <v-dialog v-model="dialog" scrollable max-width="300px">
            <v-card>
              <v-card-title>Reschedule Time</v-card-title>
              <v-divider></v-divider>
              <v-card-text style="height: 300px;">
                <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                  <typography class="display-5">Select Date</typography>
                  <v-date-picker v-model="date" width="200px"></v-date-picker>
                  <br />
                  <typography class="display-5">Select Time</typography>
                  <v-time-picker v-model="time" width="200px"></v-time-picker>
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" text @click="dialog = false; ifChanged = true">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-row class="mb-6" gutters="20">
            <v-col cols="3" justify="top">
              <typography>Date: 10.5</typography>
            </v-col>
            <v-col cols="17">
              <v-card max-width="344" class="mx-auto">
                <v-card-title>Address: Buona Vista</v-card-title>
                <v-card-text>Type: People</v-card-text>
                <v-card-text v-if="!ifChanged">Time: {{tempTime}}</v-card-text>
                <v-card-text v-else>Time: 16:00</v-card-text>
                <v-card-actions>
                  <v-btn text @click="dialog = true">Reschedule</v-btn>
                </v-card-actions>
              </v-card>

              <v-card max-width="344" class="mx-auto" style="margin-top:10px">
                <v-card-title>Address: Pioneer</v-card-title>
                <v-card-text>Type: People</v-card-text>
                <v-card-text>Time: 9:00</v-card-text>
                <v-card-actions>
                  <v-btn text>Reschedule</v-btn>
                </v-card-actions>
              </v-card>

              <v-card max-width="344" class="mx-auto" style="margin-top:10px">
                <v-card-title>Address: Laboardo Park</v-card-title>
                <v-card-text>Type: Donation</v-card-text>
                <v-card-text>Time: 9:00</v-card-text>
                <v-card-actions>
                  <v-btn text>Reschedule</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

          <v-row class="mb-6" gutters="20">
            <v-col cols="3" justify="top">
              <typography>Date: 10.6</typography>
            </v-col>
            <v-col cols="17">
              <v-card max-width="344" class="mx-auto">
                <v-card-title>Address: Buona Vista</v-card-title>
                <v-card-text>Type: People</v-card-text>
                <v-card-text>Time: 9:00</v-card-text>
                <v-card-actions>
                  <v-btn text>Reschedule</v-btn>
                </v-card-actions>
              </v-card>

              <v-card max-width="344" class="mx-auto" style="margin-top:10px">
                <v-card-title>Address: Pioneer</v-card-title>
                <v-card-text>Type: People</v-card-text>
                <v-card-text>Time: 9:00</v-card-text>
                <v-card-actions>
                  <v-btn text>Reschedule</v-btn>
                </v-card-actions>
              </v-card>

              <v-card max-width="344" class="mx-auto" style="margin-top:10px">
                <v-card-title>Address: Laboardo Park</v-card-title>
                <v-card-text>Type: Donation</v-card-text>
                <v-card-text>Time: 9:00</v-card-text>
                <v-card-actions>
                  <v-btn text>Reschedule</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

          <v-row class="mb-6" gutters="20">
            <v-col cols="3" justify="top">
              <typography>Date: 10.7</typography>
            </v-col>
            <v-col cols="17">
              <v-card max-width="344" class="mx-auto">
                <v-card-title>Address: Buona Vista</v-card-title>
                <v-card-text>Type: People</v-card-text>
                <v-card-text>Time: 9:00</v-card-text>
                <v-card-actions>
                  <v-btn text>Reschedule</v-btn>
                </v-card-actions>
              </v-card>

              <v-card max-width="344" class="mx-auto" style="margin-top:10px">
                <v-card-title>Address: Pioneer</v-card-title>
                <v-card-text>Type: People</v-card-text>
                <v-card-text>Time: 9:00</v-card-text>
                <v-card-actions>
                  <v-btn text>Reschedule</v-btn>
                </v-card-actions>
              </v-card>

              <v-card max-width="344" class="mx-auto" style="margin-top:10px">
                <v-card-title>Address: Laboardo Park</v-card-title>
                <v-card-text>Type: Donation</v-card-text>
                <v-card-text>Time: 9:00</v-card-text>
                <v-card-actions>
                  <v-btn text>Reschedule</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

          <v-row class="mb-6" gutters="20">
            <v-col cols="3" justify="top">
              <typography>Date: 10.8</typography>
            </v-col>
            <v-col cols="17">
              <v-card max-width="344" class="mx-auto">
                <v-card-title>Address: Buona Vista</v-card-title>
                <v-card-text>Type: People</v-card-text>
                <v-card-text>Time: 9:00</v-card-text>
                <v-card-actions>
                  <v-btn text>Reschedule</v-btn>
                </v-card-actions>
              </v-card>

              <v-card max-width="344" class="mx-auto" style="margin-top:10px">
                <v-card-title>Address: Pioneer</v-card-title>
                <v-card-text>Type: People</v-card-text>
                <v-card-text>Time: 9:00</v-card-text>
                <v-card-actions>
                  <v-btn text>Edit</v-btn>
                </v-card-actions>
              </v-card>

              <v-card max-width="344" class="mx-auto" style="margin-top:10px">
                <v-card-title>Address: Laboardo Park</v-card-title>
                <v-card-text>Type: Donation</v-card-text>
                <v-card-text>Time: 9:00</v-card-text>
                <v-card-actions>
                  <v-btn text>Edit</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      tempTime: "9:00",
      ifChanged: false
    };
  },
  methods: {
    save() {
      this.dialog = true;
    },
    unSave() {
      this.dialog = true;
    }
  }
};
</script>