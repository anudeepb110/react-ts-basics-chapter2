import type { ComponentPropsWithoutRef, Ref } from "react";

type InputProps = {
    label: string;
    id: string;
    ref?: Ref<HTMLInputElement>
} & ComponentPropsWithoutRef<'input'>;
export default function Input({ label, id,ref, ...props }: InputProps) {
    return (<p>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props} />
    </p>)
};
