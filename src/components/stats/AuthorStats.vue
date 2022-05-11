<template>
  <div class="author-stats">
    <h4>👨 Authors</h4>
    <table>
      <tr v-for="authorGroup in stats" :key="authorGroup">
        <td class="name" @click="authorClicked(authorGroup.author)">{{ authorGroup.author }}</td>
        <td class="count">{{ authorGroup.count }}</td>
        <td class="pages">({{ authorGroup.pages }})</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Book } from "@/domain/Book";
import { Options, Vue } from "vue-class-component";
import _ from "underscore";

@Options({
  props: {
    books: Array,
  },
  emits: ['authorSelected']
})
export default class AuthorStats extends Vue {
  stats: IAuthorGroup[] = [];
  books: Book[] = [];

  mounted?(): void {
    this.stats = _.chain(this.books)
      .groupBy((y) => y.author)
      .map((g) => {
        return {
          author: g[0].author,
          count: g.length,
          pages: _.chain(g).map(b => b.properties.pages).reduce((prev, current) => prev + current, 0).value()
        };
      })
      .sortBy((g) => g.count)
      .reverse()
      .take(12)
      .value();
  }

  authorClicked(author: string): void {
    this.$emit('authorSelected', author);
  }
}

interface IAuthorGroup {
  author: string;
  count: number;
  pages: number;
}
</script>

<style scoped lang="less">
.author-stats {
  font-family: "Ubuntu Mono";
}

.count, .pages {
  text-align: right;
  width: 10%;
}

.pages {
  color: #fd971f;
  text-align: left;
  padding-left: 1rem;
}

.name {
  cursor: pointer;
}

h4 {
  width: 100%;
  margin: 0;
  padding: 1rem 1rem 0 1rem;
  color: #ae81ff;
}

table {
  width: 100%;
  padding: 1rem;
  font-size: 0.85rem;

  tr:hover {
    color:#ffffff7a;
  }

  td {
    padding-top: 0.25rem;
    border-bottom: 1px dashed #5d6d79;
  }
}
</style>
