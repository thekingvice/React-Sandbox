<template>
  <div
    @click="
      handleCartItem(
        productDetails.id,
        productDetails.basePrice,
        productDetails.discount,
        qtyCounter
      )
    "
  >
    Add to cart
  </div>
  <div>qty {{ totalCartQty }}</div>
  <div>
    <div @click="handleQtyCounterMinus">Minus</div>
    {{ qtyCounter }}
    <div @click="handleQtyCounterPlus">Plus</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const cart = ref([
  {
    id: "product1",
    basePrice: 150,
    discount: 0.1,
    quantity: 2,
  },
  {
    id: "product2",
    basePrice: 150,
    discount: 0.1,
    quantity: 1,
  },
]);

const totalCartQty = ref(0);

const productDetails = {
  id: "product3",
  basePrice: 150,
  discount: 0.1,
};
const qtyCounter = ref(0);

//if object with id exists in cart list, update qty else
//else create object and add to cart list

function handleCartItem(
  id: string,
  price: number,
  discount: number,
  quantity: number
) {
  const product = {
    id: id,
    basePrice: price,
    discount: discount,
    quantity: quantity,
  };

  let inCart = false;

  for (let i = 0; i < cart.value.length; i++) {
    if (cart.value[i].id === id) {
      cart.value[i].quantity += quantity;
      inCart = true;
      break;
    }
  }
  if (!inCart && quantity > 0) {
    cart.value.push(product);
  }
  setTotalCartQty();
  console.log(cart.value);
}

function setTotalCartQty() {
  totalCartQty.value = 0;
  for (let i = 0; i < cart.value.length; i++) {
    totalCartQty.value += cart.value[i].quantity;
  }
  qtyCounter.value = 0;
}

function handleQtyCounterPlus() {
  qtyCounter.value += 1;
}

function handleQtyCounterMinus() {
  if (qtyCounter.value > 0) {
    qtyCounter.value -= 1;
  }
}
</script>
<style scoped lang="css"></style>
