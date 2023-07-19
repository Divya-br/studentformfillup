// Get references to the HTML elements
const studentForm = document.getElementById('studentForm');
const studentTable = document.getElementById('studentTable');
const generateReportBtn = document.getElementById('generateReport');

// Initialize student data array from local storage or create a new one
let studentData = JSON.parse(localStorage.getItem('studentData')) || [];

// Function to add a new student
function addStudent(event) {
  event.preventDefault();

  // Get the form values
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const dob = document.getElementById('dob').value;
  const parentName = document.getElementById('parentName').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const phone = document.getElementById('phone').value;

  // Create a new student object
  const student = {
    firstName,
    lastName,
    dob,
    parentName,
    address,
    city,
    phone
  };

  // Add the student to the data array
  studentData.push(student);

  // Save the updated data array to local storage
  localStorage.setItem('studentData', JSON.stringify(studentData));

  // Reset the form
  studentForm.reset();

  // Render the student table
  renderStudentTable();
}

// Function to render the student table
function renderStudentTable() {
  // Clear the table body
  studentTable.innerHTML = '';

  // Iterate over the student data array and create table rows
  studentData.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.firstName}</td>
      <td>${student.lastName}</td>
      <td>${student.dob}</td>
      <td>${student.parentName}</td>
      <td>${student.address}</td>
      <td>${student.city}</td>
      <td>${student.phone}</td>
    `;

    // Append the row to the table body
    studentTable.appendChild(row);
  });
}

// Function to generate the report
function generateReport() {
  const reportData = studentData.filter(student => {
    // Add your condition to filter students with more than 60% marks
    // Here, we are assuming a "marks" property in the student object
    return student.marks > 60;
  });

  // Log the report data (you can modify this to display the data as you like)
  console.log(reportData);
}

// Event listener for form submission
studentForm.addEventListener('submit', addStudent);

// Event listener for report button click
generateReportBtn.addEventListener('click', generateReport);

// Initial rendering of the student table
renderStudentTable();
