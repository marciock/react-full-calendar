import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class DatePicker extends Component{
constructor(props){
  super(props);
  this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDays: [],
    };
    
}
handleDayClick(day, { selected }) {
  const { selectedDays } = this.state;
  if (selected) {
    const selectedIndex = selectedDays.findIndex(selectedDay =>
      
      DayPicker.DateUtils.isSameDay(selectedDay, day)
    );
    selectedDays.splice(selectedIndex, 1);
  } else {
    selectedDays.push(day);
  }
  this.setState({ selectedDays });
}
  render(){

    const MONTHS=[
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ]
    const WEEKDAYS_SHORT = ['Dom', 'Seg', 'Ter', 'Quar', 'Quin', 'Sex', 'Sab'];
    return (
      <div>
      <DayPicker
        locale="br"
        months={MONTHS}
        weekdaysShort={WEEKDAYS_SHORT}
        firstDayOfWeek={1}
        pagedNavigation
        fixedWeeks
        selectedDays={this.state.selectedDays}
          onDayClick={this.handleDayClick}
      />
    </div>
    )
  }
}

export default DatePicker;