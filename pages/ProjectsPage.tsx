
import React from 'react';
import ProjectSection from '../components/ProjectSection';
import ContactForm from '../components/ContactForm';

const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-10">
      <ProjectSection />
      <ContactForm />
    </div>
  );
};

export default ProjectsPage;
