type month =
    | "Jan"
    | "Feb"
    | "Mar"
    | "Apr"
    | "May"
    | "June"
    | "July"
    | "Aug"
    | "Sept"
    | "Oct"
    | "Nov"
    | "Dec";

export type SessionType = {
    title: string;
    isLive: boolean;
    description: string;
    startMonth: month;
    endMonth: month;
    id: string;
};

export interface SessionsListProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    link: string;
    ctaBtn: string;
    sessions: SessionType[];
    dashboard: string;
}

type SubmissionType = {
    assignment: {
        title?: String;
        description?: String;
    };
    answer: String;
    _id: String;
};

export interface ProjectDetailsProps
    extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    description: string;
    team: { name: string }[];
    submission: SubmissionType[];
}
