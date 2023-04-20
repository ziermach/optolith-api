"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const os_1 = require("os");
const path_1 = require("path");
const yaml_1 = require("yaml");
const dir_1 = require("./dir");
const types_1 = require("./types");
const app = (0, express_1.default)();
const port = 4000;
function readHeroes() {
    const dir = (0, path_1.join)((0, os_1.homedir)(), 'Library', 'Application Support', 'Optolith Insider', 'heroes.json');
    const contents = (0, fs_1.readFileSync)(dir, 'utf8');
    const obj = JSON.parse(contents);
    const heros = [];
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            heros.push(obj[key]);
        }
    }
    return heros;
}
function loadEntries(dir, type) {
    let entries = [];
    if ((0, fs_1.lstatSync)(dir).isDirectory()) {
        for (const dirEntry of (0, fs_1.readdirSync)(dir)) {
            const path = (0, path_1.join)(dir, dirEntry);
            const contents = (0, fs_1.readFileSync)(path, 'utf8');
            const obj = (0, yaml_1.parse)(contents.toString());
            if (obj) {
                const entryName = dirEntry.replace('.yml', '').replace(/\d+\_/, '').toLocaleLowerCase();
                entries.push({ [`${type}/${entryName}`]: obj });
            }
        }
    }
    else if ((0, fs_1.lstatSync)(dir).isFile()) {
        const contents = (0, fs_1.readFileSync)(dir, 'utf8');
        const obj = (0, yaml_1.parse)(contents.toString());
        if (obj) {
            entries.push({ [type]: obj });
        }
    }
    return { [type]: entries };
}
function init() {
    const typeMap = new types_1.Types();
    let entries = [];
    for (const [key, type] of Object.entries(typeMap)) {
        const path = dir_1.ENTITY_DIRECTORY_PATHS[key];
        entries.push(loadEntries(path, key));
    }
    const heros = readHeroes();
    const res = { ...entries, ...heros };
    // for (const [key, type] of entries) {
    // }
    app.get(`/data`, (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.json(res);
    });
    app.get(`/`, (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.json(Object.keys(typeMap));
    });
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
}
init();
//# sourceMappingURL=index.js.map