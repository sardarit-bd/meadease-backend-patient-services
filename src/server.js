import environment from "./config/env.js";
import app from "./app.js";
import connectDB from './config/db.js';


/******** PORT Define *******/
const PORT = process.env.PATIENT_SERVICE_PORT || 5003;


/********** Connect to Database Here **********/
await connectDB();

/*********** Start The Server ***********/
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port: ${PORT} in ${environment} mode`);
  });

