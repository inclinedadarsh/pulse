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
