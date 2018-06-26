import moment from 'moment';

const departure = moment('2018-07-05 06:11');
let time = document.querySelector('header.timeline__item time');
setInterval(() => {
    const diff = moment.duration(departure.diff(moment()))._data;
    time.innerHTML = diff.days + '/' + diff.hours + ':' + diff.minutes + ':' + diff.seconds;
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

const opensidebarButton = document.querySelector('button.js-open-sidebar');
const overlay = document.querySelector('div.overlay');
const sidebar = document.querySelector('aside.sidebar');
const openSidebar = (event) => {
    event.preventDefault();
    document.body.classList.toggle('sidebar-is-open');
    sidebar.scrollIntoView();
}
opensidebarButton.addEventListener('click', openSidebar);
overlay.addEventListener('click', openSidebar);