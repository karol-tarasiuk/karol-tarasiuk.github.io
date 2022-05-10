<template>
  <h1 class="title">Książki</h1>
  <div class="container">
    <div class="content">
      <router-view />
    </div>
  </div>
  <div class="footer"># V: 1.1 by Fka</div>
</template>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
}

.content {
  width: 100%;
  display: flex;
}

.title {
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  margin: 0;
  border-bottom: 0.1rem solid #777777;
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 0.75rem;
  font-family: "Ubuntu Mono";
  color: #4b4b4b;
  padding: 0 1rem;
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
  overflow: hidden;
}

a {
  color: #d8e1e7;
  text-decoration: none;

  &:hover {
    font-weight: 700;
  }
}
</style>
