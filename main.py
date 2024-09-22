from my_crew import SurpriseTravelCrew

def run_crew():
    inputs = {
        'origin': 'New York City, JFK',
        'destination': 'Rome, FCO',
        'age': 30,
        'hotel_location': 'Rome',
        'flight_information': 'JFK123, leaving 10:00AM October 10th, 2024 - coming back 10:00PM October 15th, 2024',
        'trip_duration': '5 days'
    }

    result = SurpriseTravelCrew().crew().kickoff(inputs=inputs)
    print(result)

run_crew()