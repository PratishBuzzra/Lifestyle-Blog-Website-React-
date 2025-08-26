import { HealthyFoodData } from "./HealthyFoodDB";
import { PersonalityData } from "./PersonalDevContentDDB";
import { technologyData } from "./TechnologyContentDB";
import { travelData } from "./TravelContentDB";

export const allBlogs = [
    ...travelData,
    ...technologyData,
    ...HealthyFoodData,
    ...PersonalityData
]