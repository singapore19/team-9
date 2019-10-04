<template>
  <div>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <div class="flex-grow-1"></div>

      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list nav dense>
          <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
            <div :v-for="item in admin">
            <v-list-item>
              <v-list-item-title>{{item}}</v-list-item-title>
            </v-list-item>
            </div>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      admin:['home', 'scheduler'],
    };
  }
};
</script>