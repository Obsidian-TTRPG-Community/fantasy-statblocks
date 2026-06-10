import type { Monster } from "index";
import {
    buildMonsterFromAppFile,
    buildMonsterFromCritterFile,
    buildMonsterFromImprovedInitiativeFile,
    buildMonsterFromPF2EMonsterToolFile
} from ".";
import { build5eMonsterFromFile } from "./5eToolsImport";
import { buildMonsterFromTetraCube } from "./TetraCubeImport";
import { buildMonsterFromPathbuilderFile } from "./PathbuilderImport";

const ctx: Worker = self as any;

ctx.onmessage = async (event) => {
    if (!event.data) return;

    const { files, source } = event.data;
    const monsters: Monster[] = [];
    for (const file of files) {
        switch (source) {
            case "5e": {
                const imported = await build5eMonsterFromFile(file);
                monsters.push(...(imported ?? []));
                break;
            }
            case "critter": {
                const imported = await buildMonsterFromCritterFile(file);
                monsters.push(...(imported ?? []));
                break;
            }
            case "improved": {
                const imported = await buildMonsterFromImprovedInitiativeFile(
                    file
                );
                monsters.push(...(imported ?? []));
                break;
            }
            case "appfile": {
                const imported = await buildMonsterFromAppFile(file);
                monsters.push(...(imported ?? []));
                break;
            }
            case "tetra": {
                const imported = await buildMonsterFromTetraCube(file);
                monsters.push(...(imported ?? []));
                break;
            }
            case "PF2eMonsterTool": {
                const imported = await buildMonsterFromPF2EMonsterToolFile(file);
                monsters.push(...(imported ?? []));
                break;
            }
            case "pathbuilder": {
                const imported = await buildMonsterFromPathbuilderFile(file);
                monsters.push(...(imported ?? []));
                break;
            }
            case "generic": {
                const imported: Monster[] = await new Promise(
                    (resolve, reject) => {
                        const reader = new FileReader();

                        reader.onload = async (event: any) => {
                            try {
                                let json = JSON.parse(event.target.result);
                                let monsters: any[] = [];
                                if (Array.isArray(json)) {
                                    monsters = json;
                                } else if (typeof json == "object") {
                                    if (!("name" in json)) {
                                        for (const key in json) {
                                            if (Array.isArray(json[key])) {
                                                monsters.push(...json[key]);
                                            }
                                        }
                                    } else {
                                        monsters = [json];
                                    }
                                } else {
                                    reject(
                                        "Invalid monster JSON provided. Must be array or object."
                                    );
                                }
                                const imported: Monster[] = [];
                                for (const monster of monsters) {
                                    if ("name" in monster) {
                                        imported.push(monster);
                                    }
                                }

                                resolve(imported);
                            } catch (e) {
                                console.error(`reject!!!`, e);
                                reject(e);
                            }
                        };

                        reader.readAsText(file);
                    }
                );
                monsters.push(...(imported ?? []));
            }
            default: {
                console.error(`Unknown source: ${source}`);
            }
        }
    }

    ctx.postMessage({ monsters });
};

ctx.addEventListener(
    "unhandledrejection",
    function (event: PromiseRejectionEvent) {
        // the event object has two special properties:
        // event.promise - the promise that generated the error
        // event.reason  - the unhandled error object
        throw event.reason;
    }
);
