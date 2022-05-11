<template>
  <div class="genre-stats">
    <h4>🏷️ Genres</h4>
    <table>
      <tr v-for="genreGroup in stats" :key="genreGroup">
        <td class="name" @click="genreClicked(genreGroup.genre)">{{ genreGroup.genre }}</td>
        <td class="count">{{ genreGroup.count }} <span class="percent">({{genreGroup.percent.toFixed(0)}}%)</span></td>
        <td class="pages">({{ genreGroup.pages }})</td>
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
  emits: ['genreSelected']
})
export default class GenreStats extends Vue {
  stats: IGenreGroup[] = [];
  books: Book[] = [];

  mounted?(): void {
    this.stats = _.chain(this.books)
      .groupBy((y) => y.properties.genre)
      .map((g) => {
        return {
          genre: g[0].properties.genre,
          count: g.length,
          percent: (g.length * 100 / this.books.length),
          pages: _.chain(g).map(b => b.properties.pages).reduce((prev, current) => prev + current, 0).value()
        };
      })
      .sortBy((g) => g.count)
      .reverse()
      .value();
  }

  genreClicked(genre: string): void {
    this.$emit('genreSelected', genre);
  }
}

interface IGenreGroup {
  genre: string;
  count: number;
  percent: number;
  pages: number;
}
</script>

<style scoped lang="less">
.genre-stats {
  font-family: "Ubuntu Mono";
}

.pages {
  text-align: right;
  width: 10%;
}

.count {
  text-align: right;
  width: 4rem;
}

.pages {
  color: #fd971f;
  text-align: left;
  padding-left: 1rem;
}

.percent {
  color: #777777;
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
