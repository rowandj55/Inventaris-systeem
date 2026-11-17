<template>
    <InventoryForm :inventoryItem="currentProduct" @submit-product="saveProduct" />
</template>

<script setup lang="ts">
import InventoryForm from '@/components/InventoryForm.vue';
import {editProduct, type InventoryObject, getProductById} from '../store';
import {useRoute} from 'vue-router';

const route = useRoute();
const currentProduct = getProductById(Number(route.params.id));

const saveProduct = (modifiedProduct: InventoryObject) => {
    if (currentProduct !== undefined) {
        editProduct(currentProduct.id, modifiedProduct);
    }
};
</script>
