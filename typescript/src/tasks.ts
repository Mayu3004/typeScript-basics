
console.log('tasks');
// const btn = document.querySelector<HTMLButtonElement>('.test-btn')!;
// // btn?.addEventListener() optional
// // Type asseertion
// if(btn){
//     btn.disabled = true;
// }
// const btn = document.querySelector('.btn')!;
// btn.addEventListener('click', () => {
//   console.log('something');
// });

const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const taskListElement = document.querySelector<HTMLUListElement>('.list');

type Task = {
    description:string;
    isCompleted:boolean;
};

const tasks: Task[] = [];

function createTask(event: SubmitEvent){
    event.preventDefault()
    const taskDescription = formInput?.value
    if(taskDescription){
        console.log(taskDescription)
        formInput.value = '';
        return;
    }
    alert('please enter a task description')
}

taskForm?.addEventListener('submit',createTask)