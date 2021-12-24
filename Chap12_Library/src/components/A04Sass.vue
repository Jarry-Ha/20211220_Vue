<template>
    <div>
        <!--
            webpack 버전이 4면 sass-loader => 10
            webpack 버전이 4면 sass-loader => 11 이상

            설치된 webpack 버전 확인
            npm list webpack

            npm install sass-loader@^10 sass 
            
        -->
        <h3 class="h3Color">A04 SASS</h3>

        <div>
            <div class="title">Hello World</div>
            <div>Hello World</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import './../assets/css/style.scss';

    $color: orange;

    .h3Color { color: $color; }
</style>