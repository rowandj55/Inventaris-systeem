<template>
    <div class="groupContainer">
        <table>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Required Amount</th>
            </tr>
            <tr v-for="product in allProductsView" :key="product.name">
                <td>{{ product.name }}</td>
                <td>
                    <input
                        type="number"
                        :value="product.quantity"
                        @input="updateProductQuantity(product, ($event.target as HTMLInputElement).valueAsNumber)"
                    />
                </td>
                <td>{{ product.minimumAmount }}</td>
                <!-- <td><button @click="db(product)">Debug</button></td> -->
                <td><button @click="modifyProduct(product.id)">Bewerken</button></td>
                <td><button @click="deleteProduct(product.name)">Verwijderen</button></td>
            </tr>
        </table>
    </div>
</template>

<script setup lang="ts">
import {allProductsView, type InventoryObject, db, updateProductQuantity, removeProduct} from '../store';
import {useRouter} from 'vue-router';

const emit = defineEmits(['startEditProduct']);

const router = useRouter();

const modifyProduct = (id: InventoryObject["id"]) => {
    router.push(`/edit/${id}`);
};

const deleteProduct = (deletedproduct: InventoryObject["name"]) => {
    removeProduct(deletedproduct);
};
</script>
