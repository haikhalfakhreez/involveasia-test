<template>
  <section>
    <div class="border border-gray-300 rounded p-4">
      <h2 class="mb-6 text-xl font-semibold">Create Revenue Group</h2>
      <form>
        <!-- Name -->
        <div class="grid mb-4">
          <label for="group_name" class="font-medium mb-2">Group Name</label>
          <input 
            type="text" 
            id="group_name"
            placeholder="Name"
            class="border-2 border-gray-300 rounded py-1 px-2"
            v-model="name"
          >
        </div>

        <!-- Description -->
        <div class="grid mb-4">
          <label for="group_description" class="font-medium mb-2">Group Description</label>
          <div class="relative grid">
            <textarea 
              type="text" 
              id="group_description"
              rows="5"
              placeholder="Add description"
              maxlength="200"
              class="border-2 border-gray-300 rounded py-1 px-2"
              v-model="description"
            ></textarea>
            <div class="wordcount text-gray-600">{{ wordcount }} / 200</div>
          </div>
        </div>

        <!-- Special -->
        <div class="special-checkbox mb-4">
          <input 
            type="checkbox" 
            id="group_special" 
            v-model="isSpecial" 
          >
          <label for="group_special" class="font-medium ml-2">Special group</label>
        </div>

        <!-- Rules -->
        <div class="mt-8">
          <div class="flex justify-between">
            <h3 class="text-lg font-medium">Rules</h3>

            <!-- Button: add rule -->
            <button class="btn rounded-full bg-blue-100 text-blue-600 flex items-center" @click.prevent="addRule()">
              <img src="../assets/add.svg" alt="" height="18" width="18" class="mr-1">
              <span>Add</span>
            </button>
          </div>

          <!-- Rules -->
          <div class="grid grid-cols-1 gap-y-4" :class="{'mt-4': rules !== 0}">
            <CreateRule 
              v-for="(rule, ruleIndex) in rules"
              :key="ruleIndex"
              :group-index="ruleIndex"
            />
          </div>
        </div>

        <!-- CTA -->
        <div class="text-right mt-6">
          <button class="btn rounded border border-gray-300" @click.prevent="clearForm()">Reset</button>
          <button class="btn rounded bg-blue-600 text-white border border-blue-700 ml-3" @click.prevent="submitForm()">Submit</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import CreateRule from './CreateRule.vue'

export default {
  name: "Create",

  components: {
    CreateRule
  },

  computed: {
    name: {
      get () {
        return this.$store.state.groupData.name
      },
      set (value) {
        this.$store.commit('updateName', value)
      }
    },

    description: {
      get () {
        return this.$store.state.groupData.description
      },
      set (value) {
        this.$store.commit('updateDescription', value)
      }
    },

    isSpecial: {
      get () {
        return this.$store.state.groupData.isSpecial
      },
      set (value) {
        this.$store.commit('updateSpecial', value)
      }
    },

    rules() {
      return this.$store.state.groupData.rules
    },

    wordcount() {
      return this.$store.getters.wordcount ?? 0
    }
  },

  methods: {
    addRule() {
      // Params is based on CreateRule.vue inputs
      let obj = {
        field: '',
        operator: '',
        params: [''],
        revenue: ''
      }

      this.$store.commit('addRule', obj)
    },

    clearForm() {
      this.$store.commit('clearForm')
    },

    submitForm() {
      this.$store.dispatch('submitForm')
    }
  }
}
</script>

<style>
.wordcount {
  position: absolute;
  bottom: 5px;
  right: .75rem;
  font-size: 12px;
}

.special-checkbox {
  display: flex;
  align-items: center;
}
</style>