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