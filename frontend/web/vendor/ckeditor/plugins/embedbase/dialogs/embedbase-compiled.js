"use strict";

/*
Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("embedBase", function (b) {
  var c = b.lang.embedbase;return { title: c.title, minWidth: 350, minHeight: 50, onLoad: function onLoad() {
      function e() {
        a.setState(CKEDITOR.DIALOG_STATE_IDLE);d = null;
      }var a = this,
          d = null;this.on("ok", function (f) {
        f.data.hide = !1;f.stop();a.setState(CKEDITOR.DIALOG_STATE_BUSY);var c = a.getValueOf("info", "url");d = a.widget.loadContent(c, { noNotifications: !0, callback: function callback() {
            a.widget.isReady() || b.widgets.finalizeCreation(a.widget.wrapper.getParent(!0));b.fire("saveSnapshot");a.hide();
            e();
          }, errorCallback: function errorCallback(b) {
            a.getContentElement("info", "url").select();alert(a.widget.getErrorMessage(b, c, "Given"));e();
          } });
      }, null, null, 15);this.on("cancel", function (a) {
        a.data.hide && d && (d.cancel(), e());
      });
    }, contents: [{ id: "info", elements: [{ type: "text", id: "url", label: b.lang.common.url, required: !0, setup: function setup(b) {
          this.setValue(b.data.url);
        }, validate: function validate() {
          return this.getDialog().widget.isUrlValid(this.getValue()) ? !0 : c.unsupportedUrlGiven;
        } }] }] };
});

//# sourceMappingURL=embedbase-compiled.js.map