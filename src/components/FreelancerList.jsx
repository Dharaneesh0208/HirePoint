import FreelancerCard from "./FreelancerCard";

function FreelancerList({ experts, deleteExpert }) {
  return (
    <div className="cards">
      {experts.map((expert) => (
        <FreelancerCard
          key={expert.id}
          expert={expert}
          deleteExpert={deleteExpert}
        />
      ))}
    </div>
  );
}

export default FreelancerList;