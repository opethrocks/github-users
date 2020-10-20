<template>
  <div id="app">
    <div class="columns is-centered">
      <div class="column is-one-third">
        <h1 class="title has-text-centered is-size-1 pt-6">
          Github User Search
        </h1>
        <user-search @searchByLogin="loginSearch" @clearForm="resetForm" />
      </div>
    </div>
    <modal :selectedUser="selectedUser" :show="show" @closeButton="closeModal">
      <template slot="header"
        ><font-awesome-icon icon="laptop-code" /><strong>
          <template v-if="selectedUser.name === null">
            {{ selectedUser.login }}</template
          >
          {{ selectedUser.name }}</strong
        ></template
      >
      <template slot="image"></template>
      <template slot="followers"
        ><font-awesome-icon icon="user-friends" /><strong> Followers:</strong>
        {{ selectedUser.followers }}</template
      >

      <template slot="location"
        ><font-awesome-icon icon="location-arrow" /><strong> Location:</strong>
        <template v-if="selectedUser.location === null"> Earth</template>
        <template v-else> {{ selectedUser.location }}</template></template
      >
      <template slot="link"
        ><font-awesome-icon icon="link" /><a :href="selectedUser.html_url">
          {{ selectedUser.html_url }}</a
        ></template
      >
    </modal>

    <div v-if="this.login">
      <div id="tag">
        <span class="tag is-primary is-large label">
          <font-awesome-icon icon="tag" />
          ...Users with "{{ this.login }}" in their name
        </span>
      </div>
      <div class="flex-container">
        <github-user-card
          :matchLogin="loginMatch"
          @activateModal="makeActive"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GithubUserCard from "./components/GithubUserCard.vue";
import UserSearch from "./components/UserSearch.vue";
import Modal from "./components/Modal.vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    GithubUserCard,
    UserSearch,
    Modal,
  },
  data() {
    return {
      user: [],
      login: null,
      show: false,
      selectedUser: "",
    };
  },
  created() {
    this.userNames.map((name) => {
      axios.get(`https://api.github.com/users/${name}`).then((response) => {
        this.user.push(response.data);
      });
    });
  },
  computed: {
    ...mapGetters(["userNames"]),
    loginMatch() {
      return this.user.filter((user) => user.login.match(this.login));
    },
  },
  methods: {
    loginSearch(event) {
      this.login = event.inputData;
    },
    makeActive(event) {
      this.show = event.show;
      this.selectedUser = event.user;
    },
    closeModal(event) {
      this.show = event.show;
    },
    resetForm(event) {
      this.login = event.login;
    },
  },
};
</script>

<style lang="scss">
.flex-container {
  display: flex;
  overflow-x: auto;
}

#tag {
  padding: 0em 0em 2em 2em;
}
</style>
