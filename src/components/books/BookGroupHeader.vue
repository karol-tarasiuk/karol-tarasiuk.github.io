<template>
  <h4>
    <expand-arrow :isExpanded="group.isExpanded" v-on:expanded="expandGroup" />
    {{ group.year || "In progress" }}
    <span v-show="!isExpanded" class="group-count">({{ group.books.length }})</span>
  </h4>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import _ from "underscore";
import ExpandArrow from "../shared/ExpandArrow.vue";
import { IBookGroup } from "./BooksCollection.vue";

@Options({
  components: {
    ExpandArrow,
  },
  props: {
    group: {
      type: Object,
      required: true,
    },
  },
  emits: ["expanded"]
})
export default class BookGroupHeader extends Vue {
  group: IBookGroup | null = null;
  isExpanded: boolean = false;

  mounted?(): void {
    this.isExpanded = this.group!.isExpanded;
  }

  expandGroup(isExpanded: boolean): void {
    this.isExpanded = isExpanded;
    this.$emit("expanded", isExpanded);
  }
}
</script>

<style scoped lang="less">
h4 {
  font-family: "Ubuntu Mono";
  font-weight: 700;
  color: #66d9ef;
  margin: 1rem 0;
  padding: 0;
}

.group-count {
  color: #5d6d79;
  font-size: 0.75rem;
}
</style>
