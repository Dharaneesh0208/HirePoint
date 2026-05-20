function Navbar({ openLogin, openSignup }) {
  return (
    <header>
      <nav>
        <h1>HirePoint</h1>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>

        <div>
          <button className="loginbtn" onClick={openLogin}>
            Login
          </button>

          <button className="signupbtn" onClick={openSignup}>
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;