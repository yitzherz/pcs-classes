window.pcsClock = (function () {
  'use strict';
  /// private area for all clocks

  return function (parent = document.body) {
    const clockElem = $('#clockGoesHere');
    const alarmButton = $('#setAlarm');
    const snoozeButton = $('#snoozeButton');
    const alarmHour = $('#hourInput');
    const alarmMinute = $('#minuteInput');

    clockElem.addClass('clock');
    parent.append(clockElem);

    function updateClock() {
      clockElem.text(new Date().toLocaleTimeString());
    }

    setInterval(updateClock, 1000);
    updateClock();

    let alarmInterval;
    snoozeButton.hide();
    function setAlarm() {
      let hour = new Date().getHours();
      if (hour > 12) {
        hour -= 12;
      }
      const minute = new Date().getMinutes();

      $('label ,input,p,button').hide();
      $('#alarmDiv').prepend(`<p>alarm set for ${alarmHour.val().padStart(2, '0')}:${alarmMinute.val().padStart(2, '0')}</p>`);

      if (
        Number(alarmHour.val()) === hour &&
        Number(alarmMinute.val()) === minute
      ) {
        alarmRing();
      }
    }

    function alarmRing() {
      console.log('alarm is working');
      //$('#alarmDiv').empty();
      $('p').hide();
      $('#alarmDiv').prepend(`<p>RINGING!!!!</p>`);
      alarmButton.show();
      alarmButton.text('stop alarm');
      //snoozeButton.show();
    }



    alarmButton.click((e) => {
      if (!alarmInterval) {
        e.preventDefault();
        alarmInterval = setInterval(setAlarm, 1000);

      } else {
        stopAlarm();
      }
    });

    function stopAlarm() {
      clearInterval(alarmInterval);
      alarmInterval = null;
      $('label ,input,p,button').show();
      alarmButton.text('setalarm');
    }

    /*snoozeButton.click(() => {
      alarmInterval = setInterval(alarmRing,2000);
      $('label ,input,p,button').hide();
      $('#alarmDiv').prepend(`<p>alarm snoozed for 5 seconds</p>`);
    });*/

  };
}());