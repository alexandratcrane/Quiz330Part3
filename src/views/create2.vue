<template>
    <v-app>
            <div id= "Cquestions"> 
      <v-form>
            <v-col>
            


                  <div v-for="(item, index) in ans" :key="index">
                    
                 <v-card
                  raised
                  class="mx-auto"
                   v-if="item.length == 5">
                  
                  <input  outlined v-model="item.question" placeholder="What is your Multiple Choice question?" >
                  <input  outlined v-model="item.trueAnswer"   placeholder="What is the true answer?" class="mx-auto" >
                  <input  outlined v-model="item.false1"  placeholder="What is the a false answer?" class="mx-auto" >
                  <input  outlined v-model="item.false2"  placeholder="What is the a false answer?" class="mx-auto" >
                  <input  outlined v-model="item.false3"  placeholder="What is a false answer?" class="mx-auto" >

                 </v-card>

                  <v-card
                  raised
                 class="mx-auto"
                  v-if="item.length == 2">
              
                    
                <input  outlined v-model="item.question" placeholder="Your Question" class="mx-auto" >
                <input outlined v-model="item.answer" placeholder="What is the answer?" class="mx-auto" >
                 <p>The value of the input is: {{ item.question }}</p>
                  <p>The value of the answer is: {{ item.answer }}</p>
              
                </v-card>


                  
                 <v-card
                  raised
                  class="mx-auto"
                  v-if="item.length == 3">
                  <input  outlined v-model="item.question" placeholder="What is your True/False question?" class="mx-auto" >
                  <input  outlined v-model="item.Tanswer" placeholder="What is the TRUE answer?" class="mx-auto" >
                  <input  outlined v-model="item.Fanswer" placeholder="What is the FALSE answer?" class="mx-auto" >

                 </v-card>


                  </div>


       

        <v-btn style="margin-top: 50px; margin-bottom: 50px;" x-large color="blue"
      class="ma-2 white--text"
        @click="logger(ans)">
          Create a new Quiz
      </v-btn>
       </v-col>
      </v-form>
            </div>

    </v-app>
</template>
<script>
import selected from '@/json/selected.json'
export default {
   props: ['ans'],
   data () {
     return {
        file : selected
     }
   },

  methods: {
    logger(a){
      this.file = a
      alert(JSON.stringify(this.file))
    }
}

}

</script>

<style scoped>

</style>