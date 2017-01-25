(function () {
    'use strict'

    var app = angular.module('app');

    function AccordionController() {
        var self = this;
        var panels = [];

        self.addPanel = function (panel) {
            panels.push(panel);
            if (panels.length > 0) {
                panels[0].turnOn();
            }
        };

        self.isOn = function(panel){
            if(panel.selected === true)
                return true;
                else return false;
        }

        self.selectPanel = function (panel) {
            for (var i in panels) {
                if (panel === panels[i]) {
                    if(self.isOn(panels[i])){   
                        panels[i].turnOff();
                }
                    else
                    panels[i].turnOn();
                    break;
                }
            }
        };
    }

    app.component('accordion', {
        transclude: true,
        template: '<div class="panel-group" ng-transclude></div>',
        controller: AccordionController
    });

})();