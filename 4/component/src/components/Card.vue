<script>
export default {

}
</script>

<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: inline-block;

  border: solid 1px #ddd;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 5px;

  header {
    background-color: #f3f3f3;
    border-bottom: solid 1px #ddd;
    padding: 10px;
  }

  main {
    padding: 10px 10px 0 10px;
  }
}
</style>