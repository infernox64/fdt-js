// Fast Data Transfer

/* const chalk = require('chalk');
const fsExtra = require('fs-extra');
const url = require("url");
const net = require('net');
const http = require('http');
const stream = require('stream');
const qr = require('@perl/qr');
const qx = require('@perl/qx'); 
const assert = require('assert');
const events = require('events');
const realpath = require('fs.realpath');
const buffer = require('buffer'); 
const child = require('child_process');
const fs = require('fs'); */
const os = require('os');
const path = require('path');
const execa = require('execa');

async function runFDT() {
    const fdt = path.join(os.homedir(), "java-bin", "fdt.jar");
    const argv = process.argv;   
    return execa("java.exe", 
        ["-Xmx4096M", "-jar", fdt].concat(Array.from(argv).slice(1)), 
    { 
        cwd: process.cwd(),
        stdout: "inherit",
        stderr: "inherit" 
    });
}

let proc = runFDT();
proc.then((result) => {
    console.log("Process exited normally.");
}).catch((err) => {
    console.error(err);
});
