<template>
    <div class="d-button" @click="handleClick">
        <slot></slot>
        <span>{{ num }}</span>
    </div>
</template>
<script>
export default {
    name: 'DButton', // 这个名字很重要，它就是未来的标签名<d-button></d-button>
    data () {
    return {
      num: 0
    }
  },
  methods: {
    handleClick () {
      this.num++
    }
  }
}
</script>
<style>
.d-button {
  border: 1px solid #6190E8;
  background-color: #6190E8;
  display: inline-block;
  border-radius: 2px;
  height: 14px;
  line-height: 14px;
  color: #fff;
  padding: 10px 19px;
  cursor: pointer;
  white-space: nowrap;
}
</style>

