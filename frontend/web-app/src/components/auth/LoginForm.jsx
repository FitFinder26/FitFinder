import React from "react";
import { Button } from "@/components/ui/button";
import { HashLoader } from "react-spinners";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import AuthInputField from "./AuthInputField";
import { motion } from "framer-motion";

const LoginForm = ({ 
    variables, 
    setVariables, 
    handleSubmit, 
    passwordVisible, 
    setPasswordVisible, 
    setLoginPhase, 
    disabled, 
    t 
}) => {
    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
                <AuthInputField
                    id="login-email"
                    label={t("email")}
                    type="email"
                    icon={Mail}
                    placeholder="you@vogue.fm"
                    value={variables.email}
                    onChange={e => setVariables(p => ({ ...p, email: e.target.value }))}
                    layoutId="auth-email"
                />

                    <AuthInputField
                        id="login-pass"
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
                        <button 
                            type="button" 
                            onClick={() => setLoginPhase("sendCode")} 
                            className="absolute -bottom-6 right-2 text-[9px] font-black uppercase tracking-widest text-primary hover:underline underline-offset-4 opacity-50 hover:opacity-100 transition-all"
                        >
                            {t("forgotPassword")}?
                        </button>
                    </AuthInputField>
                </div>

            <motion.div layoutId="auth-submit">
                <Button 
                    type="submit" 
                    disabled={disabled}
                    className="w-full h-14 rounded-xl bg-primary text-white font-black text-lg uppercase tracking-[0.2em] shadow-[0_15px_30px_rgba(250,88,126,0.2)] hover:scale-[1.02] active:scale-95 transition-all mt-4"
                >
                    {disabled ? <HashLoader size={30} color="#fff" /> : t("logIn")}
                </Button>
            </motion.div>
        </form>
    );
};

export default LoginForm;
