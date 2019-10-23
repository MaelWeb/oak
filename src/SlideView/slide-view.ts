import BasicBehavior from 'Mixins/basic'

Component({
    options: {
        multipleSlots: true
    },
    behaviors: [BasicBehavior],
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        innerText: {
            type: String,
            value: 'default value',
            optionalTypes: [String]
        },
        rightWidth: {
            type: Number,
            value: 100,
            optionalTypes: [Number]
        }
    },
    attached() {
        // 轻击开始时间
        this.touchStartTime = 0

        // 记录上一次点击时间
        this.lastTouchTime = 0

        // 记录初始轻击的位置
        this.x1, this.y1, this.x2, this.y2

        // 轻击事件的延时器
        this.touchDelay
        this.longTap

        // 记录当前事件是否已为等待结束的状态
        this.isActive = false
        // 记录有坐标信息的事件
        this.eventMark = null

        this.draging = false
        this.position = 'Right' // 'Left'

        console.log(this)
    },

    data: {
        // 这里是一些组件内部数据
        someData: {},
        offsetX: 0,
        transition: ''
    },

    methods: {
        // 这里是一个自定义方法
        touchstart(e) {
            console.log('[Toucher.touchstart]', e.touches)
            if (!e.touches) return
            // 缓存事件
            this.eventMark = e
            this.x1 = e.touches[0].pageX
            this.y1 = e.touches[0].pageY
            this.x2 = 0
            this.y2 = 0
            this.isActive = true
            this.touchStartTime = new Date().getTime()

            this.triggerEvent('onSwipeStart', e)

            clearTimeout(this.longTap)

            this.longTap = setTimeout(() => {
                console.log('[Toucher.touchstart]', e.touches)
                this._actionOver(e)
                // 断定此次事件为长按事件
                this.triggerEvent('onLongTap', e)
            }, 500)

            this.draging = true
            this.setData({ transition: '' })
        },

        touchmove(e) {
            if (!e.touches) return
            // 缓存事件
            // 在原生事件基础上记录初始位置（为swipe事件增加参数传递）
            e.plugStartPosition = {
                pageX: this.x1,
                pageY: this.y1
            }
            this.eventMark = e

            // 断定此次事件为移动事件
            this.triggerEvent('onSwipe', e)

            if (!this.isActive) {
                return
            }
            this.x2 = e.touches[0].pageX
            this.y2 = e.touches[0].pageY

            clearTimeout(this.longTap)

            // 设置偏移量
            let offsetX = this.x2 - this.x1

            if (this.position === 'Right') {
                offsetX = offsetX > 0 ? 0 : offsetX
                offsetX = offsetX < -100 ? -100 : offsetX
            } else {
                offsetX = offsetX - 100 < 0 ? offsetX - 100 : offsetX
                offsetX = offsetX > 0 ? 0 : offsetX
            }

            this.setData({ offsetX })
        },

        touchend(e) {
            // touchend中，拿不到坐标位置信息，故使用全局保存下数据
            e.plugStartPosition = this.eventMark.plugStartPosition
            e.plugTouches = this.eventMark.touches
            console.log(
                '[Toucher.touchend]',
                e,
                Math.abs(this.x1 - this.x2) > 5 ||
                    Math.abs(this.y1 - this.y2) > 5,
                this.isActive
            )
            this.triggerEvent('onSwipeEnd', e)
            if (!this.isActive) {
                return
            }
            const now: number = new Date().getTime()
            if (
                Math.abs(this.x1 - this.x2) > 0 ||
                Math.abs(this.y1 - this.y2) > 0
            ) {
                // 断定此次事件为移动手势
                const direction = this._swipeDirection(
                    this.x1,
                    this.x2,
                    this.y1,
                    this.y2
                )
                this.triggerEvent(`onSwipe${direction}`, e)
                this._actionOver(e)

                let { offsetX } = this.data

                offsetX = direction === 'Left' ? -100 : 0

                this.position = direction
                this.setData({
                    offsetX,
                    transition: 'transition: all 300ms ease;'
                })
            } else if (now - this.lastTouchTime > 100) {
                // 延迟响应
                this.touchDelay = setTimeout(() => {
                    this.isSingleTap()
                }, 190)
            } else {
                clearTimeout(this.touchDelay)
                this._actionOver(e)
                // 断定此次事件为连续两次轻击事件
                this.triggerEvent('onDoubleTap', this.eventMark)
            }

            this.lastTouchTime = now

            this.draging = false
        },

        isSingleTap() {
            this._actionOver()
            this.triggerEvent('onTap', this.eventMark)
        },

        _actionOver() {
            this.isActive = false
            clearTimeout(this.touchDelay)
        },

        _swipeDirection(x1, x2, y1, y2) {
            // eslint-disable-next-line no-nested-ternary
            return Math.abs(x1 - x2) >= Math.abs(y1 - y2)
                ? x1 - x2 > 0 ? 'Left' : 'Right'
                : y1 - y2 > 0 ? 'Up' : 'Down'
        },

        _swipeMove(offset: number = 0) {
            console.log(offset)
        },

        _swipeLeave() {}
    }
})