import Card from "./components/Card.jsx"
import "./app.css"
const App = () => {
  
const jobListings = [
  {
    companyLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    designation: "Full Stack Developer",
    duration: "2 days ago",
    location: "Bengaluru, India",
    pay: "$250 per day",
    type: "Full-time",
    level: "Senior level"
  },
  {
    companyLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    designation: "Machine Learning Engineer",
    duration: "4 days ago",
    location: "Gurugram, India",
    pay: "$280 per day",
    type: "Full-time",
    level: "Senior level"
  },
  {
    companyLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    designation: "Deep Learning Engineer",
    duration: "1 day ago",
    location: "Hyderabad, India",
    pay: "$400 per day",
    type: "Full-time",
    level: "Senior level"
  },
  {
    companyLogo: "https://logo.clearbit.com/oracle.com",
    companyName: "Oracle",
    designation: "Database Administrator",
    duration: "3 weeks ago",
    location: "Pune, India",
    pay: "$220 per day",
    type: "Full-time",
    level: "Senior level"
  },
  {
    companyLogo: "https://logo.clearbit.com/atlassian.com",
    companyName: "Atlassian",
    designation: "DevOps Engineer",
    duration: "4 days ago",
    location: "Mumbai, India",
    pay: "$260 per day",
    type: "Full-time",
    level: "Senior level"
  },
  {
    companyLogo: "https://logo.clearbit.com/paypal.com",
    companyName: "PayPal",
    designation: "Backend Developer",
    duration: "2 weeks ago",
    location: "Chennai, India",
    pay: "$190 per day",
    type: "Part-time",
    level: "Junior level"
  },
  {
    companyLogo: "https://logo.clearbit.com/byjus.com",
    companyName: "BYJU'S",
    designation: "Data Analyst",
    duration: "6 days ago",
    location: "Bengaluru, India",
    pay: "$140 per day",
    type: "Full-time",
    level: "Junior level"
  },
  {
    companyLogo: "https://logo.clearbit.com/swiggy.com",
    companyName: "Swiggy",
    designation: "Software Tester",
    duration: "3 days ago",
    location: "Hyderabad, India",
    pay: "$160 per day",
    type: "Part-time",
    level: "Junior level"
  },
  {
    companyLogo: "https://logo.clearbit.com/flipkart.com",
    companyName: "Flipkart",
    designation: "Data Engineer",
    duration: "5 hours ago",
    location: "Bengaluru, India",
    pay: "$270 per day",
    type: "Full-time",
    level: "Senior level"
  },
  {
    companyLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    designation: "Frontend Engineer",
    duration: "1 week ago",
    location: "Mumbai, India",
    pay: "$230 per day",
    type: "Full-time",
    level: "Senior level"
  }
];



  return (
    <>
    
      
      <div className="parent">
        
        {
          jobListings.map((ele, idx) => {
            // console.log(idx)
            return <div id={idx}>
              <Card compName={ele.companyName} compLogo={ele.companyLogo} desig={ele.designation} duration={ele.duration} type={ele.type} level={ele.level} pay={ele.pay} loaction={ele.location} />
              </div>
        })
        }
       
        
      </div>
      

    </>
  )
}

export default App;