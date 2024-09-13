import { UploadSourcemapsPluginOptions } from "./type";
type Plugin = {
    name: string;
    apply?: "build";
    writeBundle?: () => void | Promise<void>;
};
export declare function UploadSourcemapsPlugin(options: UploadSourcemapsPluginOptions): Plugin;
export type { UploadSourcemapsPluginOptions };
