<template>
  <div class="stats-container">
    <year-stats :books="books" />
    <genre-stats :books="books" @genreSelected="genreSelected" />
  </div>
</template>

<script lang="ts">
import { Book } from "@/domain/Book";
import { Options, Vue } from "vue-class-component";
import GenreStats from "./GenreStats.vue";
import YearStats from "./YearStats.vue";

@Options({
  components: {
    YearStats,
    GenreStats
  },
  props: {
    books: Array,
  },
  emits: ['genreSelected']
})
export default class BooksStats extends Vue {
  books!: Book[];

  genreSelected(genre: string): void {
    this.$emit("genreSelected", genre);
  }
}
</script>

<style scoped lang="less">
.stats-container {
  display: flex;

  & > div {
    flex: 1;
    margin: 0.25rem;
    border: 1px dashed #a6e22e;
    border-radius: 0.23rem;
  }
}
</style>
