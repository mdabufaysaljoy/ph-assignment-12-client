import { Link } from "react-router-dom";

const teamMembers = [
  {
    photoURL: "https://i.pravatar.cc/150?img=5",
    nameOfTheMember: "John Doe",
    roleOfTheMember: "Manager",
  },
  {
    photoURL: "https://i.pravatar.cc/150?img=4",
    nameOfTheMember: "Jane Smith",
    roleOfTheMember: "Employee",
  },
  {
    photoURL: "https://i.pravatar.cc/150?img=3",
    nameOfTheMember: "Michael Johnson",
    roleOfTheMember: "HR Manager",
  },
  {
    photoURL: "https://i.pravatar.cc/150?img=2",
    nameOfTheMember: "Sarah Wilson",
    roleOfTheMember: "Team Lead",
  },
  {
    photoURL: "https://i.pravatar.cc/150?img=1",
    nameOfTheMember: "David Brown",
    roleOfTheMember: "Software Engineer",
  },
];
const AddAnEmployee = () => {
    return (
       <div className="max-w-6xl mx-auto">
       <div className="flex items-center gap-4">
         <h3 className="text-3xl font-semibold my-4">You can add maximum 5 employees </h3> <Link to="/manager/pricing" className="text-blue-500 underline"> increase limit</Link>
       </div>
       <div className="w-full flex justify-end my-2">
        <button className="btn btn-primary">Add Selected Members to the Team</button>
       </div>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          My Team Members
        </li>

        {teamMembers.map((member, idx) => (
          <li key={idx} className="list-row items-center">
            <div>
              <img
                className="size-40 rounded-box"
                src={member.photoURL} alt="cannot load"
              />
            </div>
            <div>
              <h4 className="text-3xl">{member.nameOfTheMember}</h4>
              <div className="text-xl uppercase font-semibold opacity-60">
                Remaining Reason
              </div>
            </div>
            <input type="checkbox" className="checkbox checkbox-primary" />
            <button className="btn btn-primary">Add to the team</button>
          </li>
        ))}
      </ul>
    </div>
    );
};

export default AddAnEmployee;