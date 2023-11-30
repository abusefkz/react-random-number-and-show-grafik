import React, { useEffect, useState } from 'react'
import "./App.css"
import Number from "./RandomNumber/Number.jsx"
import ApexChart from "./apexcharts/Charts.jsx"



const App = () => {
      const [value,setValue] =useState([])
      const [value2,setValue2] =useState([])
      

      useEffect(() => {     
          if(value.length > 5){
            value.splice(0,1)
          }
      }, [value])

      useEffect(() => {      
        if(value2.length > 5){
          value2.splice(0,1)
        }
    }, [value2])
      
      

    return(

      <div className='container'>
          <div className='row mt-2'>
            <div className='col-sm-12 '>
                <Number setValue={setValue} value={value} setValue2={setValue2} value2={value2} />
            </div></div>
            <div className='row'>

          <div className='col-sm-6 mt-4'>            
              <ApexChart value={value}   /> 
          </div>

          
          <div className='col-sm-6 mt-4'>            
              <ApexChart value={value2}   /> 
          </div>
            </div>

          
      </div>
    )
}

export default App