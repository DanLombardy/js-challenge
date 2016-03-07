
function addOverlay(){
  var el = document.createElement('div');
  el.classList.add("overlay");
  document.body.appendChild(el);
}

function removeOverlay(){
  var classes = document.getElementsByClassName('overlay');
  document.body.removeChild(classes[0]);
}

function closeModal(){
  this.setState({ isModalOpen: false});
  var dataContain = document.getElementById('dataContainer');
  removeOverlay();
}

var exports = module.exports = {
  addOverlay: addOverlay,
  removeOverlay: removeOverlay,
  closeModal: closeModal
};
