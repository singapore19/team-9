<template>
    <v-container>
        <v-layout row class="justify-center" >
            <v-flex xs4 class="grey lighten-4" >
                <v-container style="position: relative;top: 13%;" class="text-xs-center" >
                    <v-layout column justify-space-between fill-height wrap>
                        <v-card
                                class="mx-auto"
                                outlined
                                flat
                        >
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <div class="overline mb-4">JOB</div>
                                    <v-list-item-title class="headline mb-1">Job#12</v-list-item-title>
                                    <v-list-item-subtitle>Ride for 4 person at 5pm from HQ to Bedok</v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-avatar
                                        tile
                                        size="80"
                                        color="grey"
                                ><v-icon dark>person</v-icon></v-list-item-avatar>
                            </v-list-item>


                        </v-card>
                        <v-spacer></v-spacer>
                        <v-card  class="mx-auto"
                                 outlined>
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <div class="overline mb-4">JOB</div>
                                    <v-list-item-title class="headline mb-1">Job#13</v-list-item-title>
                                    <v-list-item-subtitle>Deliver cartons of milk from Jurong to HQ</v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-avatar
                                        tile
                                        size="80"
                                        color="grey"
                                ><v-icon dark>delivery</v-icon></v-list-item-avatar>
                            </v-list-item>

                        </v-card>
                        <v-card  class="mx-auto"
                                 outlined>
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <div class="overline mb-4">JOB</div>
                                    <v-list-item-title class="headline mb-1">Job#14</v-list-item-title>
                                    <v-list-item-subtitle>Deliver cartons of noodles from Bishan to HQ</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-avatar
                                        tile
                                        size="80"
                                        color="grey"
                                ><v-icon dark>delivery</v-icon></v-list-item-avatar>
                            </v-list-item>
                        </v-card>
                        <v-card  class="mx-auto"
                                 outlined>
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <div class="overline mb-4">JOB</div>
                                    <v-list-item-title class="headline mb-1">Job#15</v-list-item-title>
                                    <v-list-item-subtitle>Deliver food supplies from Toa Payoh to HQ</v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-avatar
                                        tile
                                        size="80"
                                        color="grey"
                                ><v-icon dark>delivery</v-icon></v-list-item-avatar>
                            </v-list-item>

                        </v-card>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'driverhome',
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
                    this.$router.push('/userform');
                } else if(this.role == 'Driver'){
                    this.$router.push('/driver');
                } else{
                    this.$router.push('/admin');
                }
            }
        }
    }
</script>