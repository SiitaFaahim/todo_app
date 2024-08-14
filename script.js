// DISPLAYING "no availa..." IN #TASKS SECTION
const tasks = document.getElementById('tasks');
const divs  = tasks.querySelectorAll('div');

if (divs.length == 0) {
    tasks.innerHTML = 'No available tasks';
    tasks.style.paddingTop = '50px';
}



