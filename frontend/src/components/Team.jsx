import Card from "./Card";

const teamMembers = [
  {
    name: "Prachi Sinha",
    rollNumber: "21053215",
    branch: "Computer Science",
    year: "2021-25",
  },
  {
    name: "Himesh Mohapatra",
    rollNumber: "21052590",
    branch: "Computer Science",
    year: "2021-25",
  },
  {
    name: "Kaustubh Srivastava",
    rollNumber: "21051999",
    branch: "Computer Science",
    year: "2021-25",
  },
  {
    name: "Binay Kumar Das ",
    rollNumber: "21052748",
    branch: "Computer Science",
    year: "2021-25",
  },
  {
    name: "Prabal Kumar Koundaliya",
    rollNumber: "21052007",
    branch: "Computer Science",
    year: "2021-25",
  },
];

const Team = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {teamMembers.map((member, index) => (
        <div key={index} className="m-4">
          <Card
            name={member.name}
            rollNumber={member.rollNumber}
            branch={member.branch}
            year={member.year}
          />
        </div>
      ))}
    </div>
  );
};

export default Team;
