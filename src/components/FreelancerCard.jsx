function FreelancerCard({ expert, deleteExpert }) {
  return (
    <div className="card">
      <h3>{expert.name}</h3>
      <p>{expert.skill}</p>

      <button className="loginbtn">Hire</button>

      <button className="signupbtn" onClick={() => deleteExpert(expert.id)}>
        Delete
      </button>
    </div>
  );
}

export default FreelancerCard;