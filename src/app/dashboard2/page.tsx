"use client";
import SessionsList from "@/components/sessions-list";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [sessions, setSessions] = useState(null);
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const res = await axios.get("http://127.0.0.1:3001/session");
                setSessions(res.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='space-y-10 mt-20'>
            {isLoading ? (
                <div className='flex justify-center items-center'>
                    <LoaderCircle size='50' className='animate-spin' />
                </div>
            ) : (
                sessions && (
                    <SessionsList
                        sessions={sessions}
                        title='Created sessions'
                        ctaBtn='Create new session'
                        link='#'
                        dashboard='dashboard2'
                    />
                )
            )}
        </div>
    );
};

export default Dashboard;
