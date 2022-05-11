<template>
  <span v-if="innerExpanded" @click="collapseGroup" class="expanded">-</span>
  <span v-else @click="collapseGroup" class="collapsed">+</span>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    isExpanded: {
      type: Boolean,
      default: true,
      required: true
    }
  },
  emits: ['expanded']
})
export default class ExpandArrow extends Vue {
  isExpanded!: boolean;
  innerExpanded = this.isExpanded;

  collapseGroup(): void {
    this.innerExpanded = !this.innerExpanded;
    this.$emit('expanded', this.innerExpanded);
  }
}
</script>
<style lang="less" scoped>
span {
  cursor: pointer;

  &.collapsed:hover, &.expanded:hover {
    color: #777;
  }

  &.collapsed {
    color: #a6e22e;
  }

  &.expanded {
    color: #f92672;
  }
}
</style>
