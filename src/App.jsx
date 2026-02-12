import { useState } from 'react';
import './App.css';

// Import your images at the top
import logo from './assets/logo.jpeg';
import giraffe from './assets/giraffe.jpg';
import leopard from './assets/leopard.jpg';
import maingate from './assets/maingate.jpg';
import zebras from './assets/zebras.jpg';
import lion from './assets/lion.jpg';
import hippo from './assets/hippo.jpg';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    safari_type: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendToWhatsApp = () => {
    const { name, email, phone, date, safari_type, message } = formData;

    if (!name || !email || !phone || !date || !safari_type) {
      alert("Fill all required fields");
      return;
    }

    const msg = `Hello Time 4 Africa,

Safari Booking Request
Name: ${name}
Email: ${email}
Phone: ${phone}
Date: ${date}
Safari: ${safari_type}
Notes: ${message || 'None'}`;

    window.open("https://wa.me/255754306921?text=" + encodeURIComponent(msg), "_blank");
  };

  return (
    <div className="App">
      <header>
        <div className="logo-area">
          <img src={logo} alt="Time 4 Africa Logo" />
          <div className="logo-text">
            <h1>Time 4 Africa</h1>
            <span>Tanzania Safari Experts</span>
          </div>
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#booking">Booking</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div className="hero">
        <div>
          <h2>Experience the Real Tanzania</h2>
          <p>Luxury safaris • Expert local guides • Lifetime memories</p>
          <a href="#booking">Book Your Safari</a>
        </div>
      </div>

      <section id="about">
        <h2>About Us</h2>
        <p>Time 4 Africa is a Tanzanian-owned safari company based in Arusha with over 25 years of professional guiding experience.</p>
      </section>

      <section id="services">
        <h2>Our Services</h2>
        <ul>
          <li>Guided Wildlife Safaris</li>
          <li>Camping & Lodge Safaris</li>
          <li>Cultural Tours</li>
          <li>Custom Itineraries</li>
          <li>Airport Transfers</li>
        </ul>
      </section>

      <section id="gallery">
        <h2>Safari Moments</h2>
        <div className="gallery-grid">
          <img src={giraffe} alt="Giraffe in Tanzania" />
          <img src={leopard} alt="Leopard on safari" />
          <img src={maingate} alt="Safari park entrance" />
          <img src={zebras} alt="Zebras in the wild" />
          <img src={lion} alt="Lion sighting" />
          <img src={hippo} alt="Hippo in water" />
        </div>
      </section>

      <section id="booking">
        <div className="booking-card">
          <h2>Book Your Safari</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
            <select
              name="safari_type"
              value={formData.safari_type}
              onChange={handleInputChange}
              required
            >
              <option value="">Safari Type</option>
              <option value="Guided Safari">Guided Safari</option>
              <option value="Camping Safari">Camping Safari</option>
              <option value="Cultural Tour">Cultural Tour</option>
            </select>
            <textarea
              name="message"
              placeholder="Additional requests"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <button type="button" onClick={sendToWhatsApp}>
              <i className="fab fa-whatsapp"></i> Book via WhatsApp
            </button>
          </form>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p><strong>WhatsApp:</strong> +255 754 306 921</p>
        <p><strong>Email:</strong> info@time4africa.tz.com</p>
        <p><strong>Location:</strong> Arusha, Tanzania</p>
      </section>

      <footer>
        &copy; 2025 Time 4 Africa | Tanzania Safari Specialists
      </footer>

      <a href="https://wa.me/255754306921" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default App;