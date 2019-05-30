<template>
    <div>
        <h1>登录</h1>
        <span>手机号：{{$route.params.phone}}</span>
        <router-link to="/reg">去注册</router-link>
    </div>
</template>

<script>
export default {
    props: ['phone']
}
</script>

<style>

</style>
