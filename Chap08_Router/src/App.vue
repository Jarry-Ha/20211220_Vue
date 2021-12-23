<template>
  <div class="card-body">
      <h1>Vue Router</h1>

      <div>
        <router-link to="/A01Bind">A01Bind</router-link> | 
        <router-link to="/A02Style">A02Style</router-link> | 
        <router-link to="/A03Params/1005/data/NolBu">A03Params</router-link> | 
        <router-link to="/A03Params/1006/data/방자">A03Params</router-link> | 

        <router-link to="/A04Props/1003/data/향단">향단</router-link> | 
        <router-link to="/A05Contacts">A05Contacts</router-link> | 

        <router-link to="/A06Query?id=1001&name=흥부&age=20#TOP">A06Query</router-link> | 
        <router-link to="/A07ChildRouter">A07ChildRouter</router-link> | 
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
import A07ChildRouter from './components/A07ChildRouter.vue'
import CompanyInfo from './components/childComponent/CompanyInfo.vue'
import CompanyWay from './components/childComponent/CompanyWay.vue'

const router = new VueRouter({
  routes: [
    { path: '/A01Bind',               component: A01Bind},
    { path: '/A02Style',              component: A02Style},
    // path base로 표시되는 컴퍼넌트에 값을 전달할 수 있다.
    // :이 존재하면 패스 역할과 변수 역수 역할을 동시에 한다. /A03Params/:id => /A03Params/10 => id에 10이라는 값을 담는 변수 
    // /A03Params/:id/data/:name => /A03Params/1005/data/nolbu
    { path: '/A03Params/:id/data/:name',     component: A03Params},
    // id와 name의 props에 주입해서 전달해 준다
    { path: '/A04Props/:id/data/:name',     component: A04Props,    props: true },
    { path: '/A05Contacts',           component: A05Contacts},
    { path: '/A05ContactView/:id',    component: A05ContactView},

    // 주소줄 즉 router-link에서 전달할 값을 지정한다.
    { path: '/A06Query',              component: A06Query },
    { path: '/A07ChildRouter',        component: A07ChildRouter, 
        children: [
          // path는 절대패스(상위 path에 이서서 기술) 또는 상대패스(/ 없이 이름을 기술) 둘 다 사용 가능
          { path: '',       component: CompanyInfo },
          { path: 'way',   component: CompanyWay, },
          { path: '/A07ChildRouter/view/:id',    component: A05ContactView }
        ]
    }

  ]
})

export default {
  name: 'App',
  router,
  
}
</script>

<style>

</style>
