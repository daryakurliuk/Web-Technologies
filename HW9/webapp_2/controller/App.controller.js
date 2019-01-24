sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView"
], function (Controller) {
    "use strict";


    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onInit: function () {
            var url = "https://services.odata.org/TripPinRESTierService/(S(3aostjazvukcnjbuztmsdqt0))/People";
            var oModel = new sap.ui.model.json.JSONModel(url);
            sap.ui.getCore().setModel(oModel, "People");
        },
        listFactory: function (sId) {
			var oUIControl;
			oUIControl = this.byId("item").clone(sId);
			console.log(sId);
			return oUIControl;
		}
    });
});