import Form from "react-bootstrap/Form";

interface InputFieldProps
{
    label: string;
    description?: string;
    placeholder?: string;
    defaultValue?: string;
    onEdit?: (value: string) => void;
}

const InputField = (props: InputFieldProps) =>
{
    return (
        <>
            <small className="text-uppercase mb-1 fw-bold">{props.label}</small>
            {props.description && <small className="text-light">{props.description}</small>}
            <Form.Control
                className="bg-dark-gray border-heavy mt-2 mb-3 text-white"
                defaultValue={props.defaultValue}
                placeholder={props.placeholder}
                onChange={(event) => {
                    if (props.onEdit)
                    {
                        props.onEdit(event.currentTarget.value);
                    }
                }}
            />
        </>
    );
}

export default InputField;