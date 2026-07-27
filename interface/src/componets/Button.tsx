import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariants = "primary" | "secondary" | "outline" | "sucess" | "danger";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariants;
    fullWidth?: boolean;
    isLoading?: boolean;
}

const Button = ({
    children,
    variant = "primary",
    fullWidth = false,
    isLoading = false,
    className,
    disabled,
    ...rest
}: ButtonProps) =>{
    <div>
        <button type="button">Click aqui</button>
    </div>
}

export default Button