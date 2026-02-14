import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95 duration-200",
    {
        variants: {
            variant: {
                default: "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90",
                destructive: "bg-accent text-white shadow-lg shadow-accent/25 hover:bg-accent/90",
                outline: "border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md",
                secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md",
                ghost: "hover:bg-white/10 text-gray-300 hover:text-white",
                link: "text-primary underline-offset-4 hover:underline",
                neon: "bg-primary text-white shadow-[0_0_20px_rgba(112,0,255,0.4)] border border-primary/50 hover:shadow-[0_0_30px_rgba(112,0,255,0.6)] hover:bg-primary/90",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 px-4 text-xs",
                lg: "h-14 px-8 text-base",
                icon: "h-11 w-11",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const Comp = asChild ? "span" : "button" // Assuming Slot if we had it, but keeping logic stub for now
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
