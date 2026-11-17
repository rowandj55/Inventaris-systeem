<template>
      <nav class="groupContainer">
        <RouterLink to="/">Go to Overview</RouterLink>
        <RouterLink to="/create">Go to Create</RouterLink>
        <RouterLink to="/order">Go to Order</RouterLink>
    </nav>
    <main>
        <RouterView />
    </main>
</template>

<script setup lang="ts">



</script>