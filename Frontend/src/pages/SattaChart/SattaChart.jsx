import React from 'react'
import SattaChartBanner from './SattaChartBanner';
import SattaChartSattaCalendar from './SattaChartSattaCalendar';
import SattaChartSattaTable from './SattaChartSattaTable';
import SattaChartSattaTableOne from './SattaChartSattaTableOne';
function SattaChart() {
  return (
    <div>
       <SattaChartBanner />
      <SattaChartSattaCalendar/>
      <SattaChartSattaTable/>
      <SattaChartSattaTableOne/>
    </div>
  )
}

export default SattaChart

