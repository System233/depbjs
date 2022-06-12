// Copyright (c) 2022 System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { execSync } from 'child_process';
import { writeFile } from 'fs/promises'
import {version,displayName,name,description} from './package.json'

const refname=execSync(`git describe --all`).toString('utf8').trim();
const commit=execSync(`git rev-parse --short ${refname}`).toString('utf8').trim();
const time=execSync(`git log -1 --format=%cd ${refname} --date=rfc `).toString('utf8').trim();

writeFile('app.json',JSON.stringify({
    name,
    displayName,
    version,
    commit,
    refname,
    description,
    time
},null,2));