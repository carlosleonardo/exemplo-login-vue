<script lang="ts" setup>
import Card from "primevue/card";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
</script>

<template>
    <h1>Login</h1>
    <form>
        <div class="p-field">
            <label for="email">E-mail</label>
            <InputText id="email" v-model="email" type="email" />
        </div>
        <div class="p-field">
            <label for="password">Password</label>
            <Password id="password" v-model="password" />
        </div>
        <Button type="submit" label="Login" />
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
