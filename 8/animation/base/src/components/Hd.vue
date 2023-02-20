<template>
  <section>
    <div><slot></slot></div>
  </section>
</template>

<style lang="scss" scoped>
section {
  perspective: 800px;
  div {
    background-color: #16a085;
    color: #fff;
    padding: 10px 20px;
    animation: identifier 2s ease;
    display: inline-block;
    border-radius: 10px;
    cursor: pointer;
    // 设置过度动画
    transition: 2s;
    &:hover {
      background-color: #f39c12;
    }
  }
  // 定义关键帧动画
  @keyframes identifier {
    from {
      transform: translate(-5px);
    }
    20% {
      transform: translate(5px);
    }
    40% {
      transform: translate(-5px);
    }
    60% {
      transform: translate(5px);
    }
    80% {
      transform: translate(-5px);
    }
    to {
      transform: translate(0px);
    }
  }
}
</style>
