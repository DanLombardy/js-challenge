var React = require('react');
var ReactDOM = require('react-dom');
var DataTable = require(__dirname + '/components/data-table');
var Modal = require(__dirname + '/components/modal');
var utility = require(__dirname + '/js/utility');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

require(__dirname + "/css/base.css");
require(__dirname + "/css/modules.css");
require(__dirname + "/img/search.svg");

var img = document.createElement('img');
img.src = require(__dirname + "/img/search.svg");

if (typeof window !== 'undefined') {
  window.React = React;
}

var Application = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState:function() {
    var persistentData = [];
    if(localStorage.savedTableData) persistentData = JSON.parse(localStorage.savedTableData);

    return {
     isModalOpen: false,
     tableData: persistentData,

     firstName: '',
     lastName: '',
     dob: '',
     phoneNumber: '',
     email: '',
     notes:''

    }
  },

  openModal: function(){
    var dataContain = document.getElementById('dataContainer');
    var dataSubmit = document.getElementById('modaler');

    this.setState({ isModalOpen: true});
    utility.addOverlay();
  },

  closeModal: function(){
    var dataContain = document.getElementById('dataContainer');

    this.setState({ isModalOpen: false});

    utility.removeOverlay();
  },

  onSubmit: function(e){
    e.preventDefault();

    var newContact = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dob: this.state.dob,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      notes: this.state.notes
    };

    var emptyFlag = false;
    for(var prop in newContact){
      if (newContact[prop]  == ''){
        emptyFlag = true;
      }else{
        emptyFlag = false;
        break;
      }
    }

    if(emptyFlag){
      var dataContain = document.getElementById('dataContainer');

      this.setState({ isModalOpen: false});
      utility.removeOverlay();
      return;
    }

    if(!emptyFlag){
      var hold = this.state.tableData.concat([newContact]);
      var dataContain = document.getElementById('dataContainer');

      this.setState({tableData: hold,
        firstName: '',
        lastName: '',
        dob: '',
        phoneNumber: '',
        email: '',
        notes:''
      });

      localStorage.setItem('savedTableData', JSON.stringify(hold))

      this.setState({ isModalOpen: false});
      utility.removeOverlay();
    }
  },

  render: function () {
    return (
      <main className= "app">
      <section>
        <h1>Contacts Keeper</h1>

        <div className="buttonContainer">
          <form className="search" >
            <input placeholder= "Search"></input>
          </form>
            <img className="magnifyer" src={img.src} />
          <button className="openModalBtn" onClick={this.openModal}>Contacts Keeper</button>
        </div>

          <DataTable tables={this.state.tableData} />
        </section>

        <Modal className='reactModal' isOpen = {this.state.isModalOpen} transitionName = "modal-anim">
          <h3>Contacts Keeper</h3>
          <button className='modalCloser' onClick={this.closeModal}>x</button>

          <form action="" onSubmit = {this.onSubmit}>
            <section className="formContent">
            <div>
              <label for="first-name">First Name</label>
              <input id="first-name" type="text" valueLink={this.linkState('firstName')} />
              <label for="dob">Date of Birth</label>
              <input id="dob" type="text" valueLink={this.linkState('dob')} />
              <label for="email">Email</label>
              <input id="email" type="text" valueLink={this.linkState('email')} />
            </div>

            <div className="col-2">
              <label for="last-name">Last Name</label>
              <input id="last-name" type="text" valueLink={this.linkState('lastName')} />
              <label for="phone-number">Phone Number</label>
              <input id="phone-number" type="text" valueLink={this.linkState('phoneNumber')} />
            </div>
            </section>

            <div className="notesContainer">
              <label for="notes">Notes</label>
              <textarea id="notes" valueLink={this.linkState('notes')}  />
            </div>
            <hr/>
            <input type="submit" value="Save" className="formButton" />
          </form>
        </Modal>
      </main>
    )
  }
});





window.application = ReactDOM.render(<Application/>, document.getElementById("root"));
