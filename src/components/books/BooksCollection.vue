<template>
  <div v-for="group in bookGroups" :key="group">
    <h4>{{ group.year || 'In progress' }}</h4>
    <ol>
      <li v-for="book in group.books" :key="book.title">
        <span class="pink">[</span>
        <span v-if="book.progress.state == 'Finished'" class="finished">{{
          book.progress.finished
        }}</span>
        <span v-else class="not-finished">----------</span>
        <span class="pink">]</span>
        <span class="divider-grey">></span>
        <span class="title">{{ book.title }}</span>
        -
        <span>{{ book.author }}</span>
        <span v-if="book.progress.state == 'Finished'" class="rating">
          <span class="pink">(</span>
          <span v-for="i in book.progress.rating" :key="i">*</span>
          <span class="pink">)</span>
        </span>
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Book } from "@/domain/Book";
import _ from "underscore";

@Options({
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
          books: _.sortBy(g, (b) => b.progress.finished).reverse()
          }
        })
      .sortBy(g => g.year)
      .reverse()
      .value();
  }
}

interface IBookGroup {
  year: string | null;
  books: Book[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
div > h4 {
  font-family: "Ubuntu Mono";
  font-weight: 700;
  color: #66d9ef;
  margin: 1rem 0;
  padding: 0;
}

ol {
  font-family: "Ubuntu Mono";
  font-size: 0.83rem;
}

.title {
  font-weight: 700;
}

.finished {
  color: #ae81ff;
}

.not-finished {
  color: #fd971f;
}

.divider-grey {
  color: #a6e22e;
  padding: 0 0.5rem;
  font-weight: 700;
}

.rating {
  padding: 0 0.5rem;
}

.pink {
  color: #f92672;
}
</style>
