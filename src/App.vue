<template>
  <h1 class="title">Shelve</h1>
  <div class="container">
    <router-view />
  </div>
  <div class="footer"># V: 1.3.0 by Fka 2022</div>
</template>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
}

.title {
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  margin: 0;
  border-bottom: 0.1rem solid #777777;
}

.footer {
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  left: 0;
  font-size: 0.75rem;
  font-family: "Ubuntu Mono";
  color: #4b4b4b;
  padding: 0 1rem;
}
</style>

<style lang="less">
@font-face {
  font-family: "Ubuntu Regular";
  src: local("Ubuntu Regular"), url(./fonts/Ubuntu-L.ttf) format("truetype");
}

@font-face {
  font-family: "Ubuntu Mono";
  src: local("Ubuntu Mono"), url(./fonts/UbuntuMono-R.ttf) format("truetype");
}

body {
  margin: 0;
  padding: 0;
  font-family: "Ubuntu Regular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #dddddd;
  background: #272822;
  cursor: default;
  overflow-y: scroll;
  overflow-x: hidden;
}

a {
  color: #d8e1e7;
  text-decoration: none;

  &:hover {
    font-weight: 700;
  }
}
</style>
