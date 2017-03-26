"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var message_model_1 = require("./message.model");
var message_service_1 = require("./message.service");
var EmployeesComponent = (function () {
    function EmployeesComponent(messageService) {
        this.messageService = messageService;
        this.messages = [];
    }
    EmployeesComponent.prototype.onAddMessage = function () {
        var message = new message_model_1.Message('Jim', 'Smith', 'EP100', '08710101010', 'Manager');
        this.messages.push(message);
        this.messageService.saveMessage(message)
            .subscribe(function () { return console.log('Success!'); }, function (error) { return console.error(error); });
    };
    return EmployeesComponent;
}());
EmployeesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'Employees',
        templateUrl: 'employees.component.html',
        providers: [message_service_1.MessageService]
    }),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], EmployeesComponent);
exports.EmployeesComponent = EmployeesComponent;
//# sourceMappingURL=employees.component.js.map