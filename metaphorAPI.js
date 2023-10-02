import Metaphor from "metaphor-node";

//console.log(Metaphor.default);

const apiKey = "c4ee5fa4-7d5e-4537-b8c4-c64bb3e5bab0"; // Replace with your actual API key
const baseUrl = "";
const meta = new Metaphor.default(apiKey);

async function searchMetaphor(query) {
  try {
    const options = {
      numResults: 10, // Adjust as needed
    };

    const response = await meta.search(query, options);

    return response.results;
  } catch (error) {
    console.error("Error searching Metaphor:", error);
    throw error;
  }
}

export { searchMetaphor };
