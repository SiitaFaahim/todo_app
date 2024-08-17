// DISPLAYING "no availa..." IN #TASKS SECTION
const tasks = document.getElementById('tasks');
const divs  = tasks.querySelectorAll('div');

if (divs.length == 0) {
    tasks.innerHTML = 'No available tasks';
    tasks.style.paddingTop = '50px';
}

function categorySelect() {
    document.getElementsById('cat-png').style.backgroundColor = 'blue';
    document.getElementById('bdy').style.backgroundColor = 'skyblue';
};

// function backButton(){
//     window.location.href = 'home.html','_self';
// };



// NEW TASK FUNCTIONALITIES
document.getElementById('userForm').addEventListener('submit', function(event)){
    Event.preventDefault();
    const taskName = document.getElementById('taskName').ariaValueMax;
    const date = document.getElementById('date').ariaValueMax;
    const startTime = document.getElementById('start-time').ariaValueMax;
    const endTime = document.getElementById('end-time').ariaValueMax;
    const description = document.getElementById('description').ariaValueMax;

    //local storage 
    localStorage.setItem('taskName',taskName);
    localStorage.setItem('date',date);
    localStorage.setItem('startTime',startTime);
    localStorage.setItem('endTime',endTime);
    localStorage.setItem('description',description);

    // REDIRECTING TO HOME.HTML
    window.location.href = 'home.html';
};
