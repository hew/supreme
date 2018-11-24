// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var View$BsReactNative = require("bs-react-native/src/components/view.js");
var Image$BsReactNative = require("bs-react-native/src/components/image.js");
var Style$BsReactNative = require("bs-react-native/src/style.js");
var Dimensions$BsReactNative = require("bs-react-native/src/dimensions.js");

var dimensions = Dimensions$BsReactNative.get(/* screen */-950191252);

var app = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.backgroundColor(/* String */Block.__(0, ["white"])),
      /* :: */[
        Style$BsReactNative.width(/* Pt */Block.__(0, [dimensions.width])),
        /* :: */[
          Style$BsReactNative.height(/* Pt */Block.__(0, [dimensions.height])),
          /* :: */[
            Style$BsReactNative.justifyContent(/* Center */2),
            /* [] */0
          ]
        ]
      ]
    ]);

var image = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.height(/* Pt */Block.__(0, [300])),
      /* :: */[
        Style$BsReactNative.width(/* Pct */Block.__(1, [100])),
        /* [] */0
      ]
    ]);

var container = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.width(/* Pct */Block.__(1, [100])),
      /* [] */0
    ]);

var Styles = /* module */[
  /* app */app,
  /* image */image,
  /* container */container
];

function app$1(param) {
  return ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(app), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(container), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[ReasonReact.element(undefined, undefined, Image$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, /* contain */427065300, /* `Required */[
                                        202657151,
                                        require("./assets/supreme-logo.jpg")
                                      ], Js_primitive.some(image), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[]))]))]));
}

exports.dimensions = dimensions;
exports.Styles = Styles;
exports.app = app$1;
/* dimensions Not a pure module */
