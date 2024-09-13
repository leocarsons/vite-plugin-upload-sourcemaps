import { UploadSourcemapsCommand } from '@apm-insight-web/upload-sourcemaps';

function UploadSourcemapsPlugin(options) {
    return {
        name: "vite-plugin-upload-sourcemaps",
        apply: "build",
        async writeBundle() {
            const { paths, host, env, release, app_id, appSecret, appKey } = options;
            let uploadPaths = paths;
            if (!uploadPaths || !Array.isArray(uploadPaths) || !uploadPaths.length) {
                uploadPaths = ["./"];
            }
            try {
                await UploadSourcemapsCommand.upload({
                    paths: uploadPaths,
                    app_id,
                    host,
                    env,
                    release,
                    appSecret,
                    appKey,
                });
                console.log("Sourcemaps uploaded successfully.");
            }
            catch (error) {
                console.error(`Error uploading sourcemaps: ${error}`);
            }
        },
    };
}

export { UploadSourcemapsPlugin };
//# sourceMappingURL=index.esm.js.map
