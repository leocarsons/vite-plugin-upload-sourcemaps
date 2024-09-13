import { UploadSourcemapsPluginOptions } from "./type";
import { UploadSourcemapsCommand } from "@apm-insight-web/upload-sourcemaps";

type Plugin = {
  name: string;
  apply?: "build";
  writeBundle?: () => void | Promise<void>;
};

export function UploadSourcemapsPlugin(
  options: UploadSourcemapsPluginOptions
): Plugin {
  return {
    name: "vite-plugin-upload-sourcemaps",
    apply: "build" as const,

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
      } catch (error) {
        console.error(`Error uploading sourcemaps: ${error}`);
      }
    },
  };
}

export type { UploadSourcemapsPluginOptions };
