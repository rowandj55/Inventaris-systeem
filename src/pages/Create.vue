<template>
    <InventoryForm :inventoryItem="newProduct" @submit-product="saveProduct" />
</template>

<script setup lang="ts">
import InventoryForm from '@/components/InventoryForm.vue';
import type { InventoryObject } from '../store';
import {reactive} from 'vue';
import {addProduct} from '../store';

const newProduct = reactive<InventoryObject>({
        id: 0,
        name: '',
        quantity: 0,
        minimumAmount: 0,
});

const saveProduct = (newlyCreatedProduct: InventoryObject) => {
    addProduct(newlyCreatedProduct);
};
</script>