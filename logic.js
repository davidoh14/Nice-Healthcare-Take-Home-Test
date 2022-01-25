// ASSUMPTIONS MADE:
// 1. The clinicians have designated labs, so there should be a join's table between the clinician's table and the lab table. 
// A model association would be built to access a clinician's designated lab address.

// 2. The logic will automatically choose a clinician for the user, rather than displaying numerous choices. 
// Displaying multiple clinicians would be a simple change, as they have already been sorted in ascending order by miles needed to travel. 

const clinicians = ["Barb", "Isaac", "Marisol", "Mary", "Shawna", "Shelly", "Tom"]; // represents what would be a model of clinician names, addresses, and association to lab addresses

// Example Clincians Data:
// [
//   {
//     name: "Barb",
//     address: "4120 Garfield Ave, Minneapolis, MN 55409",
//     labAddress: "835 Nicollet Mall, Minneapolis, MN 55402",
//   },
//   {
//     name: "Isaac",
//     address: "140 104th Ln NW, Blaine MN 55448",
//     labAddress: "2716 E 82nd St, Bloomington, MN 55425",
//   },
//   {
//     name: "Marisol",
//     address: "2393 Kalmia Ave, Boulder, CO 80304",
//     labAddress: "4750 Nautilus Ct S, Boulder, CO 80301",
//   },
// ];

let distances = [] // format will be [{clinician name, total distance of clinician's trip}]


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
console.log(distances[0]) // returns the clinician with the least total distance to travel
