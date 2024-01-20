<template>
    <main class="main">
        <section class="section">
            <h1 class="title">Crear nuevo post</h1>
            <form @submit.prevent="createPost">
                <div class="input_container">
                    <label for="title">Título:</label>
                    <input v-model="newPost.title" type="text" id="title" required>
                </div>
                <div class="input_container">
                    <label for="content">Contenido:</label>
                    <textarea v-model="newPost.content" name="content" id="content" cols="30" rows="10" required></textarea>
                </div>
                <button type="submit" class="button b-primary">Crear Post</button>
            </form>
        </section>
    </main>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            posts: [],
            newPost: {
                title: '',
                content: '',
            },
        };
    },
    methods: {
        async createPost() {
            try {
                const response = await axios.post('http://localhost:3000/posts', this.newPost);

                setTimeout(function () {
                    alert("post creado con exito");
                }, 200)

                this.newPost.title = ''
                this.newPost.content = ''

                console.log('Post creado con exito', response.data)
            } catch (error) {
                console.error('Post creado con exito', error)
            }
        }
    },
}
</script>

<style scoped>

form {
    .input_container {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        
        label{
            font-weight: bold;
            margin-bottom: 0.5rem;
        }

        input, textarea {
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