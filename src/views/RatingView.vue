<template>
    <div class="rating-container">
        <h1>Rate Our Services</h1>

        <div class="rating-item" v-for="(item, index) in ratingItems" :key="index">
            <h3>{{ item.title }}</h3>
            <div class="stars">
                <span v-for="n in 5" :key="n" @click="rateItem(index, n)" :class="{ 'active': n <= item.rating }">
                    ★
                </span>
            </div>
        </div>

        <div class="show-rating">
            <h3>Show Rating</h3>
            <div v-for="(item, index) in ratingItems" :key="index">
                <p>{{ item.title }}: {{ item.rating }} / 5</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const ratingItems = ref([
    { title: 'Service Quality', rating: 0 },
    { title: 'Customer Support', rating: 0 },
    { title: 'Website Usability', rating: 0 },
]);

const rateItem = (index, rating) => {
    ratingItems.value[index].rating = rating;
};
</script>

<style scoped>
.rating-container {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}

.rating-item {
    margin: 20px 0;
}

.stars {
    display: inline-block;
}

.stars span {
    font-size: 2rem;
    cursor: pointer;
}

.stars span.active {
    color: gold;
}

.show-rating {
    margin-top: 30px;
}

.show-rating p {
    font-size: 1.2rem;
    color: #333;
}
</style>