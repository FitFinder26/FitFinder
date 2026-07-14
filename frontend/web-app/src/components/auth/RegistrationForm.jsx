import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "@/providers/AuthProvider";
import { emailService } from "@shared/services/emailService";
import { Notifier } from "@/components/Notifier";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "@/locales/namespaces";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// Atomic Components
import BrandingPanel from "./BrandingPanel";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ResetPasswordFlow from "./ResetPasswordFlow";

export default function RegistrationForm({
    usedForm,
    setUsedForm,
    setNavigationBlocked,
}) {
    const { t } = useTranslation(NAMESPACES.auth);
    const { t: tCommon } = useTranslation(NAMESPACES.common);
    const [signupFormVariables, setSignupFormVariables] = useState({ username: '', email: '', password: '', confirmPassword: '' });
    const [loginFormVariables, setLoginFormVariables] = useState({ email: '', password: '' });
    const [forgotPasswordVariables, setForgotPasswordVariables] = useState({ email: '', code: '', password: '', confirmPassword: '' });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [loginPhase, setLoginPhase] = useState("login");
    const [serverCode, setServerCode] = useState("");

    const { login, signup, sendCode, updatePassword } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        setLoginPhase("login");
    }, [usedForm]);

    const handleSignup = async (e) => {
        e.preventDefault();
        if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};:\\|,.<>/?]).{8,64}$/.test(signupFormVariables.password)) {
            Notifier.notifyError(t("passwordValidationError"));
            return;
        }
        if (signupFormVariables.password !== signupFormVariables.confirmPassword) {
            Notifier.notifyError(t("passwordsMustMatch"));
            return;
        }

        setDisabled(true);
        setNavigationBlocked(true);

        try {
            const data = await signup(signupFormVariables.username, signupFormVariables.email, signupFormVariables.password);
            if (data.status === 409) {
                Notifier.notifyError(t("emailAlreadyExists"));
            } else if (data.status === 201) {
                emailService.sendWelcomeEmail(signupFormVariables.email, signupFormVariables.username).catch(() => { });
                navigate("/", { state: { cameFrom: "signup" } });
                Notifier.notifySuccess(t("welcomeToApp", { appName: tCommon("appName") }));
            } else throw new Error(data.status);
        } catch (error) {
            Notifier.notifyError(t("signupFailed"));
        } finally {
            setDisabled(false);
            setNavigationBlocked(false);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setNavigationBlocked(true);

        try {
            const data = await login(loginFormVariables.email, loginFormVariables.password);
            if (data.status === 422) {
                Notifier.notifyError(t("passwordNotCorrect"));
            } else if (data.status === 200) {
                Notifier.notifySuccess(t("welcomeBackMessage"));
                navigate("/", { state: { cameFrom: "login" } });
            } else throw new Error(data.status);
        } catch (error) {
            Notifier.notifyError(t("loginFailed"));
        } finally {
            setDisabled(false);
            setNavigationBlocked(false);
        }
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setDisabled(true);
        try {
            if (loginPhase === "sendCode") {
                const data = await sendCode(forgotPasswordVariables.email);
                if (data.status === 200) {
                    const body = await data.json();
                    setServerCode(body.code);
                    setLoginPhase("verifyCode");
                    Notifier.notifySuccess(t("verificationCodeSent"));
                } else throw new Error();
            } else if (loginPhase === "verifyCode") {
                if (forgotPasswordVariables.code === serverCode) {
                    setLoginPhase("updatePassword");
                } else {
                    Notifier.notifyError(t("wrongCodeNote"));
                }
            } else if (loginPhase === "updatePassword") {
                const data = await updatePassword(forgotPasswordVariables.email, forgotPasswordVariables.password);
                if (data.status === 200) {
                    setLoginPhase("login");
                    setUsedForm("login");
                    Notifier.notifySuccess(t("passwordUpdatedSuccess"));
                } else throw new Error();
            }
        } catch (err) {
            Notifier.notifyError(tCommon("error"));
        } finally {
            setDisabled(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-12 pt-32 md:pt-40 overflow-hidden relative font-sans">
            {/* Background aesthetics */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary rounded-full blur-[150px] animate-pulse [animation-delay:1s]" />
            </div>

            <Card className={cn(
                "w-full max-w-5xl rounded-[3rem] overflow-hidden border-none shadow-[0_50px_100px_rgba(0,0,0,0.15)] bg-background/60 backdrop-blur-3xl animate-in fade-in zoom-in duration-1000",
                "flex flex-col md:flex-row min-h-[600px] relative z-20"
            )}>

                <BrandingPanel
                    usedForm={usedForm}
                    toggleForm={() => setUsedForm(usedForm === 'signup' ? 'login' : 'signup')}
                    t={t}
                />

                <CardContent 
                    className="md:w-[55%] p-8 md:p-14 flex flex-col justify-center bg-background/20"
                    style={{ perspective: "1200px" }}
                >
                    <div className="max-w-sm mx-auto w-full space-y-8" style={{ transformStyle: "preserve-3d" }}>

                        <AnimatePresence>
                            {loginPhase === "login" ? (
                                <motion.div
                                    key={usedForm}
                                    initial={{ opacity: 0, rotateY: 80, perspective: 1000 }}
                                    animate={{ opacity: 1, rotateY: 0, perspective: 1000 }}
                                    exit={{ opacity: 0, rotateY: -80, perspective: 1000 }}
                                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                    className="space-y-8"
                                    style={{ backfaceVisibility: "hidden" }}
                                >
                                    <div className="space-y-2 text-center md:text-left">
                                        <h3 className="text-4xl text-start font-black tracking-tighter uppercase italic opacity-90">
                                            {usedForm === 'signup' ? t("signUp") : t("logIn")}
                                        </h3>
                                        <div className="h-1.5 w-24 bg-primary rounded-full md:mx-0 mx-auto" />
                                    </div>

                                    {usedForm === 'signup' ? (
                                        <SignupForm
                                            variables={signupFormVariables}
                                            setVariables={setSignupFormVariables}
                                            handleSubmit={handleSignup}
                                            passwordVisible={passwordVisible}
                                            setPasswordVisible={setPasswordVisible}
                                            disabled={disabled}
                                            t={t}
                                        />
                                    ) : (
                                        <LoginForm
                                            variables={loginFormVariables}
                                            setVariables={setLoginFormVariables}
                                            handleSubmit={handleLogin}
                                            passwordVisible={passwordVisible}
                                            setPasswordVisible={setPasswordVisible}
                                            setLoginPhase={setLoginPhase}
                                            disabled={disabled}
                                            t={t}
                                        />
                                    )}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="reset-password"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ResetPasswordFlow
                                        loginPhase={loginPhase}
                                        setLoginPhase={setLoginPhase}
                                        variables={forgotPasswordVariables}
                                        setVariables={setForgotPasswordVariables}
                                        handleSubmit={handleForgotPassword}
                                        passwordVisible={passwordVisible}
                                        setPasswordVisible={setPasswordVisible}
                                        t={t}
                                        tCommon={tCommon}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="flex items-center gap-6 py-4">
                            <div className="h-px flex-1 bg-border/20" />
                            <div className="text-[10px] font-black uppercase tracking-[0.5em] opacity-10">{t("authService")}</div>
                            <div className="h-px flex-1 bg-border/20" />
                        </div>

                        <div className="text-center opacity-40 hover:opacity-100 transition-opacity">
                            <p className="text-[10px] font-black uppercase tracking-widest italic group">
                                {t("legalAgreementStart")} 
                                <Link to="/terms-of-service" className="text-primary hover:underline hover:opacity-100 transition-all mx-1">{t("termsOfStyle")}</Link>
                                {t("and")}
                                <Link to="/privacy-policy" className="text-primary hover:underline hover:opacity-100 transition-all mx-1">{t("privacyPolicy")}</Link>
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
