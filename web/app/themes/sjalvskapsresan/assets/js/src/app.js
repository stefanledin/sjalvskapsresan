
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

const passedEvents = document.querySelectorAll('.timeline__item--passed')
if (passedEvents) {
    let scrollValue = 0;
    passedEvents.forEach(item => scrollValue += item.clientWidth);
    //document.querySelector('.timeline__items-wrapper').scrollLeft = scrollValue;
}

document.addEventListener('DOMContentLoaded', (event) => {
    import(/* webpackChunkName: "SidebarNav" */ './SidebarNav').then(SidebarNav => {
        new SidebarNav.default();
    });
    import(/* webpackChunkName: "Counter" */ './Counter').then(Counter => {
        new Counter.default();
    });
});