
import React from 'react';
import Days from './Days';

const marketSchedule = [  
    {  
       day: "Sunday",
       location: "Lents International",
       hours: "9:00am - 2:00pm",
       booth: "4A"
    },
    {  
       day: "Monday",
       location: "Pioneer Courthouse Square",
       hours: "10:00am - 2:00pm",
       booth: "7C"
    },
    {  
       day: "Tuesday",
       location: "Hillsboro",
       hours: "5:00pm - 8:30pm",
       booth: "1F"
    },
    {  
       day: "Wednesday",
       location: "Shemanski Park",
       hours: "10:00am - 2:00pm",
       booth: "3E"
    },
    {  
       day: "Thursday",
       location: "Northwest Portland",
       hours: "2:00pm - 6:00pm",
       booth: "6D"
    },
    {  
       day: "Saturday",
       location: "Beaverton",
       hours: "10:00am - 1:30pm",
       booth: "9G"
    }
   ];

   function DaysList() {
       return (
           <React.Fragment>
               <div class="days">
               <h3>Market Schedule</h3>
               {marketSchedule.map((days, index) =>
                <Days
                    day={days.day}
                    location={days.location}
                    hours={days.hours}
                    booth={days.booth}
                    key={index} />
                    
               )}
             </div>
           </React.Fragment>
       )
   }

export default DaysList;