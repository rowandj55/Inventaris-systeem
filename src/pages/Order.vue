<template>
    <div class="groupContainer">
        <table>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Required Amount</th>
            </tr>
            <tr v-for="product in missingProductsView" :key="product.name">
                <td>{{ product.name }}</td>
                <td>{{ product.quantity }}</td>
                <td>{{ product.minimumAmount }}</td>
            </tr>
        </table>
    </div>
</template>

<script setup lang="ts">
import {missingProductsView} from '../store';
</script>
