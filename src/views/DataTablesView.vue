<template>
    <div>
        <h2>Products Table</h2>
        <DataTable :value="products" paginator :rows="10" :rowsPerPageOptions="[10, 20]" :filters="filters"
            filterDisplay="row" :sortField="sortField" :sortOrder="sortOrder" tableStyle="min-width: 50rem">
            <template #header>
                <div class="flex justify-end">
                    <InputText v-model="filters['global'].value" placeholder="Global Search" />
                </div>
            </template>

            <Column field="code" header="Code" sortable filter filterPlaceholder="Search by code"></Column>
            <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
            <Column field="category" header="Category" sortable filter filterPlaceholder="Search by category"></Column>
            <Column field="quantity" header="Quantity" sortable filter filterPlaceholder="Search by quantity"></Column>
        </DataTable>

        <h2>Customers Table</h2>
        <DataTable :value="customers" paginator :rows="10" :rowsPerPageOptions="[10, 20]" :filters="customerFilters"
            filterDisplay="row" :sortField="customerSortField" :sortOrder="customerSortOrder"
            tableStyle="min-width: 50rem">

            <template #header>
                <div class="flex justify-end">
                    <InputText v-model="customerFilters['global'].value" placeholder="Global Search" />
                </div>
            </template>

            <Column field="id" header="Customer ID" sortable filter filterPlaceholder="Search by ID"></Column>
            <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
            <Column field="country" header="Country" sortable filter filterPlaceholder="Search by country"></Column>
            <Column field="company" header="Company" sortable filter filterPlaceholder="Search by company"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const products = ref([
    { code: 'f230fh0g3', name: 'Bamboo Watch', category: 'Accessories', quantity: 24 },
    { code: 'nvklal433', name: 'Black Watch', category: 'Accessories', quantity: 61 },
    { code: 'zz21cz3c1', name: 'Blue Band', category: 'Fitness', quantity: 2 },
    { code: '244wgerg2', name: 'Blue T-Shirt', category: 'Clothing', quantity: 25 },
    { code: 'h456wer53', name: 'Bracelet', category: 'Accessories', quantity: 73 },
    { code: 'e78ferg2', name: 'White T-Shirt', category: 'Clothing', quantity: 12 },
    { code: 'w77gh43t', name: 'Leather Belt', category: 'Accessories', quantity: 8 },
    { code: 'z92tjg8h', name: 'Running Shoes', category: 'Footwear', quantity: 45 },
    { code: 'a65khd34', name: 'Sunglasses', category: 'Accessories', quantity: 20 },
    { code: 'b32sjg64', name: 'Jeans', category: 'Clothing', quantity: 30 },
    { code: 'h85jkd73', name: 'Sports Cap', category: 'Fitness', quantity: 55 },
    { code: 'k98tkjh4', name: 'Formal Shoes', category: 'Footwear', quantity: 15 },
    { code: 'm12kl93q', name: 'Casual Shirt', category: 'Clothing', quantity: 22 },
    { code: 'n78fjh23', name: 'Fitness Tracker', category: 'Fitness', quantity: 11 },
    { code: 'r57nkj8k', name: 'Leather Jacket', category: 'Clothing', quantity: 5 },
    { code: 't98lkjh3', name: 'Handbag', category: 'Accessories', quantity: 44 },
    { code: 'v43erfg9', name: 'Headphones', category: 'Electronics', quantity: 33 },
    { code: 'x67tkjh4', name: 'Bluetooth Speaker', category: 'Electronics', quantity: 27 },
    { code: 'y98lkjh7', name: 'Smart Watch', category: 'Electronics', quantity: 9 },
    { code: 'z43ejdf8', name: 'Gym Bag', category: 'Fitness', quantity: 40 },
    { code: 'a23fjk34', name: 'Water Bottle', category: 'Fitness', quantity: 19 },
    { code: 'b89ghj90', name: 'Yoga Mat', category: 'Fitness', quantity: 10 },
    { code: 'c45hgd56', name: 'Winter Jacket', category: 'Clothing', quantity: 7 },
    { code: 'd76jhgf3', name: 'Swimwear', category: 'Clothing', quantity: 16 },
    { code: 'e12ghjk9', name: 'Sneakers', category: 'Footwear', quantity: 48 },
    { code: 'f45jhgf6', name: 'Laptop Sleeve', category: 'Accessories', quantity: 23 },
    { code: 'g23dfg89', name: 'Wireless Charger', category: 'Electronics', quantity: 21 },
    { code: 'h89fgh45', name: 'Travel Backpack', category: 'Accessories', quantity: 35 },
    { code: 'i34fdg78', name: 'Camping Tent', category: 'Outdoor', quantity: 12 },
    { code: 'j45dfg90', name: 'Hiking Boots', category: 'Footwear', quantity: 29 }
])

const customers = ref([
    { id: 'C001', name: 'James Butt', country: 'USA', company: 'Benton, John B Jr' },
    { id: 'C002', name: 'Josephine Darakjy', country: 'Canada', company: 'Chanay, Jeffrey A Esq' },
    { id: 'C003', name: 'Art Venere', country: 'UK', company: 'Chemel, James L Cpa' },
    { id: 'C004', name: 'Lenna Paprocki', country: 'Australia', company: 'Feltz Printing Service' },
    { id: 'C005', name: 'Donette Foller', country: 'USA', company: 'Printing Dimensions' },
    { id: 'C006', name: 'Simona Morasca', country: 'Italy', company: 'Chapman, Ross E Esq' },
    { id: 'C007', name: 'Mitsue Tollner', country: 'Japan', company: 'Morlong Associates' },
    { id: 'C008', name: 'Leota Dilliard', country: 'Germany', company: 'Commercial Press' },
    { id: 'C009', name: 'Sage Wieser', country: 'France', company: 'Truhlar And Truhlar' },
    { id: 'C010', name: 'Kris Marrier', country: 'UK', company: 'King, Christopher A Esq' },
    { id: 'C011', name: 'Minerva Hooper', country: 'Brazil', company: 'Morlong Associates' },
    { id: 'C012', name: 'Abel Macdonald', country: 'India', company: 'King, Christopher A Esq' },
    { id: 'C013', name: 'Kiley Calabrese', country: 'China', company: 'Printing Dimensions' },
    { id: 'C014', name: 'Claudine Hauser', country: 'Russia', company: 'Truhlar And Truhlar' },
    { id: 'C015', name: 'Kathleen Haney', country: 'Australia', company: 'Commercial Press' },
    { id: 'C016', name: 'Tamika Lang', country: 'South Africa', company: 'Chemel, James L Cpa' },
    { id: 'C017', name: 'Maynard Rivera', country: 'Mexico', company: 'Chapman, Ross E Esq' },
    { id: 'C018', name: 'Wiley Strickland', country: 'Spain', company: 'Feltz Printing Service' },
    { id: 'C019', name: 'Eliza Beech', country: 'Japan', company: 'King, Christopher A Esq' },
    { id: 'C020', name: 'Justina Swisher', country: 'USA', company: 'Morlong Associates' },
    { id: 'C021', name: 'Amos Sweeney', country: 'Canada', company: 'Printing Dimensions' },
    { id: 'C022', name: 'Nikki Ashby', country: 'UK', company: 'Benton, John B Jr' },
    { id: 'C023', name: 'Marvin Klein', country: 'Australia', company: 'Chapman, Ross E Esq' },
    { id: 'C024', name: 'Justine Myers', country: 'Germany', company: 'Feltz Printing Service' },
    { id: 'C025', name: 'Maude Lane', country: 'Italy', company: 'King, Christopher A Esq' },
    { id: 'C026', name: 'Malcolm Richards', country: 'Spain', company: 'Truhlar And Truhlar' },
    { id: 'C027', name: 'Rufus Hensley', country: 'Brazil', company: 'Morlong Associates' },
    { id: 'C028', name: 'Mason Valenzuela', country: 'India', company: 'Commercial Press' },
    { id: 'C029', name: 'Elvira Pope', country: 'Russia', company: 'Chemel, James L Cpa' },
    { id: 'C030', name: 'Kennedy Patton', country: 'Mexico', company: 'Printing Dimensions' }
])

const filters = ref({
    global: { value: null },
})

const customerFilters = ref({
    global: { value: null },
})

const sortField = ref(null)
const sortOrder = ref(null)

const customerSortField = ref(null)
const customerSortOrder = ref(null)
</script>

<style scoped>
h2 {
    text-align: center;
    margin-bottom: 1rem;
    margin-top: 5rem;
    color: #4CAF50;
    font-family: 'Arial', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
}

table thead {
    background-color: #4CAF50;
    color: white;
}

table th,
table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

table th {
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
}

table tr:nth-child(even) {
    background-color: #f2f2f2;
}

table tr:hover {
    background-color: #f1f1f1;
    cursor: pointer;
}

input[type="text"] {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
    margin-bottom: 1rem;
}

input[type="text"]:focus {
    outline: none;
    border-color: #4CAF50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}

.pagination {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}

.pagination button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 0 5px;
    border-radius: 4px;
    cursor: pointer;
}

.pagination button:hover {
    background-color: #45a049;
}

.pagination button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
</style>
