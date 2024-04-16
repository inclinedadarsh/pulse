import SessionsList from "@/components/sessions-list";
import { CREATED_SESSIONS, JOINED_SESSIONS } from "@/constants";

const Dashboard = () => {
    return (
        <div className='space-y-10 mt-20'>
            <SessionsList
                title='Your joined sessions'
                link='#'
                sessions={JOINED_SESSIONS}
                ctaBtn="Join new"
            />
            <SessionsList title='Your created sessions' link='#' sessions={CREATED_SESSIONS} ctaBtn="Create new"/>
        </div>
    );
};

export default Dashboard;
