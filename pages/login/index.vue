<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col xl="5" lg="5" md="5" sm="6">
        <!-- <div class="text-center">
          <nuxt-link to="/"><v-img class="mx-16" src="/img/logo-black.png" /></nuxt-link>
        </div> -->

        <form @submit.prevent="submit">
          <ValidationObserver ref="observer">
            <v-card outlined>
              <v-card-title class="font-weight-bold">
                Sign In
              </v-card-title>
              <v-card-text>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="email"
                  rules="required"
                >
                  <label>Email</label>
                  <v-text-field
                    v-model="email"
                    outlined
                    dense
                    :error-messages="errors"
                  />
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  name="password"
                  rules="required|min:6"
                >
                  <label>Password</label>
                  <v-text-field
                    v-model="password"
                    type="password"
                    outlined
                    dense
                    :error-messages="errors"
                  />
                </ValidationProvider>

                <v-btn block elevation="0" class="knock-btn knock-btn-primary mb-4" :disabled="loading" @click="onLogin">
                  Continue
                </v-btn>
                <div class="mb-8">
                  <b>
                    By creating an account, you agree to knock's
                    <a href="#" class="text-decoration-none">Conditions of Use</a> app
                    <a href="#" class="text-decoration-none">Privacy Notice</a>
                  </b>
                </div>
                <v-divider class="my-4" />
                <div>
                  <b>
                    Don't have an account?
                    <nuxt-link to="/signup" class="text-decoration-none">Register</nuxt-link>
                  </b>
                </div>
              </v-card-text>
            </v-card>
          </ValidationObserver>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from 'vee-validate'
setInteractionMode('eager')
export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  layout: 'none',
  // middleware: 'isGuest',
  data () {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    async onLogin () {
      try {
        this.loading = true
        const data = {
          email: this.email,
          password: this.password
        }
        // console.log('auth info: ', await this.$auth.loginWith('local', { data }))
        const login = await this.$auth.loginWith('local', {
          data
        })
        const user = await this.$axios.$getUser()
        await this.$store.commit('setUser', { token: login.data.token, ...user.user })
        await console.log('user state: ', this.$store.state.authUser)
        if (await this.$store.state.authUser.loggedIn) {
          this.$nuxt.$router.push('/')
        }
        this.loading = false
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    }
  }
}
</script>

<style>

</style>
