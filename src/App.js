import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">🏞️ Dream Lands</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Header */}
      <header className="App-header" id="home">
        <h1>Welcome to Dream Lands</h1>
        <p>Find your perfect piece of land today!</p>
      </header>

      {/* Land Listings */}
      <main className="land-list">
        <div className="land-card">
          <img src="framing.jpeg" alt="Land 1" />
          <h2>FARMING LAND</h2>
          <p>Price: ₹12,00,000</p>
        </div>

        <div className="land-card">
          <img src="app.jpeg" alt="Land 2" />
          <h2>APPARTMENT</h2>
          <p>Price: ₹18,50,000</p>
        </div>

        <div className="land-card">
          <img src="hillsl.jpeg" alt="Land 3" />
          <h2>HILLS SIDE LAND</h2>
          <p>Price: ₹9,75,000</p>
        </div>

        <div className="land-card">
          <img src="sco.jpeg" alt="Land 4" />
          <h2>COMPAMY LAND</h2>
          <p>Price: ₹15,20,000</p>
        </div>
      </main>

      {/* About Us */}
      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>We are a land-selling company dedicated to helping you find the perfect plot for your home or investment.</p>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: info@dreamlands.com</p>
        <p>Phone: +91 98765 43210</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Dream Lands. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
