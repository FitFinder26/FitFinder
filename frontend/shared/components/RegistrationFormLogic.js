// Storing data in registration forms
function updateFormVariables(e, prev) {
    const { name, value } = e.target;
    return{
        ...prev,
        [name]: value
    };
}

// signup logic
async function signup(e, formVariables) {
    e.preventDefault();
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Signing up with data:", formVariables);
}

// login logic
async function login(e, formVariables) {
    e.preventDefault();
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Logging in with data:", formVariables);
}

export { 
    updateFormVariables,
    login,
    signup
};
