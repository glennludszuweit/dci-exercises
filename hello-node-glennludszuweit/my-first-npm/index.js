import fs from 'fs';
import cp from 'child_process';
import 'colors';
import { sayHello } from './required.js';

sayHello();

fs.readdirSync('.').forEach((file) => console.log(file.bgGreen.bold));

fs.existsSync('swapfile')
  ? console.log('SWAPPED'.green)
  : console.log('UNSWAPPED'.red);

console.log(cp.execSync('ls -a /etc', { encoding: 'utf-8' }).slice(0, 100));

console.log(cp.execSync('echo hi').toString());

console.log(cp.execSync('cat /proc/cpuinfo').toString());
