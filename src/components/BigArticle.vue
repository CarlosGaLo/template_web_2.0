<template>
  <div class="center">
    <section id="content">
      <!-- Aquí va el article Wiki -->
      <div class="big-article">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dicta enim
        odit aliquam natus minus eaque voluptas labore sint soluta tempora
        voluptatibus quod veritatis cupiditate corporis neque alias. Dolorum,
        odit exercitationem asperiores fugit commodi maiores aut ipsa? Odio
        ipsam nemo unde dolores saepe magni incidunt architecto itaque animi rem
        ipsa expedita accusantium quisquam, temporibus ut? Quibusdam beatae
        dolor delectus necessitatibus, eos cum neque. Maxime nesciunt, a
        explicabo ut nemo labore, enim ratione architecto voluptas maiores nulla
        quis eum vero quod beatae odio. Temporibus, aliquam sit ea hic impedit,
        magnam inventore similique velit, et ratione adipisci nam necessitatibus
        natus reprehenderit modi! Dignissimos quia mollitia aliquam eaque
        consequatur quisquam tempora quod? Alias veritatis deleniti corporis
        repellat nihil, non error laboriosam dolores maxime quidem amet eos quae
        maiores tenetur, fugit ratione quas, aliquam autem debitis rem.
        Doloremque delectus tempora ad similique, accusantium, voluptate vero
        assumenda consequatur cum consectetur necessitatibus eaque ipsa minima
        facilis laborum nihil eligendi numquam porro velit ut, beatae molestias.
        Sequi perspiciatis est optio incidunt. Accusamus ut, minus labore
        laborum aspernatur impedit perferendis, eveniet fugiat facere ullam
        possimus molestiae obcaecati quidem. Odio sapiente aspernatur optio
        ipsum, at error repellat dolorem asperiores excepturi, necessitatibus
        debitis. Blanditiis ipsa ex dolore recusandae itaque vitae?
      </div>
    </section>
    <aside id="sidebar">
      <div id="search" class="sidebar-item">
        <h3>Buscador</h3>
        <p>¿Qué andas buscando?</p>
        <form action="">
          <input type="text" name="search" />
          <input type="submit" name="submit" value="Buscar" class="btn" />
          <!-- Si vienes sabiendo cómo leer una url, empieza leyendo el mounted().
          Si ya lo has leído, podrás comprobar como aquí cargamos la url, que es un dato que podemos leer gracias a que está declarado en data.
          Básicamente:
          mounted -> obtiene la url
          data -> la almacena en una variable
          html -> la enseña al ponerla entre bigotes -->
          <p>La id de este artículo es {{ id_desde_url }}</p>
          <!-- Este botón de abajo llama a una función declarada en los methods de este mismo componente -->
          <button @click="redirigirAHome()" class="btn btn-success">
            Redirigir a home
          </button>
        </form>
      </div>
    </aside>

    <div class="clearfix"></div>
  </div>
</template>

<script>
import ArticleWiki from "./ArticleWiki.vue";

export default {
  //Props nos permite enviar propiedades que fuera del componente. Esto es la repanocha para poder comunicarnos debidamente con otras partes del código.
  //Si quisieramos pasar una propiedad que se llamara artículo y que nos permitirá encontrar el artículo que buscamos deberíamos declararla tal que así. 
  props: ["articulo"],

  components: {
    ArticleWiki: ArticleWiki,
  },
  //¿Vienes buscando cómo se recoge un parámetro de la barra de direcciones? MIRA AQUÍ ABAJO!
  //Dentro del export default debemos usar el mounted. Esto es un lifecycle method. Básicamente una función que se ejecuta cuando nuestra página llega a un determinado punto. Como cuando un humano cumple 14 años y se llama a la funcion ActivarEdadDelPavo()
  //Los lifecycle nos dan mucho control sobre nuestro código, por eso son sumamente importantes.
  //Mounted significa que este método se va a ejecutar nada más se carge el componente. La idea es que el componente se carga porque la url ha cambiado, por tanto, siempre que entremos en la misma url querremos montar el mismo dato. Así que aquí es donde lo extraeremos.
  mounted() {
    //¿Y cómo se coge el dato? Pues usamos las funciones que nos da el router. Básicamente accedemos al router y le pedimos que nos de la última parte de la url. Nuestros amigos programadores de router ya nos han facilitado la tarea haciendo que esto sea acceder a la siguiente dirección.
    this.id_desde_url = this.$route.params.id;
    //Esta línea de arriba se lee como "accede a la barra de direcciones (params del router) y devuelveme el id" -> ¿Y cómo sabe qué es el id? Pues porque nosotros, en index.js del router pusimos path: "/big/:id" -> ¡ESTA id ES LA QUE AHORA LE ESTAMOS PIDIENDO!
  },

  //También tenemos data, que no es un lifecycle method, pero nos ayudará mucho a poder cargar los datos que necesitemos.
  data() {
    return {
      id_desde_url: null,
    };
  },
  //Ojo, el data debe ir con un return. Piensa que el data SIEMPRE está devolviéndote datos.

  methods: {
    //Creamos una función que nos redirige al home pero que lleva cierta información asociada. Por ejemplo, nos lleva al home pero añade un código para decir de dónde venimos.
    // Si quisieramos una redirección simple escribiríamos algo tal que así
    // redirigirAHome(){
    //   this.$router.push('/home');
    // }
    //Pero nosotros queremos algo más complicado, por lo que habría que meter un objeto dentro del push.
    redirigirAHome() {
      this.$router.push({
        name: "home",
        params: { origin: this.id_desde_url },
      });
    },
  },
};
</script>

<style>
.big-article {
  text-align: justify;
  font-size: 18px;
  margin: 10px;
}
</style>
