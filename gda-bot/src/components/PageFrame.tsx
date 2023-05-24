import Stack from "react-bootstrap/Stack";

interface PageFrameProps
{
    title: string;
    description?: string;
    children?: JSX.Element | JSX.Element[] | string | never[];
}

const PageFrame = (props: PageFrameProps) =>
{
    return (
        <Stack direction="vertical">
            <h4 className="fw-bold mb-3">{props.title}</h4>
            {props.description && 
                <h5 className="text-light">{props.description}</h5>
            }

            {props.children}

            <div className="bg w-100 position-fixed bottom-0" style={{height:'30px'}}/>
        </Stack>
    );
}

export default PageFrame;