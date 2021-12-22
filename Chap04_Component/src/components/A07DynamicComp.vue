
<template>
    <div>
        <h3>A07 Dynamic Component</h3>

        <ul>
            <li><a href="#" @click="changeComp('Home')">HOME</a></li>
            <li><a href="#" @click="changeComp('About')">ABOUT</a></li>
            <li><a href="#" @click="changeComp('Product')">Product</a></li>
        </ul>

        <div>
            include에 포함된 것은 1번 사용되면 지우지 않고 기존의 컴퍼넌트를 재 사용.<br>
            <keep-alive include="home,about" exclude="product"> <!-- 이름은 소문자. , 사이에 공백 없이 나열 -->
                <component :is="currentView"></component>
            </keep-alive>
            
        </div>
    </div>
</template>

<script>
import Home from './childComponents/Home.vue'
import About from './childComponents/About.vue'
import Product from './childComponents/Product.vue'

export default {
    components: { Home, About, Product },
    data() {
        return {
            currentView: 'Home'
        }
    },
    methods: {
        changeComp(comp) {
            this.currentView = comp; 
        }
    }
}
</script>

<style>

</style>