<template>
  <div class="stats-container">
    <year-stats :books="books" @yearSelected="yearSelected" />
    <genre-stats :books="books" @genreSelected="genreSelected" />
    <author-stats :books="books" @authorSelected="authorSelected" />
  </div>
</template>

<script lang="ts">
import { Book } from "@/domain/Book";
import { Options, Vue } from "vue-class-component";
import AuthorStats from "./AuthorStats.vue";
import GenreStats from "./GenreStats.vue";
import YearStats from "./YearStats.vue";

@Options({
  components: {
    YearStats,
    GenreStats,
    AuthorStats
  },
  props: {
    books: Array,
  },
  emits: [
    'genreSelected',
    'authorSelected',
    'yearSelected'
  ]
})
export default class BooksStats extends Vue {
  books!: Book[];

  genreSelected(genre: string): void {
    this.$emit("genreSelected", genre);
  }

  authorSelected(author: string): void {
    this.$emit("authorSelected", author);
  }

  yearSelected(year: string): void {
    this.$emit("yearSelected", year);
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
