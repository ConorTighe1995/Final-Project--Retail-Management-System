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
var DetailsComponent = (function () {
    function DetailsComponent(messageService) {
        this.messageService = messageService;
        this.messages = [];
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessages()
            .subscribe(function (messages) { return _this.messages = messages; }, function (error) { return console.error(error); });
        console.log(this.messages);
    };
    DetailsComponent.prototype.onDeleteMessage = function (id) {
        var retVal = confirm("Do you want to continue ?");
        if (retVal == true) {
            this.messageService
                .deleteServiceWithId("empId", id)
                .subscribe(function (result) { return console.log(result); }, function (error) { return console.error(error); });
        }
        else {
            alert("Delete cancled!");
            return false;
        }
    };
    DetailsComponent.prototype.onUpdateMessage = function (id) {
        var retVal = confirm("Do you want to continue ?");
        if (retVal == true) {
            var message = new message_model_1.Message(this.fname, this.lname, id, this.number, this.occu);
            console.log(this.fname);
            console.log(this.lname);
            console.log(id);
            console.log(this.occu);
            this.messages.push(message);
            this.messageService.updateServiceWithId(message)
                .subscribe(function () { return console.log('Success!'); }, function (error) { return console.error(error); });
        }
        else {
            alert("Edit cancled!");
            return false;
        }
    };
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'deta',
        templateUrl: 'details.component.html',
        providers: [message_service_1.MessageService]
    }),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], DetailsComponent);
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=details.component.js.map