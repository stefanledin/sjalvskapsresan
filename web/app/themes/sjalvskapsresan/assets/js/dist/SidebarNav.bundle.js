(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SidebarNav"],{

/***/ "./assets/js/src/SidebarNav.js":
/*!*************************************!*\
  !*** ./assets/js/src/SidebarNav.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SidebarNav; });\n\nclass SidebarNav {\n    constructor() {\n        this.sidebar = document.querySelector('aside.sidebar');\n        this.categoryHeadings = this.sidebar.querySelectorAll('.category-list__heading');\n        this.postsLists = this.sidebar.querySelectorAll('ul.posts-list');\n        this.postsLinks = this.sidebar.querySelectorAll('.posts-list__item a');\n        this.opensidebarButton = document.querySelector('button.js-open-sidebar');\n        this.overlay = document.querySelector('div.overlay');\n\n        this.setPostsListsMargins();\n        this.bindEvents();\n    }\n\n    setPostsListsMargins() {\n        this.postsLists.forEach(ul => {\n            const margin = `-${ul.clientHeight}px`;\n            ul.setAttribute('data-margin', margin);\n            if (ul.style.marginTop !== '0px') {\n                ul.style.marginTop = margin;\n            }\n        });\n    }\n\n    bindEvents() {\n        this.categoryHeadings.forEach(a => a.addEventListener('click', this.togglePostsLists.bind(this)));\n        /*\n        this.postsLinks.forEach(a => a.addEventListener('click', event => {\n            event.preventDefault();\n            this.toggleSidebar(event);\n            document.querySelector('button.plask').click();\n        }));\n        */\n        this.opensidebarButton.addEventListener('click', this.toggleSidebar.bind(this));\n        this.overlay.addEventListener('click', this.toggleSidebar.bind(this));\n    }\n\n    toggleSidebar(event) {\n        event.preventDefault();\n        if (!document.body.classList.contains('sidebar-is-open')) {\n            this.sidebar.scrollIntoView();\n        }\n        document.body.classList.toggle('sidebar-is-open');\n    }\n\n    togglePostsLists(event) {\n        event.preventDefault();\n        const li = event.currentTarget.parentElement;\n        if (li.classList.contains('category-list__item--active')) {\n            this.closePostsLists(li);\n        } else {\n            this.openPostsLists(li);\n        }\n    }\n\n    openPostsLists(li) {\n        li.classList.add('category-list__item--active');\n        const ul = li.querySelector('ul');\n        if (ul) {\n            ul.style.marginTop = '0px';\n        }\n    }\n\n    closePostsLists(li) {\n        li.classList.remove('category-list__item--active');\n        const ul = li.querySelector('ul');\n        if (ul) {\n            ul.style.marginTop = ul.getAttribute('data-margin');\n        }\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvc3JjL1NpZGViYXJOYXYuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3JjL1NpZGViYXJOYXYuanM/MTA3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGViYXJOYXYge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZS5zaWRlYmFyJyk7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnlIZWFkaW5ncyA9IHRoaXMuc2lkZWJhci5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnktbGlzdF9faGVhZGluZycpO1xuICAgICAgICB0aGlzLnBvc3RzTGlzdHMgPSB0aGlzLnNpZGViYXIucXVlcnlTZWxlY3RvckFsbCgndWwucG9zdHMtbGlzdCcpO1xuICAgICAgICB0aGlzLnBvc3RzTGlua3MgPSB0aGlzLnNpZGViYXIucXVlcnlTZWxlY3RvckFsbCgnLnBvc3RzLWxpc3RfX2l0ZW0gYScpO1xuICAgICAgICB0aGlzLm9wZW5zaWRlYmFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLmpzLW9wZW4tc2lkZWJhcicpO1xuICAgICAgICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYub3ZlcmxheScpO1xuXG4gICAgICAgIHRoaXMuc2V0UG9zdHNMaXN0c01hcmdpbnMoKTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgc2V0UG9zdHNMaXN0c01hcmdpbnMoKSB7XG4gICAgICAgIHRoaXMucG9zdHNMaXN0cy5mb3JFYWNoKHVsID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hcmdpbiA9IGAtJHt1bC5jbGllbnRIZWlnaHR9cHhgO1xuICAgICAgICAgICAgdWwuc2V0QXR0cmlidXRlKCdkYXRhLW1hcmdpbicsIG1hcmdpbik7XG4gICAgICAgICAgICBpZiAodWwuc3R5bGUubWFyZ2luVG9wICE9PSAnMHB4Jykge1xuICAgICAgICAgICAgICAgIHVsLnN0eWxlLm1hcmdpblRvcCA9IG1hcmdpbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yeUhlYWRpbmdzLmZvckVhY2goYSA9PiBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVQb3N0c0xpc3RzLmJpbmQodGhpcykpKTtcbiAgICAgICAgLypcbiAgICAgICAgdGhpcy5wb3N0c0xpbmtzLmZvckVhY2goYSA9PiBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlU2lkZWJhcihldmVudCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ucGxhc2snKS5jbGljaygpO1xuICAgICAgICB9KSk7XG4gICAgICAgICovXG4gICAgICAgIHRoaXMub3BlbnNpZGViYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZVNpZGViYXIuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlU2lkZWJhci5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB0b2dnbGVTaWRlYmFyKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItaXMtb3BlbicpKSB7XG4gICAgICAgICAgICB0aGlzLnNpZGViYXIuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3NpZGViYXItaXMtb3BlbicpO1xuICAgIH1cblxuICAgIHRvZ2dsZVBvc3RzTGlzdHMoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbGkgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGlmIChsaS5jbGFzc0xpc3QuY29udGFpbnMoJ2NhdGVnb3J5LWxpc3RfX2l0ZW0tLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUG9zdHNMaXN0cyhsaSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5Qb3N0c0xpc3RzKGxpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wZW5Qb3N0c0xpc3RzKGxpKSB7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5LWxpc3RfX2l0ZW0tLWFjdGl2ZScpO1xuICAgICAgICBjb25zdCB1bCA9IGxpLnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG4gICAgICAgIGlmICh1bCkge1xuICAgICAgICAgICAgdWwuc3R5bGUubWFyZ2luVG9wID0gJzBweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZVBvc3RzTGlzdHMobGkpIHtcbiAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnY2F0ZWdvcnktbGlzdF9faXRlbS0tYWN0aXZlJyk7XG4gICAgICAgIGNvbnN0IHVsID0gbGkucXVlcnlTZWxlY3RvcigndWwnKTtcbiAgICAgICAgaWYgKHVsKSB7XG4gICAgICAgICAgICB1bC5zdHlsZS5tYXJnaW5Ub3AgPSB1bC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWFyZ2luJyk7XG4gICAgICAgIH1cbiAgICB9XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/js/src/SidebarNav.js\n");

/***/ })

}]);