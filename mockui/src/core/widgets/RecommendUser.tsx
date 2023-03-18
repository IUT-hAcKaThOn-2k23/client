import React from 'react';
import styled from 'styled-components';
import exportFromJSON from 'export-from-json';
import axios from 'axios';
import {
  useActivities,
  useAwards,
  useEducation,
  useIntro,
  useSkills,
  useVolunteer,
  useWork,
} from 'src/stores/data.store';
import { getIcon } from 'src/styles/icons';

const IconWrapper = styled.div`
  outline-color: transparent;
  margin-bottom: 1rem;
`;

const IconButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 40px;
  background: transparent;
  border: 0;
  border-radius: 2px;
  padding: 0;
  color: rgb(230, 230, 230);
`;
function preprocessText(text) {
    // Remove punctuation, digits, and whitespace
    return text.replace(/[^\w\s]|_/g, "").replace(/\d+/g, "").trim().toLowerCase();
}
// Classify job titles based on keywords
function classifyJobTitle(text) {
    // Define job title categories and corresponding keywords
    const jobTitleCategories = {
        "Software Developer": ["developer", "programmer", "engineer", "software", "full-stack", "frontend", "backend", "web development", "app development"],
        "Data Scientist": ["data scientist", "data analyst", "data engineer", "machine learning", "ai", "big data", "data mining", "predictive modeling"],
        "Marketing Manager": ["marketing manager", "marketing coordinator", "brand manager", "product manager", "digital marketer", "seo", "sem", "social media", "content marketing"],
        "Graphic Designer": ["graphic designer", "web designer", "ui/ux designer", "visual designer", "branding", "illustrator", "photoshop"],
        "Accountant": ["accountant", "bookkeeper", "financial analyst", "cpa", "audit", "tax"],
        "Lawyer": ["lawyer", "attorney", "legal counsel", "legal advisor", "paralegal", "juris doctor"],
        "Teacher": ["teacher", "instructor", "professor", "educator", "teaching assistant", "tutor"],
        "Sales Representative": ["sales", "account executive", "business development", "customer service", "cold calling", "relationship management"],
        "Human Resources Manager": ["hr manager", "recruiter", "talent acquisition", "employee relations", "compensation", "benefits", "hr analytics"],
        "Project Manager": ["project manager", "project coordinator", "scrum master", "agile", "waterfall", "pmp", "project management"],
        "Consultant": ["consultant", "management consultant", "strategy consultant", "business analyst", "systems analyst", "process improvement"],
        "Healthcare Professional": ["physician", "nurse", "pharmacist", "therapist", "social worker", "healthcare administrator"],
        "Operations Manager": ["operations manager", "supply chain", "logistics", "procurement", "inventory management", "process optimization"],
        "Financial Advisor": ["financial advisor", "wealth manager", "investment advisor", "financial planner", "retirement planning", "asset management"],
 
      // Add more job title categories and keywords as needed
    };
  
    // Find the job title category with the most matches
    let maxMatches = 0;
    let profession = "Unknown";
    for (const [jobTitle, keywords] of Object.entries(jobTitleCategories)) {
      let matches = 0;
      for (const keyword of keywords) {
        if (text.includes(keyword)) {
          matches++;
        }
      }
      if (matches > maxMatches) {
        maxMatches = matches;
        profession = jobTitle;
      }
    }
  
    return profession;
}
  

export function RecommendUser() {
  const basics = useIntro((state: any) => state.intro);


  function save () {
    const fileName = basics.name + '_' + new Date().toLocaleString();
    const exportType = exportFromJSON.types.json;

    let summary = basics.summary
    const preprocessedText = preprocessText(summary);
    const profession = classifyJobTitle(preprocessedText);
    console.log(profession); // Output: "Software Developer
    return profession;
  }

  return (
    <div>
      <p>Recommended profession: {save()}</p>
    </div>
  );
}
