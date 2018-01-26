// <!-- Copyright (c) 2017 Siemens Product Lifecycle Management Software Inc. Licensed under the "MPL 2.0 License" -->

define( [ "app","js/logService", "js/browserUtils","js/locationNavigation.service", "js/NotyModule" ], //
function( app,logger,browserUtils ) {
    'use strict';
    var exports = {},
    _$state = null;

    exports.go = function (location,uUID) {
        _$state = browserUtils.getBaseURL() + location + uUID;
        window.open(_$state, "_self");
}
return exports;

} );