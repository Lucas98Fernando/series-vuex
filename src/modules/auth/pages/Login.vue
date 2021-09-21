<template>
  <div class="container column is-4">
    <div class="card px-4 py-4">
      <div class="content">
        <div class="columns is-centered py-4">
          <h2>Faça o seu login</h2>
        </div>
        <form action="" method="POST">
          <b-field label="E-mail">
            <b-input
              v-model="form.email"
              type="email"
              icon="email"
              placeholder="lucas@email.com"
            ></b-input>
          </b-field>

          <b-field label="Senha">
            <b-input
              v-model="form.password"
              type="password"
              icon="lock"
              placeholder="*******"
              password-reveal
            ></b-input>
          </b-field>

          <div class="columns is-centered py-4">
            <b-button
              class="button is-primary"
              type="button"
              @click="login()"
              icon-left="login"
            >
              Entrar
            </b-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// Importando action do vuex
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    // Referenciando ao action do login
    ...mapActions("auth", ["ActionDoLogin"]),
    // Método de autenticação
    async login() {
      try {
        await this.ActionDoLogin(this.form);
        this.$router.push({ name: "home" });
      } catch (erro) {
        if (erro.data) {
          alert(erro.data.message);
        } else {
          alert("Não foi possível fazer login");
        }
      }
    },
  },
};
</script>