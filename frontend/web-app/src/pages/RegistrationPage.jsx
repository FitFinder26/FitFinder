import RegistrationForm from "../components/RegistrationForm";
import { useState } from "react";

export default function RegistrationPage() {
    const [usedForm, setUsedForm] = useState('signup');
    return (
        <div>
            <RegistrationForm usedForm={usedForm} setUsedForm={setUsedForm} />
        </div>
    );
}