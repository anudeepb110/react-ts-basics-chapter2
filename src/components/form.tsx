import { useImperativeHandle, useRef, type Ref, type ComponentPropsWithoutRef, type FormEvent, type SyntheticEvent, type RefObject } from "react";

export type FormHandle = {
  clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
    ref?: Ref<FormHandle>
};
const Form = ({ onSave, children, ref, ...otherProps }: FormProps) => {
    const form = useRef<HTMLFormElement>(null);
    useImperativeHandle(ref, () => {
        return {clear(){
            console.log('CLEARING')
            form.current?.reset();
        }}
    });
    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData);
        onSave(data)
    };
    return (<form onSubmit={handleOnSubmit} {...otherProps} ref={form}>{children}</form>)
};

export default Form;