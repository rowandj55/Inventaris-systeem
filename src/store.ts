import {ref, computed} from 'vue';

//---------------------------------STATE---------------------------------

export interface InventoryObject {
    id: number;
    name: string;
    quantity: number;
    minimumAmount: number;
}

const inventoryProducts = ref<InventoryObject[]>([
    {
        id: 1,
        name: 'Microphone',
        quantity: 10,
        minimumAmount: 8,
    },
    {
        id: 2,
        name: 'Studio Headphones',
        quantity: 4,
        minimumAmount: 4,
    },
    {
        id: 3,
        name: 'Audio Interface',
        quantity: 2,
        minimumAmount: 2,
    },
    {
        id: 4,
        name: 'Studio Monitor Speakers',
        quantity: 6,
        minimumAmount: 4,
    },
    {
        id: 5,
        name: 'XLR Cable',
        quantity: 32,
        minimumAmount: 24,
    },
    {
        id: 6,
        name: 'Microphone Stand',
        quantity: 10,
        minimumAmount: 8,
    },
    {
        id: 7,
        name: 'MIDI Keyboard',
        quantity: 2,
        minimumAmount: 1,
    },
]);


//---------------------------------GETTER---------------------------------

export const allProductsView = computed<InventoryObject[]>(() => inventoryProducts.value.map(product => ({...product})));

export const missingProductsView = computed<InventoryObject[]>(() =>
    inventoryProducts.value
        .filter(product => product.quantity < product.minimumAmount)
        .map(product => ({...product})
    )
);

//---------------------------------ACTIONS---------------------------------

export const db = (viewData: any) => { /* Temporary Debug function */
    console.log(viewData);
}

export const updateProductQuantity = (product: InventoryObject, quantity: number) => {
    const storedProduct = inventoryProducts.value.find(stored => stored.name === product.name);
    if (storedProduct !== undefined) {
    storedProduct.quantity = quantity;
    }
};

export const addProduct = (newProduct: InventoryObject) => {

    let newId: number = 1;

    while (inventoryProducts.value.some(item => item.id === newId)) {
        newId++
    }
    newProduct.id = newId;
    inventoryProducts.value.push(newProduct);
};

export const editProduct = (originalId: InventoryObject["id"], updatedProduct: InventoryObject) => {
    const foundProduct = inventoryProducts.value.find(product => product.id === originalId);
    if (foundProduct !== undefined) {
        Object.assign(foundProduct, updatedProduct);
    }
};

export const getProductById = (groceryNameId: InventoryObject["id"]) => {
    return inventoryProducts.value.find(product => product.id === groceryNameId);
};

export const removeProduct = (deletedproduct: InventoryObject["name"]) => {
    inventoryProducts.value = inventoryProducts.value.filter(product => product.name !== deletedproduct);
};