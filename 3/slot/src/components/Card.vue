<template>
  <div>
    <header>
      <span>header</span>
      <slot name="header"></slot>
    </header>
    <main>
      <span>main</span>
      <slot name="main"></slot>
    </main>
    <footer>
      <span>footer</span>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
div {
  border: solid 1px #ddd;

  header,
  main,
  footer {
    padding: 10px
  }

  main {
    border-style: solid;
    border-color: #ddd;
    border-width: 1px 0 1px 0;
  }
}
</style>