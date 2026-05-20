import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FreelancerForm from "./components/FreelancerForm";
import FreelancerList from "./components/FreelancerList";
import AuthModal from "./components/AuthModal";

function App() {
  const [experts, setExperts] = useState([]);

  const [showAuth, setShowAuth] = useState(false);
  const [authType, setAuthType] = useState("login");

  const openLogin = () => {
    setAuthType("login");
    setShowAuth(true);
  };

  const openSignup = () => {
    setAuthType("signup");
    setShowAuth(true);
  };

  const closeAuth = () => setShowAuth(false);

  const addExpert = (expert) => {
    setExperts([...experts, expert]);
  };

  const deleteExpert = (id) => {
    setExperts(experts.filter((e) => e.id !== id));
  };

  return (
    <>
      <Navbar openLogin={openLogin} openSignup={openSignup} />

      <Hero />
      <About />

      <FreelancerForm addExpert={addExpert} />
      <FreelancerList experts={experts} deleteExpert={deleteExpert} />

      {showAuth && (
        <AuthModal type={authType} close={closeAuth} />
      )}
    </>
  );
}

export default App;