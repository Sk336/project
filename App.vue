<template>
  <div class="jumbotron bg-primary text-light">
    <div class="container">
      <b>
        <h1 class="display-4">Todo App</h1>
        <p class="lead">Manage day-to-day task</p>
      </b>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-4 offset-4">
        <input type="text" name="" id="taskip" @keydown.enter="insertItem" v-model = "todoItem" placeholder = "Add Task Here">
      </div>
    </div>
    <br>
    <br>
    <div class="row">
    <div class = "col-md-12">
    <h3>Task List</h3>
    <table class="table table-striped">
      <thead class="thead-dark">
        <th>ID</th>
        <th>Name</th>
        <th>Mark As Completed</th>
        <th>Remove</th>
      </thead>
      <tbody>
        <tr v-for="task in todoList" v-bind:key="task">
          <td>{{task.id}}</td>
          <td>{{task.name}}</td>
          <td><input type="checkbox"></td>
          <td><button class="btn btn-sm btn-danger">Remove</button></td>
        </tr>

      </tbody>
    </table>
    </div>
    </div>
  </div>
  
</template>

<script>
export default {
data() {
  return {
    todoItem:'',
    id:0,
    todoList:[],
  }
},
methods: {
  insertItem(){
  console.log(this.todoItem)
  this.todoList.push({name:this.todoItem,isCompleted:false,id:this.id})
  this.id++
  this.todoItem=''
  }
},



};
</script>

<style>
#app {
}
.jumbotron {
  background-color: #651fff;
  box-shadow: 0 40px 20px 0 rgba(0, 0, 0, 0.2);
  height:200px;
}

#taskip{
border:none;
border-bottom:2px solid lightgrey;
width:300px;
height:50px;
margin-top:4rem;
text-align:center;
}
</style>
