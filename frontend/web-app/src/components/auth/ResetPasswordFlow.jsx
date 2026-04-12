import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthInputField from "./AuthInputField";
import { Lock, Eye, EyeOff, ChevronRight, ChevronLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const ResetPasswordFlow = ({
    loginPhase,
    setLoginPhase,
    variables,
    setVariables,
    handleSubmit,
    passwordVisible,
    setPasswordVisible,
    t,
    tCommon
}) => {
    const { i18n } = useTranslation();
    const isRTL = i18n.dir() === "rtl";

    return (
        <div
            dir={i18n.dir()}
            className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-700 text-center md:text-start"
        >
            <div className="space-y-4">
                <div className="flex justify-start">
                    <Button
                        variant="ghost"
                        className="p-0 font-black uppercase text-[10px] tracking-widest hover:bg-transparent opacity-40 hover:opacity-100 flex items-center gap-2"
                        onClick={() => setLoginPhase("login")}
                    >
                        {isRTL ? (
                            <>
                                <ChevronRight size={24} />
                            </>
                        ) : (
                            <>
                                <ChevronLeft size={24} />
                            </>
                        )} {tCommon("back")}
                    </Button>
                </div>
                <h3 className={cn(
                    "text-3xl font-black uppercase tracking-tighter italic",
                    i18n.language === "ar" ? "text-right" : "text-left"
                )}>
                    {t("resetAccess")}
                </h3>
                <div className="h-1 w-12 bg-primary rounded-full md:mx-0 mx-auto" />
            </div>

            <form dir={i18n.dir()} onSubmit={handleSubmit} className="space-y-8">
                {loginPhase === "sendCode" && (
                    <div className="space-y-6">
                        <p className="text-muted-foreground font-bold leading-relaxed">
                            {t("forgotPrompt")}
                        </p>
                        <AuthInputField
                            label={t("email")}
                            type="email"
                            placeholder="you@style.com"
                            dir="ltr"
                            value={variables.email}
                            onChange={e => setVariables(p => ({ ...p, email: e.target.value }))}
                        />
                    </div>
                )}

                {loginPhase === "verifyCode" && (
                    <div className="space-y-6">
                        <p className="text-muted-foreground font-bold leading-relaxed">{t("codeInstruction")}</p>
                        <Input
                            className="h-16 text-center text-4xl font-black tracking-[0.4em] rounded-xl bg-primary/5 uppercase"
                            maxLength={6}
                            value={variables.code}
                            onChange={e => setVariables(p => ({ ...p, code: e.target.value }))}
                            required
                        />
                    </div>
                )}

                {loginPhase === "updatePassword" && (
                    <div className="space-y-6">
                        <p className="text-muted-foreground font-bold leading-relaxed">{t("resetPrompt")}</p>
                        <AuthInputField
                            label={t("newPassword")}
                            id="new-pass"
                            type={passwordVisible ? "text" : "password"}
                            icon={Lock}
                            placeholder={t("newPassword")}
                            value={variables.password}
                            onChange={e => setVariables(p => ({ ...p, password: e.target.value }))}
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
                            label={t("confirmPassword")}
                            id="confirm-new-pass"
                            type={passwordVisible ? "text" : "password"}
                            icon={Lock}
                            placeholder={t("confirmPassword")}
                            value={variables.confirmPassword}
                            onChange={e => setVariables(p => ({ ...p, confirmPassword: e.target.value }))}
                            required
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
                )}

                <Button className="w-full h-14 rounded-xl bg-black text-white font-black text-lg uppercase tracking-widest hover:bg-primary transition-colors duration-500">
                    {loginPhase === "sendCode" ? t("sendCode") : loginPhase === "verifyCode" ? t("verifyCode") : t("updatePassword")}
                </Button>
            </form>
        </div>
    );
};

export default ResetPasswordFlow;
