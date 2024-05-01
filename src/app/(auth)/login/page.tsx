"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ViewContainer } from "@/components/ui/view-container";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import axios from "axios";

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [route, setRoute] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = async () => {
        setIsLoading(true);
        if (!username || !password) {
            alert("Username and password are required.");
            setIsLoading(false);
            return;
        }
        try {
            const res = await axios.post("http://127.0.0.1:3001/login", {
                username,
                password,
            });
            console.log(res.data.dashboard);
            setRoute(res.data.dashboard);
            router.push(route);
        } catch (error) {
            alert("Invalid creds");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <ViewContainer className='min-h-dvh flex justify-center items-center'>
                <Card className='w-full max-w-sm'>
                    <CardHeader>
                        <CardTitle className='text-2xl'>Login</CardTitle>
                        <CardDescription>
                            Please enter your credentials to get started with
                            the app.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className='grid gap-4'>
                        <div className='grid gap-2'>
                            <Label htmlFor='username'>Username</Label>
                            <Input
                                id='username'
                                type='username'
                                placeholder='Username'
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className='grid gap-2'>
                            <Label htmlFor='password'>Password</Label>
                            <Input
                                id='password'
                                type='password'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Password'
                            />
                        </div>
                    </CardContent>
                    <CardFooter className='flex flex-col gap-3'>
                        <Button
                            className='w-full flex gap-4'
                            disabled={isLoading}
                            onClick={handleClick}
                            size='lg'
                        >
                            Sign in{" "}
                            {isLoading && (
                                <LoaderCircle className='animate-spin' />
                            )}
                        </Button>
                        <p>
                            Don&apos;t have an account? You can{" "}
                            <Link
                                href='/signup'
                                className='text-primary underline hover:no-underline'
                            >
                                signup
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </ViewContainer>
        </div>
    );
}
