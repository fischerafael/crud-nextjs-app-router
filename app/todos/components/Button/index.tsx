"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { useFormStatus } from "react-dom";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  loading?: React.ReactNode;
}

export const Button = ({
  children,
  loading = <p>Loading...</p>,
  ...props
}: ButtonProps) => {
  const { pending: isLoading } = useFormStatus();

  return (
    <button {...props}>{isLoading ? <>{loading}</> : <>{children}</>}</button>
  );
};
