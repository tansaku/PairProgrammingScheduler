$(document).ready(function() {
  var timezone = jstz.determine();
  $( "#tabs" ).tabs();
  $('#date').datepicker();
  $('#calendar').fullCalendar({
    theme: true,
    defaultView: 'agendaWeek',
    ignoreTimezone: false,
    eventSources: [
    // Michael's availability
    {
      backgroundColor: 'blue',
      url: "https://www.google.com/calendar/feeds/tol7n1s41u5enta612hibravrk%40group.calendar.google.com/public/basic",
      currentTimezone: timezone.name()
    },
    // Sampriti's PP availability
    {
      backgroundColor: 'cyan',
      url: "https://www.google.com/calendar/feeds/6q6bjn98aqs9kqom53tk125dp0%40group.calendar.google.com/public/basic",
      currentTimezone: timezone.name()
    },
    // Dan's PP availability
      {
      backgroundColor: 'yellow',
      url: "https://www.google.com/calendar/feeds/vf7cfhpnghp51o3c87pq5ktdf8%40group.calendar.google.com/public/basic",
      currentTimezone: timezone.name()
    },
    // Juan's PP availability
    {
      backgroundColor: 'light-blue',
      url: "https://www.google.com/calendar/feeds/0q1akp21rnc1p2lnnp1h0kahj8%40group.calendar.google.com/public/basic",
      currentTimezone: timezone.name()
    },
    // Pavel's PP availability
    {
      backgroundColor: 'green',
      url: "https://www.google.com/calendar/feeds/g8ejrf4tqifkvupkbhg2r5iv94%40group.calendar.google.com/public/basic",
      currentTimezone: timezone.name()
    },
    // Sam's PP availability
    {
      backgroundColor: 'red',
      url: "https://www.google.com/calendar/feeds/j2h365llv5mdjtuplrrrqko4dg%40group.calendar.google.com/public/basic",
      currentTimezone: timezone.name()  
    },
    // Marian's PP availability
    {
      backgroundColor: 'orange',
      url: "https://www.google.com/calendar/feeds/f067l44dm6s014tcmnu7dn5lj4%40group.calendar.google.com/public/basic",
      currentTimezone: timezone.name()
    },
    // TJ's PP availability - no word from him recenlty
    //{
    // backgroundColor: 'blue',
    //  url: "https://www.google.com/calendar/feeds/7ppdh4cd53gv54id301ga1jsq4%40group.calendar.google.com/public/basic",
    //  currentTimezone: timezone.name()
    //},
    // Adil's Availability
    {
      backgroundColor: 'brown',
      url: "https://www.google.com/calendar/feeds/kkr82kte0h5n8dr50lq6issak4%40group.calendar.google.com/public/basic",
      currentTimezone: timezone.name()
    },
    // Conor's Availability - no word from him recently
    //{
    //  backgroundColor: 'cyan',
    //  url: "https://www.google.com/calendar/feeds/f8t4baj84mglbveib3sglab2qc%40group.calendar.google.com/public/basic",
    //  currentTimezone: timezone.name()
    //},
    // Risa's Availability
    {
      backgroundColor: 'pink',
      url: "https://www.google.com/calendar/feeds/uj2q9nn8ea0hppg44nf4khp0bs%40group.calendar.google.com/public/basic",
      currentTimezone: timezone.name()
    },
    // David C's Availability
    {
      backgroundColor: 'magenta',
      url: "https://www.google.com/calendar/feeds/s3m8fae5msba5k4t4o4g7h7qa0%40group.calendar.google.com/public/basic",
      currentTimezone: timezone.name()
    },
    // Marcelo's Availability
    {
      backgroundColor: 'white',
      url: "https://www.google.com/calendar/feeds/leopark647%40gmail.com/public/basic",
      currentTimezone: timezone.name()
    }],

    //events: 'https://www.google.com/calendar/feeds/j2h365llv5mdjtuplrrrqko4dg%40group.calendar.google.com/public/basic',
    eventClick: function(event) {
      // opens events in a popup window
      window.open(event.url, 'gcalevent', 'width=700,height=600');
      return false;
    },

    loading: function(bool) {
      if (bool) {
        $('#loading').show();
      }else{
        $('#loading').hide();
      }
    }
  })
  $('h1').wrap('<div id="bdy" class="ui-widget ui-widget-content">');
});
