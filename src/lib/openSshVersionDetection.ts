import { exec } from 'node:child_process';

export async function detectOpenSshVersion(ipAddress: string) {
    // TO DO - get SSH version from this command.
    // TO DO - check if SSH is available on the host machine.
    const result = exec(`ssh -V ${ipAddress}`);
    console.log(result)
}