<template>
  <div class="search-box">
    <p>Search</p>
    <input type="text" v-model="searchField" v-on:keyup="searchChanged" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import _ from "underscore";

@Options({
  components: {
  },
  props: {
  },
  emits: ['searchChanged']
})
export default class SearchBox extends Vue {
  searchField: string = "";

  searchChanged(): void {
    this.$emit('searchChanged', this.searchField);
  }
}
</script>

<style scoped lang="less">
  .search-box {
    display: flex;
  }

  p {
    font-family: "Ubuntu Mono";
    font-size: 1rem;
    font-weight: bold;
    margin: 0.3rem 0;
    padding: 0.3rem 0;
  }

  input {
    width: 100%;
    outline: none;
    background-color: inherit;
    border: none;
    border-bottom: 1px solid #a6e22e;
    font-family: "Ubuntu Mono";
    font-size: 0.83rem;
    color: #fff;
    margin: 0.3rem 1rem;
    padding: 0.3rem;
  }

</style>