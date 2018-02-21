if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'sbs-client'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'sbs-client'.");
}
this['sbs-client'] = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  function main(args) {
    var tmp$;
    var core = Kotlin.isType(tmp$ = document.getElementById('SBS-CORE'), HTMLElement) ? tmp$ : throwCCE();
    core.innerText = 'HELLO FREAKING WORLD';
  }
  var package$codes = _.codes || (_.codes = {});
  var package$jab = package$codes.jab || (package$codes.jab = {});
  package$jab.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('sbs-client', _);
  return _;
}(typeof this['sbs-client'] === 'undefined' ? {} : this['sbs-client'], kotlin);
