import type { ComponentPropsWithoutRef, FormEvent, SyntheticEvent } from "react";

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value:unknown) => void;
};
const Form = ({onSave, children, ...otherProps}:FormProps) => {
    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData);
        onSave(data)
    };    
    return (<form onSubmit={handleOnSubmit} {...otherProps}>{children}</form>)
};

export default Form;