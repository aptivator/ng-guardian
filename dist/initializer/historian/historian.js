import { NavigationEnd } from '@angular/router';
export default function () {
    var _this = this;
    this.router.events.subscribe(function (evt) {
        if (evt instanceof NavigationEnd) {
            _this.history.unshift(evt.url);
            _this.history.splice(10);
        }
    });
}
//# sourceMappingURL=historian.js.map