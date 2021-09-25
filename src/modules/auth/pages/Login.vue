<template>
  <div id="login-main-container">
    <div class="container column is-4">
      <div class="card px-5 py-5">
        <div class="content">
          <div class="columns is-centered">
            <div class="column has-text-centered is-2">
              <img src="@/assets/img/series.png" width="50" />
            </div>
          </div>
          <div class="columns is-centered py-4">
            <h2>Faça o seu login</h2>
          </div>
          <form method="POST">
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
                :loading="btnLoading"
                icon-left="login"
              >
                Entrar
              </b-button>
            </div>
          </form>
        </div>
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
      btnLoading: false,
      form: {
        email: "mblader0@umich.edu",
        password: "pOKJof0PWZ",
      },
    };
  },
  methods: {
    // Referenciando ao action do login
    ...mapActions("auth", ["ActionDoLogin"]),
    // Método de autenticação
    async login() {
      try {
        this.btnLoading = true;
        await this.ActionDoLogin(this.form);
        this.$router.push({ name: "Home" });
      } catch (erro) {
        if (erro.data) {
          this.btnLoading = false;
          alert(erro.data.message);
        } else {
          alert("Não foi possível fazer login");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#login-main-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url("../../../assets/img/series-bg-login.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    background: rgba(0, 0, 0, 0.85);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .card {
    border-radius: 15px;
  }
}
</style>