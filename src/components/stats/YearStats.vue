<template>
  <div class="year-stats">
    <h4>📆 Years</h4>
    <table>
      <tr v-for="yearGroup in stats" :key="yearGroup">
        <td>{{ yearGroup.year }}</td>
        <td class="count">{{ yearGroup.count }}</td>
        <td class="pages">({{ yearGroup.pages }})</td>
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
})
export default class YearStats extends Vue {
  stats: IYearGroup[] = [];
  books: Book[] = [];

  mounted?(): void {
    this.stats = _.chain(this.books)
      .groupBy((y) =>
        y.progress.finished ? new Date(y.progress.finished).getFullYear() : 0
      )
      .map((g) => {
        return {
          year: g[0].progress.finished
            ? new Date(g[0].progress.finished).getFullYear()
            : null,
          count: g.length,
          pages: _.chain(g).map(b => b.properties.pages).reduce((prev, current) => prev + current, 0).value()
        };
      })
      .filter((g) => g.year)
      .sortBy((g) => g.year)
      .reverse()
      .value();
  }
}

interface IYearGroup {
  year: number | null;
  count: number;
  pages: number;
}
</script>

<style scoped lang="less">
.year-stats {
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

  td {
    padding-top: 0.25rem;
    border-bottom: 1px dashed #5d6d79;
  }
}
</style>
