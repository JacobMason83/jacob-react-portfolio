import React from 'react';


export default function PortfolioForm() {

   return(
   <div> 
    <form>
        <label name="form">Project Name</label>
        <input type="text" placeholder="name"/>
        <label name="form">name</label>
        <input type="text" placeholder="url"/>
        <label name="name">Position</label>
        <input type="text" placeholder="positon"/>
        <label name="name">description</label>
        <input type="text" placeholder="description"/>
    </form>
  </div>
   )
}