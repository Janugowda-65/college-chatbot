import React, { useState } from 'react';
import './App.css';

function App() {

  const [messages, setMessages] = useState([
    {
      sender: 'Bot',
      text:
        'Welcome to College Enquiry Chatbot! Select a college.'
    }
  ]);

  const [selectedCollege, setSelectedCollege] =
    useState(null);

  const colleges = {

    "RV College": {
      courses: {
        CSE: "₹2,50,000/year",
        AIML: "₹2,40,000/year",
        ECE: "₹2,20,000/year",
        Mechanical: "₹1,80,000/year",
        Civil: "₹1,70,000/year"
      },
      hostel: "Available (Boys & Girls Hostel)",
      placement: "95%",
      recruiters:
        "Google, Microsoft, Amazon, Infosys",
      location: "Bangalore"
    },

    "BMS College": {
      courses: {
        CSE: "₹2,20,000/year",
        AIML: "₹2,10,000/year",
        ECE: "₹1,90,000/year",
        Mechanical: "₹1,60,000/year"
      },
      hostel: "Available",
      placement: "90%",
      recruiters:
        "TCS, Wipro, Accenture, IBM",
      location: "Bangalore"
    },

    "PES University": {
      courses: {
        CSE: "₹4,50,000/year",
        AIML: "₹4,20,000/year",
        ECE: "₹3,80,000/year",
        BCA: "₹2,50,000/year"
      },
      hostel: "Available (Separate Hostels)",
      placement: "92%",
      recruiters:
        "Amazon, Cisco, Deloitte",
      location: "Bangalore"
    }

  };

  const selectCollege = (college) => {

    setSelectedCollege(college);

    const details = colleges[college];

    setMessages(prev => [
      ...prev,
      {
        sender: 'You',
        text: college
      },
      {
        sender: 'Bot',
        text:
          `College: ${college}`
      },
      {
        sender: 'Bot',
        text:
          `Location: ${details.location}`
      },
      {
        sender: 'Bot',
        text:
          `Hostel: ${details.hostel}`
      },
      {
        sender: 'Bot',
        text:
          `Placement: ${details.placement}`
      },
      {
        sender: 'Bot',
        text:
          `Top Recruiters: ${details.recruiters}`
      },
      {
        sender: 'Bot',
        text:
          'Now select a course to know fee.'
      }
    ]);
  };

  const selectCourse = (course) => {

    const fee =
      colleges[selectedCollege]
      .courses[course];

    setMessages(prev => [
      ...prev,
      {
        sender: 'You',
        text: course
      },
      {
        sender: 'Bot',
        text:
          `${course} fee in ${selectedCollege} is ${fee}`
      }
    ]);
  };

  return (
    <div className="container">

      <h1>College Enquiry Chatbot</h1>

      <div className="chat-box">

        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.sender}:</strong>
            {' '}
            {msg.text}
          </p>
        ))}

      </div>

      {!selectedCollege ? (

        <div>

          <h3>Select College</h3>

          {Object.keys(colleges).map(
            (college) => (

              <button
                key={college}
                onClick={() =>
                  selectCollege(college)
                }
              >
                {college}
              </button>

          ))}

        </div>

      ) : (

        <div>

          <h3>Select Course</h3>

          {Object.keys(
            colleges[selectedCollege]
              .courses
          ).map((course) => (

            <button
              key={course}
              onClick={() =>
                selectCourse(course)
              }
            >
              {course}
            </button>

          ))}

        </div>

      )}

    </div>
  );
}

export default App;