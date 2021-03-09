import React, { Component } from "react";
import "./Table.css"

export default class Table extends Component {
  render() {
      
    return (
      <div>
        <table className="myOtherTable">
          <tr>
            <th>ID</th><th>NAME</th><th>USERNAME</th><th>EMAIL</th><th>STREET</th>
            <th>SUITE</th><th>CITY</th><th>ZIPCODE</th><th>LAT</th><th>LNG</th>
            <th>PHONE</th><th>WEBSITE</th><th>NAME</th><th>CATCHPHRASE</th><th>BS</th>
          </tr>

          {this.props.item.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>         
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td> 
            
            <td>{item.address.street}</td> 
            <td>{item.address.suite}</td> 
            <td>{item.address.city}</td> 
            <td>{item.address.zipcode}</td> 
            
            <td>{item.address.geo.lat}</td> 
            <td>{item.address.geo.lng}</td> 
            <td>{item.phone}</td> 
            <td>{item.website}</td>
            
            <td>{item.company.name}</td>
            <td>{item.company.catchPhrase}</td>
            <td>{item.company.bs}</td>
          </tr>
          ))}

        </table>
      </div>
    );
  }
}
