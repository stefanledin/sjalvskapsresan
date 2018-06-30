import moment from 'moment';

//const departure = moment('2018-07-05 06:11');
const departure = moment('2018-06-30 11:11');
let time = document.querySelector('header.timeline__item .js-timer');
setInterval(() => {
    let html;
    let diff = moment.duration(departure.diff(moment()))._data;
    if (diff.seconds < 0) {
        html = 'MET: ';
        diff = moment.duration(moment().diff(departure))._data;
    } else {
        html = 'T-minus: ';
    }
    html += diff.days + '/' + diff.hours + ':' + diff.minutes + ':';
    // Lägg till en nolla om sekunder är mindre än 10.
    // 9 => 09 osv...
    if (diff.seconds < 10) {
        html += '0';
    }
    html += diff.seconds;
    time.innerHTML = html;
}, 1000);

document.querySelector('button.plask').addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('div.posts-pile--animateable').classList.add('posts-pile--run-animation');
});
document.querySelector('button.slask').addEventListener('click', event => {
    event.preventDefault();
    const pile = document.querySelector('div.posts-pile--animateable');
    pile.classList.add('posts-pile--reset-animation');
    setTimeout(() => {
        pile.classList.remove('posts-pile--run-animation', 'posts-pile--reset-animation');
    }, 1000);
});


document.addEventListener('DOMContentLoaded', (event) => {
    import(/* webpackChunkName: "SidebarNav" */ './SidebarNav').then(SidebarNav => {
        new SidebarNav.default();
    });
});