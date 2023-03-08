import  express  from "express";
import * as dotenv from "dotenv";
import {OAuth2Client} from "google-auth-library";


dotenv.config();

const app = express();


app.use(express.json());


app.get("/api/google-login", async (req, res) => {
    res.send("funcionou")
});

const port = 3030

const startServer = async () => {
try {
    app.listen(port, () => console.log(`O servidor está abrindo na porta http://localhost:${port}`))

} catch (error) {
    console.log(error)
}

   
}

startServer()