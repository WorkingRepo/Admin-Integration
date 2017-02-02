import React, { Component } from 'react';
import './css/animate.css';
import './css/style.css';

import { Link } from 'react-router'

class Add extends Component {

  render() {
    return (
      <div className="container">



      	<div className="top">
    			<h1 id="title" className="animated fadeInDown"><span id="logo">Add Restaurant</span></h1>
    		</div>
    		<div className="login-box animated fadeInUp">
    			<div className="box-header">
    				<h2 >Add Restaurant</h2>
    			</div>
          <form action="">
          <label forName="Rname">Restaurant Name</label>
    			<br/>
    			<input type="text" id="Rname" required/>

    			<br/>
    		  <label forName="latitute" required>latitute</label>
    			<br/>
    			<input type="text" id="latitute" required/>
    			<br/>

          <label forName="longitude">longitude</label>
          		<br/>
            <input type="text" id="longitude" required/>

           <br/>
           <label forName="Streetname">Street Name</label>
           		<br/>
           <input type="text" id="Streetname" required/>
         <br/>

         <label forName="address">Address</label>
         		<br/>
         <input type="textarea" id="address" required/>
           <br/>
          <label forName="phone">Phone</label>
          		<br/>
         <input type="text" id="phone" />
                     <br/>
         <label forName="email">Email ID</label>
         		<br/>
             <input type="email" id="email" />
         <br/>
      <label forName="homeurl">HomePage URL</label>
      		<br/>
           <input type="text" id="homeurl" />

                     <br/>
              <label forName="facebookurl">Facebook URL</label>
              		<br/>
            <input type="text" id="facebookurl" />
              <br/>
              <label forName="timings">Timings:</label>
                     <br/>
                   <label forName="otimings">Open</label>
                   		<br/>
                 <input type="text" id="otimings" />
                     <br/>
                   <label forName="ctimings">Close</label>
                   		<br/>
                   <input type="text" id="ctimings" />
                   <br />

    			<button type="submit">Sign In</button>
    			<br/>
         </form>
    		</div>
    	</div>
    );
  }
}

export default Add;
