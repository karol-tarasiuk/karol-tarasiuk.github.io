<template>
  <span v-if="innerExpanded" @click="collapseGroup">-</span>
  <span v-else @click="collapseGroup">+</span>
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
  color: #d8e1e7;

  &:hover {
    color: #66d9ef;
  }
}
</style>
