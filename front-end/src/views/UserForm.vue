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
              <v-text-field  name="Address" label="Address" v-model="address"></v-text-field>
              <v-text-field  name="Password" label="Password" type="password" v-model="password"></v-text-field>
              <v-select
                      :items="items"
                      label="Role"
                      dense
              ></v-select>
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
