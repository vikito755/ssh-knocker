// var exec = require('child_process').exec;
import { exec, spawn } from 'node:child_process';

export async function detectOpenSshVersion(ipAddress: string) {
    // TO DO - get result from this command
    const result = exec(`ssh -V ${ipAddress}`);
    console.log(result)
}