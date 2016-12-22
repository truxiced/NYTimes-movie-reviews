/**
 * Created by egragus on 12/22/16.
 */
"use strict";
var CountriesService = (function () {
    function CountriesService() {
    }
    CountriesService.prototype.getCountries = function () {
        return ["Sweden", "Danmark", "USA"];
    };
    return CountriesService;
}());
exports.CountriesService = CountriesService;
//# sourceMappingURL=countries.service.js.map