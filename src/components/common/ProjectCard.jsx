import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function ProjectCard({ title, description, imageUrl, liveUrl, githubUrl }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={imageUrl} alt={title} className="mb-4 rounded-md shadow-xl" />
      </CardContent>
      <CardFooter className="flex justify-between">
        {liveUrl &&
          <Button asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </Button>
        }
        <Button asChild variant="outline">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;