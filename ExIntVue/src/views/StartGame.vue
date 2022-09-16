<script setup>
  import { ref, computed } from 'vue'
  import { useGameStore } from '../stores/game';
  import Players from '../components/Players.vue'
  
  const gameStore = useGameStore();
  
  //ajouter tous les membres
  const members = [
    {
      name: "Luce",
      score: 0,
      position: 0,
      isPlaying: false
    },
    {
      name: "Math",
      score: 0,
      position: 2,
      isPlaying: true
    }
  ]
  gameStore.addMembers(members)
  console.log(members)
  
  //computed = actualisé si un de ses éléments est modifié
  const listMembers = computed(() => {return gameStore.allJoueurs})
  
  //ajouter un seul membre
  /*const newUserName = ref('')
  const newUser = ref({
        name: newUserName.value,
        score: 0,
        position: -1,
        isPlaying: false
      })
  const addUser = () => {
    gameStore.addAMembers(newUser)
  }*/
    const newUser = ref('')
  const addUser = () => {
    gameStore.addAMembers(newUser.value)
  }

  console.log(newUser)

  //test de emit
  const parentJoueur = (value) => {
    alert("click in player n° " + value )
  }


  
  
  </script>
  
  <template>
    <main>
      <h2>Les joueurs ou équipes</h2>
      <input type="text" v-model="newUser"><button @click="addUser()">+</button>
      <Players v-for="(item, key) in listMembers" :key="key" :ident="key" @clickJoueur="parentJoueur"></Players>
      <button>Start game</button>
    </main>
  </template>