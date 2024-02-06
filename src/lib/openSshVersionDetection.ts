// var exec = require('child_process').exec;
import { exec, spawn } from 'node:child_process';

export async function detectOpenSshVersion(ipAddress: string) {
    const result = exec(`ssh -V ${ipAddress}`);
    console.log(result)
    
    // await fetch(isHttps ?
    //       `https://${ipAddress}` :
    //       `http://${ipAddress}`,
    //     {
            
    //     }
    // )
}