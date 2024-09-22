from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from crewai_tools import SerperDevTool, ScrapeWebsiteTool
from pydantic import BaseModel, Field
from typing import List, Optional

class Activity(BaseModel):
    name: str = Field(..., description="The name of the activity")
    description: str = Field(..., description="A description of the activity")
    location: str = Field(..., description="The location of the activity")
    date: str = Field(..., description="The date of the activity")
    cuisine: str = Field(..., description="The cuisine of the activity")
    why_its_suitable: str = Field(..., description="Why it's suitable for the user")
    rating: str = Field(..., description="The rating of the activity")
    reviews: str = Field(..., description="The reviews of the activity")

class DayPlan(BaseModel):
    date: str = Field(..., description="The date of the day plan")
    activities: List[Activity] = Field(..., description="The activities of the day plan")
    restaurants: List[str] = Field(..., description="The restaurants of the day plan")
    flight: Optional[str] = Field(..., description="The flight information")

class Itinerary(BaseModel):
    days: List[DayPlan] = Field(..., description="The day plans of the trip")
    name: str = Field(..., description="The name of the itinerary")
    hotel: str = Field(..., description="The hotel of the itinerary")

@CrewBase
class SurpriseTravelCrew():
    """Surprise Travel Crew"""

    agents_config = 'config/agents.yaml'
    tasks_config = 'config/tasks.yaml'

    @agent
    def personalized_activity_planner(self) -> Agent:
        return Agent(
            config=self.agents_config['personalized_activity_planner'],
            tools=[SerperDevTool(), ScrapeWebsiteTool()],
            verbose=True,
            allow_delegation=False,
        )
    
    @agent
    def restaurant_scout(self) -> Agent:
        return Agent(
            config=self.agents_config['restaurant_scout'],
            tools=[SerperDevTool(), ScrapeWebsiteTool()],
            verbose=True,
            allow_delegation=False,
        )
    
    @agent
    def itinerary_compiler(self) -> Agent:
        return Agent(
            config=self.agents_config['itinerary_compiler'],
            tools=[SerperDevTool()],
            verbose=True,
            allow_delegation=False,
        )
    
    @task
    def personalized_activity_planning_task(self) -> Task:
        return Task(
            config=self.tasks_config['personalized_activity_planning_task'],
            agent=self.personalized_activity_planner(),
        )
    
    @task
    def restaurant_scouting_task(self) -> Task:
        return Task(
            config=self.tasks_config['restaurant_scouting_task'],
            agent=self.restaurant_scout(),
        )
    
    @task
    def itinerary_compilation_task(self) -> Task:
        return Task(
            config=self.tasks_config['itinerary_compilation_task'],
            agent=self.itinerary_compiler(),
            output_json=Itinerary
        )

    @crew
    def crew(self) -> Crew:
        """Creates a SurpriseTravel Crew"""
        return Crew(
            agents=self.agents,
            tasks=self.tasks,
            process=Process.sequential,
            verbose=True,
        )