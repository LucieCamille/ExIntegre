<script setup>
  import { ref, computed } from 'vue'
  import { useGameStore } from '../stores/game';
  import Players from '../components/Players.vue'
  
  const gameStore = useGameStore();
  
  //ajouter tous les membres
  const members = ["Pierre", "Jacques", "Jean", "Charles"]
  gameStore.addMembers(members)
  
  //computed = actualisé si un de ses éléments est modifié
  const listMembers = computed(() => {return gameStore.allJoueurs})
  
  //ajouter un seul membre
  const newUser = ref('')
  const addUser = () => {
    gameStore.addAMembers(newUser.value)
  }
  
  
  </script>
  
  <template>
    <main>
      <h2>Les joueurs ou équipes</h2>
      <input type="text" v-model="newUser"><button @click="addUser()">+</button>
      <Players v-for="(item, key) in listMembers" :key="key" :ident="key"></Players>
      <button>Start game</button>
    </main>
  </template>