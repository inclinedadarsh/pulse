"use client";

import ProjectDetails from "@/components/project-details";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useState, useEffect } from "react";

const Project = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [project, setProject] = useState<any>(null);

    useEffect(() => {
        setIsLoading(true);
        const fetchProject = async () => {
            try {
                const res = await axios.post("http://127.0.0.1:3001/project", {
                    projectId: "6632a5e4733a36a1b5caeedc",
                });
                setProject(res.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProject();
    }, []);

    return (
        <div className='mx-14 my-10'>
            {isLoading ? (
                <div className='flex justify-center items-center'>
                    <LoaderCircle size='50' className='animate-spin' />
                </div>
            ) : (
                project && (
                    <ProjectDetails
                        name={project.name}
                        description={project.description}
                        team={project.team}
                        submission={project.submissions}
                    />
                )
            )}
        </div>
    );
};

export default Project;
