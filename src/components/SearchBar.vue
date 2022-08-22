<!-- <script>
import { createClient } from "@supabase/supabase-js";

// Una consulta simple para comprobar que la base de datos funciona
// Puedes usar .select("id, title") para que solo devuelva campos específicos y no toda la tabla
const supabase = createClient(
  "https://gpebnufcyetzcbqhxqoh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwZWJudWZjeWV0emNicWh4cW9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjEwMTU2MTEsImV4cCI6MTk3NjU5MTYxMX0.0X1d0jh_6Kjpj3Ax9zXTZ1-0FDREFtEOJYG7Gnc4Pfs"
);

const articles = [];

supabase
  .from("articles")
  .select("*") 
  //.eq("id", 1)
  .then((response) => {
    generateArticleList(response);    
  });
  



// Este es un ejemplo de función para extraer datos de una tabla
function generateArticleList(articlesRaw){
    articles.push(articlesRaw.data[0]); // Todos los datos se introducen en articles[0] porque estamos usando Push()
    console.log(articles[0].title);

    console.log(articlesRaw);    

}
</script> -->