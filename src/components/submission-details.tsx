"use client";

import { LoaderCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type SubmissionProps = {
    sub: {
        assignment: {
            title?: String;
            description?: String;
        };
        answer: String;
        _id: String;
    };
};

const SubmissionDetails = ({ sub }: SubmissionProps) => {
    const router = useRouter();
    const [answer, setAnswer] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const res = await axios.post("http://127.0.0.1:3001/submission", {
                answer,
                id: sub._id,
            });
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
            alert("Submitted successfully. Please refresh the page.");
        }
    };
    return (
        <div>
            <div className='mt-4 px-5 py-2 border rounded'>
                <h1 className='text-xl font-medium'>{sub.assignment.title}</h1>
                <p className='text-gray-600 font-medium mt-2'>
                    {sub.assignment.description}
                </p>
                <textarea
                    className='w-full h-32 mt-4 px-4 py-2 border border-gray-300 rounded-lg'
                    readOnly={sub.answer == "" ? false : true}
                    value={sub.answer == "" ? answer : sub.answer.toString()}
                    onChange={(e) => setAnswer(e.target.value)}
                ></textarea>
                {sub.answer == "" && (
                    <Button onClick={handleSubmit}>
                        Submit
                        {isLoading && (
                            <LoaderCircle size='20' className='animate-spin' />
                        )}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default SubmissionDetails;
