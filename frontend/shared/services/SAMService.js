export const SAMService = {
    segment: async (formData, selectedPoints, deselectedPoints) => {
        const data = await fetch("http://localhost:8000/segment", {
            method: "POST",
            body: JSON.stringify({
                formData,
                selectedPoints,
                deselectedPoints
            }),
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