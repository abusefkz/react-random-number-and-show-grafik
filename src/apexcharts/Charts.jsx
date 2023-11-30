
import React from 'react'
import Chart from "react-apexcharts"
import axios from 'axios'
import { FaSave } from "react-icons/fa";

const Charts = ({value}) => {

   

      

     



  const onClick=()=>{
    axios.post('http://localhost:3000/numberAdd', {value} ).then((i) =>console.log(i?.data) )
  }
  

  const OptionsChartLine={
    colors: ['#1a2b3d'],
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    }
  }

  const SeriesChartLine= [{
    name: 'Random Sayınız :',
    data: value
  }]
  return (
    <div>
      
      <Chart options={OptionsChartLine} type='bar' series={SeriesChartLine} height={300} width={550} />
      

        
      
    </div>
  )
}

export default Charts