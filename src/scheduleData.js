cat << 'EOF' > src/scheduleData.js
export const STATIONS = [
  "San Francisco",
  "22nd Street",
  "Bayshore",
  "South San Francisco",
  "San Bruno",
  "Millbrae",
  "Hillsdale",
  "San Mateo",
  "Palo Alto",
  "Mountain View",
  "Sunnyvale",
  "San Jose Diridon",
  "Tamien"
];

export const MOCK_TRAINS = [
  {
    trainNum: "102",
    type: "Local",
    direction: "Northbound",
    origin: "San Jose Diridon",
    destination: "San Francisco",
    departureTime: "07:15 AM",
    arrivalTime: "08:28 AM",
    status: "On Time"
  },
  {
    trainNum: "404",
    type: "Limited",
    direction: "Northbound",
    origin: "San Mateo",
    destination: "San Francisco",
    departureTime: "07:42 AM",
    arrivalTime: "08:15 AM",
    status: "On Time"
  },
  {
    trainNum: "506",
    type: "Express",
    direction: "Northbound",
    origin: "Palo Alto",
    destination: "San Francisco",
    departureTime: "08:05 AM",
    arrivalTime: "08:45 AM",
    status: "2 min delay"
  },
  {
    trainNum: "101",
    type: "Local",
    direction: "Southbound",
    origin: "San Francisco",
    destination: "San Jose Diridon",
    departureTime: "07:30 AM",
    arrivalTime: "08:45 AM",
    status: "On Time"
  },
  {
    trainNum: "503",
    type: "Express",
    direction: "Southbound",
    origin: "San Francisco",
    destination: "Palo Alto",
    departureTime: "08:12 AM",
    arrivalTime: "08:50 AM",
    status: "On Time"
  },
  {
    trainNum: "105",
    type: "Local",
    direction: "Southbound",
    origin: "San Francisco",
    destination: "Tamien",
    departureTime: "08:45 AM",
    arrivalTime: "10:05 AM",
    status: "On Time"
  }
];
EOF