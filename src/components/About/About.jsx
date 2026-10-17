import AboutIMG from "../../assets/about.svg";
const About = () => {
  return (
    <div className="flex flex-col md:flex-row px-4 py-8">
      <div className="flex-1">
        <img src={AboutIMG} alt="" />
      </div>
      <div className="flex-1 text-xl">
        <h3 className="text-3xl font-bold text-center">About Our Website</h3>
        <div className="divider"></div>
        <p>
          This website is an Asset Management System built for companies to
          manage and track their organizational assets and employee requests
          efficiently. The platform is designed for two types of users: HR
          Managers and Employees. Its primary goal is to help companies monitor
          company-owned assets such as laptops, keyboards, phones, chairs, pens,
          paper, and other office materials. <br /> <br />
          The system allows businesses to subscribe to different employee
          management packages and use the software for internal asset tracking.
          HR Managers can add assets, manage employees, approve or reject asset
          requests, monitor stock availability, and handle team management.
          Employees can request assets, view their requested items, return
          returnable assets, and track request status. <br /> <br />
          The application includes separate authentication systems for Employees
          and HR Managers, including social login support and secure JWT
          authentication. HR Managers must purchase a package before accessing
          management features. 
       
        </p> <br />
        <legend className="font-semibold">   Available packages include:</legend>
          <ul className="list-disc mt-2">
            <li>5 members for $5</li>
            <li>10 members for $8</li>
            <li>20 members for $15</li>
          </ul>
      </div>
    </div>
  );
};

export default About;
