<template>
    <v-app>
        <div>

            <v-app-bar
                    absolute
                    color="#5E35B1"
                    dark
                    elevate-on-scroll


            >

                <img src="@/assets/mushy_yt.png"/>


                <v-toolbar-title>QuizShroom</v-toolbar-title>
                <v-spacer/>
                <router-link class="routerLink" to="/Login">Logout</router-link>
                <router-link class="routerLink" to="/"> Home</router-link>

                <router-link class="routerLink" to="/create-quiz">Create new quiz</router-link>

                <router-link  class="routerLink" to="/default-quiz">Use quiz template</router-link>
                <router-link  class="routerLink" to="/surveys">survey</router-link>





            </v-app-bar>
            <router-view/>
        </div>
    </v-app>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .routerLink{
        text-decoration: none;
        margin: 15px;
        padding: 20px;
        font-size: large;

    }

    img{
        width: auto;
        height: 25px;
        margin: 0%;
        margin-right: 15px;

    }

</style>