import path from "path"
import webpack from "webpack"
import { buildWebpackConfig } from "./config/build/buildWebpackConfig"
import { BuildEnv, BuildPath } from "./config/build/types/config"

export default (env: BuildEnv) => {
    const PATHS: BuildPath = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
    }

    const MODE = env.mode || "development"

    const PORT = env.port || 3000
    const IS_DEV = MODE === "development"

    const config: webpack.Configuration = buildWebpackConfig({
        mode: MODE,
        paths: PATHS,
        isDev: IS_DEV,
        port: PORT,
    })

    return config
}
