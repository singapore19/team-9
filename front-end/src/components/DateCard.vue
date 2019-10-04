<template>
<v-container>
     <v-row
      class="mb-6"
      no-gutters
    >
      <v-col
        v-for="n in 2"
        :key="n"
        :lg="cols[n - 1]"
        :md="6"
        :sm="cols[n - 1]"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          col-{{ cols[n - 1] }}
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
</script>