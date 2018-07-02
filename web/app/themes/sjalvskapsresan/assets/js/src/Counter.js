import moment from 'moment';

export default class Counter {
    constructor() {
        this.departure = moment('2018-07-05 06:11');
        //this.departure = moment('2018-07-01 17:28');

        this.el = document.querySelector('header.timeline__item .js-timer');
        setInterval(this.countdown.bind(this), 1000);
    }

    countdown() {
        let prefix;
        let diff = moment.duration(this.departure.diff(moment()));
        if (this.hasDepartured(diff)) {
            prefix = 'MET: ';
            diff = moment.duration(moment().diff(this.departure))._data;
        } else {
            prefix = 'T-minus: ';
            diff = diff._data;
        }
        let html = this.diffAsHTML(diff);
        html = prefix + html;
        this.el.innerHTML = html;
    }

    hasDepartured(diff) {
        return diff._milliseconds < 0;
    }

    diffAsHTML(diff) {
        let html = diff.days + '/' + diff.hours + ':' + diff.minutes + ':';
        // Lägg till en nolla om sekunder är mindre än 10.
        // 9 => 09 osv...
        if (diff.seconds < 10) {
            html += '0';
        }
        html += diff.seconds;
        return html;
    }
}