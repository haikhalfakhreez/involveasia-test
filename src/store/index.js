import { createStore } from 'vuex'

const store = {
  state() {
    return {
      groupData: {
        name: '',
        description: '',
        isSpecial: false,
        rules: [],
      },
      publishedGroups: [],
    }
  },

  getters: {
    wordcount(state) {
      return state.groupData.description.length
    },
  },

  mutations: {
    updateName(state, payload) {
      state.groupData.name = payload
    },

    updateDescription(state, payload) {
      state.groupData.description = payload
    },

    updateSpecial(state, payload) {
      state.groupData.isSpecial = payload
    },

    updateRule(state, payload) {
      state.groupData.rules[payload.index][payload.name] = payload.value
    },

    updateRuleParams(state, payload) {
      state.groupData.rules[payload.index].params = payload.value
    },

    addRule(state, payload) {
      state.groupData.rules.push(payload)
    },

    removeRule(state, index) {
      state.groupData.rules.splice(index, 1)
    },

    addParam(state, index) {
      state.groupData.rules[index].params.push('')
    },

    removeParam(state, payload) {
      state.groupData.rules[payload.groupIndex].params.splice(
        payload.paramIndex,
        1
      )
    },

    clearForm(state) {
      state.groupData = {
        name: '',
        description: '',
        isSpecial: false,
        rules: [],
      }
    },

    submitForm(state) {
      state.publishedGroups.push(state.groupData)
    },

    removePublishedGroup(state, index) {
      state.publishedGroups.splice(index, 1)
    },

    removePublishedRule(state, payload) {
      state.publishedGroups[payload.publishedGroupIndex].rules.splice(
        payload.publishedRuleIndex,
        1
      )
    },
  },

  actions: {
    async submitForm({ commit }) {
      await commit('submitForm')
      await commit('clearForm')
    },
  },
}

export default createStore(store)
