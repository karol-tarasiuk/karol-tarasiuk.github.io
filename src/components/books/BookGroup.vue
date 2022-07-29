<template>
  <div class="book-group">
    <book-group-header :group="group" @expanded="expandGroup" />
    <ol v-show="isExpanded">
      <li v-for="book in group.books" :key="book.title">
        <span class="pink">[</span>
        <span v-if="book.progress.finished" class="finished">{{
          book.progress.finished
        }}</span>
        <span v-else class="not-finished">----------</span>
        <span class="pink">]</span>
        <span class="divider-grey">></span>
        <span class="title">{{ book.title }}</span>
        -
        <span>{{ book.author }}</span>
        <span v-if="book.progress.finished" class="rating">
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
import _ from "underscore";
import { IBookGroup } from "./BooksCollection.vue";
import ExpandArrow from "../shared/ExpandArrow.vue";
import BookGroupHeader from "./BookGroupHeader.vue";

@Options({
  components: {
    ExpandArrow,
    BookGroupHeader
  },
  props: {
    group: Object,
  },
})
export default class BookGroup extends Vue {
  group!: IBookGroup;
  isExpanded: boolean = this.group.isExpanded;

  expandGroup(isExpanded: boolean): void {
    this.isExpanded = isExpanded;
  }
}
</script>

<style scoped lang="less">
.book-group {
  & > ol {
    font-family: "Ubuntu Mono";
    font-size: 0.9rem;
  }
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
