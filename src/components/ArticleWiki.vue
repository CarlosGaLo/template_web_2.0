<template>
<!-- Este componente contiene toda la información necesaria para que cuando un usuario pinche en un article concreto, se le muestra por pantalla. Es como si en la wikipedia entras en una página concreta. -->
  <div>
    <h3 class="subheader">Wikis y Noticias</h3>
    <div id="article">
      <article
        v-for="article in AllArticlesWiki"
        :key="article.id"
        class="article-item article-template"
      >
        <div class="image-wrap">
          <!-- Para que nos lea la imagen debemos bindearla con los dos puntos. Lo mismo para el alt de la imagen -->
          <img :src="article.img" :alt="article.imgAlt" />
        </div>
        <h4>{{ article.tittle }}</h4>
        <span class="date"> Hace {{ article.date }} días </span>
        <a href="">Saber más</a>
        <div class="aside-text">{{ article.resume }}</div>
      </article>
    </div>
  </div>
</template>

<script>
import ArticlesWiki from "../dataBase/Articles.json";

export default {
  data() {
    return {
      AllArticlesWiki: ArticlesWiki,
    };
  },
};
</script>
