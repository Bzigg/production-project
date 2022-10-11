import path from "path"
import webpack from "webpack"
import { buildDevServer } from "./buildDevServer"
import { buildLoaders } from "./buildLoaders"
import { buildPlugins } from "./buildPlugins"
import { buildResolves } from "./buildResolves"
import { BuildOptions } from "./types/config"

export function buildWebpackConfig(
    options: BuildOptions
): webpack.Configuration {
    const { paths, mode, isDev } = options

    return {
        mode: mode,
        // entry - точка входа в приложение
        entry: paths.entry,
        // output - то куда приложение соберется проект
        output: {
            // filename - файл в который соберется проект
            filename: "[name].[contenthash].js",
            // путь куда положить собранный файл
            path: paths.build,
            // отчищать ли файл со сборкой
            clean: true,
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolves(options),
        plugins: buildPlugins(options),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}
