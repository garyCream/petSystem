<template>
    <div>
        <h1>注册</h1>
        <button @click="reg">注册</button>
    </div>
</template>

<script>
export default {
    methods: {
        reg() {
            this.$router.push("/login");
        }
    }
}
</script>

<style>

</style>
