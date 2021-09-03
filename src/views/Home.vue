<template>
  <div>
    <div class="topnavAndBanner">
      <div class="topnav">
        <router-link to="/" class="logo">
          <svg class="icon">
            <use xlink:href="#icon-king"></use>
          </svg>
        </router-link>
      </div>
      <div class="banner">
        <h1>萧 笛</h1>
        <h3>有态度的前端开发者</h3>
        <p class="actions">
          <a href="https://github.com/deexiao">GitHub</a>
          <a href="../Resume.pdf" target="_blank">简历</a>
        </p>
      </div>
      <div>
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g class="parallax">
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg class="bt-gm">
            <router-link to="/vue-xd">
              <use xlink:href="#icon-vuex"></use>
            </router-link>
          </svg>

          <router-link to="/vue-xd">我造的小轮子</router-link>
          <p>基于 Vue 3 造轮子</p>
        </li>
        <li>
          <svg class="bt-gm">
            <router-link to="/seatsfinder">
              <use xlink:href="#icon-seatsfinder"></use>
            </router-link>
          </svg>
          <router-link to="/seatsfinder">SeatsFinder</router-link>

          <p>一款多平台的抢课软件</p>
        </li>
        <li>
          <svg class="bt-gm">
            <a
              href="https://apps.apple.com/cn/app/stocktakes/id1446177678?mt=8%22%3EStockTakes"
            >
              <use xlink:href="#icon-stocktakes"></use>
            </a>
          </svg>
          <a
            href="https://apps.apple.com/cn/app/stocktakes/id1446177678?mt=8%22%3EStockTakes"
            >StockTakes</a
          >
          <p>一款 iOS 下的库存计数器</p>
        </li>
        <li>
          <svg class="bt-gm">
            <a href="https://deexiao.com/morney-website/#/money">
              <use xlink:href="#icon-morney"></use>
            </a>
          </svg>
          <a href="https://deexiao.com/morney-website/#/money">记账 APP</a>
          <p>基于 Vue 2 的记账本</p>
        </li>
      </ul>
    </div>
  </div>
  <!-- <div class="content flex">
    <a href="deexiao.com">旧版主页</a>
  </div> -->
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components: {
    Topnav,
  },
}
</script>

<style scoped>
@keyframes scaleDraw {
  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
  0% {
    transform: scale(1); /*开始为原始大小*/
  }
  25% {
    transform: scale(1.1); /*放大1.1倍*/
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
}
.bt-gm {
  width: 150px;
  height: 200px;
  background-size: 150% 200%;
  -webkit-animation-name: scaleDraw; /*关键帧名称*/
  -webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
  -webkit-animation-iteration-count: infinite; /*动画播放的次数*/
  -webkit-animation-duration: 3s; /*动画所花费的时间*/
}

@import url(//fonts.googleapis.com/css?family=Lato:300:400);

body {
  margin: 0;
}

h1 {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 48px;
}
p {
  letter-spacing: 1px;
  font-size: 14px;
  color: #333333;
}

.header {
  position: relative;
  text-align: center;
  background: linear-gradient(
    60deg,
    rgba(84, 58, 183, 1) 0%,
    rgba(0, 172, 193, 1) 100%
  );
  color: white;
}
.logo {
  width: 50px;
  fill: white;
  padding-right: 15px;
  display: inline-block;
  vertical-align: middle;
}

.inner-header {
  height: 65vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

.flex {
  /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
}

.content {
  position: relative;
  height: 20vh;
  text-align: center;
  background-color: white;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
  .content {
    height: 30vh;
  }
  h1 {
    font-size: 32px;
  }
}
</style>

<style lang="scss" scoped>
$green: #8a96dd;
$border-radius: 20px;
$color: #4e5875;
// body {
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
//     Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
// }
.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;

    > svg {
      width: 32px;
      height: 32px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }

    > .logo {
      margin: 0 auto;
    }

    > .toggleAside {
      display: inline-block;
    }
  }
}
.topnavAndBanner {
  background: linear-gradient(
    156deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(183, 205, 255, 1) 41%,
    rgba(151, 128, 255, 1) 100%
  );
  // clip-path: ellipse(80% 60% at 50% 40%);
}

.features {
  // mobile
  margin: 24px auto;

  padding: 0 26px;

  color: #505873;
  > router-link a {
    font-size: 2ch;
  }
  p {
    font-size: 1.5ch;
    color: #61646e;
  }
  @media (min-width: 800px) {
    width: 800px;

    a {
      font-size: 2.4ch;
    }
    p {
      font-size: 1.65ch;
      color: #61646e;
    }
    > ul {
      > li {
        width: 50%;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 1200px;

    > ul {
      > li {
        width: 25%;
      }
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        'icon title'
        'icon text';
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 54px;
        height: 54px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text;
      }
    }
  }
}

.banner {
  // mobile
  margin-bottom: -5ch;

  color: $color;
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: #faefef;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
