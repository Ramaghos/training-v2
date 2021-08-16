<template>
  <section class="zipCode ">
    <form @submit.prevent="onSubmit">
      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="zip-code"
          v-model="zipcode"
        />

        <button type="submit">City Details</button>
      </div>
    </form>
    <table v-if="cityDetails.ZipCode">
      <tr>
        <th>City</th>
        <th>State</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>{{ cityDetails.City }}</td>
        <td>{{ cityDetails.State }}</td>
        <td>{{ cityDetails.County }}</td>
      </tr>
    </table>
  </section>
</template>
<script>
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    let zipcode = ref("");
    let cityDetails = ref("");
    let onSubmit = () => {
      axios
        .get(
          `https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/${zipcode.value}?key=DEMOAPIKEY `
        )
        .then((d) => {
          console.log(d.data);
          cityDetails.value = d.data;
        })
        .catch((error) => {
          console.log(`Error is ${error}`);
        });
    };
    return {
      zipcode,
      cityDetails,
      onSubmit,
    };
  },
};
</script>
