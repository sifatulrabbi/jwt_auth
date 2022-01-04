import * as express from "express";
import * as cors from "cors";
import { appRoutes, authRoutes } from "./routes";
import { config } from "./configs";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/v1", appRoutes);
app.use("auth", authRoutes);

app.listen(config.PORT, () => {
  if (config.PROD) return;

  console.log(`Server is running on port ${config.PORT}`);
});
