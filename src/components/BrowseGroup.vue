<template>
  <div class="border border-gray-300 rounded">
    <!-- Head -->
    <div class="p-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <h3 class="font-semibold text-lg">{{ groupData.name }}</h3>
          <span class="py-1 px-3 font-semibold rounded-full bg-blue-600 text-white ml-3 text-xs" v-if="groupData.isSpecial">Special Group</span>
        </div>

        <button class="rounded-full bg-gray-200 h-8 w-8 flex items-center justify-center" @click.prevent="removePublishedGroup()">
          <img src="../assets/trash.svg" alt="" height="17" width="17">
        </button>
      </div>

      <p class="text-gray-600 mt-2 w-4/5">{{ groupData.description }}</p>
    </div>

    <!-- Body -->
    <div class="border-t border-gray-300 bg-gray-500 bg-opacity-30 mb-2">
      <div class="overflow-scroll table-wrapper">
        <table class="table-auto w-full mb-2">
          <thead>
            <colgroup>
              <col span="1" v-for="(col, i) in totalColumn" :key="i">
            </colgroup>

            <tr>
              <template v-for="(head, headKey) in heads" :key="headKey">
                <th class="whitespace-nowrap cell" v-if="headKey !== 'params'">
                  <div class="flex items-center">
                    <span>{{ head }}</span>
                    <span class="ml-1" style="font-size: 10px" v-if="headKey !== 'action'">&#8597;</span>
                  </div>
                </th>

                <!-- If params -->
                <template v-else>
                  <th class="whitespace-nowrap cell" v-for="(param, paramIndex) in head" :key="paramIndex">
                    <div class="flex items-center">
                      <span>Parameter {{ paramIndex + 1 }}</span>
                      <span class="ml-1" style="font-size: 10px">&#8597;</span>
                    </div>
                  </th>
                </template>
              </template>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(rule, ruleIndex) in groupRules" :key="ruleIndex">
              <template v-for="(row, rowKey) in rows" :key="rowKey">
                <!-- If action -->
                <template v-if="rowKey === 'action'">
                  <td class="whitespace-nowrap cell">

                    <!-- Button: remove rule -->
                    <button @click.prevent="removePublishedRule(ruleIndex)"><img src="../assets/trash.svg" alt="" height="15" width="15"></button>
                  </td>
                </template>

                <!-- If params -->
                <template v-else-if="rowKey === 'params'">
                  <td class="whitespace-nowrap cell" v-for="(param, paramIndex) in row" :key="paramIndex">{{ rule.params[paramIndex] }}</td>
                </template>

                <!-- If params -->
                <template v-else-if="rowKey === 'revenue'">
                  <td class="whitespace-nowrap cell">{{ rule[rowKey] }}%</td>
                </template>

                <td class="whitespace-nowrap cell" v-else>{{ rule[rowKey] }}</td>
              </template>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrowseGroup",

  props: {
    publishedGroupIndex: Number
  },

  data() {
    return {
      heads: {
        rule: 'Rule',
        field: 'Field',
        operator: 'Operator',
        params: 1,
        revenue: 'Revenue',
        action: 'Action'
      },

      // Rows depend on how many rules there is
      rows: {
        rule: '',
        field: '',
        operator: '',
        params: 1,
        revenue: '',
        action: ''
      },

      maxParamCount: 1
    }
  },

  computed: {
    groupData() {
      return this.$store.state.publishedGroups[this.publishedGroupIndex]
    },

    groupRules() {
      let rules = this.groupData.rules
      let obj = {}
      let arr = []

      rules.forEach((item, index) => {
        obj = {
          rule: index + 1,
          field: item.field,
          operator: item.operator,
          params: item.params,
          revenue: item.revenue 
        }

        arr.push(obj)
      })

      return arr
    },

    totalColumn() {
      return 5 + this.maxParamCount
    }
  },

  mounted() {
    this.groupData.rules.map(item => {
      if (item.params.length > this.maxParamCount) {
        this.maxParamCount = item.params.length
      }
    })
    this.setParameter(this.maxParamCount)
  },

  methods: {
    setParameter(count) {
      this.heads.params = count
      this.rows.params = count
    },

    removePublishedGroup() {
      this.$store.commit('removePublishedGroup', this.publishedGroupIndex)
    },

    removePublishedRule(index) {
      let payload = {
        publishedGroupIndex: this.publishedGroupIndex,
        publishedRuleIndex: index
      }
      this.$store.commit('removePublishedRule', payload)
    },
  }
}
</script>

<style scoped>
.table-wrapper {
  scrollbar-gutter: stable;
  max-height: 265.5px; /* 6 column */
}

tr:nth-child(odd) td {
  background: #eff6ff;
}

th,
tr:nth-child(even) td {
  background: #fff;
}
</style>