const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_5rf8zch';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Email Enviado');
      location.reload();
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
      location.reload();
    });
});