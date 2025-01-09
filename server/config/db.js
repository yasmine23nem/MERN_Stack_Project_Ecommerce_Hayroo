const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://yasmine:yaya2310@mycluster.mongodb.net/Ecommerce?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
