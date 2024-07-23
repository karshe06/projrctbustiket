const seatsContainer = document.getElementById('seats');
const message = document.getElementById('message');
let selectedSeats = [];

// Generate seats
for (let i = 1; i <= 20; i++) {
  const seat = document.createElement('div');
  seat.className = 'seat';
  seat.id = 'seat-' + i;
  seat.textContent = i;
  seat.addEventListener('click', () => toggleSeat(seat.id));
  seatsContainer.appendChild(seat);
}

// Function to toggle seat selection
function toggleSeat(seatId) {
  const index = selectedSeats.indexOf(seatId);
  if (index === -1) {
    selectedSeats.push(seatId);
    document.getElementById(seatId).classList.add('selected');
  } else {
    selectedSeats.splice(index, 1);
    document.getElementById(seatId).classList.remove('selected');
  }
}

// Function to book ticket
function bookTicket() {
  if (selectedSeats.length === 0) {
    message.textContent = 'Please select at least one seat.';
  } else {
    // Here you would typically send selectedSeats to server for booking process
    message.textContent = `Booked seats: ${selectedSeats.join(', ')}`;
    // Reset selected seats
    selectedSeats = [];
    // Reset UI (remove selected class from seats)
    const allSeats = document.querySelectorAll('.seat');
    allSeats.forEach(seat => seat.classList.remove('selected'));
  }
}
