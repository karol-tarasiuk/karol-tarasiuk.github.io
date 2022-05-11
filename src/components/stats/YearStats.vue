<template>
  <div class="year-stats">
    <h4>📆 Years</h4>
    <table>
      <tr v-for="yearGroup in stats" :key="yearGroup">
        <td>{{ yearGroup.year }}</td>
        <td class="count" v-bind:class="yearGroup.trend == 0 ? 'rising' : 'falling'">{{ yearGroup.count }}</td>
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
          pages: _.chain(g).map(b => b.properties.pages).reduce((prev, current) => prev + current, 0).value(),
          trend: Trend.Rising
        };
      })
      .filter((g) => g.year)
      .sortBy((g) => g.year)
      .reverse()
      .value();

    this.stats.forEach((bookGroup, index) => {
      if(index === this.stats.length - 1) {
        bookGroup.trend = Trend.Rising;
      }
      else {
        const previosGroup = this.stats[index + 1];
        if(bookGroup.count > previosGroup.count) {
          bookGroup.trend = Trend.Rising;
        }
        else {
          bookGroup.trend = Trend.Falling;
        }
      }
    });
  }
}

interface IYearGroup {
  year: number | null;
  count: number;
  pages: number;
  trend: Trend;
}

enum Trend {
  Rising,
  Falling
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

.rising {
  color: #a6e22e;
}

.falling {
  color: #f92672;
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
