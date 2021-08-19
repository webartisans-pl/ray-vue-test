<template>
  <div>
    <h1>Użytkownicy</h1>
    <div v-if="isLoading">Ładuje....</div>
    <div v-else>
      <table style="width:100%">
        <thead>
        <tr>
          <th>ID</th>
          <th>E-mail</th>
          <th>Imię</th>
          <th>Nazwisko</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ApiClientService from "../../services/ApiClientService";

export default {
  name: "UserIndex",
  data() {
    return {
      isLoading: true,
      users: [],
      usersCount: 0,
    };
  },
  created() {
    // Ray JS tests
    this.$ray().newScreen();
    this.$ray('Hello from Vue!').color('green');

    // Ray Vue tests
    this.$ray().data();
    this.$ray().track('usersCount');

    // Get users
    this.getUsers();
  },

  methods: {
    getUsers() {
      this.isLoading = true;
      this.$ray('Send request').color('green');
      ApiClientService.getUsers()
          .then((response) => {
            this.$ray('Response has been received').color('green');
            this.users = response.data.data;
            this.usersCount = this.users.length;
            this.isLoading = false;
          })
          .catch((error) => {
            console.error(error);
            this.isLoading = false;
          });
    },
  },
};
</script>

<style scoped>

</style>