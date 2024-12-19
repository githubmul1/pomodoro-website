// POMODORO TIMER
let timerInterval;
let isPaused = false;
let timeLeft;
let isBreakTime = false;

let totalLearnTime = 0;
let totalBreakTime = 0;

const motivationMessages = [
    "Keep going! You're doing great!",
    "Success is the sum of small efforts, repeated day in and day out.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Focus on your goals, not your obstacles.",
    "Believe in yourself and all that you are.",
    "Don't stop when you're tired. Stop when you're done!"
];

const displayTimer = (minutes, seconds) => {
    document.getElementById('timer').innerText =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const displayMotivation = () => {
    const randomMessage = motivationMessages[Math.floor(Math.random() * motivationMessages.length)];
    document.getElementById('motivation').innerText = randomMessage;
};

const updateStats = () => {
    document.getElementById('total-learn-time').innerText = totalLearnTime;
    document.getElementById('total-break-time').innerText = totalBreakTime;
};

const saveTimerState = () => {
    localStorage.setItem('pomodoroTimer', JSON.stringify({
        timeLeft,
        isPaused,
        isBreakTime,
        totalLearnTime,
        totalBreakTime
    }));
};

const loadTimerState = () => {
    const savedState = JSON.parse(localStorage.getItem('pomodoroTimer'));
    if (savedState) {
        timeLeft = savedState.timeLeft;
        isPaused = savedState.isPaused;
        isBreakTime = savedState.isBreakTime;
        totalLearnTime = savedState.totalLearnTime;
        totalBreakTime = savedState.totalBreakTime;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        displayTimer(minutes, seconds);
        updateStats();
    } else {
        resetTimer();
    }
};

const startTimer = () => {
    if (timeLeft === undefined) {
        timeLeft = parseInt(document.getElementById('work-time').value) * 60;
    }
    if (!timerInterval && !isPaused) {
        timerInterval = setInterval(() => {
            if (!isPaused && timeLeft > 0) {
                timeLeft--;
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                displayTimer(minutes, seconds);
                saveTimerState();
            } else if (timeLeft === 0) {
                if (isBreakTime) {
                    totalBreakTime += parseInt(document.getElementById('break-time').value);
                    timeLeft = parseInt(document.getElementById('work-time').value) * 60;
                    isBreakTime = false;
                    alert('Break Time is over! Time to work.');
                    displayMotivation();
                    updateStats();
                } else {
                    totalLearnTime += parseInt(document.getElementById('work-time').value);
                    timeLeft = parseInt(document.getElementById('break-time').value) * 60;
                    isBreakTime = true;
                    alert('Work time is over! Take a break.');
                    displayMotivation();
                    updateStats();
                }
                startTimer();
                clearInterval(timerInterval);
                timerInterval = null;
                saveTimerState();
            }
        }, 1000);
    }
};

const resetTimer = () => {
    clearInterval(timerInterval);
    timerInterval = null;
    isPaused = false;
    if (isBreakTime) {
        timeLeft = parseInt(document.getElementById('break-time').value) * 60;
        displayTimer(parseInt(document.getElementById('break-time').value), 0);
    } else {
        timeLeft = parseInt(document.getElementById('work-time').value) * 60;
        displayTimer(parseInt(document.getElementById('work-time').value), 0);
    }
    displayMotivation();
    localStorage.removeItem('pomodoroTimer');
    updateStats();
};

document.getElementById('start-timer').addEventListener('click', () => {
    if (!timerInterval) {
        startTimer();
    }
});

document.getElementById('pause-timer').addEventListener('click', () => {
    isPaused = true;
    saveTimerState();
});

document.getElementById('reset-timer').addEventListener('click', resetTimer);

window.addEventListener('load', loadTimerState);

// TO-DO LIST
const taskList = document.getElementById('task-list');

const saveTasksToLocalStorage = () => {
    const tasks = [];
    document.querySelectorAll('#task-list .list-group-item').forEach(item => {
        tasks.push({
            text: item.querySelector('span').innerText,
            completed: item.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const loadTasksFromLocalStorage = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between';
        if (task.completed) listItem.classList.add('completed');
        listItem.innerHTML = `<span>${task.text}</span>
                              <div>
                                  <button class="btn btn-sm btn-success">✔</button>
                                  <button class="btn btn-sm btn-danger">✖</button>
                              </div>`; 

        listItem.querySelector('.btn-success').addEventListener('click', () => {
            listItem.classList.toggle('completed');
            saveTasksToLocalStorage();
        });

        listItem.querySelector('.btn-danger').addEventListener('click', () => {
            listItem.remove();
            saveTasksToLocalStorage();
        });

        taskList.appendChild(listItem);
    });
};

document.getElementById('add-task').addEventListener('click', () => {
    const taskText = document.getElementById('new-task').value;
    if (taskText) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between';
        listItem.innerHTML = `<span>${taskText}</span>
                              <div>
                                  <button class="btn btn-sm btn-success">✔</button>
                                  <button class="btn btn-sm btn-danger">✖</button>
                              </div>`; 

        listItem.querySelector('.btn-success').addEventListener('click', () => {
            listItem.classList.toggle('completed');
            saveTasksToLocalStorage();
        });

        listItem.querySelector('.btn-danger').addEventListener('click', () => {
            listItem.remove();
            saveTasksToLocalStorage();
        });

        taskList.appendChild(listItem);
        document.getElementById('new-task').value = '';
        saveTasksToLocalStorage();
    }
});

window.addEventListener('load', loadTasksFromLocalStorage);

// SPOTIFY PLAYER
document.getElementById('load-spotify').addEventListener('click', () => {
    const url = document.getElementById('spotify-url').value;
    if (url) {
        const embedURL = url.replace('playlist/', 'embed/playlist/');
        document.getElementById('spotify-player').innerHTML =
            `<iframe src="${embedURL}" frameborder="0" allow="encrypted-media"></iframe>`;
    }
});
