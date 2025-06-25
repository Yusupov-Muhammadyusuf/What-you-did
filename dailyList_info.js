const time = document.getElementById('time');
const date = document.getElementById('date');
const activity = document.getElementById('activity');
const goal = document.getElementById('goal');
const savedbtn = document.getElementById('save');
const result = document.querySelector('.result');

const savedTime = localStorage.getItem('time');
const savedDate = localStorage.getItem('date');
const savedActivity = localStorage.getItem('activity');
const savedGoal = localStorage.getItem('goal');

if (savedTime || savedDate || savedActivity || savedGoal) {
    result.textContent = `Your info:
    Time: ${savedTime || '-'}
    Date: ${savedDate || '-'}
    Activity: ${savedActivity || '-'}
    Goal: ${savedGoal || '-'}`;
}

savedbtn.addEventListener('click', function() {
    const timeValue = time.ariaValueMax.trim();
    const dateValue = date.value.trim();
    const activityValue = activity.value.trim();
    const goalValue = goal.value.trim();

    if (savedTime && savedDate && savedActivity && savedGoal) {
        localStorage.setItem('timeValue');
        localStorage.setItem('dateValue');
        localStorage.setItem('activityValue');
        localStorage.setItem('goalValue');
    
        alert("✅ Successfully saved!")
        result.textContent = `Your info:
        Time: ${savedTime}
        Date: ${savedDate}
        Activity: ${savedActivity}
        Goal: ${savedGoal}`;
    } else {
        alert("❌ Please fill in all fields!")
    }
})