import React, { Component } from 'react';
import './css/animate.css';
import './css/style.css';
import 'font-awesome/css/font-awesome.css'
import { Link } from 'react-router'

class Update extends Component {

  render() {
    return (
      <div className="container">



      	<div className="top">
    			<h1 id="title" className="animated fadeInDown"><span id="logo">Update Restaurant</span></h1>
    		</div>
    		<div className="login-box animated fadeInUp">
    			<div className="box-header">
    				<h2 >Update</h2>

    			</div>
    <br />
          <form className="searchbox_1" action="">
                  <input type="search" className="search_1" placeholder="Search" />
                    <button type="submit" className="submit_1" value="search">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
          </form>


    			<br/>

    		</div>
    	</div>
    );
  }
}

export default Update;
