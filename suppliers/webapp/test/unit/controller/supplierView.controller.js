/*global QUnit*/

sap.ui.define([
	"suppliers/controller/supplierView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("supplierView Controller");

	QUnit.test("I should test the supplierView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
