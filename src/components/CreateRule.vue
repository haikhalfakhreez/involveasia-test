<template>
  <div class="border border-dashed border-gray-400 rounded p-2">
    <div class="flex items-center justify-between mb-2">
      <h4>Rule {{ groupIndex + 1 }}</h4>

      <!-- Button: delete rule -->
      <button class="text-xl" @click.prevent="removeRule()">&times;</button>
    </div>
    <div class="flex items-start bg-gray-200 rounded p-2 overflow-auto sm:flex-col">
      <p class="p-1">If</p>

      <!-- Field -->
      <select name="field" class="border-2 border-gray-300 rounded py-1 px-2 ml-2 sm:p-1 sm:ml-0 sm:mb-2" v-model="field">
        <option disabled selected value="">Select field</option>
        <option v-for="(item, itemIndex) in fieldOptions" :key="itemIndex" :value="item">{{ item }}</option>
      </select>

      <!-- Operator -->
      <select name="operator" class="border-2 border-gray-300 rounded py-1 px-2 ml-2 sm:p-1 sm:ml-0 sm:mb-2" v-model="operator">
        <option disabled selected value="">Select operator</option>
        <option v-for="(item, itemIndex) in operatorOptions" :key="itemIndex" :value="item">{{ item }}</option>
      </select>

      <!-- Parameter -->
      <div class="grid gap-y-2 flex-grow sm:gap-y-0">
        <div v-for="(param, paramIndex) in params" :key="paramIndex" class="flex items-center justify-between">
          <input 
            type="text" 
            :name="'parameter' + paramIndex + 'forRule' + groupIndex" 
            placeholder="Enter parameter" 
            class="border-2 border-gray-300 rounded py-1 px-2 ml-2 sm:p-1 sm:ml-0 sm:mb-2"
            style="line-height: 1.43"
            v-model="params[paramIndex]"
          >

          <!-- Button: add param -->
          <button class="flex-shrink-0 px-1" @click.prevent="addParam()" v-if="paramIndex === 0">
            <img src="../assets/add_circle_outline.svg" alt="" height="20" width="20">
          </button>

          <!-- Button: remove param. Only if not the first one -->
          <button class="flex-shrink-0 px-1" @click.prevent="removeParam(paramIndex)" v-else>
            <img src="../assets/remove_circle_outline.svg" alt="" height="20" width="20">
          </button>
        </div>
      </div>
    </div>

    <!-- Revenue -->
    <div class="flex items-center mt-2">
      <p>then revenue is</p>
      <div class="border-2 border-gray-300 rounded ml-2">
        <span class="py-1 px-2">%</span>
        <input 
          type="number"
          placeholder="Enter amount" 
          class="py-1 px-2"
          v-model="revenue"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateRule",

  props: {
    groupIndex: Number
  },

  data() {
    return {
      fieldOptions: ['aff_sub_1', 'aff_sub_2', 'aff_sub_3', 'aff_sub_4'],
      operatorOptions: ['is', 'is not', 'starts with', 'ends with', 'contains', 'doesn\'t contains'],
      payload: {
        index: this.groupIndex,
        name: '',
        value: null
      }
    }
  },

  computed: {
    field: {
      get () {
        return this.$store.state.groupData.rules[this.groupIndex].field
      },
      set (value) {
        this.payload.name = 'field'
        this.payload.value = value
        this.$store.commit('updateRule', this.payload)
      }
    },

    operator: {
      get () {
        return this.$store.state.groupData.rules[this.groupIndex].operator
      },
      set (value) {
        this.payload.name = 'operator'
        this.payload.value = value
        this.$store.commit('updateRule', this.payload)
      }
    },

    params: {
      get () {
        return this.$store.state.groupData.rules[this.groupIndex].params
      },
      set (value) {
        this.payload.name = 'params'
        this.payload.value = value
        this.$store.commit('updateRuleParams', this.payload)
      }
    },

    revenue: {
      get () {
        return this.$store.state.groupData.rules[this.groupIndex].revenue
      },
      set (value) {
        this.payload.name = 'revenue'
        this.payload.value = value
        this.$store.commit('updateRule', this.payload)
      }
    },
  },

  methods: {
    removeRule() {
      this.$store.commit('removeRule', this.groupIndex)
    },

    addParam() {
      this.$store.commit('addParam', this.groupIndex)
    },

    removeParam(paramIndex) {
      let payload = {
        groupIndex: this.groupIndex,
        paramIndex: paramIndex
      }
      this.$store.commit('removeParam', payload)
    }
  }
}
</script>

<style>

</style>