<script setup lang="ts">
import Card from "primevue/card";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import { ref } from "vue";

const email = ref<string>("");
const password = ref<string>("");
const invalido = ref<boolean>(true);

function aoMudarEmail() {
    invalido.value = email.value === "" || password.value === "";
}
function aoMudarSenha() {
    invalido.value = email.value === "" || password.value === "";
}
</script>

<template>
    <h1>Login</h1>
    <form>
        <div class="p-field">
            <label for="email">E-mail</label>
            <InputText
                id="email"
                v-model="email"
                type="email"
                @change="aoMudarEmail"
            />
        </div>
        <div class="p-field">
            <label for="password">Password</label>
            <Password id="password" v-model="password" @change="aoMudarSenha" />
        </div>
        <Button type="submit" label="Login" :disabled="invalido" />&nbsp;
        <Button type="button" label="Cadastrar" />
    </form>
</template>

<style scoped>
:host {
    display: flex;
    justify-content: center;
    align-items: center;
    place-content: center;
    height: 100vh;
}
</style>
