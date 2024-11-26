const Card = ({ name, rollNumber, branch, year }) => {
  return (
    <div className="max-w-sm bg-white rounded overflow-hidden shadow-lg p-6">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">Roll Number: {rollNumber}</p>
      <p className="text-gray-700 text-base">Branch: {branch}</p>
      <p className="text-gray-700 text-base">Year: {year}</p>
    </div>
  );
};

export default Card;
