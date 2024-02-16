import React from 'react'
import Card from "./Card"
import { useState } from 'react'
import "../App.css";


function Tours  ({tours,removeTour}) {
  return (
    <div>
        <div>
          <h2>Plan with Anmol</h2>
        </div>
        <div>
          tours.map((tour) => {
            return <Card></Card>
          })
        </div>
    </div>
  )
}

export default Tours;
