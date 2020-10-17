const {
    exec
} = require("child_process");

function open(url) {
    const platForm = process.platform;
    console.log(platForm);

    let cmd = "";
    switch (platForm) {
        case "win32":
            cmd = "start"; //window
            break;
        case "darwin": //macos
            cmd = "open";
            break;
        case "linux": //linux
            cmd = "xdg-open";
            break;

    }
    exec(cmd + " " + url);
}
module.exports = open;