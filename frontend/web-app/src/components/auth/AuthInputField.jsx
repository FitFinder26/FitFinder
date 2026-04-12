import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const AuthInputField = ({ 
    id, 
    label, 
    icon: Icon, 
    type = "text", 
    placeholder, 
    value, 
    onChange, 
    required = true,
    children, 
    className,
    layoutId,
    ...props
}) => {
    return (
        <motion.div 
            layoutId={layoutId}
            className={cn("space-y-2 group", className)}
        >
            <Label 
                htmlFor={id} 
                className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 ml-2 group-focus-within:opacity-100 group-focus-within:text-primary transition-all"
            >
                {label}
            </Label>
            <div className="relative">
                {Icon && (
                    <Icon 
                        className="absolute left-4 top-4 text-muted-foreground opacity-30 group-focus-within:opacity-100 group-focus-within:text-primary transition-all" 
                        size={16} 
                    />
                )}
                <Input 
                    id={id}
                    type={type}
                    dir="ltr"
                    className={cn(
                        "h-12 rounded-xl bg-muted/20 border-2 border-transparent focus:border-primary/20 font-bold text-sm text-left",
                        Icon ? "pl-12" : "px-4",
                        children ? "pr-12" : ""
                    )}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    {...props}
                />
                {children}
            </div>
        </motion.div>
    );
};

export default AuthInputField;
