import React from 'react';
import Header from './Header';
import Calendar from './Calendar';
import DaysControl from './DaysControl';
import MonthsControl from './MonthsControl';
import DaysList from './DaysList';
import MonthsList from './MonthsList';
import Months from './Months';



function App() {
  return (
    <React.Fragment>
  
   
    <Header />
    <div class="splash">
    <DaysList />
    <MonthsList />
  
    </div>

    {/* <Calendar /> */}

     {/* <DaysControl /> */}

    {/* <MonthsControl />  */}
    
    </React.Fragment>
  );
}

export default App;
