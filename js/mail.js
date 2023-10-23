// function enviarEmailConAPI() {
//   const body = `La persona ${
//     document.getElementById("nombreContacto").value
//   } con el correo ${
//     document.getElementById("emailContacto").value
//   } de la empresa ${
//     document.getElementById("empresaContacto").value
//   } con teléfono ${
//     document.getElementById("telefonoContacto").value
//   } requiete información ${document.getElementById("detalleContacto").value}`;

//   const subject = "Información sobre un paquete";

//   const recipient = "jmanuelglzmtz@gmail.com";

//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "<sender’s email address>",
//     Password: "<email password>",
//     To: recipient,
//     From: "<sender’s email address>",
//     Subject: subject,
//     Body: body,
//   }).then(function (message) {
//     console.log(message);
//   });
// }

function enviarEmail() {
  const recipient = "euhdz8a@gmail.com";

  const subject = "Información sobre un paquete";

  const body = `La persona ${
    document.getElementById("nombreContacto").value
  } con el correo ${
    document.getElementById("emailContacto").value
  } de la empresa ${
    document.getElementById("empresaContacto").value
  } con teléfono ${
    document.getElementById("telefonoContacto").value
  } requiete información ${document.getElementById("detalleContacto").value}`;

  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
}
