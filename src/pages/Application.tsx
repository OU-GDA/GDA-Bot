import { useState } from "react";
import InputField from "../components/InputField";
import PageFrame from "../components/PageFrame";

const Application = () =>
{
    const [token, setToken] = useState<string>('');
    const [appID, setAppID] = useState<string>('');

    return (
        <PageFrame
            title="Application Overview"
            description="View and edit core application configuration values!"
        >
            <InputField
                label={"Bot Token"}
                placeholder="Enter Token..."
                onEdit={setToken}
            />
            <InputField
                label={"Application ID"}
                placeholder="Enter App ID..."
                onEdit={setAppID}
            />
        </PageFrame>
    );
}

export default Application;