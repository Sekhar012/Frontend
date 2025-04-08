document.addEventListener("DOMContentLoaded",function(){
    const taskInput = document.getElementById("taskInput")
    const addTaskBtn = document.getElementById("addTask")
    const taskList = document.getElementById("taskList")

    addTaskBtn.addEventListener('click',function(){
        const taskText = taskInput.value.trim();
        if(taskText !== ""){
            const listItem = document.createElement("li");
            listItem.innerHTML=`${taskText} <input class="edit" type="text" placeholder="edit"/><input class="update" type="text" placeholder="update"/><button class="delete-btn">DELETE</button>`
            taskList.appendChild(listItem)
            taskInput.value="";

            const deletebtn  = listItem.querySelector(".delete-btn");
            deletebtn.addEventListener("click",function(){
                taskList.removeChild(listItem);


            });        
        }
    });
});