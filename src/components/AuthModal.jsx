import { useState } from "react";

function AuthModal({ type, close }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields required");
      return;
    }

    alert(
      type === "login"
        ? "Login Successful"
        : "Account Created Successfully"
    );

    close();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={{ color: "cyan" }}>
          {type === "login" ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            {type === "login" ? "Login" : "Create Account"}
          </button>

          <button type="button" onClick={close}>
            Close
          </button>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "black",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    width: "300px",
  },
};

export default AuthModal;