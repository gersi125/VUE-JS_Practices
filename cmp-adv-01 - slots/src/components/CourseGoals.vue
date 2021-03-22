<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :goal="goal"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals: ["Finish the Course!", "Learn Vue JS!"]
        };
    }
}
</script>