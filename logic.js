// ASSUMPTIONS MADE:
// The clinicians have designated labs, so there should be a join's table between the clinician's table and the lab table. 
// A model association would be built to access a clinician's designated lab address.

const clinicians = ["Barb", "Isaac", "Marisol", "Mary", "Shawna", "Shelly", "Tom"]; // represents what would be a model of clinician names, addresses, and association to lab addresses
let distances = [] // format will be [clinician name, total distance of clinician's trip]


function calculateDistance(patientAddress, labBool) {
  if (labBool) {
    clinicians.forEach(
      (clinician) =>
        distances.push({ name: clinician, miles: clinicianToPatient(clinician.address, patientAddress) + clinicianToLab(clinician.address, clinician.labAddress)})
    );
  } else {
    clinicians.forEach(
      (clinician) =>
        distances.push({ name: clinician, miles: clinicianToPatient(clinician.address, patientAddress)}) 
    );
  }
}

// functions take place of calculating distance between two addresses
function clinicianToPatient(address1, address2) {
  return 2 * Math.floor(Math.random(1, 100) * 100);
}

function clinicianToLab(address1, address2) {
  return Math.floor(Math.random(1, 100) * 100);
}

function distanceSort() {
    
    distances.sort(function(a, b) {
        return a.miles - b.miles
    })    
}



calculateDistance()
distanceSort()
console.log(distances[0])
