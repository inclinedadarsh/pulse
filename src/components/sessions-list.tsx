import Link from "next/link";
import { ViewContainer } from "./ui/view-container";
import { SessionsListProps } from "@/types";
import { ArrowUpRight } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Badge } from "./ui/badge";

const SessionsList = ({
    title,
    link,
    sessions,
    ctaBtn,
    dashboard,
}: SessionsListProps) => {
    return (
        <section className=''>
            <ViewContainer>
                <div className='flex justify-between items-center'>
                    <h2 className='text-3xl font-semibold my-6'>{title}</h2>
                    <div className='space-x-4'>
                        <Link
                            href={`/${link}`}
                            className={cn(buttonVariants({ variant: "ghost" }))}
                        >
                            View all{" "}
                            <ArrowUpRight size={20} strokeWidth={1.5} />
                        </Link>
                        <Link
                            href={`/${link}`}
                            className={cn(
                                buttonVariants({ variant: "default" })
                            )}
                        >
                            {ctaBtn}{" "}
                            <ArrowUpRight size={20} strokeWidth={1.5} />
                        </Link>
                    </div>
                </div>
                <div className='flex flex-cols-1 md:flex-cols-3 gap-8'>
                    {sessions.map((session, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>
                                    {session.title}
                                    <Badge
                                        className='block w-fit mt-2'
                                        variant={
                                            session.isLive
                                                ? "default"
                                                : "outline"
                                        }
                                    >
                                        {session.isLive ? "Live" : "Over"}
                                    </Badge>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {session.description}
                                <br />
                                <span className='text-gray-500 tracking-wide font-medium text-sm mt-1'>
                                    {session.startMonth} - {session.endMonth}
                                </span>
                            </CardContent>
                            <CardFooter>
                                <Link
                                    href={
                                        dashboard == "dashboard1"
                                            ? "/dashboard1/project"
                                            : "dashboard2/session"
                                    }
                                    className={cn(
                                        buttonVariants({
                                            variant: session.isLive
                                                ? "default"
                                                : "secondary",
                                        })
                                    )}
                                >
                                    {session.isLive
                                        ? "Check session"
                                        : "Check report"}
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
