"use client";
import ProjectsList from "@/components/projects-list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { Key, useEffect, useState } from "react";

const Dashboard = () => {
    const [isProjectLoading, setIsProjectLoading] = useState(false);
    const [isAssignmentLoading, setIsAssignmentLoading] = useState(false);
    const [projects, setProjects] = useState(null);
    const [assignments, setAssignments] = useState([]);
    const [newAssignment, setNewAssignment] = useState("");
    const [assignmentDescription, setAssignmentDescription] = useState("");
    const [assignmentDate, setAssignmentDate] = useState("");
    const [assignmentSubmissionLoading, setAssignmentSubmissionLoading] =
        useState(false);
    useEffect(() => {
        setIsProjectLoading(true);
        const fetchData = async () => {
            try {
                const res = await axios.get("http://127.0.0.1:3001/project");
                setProjects(res.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsProjectLoading(false);
            }

            setIsAssignmentLoading(true);
            try {
                const res = await axios.get("http://127.0.0.1:3001/session");
                setAssignments(res.data[0].assignments);
            } catch (error) {
                console.log(error);
            } finally {
                setIsAssignmentLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async () => {
        setAssignmentSubmissionLoading(true);
        if (!newAssignment || !assignmentDescription || !assignmentDate) {
            alert("Assignment name, description and date are required!");
            setAssignmentSubmissionLoading(false);
            return;
        }

        try {
            const res = await axios.post("http://127.0.0.1:3001/assignment", {
                title: newAssignment,
                description: assignmentDescription,
                dueDate: assignmentDate,
                fromSession: "662fe64ba5a982ef6b3b360d",
            });

            alert("Assignment added successfully! Please refresh the page.");
        } catch (error) {
            console.log(error);
        } finally {
            setAssignmentSubmissionLoading(false);
        }
    };

    return (
        <div className='space-y-10 mt-20'>
            {isProjectLoading ? (
                <div className='flex justify-center items-center'>
                    <LoaderCircle size='50' className='animate-spin' />
                </div>
            ) : (
                projects && (
                    <ProjectsList
                        projects={projects}
                        title='All projects within this session'
                        ctaBtn='Add another project'
                        link='#'
                    />
                )
            )}
            {isAssignmentLoading ? (
                <div className='flex justify-center items-center'>
                    <LoaderCircle size='50' className='animate-spin' />
                </div>
            ) : (
                <div className='mx-20'>
                    {assignments &&
                        Array.isArray(assignments) &&
                        assignments.map(
                            (
                                assignment: any,
                                index: Key | null | undefined
                            ) => (
                                <div
                                    key={index}
                                    className='mt-4 px-5 py-2 border rounded'
                                >
                                    <h1 className='text-xl font-medium'>
                                        {assignment.title}
                                    </h1>
                                    <p className='text-gray-600 font-medium mt-2'>
                                        {assignment.description}
                                    </p>
                                </div>
                            )
                        )}
                    <div className='space-y-4 my-8'>
                        <h2 className='text-3xl font-semibold'>
                            Add new assignment
                        </h2>
                        <Input
                            type='text'
                            placeholder='Enter new assignment name*'
                            value={newAssignment}
                            onChange={(e) => setNewAssignment(e.target.value)}
                        />
                        <Textarea
                            value={assignmentDescription}
                            onChange={(e) =>
                                setAssignmentDescription(e.target.value)
                            }
                            placeholder='Assignment description*'
                        />
                        <Input
                            type='date'
                            placeholder='Assignment duedate*'
                            value={assignmentDate}
                            onChange={(e) => setAssignmentDate(e.target.value)}
                            className='w-fit'
                        />
                        <Button
                            disabled={assignmentSubmissionLoading}
                            onClick={handleSubmit}
                        >
                            Add assignment{" "}
                            {assignmentSubmissionLoading && (
                                <LoaderCircle
                                    size='20'
                                    className='animate-spin'
                                />
                            )}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

// Add description and date for due date and then let it submit. Make a post request and update the new assignment.

export default Dashboard;
