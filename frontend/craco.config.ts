const {
    createWebpackDevConfig,
    createWebpackProdConfig,
    when,
    whenDev,
    whenProd,
    whenTest,
    ESLINT_MODES,
    POSTCSS_MODES,
} = require("@craco/craco");

let flagged = false;

module.exports = {
    plugins: [
        {
            plugin: {
                overrideWebpackConfig: ({
                    webpackConfig,
                    cracoConfig,
                    pluginOptions,
                    context: { env, paths },
                }) => {
                    if (flagged) {
                        console.log(paths);
                        return webpackConfig;
                    }
                    flagged = true;
                    // console.log(JSON.stringify(webpackConfig, null, 4));

                    // console.log(paths);
                    [
                        "appPath",
                        "appBuild",
                        "appPublic",
                        "appHtml",
                        "appIndexJs",
                        "appSrc",
                        "testsSetup",
                        "proxySetup",
                        "swSrc",
                        "appTypeDeclarations",
                    ].forEach(
                        (item) =>
                            (paths[item] = paths[item].replace(
                                /([\\/])blerpsblerg/g,
                                "$1blerpsblerg$1frontend"
                            ))
                    );
                    paths.appIndexJs = paths.appIndexJs.replace(".js", ".tsx");
                    console.log(paths);

                    // Always return the config object.
                    return createWebpackDevConfig(cracoConfig, { env, paths });
                },
            },
        },
    ],
};
