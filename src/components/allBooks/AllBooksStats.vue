<template>
  <year-stats />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import YearStats from '../stats/YearStats.vue';

@Options({
  components: {
    YearStats
  },
  props: {
  }
})
export default class AllBooksStats extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
