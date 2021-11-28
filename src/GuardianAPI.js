import { GUARDIAN_API_KEY } from "./config";

export const getGuardianArticles = async () => {
    const response = await fetch(
        `https://content.guardianapis.com/search?api-key=${GUARDIAN_API_KEY}`
    );
    const json = await response.json().results;
    console.log(json)
    return json;
};

// async function componentDidMount() {
//     try {
//         const response = await getGuardianArticles();
//         this.setState({ articles: response.articles });
//     } catch (error) {
//         this.setState({ apiError: "Could not find any articles" });
//     }
// }