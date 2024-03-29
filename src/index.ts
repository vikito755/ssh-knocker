import { detectOpenSshVersion } from "./lib/openSshVersionDetection";


async function main() {
    // Local IP address used for testing.
    await detectOpenSshVersion('192.168.6.129');
};

main()
.then( () => {
    console.info('Ssh knocker started.')
})
.catch( (e) => {
    console.error(`Ssh knocker crashed with error ${e}.`);
})