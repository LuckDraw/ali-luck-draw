import { LuckyWheel } from 'lucky-canvas'
import { changeUnits, resolveImage } from '../utils/index.js'

Component({
  data: {
    isShow: false,
  },
  didMount () {
    my.createSelectorQuery().in(this).select('#lucky-wheel').node((res) => {
      const canvas = this.canvas = res.node//res[0].node
      const dpr = this.dpr = my.getSystemInfoSync().pixelRatio
      const ctx = this.ctx = canvas.getContext('2d')
      const data = this.props
      canvas.width = canvas.width * dpr
      canvas.height = canvas.height * dpr
      // ctx.scale(dpr, dpr)
      this.$lucky = new LuckyWheel({
        flag: 'MP-WX',
        ctx,
        dpr,
        width: canvas.width,
        height: canvas.height,
        // rAF: canvas.requestAnimationFrame, // 帧动画真机调试会报错!
        setTimeout,
        clearTimeout,
        setInterval,
        clearInterval,
        beforeCreate: function () {
          const Radius = Math.min(this.config.width, this.config.height) / 2
          // 设置坐标轴
          ctx.translate(Radius, Radius)
        },
        beforeInit: function () {
          // 重置坐标轴
          ctx.translate(-this.Radius, -this.Radius)
        },
        afterInit () {
        },
        unitFunc: (num, unit) => changeUnits(num + unit),
      }, {
        ...data,
        start: (...rest) => {
          this.props.onStart(...rest)
        },
        end: (...rest) => {
          this.props.onEnd(...rest)
        },
      })
      this.setData({ 
        isShow: true,
      })
    }).exec()
  },
  methods: {
    imgBindload(e) {
      const { name, index, i } = e.currentTarget.dataset
      const img = this.props[name][index].imgs[i]
      resolveImage(e, img, this.canvas)
    },
    toPlay(e) {
      const ctx = this.ctx
      const { clientX: x, clientY: y } = e.changedTouches[0]
      ctx.beginPath()
      ctx.arc(0, 0, this.$lucky.maxBtnRadius, 0, Math.PI * 2, false)
      if (!ctx.isPointInPath(x * this.dpr, y * this.dpr)) return
      this.$lucky.startCallback()
    },
    play(...rest) {
      this.$lucky.play(...rest)
    },
    stop(...rest) {
      this.$lucky.stop(...rest)
    },
  },
})
