function About() {
  return (
    <section className="about" id="about">
      <h2>About HirePoint</h2>
      <p>
        HirePoint is a modern talent hiring platform that connects
        businesses with skilled professionals quickly and efficiently.
      </p>

      <h2 id="features">Features</h2>

      <div className="cards">
        <div className="card">
          <h3>Smart Search</h3>
          <p>Find experts instantly.</p>
        </div>

        <div className="card">
          <h3>Secure Hiring</h3>
          <p>Trusted verified profiles.</p>
        </div>

        <div className="card">
          <h3>Fast Connect</h3>
          <p>Instant project discussions.</p>
        </div>

        <div className="card">
          <h3>Quality Results</h3>
          <p>Top rated professionals.</p>
        </div>
      </div>
    </section>
  );
}

export default About;