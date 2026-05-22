from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# College Data
college_data = {

    "rv college": {
        "courses": {
            "cse": "₹2,50,000 per year",
            "aiml": "₹2,40,000 per year",
            "ece": "₹2,20,000 per year"
        },
        "placement": "95%",
        "hostel": "Available"
    },

    "bms college": {
        "courses": {
            "cse": "₹2,20,000 per year",
            "ise": "₹2,00,000 per year",
            "ece": "₹1,90,000 per year"
        },
        "placement": "90%",
        "hostel": "Available"
    },

    "pes university": {
        "courses": {
            "cse": "₹4,50,000 per year",
            "aiml": "₹4,20,000 per year",
            "ece": "₹3,80,000 per year"
        },
        "placement": "92%",
        "hostel": "Available"
    }
}


@app.route('/chat', methods=['POST'])
def chat():

    user_message = request.json['message'].lower()

    response = (
        "Sorry, I don't understand. "
        "Ask about colleges, fees, courses, hostel or placement."
    )

    # Show colleges
    if "college" in user_message:

        response = (
            "Available colleges:\n"
            "1. RV College\n"
            "2. BMS College\n"
            "3. PES University"
        )

    # RV College
    elif "rv college" in user_message:

        response = (
            "RV College Courses:\n"
            "CSE - ₹2,50,000/year\n"
            "AIML - ₹2,40,000/year\n"
            "ECE - ₹2,20,000/year"
        )

    # BMS College
    elif "bms college" in user_message:

        response = (
            "BMS College Courses:\n"
            "CSE - ₹2,20,000/year\n"
            "ISE - ₹2,00,000/year\n"
            "ECE - ₹1,90,000/year"
        )

    # PES University
    elif "pes university" in user_message:

        response = (
            "PES University Courses:\n"
            "CSE - ₹4,50,000/year\n"
            "AIML - ₹4,20,000/year\n"
            "ECE - ₹3,80,000/year"
        )

    # Fee Queries
    elif "fee" in user_message:

        response = (
            "Example fee queries:\n"
            "1. RV College CSE fee\n"
            "2. BMS College ECE fee\n"
            "3. PES University AIML fee"
        )

    elif "rv college cse fee" in user_message:
        response = "RV College CSE Fee: ₹2,50,000/year"

    elif "bms college ece fee" in user_message:
        response = "BMS College ECE Fee: ₹1,90,000/year"

    elif "pes university aiml fee" in user_message:
        response = "PES University AIML Fee: ₹4,20,000/year"

    # Placement
    elif "placement" in user_message:

        response = (
            "Placement:\n"
            "RV College - 95%\n"
            "BMS College - 90%\n"
            "PES University - 92%"
        )

    # Hostel
    elif "hostel" in user_message:

        response = (
            "Hostel facilities available in "
            "RV College, BMS College and PES University."
        )

    return jsonify({
        "response": response
    })


if __name__ == "__main__":
    app.run(debug=True)