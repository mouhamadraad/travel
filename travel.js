document.addEventListener('DOMContentLoaded', function() {
  const bookForm = document.querySelector('.book form');

  if (bookForm) {
    bookForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      
      // You can perform additional validation here if needed
      
      // Show alert when form is submitted
      alert('Booking successfully!');
      
      // Optionally, you can reset the form after successful booking
      bookForm.reset();
    });
  } else {
    console.error('Booking form not found.');
  }
});
