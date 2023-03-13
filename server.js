const express = require("express");
const cors = require("cors");
const patientRouter = require("./routes/patient.router");
const departmentsRouter = require("./routes/Departmen.route");
// Create Server
const app = express();

//Use Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router
app.get("/", (req, res) => {
  res.send("<h1>This is patient API</h1>");
});
// patientRouter
app.use("/apis", patientRouter);

app.use("/apis", departmentsRouter);

// Running server
app.listen(5000, () => {
  console.log("Server listening to port 5000");
});
