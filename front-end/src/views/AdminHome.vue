<template>
  <v-container>
    <li v-for="item in items" :key="item.date" style="list-style: none;">
        <h1>{{item}}</h1>
      <v-row class="mb-6" no-gutters>
        <v-col :md="3" justify="top">{{item.date}}</v-col>
        <h1>{{item.date}}</h1>
        <v-col :md="9">
          <li :v-for="task in item.tasks" :key="task.destination" style="list-style: none;">
            <v-card max-width="344" class="mx-auto">
              <v-card-title>Address: {{ task.destination}}</v-card-title>
              <v-card-text>Type: {{ task.type }}</v-card-text>
              <v-card-actions>
                <v-btn text>Click</v-btn>
              </v-card-actions>
            </v-card>
          </li>
        </v-col>
      </v-row>
    </li>
  </v-container>
</template>

<script>

export default {
  name: "AdminHome",
  data() {
    return {
      items: [
        {
          date: "10.4",
          tasks: [
            { destination: "dummy1", type: "dummy2" },
            { destination: "dummy3", type: "dummy4" },
            { destination: "dummy5", type: "dummy6" }
          ]
        },
        {
          date: "10.5",
          tasks: [
            { destination: "", type: "" },
            { destination: "", type: "" },
            { destination: "", type: "" }
          ]
        },
        {
          date: "10.6",
          tasks: [
            { destination: "", type: "" },
            { destination: "", type: "" },
            { destination: "", type: "" }
          ]
        },
        {
          date: "10.7",
          tasks: [
            { destination: "", type: "" },
            { destination: "", type: "" },
            { destination: "", type: "" }
          ]
        },
        {
          date: "10.8",
          tasks: [
            { destination: "", type: "" },
            { destination: "", type: "" },
            { destination: "", type: "" }
          ]
        }
      ]
    }
  },
};
</script>