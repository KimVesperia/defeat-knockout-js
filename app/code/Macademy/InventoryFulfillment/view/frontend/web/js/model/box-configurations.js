define([
    'ko',
    'Macademy_InventoryFulfillment/js/ko/extenders/numeric'
], function(ko) {
    'use strict';
    
    const boxConfigurations = () => {
        const divisor = 139;
        const data = {
            length: ko.observable().extend({numeric: true}),
            width: ko.observable().extend({numeric: true}),
            height: ko.observable().extend({numeric: true}),
            weight: ko.observable().extend({numeric: true}),
            unitsPerBox: ko.observable().extend({numeric: true}),
            numberOfBoxes: ko.observable().extend({numeric: true}),
        };

        data.dimensionalWeight = ko.computed(() => {
            const result = data.length() * data.width() * data.height() / divisor;
            return Math.round(result * data.numberOfBoxes());
        })

        data.totalWeight = ko.computed(() => {
            return data.numberOfBoxes() * data.weight();
        })

        data.billableWeight = ko.computed(() => {
            return data.totalWeight() > data.dimensionalWeight()
             ? data.totalWeight()
             : data.dimensionalWeight();
        })

        return data;
    };

    return {
        boxConfigurations: ko.observableArray([boxConfigurations()]),
        isSuccess: ko.observable(false),
        numberOfBoxes: function() {
            return ko.computed(() => {
                return this.boxConfigurations().reduce(function(runningTotal, boxConfigurations) {
                    return runningTotal + (boxConfigurations.numberOfBoxes() || 0);
                }, 0);
            })
        },
        shipmentWeight: function() {
            return ko.computed(() => {
                return this.boxConfigurations().reduce(function(runningTotal, boxConfigurations) {
                    return runningTotal + (boxConfigurations.weight() || 0);
                }, 0);
            })
        },
        billableWeight: function() {
            return ko.computed(() => {
                return this.boxConfigurations().reduce(function(runningTotal, boxConfigurations) {
                    return runningTotal + (boxConfigurations.billableWeight() || 0);
                }, 0);
            })
        },
        add: function() {
            this.boxConfigurations.push(boxConfigurations());
        },
        delete: function(index) {
            this.boxConfigurations.splice(index, 1);
        }
    }
});
