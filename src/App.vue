<template>
  <h1 class="title">Książki</h1>
  <div class="container">
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  display: block;
}

.content {
  display: flex;
}

.title {
  text-align: center;
  padding: 1rem 0;
  margin: 0;
  border-bottom: 0.1rem solid #5d6d79;
}
</style>

<style lang="less">
body {
  margin: 0;
  padding: 0;
  font-family: "Ubuntu Regular";
  src: local("Ubuntu Regular"), url(./fonts/Ubuntu-L.ttf) format("truetype");
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #d8e1e7;
  background: #272822;
  cursor: default;
}

a {
  color: #d8e1e7;
  text-decoration: none;

  &:hover {
    font-weight: 700;
  }
}
</style>
