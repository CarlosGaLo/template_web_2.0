<template>
  <div>
    <header id="header">
      <div class="center">
        <!-- logo -->
        <div id="logo">
          <img src="../assets/CosmosRolLogo.png" alt="Cosmos Rol Logo" />
          <router-link to="/" id="brand">
            <strong>Cosmos</strong>Rol
          </router-link>
        </div>
        <!-- menu -->
        <nav id="menu">
          <ul>
            <li>
              <router-link to="/big" active-class="active"
                >Wiki-Rol</router-link
              >
            </li>
            <li>
              <router-link to="/home" active-class="active">Rol</router-link>
            </li>
            <li>
              <router-link to="/vacuum" active-class="active"
                >Wiki-Rol</router-link
              >
            </li>
            <li>
              <router-link
                :to="{
                  name: 'bigArticle',
                  params: { id: 'soy_la_id_de_prueba' },
                }"
                active-class="active"
                >Tienda</router-link
              >
            </li>
            <li>
              <router-link to="/contacto" active-class="active"
                >Contacto</router-link
              >
            </li>
          </ul>
        </nav>

        <!-- clear -->
        <div class="clearfix"></div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style></style>
