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

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router.push("/dashboard");
        }, 4000);
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
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                id='email'
                                type='email'
                                placeholder='m@example.com'
                                required
                            />
                        </div>
                        <div className='grid gap-2'>
                            <Label htmlFor='password'>Password</Label>
                            <Input id='password' type='password' required />
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
