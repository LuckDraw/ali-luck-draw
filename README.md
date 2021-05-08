
<div align="center">
  <img src="https://raw.githubusercontent.com/LuckDraw/lucky-canvas/master/logo.png" width="128" alt="logo" />
  <h1>支付宝小程序 抽奖组件</h1>
  <p>一个基于支付宝小程序的 ( 大转盘 / 九宫格 ) 抽奖插件</p>
  <p>
    <a href="https://github.com/luckdraw/ali-luck-draw/stargazers" target="_black">
      <img src="https://img.shields.io/github/stars/luckdraw/ali-luck-draw?color=%23ffca28&logo=github&style=flat-square" alt="stars" />
    </a>
    <a href="https://github.com/luckdraw/ali-luck-draw/network/members" target="_black">
      <img src="https://img.shields.io/github/forks/luckdraw/ali-luck-draw?color=%23ffca28&logo=github&style=flat-square" alt="forks" />
    </a>
    <a href="https://www.npmjs.com/package/ali-luck-draw" target="_black">
      <img src="https://img.shields.io/npm/v/ali-luck-draw?color=%23ffca28&logo=npm&style=flat-square" alt="version" />
    </a>
    <a href="https://www.npmjs.com/package/ali-luck-draw" target="_black">
      <img src="https://img.shields.io/npm/dm/ali-luck-draw?color=%23ffca28&logo=npm&style=flat-square" alt="downloads" />
    </a>
  </p>
  <p>
    <a href="https://github.com/buuing" target="_black">
      <img src="https://img.shields.io/badge/Author-%20buuing%20-7289da.svg?&logo=github&style=flat-square" alt="author" />
    </a>
    <a href="https://github.com/luckdraw/ali-luck-draw/blob/master/LICENSE" target="_black">
      <img src="https://img.shields.io/github/license/luckdraw/ali-luck-draw?color=%232DCE89&logo=github&style=flat-square" alt="license" />
    </a>
  </p>
</div>

## 官方文档

> 中文：[https://100px.net/usage/ali.html](https://100px.net/usage/ali.html)

<br />

- **在 js / jq 中使用 [lucky-canvas](https://github.com/luckdraw/lucky-canvas)**

- **在 vue 中使用 [vue-luck-draw](https://github.com/luckdraw/vue-luck-draw)**

- **在 react 中使用 [react-luck-draw](https://github.com/luckdraw/react-luck-draw)**

- **在 uni-app 中使用 [uni-luck-draw](https://github.com/luckdraw/uni-luck-draw)**

- **在 taro 中使用 [taro-luck-draw](https://github.com/luckdraw/taro-luck-draw)**

- **在 微信小程序 中使用 [mini-luck-draw](https://github.com/luckdraw/mini-luck-draw)**

- **在 支付宝小程序 中使用 [ali-luck-draw](https://github.com/luckdraw/ali-luck-draw)**

<br />

## 在 微信小程序 中使用

### 方式 1：通过 npm 安装

1. 先找到小程序项目的根目录，看是否有`package.json`文件，**如果没有就执行下面的命令**来创建该文件

```shell
npm init -y
```

2. 安装 npm 包

```shell
npm install ali-luck-draw
```

3. 引入自定义组件

```json
{
  "usingComponents": {
    "lucky-wheel": "ali-luck-draw/es/lucky-wheel/index",
    "lucky-grid": "ali-luck-draw/es/lucky-grid/index"
  }
}
```

4. 我在这里提供一个简略的 demo 供你进行测试

```html
<view>
  <lucky-wheel
    ref="myLucky"
    width="500rpx"
    height="500rpx"
    blocks="{{blocks}}"
    prizes="{{prizes}}"
    buttons="{{buttons}}"
    defaultStyle="{{defaultStyle}}"
    onStart="handleStart"
    onEnd="handleEnd"
  />
</view>
```

```js
Page({
  data: {
    prizes: [
      { title: '1元红包', background: '#f9e3bb', fonts: [{ text: '1元红包', top: '18%' }] },
      { title: '100元红包', background: '#f8d384', fonts: [{ text: '100元红包', top: '18%' }] },
      { title: '0.5元红包', background: '#f9e3bb', fonts: [{ text: '0.5元红包', top: '18%' }] },
      { title: '2元红包', background: '#f8d384', fonts: [{ text: '2元红包', top: '18%' }] },
      { title: '10元红包', background: '#f9e3bb', fonts: [{ text: '10元红包', top: '18%' }] },
      { title: '50元红包', background: '#f8d384', fonts: [{ text: '50元红包', top: '18%' }] },
    ],
    defaultStyle: {
      fontColor: '#d64737',
      fontSize: '14px'
    },
    blocks: [
      { padding: '13px', background: '#d64737' }
    ],
    buttons: [
      { radius: '50px', background: '#d64737' },
      { radius: '45px', background: '#fff' },
      { radius: '41px', background: '#f6c66f', pointer: true },
      {
        radius: '35px', background: '#ffdea0',
        fonts: [{ text: '开始\n抽奖', fontSize: '18px', top: -18 }]
      }
    ],
  },
  myLucky (ref) {
    // 获取抽奖组件实例
    this.myLucky = ref
  },
  handleStart () {
    // 调用play方法开始旋转
    this.myLucky.play()
    // 用定时器模拟请求接口
    setTimeout(_ => {
      // 3s 后得到中奖索引
      const index = Math.random() * 6 >> 0
      // 调用stop方法然后缓慢停止
      this.myLucky.stop(index)
    }, 3000)
  },
  handleEnd (prizes) {
    // 中奖奖品详情
    console.log(prizes)
  },
})
```

<br />

### **如果您觉得这个项目还不错, 可以在 [Github](https://github.com/LuckDraw/ali-luck-draw) 上面帮我点个`star` ☜(ﾟヮﾟ☜)**

<br />
