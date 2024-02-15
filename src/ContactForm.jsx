import React, { useState, useEffect } from 'react';

function ContactForm({ addContact, updateContact, currentContact, setCurrentContact }) {
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (currentContact) setContact(currentContact);
  }, [currentContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contact.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (contact.id) {
      updateContact(contact.id, contact);
    } else {
      addContact(contact);
    }
    setContact({ name: '', email: '', phone: '' });
    setCurrentContact(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={contact.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="email"
        value={contact.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="phone"
        value={contact.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <button type="submit">Save Contact</button>
    </form>
  );
}

export default ContactForm;
