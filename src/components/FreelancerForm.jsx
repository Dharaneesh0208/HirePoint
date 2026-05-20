import { useState } from "react";

function FreelancerForm({ addExpert }) {
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !skill) {
      setError("All fields are required");
      return;
    }

    addExpert({
      id: Date.now(),
      name,
      skill,
    });

    setName("");
    setSkill("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", margin: "40px" }}>
      <h2 style={{ color: "cyan" }}>Add Expert</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      <button type="submit">Add</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default FreelancerForm;