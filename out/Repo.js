"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repo = void 0;
var Repo = /** @class */ (function () {
    function Repo(repo) {
        this.name = repo.name;
        this.url = repo.html_url;
        this.forkCount = repo.forks;
    }
    return Repo;
}());
exports.Repo = Repo;
