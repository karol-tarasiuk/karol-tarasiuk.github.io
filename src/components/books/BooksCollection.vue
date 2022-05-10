<template>
  <search-box @searchChanged="searchChanged" :searchText="searchBy" />
  <book-group :group="group" v-for="group in bookGroups" :key="group" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Book } from "@/domain/Book";
import _ from "underscore";
import BookGroup from "./BookGroup.vue";
import SearchBox from "./SearchBox.vue";
import { filterBooks } from "@/services/SearchFilterService";

@Options({
  components: {
    BookGroup,
    SearchBox
  },
  props: {
    books: Array,
    searchBy: String
  }
})
export default class BooksCollection extends Vue {
  bookGroups: IBookGroup[] = [];

  books!: Book[];
  searchBy!: string;

  searchText: string = "";

  mounted?(): void {
    this.regroupBooks(this.books, false);

    this.$watch('searchBy', (newValue: string) => {
      let filteredBooks = filterBooks(this.books, newValue);
      this.regroupBooks(filteredBooks, true);
    });
  }

  searchChanged(searchText: string): void {
    if(searchText.length === 0) {
      this.regroupBooks(this.books, false);
      return;
    }

    const filteredBooks = filterBooks(this.books, searchText);
    this.regroupBooks(filteredBooks, true);
  }

  private regroupBooks(books: Book[], expandAll: boolean): void {
    this.bookGroups = _.chain(books)
      .groupBy((y) => y.progress.finished ? new Date(y.progress.finished).getFullYear() : '')
      .map((g) => { 
        return {
          year: g[0].progress.finished ? `${new Date(g[0].progress.finished).getFullYear()}` : null, 
          books: _.sortBy(g, (b) => b.progress.finished).reverse(),
          isExpanded: expandAll || (g[0].progress.finished ? (new Date(g[0].progress.finished).getFullYear() == new Date().getFullYear()) : true)
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
