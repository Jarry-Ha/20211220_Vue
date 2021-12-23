<template>
    <div>
        <h4>A07 Contacts</h4>

        <div>
            <router-link to="/A07ChildRouter">INFO</router-link> | 
            <router-link to="/A07ChildRouter/way">WAY</router-link> | 
            <span v-for="item in contacts" :key="item.no">
                <router-link :to="'/A07ChildRouter/view/' + item.no">{{item.name}}</router-link> | 
            </span>
        </div>
        <br />

        <div>
            <!-- 자식 라우터의 링크에 관련 컴퍼넌트가 표시될 영역 -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import contactlist from './data/ContactList';

export default {
    data: function () {
        return {
            contacts: contactlist.contacts,
        };
    },
};
</script>

<style>
</style>