import express, { Express, Request, Response } from 'express';
import { lstatSync, readFileSync, readdirSync } from 'fs';
import { TypeMap } from 'optolith-database-schema/lib/config';
import { homedir, type } from 'os';
import { join } from 'path';
import { parse } from 'yaml';
import { ENTITY_DIRECTORY_PATHS } from './dir';
import { RawHero } from './hero';
import { Types } from './types';

const app: Express = express();
const port = 4000;

function readHeroes() {
    const dir = join(homedir(), 'Library', 'Application Support', 'Optolith Insider', 'heroes.json');
    const contents = readFileSync(dir, 'utf8')
    const obj = JSON.parse(contents);
    const heros: RawHero[] = [];
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            heros.push(obj[key] as RawHero);
        }
    }
    return heros;
}

function loadEntries(dir: string, type: keyof TypeMap): {[foo in keyof TypeMap]: Object[]} {
    let entries: Object[] = [];
    if (lstatSync(dir).isDirectory()) {
        for (const dirEntry of readdirSync(dir)) {
            const path = join(dir, dirEntry)
            const contents = readFileSync(path, 'utf8')
            const obj = parse(contents.toString());
            if (obj) {
                const entryName = dirEntry.replace('.yml', '').replace(/\d+\_/,'').toLocaleLowerCase()
                entries.push({[entryName]: obj});
            }
        }
    } else if (lstatSync(dir).isFile()) {
        const contents = readFileSync(dir, 'utf8')
        const obj = parse(contents.toString());
        if (obj) {
            entries.push({[type]: obj});
        }
    }
    return {[type]: entries} as  {[foo in keyof TypeMap]: Object[]};
}

function init() {
    const typeMap = new Types();
    app.get(`/`, (req: Request, res: Response) => {
        // res.setHeader('Content-Type', 'application/json');
        res.send(
            Object.keys(typeMap).map(entryType => `<a href="/${entryType}">${entryType}</a>`).join(' <br/> ')
        );
    });
    for (const [key, _type] of Object.entries(typeMap)) {
        const path = ENTITY_DIRECTORY_PATHS[key as keyof TypeMap];
        if (key === 'heros') {
            app.get(`/${key}`, (_req: Request, res: Response) => {
                res.setHeader('Content-Type', 'application/json');
                const heros = readHeroes();
                res.json(heros);
            });
            continue;
        }
        app.get(`/${key}`, (_req: Request, res: Response) => {
            res.setHeader('Content-Type', 'application/json');
            const entry = loadEntries(path, key as keyof TypeMap);
            res.json(entry);
        });
    }
    // for (const [key, type] of entries) {
        
    // }
      app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
      });
}
init();

