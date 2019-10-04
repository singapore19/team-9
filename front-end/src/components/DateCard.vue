<template>
  <v-container>
    <v-row class="mb-6" no-gutters>
      <v-col :md="3" justify="top">{{date}}</v-col>
      <v-col :md="9">
        <li :v-for="task in tasks" v-bind:key="task.destination" style="list-style: none;">
          <v-card max-width="344" class="mx-auto">
            <v-card-title>Address: {{ task.destination}} </v-card-title>
            <v-card-text>Type: {{ task.type }}</v-card-text>
            <v-card-actions>
              <v-btn text>Click</v-btn>
            </v-card-actions>
          </v-card>
        </li>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DateCard",
  data(){
      return{
          date: "",
          tasks: []
      }
  },
  props: {
    date: String,
    tasks: Array
  },
  created(){
      this.date = date;
      this.tasks = tasks;
  }
};
</script>