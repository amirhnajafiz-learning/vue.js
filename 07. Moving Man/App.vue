<template>
    <div class="circle" v-bind:style="{ top: top_dist + 'px', left: left_dist + 'px' }"></div>
</template>

<script>
export default {
    Circle,
    data() {
        return {
            top_dist: 50,
            left_dist: 50
        }
    }
}
</script>

<style scoped>
.circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: aqua;
}
</style>