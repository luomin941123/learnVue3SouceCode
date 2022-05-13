import { h } from 'vue'

// 创建一个vue应用程序，模板使用tempalte选项，也可以使用渲染函数选项替换

// v-if渲染函数
const App1 = {
    render() {
        // v-if="ok"
        let nodeToReturn
        if (this.ok) {
            nodeToReturn = h('div', { id: 'hello' }, 'world')
        } else {
            nodeToReturn = h('p', 'other branch')
        }
        return nodeToReturn
    }
}

// v-for渲染函数
const App2 = {
    render() {
        // v-for="item in list"
        return this.list.map(item => {
            return h('div', { key: item.id }, item.text)
        })
    }
}

// 插槽渲染
const App3 = {
    render() {
        // 如果没有组件没有插槽，this.$slots.default是undefined，如果存在，则调用default函数将返回有一个vnode数组
        const slot = this.$slots.default ? this.$slots.default() : []
        // 可以自定义插槽的渲染方式，以任何你希望的方式
        slot.map(vnode => {
            return h('div', [vnode])
        })
    }
}

// 插槽改造示例（堆栈布局组件）
const Stack = {
    render() {
        const slot = this.$slots.default ? this.$slots.default() : []
        return h('div', { class: 'stack'}, slot.map(child => {
            return h('div', { class: `mt-${ this.$props.size }` }, [child])
        }))
    }
}
