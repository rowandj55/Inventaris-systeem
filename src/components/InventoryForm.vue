<template>
    <div class="groupContainer">
        <table>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Required Amount</th>
            </tr>
            <tr>
                <td><input v-model="itemToBeUpdated.name" /></td>
                <td><input type="number" v-model="itemToBeUpdated.quantity" /></td>
                <td><input type="number" v-model="itemToBeUpdated.minimumAmount" /></td>
            </tr>
            <tr>
                <td colspan="3">
                    <div id="submitButtons">
                        <button @click="submitButton">Opslaan</button>
                        <button @click="cancelButton">Cancel</button>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const props = defineProps({
    inventoryItem: Object,
});

const itemToBeUpdated = ref({...props.inventoryItem});

const router = useRouter();
const goToOverview = () => {
    router.push('/');
};

const emit = defineEmits(['submitProduct']);
const submitButton = () => {
    emit('submitProduct', itemToBeUpdated.value);
    goToOverview();
};
const cancelButton = () => {
    goToOverview();
};

</script>
