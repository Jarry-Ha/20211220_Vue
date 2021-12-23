<template>
    <div>
        <h3>A07 Push</h3>

        <div>
            <button @click="back">BACK</button>
            <button @click="forward">FORWARD</button>
            <button @click="goHome">HOME</button>
            <button @click="goURL('/A02Style')">A02Style</button>

            <!-- 객체 형태의 데이터 전달은 name 사용 -->
            <button @click="goURL({name: 'style'})">A02Style</button>
            <button @click="goURL({name: 'params', params: {id: 1001, name: '홍길동'}})">A03Params</button>
            <button @click="goURL({name: 'query', query: {id: 1002, name: '놀부', age: 30}})">A05Query</button>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$route);               // 속성 params, query, hash 정보 등을 참조
        console.log(this.$router);              // method. back(), forword(), push()로 링크 이동
    },
    methods: {
        back: function(){
            this.$router.back();
        },
        forward: function() {
            this.$router.forward();
        },
        goHome: function() {
            this.$router.push('/A01Bind');
        },
        goURL: function(url) {
            this.$router.push(url);
        },
    },

    // 이 컴퍼넌트에 진입 여부를 확인
    beforeRouteEnter: function(to, from, next) {
        console.log('Component 수준의 네이게이션 보호 => beforeRouterEnter');
        
        const storage = window.sessionStorage;

        if(storage.getItem('tel') === '010') next(true)
        else next(false)
    },

    // 진입 후 다른 패스로 이동하는 경우 이동 가능 여부 
    beforeRouteLeave: function(to, from, next) {
        console.log('Component 수준의 네이게이션 보호 => beforeRouterLeave');
        
        const storage = window.sessionStorage;

        if(storage.getItem('address') === 'seoul') next(true)
        else next(false)
    }
}
</script>