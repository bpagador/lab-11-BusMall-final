const choiceResults = JSON.parse(localStorage.getItem('CHOICES'));

const ids = [];
const clicked = [];
const seen = [];

choiceResults.forEach((item) => {
    if (item.timesClicked > 0) {
        ids.push(item.name);
        clicked.push(item.timesClicked);
        seen.push(item.timesSeen);
    }
});

const ctx = document.getElementById('chart').getContext('2d');
/* eslint-disable */
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ids,
        datasets: [{
            label: 'Times Chosen',
            data: clicked,
            backgroundColor: '#F7F4BF',
        }, {
            label: 'Times Seen',
            data: seen,
            backgroundColor: '#FCEAE6'
        }],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

});
