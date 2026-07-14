import { useLocation, useOutletContext } from "react-router-dom";
import RegistrationForm from "@/components/auth/RegistrationForm";
import { useEffect, useState } from "react";

export default function RegistrationPage() {
    const location = useLocation();
    const initialForm = location.state?.form || 'signup';
    const [usedForm, setUsedForm] = useState(initialForm);
    const { setNavigationBlocked } = useOutletContext();
    useEffect(() => {
        setUsedForm(location.state?.form);
    }, [location.state]);

    return (
        <div>
            <RegistrationForm usedForm={usedForm} setUsedForm={setUsedForm} setNavigationBlocked={setNavigationBlocked} />
        </div>
    );
}