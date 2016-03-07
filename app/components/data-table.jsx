var React = require('react');

module.exports = React.createClass({

  render: function(){
    return (
      <section>
        <table>
          <thead>
          <tr>
            <th>First name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th id="note-column">Notes</th>
          </tr>
          </thead>
          <tbody>
          {this.props.tables.map(function(object, i){
            console.log("in datatable")
            console.log(object);
            return  <tr key={i}><td>{object.firstName}</td><td>{object.lastName}</td><td>{object.dob}</td><td>{object.phoneNumber}</td><td>{object.email}</td><td>{object.notes}</td></tr>
          })}
          </tbody>
        </table>
      </section>
    );
  }
});
