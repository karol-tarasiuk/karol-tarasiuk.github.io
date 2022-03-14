<template>
  <book-group :group="group" v-for="group in bookGroups" :key="group" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Book } from "@/domain/Book";
import _ from "underscore";
import BookGroup from "./BookGroup.vue";

@Options({
  components: {
    BookGroup
  },
  props: {
    books: Array,
  },
})
export default class BooksCollection extends Vue {
  bookGroups: IBookGroup[] = [];

  books!: Book[];

  mounted?(): void {
    this.bookGroups = _.chain(this.books)
      .groupBy((y) => y.progress.finished ? new Date(y.progress.finished).getFullYear() : '')
      .map((g) => { 
        return {
          year: g[0].progress.finished ? `${new Date(g[0].progress.finished).getFullYear()}` : null, 
          books: _.sortBy(g, (b) => b.progress.finished).reverse(),
          isExpanded: g[0].progress.finished ? (new Date(g[0].progress.finished).getFullYear() == new Date().getFullYear()) : true
          }
        })
      .sortBy(g => g.year)
      .reverse()
      .value();
  }
}

export interface IBookGroup {
  year: string | null;
  isExpanded: boolean;
  books: Book[];
}
</script>
