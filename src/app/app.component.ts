import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  calendarPlugins = [timeGridPlugin, dayGridPlugin, googleCalendarPlugin];
  defaultView = 'timeGridWeek';
  minTime = '07:00:00';
  maxTime = '22:00:00';
  height = 'parent';
  googleCalendarApiKey = '<some-api-key>';
  events = {
    googleCalendarId: '<some-google-calendar-id>',
    className: 'gcal-event'
  }

  eventClick(info) {
    info.jsEvent.preventDefault(); // don't let the browser navigate

    if (info.event.url) {
      window.open(info.event.url);
    }
  }
}
