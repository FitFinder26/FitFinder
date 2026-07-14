import React from "react";
import { Button } from "@/components/ui/button";
import { HashLoader } from "react-spinners";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import AuthInputField from "./AuthInputField";
import { motion } from "framer-motion";

const SignupForm = ({ 
    variables, 
    setVariables, 
    handleSubmit, 
    passwordVisible, 
    setPasswordVisible, 
    disabled, 
    t 
}) => {
    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
                <AuthInputField
                    id="reg-user"
                    label={t("username")}
                    icon={User}
                    placeholder="style_icon_99"
                    value={variables.username}
                    onChange={e => setVariables(p => ({ ...p, username: e.target.value }))}
                />

                <AuthInputField
                    id="reg-email"
                    label={t("email")}
                    type="email"
                    icon={Mail}
                    placeholder="you@vogue.fm"
                    value={variables.email}
                    onChange={e => setVariables(p => ({ ...p, email: e.target.value }))}
                    layoutId="auth-email"
                />

                <AuthInputField
                    id="reg-pass"
                    label={t("password")}
                    type={passwordVisible ? "text" : "password"}
                    icon={Lock}
                    placeholder="••••••••"
                    value={variables.password}
                    onChange={e => setVariables(p => ({ ...p, password: e.target.value }))}
                    layoutId="auth-password"
                >
                    <Button 
                        type="button" 
                        variant="ghost" 
                        size="icon" 
                        className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent text-muted-foreground opacity-30 hover:opacity-100 h-8 w-8"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                        {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                    </Button>
                </AuthInputField>

                <AuthInputField
                    id="reg-confirm"
                    label={t("confirmPassword")}
                    type={passwordVisible ? "text" : "password"}
                    icon={Lock}
                    placeholder="••••••••"
                    value={variables.confirmPassword}
                    onChange={e => setVariables(p => ({ ...p, confirmPassword: e.target.value }))}
                >
                    <Button 
                        type="button" 
                        variant="ghost" 
                        size="icon" 
                        className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent text-muted-foreground opacity-30 hover:opacity-100 h-8 w-8"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                        {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                    </Button>
                </AuthInputField>
            </div>

            <motion.div layoutId="auth-submit">
                <Button 
                    type="submit" 
                    disabled={disabled}
                    className="w-full h-14 rounded-xl bg-primary text-white font-black text-lg uppercase tracking-[0.2em] shadow-[0_15px_30px_rgba(250,88,126,0.2)] hover:scale-[1.02] active:scale-95 transition-all mt-4"
                >
                    {disabled ? <HashLoader size={30} color="#fff" /> : t("signUp")}
                </Button>
            </motion.div>
        </form>
    );
};

export default SignupForm;
