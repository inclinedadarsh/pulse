"use client";

import { ProjectDetailsProps } from "@/types";
import { Button } from "./ui/button";
import SubmissionDetails from "./submission-details";

const ProjectDetails = ({
    name,
    description,
    team,
    submission,
}: ProjectDetailsProps) => {
    return (
        <div>
            <h1 className='text-4xl font-medium'>{name}</h1>
            <p className='text-gray-600 font-medium mt-4'>{description}</p>
            <div className='flex items-start gap-5 mt-12 flex-row-reverse'>
                <div className='px-5 py-2 rounded border'>
                    <h1 className='text-2xl font-medium '>Team member names</h1>
                    {team.map((member, index) => (
                        <p
                            key={index}
                            className='text-gray-600 font-medium mt-4'
                        >
                            {member.name}
                        </p>
                    ))}
                </div>
                <div className='grow'>
                    <h1 className='text-2xl font-medium'>Submissions</h1>
                    {submission.map((sub, index) => (
                        <SubmissionDetails key={index} sub={sub} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
