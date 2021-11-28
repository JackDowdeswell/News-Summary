import { GUARDIAN_API_KEY } from "./config";

export const getGuardianArticles = async () => {
    try {
        const response = await fetch(
            `https://content.guardianapis.com/search?api-key=${GUARDIAN_API_KEY}`
        );
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
};