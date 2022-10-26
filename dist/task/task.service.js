"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const data_1 = require("./data");
let TaskService = class TaskService {
    async findAll() {
        return data_1.default;
    }
    async findOne(id) {
        let result = null;
        data_1.default.forEach(function (arr1val) {
            if (arr1val["id"] == id)
                result = arr1val;
        });
        return result;
    }
    async create(task) {
        data_1.default.push(task);
        return "Success";
    }
    async update(task) {
        let result = "Not found";
        data_1.default.forEach(function (arr1val) {
            if (arr1val["id"] == task["id"]) {
                arr1val = task;
                result = "Success";
            }
        });
        return result;
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)()
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map