from flask import Flask, request, jsonify
from flask_cors import CORS
import time
from my_crew import SurpriseTravelCrew

app = Flask(__name__)
CORS(app)

@app.route('/plan-trip', methods=['POST'])
def plan_trip():
    data = request.json
    origin = data.get('origin')
    destination = data.get('destination')
    age = data.get('age')
    hotel_location = data.get('hotel_location')
    flight_information = data.get('flight_information')
    trip_duration = data.get('trip_duration')

    inputs = {}
    inputs['origin'] = origin
    inputs['destination'] = destination
    inputs['age'] = age
    inputs['hotel_location'] = hotel_location
    inputs['flight_information'] = flight_information
    inputs['trip_duration'] = trip_duration

    planner_crew = SurpriseTravelCrew().crew().kickoff(inputs=inputs)
    crew_output = planner_crew.to_dict()

    return jsonify(crew_output)

if __name__ == '__main__':
    app.run(debug=True, port=3001)