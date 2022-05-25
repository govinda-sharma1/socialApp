const mongoose = require("mongoose");

// exports.connectDatabase = () => {
//   mongoose
//     .connect(process.env.MONGO_URI)
//     .then((con) => console.log(`Database Connected: ${con.connection.host}`))
//     .catch((err) => console.log(err));
// };

const DB  = 'mongodb+srv://govindasharma:1234567890@cluster0.64rbl.mongodb.net/goviSocial?retryWrites=true&w=majority';

exports.connectDatabase = () => {
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(() => {
    console.log("Connected to mongo db!");
}).catch((err) => console.log("Error:", err))
};