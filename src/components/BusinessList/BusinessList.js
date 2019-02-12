import React, { Component } from "react";
import "./BusinessList.css";
import { Business } from "../Business/Business";

export class BusinessList extends Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map(business => {
          return <Business business={business} key={business.id} />;
        })}
      </div>
    );
  }
}
