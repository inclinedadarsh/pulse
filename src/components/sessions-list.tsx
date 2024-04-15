import Link from "next/link";
import { ViewContainer } from "./ui/view-container";
import { SessionsListProps } from "@/types";
import { ArrowUpRight } from "lucide-react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const SessionsList = ({ title, link, sessions }: SessionsListProps) => {
    return (
        <section>
            <ViewContainer>
                <div className='flex justify-between'>
                    <h2 className='text-3xl font-semibold'>{title}</h2>
                    <Link
                        href={`/${link}`}
                        className={cn(buttonVariants({ variant: "ghost" }))}
                    >
                        View all <ArrowUpRight size={20} strokeWidth={1.5} />
                    </Link>
                </div>
                <div className='flex flex-cols-1 md:flex-cols-3 gap-8'>
                    {sessions.map((session, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{session.title}</CardTitle>
                            </CardHeader>
                            <CardContent>{session.description}</CardContent>
                            <CardFooter>
                                <Link
                                    href={`/sessions/${session.id}`}
                                    className={cn(
                                        buttonVariants({ variant: "outline" })
                                    )}
                                >
                                    Check out session
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </ViewContainer>
        </section>
    );
};

export default SessionsList;
