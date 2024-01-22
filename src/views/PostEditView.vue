<template>
  <main class="main">
    <section class="section">
      <h1 class="title">Editar post</h1>
      <form @submit.prevent="updatePost">
        <div class="input_container">
          <label for="title">Título:</label>
          <input v-model="editedPost.title" type="text" id="title" required />
        </div>
        <div class="input_container">
          <label for="content">Contenido:</label>
          <textarea
            v-model="editedPost.content"
            name="content"
            id="content"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button type="submit" class="button b-primary">Guardar Cambios</button>
      </form>
    </section>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      editedPost: {
        id: null,
        title: "",
        content: "",
      },
    };
  },
  mounted() {
    // Llama a un método para cargar el post que se va a editar
    this.loadPostToEdit();
  },
  methods: {
    async loadPostToEdit() {
      // Puedes obtener el ID del post que se va a editar de la ruta actual
      const postId = this.$route.params.id;

      try {
        const response = await axios.get(
          `http://localhost:3000/posts/${postId}`
        );
        this.editedPost = response.data;
      } catch (error) {
        console.error("Error al cargar post para editar:", error);
      }
    },
    async updatePost() {
      try {
        await axios.put(
          `http://localhost:3000/posts/${this.editedPost.id}`,
          this.editedPost
        );

        setTimeout(function () {
          alert("post editado con exito");
        }, 500);

        this.$router.push("/");

        console.log("Post editado con éxito:", this.editedPost);
      } catch (error) {
        console.error("Error al editar post:", error);
      }
    },
  },
};
</script>

<style scoped>
form {
  .input_container {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    label {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    input,
    textarea {
      font-size: 1rem;
      padding: 0.5rem;
    }
  }

  .button {
    text-decoration: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 5px;
    transition: background-color ease-in-out 0.3s;
    width: 100%;
  }

  .b-primary {
    background-color: #759eff;
    color: #fff;

    &:hover {
      background-color: #668be2;
    }
  }
}
</style>
