import { useState } from "react";
import InputField from "../components/InputField";
import PageFrame from "../components/PageFrame";
import Button from "react-bootstrap/Button";

const Application = () =>
{
    const [token, setToken] = useState<string>('');
    const [appID, setAppID] = useState<string>('');
    const [serverID, setServerID] = useState<string>('');

    const LaunchBot = () =>
    {
        
    }

    return (
        <PageFrame
            title="Application Overview"
            description="View and edit core application configuration values!"
        >
            <InputField
                label={"Bot Token"}
                description="The Discord bot application token. Note that this should be made private and may be changed often."
                defaultValue={token}
                onEdit={setToken}
            />
            <InputField
                label={"Application ID"}
                description="The constant Discord application ID."
                defaultValue={appID}
                onEdit={setAppID}
            />
            <InputField
                label={"Server ID"}
                description="The current server for the active instance of the bot."
                defaultValue={serverID}
                onEdit={setServerID}
            />

            <Button onClick={LaunchBot}>
                Launch
            </Button>
        </PageFrame>
    );
}

export default Application;