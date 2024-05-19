let count = 0;

document.querySelector(".add_button").onclick = function () {
  if (document.querySelector(".task_input").value.length == 0) {
    alert("Please enter a task");
  } else {
    count++;
    var task = document.querySelector(".task_input").value;
    document.querySelector(".tasks").innerHTML += `
        <div class="task_name">
            <i class="check_button fa-regular fa-circle"></i>
            <span>${task}</span>
            <div class="change_delete_button">
                <button class="edit_task">
                    <i class="fa-solid fa-square-pen"></i>
                </button>
                <button class="delete_task">
                <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
            
        </div>
    `;
    document.querySelector(".task_decription span").innerHTML = `${count}`;

    // Delete Task
    var current_tasks = document.querySelectorAll(".delete_task");
    current_tasks.forEach((button) => {
      button.onclick = function () {
        this.parentNode.parentNode.remove();
        count--;
        document.querySelector(".task_decription span").innerHTML = `${count}`;
      };
    });

    // Edit Task
    var current_tasks = document.querySelectorAll(".edit_task");
    current_tasks.forEach((button) => {
      button.onclick = function () {
        document.querySelector(".task_input").value =
          this.parentNode.parentNode.querySelector("span").innerHTML;
        this.parentNode.parentNode.remove();
        count--;
        document.querySelector(".task_decription span").innerHTML = `${count}`;
      };
    });

    // Check Task
    var tasks = document.querySelectorAll(".check_button");
    tasks.forEach((button) => {
      button.onclick = function () {
        this.classList.toggle("fa-circle-check");
        this.classList.toggle("fa-circle");
        this.parentNode.querySelector("span").classList.toggle("completed");
      };
    });
  }
};
