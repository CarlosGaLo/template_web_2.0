import { createApp } from "vue";
import App from "./App.vue";
// Cargamos el archivo donde hemos configurado el router.
import router from "./router";
//Importamos la clase createClient que nos servirá para acceder a la base de datos (esta librería incluye la gestión de los tokens)
// import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
//Creamos una variable "supabase" que establece la conexión con la base de datos y la mantiene en el tiempo
// const supabase = createClient(
//   "https://gpebnufcyetzcbqhxqoh.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwZWJudWZjeWV0emNicWh4cW9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjEwMTU2MTEsImV4cCI6MTk3NjU5MTYxMX0.0X1d0jh_6Kjpj3Ax9zXTZ1-0FDREFtEOJYG7Gnc4Pfs"
// );

//const articles = [];

// // Una consulta simple para comprobar que la base de datos funciona
// // Puedes usar .select("id, title") para que solo devuelva campos específicos y no toda la tabla
// supabase
//   .from("articles")
//   .select("*") 
//   //.eq("id", 1)
//   .then((response) => {
//     generateArticleList(response);    
//   });
  



// // Este es un ejemplo de función para extraer datos de una tabla
// function generateArticleList(articlesRaw){
//     articles.push(articlesRaw.data[0]); // Todos los datos se introducen en articles[0] porque estamos usando Push()
//     console.log(articles[0].title);

//     console.log(articlesRaw);    

// }

// Añadimos .use(router) a la compilación de la app. Sin esto, no furula
createApp(App).use(router).mount("#app");