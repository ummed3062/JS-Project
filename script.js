const users = [];
const appointments = [];
const prescriptions = [];

// Register User
function registerUser(event) {
  event.preventDefault();
  const user = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    age: document.getElementById('age').value,
    gender: document.getElementById('gender').value,
    contact: document.getElementById('contact').value
  };
  if (users.find(u => u.email === user.email)) {
    alert("Email already exists.");
    return false;
  }
  users.push(user);
  alert("Registered successfully!");
  window.location.href = "login.html";
}

// Login User
function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    alert("Login successful!");
    window.location.href = "book-appointment.html";
  } else {
    alert("Invalid credentials.");
  }
}

// Book Appointment
function bookAppointment(event) {
  event.preventDefault();
  const appointment = {
    patient: document.getElementById('patientName').value,
    doctor: document.getElementById('doctor').value,
    date: document.getElementById('appointmentDate').value,
    time: document.getElementById('appointmentTime').value
  };
  appointments.push(appointment);
  alert("Appointment booked!");
  window.location.href = "view-appointments.html";
}

// View Appointments
if (document.getElementById('appointmentsTable')) {
  const tbody = document.getElementById('appointmentsTable');
  appointments.forEach(app => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${app.patient}</td><td>${app.doctor}</td><td>${app.date}</td><td>${app.time}</td>`;
    tbody.appendChild(row);
  });
}

// Add Prescription
function addPrescription(event) {
  event.preventDefault();
  const prescription = {
    patient: document.getElementById('patientPrescName').value,
    medicine: document.getElementById('medicine').value,
    instructions: document.getElementById('instructions').value
  };
  prescriptions.push(prescription);
  alert("Prescription added!");
  renderPrescriptions();
}

// Render Prescription Table
function renderPrescriptions() {
  const table = document.getElementById('prescriptionTable');
  if (!table) return;
  table.innerHTML = "";
  prescriptions.forEach(presc => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${presc.patient}</td><td>${presc.medicine}</td><td>${presc.instructions}</td>`;
    table.appendChild(row);
  });
}

renderPrescriptions && renderPrescriptions();
