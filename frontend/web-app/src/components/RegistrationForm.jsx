import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../providers/AuthProvider";
import { emailService } from "../../../shared/services/emailService";
import { Notifier } from "./Notifier";
import { Eye, EyeOff, User, Mail, Lock, Sparkles, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { HashLoader } from "react-spinners";

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
  const [errors, setErrors] = useState({
    emailAlreadyExist: false,
    wrongPassword: false,
    wrongCode: false,
  });

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
        setErrors(prev => ({ ...prev, emailAlreadyExist: true }));
        Notifier.notifyError(t("emailAlreadyExists"));
      } else if (data.status === 201) {
        emailService.sendWelcomeEmail(signupFormVariables.email, signupFormVariables.username).catch(() => {});
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
        setErrors(prev => ({ ...prev, wrongPassword: true }));
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
                setErrors(prev => ({ ...prev, wrongCode: true }));
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
    <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-12 overflow-hidden relative font-sans">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary rounded-full blur-[150px] animate-pulse [animation-delay:1s]" />
      </div>

      <Card className={cn(
        "w-full max-w-6xl rounded-[4rem] overflow-hidden border-none shadow-[0_50px_100px_rgba(0,0,0,0.2)] bg-background/60 backdrop-blur-3xl animate-in fade-in zoom-in duration-1000",
        "flex flex-col md:flex-row min-h-[750px] relative z-20"
      )}>
        
        {/* Branding/Infographic Panel */}
        <div className={cn(
            "md:w-[45%] bg-primary p-12 md:p-16 text-white flex flex-col justify-between relative overflow-hidden transition-all duration-1000 ease-in-out",
            usedForm === 'login' ? "md:order-last" : "md:order-first"
        )}>
             <div className="z-10 space-y-10">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-[1.5rem] flex items-center justify-center shadow-lg backdrop-blur-md">
                        <Sparkles size={32} />
                    </div>
                    <span className="font-black text-2xl tracking-tighter italic uppercase">FitFinder</span>
                </div>
                
                <div className="space-y-6">
                    <h2 className="text-5xl md:text-7xl font-black tracking-[-0.05em] uppercase italic leading-[0.85]">
                        {usedForm === 'signup' ? t("joinWithUs") : t("welcomeBack")}
                    </h2>
                    <p className="text-white/70 font-bold max-w-xs text-xl leading-relaxed italic border-l-4 border-white/20 pl-6">
                        {usedForm === 'signup' 
                          ? "Enter the next dimension of digital shopping with your AI personal stylist." 
                          : "Your curated style vault is waiting. Re-discover your look."}
                    </p>
                </div>
             </div>

             <div className="z-10 flex flex-col gap-6">
                <div className="flex items-center gap-2 text-white/40 font-black text-xs uppercase tracking-widest">
                    <ShieldCheck size={16} /> 256-Bit Encrypted Secure Access
                </div>
                <Button 
                    variant="ghost" 
                    className="w-fit text-white font-black uppercase tracking-[0.2em] p-0 h-auto gap-4 group hover:bg-transparent"
                    onClick={() => setUsedForm(usedForm === 'signup' ? 'login' : 'signup')}
                >
                    <span className="group-hover:translate-x-2 transition-transform text-2xl italic underline underline-offset-8 decoration-4">
                        {usedForm === 'signup' ? t("logIn") : t("signUp")}
                    </span>
                    <ChevronRight size={32} className="group-hover:translate-x-4 transition-transform text-white/50" />
                </Button>
             </div>

             {/* Dynamic background aesthetics */}
             <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
             <div className="absolute top-1/2 left-0 w-32 h-32 bg-secondary/30 rounded-full blur-2xl -translate-x-1/2" />
        </div>

        {/* Action Panel */}
        <CardContent className="md:w-[55%] p-10 md:p-20 flex flex-col justify-center bg-background/20">
            <div className="max-w-md mx-auto w-full space-y-12">
                
                {loginPhase === "login" && (
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <div className="space-y-3 text-center md:text-left">
                            <h3 className="text-5xl font-black tracking-tighter uppercase italic opacity-90">
                                {usedForm === 'signup' ? t("signUp") : t("logIn")}
                            </h3>
                            <div className="h-1.5 w-24 bg-primary rounded-full md:mx-0 mx-auto" />
                        </div>

                        <form onSubmit={usedForm === 'signup' ? handleSignup : handleLogin} className="space-y-8">
                            <div className="space-y-6">
                                {usedForm === 'signup' && (
                                    <div className="space-y-2 group">
                                        <Label htmlFor="reg-user" className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 ml-2 group-focus-within:opacity-100 group-focus-within:text-primary transition-all">{t("username")}</Label>
                                        <div className="relative">
                                            <User className="absolute left-5 top-5 text-muted-foreground opacity-30 group-focus-within:opacity-100 group-focus-within:text-primary transition-all" size={20} />
                                            <Input 
                                                id="reg-user"
                                                className="h-16 pl-14 rounded-2xl bg-muted/20 border-2 border-transparent focus:border-primary/20 font-bold text-lg"
                                                placeholder="style_icon_99"
                                                value={signupFormVariables.username}
                                                onChange={e => setSignupFormVariables(p => ({ ...p, username: e.target.value }))}
                                                required
                                            />
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-2 group">
                                    <Label htmlFor="reg-email" className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 ml-2 group-focus-within:opacity-100 group-focus-within:text-primary transition-all">{t("email")}</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-5 top-5 text-muted-foreground opacity-30 group-focus-within:opacity-100 group-focus-within:text-primary transition-all" size={20} />
                                        <Input 
                                            id="reg-email"
                                            type="email"
                                            className="h-16 pl-14 rounded-2xl bg-muted/20 border-2 border-transparent focus:border-primary/20 font-bold text-lg"
                                            placeholder="you@vogue.fm"
                                            value={usedForm === 'signup' ? signupFormVariables.email : loginFormVariables.email}
                                            onChange={e => usedForm === 'signup' ? setSignupFormVariables(p => ({ ...p, email: e.target.value })) : setLoginFormVariables(p => ({ ...p, email: e.target.value }))}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 group">
                                    <div className="flex justify-between items-end mb-1 px-2">
                                        <Label htmlFor="reg-pass" className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 group-focus-within:opacity-100 group-focus-within:text-primary transition-all">{t("password")}</Label>
                                        {usedForm === 'login' && (
                                            <button type="button" onClick={() => setLoginPhase("sendCode")} className="text-[9px] font-black uppercase tracking-widest text-primary hover:underline underline-offset-4">
                                                {t("forgotPassword")}?
                                            </button>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <Lock className="absolute left-5 top-5 text-muted-foreground opacity-30 group-focus-within:opacity-100 group-focus-within:text-primary transition-all" size={20} />
                                        <Input 
                                            id="reg-pass"
                                            type={passwordVisible ? "text" : "password"}
                                            className="h-16 pl-14 pr-14 rounded-2xl bg-muted/20 border-2 border-transparent focus:border-primary/20 font-bold text-lg"
                                            placeholder="••••••••"
                                            value={usedForm === 'signup' ? signupFormVariables.password : loginFormVariables.password}
                                            onChange={e => usedForm === 'signup' ? setSignupFormVariables(p => ({ ...p, password: e.target.value })) : setLoginFormVariables(p => ({ ...p, password: e.target.value }))}
                                            required
                                        />
                                        <Button 
                                            type="button" 
                                            variant="ghost" 
                                            size="icon" 
                                            className="absolute right-3 top-3 hover:bg-transparent text-muted-foreground opacity-30 hover:opacity-100"
                                            onClick={() => setPasswordVisible(!passwordVisible)}
                                        >
                                            {passwordVisible ? <EyeOff size={22} /> : <Eye size={22} />}
                                        </Button>
                                    </div>
                                </div>

                                {usedForm === 'signup' && (
                                    <div className="space-y-2 group animate-in fade-in duration-500">
                                        <Label htmlFor="reg-confirm" className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 ml-2 group-focus-within:opacity-100 group-focus-within:text-primary transition-all">{t("confirmPassword")}</Label>
                                        <div className="relative">
                                            <Lock className="absolute left-5 top-5 text-muted-foreground opacity-30 group-focus-within:opacity-100 group-focus-within:text-primary transition-all" size={20} />
                                            <Input 
                                                id="reg-confirm"
                                                type={passwordVisible ? "text" : "password"}
                                                className="h-16 pl-14 rounded-2xl bg-muted/20 border-2 border-transparent focus:border-primary/20 font-bold text-lg"
                                                placeholder="••••••••"
                                                value={signupFormVariables.confirmPassword}
                                                onChange={e => setSignupFormVariables(p => ({ ...p, confirmPassword: e.target.value }))}
                                                required
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Button 
                                type="submit" 
                                disabled={disabled}
                                className="w-full h-20 rounded-[2rem] bg-primary text-white font-black text-2xl uppercase tracking-[0.2em] shadow-[0_20px_50px_rgba(250,88,126,0.3)] hover:scale-[1.02] active:scale-95 transition-all"
                            >
                                {disabled ? <HashLoader size={30} color="#fff" /> : (usedForm === 'signup' ? t("signUp") : t("logIn"))}
                            </Button>
                        </form>
                    </div>
                )}

                {loginPhase !== "login" && (
                    <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-700 text-center md:text-left">
                        <div className="space-y-4">
                            <Button variant="ghost" className="p-0 font-black uppercase text-[10px] tracking-widest hover:bg-transparent opacity-40 hover:opacity-100" onClick={() => setLoginPhase("login")}>
                                ← {tCommon("back")}
                            </Button>
                            <h3 className="text-4xl font-black uppercase tracking-tighter italic">Reset Access</h3>
                            <div className="h-1.5 w-16 bg-primary rounded-full md:mx-0 mx-auto" />
                        </div>

                        <form onSubmit={handleForgotPassword} className="space-y-8">
                             {loginPhase === "sendCode" && (
                                <div className="space-y-6">
                                    <p className="text-muted-foreground font-bold leading-relaxed">{t("forgotPrompt") || "Enter your registered email to receive a secure access code."}</p>
                                    <div className="space-y-2 group">
                                        <Label className="text-[10px] font-black uppercase tracking-widest opacity-30">{t("email")}</Label>
                                        <Input 
                                            type="email"
                                            className="h-16 px-6 rounded-2xl bg-muted/20 font-bold text-lg"
                                            placeholder="you@style.com"
                                            value={forgotPasswordVariables.email}
                                            onChange={e => setForgotPasswordVariables(p => ({ ...p, email: e.target.value }))}
                                            required
                                        />
                                    </div>
                                </div>
                             )}

                             {loginPhase === "verifyCode" && (
                                <div className="space-y-6">
                                    <p className="text-muted-foreground font-bold leading-relaxed">{t("codeInstruction")}</p>
                                    <Input 
                                        className="h-20 text-center text-5xl font-black tracking-[0.5em] rounded-[2rem] bg-primary/5 uppercase"
                                        maxLength={6}
                                        value={forgotPasswordVariables.code}
                                        onChange={e => setForgotPasswordVariables(p => ({ ...p, code: e.target.value }))}
                                        required
                                    />
                                </div>
                             )}

                             {loginPhase === "updatePassword" && (
                                <div className="space-y-6">
                                    <p className="text-muted-foreground font-bold leading-relaxed">Secure your style profile with a new powerful passphrase.</p>
                                    <Input 
                                        type="password"
                                        className="h-16 px-6 rounded-2xl bg-muted/20 font-bold text-lg"
                                        placeholder="New Password"
                                        value={forgotPasswordVariables.password}
                                        onChange={e => setForgotPasswordVariables(p => ({ ...p, password: e.target.value }))}
                                        required
                                    />
                                    <Input 
                                        type="password"
                                        className="h-16 px-6 rounded-2xl bg-muted/20 font-bold text-lg"
                                        placeholder="Confirm New Password"
                                        pattern={forgotPasswordVariables.password}
                                        required
                                    />
                                </div>
                             )}

                             <Button className="w-full h-20 rounded-[2rem] bg-black text-white font-black text-xl uppercase tracking-widest hover:bg-primary transition-colors duration-500">
                                {loginPhase === "sendCode" ? t("sendCode") : loginPhase === "verifyCode" ? t("verifyCode") : t("updatePassword")}
                             </Button>
                        </form>
                    </div>
                )}

                <div className="flex items-center gap-6 py-4">
                    <div className="h-px flex-1 bg-border/20" />
                    <div className="text-[10px] font-black uppercase tracking-[0.5em] opacity-10">AUTHENTICATION SERVICE</div>
                    <div className="h-px flex-1 bg-border/20" />
                </div>

                <div className="text-center opacity-40 hover:opacity-100 transition-opacity">
                    <p className="text-[10px] font-black uppercase tracking-widest italic">
                        By continuing, you agree to our Terms of Sytle and Privacy Policy.
                    </p>
                </div>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
