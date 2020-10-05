<template>
  <div id="app">
    <p><strong>Add a new contact:</strong></p>
    <div>
      <label>First Name: <input type="text" class="userFirstname" /></label> <br />
      <label>Last Name: <input type="text" class="userLastname" /></label> <br />
      <label>Phone: <input type="number" class="userPhone" /></label> <br />
      <button class="submitButton">Add New Contact</button>
    </div>
    <table id="phoneBookItems" class="informationTable">
      <!-- items should go here -->
    </table>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        items: [],
      }
    },
  };
</script>
