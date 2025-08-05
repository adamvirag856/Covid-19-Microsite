function toggleMessage() {
  const msg = document.getElementById('message');
  msg.style.display = msg.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('feedbackForm');
  const modal = new bootstrap.Modal(document.getElementById('thankYouModal'));

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      modal.show(); 
      form.reset();
      form.classList.remove('was-validated');
    } else {
      form.classList.add('was-validated');
    }
  });
});

