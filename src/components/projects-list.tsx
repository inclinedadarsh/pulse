import Link from "next/link";
import { ViewContainer } from "./ui/view-container";
import { ProjectsListProps } from "@/types";
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

const Projects = ({ title, link, projects, ctaBtn }: ProjectsListProps) => {
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
                    {projects.map((project, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{project.name}</CardTitle>
                            </CardHeader>
                            <CardContent>{project.description}</CardContent>
                            <CardFooter>
                                <Link href='#' className={cn(buttonVariants())}>
                                    View project{" "}
                                    <ArrowUpRight size={20} strokeWidth={1.5} />
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </ViewContainer>
        </section>
    );
};

export default Projects;
