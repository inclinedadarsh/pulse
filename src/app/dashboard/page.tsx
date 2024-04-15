import SessionsList from "@/components/sessions-list";
import { JOINED_SESSIONS } from "@/constants";

const Dashboard = () => {
    return (
        <div>
            <SessionsList
                title='Your created sessions'
                link='#'
                sessions={JOINED_SESSIONS}
            />
        </div>
    );
};

export default Dashboard;
