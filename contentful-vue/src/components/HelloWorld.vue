<template>
  <div>
    <h1 style="text-align: center">Product</h1>
    <pre>
      {{ productData?.productCollection?.items[0]?.title }}
    </pre>
    <pre>
      {{ productData?.productCollection?.items[0]?.price }}
    </pre>
    <pre>
      {{
        renderDescription(
          productData?.productCollection?.items[0]?.description?.json
        )
      }}
    </pre>
    <pre>
      {{ productData?.productCollection?.items[0]?.photosCollection }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchContentfulData } from '@/services/graphQlAPI'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
const productData = ref<any[]>([])
const renderDescription = (descriptionJson) => {
  return documentToReactComponents(descriptionJson);
};
onMounted(async () => {
  productData.value = (await fetchContentfulData()) as any[]
})
</script>
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 500px;
  /* margin: auto; */
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196f3;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>
