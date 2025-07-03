<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";

const tasks = ref([]);
const taskInput = ref("");
const editValu = ref("");
const editIdx = ref(null);

const handleSubmit = () => {
  if (taskInput.value.trim()) {
    tasks.value.push(taskInput.value);
    taskInput.value = "";
  }
};

const startEdit = (idx) => {
  editIdx.value = idx;
  editValu.value = tasks.value[idx];
};

const cancelEdit = () => {
  editIdx.value = null;
  editValu.value = "";
};

const handleEdit = () => {
  if (editValu.value.trim()) {
    tasks.value[editIdx.value] = editValu.value;
    cancelEdit();
  }
};

const handleDelete = (idx) => {
  tasks.value.splice(idx, 1);
};

onMounted(async () => {
  try {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      tasks.value = JSON.parse(stored);
    } else {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = response.data.map((task) => task.title).slice(0, 5);
      tasks.value = data;
    }
  } catch (err) {
    console.log("error fetching data: ", err.message);
  }
});

watch(tasks,(newTask)=>{
    localStorage.setItem('tasks',JSON.stringify(newTask))
},{deep:true})

</script>

<template class="todo-container">
  <p>{{ taskInput }}</p>
  <br />

  <template v-if="editIdx !== null">
    <input type="text" v-model="editValu" name="edit-input" />
    <div class="btn-grp">
      <button @click="handleEdit" class="edit-btn">update</button>
      <button @click="cancelEdit" class="cancel-btn">cancel</button>
    </div>
  </template>

  <template v-else>
    <form class="input-container" @submit.prevent="handleSubmit">
      <input type="text" v-model="taskInput" name="task-input" />
      <button type="submit">Add</button>
    </form>
  </template>

  <div class="task-container">
    <p v-if="tasks.length === 0">No tasks yet</p>
    <li v-else v-for="(task, idx) in tasks" :key="idx">
      {{ task }}
      <div class="btn-grp">
        <button @click="startEdit(idx)" class="start-edit-btn">Edit</button>
        <button @click="handleDelete(idx)" class="delete-btn">Delete</button>
      </div>
    </li>
  </div>
</template>

<style scoped>
.todo-container {
  width: 100%;
  margin: 0 auto;
}

.input-container {
  margin: 0px auto;
  text-align: center;
}

input {
  background-color: transparent;
  color: lightgray;
  border: 1px solid hsla(160, 100%, 37%, 1);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}

.input-container button {
  padding: 0.5rem 1rem;
  background-color: dodgerblue;
  color: white;
  border: none;
  border-radius: 0.25rem;
  margin-left: 0.5rem;
}

.btn-grp {
  margin-left: 2px;
}

.btn-grp button {
  padding: 0.5rem 1rem;
  color: white;
  border: none;
  border-radius: 0.25rem;
}

.edit-btn,
.start-edit-btn {
  background-color: rgb(255, 242, 0);
}

.delete-btn {
  background-color: tomato;
}

.cancel-btn {
  background-color: hsla(160, 100%, 37%, 1);
}

.task-container {
  margin-top: 50px auto;
}
</style>
