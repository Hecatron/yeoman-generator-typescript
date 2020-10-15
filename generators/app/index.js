"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Generator = require("yeoman-generator");
class SimpleGenerator extends Generator {
    constructor(args, options) {
        super(args, options);
        this.log("Constructor");
    }
    initializing() {
        this.log("initializing() : Your initialization methods (checking current project state, getting configs, etc)");
    }
    prompting() {
        this.log("prompting() : Where you prompt users for options (where you'd call this.prompt())");
    }
    configuring() {
        this.log("configuring() : Saving configurations and configure the project (creating .editorconfig files and other metadata files)");
    }
    writing() {
        this.log("writing() : Where you write the generator specific files (routes, controllers, etc)");
    }
    install() {
        this.log("install() : Where installation are run (npm, bower)");
    }
    end() {
        this.log("end() : Called last, cleanup, say good bye, etc");
        this.log("Output Dir: " + this.destinationRoot());
    }
    SomeMethod() {
        this.log("SomeMethod");
    }
    AnotherMethod() {
        this.log("AnotherMethod");
    }
}
;
module.exports = SimpleGenerator;
//# sourceMappingURL=index.js.map