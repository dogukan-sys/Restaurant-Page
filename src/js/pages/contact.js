import css from '../../styles/contact.css'

export default function buildContact() {
  const contactFormContainer = document.createElement("contact-form");
  const form = document.createElement("form");
    form.id = "contact-form";
    form.innerHTML = `
      <h2>Contact Us. We\'d love to hear from you!</h2>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required><br><br>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required><br><br>

      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="4" required></textarea><br><br>

      <button type="submit">Submit</button>
        `;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      alert(`Your Message:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  });
  contactFormContainer.appendChild(form)
   return contactFormContainer
}

