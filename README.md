# Surprise Trip Planner

This project is a surprise trip planner that uses AI to help create personalized travel itineraries. It consists of a Python Flask backend and a Next.js frontend.

## Prerequisites

- Python 3.8 or higher
- Node.js 14 or higher
- npm or yarn

## Installation

### Backend Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Create a virtual environment:
   ```bash
   python -m venv .venv-surprise-trip
   ```

3. Activate the virtual environment:
   - On Windows:
     ```bash
     .venv-surprise-trip\Scripts\activate
     ```
   - On macOS and Linux:
     ```bash
     source .venv-surprise-trip/bin/activate
     ```

4. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

5. Copy the `.env.example` file to `.env` and fill in the necessary environment variables:
   ```bash
   cp .env.example .env
   ```
   Open the `.env` file in a text editor and fill in any required values.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd travel-planner
   ```

2. Install the required npm packages:
   ```bash
   npm install
   ```
   or if you're using yarn:
   ```bash
   yarn install
   ```

## Running the Application

To run the full application, you'll need to start both the backend Flask server and the frontend Next.js development server.

### Backend (Flask App)

1. Ensure you're in the root directory of the project and your virtual environment is activated.

2. Set the Flask environment variables:
   - On Windows:
     ```bash
     set FLASK_APP=app.py
     set FLASK_ENV=development
     ```
   - On macOS and Linux:
     ```bash
     export FLASK_APP=app.py
     export FLASK_ENV=development
     ```

3. Start the Flask development server:
   ```bash
   flask run --port=3001
   ```

   This will start the Flask server on `http://localhost:3001`.

### Frontend (Next.js)

1. Open a new terminal window (keep the Flask server running in the previous terminal).

2. Navigate to the `travel-planner` directory:
   ```bash
   cd travel-planner
   ```

3. Start the Next.js development server:
   ```bash
   npm run dev
   ```
   or if you're using yarn:
   ```bash
   yarn dev
   ```

   This will start the Next.js server, typically on `http://localhost:3000`.

## Accessing the Application

- The Flask backend API will be available at `http://localhost:3001`
- The Next.js frontend will be available at `http://localhost:3000`

You can now interact with the frontend in your web browser, which will communicate with the Flask backend to process requests.

## Development Workflow

1. Make changes to the Flask backend in `app.py` and other Python files.
2. The Flask development server will automatically reload when you save changes.
3. Make changes to the Next.js frontend in the `travel-planner` directory.
4. The Next.js development server will automatically reload when you save changes.

Remember to keep both the Flask and Next.js servers running while developing.

## Project Structure

- `app.py`: Main entry point for the Flask backend application
- `main.py`: Contains core logic for the surprise trip planner
- `my_crew.py`: Defines the AI crew used for planning
- `config/`: Contains configuration files for agents and tasks
- `travel-planner/`: Next.js frontend application

## Troubleshooting

- If you encounter any package-related issues, ensure that your virtual environment is activated and all dependencies are installed correctly.
- Check that the ports 3001 and 3000 are not being used by other applications.
- Ensure that your `.env` file is properly configured with any necessary API keys or settings.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).