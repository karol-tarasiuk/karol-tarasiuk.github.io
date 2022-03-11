<template>
  <div class="dashboard">
    <div class="stats">
      <books-stats :books="books" />
    </div>
    <div class="collection">
      <books-collection :books="books" />
    </div>
  </div>
</template>

<script lang="ts">
import { books } from "@/assets/data.json";
import BooksCollection from '@/components/books/BooksCollection.vue';
import BooksStats from '@/components/books/BooksStats.vue';
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
}
</script>

<style scoped lang="less">
.dashboard {
  width: 100%;
  display: flex;
}

.stats {
  flex: 1;
}

.collection {
  flex: 1;
}
</style>
