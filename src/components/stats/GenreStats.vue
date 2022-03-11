<template>
  <div class="genre-stats">
    <h4>Genres</h4>
    <table>
      <tr v-for="genreGroup in stats" :key="genreGroup">
        <td>{{ genreGroup.genre }}</td>
        <td class="count">{{ genreGroup.count }}</td>
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
})
export default class GenreStats extends Vue {
  stats: IGenreBook[] = [];
  books: Book[] = [];

  mounted?(): void {
    this.stats = _.chain(this.books)
      .groupBy((y) => y.properties.genre)
      .map((g) => {
        return {
          genre: g[0].properties.genre,
          count: g.length,
          pages: _.chain(g).map(b => b.properties.pages).reduce((prev, current) => prev + current, 0).value()
        };
      })
      .sortBy((g) => g.genre)
      .value();
  }
}

interface IGenreBook {
  genre: string;
  count: number;
  pages: number;
}
</script>

<style scoped lang="less">
.genre-stats {
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
