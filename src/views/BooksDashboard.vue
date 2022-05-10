<template>
  <div class="dashboard">
    <div class="stats">
      <books-stats :books="books" @genreSelected="genreSelected" />
    </div>
    <div class="collection">
      <books-collection :books="books" :searchBy="searchText" />
    </div>
  </div>
</template>

<script lang="ts">
import { books } from "@/assets/data.json";
import BooksCollection from '@/components/books/BooksCollection.vue';
import BooksStats from '@/components/stats/BooksStats.vue';
import { Options, Vue } from 'vue-class-component';
import _ from "underscore";
import { Book } from "@/domain/Book";

@Options({
  components: {
    BooksCollection,
    BooksStats
  },
})
export default class BooksDashboard extends Vue {
  books: Book[] = books;
  searchText: string = "";

  genreSelected(genre: string): void {
    this.searchText = `genre:${genre}`;
  }
}
</script>

<style scoped lang="less">
.dashboard {
  width: 100%;
  display: flex;
}

.stats {
  flex: 1;
  margin-top: 0.3rem;
}

.collection {
  flex: 1;
  padding-left: 1rem;
}
</style>
