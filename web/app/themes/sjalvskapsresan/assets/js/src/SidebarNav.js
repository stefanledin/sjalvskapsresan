
export default class SidebarNav {
    constructor() {
        this.sidebar = document.querySelector('aside.sidebar');
        this.categoryHeadings = this.sidebar.querySelectorAll('.category-list__heading');
        this.postsLists = this.sidebar.querySelectorAll('ul.posts-list');
        this.postsLinks = this.sidebar.querySelectorAll('.posts-list__item a');
        this.opensidebarButton = document.querySelector('button.js-open-sidebar');
        this.overlay = document.querySelector('div.overlay');

        this.setPostsListsMargins();
        this.bindEvents();
    }

    setPostsListsMargins() {
        this.postsLists.forEach(ul => {
            const margin = `-${ul.clientHeight}px`;
            ul.setAttribute('data-margin', margin);
            if (ul.style.marginTop !== '0px') {
                ul.style.marginTop = margin;
            }
        });
    }

    bindEvents() {
        this.categoryHeadings.forEach(a => a.addEventListener('click', this.togglePostsLists.bind(this)));
        /*
        this.postsLinks.forEach(a => a.addEventListener('click', event => {
            event.preventDefault();
            this.toggleSidebar(event);
            document.querySelector('button.plask').click();
        }));
        */
        this.opensidebarButton.addEventListener('click', this.toggleSidebar.bind(this));
        this.overlay.addEventListener('click', this.toggleSidebar.bind(this));
    }

    toggleSidebar(event) {
        event.preventDefault();
        if (!document.body.classList.contains('sidebar-is-open')) {
            this.sidebar.scrollIntoView();
        }
        document.body.classList.toggle('sidebar-is-open');
    }

    togglePostsLists(event) {
        event.preventDefault();
        const li = event.currentTarget.parentElement;
        if (li.classList.contains('category-list__item--active')) {
            this.closePostsLists(li);
        } else {
            this.openPostsLists(li);
        }
    }

    openPostsLists(li) {
        li.classList.add('category-list__item--active');
        const ul = li.querySelector('ul');
        if (ul) {
            ul.style.marginTop = '0px';
        }
    }

    closePostsLists(li) {
        li.classList.remove('category-list__item--active');
        const ul = li.querySelector('ul');
        if (ul) {
            ul.style.marginTop = ul.getAttribute('data-margin');
        }
    }
}