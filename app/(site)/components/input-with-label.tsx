import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputWithLabelProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    // register: UseFormRegister<FieldValues>;
    // errors: FieldErrors;
    disabled?: boolean;
    placeholder: string;
}

export function InputWithLabel({ id, label, type, placeholder, disabled }: InputWithLabelProps) {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor={id}>{label}</Label>
            <Input type={type} id={id} placeholder={placeholder} disabled={disabled} />
        </div>
    )
}
