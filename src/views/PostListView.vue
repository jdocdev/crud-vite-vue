<template>
  <main class="main">
    <section class="section">
      <h1 class="title">Lista de posts</h1>
      <table class="table" border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>content</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody id="contenido">
          <tr v-for="post in posts" :key="post.id">
            <td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.content }}</td>
            <td class="buttons">
              <RouterLink :to="{ path: 'postedit/' + post.id }" class="button b-primary">Editar</RouterLink>
              <button @click="deletePost(post.id, post.title)" class="button b-secondary">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
import axios from 'axios'
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {

    async fetchPosts() {
      try {
        const response = await axios.get('http://localhost:3000/posts');
        this.posts = response.data;
      }
      catch (error) {
        console.error('Error al cargar los datos de la api', error);
      }
    },

    async deletePost(id, title) {
      const confirmDelete = window.confirm(
        `¿Estás seguro de que deseas eliminar el post "${title}"?`
      );
      if (confirmDelete) {
        try {
          await axios.delete(`http://localhost:3000/posts/${id}`)
          this.fetchPosts();
        } catch (error) {
          console.error('Error al eliminar post:', error);
        }
      }
    },
  },
  components: { RouterLink }
}

</script>

<style scoped>
.table {
  border-collapse: collapse;
  border-color: #525558;

  thead {
    tr {
      th {
        padding: 1rem 0;
        background-color: #75c7ff;
        color: #525558;
        text-transform: uppercase;
      }
    }
  }

  tbody {
    tr {
      td {
        padding: 0.5rem;
      }

      .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        .button {
          text-decoration: none;
          border: none;
          font-size: 1rem;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 5px;
          transition: background-color ease-in-out 0.3s;
        }

        .b-primary {
          background-color: #759eff;
          color: #fff;

          &:hover {
            background-color: #668be2;
          }
        }

        .b-secondary {
          background-color: #f86f6f;
          color: #fff;

          &:hover {
            background-color: #dd6262;
          }
        }
      }
    }
  }
}
</style>