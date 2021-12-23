<template>
  <div class="card-body">
      <h1>Vue Router</h1>

      <div>
        <router-link to="/">HOME</router-link> | 
        <router-link to="/A01Bind">A01Bind</router-link> | 
        <router-link to="/A02Style">A02Style</router-link> | 
        <router-link to="/A03Params/1005/data/NolBu">A03Params</router-link> | 
        <router-link to="/A03Params/1006/data/방자">A03Params</router-link> | 

        <router-link to="/A04Props/1003/data/향단">향단</router-link> | 
        <router-link to="/A05Contacts">A05Contacts</router-link> | 

        <router-link to="/A06Query?id=1001&name=흥부&age=20#TOP">A06Query</router-link> | 
        <router-link to="/A07ChildRouter">A07ChildRouter</router-link> | 
        <router-link to="/A08Push">A08Push</router-link> | 
        <router-link to="/ABC">ABC</router-link> | 
      </div>

      <hr>

      <div>
        <router-link :to="{paht: '/'}">HOME</router-link> | 
        <router-link :to="{name: 'bind'}">A01Bind</router-link> | 
        <router-link :to="{name: 'style'}">A02Style</router-link> | 
        <router-link :to="{name: 'params', params: {id: 1005, name: 'NolBu'}}">A03Params</router-link> | 
        <router-link :to="{name: 'params', params: {id: 1006, name: '방자'}}">A03Params</router-link> | 

        <router-link :to="{name: 'props', params: {id: 1003, name: '향단'}}">향단</router-link> | 
        <router-link to="/A05Contacts">A05Contacts</router-link> | 

        <router-link :to="{name: 'query', query: {id: 1001, name: '흥부', age: 20}, hash: '#TOP'}">A06Query</router-link> | 
        <router-link to="/A07ChildRouter">A07ChildRouter</router-link> | 
        <router-link to="/A08Push">A08Push</router-link> | 
        <router-link to="/ABC">ABC</router-link> | 

      </div>

      <hr>

      <div>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import VueRouter from 'vue-router'
import A01Bind from './components/A01Bind.vue'
import A02Style from './components/A02Style.vue'
import A03Params from './components/A03Params.vue'
import A04Props from './components/A04Props.vue'
import A05Contacts from './components/A05Contacts.vue'
import A05ContactView from './components/A05ContactView.vue'
import A06Query from './components/A06Query.vue'

/*
import A07ChildRouter from './components/A07ChildRouter.vue'
import CompanyInfo from './components/childComponent/CompanyInfo.vue'
import CompanyWay from './components/childComponent/CompanyWay.vue'
import A08Push from './components/A08Push.vue'
import A09NotFound from './components/A09NotFound.vue'
*/

// vue-cli로 설치한 보일러 플레이트 프로젝트도 lazy load 지원 안함.
// 동적 로드로 변경 => lazy load가 된다. 해당 링크를 클륵하면 그때 서버에 요청해서 가져온다
const A07ChildRouter = () => import('./components/A07ChildRouter.vue');
const CompanyInfo = () => import('./components/childComponent/CompanyInfo.vue');
const CompanyWay = () => import('./components/childComponent/CompanyWay.vue');
const A08Push = () => import('./components/A08Push.vue');
const A09NotFound = () => import( './components/A09NotFound.vue');


const router = new VueRouter({
  routes: [
    { path: '/',                      redirect: '/A01Bind'},
    { path: '/A01Bind',               component: A01Bind,       name: 'bind'},
    { path: '/A02Style',              component: A02Style,      name: 'style'},
    // path base로 표시되는 컴퍼넌트에 값을 전달할 수 있다.
    // :이 존재하면 패스 역할과 변수 역수 역할을 동시에 한다. /A03Params/:id => /A03Params/10 => id에 10이라는 값을 담는 변수 
    // /A03Params/:id/data/:name => /A03Params/1005/data/nolbu
    { path: '/A03Params/:id/data/:name',     component: A03Params,    name: 'params'},
    // id와 name의 props에 주입해서 전달해 준다
    { path: '/A04Props/:id/data/:name',     component: A04Props,    props: true,  name: 'props'},
    { path: '/A05Contacts',           component: A05Contacts,                     name: 'contacts'},
    { path: '/A05ContactView/:id',    component: A05ContactView,                  name: 'contactView'},

    // 주소줄 즉 router-link에서 전달할 값을 지정한다.
    { path: '/A06Query',              component: A06Query,                        name: 'query' },

    // 하위 라우터 구성 A07ChildRouter.vue 파일을 확인 - 내부에서 router-view와 router-link를 구성
    { path: '/A07ChildRouter',        component: A07ChildRouter, 
        children: [
          // path는 절대패스(상위 path에 이서서 기술) 또는 상대패스(/ 없이 이름을 기술) 둘 다 사용 가능
          { path: '',       component: CompanyInfo },
          { path: 'way',   component: CompanyWay, },
          { path: '/A07ChildRouter/view/:id',    component: A05ContactView }
        ]
    },
    { path: '/A08Push',       component: A08Push },

    // 가장 아래에 존재해야 한다
    { path: '/*',             component: A09NotFound}
  ]
});

// 전체 라우터에 Guard(네이게이션 보호)를 사용하는 경우
// console.log(router);
// next(false) => 이동 불가
// next(true) => 이동 가능
// to 현재 path => from 이동한 패스
router.beforeEach( (to, from, next) => {

})


export default {
  name: 'App',
  router,
  
}
</script>

<style>

</style>
