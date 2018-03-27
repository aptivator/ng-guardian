import {NavigationEnd} from '@angular/router';

export default function() {
  this.router.events.subscribe(evt => {
    if(evt instanceof NavigationEnd) {
      this.history.unshift(evt.url);
      this.history.splice(10);
    }
  });
}
