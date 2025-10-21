export const SAMService = {
    segment: async (formData) => {
        const data = await fetch("http://localhost:8000/segment", {
            method: "POST",
            body: formData,
            });
        return data;
      },
    sendSegments: async(selectedSegments) => {
        const data = await fetch("http://localhost:8000/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ selectedSegments }),
            });
        return data;
    }
}