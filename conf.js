/*jslint node: true */
"use strict";

//exports.port = 6611;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false;
exports.bLight = false;

exports.storage = 'sqlite';

exports.hub = 'byteball.org/bb-test';
exports.deviceName = 'KT-RPC-Test';
exports.permanent_paring_secret = 'kt-test';
exports.control_addresses = ['0HJBA2MU42AICBCFHPL33H75LWKQ5VCAG'];
exports.payout_address = 'GPDGZDLVLMORZJDA5SEBW4NWFFDK5BUZ';
exports.KEYS_FILENAME = 'keys.json';

// where logs are written to (absolute path).  Default is log.txt in app data directory
//exports.LOG_FILENAME = '/dev/null';

// this is for runnining RPC service only, see play/rpc_service.js
exports.rpcInterface = '127.0.0.1';
exports.rpcPort = '7777';

console.log('finished headless conf');
