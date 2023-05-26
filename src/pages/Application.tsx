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
        </PageFrame>
    );
}

export default Application;