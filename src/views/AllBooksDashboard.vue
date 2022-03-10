<template>
  <div class="dashboard">
    <div class="stats">
      <all-books-stats />
    </div>
    <div class="collection">
      <all-books-collection :books="books" />
    </div>
  </div>
</template>

<script lang="ts">
import { books } from "@/assets/data.json";
import AllBooksCollection from '@/components/allBooks/AllBooksCollection.vue';
import AllBooksStats from '@/components/allBooks/AllBooksStats.vue';
import { Options, Vue } from 'vue-class-component';
import _ from "underscore";
import { Book } from "@/domain/Book";

@Options({
  components: {
    AllBooksCollection,
    AllBooksStats
  },
})
export default class AllBooksDashboard extends Vue {
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
