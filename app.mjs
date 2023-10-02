import express from "express";
import path from "path";
import { searchMetaphor } from "./metaphorAPI.js";

const app = express();
const port = 3000;
const __dirname =
  "/Users/apurv/Desktop/Index/2_Work/2_Parsons/Year_4/Spring_2023/2_Other/Metaphor";

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (e.g., stylesheets)
app.use(express.static(path.join(__dirname, "public")));

//Define a route to render the search results page
app.get("/", async (req, res) => {
  try {
    const query =
      "Here are some beautiful quotes from " + req.query.query ||
      "This is my favorite dialogue from Macbeth:"; // Get the search query from the URL query parameter
    //console.log(query);
    const results = await searchMetaphor(query);

    //console.log(results);

    res.render("index", { results, query }); // Pass the results to the template
  } catch (error) {
    console.error("Error handling request:", error);
    res.render("index", { error: "An error occurred." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
