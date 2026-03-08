const { execSync } = require('child_process');

try {
    console.log("Checking status...");
    let status = execSync('"C:\\Program Files\\Git\\cmd\\git.exe" status').toString();
    console.log(status);

    console.log("Adding and committing...");
    execSync('"C:\\Program Files\\Git\\cmd\\git.exe" add .');
    try {
        execSync('"C:\\Program Files\\Git\\cmd\\git.exe" commit -m "Upload complete Starlux demo with welcome modal"');
    } catch (e) { console.log("Nothing to commit maybe?"); }

    console.log("Pushing...");
    let push = execSync('"C:\\Program Files\\Git\\cmd\\git.exe" push -u origin main').toString();
    console.log('SUCCESS PUSH:', push);
} catch (e) {
    console.log('ERROR OC:', e.stderr ? e.stderr.toString() : e.message);
}
