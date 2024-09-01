<template>
    <div class="admin-container">
        <div class="button-group">
            <button class="btn btn-primary">Settings</button>
            <button class="btn btn-primary">Accounts</button>
            <button class="btn btn-primary">Profile</button>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.admin-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.button-group {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.btn {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
</style>