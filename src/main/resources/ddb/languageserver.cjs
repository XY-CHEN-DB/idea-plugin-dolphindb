/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 431
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/api.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
/// <reference path="../../typings/thenable.d.ts" />
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProgressType = exports.ProgressToken = exports.createMessageConnection = exports.NullLogger = exports.ConnectionOptions = exports.ConnectionStrategy = exports.AbstractMessageBuffer = exports.WriteableStreamMessageWriter = exports.AbstractMessageWriter = exports.MessageWriter = exports.ReadableStreamMessageReader = exports.AbstractMessageReader = exports.MessageReader = exports.SharedArrayReceiverStrategy = exports.SharedArraySenderStrategy = exports.CancellationToken = exports.CancellationTokenSource = exports.Emitter = exports.Event = exports.Disposable = exports.LRUCache = exports.Touch = exports.LinkedMap = exports.ParameterStructures = exports.NotificationType9 = exports.NotificationType8 = exports.NotificationType7 = exports.NotificationType6 = exports.NotificationType5 = exports.NotificationType4 = exports.NotificationType3 = exports.NotificationType2 = exports.NotificationType1 = exports.NotificationType0 = exports.NotificationType = exports.ErrorCodes = exports.ResponseError = exports.RequestType9 = exports.RequestType8 = exports.RequestType7 = exports.RequestType6 = exports.RequestType5 = exports.RequestType4 = exports.RequestType3 = exports.RequestType2 = exports.RequestType1 = exports.RequestType0 = exports.RequestType = exports.Message = exports.RAL = void 0;
exports.MessageStrategy = exports.CancellationStrategy = exports.CancellationSenderStrategy = exports.CancellationReceiverStrategy = exports.ConnectionError = exports.ConnectionErrors = exports.LogTraceNotification = exports.SetTraceNotification = exports.TraceFormat = exports.TraceValues = exports.Trace = void 0;
const messages_1 = __webpack_require__(/*! ./messages */ 4651);
Object.defineProperty(exports, "Message", ({ enumerable: true, get: function () { return messages_1.Message; } }));
Object.defineProperty(exports, "RequestType", ({ enumerable: true, get: function () { return messages_1.RequestType; } }));
Object.defineProperty(exports, "RequestType0", ({ enumerable: true, get: function () { return messages_1.RequestType0; } }));
Object.defineProperty(exports, "RequestType1", ({ enumerable: true, get: function () { return messages_1.RequestType1; } }));
Object.defineProperty(exports, "RequestType2", ({ enumerable: true, get: function () { return messages_1.RequestType2; } }));
Object.defineProperty(exports, "RequestType3", ({ enumerable: true, get: function () { return messages_1.RequestType3; } }));
Object.defineProperty(exports, "RequestType4", ({ enumerable: true, get: function () { return messages_1.RequestType4; } }));
Object.defineProperty(exports, "RequestType5", ({ enumerable: true, get: function () { return messages_1.RequestType5; } }));
Object.defineProperty(exports, "RequestType6", ({ enumerable: true, get: function () { return messages_1.RequestType6; } }));
Object.defineProperty(exports, "RequestType7", ({ enumerable: true, get: function () { return messages_1.RequestType7; } }));
Object.defineProperty(exports, "RequestType8", ({ enumerable: true, get: function () { return messages_1.RequestType8; } }));
Object.defineProperty(exports, "RequestType9", ({ enumerable: true, get: function () { return messages_1.RequestType9; } }));
Object.defineProperty(exports, "ResponseError", ({ enumerable: true, get: function () { return messages_1.ResponseError; } }));
Object.defineProperty(exports, "ErrorCodes", ({ enumerable: true, get: function () { return messages_1.ErrorCodes; } }));
Object.defineProperty(exports, "NotificationType", ({ enumerable: true, get: function () { return messages_1.NotificationType; } }));
Object.defineProperty(exports, "NotificationType0", ({ enumerable: true, get: function () { return messages_1.NotificationType0; } }));
Object.defineProperty(exports, "NotificationType1", ({ enumerable: true, get: function () { return messages_1.NotificationType1; } }));
Object.defineProperty(exports, "NotificationType2", ({ enumerable: true, get: function () { return messages_1.NotificationType2; } }));
Object.defineProperty(exports, "NotificationType3", ({ enumerable: true, get: function () { return messages_1.NotificationType3; } }));
Object.defineProperty(exports, "NotificationType4", ({ enumerable: true, get: function () { return messages_1.NotificationType4; } }));
Object.defineProperty(exports, "NotificationType5", ({ enumerable: true, get: function () { return messages_1.NotificationType5; } }));
Object.defineProperty(exports, "NotificationType6", ({ enumerable: true, get: function () { return messages_1.NotificationType6; } }));
Object.defineProperty(exports, "NotificationType7", ({ enumerable: true, get: function () { return messages_1.NotificationType7; } }));
Object.defineProperty(exports, "NotificationType8", ({ enumerable: true, get: function () { return messages_1.NotificationType8; } }));
Object.defineProperty(exports, "NotificationType9", ({ enumerable: true, get: function () { return messages_1.NotificationType9; } }));
Object.defineProperty(exports, "ParameterStructures", ({ enumerable: true, get: function () { return messages_1.ParameterStructures; } }));
const linkedMap_1 = __webpack_require__(/*! ./linkedMap */ 4918);
Object.defineProperty(exports, "LinkedMap", ({ enumerable: true, get: function () { return linkedMap_1.LinkedMap; } }));
Object.defineProperty(exports, "LRUCache", ({ enumerable: true, get: function () { return linkedMap_1.LRUCache; } }));
Object.defineProperty(exports, "Touch", ({ enumerable: true, get: function () { return linkedMap_1.Touch; } }));
const disposable_1 = __webpack_require__(/*! ./disposable */ 8973);
Object.defineProperty(exports, "Disposable", ({ enumerable: true, get: function () { return disposable_1.Disposable; } }));
const events_1 = __webpack_require__(/*! ./events */ 2682);
Object.defineProperty(exports, "Event", ({ enumerable: true, get: function () { return events_1.Event; } }));
Object.defineProperty(exports, "Emitter", ({ enumerable: true, get: function () { return events_1.Emitter; } }));
const cancellation_1 = __webpack_require__(/*! ./cancellation */ 2552);
Object.defineProperty(exports, "CancellationTokenSource", ({ enumerable: true, get: function () { return cancellation_1.CancellationTokenSource; } }));
Object.defineProperty(exports, "CancellationToken", ({ enumerable: true, get: function () { return cancellation_1.CancellationToken; } }));
const sharedArrayCancellation_1 = __webpack_require__(/*! ./sharedArrayCancellation */ 6782);
Object.defineProperty(exports, "SharedArraySenderStrategy", ({ enumerable: true, get: function () { return sharedArrayCancellation_1.SharedArraySenderStrategy; } }));
Object.defineProperty(exports, "SharedArrayReceiverStrategy", ({ enumerable: true, get: function () { return sharedArrayCancellation_1.SharedArrayReceiverStrategy; } }));
const messageReader_1 = __webpack_require__(/*! ./messageReader */ 5855);
Object.defineProperty(exports, "MessageReader", ({ enumerable: true, get: function () { return messageReader_1.MessageReader; } }));
Object.defineProperty(exports, "AbstractMessageReader", ({ enumerable: true, get: function () { return messageReader_1.AbstractMessageReader; } }));
Object.defineProperty(exports, "ReadableStreamMessageReader", ({ enumerable: true, get: function () { return messageReader_1.ReadableStreamMessageReader; } }));
const messageWriter_1 = __webpack_require__(/*! ./messageWriter */ 9359);
Object.defineProperty(exports, "MessageWriter", ({ enumerable: true, get: function () { return messageWriter_1.MessageWriter; } }));
Object.defineProperty(exports, "AbstractMessageWriter", ({ enumerable: true, get: function () { return messageWriter_1.AbstractMessageWriter; } }));
Object.defineProperty(exports, "WriteableStreamMessageWriter", ({ enumerable: true, get: function () { return messageWriter_1.WriteableStreamMessageWriter; } }));
const messageBuffer_1 = __webpack_require__(/*! ./messageBuffer */ 3486);
Object.defineProperty(exports, "AbstractMessageBuffer", ({ enumerable: true, get: function () { return messageBuffer_1.AbstractMessageBuffer; } }));
const connection_1 = __webpack_require__(/*! ./connection */ 423);
Object.defineProperty(exports, "ConnectionStrategy", ({ enumerable: true, get: function () { return connection_1.ConnectionStrategy; } }));
Object.defineProperty(exports, "ConnectionOptions", ({ enumerable: true, get: function () { return connection_1.ConnectionOptions; } }));
Object.defineProperty(exports, "NullLogger", ({ enumerable: true, get: function () { return connection_1.NullLogger; } }));
Object.defineProperty(exports, "createMessageConnection", ({ enumerable: true, get: function () { return connection_1.createMessageConnection; } }));
Object.defineProperty(exports, "ProgressToken", ({ enumerable: true, get: function () { return connection_1.ProgressToken; } }));
Object.defineProperty(exports, "ProgressType", ({ enumerable: true, get: function () { return connection_1.ProgressType; } }));
Object.defineProperty(exports, "Trace", ({ enumerable: true, get: function () { return connection_1.Trace; } }));
Object.defineProperty(exports, "TraceValues", ({ enumerable: true, get: function () { return connection_1.TraceValues; } }));
Object.defineProperty(exports, "TraceFormat", ({ enumerable: true, get: function () { return connection_1.TraceFormat; } }));
Object.defineProperty(exports, "SetTraceNotification", ({ enumerable: true, get: function () { return connection_1.SetTraceNotification; } }));
Object.defineProperty(exports, "LogTraceNotification", ({ enumerable: true, get: function () { return connection_1.LogTraceNotification; } }));
Object.defineProperty(exports, "ConnectionErrors", ({ enumerable: true, get: function () { return connection_1.ConnectionErrors; } }));
Object.defineProperty(exports, "ConnectionError", ({ enumerable: true, get: function () { return connection_1.ConnectionError; } }));
Object.defineProperty(exports, "CancellationReceiverStrategy", ({ enumerable: true, get: function () { return connection_1.CancellationReceiverStrategy; } }));
Object.defineProperty(exports, "CancellationSenderStrategy", ({ enumerable: true, get: function () { return connection_1.CancellationSenderStrategy; } }));
Object.defineProperty(exports, "CancellationStrategy", ({ enumerable: true, get: function () { return connection_1.CancellationStrategy; } }));
Object.defineProperty(exports, "MessageStrategy", ({ enumerable: true, get: function () { return connection_1.MessageStrategy; } }));
const ral_1 = __webpack_require__(/*! ./ral */ 9112);
exports.RAL = ral_1.default;


/***/ },

/***/ 2552
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/cancellation.js ***!
  \********************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CancellationTokenSource = exports.CancellationToken = void 0;
const ral_1 = __webpack_require__(/*! ./ral */ 9112);
const Is = __webpack_require__(/*! ./is */ 2799);
const events_1 = __webpack_require__(/*! ./events */ 2682);
var CancellationToken;
(function (CancellationToken) {
    CancellationToken.None = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: events_1.Event.None
    });
    CancellationToken.Cancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: events_1.Event.None
    });
    function is(value) {
        const candidate = value;
        return candidate && (candidate === CancellationToken.None
            || candidate === CancellationToken.Cancelled
            || (Is.boolean(candidate.isCancellationRequested) && !!candidate.onCancellationRequested));
    }
    CancellationToken.is = is;
})(CancellationToken || (exports.CancellationToken = CancellationToken = {}));
const shortcutEvent = Object.freeze(function (callback, context) {
    const handle = (0, ral_1.default)().timer.setTimeout(callback.bind(context), 0);
    return { dispose() { handle.dispose(); } };
});
class MutableToken {
    constructor() {
        this._isCancelled = false;
    }
    cancel() {
        if (!this._isCancelled) {
            this._isCancelled = true;
            if (this._emitter) {
                this._emitter.fire(undefined);
                this.dispose();
            }
        }
    }
    get isCancellationRequested() {
        return this._isCancelled;
    }
    get onCancellationRequested() {
        if (this._isCancelled) {
            return shortcutEvent;
        }
        if (!this._emitter) {
            this._emitter = new events_1.Emitter();
        }
        return this._emitter.event;
    }
    dispose() {
        if (this._emitter) {
            this._emitter.dispose();
            this._emitter = undefined;
        }
    }
}
class CancellationTokenSource {
    get token() {
        if (!this._token) {
            // be lazy and create the token only when
            // actually needed
            this._token = new MutableToken();
        }
        return this._token;
    }
    cancel() {
        if (!this._token) {
            // save an object by returning the default
            // cancelled token when cancellation happens
            // before someone asks for the token
            this._token = CancellationToken.Cancelled;
        }
        else {
            this._token.cancel();
        }
    }
    dispose() {
        if (!this._token) {
            // ensure to initialize with an empty token if we had none
            this._token = CancellationToken.None;
        }
        else if (this._token instanceof MutableToken) {
            // actually dispose
            this._token.dispose();
        }
    }
}
exports.CancellationTokenSource = CancellationTokenSource;


/***/ },

/***/ 423
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/connection.js ***!
  \******************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createMessageConnection = exports.ConnectionOptions = exports.MessageStrategy = exports.CancellationStrategy = exports.CancellationSenderStrategy = exports.CancellationReceiverStrategy = exports.RequestCancellationReceiverStrategy = exports.IdCancellationReceiverStrategy = exports.ConnectionStrategy = exports.ConnectionError = exports.ConnectionErrors = exports.LogTraceNotification = exports.SetTraceNotification = exports.TraceFormat = exports.TraceValues = exports.Trace = exports.NullLogger = exports.ProgressType = exports.ProgressToken = void 0;
const ral_1 = __webpack_require__(/*! ./ral */ 9112);
const Is = __webpack_require__(/*! ./is */ 2799);
const messages_1 = __webpack_require__(/*! ./messages */ 4651);
const linkedMap_1 = __webpack_require__(/*! ./linkedMap */ 4918);
const events_1 = __webpack_require__(/*! ./events */ 2682);
const cancellation_1 = __webpack_require__(/*! ./cancellation */ 2552);
var CancelNotification;
(function (CancelNotification) {
    CancelNotification.type = new messages_1.NotificationType('$/cancelRequest');
})(CancelNotification || (CancelNotification = {}));
var ProgressToken;
(function (ProgressToken) {
    function is(value) {
        return typeof value === 'string' || typeof value === 'number';
    }
    ProgressToken.is = is;
})(ProgressToken || (exports.ProgressToken = ProgressToken = {}));
var ProgressNotification;
(function (ProgressNotification) {
    ProgressNotification.type = new messages_1.NotificationType('$/progress');
})(ProgressNotification || (ProgressNotification = {}));
class ProgressType {
    constructor() {
    }
}
exports.ProgressType = ProgressType;
var StarRequestHandler;
(function (StarRequestHandler) {
    function is(value) {
        return Is.func(value);
    }
    StarRequestHandler.is = is;
})(StarRequestHandler || (StarRequestHandler = {}));
exports.NullLogger = Object.freeze({
    error: () => { },
    warn: () => { },
    info: () => { },
    log: () => { }
});
var Trace;
(function (Trace) {
    Trace[Trace["Off"] = 0] = "Off";
    Trace[Trace["Messages"] = 1] = "Messages";
    Trace[Trace["Compact"] = 2] = "Compact";
    Trace[Trace["Verbose"] = 3] = "Verbose";
})(Trace || (exports.Trace = Trace = {}));
var TraceValues;
(function (TraceValues) {
    /**
     * Turn tracing off.
     */
    TraceValues.Off = 'off';
    /**
     * Trace messages only.
     */
    TraceValues.Messages = 'messages';
    /**
     * Compact message tracing.
     */
    TraceValues.Compact = 'compact';
    /**
     * Verbose message tracing.
     */
    TraceValues.Verbose = 'verbose';
})(TraceValues || (exports.TraceValues = TraceValues = {}));
(function (Trace) {
    function fromString(value) {
        if (!Is.string(value)) {
            return Trace.Off;
        }
        value = value.toLowerCase();
        switch (value) {
            case 'off':
                return Trace.Off;
            case 'messages':
                return Trace.Messages;
            case 'compact':
                return Trace.Compact;
            case 'verbose':
                return Trace.Verbose;
            default:
                return Trace.Off;
        }
    }
    Trace.fromString = fromString;
    function toString(value) {
        switch (value) {
            case Trace.Off:
                return 'off';
            case Trace.Messages:
                return 'messages';
            case Trace.Compact:
                return 'compact';
            case Trace.Verbose:
                return 'verbose';
            default:
                return 'off';
        }
    }
    Trace.toString = toString;
})(Trace || (exports.Trace = Trace = {}));
var TraceFormat;
(function (TraceFormat) {
    TraceFormat["Text"] = "text";
    TraceFormat["JSON"] = "json";
})(TraceFormat || (exports.TraceFormat = TraceFormat = {}));
(function (TraceFormat) {
    function fromString(value) {
        if (!Is.string(value)) {
            return TraceFormat.Text;
        }
        value = value.toLowerCase();
        if (value === 'json') {
            return TraceFormat.JSON;
        }
        else {
            return TraceFormat.Text;
        }
    }
    TraceFormat.fromString = fromString;
})(TraceFormat || (exports.TraceFormat = TraceFormat = {}));
var SetTraceNotification;
(function (SetTraceNotification) {
    SetTraceNotification.type = new messages_1.NotificationType('$/setTrace');
})(SetTraceNotification || (exports.SetTraceNotification = SetTraceNotification = {}));
var LogTraceNotification;
(function (LogTraceNotification) {
    LogTraceNotification.type = new messages_1.NotificationType('$/logTrace');
})(LogTraceNotification || (exports.LogTraceNotification = LogTraceNotification = {}));
var ConnectionErrors;
(function (ConnectionErrors) {
    /**
     * The connection is closed.
     */
    ConnectionErrors[ConnectionErrors["Closed"] = 1] = "Closed";
    /**
     * The connection got disposed.
     */
    ConnectionErrors[ConnectionErrors["Disposed"] = 2] = "Disposed";
    /**
     * The connection is already in listening mode.
     */
    ConnectionErrors[ConnectionErrors["AlreadyListening"] = 3] = "AlreadyListening";
})(ConnectionErrors || (exports.ConnectionErrors = ConnectionErrors = {}));
class ConnectionError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
        Object.setPrototypeOf(this, ConnectionError.prototype);
    }
}
exports.ConnectionError = ConnectionError;
var ConnectionStrategy;
(function (ConnectionStrategy) {
    function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.cancelUndispatched);
    }
    ConnectionStrategy.is = is;
})(ConnectionStrategy || (exports.ConnectionStrategy = ConnectionStrategy = {}));
var IdCancellationReceiverStrategy;
(function (IdCancellationReceiverStrategy) {
    function is(value) {
        const candidate = value;
        return candidate && (candidate.kind === undefined || candidate.kind === 'id') && Is.func(candidate.createCancellationTokenSource) && (candidate.dispose === undefined || Is.func(candidate.dispose));
    }
    IdCancellationReceiverStrategy.is = is;
})(IdCancellationReceiverStrategy || (exports.IdCancellationReceiverStrategy = IdCancellationReceiverStrategy = {}));
var RequestCancellationReceiverStrategy;
(function (RequestCancellationReceiverStrategy) {
    function is(value) {
        const candidate = value;
        return candidate && candidate.kind === 'request' && Is.func(candidate.createCancellationTokenSource) && (candidate.dispose === undefined || Is.func(candidate.dispose));
    }
    RequestCancellationReceiverStrategy.is = is;
})(RequestCancellationReceiverStrategy || (exports.RequestCancellationReceiverStrategy = RequestCancellationReceiverStrategy = {}));
var CancellationReceiverStrategy;
(function (CancellationReceiverStrategy) {
    CancellationReceiverStrategy.Message = Object.freeze({
        createCancellationTokenSource(_) {
            return new cancellation_1.CancellationTokenSource();
        }
    });
    function is(value) {
        return IdCancellationReceiverStrategy.is(value) || RequestCancellationReceiverStrategy.is(value);
    }
    CancellationReceiverStrategy.is = is;
})(CancellationReceiverStrategy || (exports.CancellationReceiverStrategy = CancellationReceiverStrategy = {}));
var CancellationSenderStrategy;
(function (CancellationSenderStrategy) {
    CancellationSenderStrategy.Message = Object.freeze({
        sendCancellation(conn, id) {
            return conn.sendNotification(CancelNotification.type, { id });
        },
        cleanup(_) { }
    });
    function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.sendCancellation) && Is.func(candidate.cleanup);
    }
    CancellationSenderStrategy.is = is;
})(CancellationSenderStrategy || (exports.CancellationSenderStrategy = CancellationSenderStrategy = {}));
var CancellationStrategy;
(function (CancellationStrategy) {
    CancellationStrategy.Message = Object.freeze({
        receiver: CancellationReceiverStrategy.Message,
        sender: CancellationSenderStrategy.Message
    });
    function is(value) {
        const candidate = value;
        return candidate && CancellationReceiverStrategy.is(candidate.receiver) && CancellationSenderStrategy.is(candidate.sender);
    }
    CancellationStrategy.is = is;
})(CancellationStrategy || (exports.CancellationStrategy = CancellationStrategy = {}));
var MessageStrategy;
(function (MessageStrategy) {
    function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.handleMessage);
    }
    MessageStrategy.is = is;
})(MessageStrategy || (exports.MessageStrategy = MessageStrategy = {}));
var ConnectionOptions;
(function (ConnectionOptions) {
    function is(value) {
        const candidate = value;
        return candidate && (CancellationStrategy.is(candidate.cancellationStrategy) || ConnectionStrategy.is(candidate.connectionStrategy) || MessageStrategy.is(candidate.messageStrategy));
    }
    ConnectionOptions.is = is;
})(ConnectionOptions || (exports.ConnectionOptions = ConnectionOptions = {}));
var ConnectionState;
(function (ConnectionState) {
    ConnectionState[ConnectionState["New"] = 1] = "New";
    ConnectionState[ConnectionState["Listening"] = 2] = "Listening";
    ConnectionState[ConnectionState["Closed"] = 3] = "Closed";
    ConnectionState[ConnectionState["Disposed"] = 4] = "Disposed";
})(ConnectionState || (ConnectionState = {}));
function createMessageConnection(messageReader, messageWriter, _logger, options) {
    const logger = _logger !== undefined ? _logger : exports.NullLogger;
    let sequenceNumber = 0;
    let notificationSequenceNumber = 0;
    let unknownResponseSequenceNumber = 0;
    const version = '2.0';
    let starRequestHandler = undefined;
    const requestHandlers = new Map();
    let starNotificationHandler = undefined;
    const notificationHandlers = new Map();
    const progressHandlers = new Map();
    let timer;
    let messageQueue = new linkedMap_1.LinkedMap();
    let responsePromises = new Map();
    let knownCanceledRequests = new Set();
    let requestTokens = new Map();
    let trace = Trace.Off;
    let traceFormat = TraceFormat.Text;
    let tracer;
    let state = ConnectionState.New;
    const errorEmitter = new events_1.Emitter();
    const closeEmitter = new events_1.Emitter();
    const unhandledNotificationEmitter = new events_1.Emitter();
    const unhandledProgressEmitter = new events_1.Emitter();
    const disposeEmitter = new events_1.Emitter();
    const cancellationStrategy = (options && options.cancellationStrategy) ? options.cancellationStrategy : CancellationStrategy.Message;
    function createRequestQueueKey(id) {
        if (id === null) {
            throw new Error(`Can't send requests with id null since the response can't be correlated.`);
        }
        return 'req-' + id.toString();
    }
    function createResponseQueueKey(id) {
        if (id === null) {
            return 'res-unknown-' + (++unknownResponseSequenceNumber).toString();
        }
        else {
            return 'res-' + id.toString();
        }
    }
    function createNotificationQueueKey() {
        return 'not-' + (++notificationSequenceNumber).toString();
    }
    function addMessageToQueue(queue, message) {
        if (messages_1.Message.isRequest(message)) {
            queue.set(createRequestQueueKey(message.id), message);
        }
        else if (messages_1.Message.isResponse(message)) {
            queue.set(createResponseQueueKey(message.id), message);
        }
        else {
            queue.set(createNotificationQueueKey(), message);
        }
    }
    function cancelUndispatched(_message) {
        return undefined;
    }
    function isListening() {
        return state === ConnectionState.Listening;
    }
    function isClosed() {
        return state === ConnectionState.Closed;
    }
    function isDisposed() {
        return state === ConnectionState.Disposed;
    }
    function closeHandler() {
        if (state === ConnectionState.New || state === ConnectionState.Listening) {
            state = ConnectionState.Closed;
            closeEmitter.fire(undefined);
        }
        // If the connection is disposed don't sent close events.
    }
    function readErrorHandler(error) {
        errorEmitter.fire([error, undefined, undefined]);
    }
    function writeErrorHandler(data) {
        errorEmitter.fire(data);
    }
    messageReader.onClose(closeHandler);
    messageReader.onError(readErrorHandler);
    messageWriter.onClose(closeHandler);
    messageWriter.onError(writeErrorHandler);
    function triggerMessageQueue() {
        if (timer || messageQueue.size === 0) {
            return;
        }
        timer = (0, ral_1.default)().timer.setImmediate(() => {
            timer = undefined;
            processMessageQueue();
        });
    }
    function handleMessage(message) {
        if (messages_1.Message.isRequest(message)) {
            handleRequest(message);
        }
        else if (messages_1.Message.isNotification(message)) {
            handleNotification(message);
        }
        else if (messages_1.Message.isResponse(message)) {
            handleResponse(message);
        }
        else {
            handleInvalidMessage(message);
        }
    }
    function processMessageQueue() {
        if (messageQueue.size === 0) {
            return;
        }
        const message = messageQueue.shift();
        try {
            const messageStrategy = options?.messageStrategy;
            if (MessageStrategy.is(messageStrategy)) {
                messageStrategy.handleMessage(message, handleMessage);
            }
            else {
                handleMessage(message);
            }
        }
        finally {
            triggerMessageQueue();
        }
    }
    const callback = (message) => {
        try {
            // We have received a cancellation message. Check if the message is still in the queue
            // and cancel it if allowed to do so.
            if (messages_1.Message.isNotification(message) && message.method === CancelNotification.type.method) {
                const cancelId = message.params.id;
                const key = createRequestQueueKey(cancelId);
                const toCancel = messageQueue.get(key);
                if (messages_1.Message.isRequest(toCancel)) {
                    const strategy = options?.connectionStrategy;
                    const response = (strategy && strategy.cancelUndispatched) ? strategy.cancelUndispatched(toCancel, cancelUndispatched) : cancelUndispatched(toCancel);
                    if (response && (response.error !== undefined || response.result !== undefined)) {
                        messageQueue.delete(key);
                        requestTokens.delete(cancelId);
                        response.id = toCancel.id;
                        traceSendingResponse(response, message.method, Date.now());
                        messageWriter.write(response).catch(() => logger.error(`Sending response for canceled message failed.`));
                        return;
                    }
                }
                const cancellationToken = requestTokens.get(cancelId);
                // The request is already running. Cancel the token
                if (cancellationToken !== undefined) {
                    cancellationToken.cancel();
                    traceReceivedNotification(message);
                    return;
                }
                else {
                    // Remember the cancel but still queue the message to
                    // clean up state in process message.
                    knownCanceledRequests.add(cancelId);
                }
            }
            addMessageToQueue(messageQueue, message);
        }
        finally {
            triggerMessageQueue();
        }
    };
    function handleRequest(requestMessage) {
        if (isDisposed()) {
            // we return here silently since we fired an event when the
            // connection got disposed.
            return;
        }
        function reply(resultOrError, method, startTime) {
            const message = {
                jsonrpc: version,
                id: requestMessage.id
            };
            if (resultOrError instanceof messages_1.ResponseError) {
                message.error = resultOrError.toJson();
            }
            else {
                message.result = resultOrError === undefined ? null : resultOrError;
            }
            traceSendingResponse(message, method, startTime);
            messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        function replyError(error, method, startTime) {
            const message = {
                jsonrpc: version,
                id: requestMessage.id,
                error: error.toJson()
            };
            traceSendingResponse(message, method, startTime);
            messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        function replySuccess(result, method, startTime) {
            // The JSON RPC defines that a response must either have a result or an error
            // So we can't treat undefined as a valid response result.
            if (result === undefined) {
                result = null;
            }
            const message = {
                jsonrpc: version,
                id: requestMessage.id,
                result: result
            };
            traceSendingResponse(message, method, startTime);
            messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        traceReceivedRequest(requestMessage);
        const element = requestHandlers.get(requestMessage.method);
        let type;
        let requestHandler;
        if (element) {
            type = element.type;
            requestHandler = element.handler;
        }
        const startTime = Date.now();
        if (requestHandler || starRequestHandler) {
            const tokenKey = requestMessage.id ?? String(Date.now()); //
            const cancellationSource = IdCancellationReceiverStrategy.is(cancellationStrategy.receiver)
                ? cancellationStrategy.receiver.createCancellationTokenSource(tokenKey)
                : cancellationStrategy.receiver.createCancellationTokenSource(requestMessage);
            if (requestMessage.id !== null && knownCanceledRequests.has(requestMessage.id)) {
                cancellationSource.cancel();
            }
            if (requestMessage.id !== null) {
                requestTokens.set(tokenKey, cancellationSource);
            }
            try {
                let handlerResult;
                if (requestHandler) {
                    if (requestMessage.params === undefined) {
                        if (type !== undefined && type.numberOfParams !== 0) {
                            replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines ${type.numberOfParams} params but received none.`), requestMessage.method, startTime);
                            return;
                        }
                        handlerResult = requestHandler(cancellationSource.token);
                    }
                    else if (Array.isArray(requestMessage.params)) {
                        if (type !== undefined && type.parameterStructures === messages_1.ParameterStructures.byName) {
                            replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by name but received parameters by position`), requestMessage.method, startTime);
                            return;
                        }
                        handlerResult = requestHandler(...requestMessage.params, cancellationSource.token);
                    }
                    else {
                        if (type !== undefined && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                            replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by position but received parameters by name`), requestMessage.method, startTime);
                            return;
                        }
                        handlerResult = requestHandler(requestMessage.params, cancellationSource.token);
                    }
                }
                else if (starRequestHandler) {
                    handlerResult = starRequestHandler(requestMessage.method, requestMessage.params, cancellationSource.token);
                }
                const promise = handlerResult;
                if (!handlerResult) {
                    requestTokens.delete(tokenKey);
                    replySuccess(handlerResult, requestMessage.method, startTime);
                }
                else if (promise.then) {
                    promise.then((resultOrError) => {
                        requestTokens.delete(tokenKey);
                        reply(resultOrError, requestMessage.method, startTime);
                    }, error => {
                        requestTokens.delete(tokenKey);
                        if (error instanceof messages_1.ResponseError) {
                            replyError(error, requestMessage.method, startTime);
                        }
                        else if (error && Is.string(error.message)) {
                            replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
                        }
                        else {
                            replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
                        }
                    });
                }
                else {
                    requestTokens.delete(tokenKey);
                    reply(handlerResult, requestMessage.method, startTime);
                }
            }
            catch (error) {
                requestTokens.delete(tokenKey);
                if (error instanceof messages_1.ResponseError) {
                    reply(error, requestMessage.method, startTime);
                }
                else if (error && Is.string(error.message)) {
                    replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
                }
                else {
                    replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
                }
            }
        }
        else {
            replyError(new messages_1.ResponseError(messages_1.ErrorCodes.MethodNotFound, `Unhandled method ${requestMessage.method}`), requestMessage.method, startTime);
        }
    }
    function handleResponse(responseMessage) {
        if (isDisposed()) {
            // See handle request.
            return;
        }
        if (responseMessage.id === null) {
            if (responseMessage.error) {
                logger.error(`Received response message without id: Error is: \n${JSON.stringify(responseMessage.error, undefined, 4)}`);
            }
            else {
                logger.error(`Received response message without id. No further error information provided.`);
            }
        }
        else {
            const key = responseMessage.id;
            const responsePromise = responsePromises.get(key);
            traceReceivedResponse(responseMessage, responsePromise);
            if (responsePromise !== undefined) {
                responsePromises.delete(key);
                try {
                    if (responseMessage.error) {
                        const error = responseMessage.error;
                        responsePromise.reject(new messages_1.ResponseError(error.code, error.message, error.data));
                    }
                    else if (responseMessage.result !== undefined) {
                        responsePromise.resolve(responseMessage.result);
                    }
                    else {
                        throw new Error('Should never happen.');
                    }
                }
                catch (error) {
                    if (error.message) {
                        logger.error(`Response handler '${responsePromise.method}' failed with message: ${error.message}`);
                    }
                    else {
                        logger.error(`Response handler '${responsePromise.method}' failed unexpectedly.`);
                    }
                }
            }
        }
    }
    function handleNotification(message) {
        if (isDisposed()) {
            // See handle request.
            return;
        }
        let type = undefined;
        let notificationHandler;
        if (message.method === CancelNotification.type.method) {
            const cancelId = message.params.id;
            knownCanceledRequests.delete(cancelId);
            traceReceivedNotification(message);
            return;
        }
        else {
            const element = notificationHandlers.get(message.method);
            if (element) {
                notificationHandler = element.handler;
                type = element.type;
            }
        }
        if (notificationHandler || starNotificationHandler) {
            try {
                traceReceivedNotification(message);
                if (notificationHandler) {
                    if (message.params === undefined) {
                        if (type !== undefined) {
                            if (type.numberOfParams !== 0 && type.parameterStructures !== messages_1.ParameterStructures.byName) {
                                logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received none.`);
                            }
                        }
                        notificationHandler();
                    }
                    else if (Array.isArray(message.params)) {
                        // There are JSON-RPC libraries that send progress message as positional params although
                        // specified as named. So convert them if this is the case.
                        const params = message.params;
                        if (message.method === ProgressNotification.type.method && params.length === 2 && ProgressToken.is(params[0])) {
                            notificationHandler({ token: params[0], value: params[1] });
                        }
                        else {
                            if (type !== undefined) {
                                if (type.parameterStructures === messages_1.ParameterStructures.byName) {
                                    logger.error(`Notification ${message.method} defines parameters by name but received parameters by position`);
                                }
                                if (type.numberOfParams !== message.params.length) {
                                    logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received ${params.length} arguments`);
                                }
                            }
                            notificationHandler(...params);
                        }
                    }
                    else {
                        if (type !== undefined && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                            logger.error(`Notification ${message.method} defines parameters by position but received parameters by name`);
                        }
                        notificationHandler(message.params);
                    }
                }
                else if (starNotificationHandler) {
                    starNotificationHandler(message.method, message.params);
                }
            }
            catch (error) {
                if (error.message) {
                    logger.error(`Notification handler '${message.method}' failed with message: ${error.message}`);
                }
                else {
                    logger.error(`Notification handler '${message.method}' failed unexpectedly.`);
                }
            }
        }
        else {
            unhandledNotificationEmitter.fire(message);
        }
    }
    function handleInvalidMessage(message) {
        if (!message) {
            logger.error('Received empty message.');
            return;
        }
        logger.error(`Received message which is neither a response nor a notification message:\n${JSON.stringify(message, null, 4)}`);
        // Test whether we find an id to reject the promise
        const responseMessage = message;
        if (Is.string(responseMessage.id) || Is.number(responseMessage.id)) {
            const key = responseMessage.id;
            const responseHandler = responsePromises.get(key);
            if (responseHandler) {
                responseHandler.reject(new Error('The received response has neither a result nor an error property.'));
            }
        }
    }
    function stringifyTrace(params) {
        if (params === undefined || params === null) {
            return undefined;
        }
        switch (trace) {
            case Trace.Verbose:
                return JSON.stringify(params, null, 4);
            case Trace.Compact:
                return JSON.stringify(params);
            default:
                return undefined;
        }
    }
    function traceSendingRequest(message) {
        if (trace === Trace.Off || !tracer) {
            return;
        }
        if (traceFormat === TraceFormat.Text) {
            let data = undefined;
            if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
                data = `Params: ${stringifyTrace(message.params)}\n\n`;
            }
            tracer.log(`Sending request '${message.method} - (${message.id})'.`, data);
        }
        else {
            logLSPMessage('send-request', message);
        }
    }
    function traceSendingNotification(message) {
        if (trace === Trace.Off || !tracer) {
            return;
        }
        if (traceFormat === TraceFormat.Text) {
            let data = undefined;
            if (trace === Trace.Verbose || trace === Trace.Compact) {
                if (message.params) {
                    data = `Params: ${stringifyTrace(message.params)}\n\n`;
                }
                else {
                    data = 'No parameters provided.\n\n';
                }
            }
            tracer.log(`Sending notification '${message.method}'.`, data);
        }
        else {
            logLSPMessage('send-notification', message);
        }
    }
    function traceSendingResponse(message, method, startTime) {
        if (trace === Trace.Off || !tracer) {
            return;
        }
        if (traceFormat === TraceFormat.Text) {
            let data = undefined;
            if (trace === Trace.Verbose || trace === Trace.Compact) {
                if (message.error && message.error.data) {
                    data = `Error data: ${stringifyTrace(message.error.data)}\n\n`;
                }
                else {
                    if (message.result) {
                        data = `Result: ${stringifyTrace(message.result)}\n\n`;
                    }
                    else if (message.error === undefined) {
                        data = 'No result returned.\n\n';
                    }
                }
            }
            tracer.log(`Sending response '${method} - (${message.id})'. Processing request took ${Date.now() - startTime}ms`, data);
        }
        else {
            logLSPMessage('send-response', message);
        }
    }
    function traceReceivedRequest(message) {
        if (trace === Trace.Off || !tracer) {
            return;
        }
        if (traceFormat === TraceFormat.Text) {
            let data = undefined;
            if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
                data = `Params: ${stringifyTrace(message.params)}\n\n`;
            }
            tracer.log(`Received request '${message.method} - (${message.id})'.`, data);
        }
        else {
            logLSPMessage('receive-request', message);
        }
    }
    function traceReceivedNotification(message) {
        if (trace === Trace.Off || !tracer || message.method === LogTraceNotification.type.method) {
            return;
        }
        if (traceFormat === TraceFormat.Text) {
            let data = undefined;
            if (trace === Trace.Verbose || trace === Trace.Compact) {
                if (message.params) {
                    data = `Params: ${stringifyTrace(message.params)}\n\n`;
                }
                else {
                    data = 'No parameters provided.\n\n';
                }
            }
            tracer.log(`Received notification '${message.method}'.`, data);
        }
        else {
            logLSPMessage('receive-notification', message);
        }
    }
    function traceReceivedResponse(message, responsePromise) {
        if (trace === Trace.Off || !tracer) {
            return;
        }
        if (traceFormat === TraceFormat.Text) {
            let data = undefined;
            if (trace === Trace.Verbose || trace === Trace.Compact) {
                if (message.error && message.error.data) {
                    data = `Error data: ${stringifyTrace(message.error.data)}\n\n`;
                }
                else {
                    if (message.result) {
                        data = `Result: ${stringifyTrace(message.result)}\n\n`;
                    }
                    else if (message.error === undefined) {
                        data = 'No result returned.\n\n';
                    }
                }
            }
            if (responsePromise) {
                const error = message.error ? ` Request failed: ${message.error.message} (${message.error.code}).` : '';
                tracer.log(`Received response '${responsePromise.method} - (${message.id})' in ${Date.now() - responsePromise.timerStart}ms.${error}`, data);
            }
            else {
                tracer.log(`Received response ${message.id} without active response promise.`, data);
            }
        }
        else {
            logLSPMessage('receive-response', message);
        }
    }
    function logLSPMessage(type, message) {
        if (!tracer || trace === Trace.Off) {
            return;
        }
        const lspMessage = {
            isLSPMessage: true,
            type,
            message,
            timestamp: Date.now()
        };
        tracer.log(lspMessage);
    }
    function throwIfClosedOrDisposed() {
        if (isClosed()) {
            throw new ConnectionError(ConnectionErrors.Closed, 'Connection is closed.');
        }
        if (isDisposed()) {
            throw new ConnectionError(ConnectionErrors.Disposed, 'Connection is disposed.');
        }
    }
    function throwIfListening() {
        if (isListening()) {
            throw new ConnectionError(ConnectionErrors.AlreadyListening, 'Connection is already listening');
        }
    }
    function throwIfNotListening() {
        if (!isListening()) {
            throw new Error('Call listen() first.');
        }
    }
    function undefinedToNull(param) {
        if (param === undefined) {
            return null;
        }
        else {
            return param;
        }
    }
    function nullToUndefined(param) {
        if (param === null) {
            return undefined;
        }
        else {
            return param;
        }
    }
    function isNamedParam(param) {
        return param !== undefined && param !== null && !Array.isArray(param) && typeof param === 'object';
    }
    function computeSingleParam(parameterStructures, param) {
        switch (parameterStructures) {
            case messages_1.ParameterStructures.auto:
                if (isNamedParam(param)) {
                    return nullToUndefined(param);
                }
                else {
                    return [undefinedToNull(param)];
                }
            case messages_1.ParameterStructures.byName:
                if (!isNamedParam(param)) {
                    throw new Error(`Received parameters by name but param is not an object literal.`);
                }
                return nullToUndefined(param);
            case messages_1.ParameterStructures.byPosition:
                return [undefinedToNull(param)];
            default:
                throw new Error(`Unknown parameter structure ${parameterStructures.toString()}`);
        }
    }
    function computeMessageParams(type, params) {
        let result;
        const numberOfParams = type.numberOfParams;
        switch (numberOfParams) {
            case 0:
                result = undefined;
                break;
            case 1:
                result = computeSingleParam(type.parameterStructures, params[0]);
                break;
            default:
                result = [];
                for (let i = 0; i < params.length && i < numberOfParams; i++) {
                    result.push(undefinedToNull(params[i]));
                }
                if (params.length < numberOfParams) {
                    for (let i = params.length; i < numberOfParams; i++) {
                        result.push(null);
                    }
                }
                break;
        }
        return result;
    }
    const connection = {
        sendNotification: (type, ...args) => {
            throwIfClosedOrDisposed();
            let method;
            let messageParams;
            if (Is.string(type)) {
                method = type;
                const first = args[0];
                let paramStart = 0;
                let parameterStructures = messages_1.ParameterStructures.auto;
                if (messages_1.ParameterStructures.is(first)) {
                    paramStart = 1;
                    parameterStructures = first;
                }
                let paramEnd = args.length;
                const numberOfParams = paramEnd - paramStart;
                switch (numberOfParams) {
                    case 0:
                        messageParams = undefined;
                        break;
                    case 1:
                        messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                        break;
                    default:
                        if (parameterStructures === messages_1.ParameterStructures.byName) {
                            throw new Error(`Received ${numberOfParams} parameters for 'by Name' notification parameter structure.`);
                        }
                        messageParams = args.slice(paramStart, paramEnd).map(value => undefinedToNull(value));
                        break;
                }
            }
            else {
                const params = args;
                method = type.method;
                messageParams = computeMessageParams(type, params);
            }
            const notificationMessage = {
                jsonrpc: version,
                method: method,
                params: messageParams
            };
            traceSendingNotification(notificationMessage);
            return messageWriter.write(notificationMessage).catch((error) => {
                logger.error(`Sending notification failed.`);
                throw error;
            });
        },
        onNotification: (type, handler) => {
            throwIfClosedOrDisposed();
            let method;
            if (Is.func(type)) {
                starNotificationHandler = type;
            }
            else if (handler) {
                if (Is.string(type)) {
                    method = type;
                    notificationHandlers.set(type, { type: undefined, handler });
                }
                else {
                    method = type.method;
                    notificationHandlers.set(type.method, { type, handler });
                }
            }
            return {
                dispose: () => {
                    if (method !== undefined) {
                        notificationHandlers.delete(method);
                    }
                    else {
                        starNotificationHandler = undefined;
                    }
                }
            };
        },
        onProgress: (_type, token, handler) => {
            if (progressHandlers.has(token)) {
                throw new Error(`Progress handler for token ${token} already registered`);
            }
            progressHandlers.set(token, handler);
            return {
                dispose: () => {
                    progressHandlers.delete(token);
                }
            };
        },
        sendProgress: (_type, token, value) => {
            // This should not await but simple return to ensure that we don't have another
            // async scheduling. Otherwise one send could overtake another send.
            return connection.sendNotification(ProgressNotification.type, { token, value });
        },
        onUnhandledProgress: unhandledProgressEmitter.event,
        sendRequest: (type, ...args) => {
            throwIfClosedOrDisposed();
            throwIfNotListening();
            let method;
            let messageParams;
            let token = undefined;
            if (Is.string(type)) {
                method = type;
                const first = args[0];
                const last = args[args.length - 1];
                let paramStart = 0;
                let parameterStructures = messages_1.ParameterStructures.auto;
                if (messages_1.ParameterStructures.is(first)) {
                    paramStart = 1;
                    parameterStructures = first;
                }
                let paramEnd = args.length;
                if (cancellation_1.CancellationToken.is(last)) {
                    paramEnd = paramEnd - 1;
                    token = last;
                }
                const numberOfParams = paramEnd - paramStart;
                switch (numberOfParams) {
                    case 0:
                        messageParams = undefined;
                        break;
                    case 1:
                        messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                        break;
                    default:
                        if (parameterStructures === messages_1.ParameterStructures.byName) {
                            throw new Error(`Received ${numberOfParams} parameters for 'by Name' request parameter structure.`);
                        }
                        messageParams = args.slice(paramStart, paramEnd).map(value => undefinedToNull(value));
                        break;
                }
            }
            else {
                const params = args;
                method = type.method;
                messageParams = computeMessageParams(type, params);
                const numberOfParams = type.numberOfParams;
                token = cancellation_1.CancellationToken.is(params[numberOfParams]) ? params[numberOfParams] : undefined;
            }
            const id = sequenceNumber++;
            let disposable;
            if (token) {
                disposable = token.onCancellationRequested(() => {
                    const p = cancellationStrategy.sender.sendCancellation(connection, id);
                    if (p === undefined) {
                        logger.log(`Received no promise from cancellation strategy when cancelling id ${id}`);
                        return Promise.resolve();
                    }
                    else {
                        return p.catch(() => {
                            logger.log(`Sending cancellation messages for id ${id} failed`);
                        });
                    }
                });
            }
            const requestMessage = {
                jsonrpc: version,
                id: id,
                method: method,
                params: messageParams
            };
            traceSendingRequest(requestMessage);
            if (typeof cancellationStrategy.sender.enableCancellation === 'function') {
                cancellationStrategy.sender.enableCancellation(requestMessage);
            }
            return new Promise(async (resolve, reject) => {
                const resolveWithCleanup = (r) => {
                    resolve(r);
                    cancellationStrategy.sender.cleanup(id);
                    disposable?.dispose();
                };
                const rejectWithCleanup = (r) => {
                    reject(r);
                    cancellationStrategy.sender.cleanup(id);
                    disposable?.dispose();
                };
                const responsePromise = { method: method, timerStart: Date.now(), resolve: resolveWithCleanup, reject: rejectWithCleanup };
                try {
                    await messageWriter.write(requestMessage);
                    responsePromises.set(id, responsePromise);
                }
                catch (error) {
                    logger.error(`Sending request failed.`);
                    // Writing the message failed. So we need to reject the promise.
                    responsePromise.reject(new messages_1.ResponseError(messages_1.ErrorCodes.MessageWriteError, error.message ? error.message : 'Unknown reason'));
                    throw error;
                }
            });
        },
        onRequest: (type, handler) => {
            throwIfClosedOrDisposed();
            let method = null;
            if (StarRequestHandler.is(type)) {
                method = undefined;
                starRequestHandler = type;
            }
            else if (Is.string(type)) {
                method = null;
                if (handler !== undefined) {
                    method = type;
                    requestHandlers.set(type, { handler: handler, type: undefined });
                }
            }
            else {
                if (handler !== undefined) {
                    method = type.method;
                    requestHandlers.set(type.method, { type, handler });
                }
            }
            return {
                dispose: () => {
                    if (method === null) {
                        return;
                    }
                    if (method !== undefined) {
                        requestHandlers.delete(method);
                    }
                    else {
                        starRequestHandler = undefined;
                    }
                }
            };
        },
        hasPendingResponse: () => {
            return responsePromises.size > 0;
        },
        trace: async (_value, _tracer, sendNotificationOrTraceOptions) => {
            let _sendNotification = false;
            let _traceFormat = TraceFormat.Text;
            if (sendNotificationOrTraceOptions !== undefined) {
                if (Is.boolean(sendNotificationOrTraceOptions)) {
                    _sendNotification = sendNotificationOrTraceOptions;
                }
                else {
                    _sendNotification = sendNotificationOrTraceOptions.sendNotification || false;
                    _traceFormat = sendNotificationOrTraceOptions.traceFormat || TraceFormat.Text;
                }
            }
            trace = _value;
            traceFormat = _traceFormat;
            if (trace === Trace.Off) {
                tracer = undefined;
            }
            else {
                tracer = _tracer;
            }
            if (_sendNotification && !isClosed() && !isDisposed()) {
                await connection.sendNotification(SetTraceNotification.type, { value: Trace.toString(_value) });
            }
        },
        onError: errorEmitter.event,
        onClose: closeEmitter.event,
        onUnhandledNotification: unhandledNotificationEmitter.event,
        onDispose: disposeEmitter.event,
        end: () => {
            messageWriter.end();
        },
        dispose: () => {
            if (isDisposed()) {
                return;
            }
            state = ConnectionState.Disposed;
            disposeEmitter.fire(undefined);
            const error = new messages_1.ResponseError(messages_1.ErrorCodes.PendingResponseRejected, 'Pending response rejected since connection got disposed');
            for (const promise of responsePromises.values()) {
                promise.reject(error);
            }
            responsePromises = new Map();
            requestTokens = new Map();
            knownCanceledRequests = new Set();
            messageQueue = new linkedMap_1.LinkedMap();
            // Test for backwards compatibility
            if (Is.func(messageWriter.dispose)) {
                messageWriter.dispose();
            }
            if (Is.func(messageReader.dispose)) {
                messageReader.dispose();
            }
        },
        listen: () => {
            throwIfClosedOrDisposed();
            throwIfListening();
            state = ConnectionState.Listening;
            messageReader.listen(callback);
        },
        inspect: () => {
            // eslint-disable-next-line no-console
            (0, ral_1.default)().console.log('inspect');
        }
    };
    connection.onNotification(LogTraceNotification.type, (params) => {
        if (trace === Trace.Off || !tracer) {
            return;
        }
        const verbose = trace === Trace.Verbose || trace === Trace.Compact;
        tracer.log(params.message, verbose ? params.verbose : undefined);
    });
    connection.onNotification(ProgressNotification.type, (params) => {
        const handler = progressHandlers.get(params.token);
        if (handler) {
            handler(params.value);
        }
        else {
            unhandledProgressEmitter.fire(params);
        }
    });
    return connection;
}
exports.createMessageConnection = createMessageConnection;


/***/ },

/***/ 8973
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/disposable.js ***!
  \******************************************************************************************************/
(__unused_webpack_module, exports) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Disposable = void 0;
var Disposable;
(function (Disposable) {
    function create(func) {
        return {
            dispose: func
        };
    }
    Disposable.create = create;
})(Disposable || (exports.Disposable = Disposable = {}));


/***/ },

/***/ 2682
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/events.js ***!
  \**************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Emitter = exports.Event = void 0;
const ral_1 = __webpack_require__(/*! ./ral */ 9112);
var Event;
(function (Event) {
    const _disposable = { dispose() { } };
    Event.None = function () { return _disposable; };
})(Event || (exports.Event = Event = {}));
class CallbackList {
    add(callback, context = null, bucket) {
        if (!this._callbacks) {
            this._callbacks = [];
            this._contexts = [];
        }
        this._callbacks.push(callback);
        this._contexts.push(context);
        if (Array.isArray(bucket)) {
            bucket.push({ dispose: () => this.remove(callback, context) });
        }
    }
    remove(callback, context = null) {
        if (!this._callbacks) {
            return;
        }
        let foundCallbackWithDifferentContext = false;
        for (let i = 0, len = this._callbacks.length; i < len; i++) {
            if (this._callbacks[i] === callback) {
                if (this._contexts[i] === context) {
                    // callback & context match => remove it
                    this._callbacks.splice(i, 1);
                    this._contexts.splice(i, 1);
                    return;
                }
                else {
                    foundCallbackWithDifferentContext = true;
                }
            }
        }
        if (foundCallbackWithDifferentContext) {
            throw new Error('When adding a listener with a context, you should remove it with the same context');
        }
    }
    invoke(...args) {
        if (!this._callbacks) {
            return [];
        }
        const ret = [], callbacks = this._callbacks.slice(0), contexts = this._contexts.slice(0);
        for (let i = 0, len = callbacks.length; i < len; i++) {
            try {
                ret.push(callbacks[i].apply(contexts[i], args));
            }
            catch (e) {
                // eslint-disable-next-line no-console
                (0, ral_1.default)().console.error(e);
            }
        }
        return ret;
    }
    isEmpty() {
        return !this._callbacks || this._callbacks.length === 0;
    }
    dispose() {
        this._callbacks = undefined;
        this._contexts = undefined;
    }
}
class Emitter {
    constructor(_options) {
        this._options = _options;
    }
    /**
     * For the public to allow to subscribe
     * to events from this Emitter
     */
    get event() {
        if (!this._event) {
            this._event = (listener, thisArgs, disposables) => {
                if (!this._callbacks) {
                    this._callbacks = new CallbackList();
                }
                if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) {
                    this._options.onFirstListenerAdd(this);
                }
                this._callbacks.add(listener, thisArgs);
                const result = {
                    dispose: () => {
                        if (!this._callbacks) {
                            // disposable is disposed after emitter is disposed.
                            return;
                        }
                        this._callbacks.remove(listener, thisArgs);
                        result.dispose = Emitter._noop;
                        if (this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) {
                            this._options.onLastListenerRemove(this);
                        }
                    }
                };
                if (Array.isArray(disposables)) {
                    disposables.push(result);
                }
                return result;
            };
        }
        return this._event;
    }
    /**
     * To be kept private to fire an event to
     * subscribers
     */
    fire(event) {
        if (this._callbacks) {
            this._callbacks.invoke.call(this._callbacks, event);
        }
    }
    dispose() {
        if (this._callbacks) {
            this._callbacks.dispose();
            this._callbacks = undefined;
        }
    }
}
exports.Emitter = Emitter;
Emitter._noop = function () { };


/***/ },

/***/ 2799
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/is.js ***!
  \**********************************************************************************************/
(__unused_webpack_module, exports) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stringArray = exports.array = exports.func = exports.error = exports.number = exports.string = exports.boolean = void 0;
function boolean(value) {
    return value === true || value === false;
}
exports.boolean = boolean;
function string(value) {
    return typeof value === 'string' || value instanceof String;
}
exports.string = string;
function number(value) {
    return typeof value === 'number' || value instanceof Number;
}
exports.number = number;
function error(value) {
    return value instanceof Error;
}
exports.error = error;
function func(value) {
    return typeof value === 'function';
}
exports.func = func;
function array(value) {
    return Array.isArray(value);
}
exports.array = array;
function stringArray(value) {
    return array(value) && value.every(elem => string(elem));
}
exports.stringArray = stringArray;


/***/ },

/***/ 4918
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/linkedMap.js ***!
  \*****************************************************************************************************/
(__unused_webpack_module, exports) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LRUCache = exports.LinkedMap = exports.Touch = void 0;
var Touch;
(function (Touch) {
    Touch.None = 0;
    Touch.First = 1;
    Touch.AsOld = Touch.First;
    Touch.Last = 2;
    Touch.AsNew = Touch.Last;
})(Touch || (exports.Touch = Touch = {}));
class LinkedMap {
    constructor() {
        this[_a] = 'LinkedMap';
        this._map = new Map();
        this._head = undefined;
        this._tail = undefined;
        this._size = 0;
        this._state = 0;
    }
    clear() {
        this._map.clear();
        this._head = undefined;
        this._tail = undefined;
        this._size = 0;
        this._state++;
    }
    isEmpty() {
        return !this._head && !this._tail;
    }
    get size() {
        return this._size;
    }
    get first() {
        return this._head?.value;
    }
    get last() {
        return this._tail?.value;
    }
    has(key) {
        return this._map.has(key);
    }
    get(key, touch = Touch.None) {
        const item = this._map.get(key);
        if (!item) {
            return undefined;
        }
        if (touch !== Touch.None) {
            this.touch(item, touch);
        }
        return item.value;
    }
    set(key, value, touch = Touch.None) {
        let item = this._map.get(key);
        if (item) {
            item.value = value;
            if (touch !== Touch.None) {
                this.touch(item, touch);
            }
        }
        else {
            item = { key, value, next: undefined, previous: undefined };
            switch (touch) {
                case Touch.None:
                    this.addItemLast(item);
                    break;
                case Touch.First:
                    this.addItemFirst(item);
                    break;
                case Touch.Last:
                    this.addItemLast(item);
                    break;
                default:
                    this.addItemLast(item);
                    break;
            }
            this._map.set(key, item);
            this._size++;
        }
        return this;
    }
    delete(key) {
        return !!this.remove(key);
    }
    remove(key) {
        const item = this._map.get(key);
        if (!item) {
            return undefined;
        }
        this._map.delete(key);
        this.removeItem(item);
        this._size--;
        return item.value;
    }
    shift() {
        if (!this._head && !this._tail) {
            return undefined;
        }
        if (!this._head || !this._tail) {
            throw new Error('Invalid list');
        }
        const item = this._head;
        this._map.delete(item.key);
        this.removeItem(item);
        this._size--;
        return item.value;
    }
    forEach(callbackfn, thisArg) {
        const state = this._state;
        let current = this._head;
        while (current) {
            if (thisArg) {
                callbackfn.bind(thisArg)(current.value, current.key, this);
            }
            else {
                callbackfn(current.value, current.key, this);
            }
            if (this._state !== state) {
                throw new Error(`LinkedMap got modified during iteration.`);
            }
            current = current.next;
        }
    }
    keys() {
        const state = this._state;
        let current = this._head;
        const iterator = {
            [Symbol.iterator]: () => {
                return iterator;
            },
            next: () => {
                if (this._state !== state) {
                    throw new Error(`LinkedMap got modified during iteration.`);
                }
                if (current) {
                    const result = { value: current.key, done: false };
                    current = current.next;
                    return result;
                }
                else {
                    return { value: undefined, done: true };
                }
            }
        };
        return iterator;
    }
    values() {
        const state = this._state;
        let current = this._head;
        const iterator = {
            [Symbol.iterator]: () => {
                return iterator;
            },
            next: () => {
                if (this._state !== state) {
                    throw new Error(`LinkedMap got modified during iteration.`);
                }
                if (current) {
                    const result = { value: current.value, done: false };
                    current = current.next;
                    return result;
                }
                else {
                    return { value: undefined, done: true };
                }
            }
        };
        return iterator;
    }
    entries() {
        const state = this._state;
        let current = this._head;
        const iterator = {
            [Symbol.iterator]: () => {
                return iterator;
            },
            next: () => {
                if (this._state !== state) {
                    throw new Error(`LinkedMap got modified during iteration.`);
                }
                if (current) {
                    const result = { value: [current.key, current.value], done: false };
                    current = current.next;
                    return result;
                }
                else {
                    return { value: undefined, done: true };
                }
            }
        };
        return iterator;
    }
    [(_a = Symbol.toStringTag, Symbol.iterator)]() {
        return this.entries();
    }
    trimOld(newSize) {
        if (newSize >= this.size) {
            return;
        }
        if (newSize === 0) {
            this.clear();
            return;
        }
        let current = this._head;
        let currentSize = this.size;
        while (current && currentSize > newSize) {
            this._map.delete(current.key);
            current = current.next;
            currentSize--;
        }
        this._head = current;
        this._size = currentSize;
        if (current) {
            current.previous = undefined;
        }
        this._state++;
    }
    addItemFirst(item) {
        // First time Insert
        if (!this._head && !this._tail) {
            this._tail = item;
        }
        else if (!this._head) {
            throw new Error('Invalid list');
        }
        else {
            item.next = this._head;
            this._head.previous = item;
        }
        this._head = item;
        this._state++;
    }
    addItemLast(item) {
        // First time Insert
        if (!this._head && !this._tail) {
            this._head = item;
        }
        else if (!this._tail) {
            throw new Error('Invalid list');
        }
        else {
            item.previous = this._tail;
            this._tail.next = item;
        }
        this._tail = item;
        this._state++;
    }
    removeItem(item) {
        if (item === this._head && item === this._tail) {
            this._head = undefined;
            this._tail = undefined;
        }
        else if (item === this._head) {
            // This can only happened if size === 1 which is handle
            // by the case above.
            if (!item.next) {
                throw new Error('Invalid list');
            }
            item.next.previous = undefined;
            this._head = item.next;
        }
        else if (item === this._tail) {
            // This can only happened if size === 1 which is handle
            // by the case above.
            if (!item.previous) {
                throw new Error('Invalid list');
            }
            item.previous.next = undefined;
            this._tail = item.previous;
        }
        else {
            const next = item.next;
            const previous = item.previous;
            if (!next || !previous) {
                throw new Error('Invalid list');
            }
            next.previous = previous;
            previous.next = next;
        }
        item.next = undefined;
        item.previous = undefined;
        this._state++;
    }
    touch(item, touch) {
        if (!this._head || !this._tail) {
            throw new Error('Invalid list');
        }
        if ((touch !== Touch.First && touch !== Touch.Last)) {
            return;
        }
        if (touch === Touch.First) {
            if (item === this._head) {
                return;
            }
            const next = item.next;
            const previous = item.previous;
            // Unlink the item
            if (item === this._tail) {
                // previous must be defined since item was not head but is tail
                // So there are more than on item in the map
                previous.next = undefined;
                this._tail = previous;
            }
            else {
                // Both next and previous are not undefined since item was neither head nor tail.
                next.previous = previous;
                previous.next = next;
            }
            // Insert the node at head
            item.previous = undefined;
            item.next = this._head;
            this._head.previous = item;
            this._head = item;
            this._state++;
        }
        else if (touch === Touch.Last) {
            if (item === this._tail) {
                return;
            }
            const next = item.next;
            const previous = item.previous;
            // Unlink the item.
            if (item === this._head) {
                // next must be defined since item was not tail but is head
                // So there are more than on item in the map
                next.previous = undefined;
                this._head = next;
            }
            else {
                // Both next and previous are not undefined since item was neither head nor tail.
                next.previous = previous;
                previous.next = next;
            }
            item.next = undefined;
            item.previous = this._tail;
            this._tail.next = item;
            this._tail = item;
            this._state++;
        }
    }
    toJSON() {
        const data = [];
        this.forEach((value, key) => {
            data.push([key, value]);
        });
        return data;
    }
    fromJSON(data) {
        this.clear();
        for (const [key, value] of data) {
            this.set(key, value);
        }
    }
}
exports.LinkedMap = LinkedMap;
class LRUCache extends LinkedMap {
    constructor(limit, ratio = 1) {
        super();
        this._limit = limit;
        this._ratio = Math.min(Math.max(0, ratio), 1);
    }
    get limit() {
        return this._limit;
    }
    set limit(limit) {
        this._limit = limit;
        this.checkTrim();
    }
    get ratio() {
        return this._ratio;
    }
    set ratio(ratio) {
        this._ratio = Math.min(Math.max(0, ratio), 1);
        this.checkTrim();
    }
    get(key, touch = Touch.AsNew) {
        return super.get(key, touch);
    }
    peek(key) {
        return super.get(key, Touch.None);
    }
    set(key, value) {
        super.set(key, value, Touch.Last);
        this.checkTrim();
        return this;
    }
    checkTrim() {
        if (this.size > this._limit) {
            this.trimOld(Math.round(this._limit * this._ratio));
        }
    }
}
exports.LRUCache = LRUCache;


/***/ },

/***/ 3486
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messageBuffer.js ***!
  \*********************************************************************************************************/
(__unused_webpack_module, exports) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractMessageBuffer = void 0;
const CR = 13;
const LF = 10;
const CRLF = '\r\n';
class AbstractMessageBuffer {
    constructor(encoding = 'utf-8') {
        this._encoding = encoding;
        this._chunks = [];
        this._totalLength = 0;
    }
    get encoding() {
        return this._encoding;
    }
    append(chunk) {
        const toAppend = typeof chunk === 'string' ? this.fromString(chunk, this._encoding) : chunk;
        this._chunks.push(toAppend);
        this._totalLength += toAppend.byteLength;
    }
    tryReadHeaders(lowerCaseKeys = false) {
        if (this._chunks.length === 0) {
            return undefined;
        }
        let state = 0;
        let chunkIndex = 0;
        let offset = 0;
        let chunkBytesRead = 0;
        row: while (chunkIndex < this._chunks.length) {
            const chunk = this._chunks[chunkIndex];
            offset = 0;
            column: while (offset < chunk.length) {
                const value = chunk[offset];
                switch (value) {
                    case CR:
                        switch (state) {
                            case 0:
                                state = 1;
                                break;
                            case 2:
                                state = 3;
                                break;
                            default:
                                state = 0;
                        }
                        break;
                    case LF:
                        switch (state) {
                            case 1:
                                state = 2;
                                break;
                            case 3:
                                state = 4;
                                offset++;
                                break row;
                            default:
                                state = 0;
                        }
                        break;
                    default:
                        state = 0;
                }
                offset++;
            }
            chunkBytesRead += chunk.byteLength;
            chunkIndex++;
        }
        if (state !== 4) {
            return undefined;
        }
        // The buffer contains the two CRLF at the end. So we will
        // have two empty lines after the split at the end as well.
        const buffer = this._read(chunkBytesRead + offset);
        const result = new Map();
        const headers = this.toString(buffer, 'ascii').split(CRLF);
        if (headers.length < 2) {
            return result;
        }
        for (let i = 0; i < headers.length - 2; i++) {
            const header = headers[i];
            const index = header.indexOf(':');
            if (index === -1) {
                throw new Error(`Message header must separate key and value using ':'\n${header}`);
            }
            const key = header.substr(0, index);
            const value = header.substr(index + 1).trim();
            result.set(lowerCaseKeys ? key.toLowerCase() : key, value);
        }
        return result;
    }
    tryReadBody(length) {
        if (this._totalLength < length) {
            return undefined;
        }
        return this._read(length);
    }
    get numberOfBytes() {
        return this._totalLength;
    }
    _read(byteCount) {
        if (byteCount === 0) {
            return this.emptyBuffer();
        }
        if (byteCount > this._totalLength) {
            throw new Error(`Cannot read so many bytes!`);
        }
        if (this._chunks[0].byteLength === byteCount) {
            // super fast path, precisely first chunk must be returned
            const chunk = this._chunks[0];
            this._chunks.shift();
            this._totalLength -= byteCount;
            return this.asNative(chunk);
        }
        if (this._chunks[0].byteLength > byteCount) {
            // fast path, the reading is entirely within the first chunk
            const chunk = this._chunks[0];
            const result = this.asNative(chunk, byteCount);
            this._chunks[0] = chunk.slice(byteCount);
            this._totalLength -= byteCount;
            return result;
        }
        const result = this.allocNative(byteCount);
        let resultOffset = 0;
        let chunkIndex = 0;
        while (byteCount > 0) {
            const chunk = this._chunks[chunkIndex];
            if (chunk.byteLength > byteCount) {
                // this chunk will survive
                const chunkPart = chunk.slice(0, byteCount);
                result.set(chunkPart, resultOffset);
                resultOffset += byteCount;
                this._chunks[chunkIndex] = chunk.slice(byteCount);
                this._totalLength -= byteCount;
                byteCount -= byteCount;
            }
            else {
                // this chunk will be entirely read
                result.set(chunk, resultOffset);
                resultOffset += chunk.byteLength;
                this._chunks.shift();
                this._totalLength -= chunk.byteLength;
                byteCount -= chunk.byteLength;
            }
        }
        return result;
    }
}
exports.AbstractMessageBuffer = AbstractMessageBuffer;


/***/ },

/***/ 5855
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messageReader.js ***!
  \*********************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReadableStreamMessageReader = exports.AbstractMessageReader = exports.MessageReader = void 0;
const ral_1 = __webpack_require__(/*! ./ral */ 9112);
const Is = __webpack_require__(/*! ./is */ 2799);
const events_1 = __webpack_require__(/*! ./events */ 2682);
const semaphore_1 = __webpack_require__(/*! ./semaphore */ 2013);
var MessageReader;
(function (MessageReader) {
    function is(value) {
        let candidate = value;
        return candidate && Is.func(candidate.listen) && Is.func(candidate.dispose) &&
            Is.func(candidate.onError) && Is.func(candidate.onClose) && Is.func(candidate.onPartialMessage);
    }
    MessageReader.is = is;
})(MessageReader || (exports.MessageReader = MessageReader = {}));
class AbstractMessageReader {
    constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
        this.partialMessageEmitter = new events_1.Emitter();
    }
    dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
    }
    get onError() {
        return this.errorEmitter.event;
    }
    fireError(error) {
        this.errorEmitter.fire(this.asError(error));
    }
    get onClose() {
        return this.closeEmitter.event;
    }
    fireClose() {
        this.closeEmitter.fire(undefined);
    }
    get onPartialMessage() {
        return this.partialMessageEmitter.event;
    }
    firePartialMessage(info) {
        this.partialMessageEmitter.fire(info);
    }
    asError(error) {
        if (error instanceof Error) {
            return error;
        }
        else {
            return new Error(`Reader received error. Reason: ${Is.string(error.message) ? error.message : 'unknown'}`);
        }
    }
}
exports.AbstractMessageReader = AbstractMessageReader;
var ResolvedMessageReaderOptions;
(function (ResolvedMessageReaderOptions) {
    function fromOptions(options) {
        let charset;
        let result;
        let contentDecoder;
        const contentDecoders = new Map();
        let contentTypeDecoder;
        const contentTypeDecoders = new Map();
        if (options === undefined || typeof options === 'string') {
            charset = options ?? 'utf-8';
        }
        else {
            charset = options.charset ?? 'utf-8';
            if (options.contentDecoder !== undefined) {
                contentDecoder = options.contentDecoder;
                contentDecoders.set(contentDecoder.name, contentDecoder);
            }
            if (options.contentDecoders !== undefined) {
                for (const decoder of options.contentDecoders) {
                    contentDecoders.set(decoder.name, decoder);
                }
            }
            if (options.contentTypeDecoder !== undefined) {
                contentTypeDecoder = options.contentTypeDecoder;
                contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
            }
            if (options.contentTypeDecoders !== undefined) {
                for (const decoder of options.contentTypeDecoders) {
                    contentTypeDecoders.set(decoder.name, decoder);
                }
            }
        }
        if (contentTypeDecoder === undefined) {
            contentTypeDecoder = (0, ral_1.default)().applicationJson.decoder;
            contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
        }
        return { charset, contentDecoder, contentDecoders, contentTypeDecoder, contentTypeDecoders };
    }
    ResolvedMessageReaderOptions.fromOptions = fromOptions;
})(ResolvedMessageReaderOptions || (ResolvedMessageReaderOptions = {}));
class ReadableStreamMessageReader extends AbstractMessageReader {
    constructor(readable, options) {
        super();
        this.readable = readable;
        this.options = ResolvedMessageReaderOptions.fromOptions(options);
        this.buffer = (0, ral_1.default)().messageBuffer.create(this.options.charset);
        this._partialMessageTimeout = 10000;
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.readSemaphore = new semaphore_1.Semaphore(1);
    }
    set partialMessageTimeout(timeout) {
        this._partialMessageTimeout = timeout;
    }
    get partialMessageTimeout() {
        return this._partialMessageTimeout;
    }
    listen(callback) {
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.partialMessageTimer = undefined;
        this.callback = callback;
        const result = this.readable.onData((data) => {
            this.onData(data);
        });
        this.readable.onError((error) => this.fireError(error));
        this.readable.onClose(() => this.fireClose());
        return result;
    }
    onData(data) {
        try {
            this.buffer.append(data);
            while (true) {
                if (this.nextMessageLength === -1) {
                    const headers = this.buffer.tryReadHeaders(true);
                    if (!headers) {
                        return;
                    }
                    const contentLength = headers.get('content-length');
                    if (!contentLength) {
                        this.fireError(new Error(`Header must provide a Content-Length property.\n${JSON.stringify(Object.fromEntries(headers))}`));
                        return;
                    }
                    const length = parseInt(contentLength);
                    if (isNaN(length)) {
                        this.fireError(new Error(`Content-Length value must be a number. Got ${contentLength}`));
                        return;
                    }
                    this.nextMessageLength = length;
                }
                const body = this.buffer.tryReadBody(this.nextMessageLength);
                if (body === undefined) {
                    /** We haven't received the full message yet. */
                    this.setPartialMessageTimer();
                    return;
                }
                this.clearPartialMessageTimer();
                this.nextMessageLength = -1;
                // Make sure that we convert one received message after the
                // other. Otherwise it could happen that a decoding of a second
                // smaller message finished before the decoding of a first larger
                // message and then we would deliver the second message first.
                this.readSemaphore.lock(async () => {
                    const bytes = this.options.contentDecoder !== undefined
                        ? await this.options.contentDecoder.decode(body)
                        : body;
                    const message = await this.options.contentTypeDecoder.decode(bytes, this.options);
                    this.callback(message);
                }).catch((error) => {
                    this.fireError(error);
                });
            }
        }
        catch (error) {
            this.fireError(error);
        }
    }
    clearPartialMessageTimer() {
        if (this.partialMessageTimer) {
            this.partialMessageTimer.dispose();
            this.partialMessageTimer = undefined;
        }
    }
    setPartialMessageTimer() {
        this.clearPartialMessageTimer();
        if (this._partialMessageTimeout <= 0) {
            return;
        }
        this.partialMessageTimer = (0, ral_1.default)().timer.setTimeout((token, timeout) => {
            this.partialMessageTimer = undefined;
            if (token === this.messageToken) {
                this.firePartialMessage({ messageToken: token, waitingTime: timeout });
                this.setPartialMessageTimer();
            }
        }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
    }
}
exports.ReadableStreamMessageReader = ReadableStreamMessageReader;


/***/ },

/***/ 9359
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messageWriter.js ***!
  \*********************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WriteableStreamMessageWriter = exports.AbstractMessageWriter = exports.MessageWriter = void 0;
const ral_1 = __webpack_require__(/*! ./ral */ 9112);
const Is = __webpack_require__(/*! ./is */ 2799);
const semaphore_1 = __webpack_require__(/*! ./semaphore */ 2013);
const events_1 = __webpack_require__(/*! ./events */ 2682);
const ContentLength = 'Content-Length: ';
const CRLF = '\r\n';
var MessageWriter;
(function (MessageWriter) {
    function is(value) {
        let candidate = value;
        return candidate && Is.func(candidate.dispose) && Is.func(candidate.onClose) &&
            Is.func(candidate.onError) && Is.func(candidate.write);
    }
    MessageWriter.is = is;
})(MessageWriter || (exports.MessageWriter = MessageWriter = {}));
class AbstractMessageWriter {
    constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
    }
    dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
    }
    get onError() {
        return this.errorEmitter.event;
    }
    fireError(error, message, count) {
        this.errorEmitter.fire([this.asError(error), message, count]);
    }
    get onClose() {
        return this.closeEmitter.event;
    }
    fireClose() {
        this.closeEmitter.fire(undefined);
    }
    asError(error) {
        if (error instanceof Error) {
            return error;
        }
        else {
            return new Error(`Writer received error. Reason: ${Is.string(error.message) ? error.message : 'unknown'}`);
        }
    }
}
exports.AbstractMessageWriter = AbstractMessageWriter;
var ResolvedMessageWriterOptions;
(function (ResolvedMessageWriterOptions) {
    function fromOptions(options) {
        if (options === undefined || typeof options === 'string') {
            return { charset: options ?? 'utf-8', contentTypeEncoder: (0, ral_1.default)().applicationJson.encoder };
        }
        else {
            return { charset: options.charset ?? 'utf-8', contentEncoder: options.contentEncoder, contentTypeEncoder: options.contentTypeEncoder ?? (0, ral_1.default)().applicationJson.encoder };
        }
    }
    ResolvedMessageWriterOptions.fromOptions = fromOptions;
})(ResolvedMessageWriterOptions || (ResolvedMessageWriterOptions = {}));
class WriteableStreamMessageWriter extends AbstractMessageWriter {
    constructor(writable, options) {
        super();
        this.writable = writable;
        this.options = ResolvedMessageWriterOptions.fromOptions(options);
        this.errorCount = 0;
        this.writeSemaphore = new semaphore_1.Semaphore(1);
        this.writable.onError((error) => this.fireError(error));
        this.writable.onClose(() => this.fireClose());
    }
    async write(msg) {
        return this.writeSemaphore.lock(async () => {
            const payload = this.options.contentTypeEncoder.encode(msg, this.options).then((buffer) => {
                if (this.options.contentEncoder !== undefined) {
                    return this.options.contentEncoder.encode(buffer);
                }
                else {
                    return buffer;
                }
            });
            return payload.then((buffer) => {
                const headers = [];
                headers.push(ContentLength, buffer.byteLength.toString(), CRLF);
                headers.push(CRLF);
                return this.doWrite(msg, headers, buffer);
            }, (error) => {
                this.fireError(error);
                throw error;
            });
        });
    }
    async doWrite(msg, headers, data) {
        try {
            await this.writable.write(headers.join(''), 'ascii');
            return this.writable.write(data);
        }
        catch (error) {
            this.handleError(error, msg);
            return Promise.reject(error);
        }
    }
    handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
    }
    end() {
        this.writable.end();
    }
}
exports.WriteableStreamMessageWriter = WriteableStreamMessageWriter;


/***/ },

/***/ 4651
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messages.js ***!
  \****************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Message = exports.NotificationType9 = exports.NotificationType8 = exports.NotificationType7 = exports.NotificationType6 = exports.NotificationType5 = exports.NotificationType4 = exports.NotificationType3 = exports.NotificationType2 = exports.NotificationType1 = exports.NotificationType0 = exports.NotificationType = exports.RequestType9 = exports.RequestType8 = exports.RequestType7 = exports.RequestType6 = exports.RequestType5 = exports.RequestType4 = exports.RequestType3 = exports.RequestType2 = exports.RequestType1 = exports.RequestType = exports.RequestType0 = exports.AbstractMessageSignature = exports.ParameterStructures = exports.ResponseError = exports.ErrorCodes = void 0;
const is = __webpack_require__(/*! ./is */ 2799);
/**
 * Predefined error codes.
 */
var ErrorCodes;
(function (ErrorCodes) {
    // Defined by JSON RPC
    ErrorCodes.ParseError = -32700;
    ErrorCodes.InvalidRequest = -32600;
    ErrorCodes.MethodNotFound = -32601;
    ErrorCodes.InvalidParams = -32602;
    ErrorCodes.InternalError = -32603;
    /**
     * This is the start range of JSON RPC reserved error codes.
     * It doesn't denote a real error code. No application error codes should
     * be defined between the start and end range. For backwards
     * compatibility the `ServerNotInitialized` and the `UnknownErrorCode`
     * are left in the range.
     *
     * @since 3.16.0
    */
    ErrorCodes.jsonrpcReservedErrorRangeStart = -32099;
    /** @deprecated use  jsonrpcReservedErrorRangeStart */
    ErrorCodes.serverErrorStart = -32099;
    /**
     * An error occurred when write a message to the transport layer.
     */
    ErrorCodes.MessageWriteError = -32099;
    /**
     * An error occurred when reading a message from the transport layer.
     */
    ErrorCodes.MessageReadError = -32098;
    /**
     * The connection got disposed or lost and all pending responses got
     * rejected.
     */
    ErrorCodes.PendingResponseRejected = -32097;
    /**
     * The connection is inactive and a use of it failed.
     */
    ErrorCodes.ConnectionInactive = -32096;
    /**
     * Error code indicating that a server received a notification or
     * request before the server has received the `initialize` request.
     */
    ErrorCodes.ServerNotInitialized = -32002;
    ErrorCodes.UnknownErrorCode = -32001;
    /**
     * This is the end range of JSON RPC reserved error codes.
     * It doesn't denote a real error code.
     *
     * @since 3.16.0
    */
    ErrorCodes.jsonrpcReservedErrorRangeEnd = -32000;
    /** @deprecated use  jsonrpcReservedErrorRangeEnd */
    ErrorCodes.serverErrorEnd = -32000;
})(ErrorCodes || (exports.ErrorCodes = ErrorCodes = {}));
/**
 * An error object return in a response in case a request
 * has failed.
 */
class ResponseError extends Error {
    constructor(code, message, data) {
        super(message);
        this.code = is.number(code) ? code : ErrorCodes.UnknownErrorCode;
        this.data = data;
        Object.setPrototypeOf(this, ResponseError.prototype);
    }
    toJson() {
        const result = {
            code: this.code,
            message: this.message
        };
        if (this.data !== undefined) {
            result.data = this.data;
        }
        return result;
    }
}
exports.ResponseError = ResponseError;
class ParameterStructures {
    constructor(kind) {
        this.kind = kind;
    }
    static is(value) {
        return value === ParameterStructures.auto || value === ParameterStructures.byName || value === ParameterStructures.byPosition;
    }
    toString() {
        return this.kind;
    }
}
exports.ParameterStructures = ParameterStructures;
/**
 * The parameter structure is automatically inferred on the number of parameters
 * and the parameter type in case of a single param.
 */
ParameterStructures.auto = new ParameterStructures('auto');
/**
 * Forces `byPosition` parameter structure. This is useful if you have a single
 * parameter which has a literal type.
 */
ParameterStructures.byPosition = new ParameterStructures('byPosition');
/**
 * Forces `byName` parameter structure. This is only useful when having a single
 * parameter. The library will report errors if used with a different number of
 * parameters.
 */
ParameterStructures.byName = new ParameterStructures('byName');
/**
 * An abstract implementation of a MessageType.
 */
class AbstractMessageSignature {
    constructor(method, numberOfParams) {
        this.method = method;
        this.numberOfParams = numberOfParams;
    }
    get parameterStructures() {
        return ParameterStructures.auto;
    }
}
exports.AbstractMessageSignature = AbstractMessageSignature;
/**
 * Classes to type request response pairs
 */
class RequestType0 extends AbstractMessageSignature {
    constructor(method) {
        super(method, 0);
    }
}
exports.RequestType0 = RequestType0;
class RequestType extends AbstractMessageSignature {
    constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
    }
    get parameterStructures() {
        return this._parameterStructures;
    }
}
exports.RequestType = RequestType;
class RequestType1 extends AbstractMessageSignature {
    constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
    }
    get parameterStructures() {
        return this._parameterStructures;
    }
}
exports.RequestType1 = RequestType1;
class RequestType2 extends AbstractMessageSignature {
    constructor(method) {
        super(method, 2);
    }
}
exports.RequestType2 = RequestType2;
class RequestType3 extends AbstractMessageSignature {
    constructor(method) {
        super(method, 3);
    }
}
exports.RequestType3 = RequestType3;
class RequestType4 extends AbstractMessageSignature {
    constructor(method) {
        super(method, 4);
    }
}
exports.RequestType4 = RequestType4;
class RequestType5 extends AbstractMessageSignature {
    constructor(method) {
        super(method, 5);
    }
}
exports.RequestType5 = RequestType5;
class RequestType6 extends AbstractMessageSignature {
    constructor(method) {
        super(method, 6);
    }
}
exports.RequestType6 = RequestType6;
class RequestType7 extends AbstractMessageSignature {
    constructor(method) {
        super(method, 7);
    }
}
exports.RequestType7 = RequestType7;
class RequestType8 extends AbstractMessageSignature {
    constructor(method) {
        super(method, 8);
    }
}
exports.RequestType8 = RequestType8;
class RequestType9 extends AbstractMessageSignature {
    constructor(method) {
        super(method, 9);
    }
}
exports.RequestType9 = RequestType9;
class NotificationType extends AbstractMessageSignature {
    constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
    }
    get parameterStructures() {
        return this._parameterStructures;
    }
}
exports.NotificationType = NotificationType;
class NotificationType0 extends AbstractMessageSignature {
    constructor(method) {
        super(method, 0);
    }
}
exports.NotificationType0 = NotificationType0;
class NotificationType1 extends AbstractMessageSignature {
    constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
    }
    get parameterStructures() {
        return this._parameterStructures;
    }
}
exports.NotificationType1 = NotificationType1;
class NotificationType2 extends AbstractMessageSignature {
    constructor(method) {
        super(method, 2);
    }
}
exports.NotificationType2 = NotificationType2;
class NotificationType3 extends AbstractMessageSignature {
    constructor(method) {
        super(method, 3);
    }
}
exports.NotificationType3 = NotificationType3;
class NotificationType4 extends AbstractMessageSignature {
    constructor(method) {
        super(method, 4);
    }
}
exports.NotificationType4 = NotificationType4;
class NotificationType5 extends AbstractMessageSignature {
    constructor(method) {
        super(method, 5);
    }
}
exports.NotificationType5 = NotificationType5;
class NotificationType6 extends AbstractMessageSignature {
    constructor(method) {
        super(method, 6);
    }
}
exports.NotificationType6 = NotificationType6;
class NotificationType7 extends AbstractMessageSignature {
    constructor(method) {
        super(method, 7);
    }
}
exports.NotificationType7 = NotificationType7;
class NotificationType8 extends AbstractMessageSignature {
    constructor(method) {
        super(method, 8);
    }
}
exports.NotificationType8 = NotificationType8;
class NotificationType9 extends AbstractMessageSignature {
    constructor(method) {
        super(method, 9);
    }
}
exports.NotificationType9 = NotificationType9;
var Message;
(function (Message) {
    /**
     * Tests if the given message is a request message
     */
    function isRequest(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && (is.string(candidate.id) || is.number(candidate.id));
    }
    Message.isRequest = isRequest;
    /**
     * Tests if the given message is a notification message
     */
    function isNotification(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && message.id === void 0;
    }
    Message.isNotification = isNotification;
    /**
     * Tests if the given message is a response message
     */
    function isResponse(message) {
        const candidate = message;
        return candidate && (candidate.result !== void 0 || !!candidate.error) && (is.string(candidate.id) || is.number(candidate.id) || candidate.id === null);
    }
    Message.isResponse = isResponse;
})(Message || (exports.Message = Message = {}));


/***/ },

/***/ 9112
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/ral.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, exports) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
let _ral;
function RAL() {
    if (_ral === undefined) {
        throw new Error(`No runtime abstraction layer installed`);
    }
    return _ral;
}
(function (RAL) {
    function install(ral) {
        if (ral === undefined) {
            throw new Error(`No runtime abstraction layer provided`);
        }
        _ral = ral;
    }
    RAL.install = install;
})(RAL || (RAL = {}));
exports["default"] = RAL;


/***/ },

/***/ 2013
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/semaphore.js ***!
  \*****************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Semaphore = void 0;
const ral_1 = __webpack_require__(/*! ./ral */ 9112);
class Semaphore {
    constructor(capacity = 1) {
        if (capacity <= 0) {
            throw new Error('Capacity must be greater than 0');
        }
        this._capacity = capacity;
        this._active = 0;
        this._waiting = [];
    }
    lock(thunk) {
        return new Promise((resolve, reject) => {
            this._waiting.push({ thunk, resolve, reject });
            this.runNext();
        });
    }
    get active() {
        return this._active;
    }
    runNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
            return;
        }
        (0, ral_1.default)().timer.setImmediate(() => this.doRunNext());
    }
    doRunNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
            return;
        }
        const next = this._waiting.shift();
        this._active++;
        if (this._active > this._capacity) {
            throw new Error(`To many thunks active`);
        }
        try {
            const result = next.thunk();
            if (result instanceof Promise) {
                result.then((value) => {
                    this._active--;
                    next.resolve(value);
                    this.runNext();
                }, (err) => {
                    this._active--;
                    next.reject(err);
                    this.runNext();
                });
            }
            else {
                this._active--;
                next.resolve(result);
                this.runNext();
            }
        }
        catch (err) {
            this._active--;
            next.reject(err);
            this.runNext();
        }
    }
}
exports.Semaphore = Semaphore;


/***/ },

/***/ 6782
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js ***!
  \*******************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedArrayReceiverStrategy = exports.SharedArraySenderStrategy = void 0;
const cancellation_1 = __webpack_require__(/*! ./cancellation */ 2552);
var CancellationState;
(function (CancellationState) {
    CancellationState.Continue = 0;
    CancellationState.Cancelled = 1;
})(CancellationState || (CancellationState = {}));
class SharedArraySenderStrategy {
    constructor() {
        this.buffers = new Map();
    }
    enableCancellation(request) {
        if (request.id === null) {
            return;
        }
        const buffer = new SharedArrayBuffer(4);
        const data = new Int32Array(buffer, 0, 1);
        data[0] = CancellationState.Continue;
        this.buffers.set(request.id, buffer);
        request.$cancellationData = buffer;
    }
    async sendCancellation(_conn, id) {
        const buffer = this.buffers.get(id);
        if (buffer === undefined) {
            return;
        }
        const data = new Int32Array(buffer, 0, 1);
        Atomics.store(data, 0, CancellationState.Cancelled);
    }
    cleanup(id) {
        this.buffers.delete(id);
    }
    dispose() {
        this.buffers.clear();
    }
}
exports.SharedArraySenderStrategy = SharedArraySenderStrategy;
class SharedArrayBufferCancellationToken {
    constructor(buffer) {
        this.data = new Int32Array(buffer, 0, 1);
    }
    get isCancellationRequested() {
        return Atomics.load(this.data, 0) === CancellationState.Cancelled;
    }
    get onCancellationRequested() {
        throw new Error(`Cancellation over SharedArrayBuffer doesn't support cancellation events`);
    }
}
class SharedArrayBufferCancellationTokenSource {
    constructor(buffer) {
        this.token = new SharedArrayBufferCancellationToken(buffer);
    }
    cancel() {
    }
    dispose() {
    }
}
class SharedArrayReceiverStrategy {
    constructor() {
        this.kind = 'request';
    }
    createCancellationTokenSource(request) {
        const buffer = request.$cancellationData;
        if (buffer === undefined) {
            return new cancellation_1.CancellationTokenSource();
        }
        return new SharedArrayBufferCancellationTokenSource(buffer);
    }
}
exports.SharedArrayReceiverStrategy = SharedArrayReceiverStrategy;


/***/ },

/***/ 2009
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/node/main.js ***!
  \**********************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createMessageConnection = exports.createServerSocketTransport = exports.createClientSocketTransport = exports.createServerPipeTransport = exports.createClientPipeTransport = exports.generateRandomPipeName = exports.StreamMessageWriter = exports.StreamMessageReader = exports.SocketMessageWriter = exports.SocketMessageReader = exports.PortMessageWriter = exports.PortMessageReader = exports.IPCMessageWriter = exports.IPCMessageReader = void 0;
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ----------------------------------------------------------------------------------------- */
const ril_1 = __webpack_require__(/*! ./ril */ 7829);
// Install the node runtime abstract.
ril_1.default.install();
const path = __webpack_require__(/*! path */ 6928);
const os = __webpack_require__(/*! os */ 857);
const crypto_1 = __webpack_require__(/*! crypto */ 6982);
const net_1 = __webpack_require__(/*! net */ 9278);
const api_1 = __webpack_require__(/*! ../common/api */ 431);
__exportStar(__webpack_require__(/*! ../common/api */ 431), exports);
class IPCMessageReader extends api_1.AbstractMessageReader {
    constructor(process) {
        super();
        this.process = process;
        let eventEmitter = this.process;
        eventEmitter.on('error', (error) => this.fireError(error));
        eventEmitter.on('close', () => this.fireClose());
    }
    listen(callback) {
        this.process.on('message', callback);
        return api_1.Disposable.create(() => this.process.off('message', callback));
    }
}
exports.IPCMessageReader = IPCMessageReader;
class IPCMessageWriter extends api_1.AbstractMessageWriter {
    constructor(process) {
        super();
        this.process = process;
        this.errorCount = 0;
        const eventEmitter = this.process;
        eventEmitter.on('error', (error) => this.fireError(error));
        eventEmitter.on('close', () => this.fireClose);
    }
    write(msg) {
        try {
            if (typeof this.process.send === 'function') {
                this.process.send(msg, undefined, undefined, (error) => {
                    if (error) {
                        this.errorCount++;
                        this.handleError(error, msg);
                    }
                    else {
                        this.errorCount = 0;
                    }
                });
            }
            return Promise.resolve();
        }
        catch (error) {
            this.handleError(error, msg);
            return Promise.reject(error);
        }
    }
    handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
    }
    end() {
    }
}
exports.IPCMessageWriter = IPCMessageWriter;
class PortMessageReader extends api_1.AbstractMessageReader {
    constructor(port) {
        super();
        this.onData = new api_1.Emitter;
        port.on('close', () => this.fireClose);
        port.on('error', (error) => this.fireError(error));
        port.on('message', (message) => {
            this.onData.fire(message);
        });
    }
    listen(callback) {
        return this.onData.event(callback);
    }
}
exports.PortMessageReader = PortMessageReader;
class PortMessageWriter extends api_1.AbstractMessageWriter {
    constructor(port) {
        super();
        this.port = port;
        this.errorCount = 0;
        port.on('close', () => this.fireClose());
        port.on('error', (error) => this.fireError(error));
    }
    write(msg) {
        try {
            this.port.postMessage(msg);
            return Promise.resolve();
        }
        catch (error) {
            this.handleError(error, msg);
            return Promise.reject(error);
        }
    }
    handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
    }
    end() {
    }
}
exports.PortMessageWriter = PortMessageWriter;
class SocketMessageReader extends api_1.ReadableStreamMessageReader {
    constructor(socket, encoding = 'utf-8') {
        super((0, ril_1.default)().stream.asReadableStream(socket), encoding);
    }
}
exports.SocketMessageReader = SocketMessageReader;
class SocketMessageWriter extends api_1.WriteableStreamMessageWriter {
    constructor(socket, options) {
        super((0, ril_1.default)().stream.asWritableStream(socket), options);
        this.socket = socket;
    }
    dispose() {
        super.dispose();
        this.socket.destroy();
    }
}
exports.SocketMessageWriter = SocketMessageWriter;
class StreamMessageReader extends api_1.ReadableStreamMessageReader {
    constructor(readable, encoding) {
        super((0, ril_1.default)().stream.asReadableStream(readable), encoding);
    }
}
exports.StreamMessageReader = StreamMessageReader;
class StreamMessageWriter extends api_1.WriteableStreamMessageWriter {
    constructor(writable, options) {
        super((0, ril_1.default)().stream.asWritableStream(writable), options);
    }
}
exports.StreamMessageWriter = StreamMessageWriter;
const XDG_RUNTIME_DIR = process.env['XDG_RUNTIME_DIR'];
const safeIpcPathLengths = new Map([
    ['linux', 107],
    ['darwin', 103]
]);
function generateRandomPipeName() {
    const randomSuffix = (0, crypto_1.randomBytes)(21).toString('hex');
    if (process.platform === 'win32') {
        return `\\\\.\\pipe\\vscode-jsonrpc-${randomSuffix}-sock`;
    }
    let result;
    if (XDG_RUNTIME_DIR) {
        result = path.join(XDG_RUNTIME_DIR, `vscode-ipc-${randomSuffix}.sock`);
    }
    else {
        result = path.join(os.tmpdir(), `vscode-${randomSuffix}.sock`);
    }
    const limit = safeIpcPathLengths.get(process.platform);
    if (limit !== undefined && result.length > limit) {
        (0, ril_1.default)().console.warn(`WARNING: IPC handle "${result}" is longer than ${limit} characters.`);
    }
    return result;
}
exports.generateRandomPipeName = generateRandomPipeName;
function createClientPipeTransport(pipeName, encoding = 'utf-8') {
    let connectResolve;
    const connected = new Promise((resolve, _reject) => {
        connectResolve = resolve;
    });
    return new Promise((resolve, reject) => {
        let server = (0, net_1.createServer)((socket) => {
            server.close();
            connectResolve([
                new SocketMessageReader(socket, encoding),
                new SocketMessageWriter(socket, encoding)
            ]);
        });
        server.on('error', reject);
        server.listen(pipeName, () => {
            server.removeListener('error', reject);
            resolve({
                onConnected: () => { return connected; }
            });
        });
    });
}
exports.createClientPipeTransport = createClientPipeTransport;
function createServerPipeTransport(pipeName, encoding = 'utf-8') {
    const socket = (0, net_1.createConnection)(pipeName);
    return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
    ];
}
exports.createServerPipeTransport = createServerPipeTransport;
function createClientSocketTransport(port, encoding = 'utf-8') {
    let connectResolve;
    const connected = new Promise((resolve, _reject) => {
        connectResolve = resolve;
    });
    return new Promise((resolve, reject) => {
        const server = (0, net_1.createServer)((socket) => {
            server.close();
            connectResolve([
                new SocketMessageReader(socket, encoding),
                new SocketMessageWriter(socket, encoding)
            ]);
        });
        server.on('error', reject);
        server.listen(port, '127.0.0.1', () => {
            server.removeListener('error', reject);
            resolve({
                onConnected: () => { return connected; }
            });
        });
    });
}
exports.createClientSocketTransport = createClientSocketTransport;
function createServerSocketTransport(port, encoding = 'utf-8') {
    const socket = (0, net_1.createConnection)(port, '127.0.0.1');
    return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
    ];
}
exports.createServerSocketTransport = createServerSocketTransport;
function isReadableStream(value) {
    const candidate = value;
    return candidate.read !== undefined && candidate.addListener !== undefined;
}
function isWritableStream(value) {
    const candidate = value;
    return candidate.write !== undefined && candidate.addListener !== undefined;
}
function createMessageConnection(input, output, logger, options) {
    if (!logger) {
        logger = api_1.NullLogger;
    }
    const reader = isReadableStream(input) ? new StreamMessageReader(input) : input;
    const writer = isWritableStream(output) ? new StreamMessageWriter(output) : output;
    if (api_1.ConnectionStrategy.is(options)) {
        options = { connectionStrategy: options };
    }
    return (0, api_1.createMessageConnection)(reader, writer, logger, options);
}
exports.createMessageConnection = createMessageConnection;


/***/ },

/***/ 7829
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/node/ril.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const util_1 = __webpack_require__(/*! util */ 9023);
const api_1 = __webpack_require__(/*! ../common/api */ 431);
class MessageBuffer extends api_1.AbstractMessageBuffer {
    constructor(encoding = 'utf-8') {
        super(encoding);
    }
    emptyBuffer() {
        return MessageBuffer.emptyBuffer;
    }
    fromString(value, encoding) {
        return Buffer.from(value, encoding);
    }
    toString(value, encoding) {
        if (value instanceof Buffer) {
            return value.toString(encoding);
        }
        else {
            return new util_1.TextDecoder(encoding).decode(value);
        }
    }
    asNative(buffer, length) {
        if (length === undefined) {
            return buffer instanceof Buffer ? buffer : Buffer.from(buffer);
        }
        else {
            return buffer instanceof Buffer ? buffer.slice(0, length) : Buffer.from(buffer, 0, length);
        }
    }
    allocNative(length) {
        return Buffer.allocUnsafe(length);
    }
}
MessageBuffer.emptyBuffer = Buffer.allocUnsafe(0);
class ReadableStreamWrapper {
    constructor(stream) {
        this.stream = stream;
    }
    onClose(listener) {
        this.stream.on('close', listener);
        return api_1.Disposable.create(() => this.stream.off('close', listener));
    }
    onError(listener) {
        this.stream.on('error', listener);
        return api_1.Disposable.create(() => this.stream.off('error', listener));
    }
    onEnd(listener) {
        this.stream.on('end', listener);
        return api_1.Disposable.create(() => this.stream.off('end', listener));
    }
    onData(listener) {
        this.stream.on('data', listener);
        return api_1.Disposable.create(() => this.stream.off('data', listener));
    }
}
class WritableStreamWrapper {
    constructor(stream) {
        this.stream = stream;
    }
    onClose(listener) {
        this.stream.on('close', listener);
        return api_1.Disposable.create(() => this.stream.off('close', listener));
    }
    onError(listener) {
        this.stream.on('error', listener);
        return api_1.Disposable.create(() => this.stream.off('error', listener));
    }
    onEnd(listener) {
        this.stream.on('end', listener);
        return api_1.Disposable.create(() => this.stream.off('end', listener));
    }
    write(data, encoding) {
        return new Promise((resolve, reject) => {
            const callback = (error) => {
                if (error === undefined || error === null) {
                    resolve();
                }
                else {
                    reject(error);
                }
            };
            if (typeof data === 'string') {
                this.stream.write(data, encoding, callback);
            }
            else {
                this.stream.write(data, callback);
            }
        });
    }
    end() {
        this.stream.end();
    }
}
const _ril = Object.freeze({
    messageBuffer: Object.freeze({
        create: (encoding) => new MessageBuffer(encoding)
    }),
    applicationJson: Object.freeze({
        encoder: Object.freeze({
            name: 'application/json',
            encode: (msg, options) => {
                try {
                    return Promise.resolve(Buffer.from(JSON.stringify(msg, undefined, 0), options.charset));
                }
                catch (err) {
                    return Promise.reject(err);
                }
            }
        }),
        decoder: Object.freeze({
            name: 'application/json',
            decode: (buffer, options) => {
                try {
                    if (buffer instanceof Buffer) {
                        return Promise.resolve(JSON.parse(buffer.toString(options.charset)));
                    }
                    else {
                        return Promise.resolve(JSON.parse(new util_1.TextDecoder(options.charset).decode(buffer)));
                    }
                }
                catch (err) {
                    return Promise.reject(err);
                }
            }
        })
    }),
    stream: Object.freeze({
        asReadableStream: (stream) => new ReadableStreamWrapper(stream),
        asWritableStream: (stream) => new WritableStreamWrapper(stream)
    }),
    console: console,
    timer: Object.freeze({
        setTimeout(callback, ms, ...args) {
            const handle = setTimeout(callback, ms, ...args);
            return { dispose: () => clearTimeout(handle) };
        },
        setImmediate(callback, ...args) {
            const handle = setImmediate(callback, ...args);
            return { dispose: () => clearImmediate(handle) };
        },
        setInterval(callback, ms, ...args) {
            const handle = setInterval(callback, ms, ...args);
            return { dispose: () => clearInterval(handle) };
        }
    })
});
function RIL() {
    return _ril;
}
(function (RIL) {
    function install() {
        api_1.RAL.install(_ril);
    }
    RIL.install = install;
})(RIL || (RIL = {}));
exports["default"] = RIL;


/***/ },

/***/ 2037
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/node.js ***!
  \*************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ----------------------------------------------------------------------------------------- */


module.exports = __webpack_require__(/*! ./lib/node/main */ 2009);

/***/ },

/***/ 3425
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/api.js ***!
  \********************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LSPErrorCodes = exports.createProtocolConnection = void 0;
__exportStar(__webpack_require__(/*! vscode-jsonrpc */ 2009), exports);
__exportStar(__webpack_require__(/*! vscode-languageserver-types */ 7159), exports);
__exportStar(__webpack_require__(/*! ./messages */ 7153), exports);
__exportStar(__webpack_require__(/*! ./protocol */ 6789), exports);
var connection_1 = __webpack_require__(/*! ./connection */ 2513);
Object.defineProperty(exports, "createProtocolConnection", ({ enumerable: true, get: function () { return connection_1.createProtocolConnection; } }));
var LSPErrorCodes;
(function (LSPErrorCodes) {
    /**
    * This is the start range of LSP reserved error codes.
    * It doesn't denote a real error code.
    *
    * @since 3.16.0
    */
    LSPErrorCodes.lspReservedErrorRangeStart = -32899;
    /**
     * A request failed but it was syntactically correct, e.g the
     * method name was known and the parameters were valid. The error
     * message should contain human readable information about why
     * the request failed.
     *
     * @since 3.17.0
     */
    LSPErrorCodes.RequestFailed = -32803;
    /**
     * The server cancelled the request. This error code should
     * only be used for requests that explicitly support being
     * server cancellable.
     *
     * @since 3.17.0
     */
    LSPErrorCodes.ServerCancelled = -32802;
    /**
     * The server detected that the content of a document got
     * modified outside normal conditions. A server should
     * NOT send this error code if it detects a content change
     * in it unprocessed messages. The result even computed
     * on an older state might still be useful for the client.
     *
     * If a client decides that a result is not of any use anymore
     * the client should cancel the request.
     */
    LSPErrorCodes.ContentModified = -32801;
    /**
     * The client has canceled a request and a server as detected
     * the cancel.
     */
    LSPErrorCodes.RequestCancelled = -32800;
    /**
    * This is the end range of LSP reserved error codes.
    * It doesn't denote a real error code.
    *
    * @since 3.16.0
    */
    LSPErrorCodes.lspReservedErrorRangeEnd = -32800;
})(LSPErrorCodes || (exports.LSPErrorCodes = LSPErrorCodes = {}));


/***/ },

/***/ 2513
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/connection.js ***!
  \***************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createProtocolConnection = void 0;
const vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ 2009);
function createProtocolConnection(input, output, logger, options) {
    if (vscode_jsonrpc_1.ConnectionStrategy.is(options)) {
        options = { connectionStrategy: options };
    }
    return (0, vscode_jsonrpc_1.createMessageConnection)(input, output, logger, options);
}
exports.createProtocolConnection = createProtocolConnection;


/***/ },

/***/ 7153
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/messages.js ***!
  \*************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProtocolNotificationType = exports.ProtocolNotificationType0 = exports.ProtocolRequestType = exports.ProtocolRequestType0 = exports.RegistrationType = exports.MessageDirection = void 0;
const vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ 2009);
var MessageDirection;
(function (MessageDirection) {
    MessageDirection["clientToServer"] = "clientToServer";
    MessageDirection["serverToClient"] = "serverToClient";
    MessageDirection["both"] = "both";
})(MessageDirection || (exports.MessageDirection = MessageDirection = {}));
class RegistrationType {
    constructor(method) {
        this.method = method;
    }
}
exports.RegistrationType = RegistrationType;
class ProtocolRequestType0 extends vscode_jsonrpc_1.RequestType0 {
    constructor(method) {
        super(method);
    }
}
exports.ProtocolRequestType0 = ProtocolRequestType0;
class ProtocolRequestType extends vscode_jsonrpc_1.RequestType {
    constructor(method) {
        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
    }
}
exports.ProtocolRequestType = ProtocolRequestType;
class ProtocolNotificationType0 extends vscode_jsonrpc_1.NotificationType0 {
    constructor(method) {
        super(method);
    }
}
exports.ProtocolNotificationType0 = ProtocolNotificationType0;
class ProtocolNotificationType extends vscode_jsonrpc_1.NotificationType {
    constructor(method) {
        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
    }
}
exports.ProtocolNotificationType = ProtocolNotificationType;


/***/ },

/***/ 3588
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js ***!
  \***************************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) TypeFox, Microsoft and others. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CallHierarchyOutgoingCallsRequest = exports.CallHierarchyIncomingCallsRequest = exports.CallHierarchyPrepareRequest = void 0;
const messages_1 = __webpack_require__(/*! ./messages */ 7153);
/**
 * A request to result a `CallHierarchyItem` in a document at a given position.
 * Can be used as an input to an incoming or outgoing call hierarchy.
 *
 * @since 3.16.0
 */
var CallHierarchyPrepareRequest;
(function (CallHierarchyPrepareRequest) {
    CallHierarchyPrepareRequest.method = 'textDocument/prepareCallHierarchy';
    CallHierarchyPrepareRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CallHierarchyPrepareRequest.type = new messages_1.ProtocolRequestType(CallHierarchyPrepareRequest.method);
})(CallHierarchyPrepareRequest || (exports.CallHierarchyPrepareRequest = CallHierarchyPrepareRequest = {}));
/**
 * A request to resolve the incoming calls for a given `CallHierarchyItem`.
 *
 * @since 3.16.0
 */
var CallHierarchyIncomingCallsRequest;
(function (CallHierarchyIncomingCallsRequest) {
    CallHierarchyIncomingCallsRequest.method = 'callHierarchy/incomingCalls';
    CallHierarchyIncomingCallsRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CallHierarchyIncomingCallsRequest.type = new messages_1.ProtocolRequestType(CallHierarchyIncomingCallsRequest.method);
})(CallHierarchyIncomingCallsRequest || (exports.CallHierarchyIncomingCallsRequest = CallHierarchyIncomingCallsRequest = {}));
/**
 * A request to resolve the outgoing calls for a given `CallHierarchyItem`.
 *
 * @since 3.16.0
 */
var CallHierarchyOutgoingCallsRequest;
(function (CallHierarchyOutgoingCallsRequest) {
    CallHierarchyOutgoingCallsRequest.method = 'callHierarchy/outgoingCalls';
    CallHierarchyOutgoingCallsRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CallHierarchyOutgoingCallsRequest.type = new messages_1.ProtocolRequestType(CallHierarchyOutgoingCallsRequest.method);
})(CallHierarchyOutgoingCallsRequest || (exports.CallHierarchyOutgoingCallsRequest = CallHierarchyOutgoingCallsRequest = {}));


/***/ },

/***/ 1981
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js ***!
  \***************************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ColorPresentationRequest = exports.DocumentColorRequest = void 0;
const messages_1 = __webpack_require__(/*! ./messages */ 7153);
/**
 * A request to list all color symbols found in a given text document. The request's
 * parameter is of type {@link DocumentColorParams} the
 * response is of type {@link ColorInformation ColorInformation[]} or a Thenable
 * that resolves to such.
 */
var DocumentColorRequest;
(function (DocumentColorRequest) {
    DocumentColorRequest.method = 'textDocument/documentColor';
    DocumentColorRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentColorRequest.type = new messages_1.ProtocolRequestType(DocumentColorRequest.method);
})(DocumentColorRequest || (exports.DocumentColorRequest = DocumentColorRequest = {}));
/**
 * A request to list all presentation for a color. The request's
 * parameter is of type {@link ColorPresentationParams} the
 * response is of type {@link ColorInformation ColorInformation[]} or a Thenable
 * that resolves to such.
 */
var ColorPresentationRequest;
(function (ColorPresentationRequest) {
    ColorPresentationRequest.method = 'textDocument/colorPresentation';
    ColorPresentationRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    ColorPresentationRequest.type = new messages_1.ProtocolRequestType(ColorPresentationRequest.method);
})(ColorPresentationRequest || (exports.ColorPresentationRequest = ColorPresentationRequest = {}));


/***/ },

/***/ 2241
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js ***!
  \***************************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigurationRequest = void 0;
const messages_1 = __webpack_require__(/*! ./messages */ 7153);
//---- Get Configuration request ----
/**
 * The 'workspace/configuration' request is sent from the server to the client to fetch a certain
 * configuration setting.
 *
 * This pull model replaces the old push model were the client signaled configuration change via an
 * event. If the server still needs to react to configuration changes (since the server caches the
 * result of `workspace/configuration` requests) the server should register for an empty configuration
 * change event and empty the cache if such an event is received.
 */
var ConfigurationRequest;
(function (ConfigurationRequest) {
    ConfigurationRequest.method = 'workspace/configuration';
    ConfigurationRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    ConfigurationRequest.type = new messages_1.ProtocolRequestType(ConfigurationRequest.method);
})(ConfigurationRequest || (exports.ConfigurationRequest = ConfigurationRequest = {}));


/***/ },

/***/ 679
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js ***!
  \*************************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeclarationRequest = void 0;
const messages_1 = __webpack_require__(/*! ./messages */ 7153);
// @ts-ignore: to avoid inlining LocationLink as dynamic import
let __noDynamicImport;
/**
 * A request to resolve the type definition locations of a symbol at a given text
 * document position. The request's parameter is of type {@link TextDocumentPositionParams}
 * the response is of type {@link Declaration} or a typed array of {@link DeclarationLink}
 * or a Thenable that resolves to such.
 */
var DeclarationRequest;
(function (DeclarationRequest) {
    DeclarationRequest.method = 'textDocument/declaration';
    DeclarationRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DeclarationRequest.type = new messages_1.ProtocolRequestType(DeclarationRequest.method);
})(DeclarationRequest || (exports.DeclarationRequest = DeclarationRequest = {}));


/***/ },

/***/ 4744
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js ***!
  \************************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DiagnosticRefreshRequest = exports.WorkspaceDiagnosticRequest = exports.DocumentDiagnosticRequest = exports.DocumentDiagnosticReportKind = exports.DiagnosticServerCancellationData = void 0;
const vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ 2009);
const Is = __webpack_require__(/*! ./utils/is */ 8495);
const messages_1 = __webpack_require__(/*! ./messages */ 7153);
/**
 * @since 3.17.0
 */
var DiagnosticServerCancellationData;
(function (DiagnosticServerCancellationData) {
    function is(value) {
        const candidate = value;
        return candidate && Is.boolean(candidate.retriggerRequest);
    }
    DiagnosticServerCancellationData.is = is;
})(DiagnosticServerCancellationData || (exports.DiagnosticServerCancellationData = DiagnosticServerCancellationData = {}));
/**
 * The document diagnostic report kinds.
 *
 * @since 3.17.0
 */
var DocumentDiagnosticReportKind;
(function (DocumentDiagnosticReportKind) {
    /**
     * A diagnostic report with a full
     * set of problems.
     */
    DocumentDiagnosticReportKind.Full = 'full';
    /**
     * A report indicating that the last
     * returned report is still accurate.
     */
    DocumentDiagnosticReportKind.Unchanged = 'unchanged';
})(DocumentDiagnosticReportKind || (exports.DocumentDiagnosticReportKind = DocumentDiagnosticReportKind = {}));
/**
 * The document diagnostic request definition.
 *
 * @since 3.17.0
 */
var DocumentDiagnosticRequest;
(function (DocumentDiagnosticRequest) {
    DocumentDiagnosticRequest.method = 'textDocument/diagnostic';
    DocumentDiagnosticRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentDiagnosticRequest.type = new messages_1.ProtocolRequestType(DocumentDiagnosticRequest.method);
    DocumentDiagnosticRequest.partialResult = new vscode_jsonrpc_1.ProgressType();
})(DocumentDiagnosticRequest || (exports.DocumentDiagnosticRequest = DocumentDiagnosticRequest = {}));
/**
 * The workspace diagnostic request definition.
 *
 * @since 3.17.0
 */
var WorkspaceDiagnosticRequest;
(function (WorkspaceDiagnosticRequest) {
    WorkspaceDiagnosticRequest.method = 'workspace/diagnostic';
    WorkspaceDiagnosticRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    WorkspaceDiagnosticRequest.type = new messages_1.ProtocolRequestType(WorkspaceDiagnosticRequest.method);
    WorkspaceDiagnosticRequest.partialResult = new vscode_jsonrpc_1.ProgressType();
})(WorkspaceDiagnosticRequest || (exports.WorkspaceDiagnosticRequest = WorkspaceDiagnosticRequest = {}));
/**
 * The diagnostic refresh request definition.
 *
 * @since 3.17.0
 */
var DiagnosticRefreshRequest;
(function (DiagnosticRefreshRequest) {
    DiagnosticRefreshRequest.method = `workspace/diagnostic/refresh`;
    DiagnosticRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    DiagnosticRefreshRequest.type = new messages_1.ProtocolRequestType0(DiagnosticRefreshRequest.method);
})(DiagnosticRefreshRequest || (exports.DiagnosticRefreshRequest = DiagnosticRefreshRequest = {}));


/***/ },

/***/ 3
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js ***!
  \****************************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WillDeleteFilesRequest = exports.DidDeleteFilesNotification = exports.DidRenameFilesNotification = exports.WillRenameFilesRequest = exports.DidCreateFilesNotification = exports.WillCreateFilesRequest = exports.FileOperationPatternKind = void 0;
const messages_1 = __webpack_require__(/*! ./messages */ 7153);
/**
 * A pattern kind describing if a glob pattern matches a file a folder or
 * both.
 *
 * @since 3.16.0
 */
var FileOperationPatternKind;
(function (FileOperationPatternKind) {
    /**
     * The pattern matches a file only.
     */
    FileOperationPatternKind.file = 'file';
    /**
     * The pattern matches a folder only.
     */
    FileOperationPatternKind.folder = 'folder';
})(FileOperationPatternKind || (exports.FileOperationPatternKind = FileOperationPatternKind = {}));
/**
 * The will create files request is sent from the client to the server before files are actually
 * created as long as the creation is triggered from within the client.
 *
 * The request can return a `WorkspaceEdit` which will be applied to workspace before the
 * files are created. Hence the `WorkspaceEdit` can not manipulate the content of the file
 * to be created.
 *
 * @since 3.16.0
 */
var WillCreateFilesRequest;
(function (WillCreateFilesRequest) {
    WillCreateFilesRequest.method = 'workspace/willCreateFiles';
    WillCreateFilesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    WillCreateFilesRequest.type = new messages_1.ProtocolRequestType(WillCreateFilesRequest.method);
})(WillCreateFilesRequest || (exports.WillCreateFilesRequest = WillCreateFilesRequest = {}));
/**
 * The did create files notification is sent from the client to the server when
 * files were created from within the client.
 *
 * @since 3.16.0
 */
var DidCreateFilesNotification;
(function (DidCreateFilesNotification) {
    DidCreateFilesNotification.method = 'workspace/didCreateFiles';
    DidCreateFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidCreateFilesNotification.type = new messages_1.ProtocolNotificationType(DidCreateFilesNotification.method);
})(DidCreateFilesNotification || (exports.DidCreateFilesNotification = DidCreateFilesNotification = {}));
/**
 * The will rename files request is sent from the client to the server before files are actually
 * renamed as long as the rename is triggered from within the client.
 *
 * @since 3.16.0
 */
var WillRenameFilesRequest;
(function (WillRenameFilesRequest) {
    WillRenameFilesRequest.method = 'workspace/willRenameFiles';
    WillRenameFilesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    WillRenameFilesRequest.type = new messages_1.ProtocolRequestType(WillRenameFilesRequest.method);
})(WillRenameFilesRequest || (exports.WillRenameFilesRequest = WillRenameFilesRequest = {}));
/**
 * The did rename files notification is sent from the client to the server when
 * files were renamed from within the client.
 *
 * @since 3.16.0
 */
var DidRenameFilesNotification;
(function (DidRenameFilesNotification) {
    DidRenameFilesNotification.method = 'workspace/didRenameFiles';
    DidRenameFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidRenameFilesNotification.type = new messages_1.ProtocolNotificationType(DidRenameFilesNotification.method);
})(DidRenameFilesNotification || (exports.DidRenameFilesNotification = DidRenameFilesNotification = {}));
/**
 * The will delete files request is sent from the client to the server before files are actually
 * deleted as long as the deletion is triggered from within the client.
 *
 * @since 3.16.0
 */
var DidDeleteFilesNotification;
(function (DidDeleteFilesNotification) {
    DidDeleteFilesNotification.method = 'workspace/didDeleteFiles';
    DidDeleteFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidDeleteFilesNotification.type = new messages_1.ProtocolNotificationType(DidDeleteFilesNotification.method);
})(DidDeleteFilesNotification || (exports.DidDeleteFilesNotification = DidDeleteFilesNotification = {}));
/**
 * The did delete files notification is sent from the client to the server when
 * files were deleted from within the client.
 *
 * @since 3.16.0
 */
var WillDeleteFilesRequest;
(function (WillDeleteFilesRequest) {
    WillDeleteFilesRequest.method = 'workspace/willDeleteFiles';
    WillDeleteFilesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    WillDeleteFilesRequest.type = new messages_1.ProtocolRequestType(WillDeleteFilesRequest.method);
})(WillDeleteFilesRequest || (exports.WillDeleteFilesRequest = WillDeleteFilesRequest = {}));


/***/ },

/***/ 4893
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js ***!
  \**************************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FoldingRangeRefreshRequest = exports.FoldingRangeRequest = void 0;
const messages_1 = __webpack_require__(/*! ./messages */ 7153);
/**
 * A request to provide folding ranges in a document. The request's
 * parameter is of type {@link FoldingRangeParams}, the
 * response is of type {@link FoldingRangeList} or a Thenable
 * that resolves to such.
 */
var FoldingRangeRequest;
(function (FoldingRangeRequest) {
    FoldingRangeRequest.method = 'textDocument/foldingRange';
    FoldingRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    FoldingRangeRequest.type = new messages_1.ProtocolRequestType(FoldingRangeRequest.method);
})(FoldingRangeRequest || (exports.FoldingRangeRequest = FoldingRangeRequest = {}));
/**
 * @since 3.18.0
 * @proposed
 */
var FoldingRangeRefreshRequest;
(function (FoldingRangeRefreshRequest) {
    FoldingRangeRefreshRequest.method = `workspace/foldingRange/refresh`;
    FoldingRangeRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    FoldingRangeRefreshRequest.type = new messages_1.ProtocolRequestType0(FoldingRangeRefreshRequest.method);
})(FoldingRangeRefreshRequest || (exports.FoldingRangeRefreshRequest = FoldingRangeRefreshRequest = {}));


/***/ },

/***/ 7201
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js ***!
  \****************************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImplementationRequest = void 0;
const messages_1 = __webpack_require__(/*! ./messages */ 7153);
// @ts-ignore: to avoid inlining LocationLink as dynamic import
let __noDynamicImport;
/**
 * A request to resolve the implementation locations of a symbol at a given text
 * document position. The request's parameter is of type {@link TextDocumentPositionParams}
 * the response is of type {@link Definition} or a Thenable that resolves to such.
 */
var ImplementationRequest;
(function (ImplementationRequest) {
    ImplementationRequest.method = 'textDocument/implementation';
    ImplementationRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    ImplementationRequest.type = new messages_1.ProtocolRequestType(ImplementationRequest.method);
})(ImplementationRequest || (exports.ImplementationRequest = ImplementationRequest = {}));


/***/ },

/***/ 2129
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js ***!
  \***********************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InlayHintRefreshRequest = exports.InlayHintResolveRequest = exports.InlayHintRequest = void 0;
const messages_1 = __webpack_require__(/*! ./messages */ 7153);
/**
 * A request to provide inlay hints in a document. The request's parameter is of
 * type {@link InlayHintsParams}, the response is of type
 * {@link InlayHint InlayHint[]} or a Thenable that resolves to such.
 *
 * @since 3.17.0
 */
var InlayHintRequest;
(function (InlayHintRequest) {
    InlayHintRequest.method = 'textDocument/inlayHint';
    InlayHintRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    InlayHintRequest.type = new messages_1.ProtocolRequestType(InlayHintRequest.method);
})(InlayHintRequest || (exports.InlayHintRequest = InlayHintRequest = {}));
/**
 * A request to resolve additional properties for an inlay hint.
 * The request's parameter is of type {@link InlayHint}, the response is
 * of type {@link InlayHint} or a Thenable that resolves to such.
 *
 * @since 3.17.0
 */
var InlayHintResolveRequest;
(function (InlayHintResolveRequest) {
    InlayHintResolveRequest.method = 'inlayHint/resolve';
    InlayHintResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    InlayHintResolveRequest.type = new messages_1.ProtocolRequestType(InlayHintResolveRequest.method);
})(InlayHintResolveRequest || (exports.InlayHintResolveRequest = InlayHintResolveRequest = {}));
/**
 * @since 3.17.0
 */
var InlayHintRefreshRequest;
(function (InlayHintRefreshRequest) {
    InlayHintRefreshRequest.method = `workspace/inlayHint/refresh`;
    InlayHintRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    InlayHintRefreshRequest.type = new messages_1.ProtocolRequestType0(InlayHintRefreshRequest.method);
})(InlayHintRefreshRequest || (exports.InlayHintRefreshRequest = InlayHintRefreshRequest = {}));


/***/ },

/***/ 744
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js ***!
  \******************************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InlineCompletionRequest = void 0;
const messages_1 = __webpack_require__(/*! ./messages */ 7153);
/**
 * A request to provide inline completions in a document. The request's parameter is of
 * type {@link InlineCompletionParams}, the response is of type
 * {@link InlineCompletion InlineCompletion[]} or a Thenable that resolves to such.
 *
 * @since 3.18.0
 * @proposed
 */
var InlineCompletionRequest;
(function (InlineCompletionRequest) {
    InlineCompletionRequest.method = 'textDocument/inlineCompletion';
    InlineCompletionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    InlineCompletionRequest.type = new messages_1.ProtocolRequestType(InlineCompletionRequest.method);
})(InlineCompletionRequest || (exports.InlineCompletionRequest = InlineCompletionRequest = {}));


/***/ },

/***/ 8417
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js ***!
  \*************************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InlineValueRefreshRequest = exports.InlineValueRequest = void 0;
const messages_1 = __webpack_require__(/*! ./messages */ 7153);
/**
 * A request to provide inline values in a document. The request's parameter is of
 * type {@link InlineValueParams}, the response is of type
 * {@link InlineValue InlineValue[]} or a Thenable that resolves to such.
 *
 * @since 3.17.0
 */
var InlineValueRequest;
(function (InlineValueRequest) {
    InlineValueRequest.method = 'textDocument/inlineValue';
    InlineValueRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    InlineValueRequest.type = new messages_1.ProtocolRequestType(InlineValueRequest.method);
})(InlineValueRequest || (exports.InlineValueRequest = InlineValueRequest = {}));
/**
 * @since 3.17.0
 */
var InlineValueRefreshRequest;
(function (InlineValueRefreshRequest) {
    InlineValueRefreshRequest.method = `workspace/inlineValue/refresh`;
    InlineValueRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    InlineValueRefreshRequest.type = new messages_1.ProtocolRequestType0(InlineValueRefreshRequest.method);
})(InlineValueRefreshRequest || (exports.InlineValueRefreshRequest = InlineValueRefreshRequest = {}));


/***/ },

/***/ 6789
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.js ***!
  \*************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkspaceSymbolRequest = exports.CodeActionResolveRequest = exports.CodeActionRequest = exports.DocumentSymbolRequest = exports.DocumentHighlightRequest = exports.ReferencesRequest = exports.DefinitionRequest = exports.SignatureHelpRequest = exports.SignatureHelpTriggerKind = exports.HoverRequest = exports.CompletionResolveRequest = exports.CompletionRequest = exports.CompletionTriggerKind = exports.PublishDiagnosticsNotification = exports.WatchKind = exports.RelativePattern = exports.FileChangeType = exports.DidChangeWatchedFilesNotification = exports.WillSaveTextDocumentWaitUntilRequest = exports.WillSaveTextDocumentNotification = exports.TextDocumentSaveReason = exports.DidSaveTextDocumentNotification = exports.DidCloseTextDocumentNotification = exports.DidChangeTextDocumentNotification = exports.TextDocumentContentChangeEvent = exports.DidOpenTextDocumentNotification = exports.TextDocumentSyncKind = exports.TelemetryEventNotification = exports.LogMessageNotification = exports.ShowMessageRequest = exports.ShowMessageNotification = exports.MessageType = exports.DidChangeConfigurationNotification = exports.ExitNotification = exports.ShutdownRequest = exports.InitializedNotification = exports.InitializeErrorCodes = exports.InitializeRequest = exports.WorkDoneProgressOptions = exports.TextDocumentRegistrationOptions = exports.StaticRegistrationOptions = exports.PositionEncodingKind = exports.FailureHandlingKind = exports.ResourceOperationKind = exports.UnregistrationRequest = exports.RegistrationRequest = exports.DocumentSelector = exports.NotebookCellTextDocumentFilter = exports.NotebookDocumentFilter = exports.TextDocumentFilter = void 0;
exports.MonikerRequest = exports.MonikerKind = exports.UniquenessLevel = exports.WillDeleteFilesRequest = exports.DidDeleteFilesNotification = exports.WillRenameFilesRequest = exports.DidRenameFilesNotification = exports.WillCreateFilesRequest = exports.DidCreateFilesNotification = exports.FileOperationPatternKind = exports.LinkedEditingRangeRequest = exports.ShowDocumentRequest = exports.SemanticTokensRegistrationType = exports.SemanticTokensRefreshRequest = exports.SemanticTokensRangeRequest = exports.SemanticTokensDeltaRequest = exports.SemanticTokensRequest = exports.TokenFormat = exports.CallHierarchyPrepareRequest = exports.CallHierarchyOutgoingCallsRequest = exports.CallHierarchyIncomingCallsRequest = exports.WorkDoneProgressCancelNotification = exports.WorkDoneProgressCreateRequest = exports.WorkDoneProgress = exports.SelectionRangeRequest = exports.DeclarationRequest = exports.FoldingRangeRefreshRequest = exports.FoldingRangeRequest = exports.ColorPresentationRequest = exports.DocumentColorRequest = exports.ConfigurationRequest = exports.DidChangeWorkspaceFoldersNotification = exports.WorkspaceFoldersRequest = exports.TypeDefinitionRequest = exports.ImplementationRequest = exports.ApplyWorkspaceEditRequest = exports.ExecuteCommandRequest = exports.PrepareRenameRequest = exports.RenameRequest = exports.PrepareSupportDefaultBehavior = exports.DocumentOnTypeFormattingRequest = exports.DocumentRangesFormattingRequest = exports.DocumentRangeFormattingRequest = exports.DocumentFormattingRequest = exports.DocumentLinkResolveRequest = exports.DocumentLinkRequest = exports.CodeLensRefreshRequest = exports.CodeLensResolveRequest = exports.CodeLensRequest = exports.WorkspaceSymbolResolveRequest = void 0;
exports.InlineCompletionRequest = exports.DidCloseNotebookDocumentNotification = exports.DidSaveNotebookDocumentNotification = exports.DidChangeNotebookDocumentNotification = exports.NotebookCellArrayChange = exports.DidOpenNotebookDocumentNotification = exports.NotebookDocumentSyncRegistrationType = exports.NotebookDocument = exports.NotebookCell = exports.ExecutionSummary = exports.NotebookCellKind = exports.DiagnosticRefreshRequest = exports.WorkspaceDiagnosticRequest = exports.DocumentDiagnosticRequest = exports.DocumentDiagnosticReportKind = exports.DiagnosticServerCancellationData = exports.InlayHintRefreshRequest = exports.InlayHintResolveRequest = exports.InlayHintRequest = exports.InlineValueRefreshRequest = exports.InlineValueRequest = exports.TypeHierarchySupertypesRequest = exports.TypeHierarchySubtypesRequest = exports.TypeHierarchyPrepareRequest = void 0;
const messages_1 = __webpack_require__(/*! ./messages */ 7153);
const vscode_languageserver_types_1 = __webpack_require__(/*! vscode-languageserver-types */ 7159);
const Is = __webpack_require__(/*! ./utils/is */ 8495);
const protocol_implementation_1 = __webpack_require__(/*! ./protocol.implementation */ 7201);
Object.defineProperty(exports, "ImplementationRequest", ({ enumerable: true, get: function () { return protocol_implementation_1.ImplementationRequest; } }));
const protocol_typeDefinition_1 = __webpack_require__(/*! ./protocol.typeDefinition */ 158);
Object.defineProperty(exports, "TypeDefinitionRequest", ({ enumerable: true, get: function () { return protocol_typeDefinition_1.TypeDefinitionRequest; } }));
const protocol_workspaceFolder_1 = __webpack_require__(/*! ./protocol.workspaceFolder */ 3874);
Object.defineProperty(exports, "WorkspaceFoldersRequest", ({ enumerable: true, get: function () { return protocol_workspaceFolder_1.WorkspaceFoldersRequest; } }));
Object.defineProperty(exports, "DidChangeWorkspaceFoldersNotification", ({ enumerable: true, get: function () { return protocol_workspaceFolder_1.DidChangeWorkspaceFoldersNotification; } }));
const protocol_configuration_1 = __webpack_require__(/*! ./protocol.configuration */ 2241);
Object.defineProperty(exports, "ConfigurationRequest", ({ enumerable: true, get: function () { return protocol_configuration_1.ConfigurationRequest; } }));
const protocol_colorProvider_1 = __webpack_require__(/*! ./protocol.colorProvider */ 1981);
Object.defineProperty(exports, "DocumentColorRequest", ({ enumerable: true, get: function () { return protocol_colorProvider_1.DocumentColorRequest; } }));
Object.defineProperty(exports, "ColorPresentationRequest", ({ enumerable: true, get: function () { return protocol_colorProvider_1.ColorPresentationRequest; } }));
const protocol_foldingRange_1 = __webpack_require__(/*! ./protocol.foldingRange */ 4893);
Object.defineProperty(exports, "FoldingRangeRequest", ({ enumerable: true, get: function () { return protocol_foldingRange_1.FoldingRangeRequest; } }));
Object.defineProperty(exports, "FoldingRangeRefreshRequest", ({ enumerable: true, get: function () { return protocol_foldingRange_1.FoldingRangeRefreshRequest; } }));
const protocol_declaration_1 = __webpack_require__(/*! ./protocol.declaration */ 679);
Object.defineProperty(exports, "DeclarationRequest", ({ enumerable: true, get: function () { return protocol_declaration_1.DeclarationRequest; } }));
const protocol_selectionRange_1 = __webpack_require__(/*! ./protocol.selectionRange */ 6124);
Object.defineProperty(exports, "SelectionRangeRequest", ({ enumerable: true, get: function () { return protocol_selectionRange_1.SelectionRangeRequest; } }));
const protocol_progress_1 = __webpack_require__(/*! ./protocol.progress */ 8836);
Object.defineProperty(exports, "WorkDoneProgress", ({ enumerable: true, get: function () { return protocol_progress_1.WorkDoneProgress; } }));
Object.defineProperty(exports, "WorkDoneProgressCreateRequest", ({ enumerable: true, get: function () { return protocol_progress_1.WorkDoneProgressCreateRequest; } }));
Object.defineProperty(exports, "WorkDoneProgressCancelNotification", ({ enumerable: true, get: function () { return protocol_progress_1.WorkDoneProgressCancelNotification; } }));
const protocol_callHierarchy_1 = __webpack_require__(/*! ./protocol.callHierarchy */ 3588);
Object.defineProperty(exports, "CallHierarchyIncomingCallsRequest", ({ enumerable: true, get: function () { return protocol_callHierarchy_1.CallHierarchyIncomingCallsRequest; } }));
Object.defineProperty(exports, "CallHierarchyOutgoingCallsRequest", ({ enumerable: true, get: function () { return protocol_callHierarchy_1.CallHierarchyOutgoingCallsRequest; } }));
Object.defineProperty(exports, "CallHierarchyPrepareRequest", ({ enumerable: true, get: function () { return protocol_callHierarchy_1.CallHierarchyPrepareRequest; } }));
const protocol_semanticTokens_1 = __webpack_require__(/*! ./protocol.semanticTokens */ 4157);
Object.defineProperty(exports, "TokenFormat", ({ enumerable: true, get: function () { return protocol_semanticTokens_1.TokenFormat; } }));
Object.defineProperty(exports, "SemanticTokensRequest", ({ enumerable: true, get: function () { return protocol_semanticTokens_1.SemanticTokensRequest; } }));
Object.defineProperty(exports, "SemanticTokensDeltaRequest", ({ enumerable: true, get: function () { return protocol_semanticTokens_1.SemanticTokensDeltaRequest; } }));
Object.defineProperty(exports, "SemanticTokensRangeRequest", ({ enumerable: true, get: function () { return protocol_semanticTokens_1.SemanticTokensRangeRequest; } }));
Object.defineProperty(exports, "SemanticTokensRefreshRequest", ({ enumerable: true, get: function () { return protocol_semanticTokens_1.SemanticTokensRefreshRequest; } }));
Object.defineProperty(exports, "SemanticTokensRegistrationType", ({ enumerable: true, get: function () { return protocol_semanticTokens_1.SemanticTokensRegistrationType; } }));
const protocol_showDocument_1 = __webpack_require__(/*! ./protocol.showDocument */ 43);
Object.defineProperty(exports, "ShowDocumentRequest", ({ enumerable: true, get: function () { return protocol_showDocument_1.ShowDocumentRequest; } }));
const protocol_linkedEditingRange_1 = __webpack_require__(/*! ./protocol.linkedEditingRange */ 5259);
Object.defineProperty(exports, "LinkedEditingRangeRequest", ({ enumerable: true, get: function () { return protocol_linkedEditingRange_1.LinkedEditingRangeRequest; } }));
const protocol_fileOperations_1 = __webpack_require__(/*! ./protocol.fileOperations */ 3);
Object.defineProperty(exports, "FileOperationPatternKind", ({ enumerable: true, get: function () { return protocol_fileOperations_1.FileOperationPatternKind; } }));
Object.defineProperty(exports, "DidCreateFilesNotification", ({ enumerable: true, get: function () { return protocol_fileOperations_1.DidCreateFilesNotification; } }));
Object.defineProperty(exports, "WillCreateFilesRequest", ({ enumerable: true, get: function () { return protocol_fileOperations_1.WillCreateFilesRequest; } }));
Object.defineProperty(exports, "DidRenameFilesNotification", ({ enumerable: true, get: function () { return protocol_fileOperations_1.DidRenameFilesNotification; } }));
Object.defineProperty(exports, "WillRenameFilesRequest", ({ enumerable: true, get: function () { return protocol_fileOperations_1.WillRenameFilesRequest; } }));
Object.defineProperty(exports, "DidDeleteFilesNotification", ({ enumerable: true, get: function () { return protocol_fileOperations_1.DidDeleteFilesNotification; } }));
Object.defineProperty(exports, "WillDeleteFilesRequest", ({ enumerable: true, get: function () { return protocol_fileOperations_1.WillDeleteFilesRequest; } }));
const protocol_moniker_1 = __webpack_require__(/*! ./protocol.moniker */ 2318);
Object.defineProperty(exports, "UniquenessLevel", ({ enumerable: true, get: function () { return protocol_moniker_1.UniquenessLevel; } }));
Object.defineProperty(exports, "MonikerKind", ({ enumerable: true, get: function () { return protocol_moniker_1.MonikerKind; } }));
Object.defineProperty(exports, "MonikerRequest", ({ enumerable: true, get: function () { return protocol_moniker_1.MonikerRequest; } }));
const protocol_typeHierarchy_1 = __webpack_require__(/*! ./protocol.typeHierarchy */ 8076);
Object.defineProperty(exports, "TypeHierarchyPrepareRequest", ({ enumerable: true, get: function () { return protocol_typeHierarchy_1.TypeHierarchyPrepareRequest; } }));
Object.defineProperty(exports, "TypeHierarchySubtypesRequest", ({ enumerable: true, get: function () { return protocol_typeHierarchy_1.TypeHierarchySubtypesRequest; } }));
Object.defineProperty(exports, "TypeHierarchySupertypesRequest", ({ enumerable: true, get: function () { return protocol_typeHierarchy_1.TypeHierarchySupertypesRequest; } }));
const protocol_inlineValue_1 = __webpack_require__(/*! ./protocol.inlineValue */ 8417);
Object.defineProperty(exports, "InlineValueRequest", ({ enumerable: true, get: function () { return protocol_inlineValue_1.InlineValueRequest; } }));
Object.defineProperty(exports, "InlineValueRefreshRequest", ({ enumerable: true, get: function () { return protocol_inlineValue_1.InlineValueRefreshRequest; } }));
const protocol_inlayHint_1 = __webpack_require__(/*! ./protocol.inlayHint */ 2129);
Object.defineProperty(exports, "InlayHintRequest", ({ enumerable: true, get: function () { return protocol_inlayHint_1.InlayHintRequest; } }));
Object.defineProperty(exports, "InlayHintResolveRequest", ({ enumerable: true, get: function () { return protocol_inlayHint_1.InlayHintResolveRequest; } }));
Object.defineProperty(exports, "InlayHintRefreshRequest", ({ enumerable: true, get: function () { return protocol_inlayHint_1.InlayHintRefreshRequest; } }));
const protocol_diagnostic_1 = __webpack_require__(/*! ./protocol.diagnostic */ 4744);
Object.defineProperty(exports, "DiagnosticServerCancellationData", ({ enumerable: true, get: function () { return protocol_diagnostic_1.DiagnosticServerCancellationData; } }));
Object.defineProperty(exports, "DocumentDiagnosticReportKind", ({ enumerable: true, get: function () { return protocol_diagnostic_1.DocumentDiagnosticReportKind; } }));
Object.defineProperty(exports, "DocumentDiagnosticRequest", ({ enumerable: true, get: function () { return protocol_diagnostic_1.DocumentDiagnosticRequest; } }));
Object.defineProperty(exports, "WorkspaceDiagnosticRequest", ({ enumerable: true, get: function () { return protocol_diagnostic_1.WorkspaceDiagnosticRequest; } }));
Object.defineProperty(exports, "DiagnosticRefreshRequest", ({ enumerable: true, get: function () { return protocol_diagnostic_1.DiagnosticRefreshRequest; } }));
const protocol_notebook_1 = __webpack_require__(/*! ./protocol.notebook */ 8518);
Object.defineProperty(exports, "NotebookCellKind", ({ enumerable: true, get: function () { return protocol_notebook_1.NotebookCellKind; } }));
Object.defineProperty(exports, "ExecutionSummary", ({ enumerable: true, get: function () { return protocol_notebook_1.ExecutionSummary; } }));
Object.defineProperty(exports, "NotebookCell", ({ enumerable: true, get: function () { return protocol_notebook_1.NotebookCell; } }));
Object.defineProperty(exports, "NotebookDocument", ({ enumerable: true, get: function () { return protocol_notebook_1.NotebookDocument; } }));
Object.defineProperty(exports, "NotebookDocumentSyncRegistrationType", ({ enumerable: true, get: function () { return protocol_notebook_1.NotebookDocumentSyncRegistrationType; } }));
Object.defineProperty(exports, "DidOpenNotebookDocumentNotification", ({ enumerable: true, get: function () { return protocol_notebook_1.DidOpenNotebookDocumentNotification; } }));
Object.defineProperty(exports, "NotebookCellArrayChange", ({ enumerable: true, get: function () { return protocol_notebook_1.NotebookCellArrayChange; } }));
Object.defineProperty(exports, "DidChangeNotebookDocumentNotification", ({ enumerable: true, get: function () { return protocol_notebook_1.DidChangeNotebookDocumentNotification; } }));
Object.defineProperty(exports, "DidSaveNotebookDocumentNotification", ({ enumerable: true, get: function () { return protocol_notebook_1.DidSaveNotebookDocumentNotification; } }));
Object.defineProperty(exports, "DidCloseNotebookDocumentNotification", ({ enumerable: true, get: function () { return protocol_notebook_1.DidCloseNotebookDocumentNotification; } }));
const protocol_inlineCompletion_1 = __webpack_require__(/*! ./protocol.inlineCompletion */ 744);
Object.defineProperty(exports, "InlineCompletionRequest", ({ enumerable: true, get: function () { return protocol_inlineCompletion_1.InlineCompletionRequest; } }));
// @ts-ignore: to avoid inlining LocationLink as dynamic import
let __noDynamicImport;
/**
 * The TextDocumentFilter namespace provides helper functions to work with
 * {@link TextDocumentFilter} literals.
 *
 * @since 3.17.0
 */
var TextDocumentFilter;
(function (TextDocumentFilter) {
    function is(value) {
        const candidate = value;
        return Is.string(candidate) || (Is.string(candidate.language) || Is.string(candidate.scheme) || Is.string(candidate.pattern));
    }
    TextDocumentFilter.is = is;
})(TextDocumentFilter || (exports.TextDocumentFilter = TextDocumentFilter = {}));
/**
 * The NotebookDocumentFilter namespace provides helper functions to work with
 * {@link NotebookDocumentFilter} literals.
 *
 * @since 3.17.0
 */
var NotebookDocumentFilter;
(function (NotebookDocumentFilter) {
    function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (Is.string(candidate.notebookType) || Is.string(candidate.scheme) || Is.string(candidate.pattern));
    }
    NotebookDocumentFilter.is = is;
})(NotebookDocumentFilter || (exports.NotebookDocumentFilter = NotebookDocumentFilter = {}));
/**
 * The NotebookCellTextDocumentFilter namespace provides helper functions to work with
 * {@link NotebookCellTextDocumentFilter} literals.
 *
 * @since 3.17.0
 */
var NotebookCellTextDocumentFilter;
(function (NotebookCellTextDocumentFilter) {
    function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate)
            && (Is.string(candidate.notebook) || NotebookDocumentFilter.is(candidate.notebook))
            && (candidate.language === undefined || Is.string(candidate.language));
    }
    NotebookCellTextDocumentFilter.is = is;
})(NotebookCellTextDocumentFilter || (exports.NotebookCellTextDocumentFilter = NotebookCellTextDocumentFilter = {}));
/**
 * The DocumentSelector namespace provides helper functions to work with
 * {@link DocumentSelector}s.
 */
var DocumentSelector;
(function (DocumentSelector) {
    function is(value) {
        if (!Array.isArray(value)) {
            return false;
        }
        for (let elem of value) {
            if (!Is.string(elem) && !TextDocumentFilter.is(elem) && !NotebookCellTextDocumentFilter.is(elem)) {
                return false;
            }
        }
        return true;
    }
    DocumentSelector.is = is;
})(DocumentSelector || (exports.DocumentSelector = DocumentSelector = {}));
/**
 * The `client/registerCapability` request is sent from the server to the client to register a new capability
 * handler on the client side.
 */
var RegistrationRequest;
(function (RegistrationRequest) {
    RegistrationRequest.method = 'client/registerCapability';
    RegistrationRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    RegistrationRequest.type = new messages_1.ProtocolRequestType(RegistrationRequest.method);
})(RegistrationRequest || (exports.RegistrationRequest = RegistrationRequest = {}));
/**
 * The `client/unregisterCapability` request is sent from the server to the client to unregister a previously registered capability
 * handler on the client side.
 */
var UnregistrationRequest;
(function (UnregistrationRequest) {
    UnregistrationRequest.method = 'client/unregisterCapability';
    UnregistrationRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    UnregistrationRequest.type = new messages_1.ProtocolRequestType(UnregistrationRequest.method);
})(UnregistrationRequest || (exports.UnregistrationRequest = UnregistrationRequest = {}));
var ResourceOperationKind;
(function (ResourceOperationKind) {
    /**
     * Supports creating new files and folders.
     */
    ResourceOperationKind.Create = 'create';
    /**
     * Supports renaming existing files and folders.
     */
    ResourceOperationKind.Rename = 'rename';
    /**
     * Supports deleting existing files and folders.
     */
    ResourceOperationKind.Delete = 'delete';
})(ResourceOperationKind || (exports.ResourceOperationKind = ResourceOperationKind = {}));
var FailureHandlingKind;
(function (FailureHandlingKind) {
    /**
     * Applying the workspace change is simply aborted if one of the changes provided
     * fails. All operations executed before the failing operation stay executed.
     */
    FailureHandlingKind.Abort = 'abort';
    /**
     * All operations are executed transactional. That means they either all
     * succeed or no changes at all are applied to the workspace.
     */
    FailureHandlingKind.Transactional = 'transactional';
    /**
     * If the workspace edit contains only textual file changes they are executed transactional.
     * If resource changes (create, rename or delete file) are part of the change the failure
     * handling strategy is abort.
     */
    FailureHandlingKind.TextOnlyTransactional = 'textOnlyTransactional';
    /**
     * The client tries to undo the operations already executed. But there is no
     * guarantee that this is succeeding.
     */
    FailureHandlingKind.Undo = 'undo';
})(FailureHandlingKind || (exports.FailureHandlingKind = FailureHandlingKind = {}));
/**
 * A set of predefined position encoding kinds.
 *
 * @since 3.17.0
 */
var PositionEncodingKind;
(function (PositionEncodingKind) {
    /**
     * Character offsets count UTF-8 code units (e.g. bytes).
     */
    PositionEncodingKind.UTF8 = 'utf-8';
    /**
     * Character offsets count UTF-16 code units.
     *
     * This is the default and must always be supported
     * by servers
     */
    PositionEncodingKind.UTF16 = 'utf-16';
    /**
     * Character offsets count UTF-32 code units.
     *
     * Implementation note: these are the same as Unicode codepoints,
     * so this `PositionEncodingKind` may also be used for an
     * encoding-agnostic representation of character offsets.
     */
    PositionEncodingKind.UTF32 = 'utf-32';
})(PositionEncodingKind || (exports.PositionEncodingKind = PositionEncodingKind = {}));
/**
 * The StaticRegistrationOptions namespace provides helper functions to work with
 * {@link StaticRegistrationOptions} literals.
 */
var StaticRegistrationOptions;
(function (StaticRegistrationOptions) {
    function hasId(value) {
        const candidate = value;
        return candidate && Is.string(candidate.id) && candidate.id.length > 0;
    }
    StaticRegistrationOptions.hasId = hasId;
})(StaticRegistrationOptions || (exports.StaticRegistrationOptions = StaticRegistrationOptions = {}));
/**
 * The TextDocumentRegistrationOptions namespace provides helper functions to work with
 * {@link TextDocumentRegistrationOptions} literals.
 */
var TextDocumentRegistrationOptions;
(function (TextDocumentRegistrationOptions) {
    function is(value) {
        const candidate = value;
        return candidate && (candidate.documentSelector === null || DocumentSelector.is(candidate.documentSelector));
    }
    TextDocumentRegistrationOptions.is = is;
})(TextDocumentRegistrationOptions || (exports.TextDocumentRegistrationOptions = TextDocumentRegistrationOptions = {}));
/**
 * The WorkDoneProgressOptions namespace provides helper functions to work with
 * {@link WorkDoneProgressOptions} literals.
 */
var WorkDoneProgressOptions;
(function (WorkDoneProgressOptions) {
    function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (candidate.workDoneProgress === undefined || Is.boolean(candidate.workDoneProgress));
    }
    WorkDoneProgressOptions.is = is;
    function hasWorkDoneProgress(value) {
        const candidate = value;
        return candidate && Is.boolean(candidate.workDoneProgress);
    }
    WorkDoneProgressOptions.hasWorkDoneProgress = hasWorkDoneProgress;
})(WorkDoneProgressOptions || (exports.WorkDoneProgressOptions = WorkDoneProgressOptions = {}));
/**
 * The initialize request is sent from the client to the server.
 * It is sent once as the request after starting up the server.
 * The requests parameter is of type {@link InitializeParams}
 * the response if of type {@link InitializeResult} of a Thenable that
 * resolves to such.
 */
var InitializeRequest;
(function (InitializeRequest) {
    InitializeRequest.method = 'initialize';
    InitializeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    InitializeRequest.type = new messages_1.ProtocolRequestType(InitializeRequest.method);
})(InitializeRequest || (exports.InitializeRequest = InitializeRequest = {}));
/**
 * Known error codes for an `InitializeErrorCodes`;
 */
var InitializeErrorCodes;
(function (InitializeErrorCodes) {
    /**
     * If the protocol version provided by the client can't be handled by the server.
     *
     * @deprecated This initialize error got replaced by client capabilities. There is
     * no version handshake in version 3.0x
     */
    InitializeErrorCodes.unknownProtocolVersion = 1;
})(InitializeErrorCodes || (exports.InitializeErrorCodes = InitializeErrorCodes = {}));
/**
 * The initialized notification is sent from the client to the
 * server after the client is fully initialized and the server
 * is allowed to send requests from the server to the client.
 */
var InitializedNotification;
(function (InitializedNotification) {
    InitializedNotification.method = 'initialized';
    InitializedNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    InitializedNotification.type = new messages_1.ProtocolNotificationType(InitializedNotification.method);
})(InitializedNotification || (exports.InitializedNotification = InitializedNotification = {}));
//---- Shutdown Method ----
/**
 * A shutdown request is sent from the client to the server.
 * It is sent once when the client decides to shutdown the
 * server. The only notification that is sent after a shutdown request
 * is the exit event.
 */
var ShutdownRequest;
(function (ShutdownRequest) {
    ShutdownRequest.method = 'shutdown';
    ShutdownRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    ShutdownRequest.type = new messages_1.ProtocolRequestType0(ShutdownRequest.method);
})(ShutdownRequest || (exports.ShutdownRequest = ShutdownRequest = {}));
//---- Exit Notification ----
/**
 * The exit event is sent from the client to the server to
 * ask the server to exit its process.
 */
var ExitNotification;
(function (ExitNotification) {
    ExitNotification.method = 'exit';
    ExitNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    ExitNotification.type = new messages_1.ProtocolNotificationType0(ExitNotification.method);
})(ExitNotification || (exports.ExitNotification = ExitNotification = {}));
/**
 * The configuration change notification is sent from the client to the server
 * when the client's configuration has changed. The notification contains
 * the changed configuration as defined by the language client.
 */
var DidChangeConfigurationNotification;
(function (DidChangeConfigurationNotification) {
    DidChangeConfigurationNotification.method = 'workspace/didChangeConfiguration';
    DidChangeConfigurationNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidChangeConfigurationNotification.type = new messages_1.ProtocolNotificationType(DidChangeConfigurationNotification.method);
})(DidChangeConfigurationNotification || (exports.DidChangeConfigurationNotification = DidChangeConfigurationNotification = {}));
//---- Message show and log notifications ----
/**
 * The message type
 */
var MessageType;
(function (MessageType) {
    /**
     * An error message.
     */
    MessageType.Error = 1;
    /**
     * A warning message.
     */
    MessageType.Warning = 2;
    /**
     * An information message.
     */
    MessageType.Info = 3;
    /**
     * A log message.
     */
    MessageType.Log = 4;
    /**
     * A debug message.
     *
     * @since 3.18.0
     */
    MessageType.Debug = 5;
})(MessageType || (exports.MessageType = MessageType = {}));
/**
 * The show message notification is sent from a server to a client to ask
 * the client to display a particular message in the user interface.
 */
var ShowMessageNotification;
(function (ShowMessageNotification) {
    ShowMessageNotification.method = 'window/showMessage';
    ShowMessageNotification.messageDirection = messages_1.MessageDirection.serverToClient;
    ShowMessageNotification.type = new messages_1.ProtocolNotificationType(ShowMessageNotification.method);
})(ShowMessageNotification || (exports.ShowMessageNotification = ShowMessageNotification = {}));
/**
 * The show message request is sent from the server to the client to show a message
 * and a set of options actions to the user.
 */
var ShowMessageRequest;
(function (ShowMessageRequest) {
    ShowMessageRequest.method = 'window/showMessageRequest';
    ShowMessageRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    ShowMessageRequest.type = new messages_1.ProtocolRequestType(ShowMessageRequest.method);
})(ShowMessageRequest || (exports.ShowMessageRequest = ShowMessageRequest = {}));
/**
 * The log message notification is sent from the server to the client to ask
 * the client to log a particular message.
 */
var LogMessageNotification;
(function (LogMessageNotification) {
    LogMessageNotification.method = 'window/logMessage';
    LogMessageNotification.messageDirection = messages_1.MessageDirection.serverToClient;
    LogMessageNotification.type = new messages_1.ProtocolNotificationType(LogMessageNotification.method);
})(LogMessageNotification || (exports.LogMessageNotification = LogMessageNotification = {}));
//---- Telemetry notification
/**
 * The telemetry event notification is sent from the server to the client to ask
 * the client to log telemetry data.
 */
var TelemetryEventNotification;
(function (TelemetryEventNotification) {
    TelemetryEventNotification.method = 'telemetry/event';
    TelemetryEventNotification.messageDirection = messages_1.MessageDirection.serverToClient;
    TelemetryEventNotification.type = new messages_1.ProtocolNotificationType(TelemetryEventNotification.method);
})(TelemetryEventNotification || (exports.TelemetryEventNotification = TelemetryEventNotification = {}));
/**
 * Defines how the host (editor) should sync
 * document changes to the language server.
 */
var TextDocumentSyncKind;
(function (TextDocumentSyncKind) {
    /**
     * Documents should not be synced at all.
     */
    TextDocumentSyncKind.None = 0;
    /**
     * Documents are synced by always sending the full content
     * of the document.
     */
    TextDocumentSyncKind.Full = 1;
    /**
     * Documents are synced by sending the full content on open.
     * After that only incremental updates to the document are
     * send.
     */
    TextDocumentSyncKind.Incremental = 2;
})(TextDocumentSyncKind || (exports.TextDocumentSyncKind = TextDocumentSyncKind = {}));
/**
 * The document open notification is sent from the client to the server to signal
 * newly opened text documents. The document's truth is now managed by the client
 * and the server must not try to read the document's truth using the document's
 * uri. Open in this sense means it is managed by the client. It doesn't necessarily
 * mean that its content is presented in an editor. An open notification must not
 * be sent more than once without a corresponding close notification send before.
 * This means open and close notification must be balanced and the max open count
 * is one.
 */
var DidOpenTextDocumentNotification;
(function (DidOpenTextDocumentNotification) {
    DidOpenTextDocumentNotification.method = 'textDocument/didOpen';
    DidOpenTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidOpenTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidOpenTextDocumentNotification.method);
})(DidOpenTextDocumentNotification || (exports.DidOpenTextDocumentNotification = DidOpenTextDocumentNotification = {}));
var TextDocumentContentChangeEvent;
(function (TextDocumentContentChangeEvent) {
    /**
     * Checks whether the information describes a delta event.
     */
    function isIncremental(event) {
        let candidate = event;
        return candidate !== undefined && candidate !== null &&
            typeof candidate.text === 'string' && candidate.range !== undefined &&
            (candidate.rangeLength === undefined || typeof candidate.rangeLength === 'number');
    }
    TextDocumentContentChangeEvent.isIncremental = isIncremental;
    /**
     * Checks whether the information describes a full replacement event.
     */
    function isFull(event) {
        let candidate = event;
        return candidate !== undefined && candidate !== null &&
            typeof candidate.text === 'string' && candidate.range === undefined && candidate.rangeLength === undefined;
    }
    TextDocumentContentChangeEvent.isFull = isFull;
})(TextDocumentContentChangeEvent || (exports.TextDocumentContentChangeEvent = TextDocumentContentChangeEvent = {}));
/**
 * The document change notification is sent from the client to the server to signal
 * changes to a text document.
 */
var DidChangeTextDocumentNotification;
(function (DidChangeTextDocumentNotification) {
    DidChangeTextDocumentNotification.method = 'textDocument/didChange';
    DidChangeTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidChangeTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidChangeTextDocumentNotification.method);
})(DidChangeTextDocumentNotification || (exports.DidChangeTextDocumentNotification = DidChangeTextDocumentNotification = {}));
/**
 * The document close notification is sent from the client to the server when
 * the document got closed in the client. The document's truth now exists where
 * the document's uri points to (e.g. if the document's uri is a file uri the
 * truth now exists on disk). As with the open notification the close notification
 * is about managing the document's content. Receiving a close notification
 * doesn't mean that the document was open in an editor before. A close
 * notification requires a previous open notification to be sent.
 */
var DidCloseTextDocumentNotification;
(function (DidCloseTextDocumentNotification) {
    DidCloseTextDocumentNotification.method = 'textDocument/didClose';
    DidCloseTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidCloseTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidCloseTextDocumentNotification.method);
})(DidCloseTextDocumentNotification || (exports.DidCloseTextDocumentNotification = DidCloseTextDocumentNotification = {}));
/**
 * The document save notification is sent from the client to the server when
 * the document got saved in the client.
 */
var DidSaveTextDocumentNotification;
(function (DidSaveTextDocumentNotification) {
    DidSaveTextDocumentNotification.method = 'textDocument/didSave';
    DidSaveTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidSaveTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidSaveTextDocumentNotification.method);
})(DidSaveTextDocumentNotification || (exports.DidSaveTextDocumentNotification = DidSaveTextDocumentNotification = {}));
/**
 * Represents reasons why a text document is saved.
 */
var TextDocumentSaveReason;
(function (TextDocumentSaveReason) {
    /**
     * Manually triggered, e.g. by the user pressing save, by starting debugging,
     * or by an API call.
     */
    TextDocumentSaveReason.Manual = 1;
    /**
     * Automatic after a delay.
     */
    TextDocumentSaveReason.AfterDelay = 2;
    /**
     * When the editor lost focus.
     */
    TextDocumentSaveReason.FocusOut = 3;
})(TextDocumentSaveReason || (exports.TextDocumentSaveReason = TextDocumentSaveReason = {}));
/**
 * A document will save notification is sent from the client to the server before
 * the document is actually saved.
 */
var WillSaveTextDocumentNotification;
(function (WillSaveTextDocumentNotification) {
    WillSaveTextDocumentNotification.method = 'textDocument/willSave';
    WillSaveTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    WillSaveTextDocumentNotification.type = new messages_1.ProtocolNotificationType(WillSaveTextDocumentNotification.method);
})(WillSaveTextDocumentNotification || (exports.WillSaveTextDocumentNotification = WillSaveTextDocumentNotification = {}));
/**
 * A document will save request is sent from the client to the server before
 * the document is actually saved. The request can return an array of TextEdits
 * which will be applied to the text document before it is saved. Please note that
 * clients might drop results if computing the text edits took too long or if a
 * server constantly fails on this request. This is done to keep the save fast and
 * reliable.
 */
var WillSaveTextDocumentWaitUntilRequest;
(function (WillSaveTextDocumentWaitUntilRequest) {
    WillSaveTextDocumentWaitUntilRequest.method = 'textDocument/willSaveWaitUntil';
    WillSaveTextDocumentWaitUntilRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    WillSaveTextDocumentWaitUntilRequest.type = new messages_1.ProtocolRequestType(WillSaveTextDocumentWaitUntilRequest.method);
})(WillSaveTextDocumentWaitUntilRequest || (exports.WillSaveTextDocumentWaitUntilRequest = WillSaveTextDocumentWaitUntilRequest = {}));
/**
 * The watched files notification is sent from the client to the server when
 * the client detects changes to file watched by the language client.
 */
var DidChangeWatchedFilesNotification;
(function (DidChangeWatchedFilesNotification) {
    DidChangeWatchedFilesNotification.method = 'workspace/didChangeWatchedFiles';
    DidChangeWatchedFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidChangeWatchedFilesNotification.type = new messages_1.ProtocolNotificationType(DidChangeWatchedFilesNotification.method);
})(DidChangeWatchedFilesNotification || (exports.DidChangeWatchedFilesNotification = DidChangeWatchedFilesNotification = {}));
/**
 * The file event type
 */
var FileChangeType;
(function (FileChangeType) {
    /**
     * The file got created.
     */
    FileChangeType.Created = 1;
    /**
     * The file got changed.
     */
    FileChangeType.Changed = 2;
    /**
     * The file got deleted.
     */
    FileChangeType.Deleted = 3;
})(FileChangeType || (exports.FileChangeType = FileChangeType = {}));
var RelativePattern;
(function (RelativePattern) {
    function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (vscode_languageserver_types_1.URI.is(candidate.baseUri) || vscode_languageserver_types_1.WorkspaceFolder.is(candidate.baseUri)) && Is.string(candidate.pattern);
    }
    RelativePattern.is = is;
})(RelativePattern || (exports.RelativePattern = RelativePattern = {}));
var WatchKind;
(function (WatchKind) {
    /**
     * Interested in create events.
     */
    WatchKind.Create = 1;
    /**
     * Interested in change events
     */
    WatchKind.Change = 2;
    /**
     * Interested in delete events
     */
    WatchKind.Delete = 4;
})(WatchKind || (exports.WatchKind = WatchKind = {}));
/**
 * Diagnostics notification are sent from the server to the client to signal
 * results of validation runs.
 */
var PublishDiagnosticsNotification;
(function (PublishDiagnosticsNotification) {
    PublishDiagnosticsNotification.method = 'textDocument/publishDiagnostics';
    PublishDiagnosticsNotification.messageDirection = messages_1.MessageDirection.serverToClient;
    PublishDiagnosticsNotification.type = new messages_1.ProtocolNotificationType(PublishDiagnosticsNotification.method);
})(PublishDiagnosticsNotification || (exports.PublishDiagnosticsNotification = PublishDiagnosticsNotification = {}));
/**
 * How a completion was triggered
 */
var CompletionTriggerKind;
(function (CompletionTriggerKind) {
    /**
     * Completion was triggered by typing an identifier (24x7 code
     * complete), manual invocation (e.g Ctrl+Space) or via API.
     */
    CompletionTriggerKind.Invoked = 1;
    /**
     * Completion was triggered by a trigger character specified by
     * the `triggerCharacters` properties of the `CompletionRegistrationOptions`.
     */
    CompletionTriggerKind.TriggerCharacter = 2;
    /**
     * Completion was re-triggered as current completion list is incomplete
     */
    CompletionTriggerKind.TriggerForIncompleteCompletions = 3;
})(CompletionTriggerKind || (exports.CompletionTriggerKind = CompletionTriggerKind = {}));
/**
 * Request to request completion at a given text document position. The request's
 * parameter is of type {@link TextDocumentPosition} the response
 * is of type {@link CompletionItem CompletionItem[]} or {@link CompletionList}
 * or a Thenable that resolves to such.
 *
 * The request can delay the computation of the {@link CompletionItem.detail `detail`}
 * and {@link CompletionItem.documentation `documentation`} properties to the `completionItem/resolve`
 * request. However, properties that are needed for the initial sorting and filtering, like `sortText`,
 * `filterText`, `insertText`, and `textEdit`, must not be changed during resolve.
 */
var CompletionRequest;
(function (CompletionRequest) {
    CompletionRequest.method = 'textDocument/completion';
    CompletionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CompletionRequest.type = new messages_1.ProtocolRequestType(CompletionRequest.method);
})(CompletionRequest || (exports.CompletionRequest = CompletionRequest = {}));
/**
 * Request to resolve additional information for a given completion item.The request's
 * parameter is of type {@link CompletionItem} the response
 * is of type {@link CompletionItem} or a Thenable that resolves to such.
 */
var CompletionResolveRequest;
(function (CompletionResolveRequest) {
    CompletionResolveRequest.method = 'completionItem/resolve';
    CompletionResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CompletionResolveRequest.type = new messages_1.ProtocolRequestType(CompletionResolveRequest.method);
})(CompletionResolveRequest || (exports.CompletionResolveRequest = CompletionResolveRequest = {}));
/**
 * Request to request hover information at a given text document position. The request's
 * parameter is of type {@link TextDocumentPosition} the response is of
 * type {@link Hover} or a Thenable that resolves to such.
 */
var HoverRequest;
(function (HoverRequest) {
    HoverRequest.method = 'textDocument/hover';
    HoverRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    HoverRequest.type = new messages_1.ProtocolRequestType(HoverRequest.method);
})(HoverRequest || (exports.HoverRequest = HoverRequest = {}));
/**
 * How a signature help was triggered.
 *
 * @since 3.15.0
 */
var SignatureHelpTriggerKind;
(function (SignatureHelpTriggerKind) {
    /**
     * Signature help was invoked manually by the user or by a command.
     */
    SignatureHelpTriggerKind.Invoked = 1;
    /**
     * Signature help was triggered by a trigger character.
     */
    SignatureHelpTriggerKind.TriggerCharacter = 2;
    /**
     * Signature help was triggered by the cursor moving or by the document content changing.
     */
    SignatureHelpTriggerKind.ContentChange = 3;
})(SignatureHelpTriggerKind || (exports.SignatureHelpTriggerKind = SignatureHelpTriggerKind = {}));
var SignatureHelpRequest;
(function (SignatureHelpRequest) {
    SignatureHelpRequest.method = 'textDocument/signatureHelp';
    SignatureHelpRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    SignatureHelpRequest.type = new messages_1.ProtocolRequestType(SignatureHelpRequest.method);
})(SignatureHelpRequest || (exports.SignatureHelpRequest = SignatureHelpRequest = {}));
/**
 * A request to resolve the definition location of a symbol at a given text
 * document position. The request's parameter is of type {@link TextDocumentPosition}
 * the response is of either type {@link Definition} or a typed array of
 * {@link DefinitionLink} or a Thenable that resolves to such.
 */
var DefinitionRequest;
(function (DefinitionRequest) {
    DefinitionRequest.method = 'textDocument/definition';
    DefinitionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DefinitionRequest.type = new messages_1.ProtocolRequestType(DefinitionRequest.method);
})(DefinitionRequest || (exports.DefinitionRequest = DefinitionRequest = {}));
/**
 * A request to resolve project-wide references for the symbol denoted
 * by the given text document position. The request's parameter is of
 * type {@link ReferenceParams} the response is of type
 * {@link Location Location[]} or a Thenable that resolves to such.
 */
var ReferencesRequest;
(function (ReferencesRequest) {
    ReferencesRequest.method = 'textDocument/references';
    ReferencesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    ReferencesRequest.type = new messages_1.ProtocolRequestType(ReferencesRequest.method);
})(ReferencesRequest || (exports.ReferencesRequest = ReferencesRequest = {}));
/**
 * Request to resolve a {@link DocumentHighlight} for a given
 * text document position. The request's parameter is of type {@link TextDocumentPosition}
 * the request response is an array of type {@link DocumentHighlight}
 * or a Thenable that resolves to such.
 */
var DocumentHighlightRequest;
(function (DocumentHighlightRequest) {
    DocumentHighlightRequest.method = 'textDocument/documentHighlight';
    DocumentHighlightRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentHighlightRequest.type = new messages_1.ProtocolRequestType(DocumentHighlightRequest.method);
})(DocumentHighlightRequest || (exports.DocumentHighlightRequest = DocumentHighlightRequest = {}));
/**
 * A request to list all symbols found in a given text document. The request's
 * parameter is of type {@link TextDocumentIdentifier} the
 * response is of type {@link SymbolInformation SymbolInformation[]} or a Thenable
 * that resolves to such.
 */
var DocumentSymbolRequest;
(function (DocumentSymbolRequest) {
    DocumentSymbolRequest.method = 'textDocument/documentSymbol';
    DocumentSymbolRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentSymbolRequest.type = new messages_1.ProtocolRequestType(DocumentSymbolRequest.method);
})(DocumentSymbolRequest || (exports.DocumentSymbolRequest = DocumentSymbolRequest = {}));
/**
 * A request to provide commands for the given text document and range.
 */
var CodeActionRequest;
(function (CodeActionRequest) {
    CodeActionRequest.method = 'textDocument/codeAction';
    CodeActionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CodeActionRequest.type = new messages_1.ProtocolRequestType(CodeActionRequest.method);
})(CodeActionRequest || (exports.CodeActionRequest = CodeActionRequest = {}));
/**
 * Request to resolve additional information for a given code action.The request's
 * parameter is of type {@link CodeAction} the response
 * is of type {@link CodeAction} or a Thenable that resolves to such.
 */
var CodeActionResolveRequest;
(function (CodeActionResolveRequest) {
    CodeActionResolveRequest.method = 'codeAction/resolve';
    CodeActionResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CodeActionResolveRequest.type = new messages_1.ProtocolRequestType(CodeActionResolveRequest.method);
})(CodeActionResolveRequest || (exports.CodeActionResolveRequest = CodeActionResolveRequest = {}));
/**
 * A request to list project-wide symbols matching the query string given
 * by the {@link WorkspaceSymbolParams}. The response is
 * of type {@link SymbolInformation SymbolInformation[]} or a Thenable that
 * resolves to such.
 *
 * @since 3.17.0 - support for WorkspaceSymbol in the returned data. Clients
 *  need to advertise support for WorkspaceSymbols via the client capability
 *  `workspace.symbol.resolveSupport`.
 *
 */
var WorkspaceSymbolRequest;
(function (WorkspaceSymbolRequest) {
    WorkspaceSymbolRequest.method = 'workspace/symbol';
    WorkspaceSymbolRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    WorkspaceSymbolRequest.type = new messages_1.ProtocolRequestType(WorkspaceSymbolRequest.method);
})(WorkspaceSymbolRequest || (exports.WorkspaceSymbolRequest = WorkspaceSymbolRequest = {}));
/**
 * A request to resolve the range inside the workspace
 * symbol's location.
 *
 * @since 3.17.0
 */
var WorkspaceSymbolResolveRequest;
(function (WorkspaceSymbolResolveRequest) {
    WorkspaceSymbolResolveRequest.method = 'workspaceSymbol/resolve';
    WorkspaceSymbolResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    WorkspaceSymbolResolveRequest.type = new messages_1.ProtocolRequestType(WorkspaceSymbolResolveRequest.method);
})(WorkspaceSymbolResolveRequest || (exports.WorkspaceSymbolResolveRequest = WorkspaceSymbolResolveRequest = {}));
/**
 * A request to provide code lens for the given text document.
 */
var CodeLensRequest;
(function (CodeLensRequest) {
    CodeLensRequest.method = 'textDocument/codeLens';
    CodeLensRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CodeLensRequest.type = new messages_1.ProtocolRequestType(CodeLensRequest.method);
})(CodeLensRequest || (exports.CodeLensRequest = CodeLensRequest = {}));
/**
 * A request to resolve a command for a given code lens.
 */
var CodeLensResolveRequest;
(function (CodeLensResolveRequest) {
    CodeLensResolveRequest.method = 'codeLens/resolve';
    CodeLensResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    CodeLensResolveRequest.type = new messages_1.ProtocolRequestType(CodeLensResolveRequest.method);
})(CodeLensResolveRequest || (exports.CodeLensResolveRequest = CodeLensResolveRequest = {}));
/**
 * A request to refresh all code actions
 *
 * @since 3.16.0
 */
var CodeLensRefreshRequest;
(function (CodeLensRefreshRequest) {
    CodeLensRefreshRequest.method = `workspace/codeLens/refresh`;
    CodeLensRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    CodeLensRefreshRequest.type = new messages_1.ProtocolRequestType0(CodeLensRefreshRequest.method);
})(CodeLensRefreshRequest || (exports.CodeLensRefreshRequest = CodeLensRefreshRequest = {}));
/**
 * A request to provide document links
 */
var DocumentLinkRequest;
(function (DocumentLinkRequest) {
    DocumentLinkRequest.method = 'textDocument/documentLink';
    DocumentLinkRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentLinkRequest.type = new messages_1.ProtocolRequestType(DocumentLinkRequest.method);
})(DocumentLinkRequest || (exports.DocumentLinkRequest = DocumentLinkRequest = {}));
/**
 * Request to resolve additional information for a given document link. The request's
 * parameter is of type {@link DocumentLink} the response
 * is of type {@link DocumentLink} or a Thenable that resolves to such.
 */
var DocumentLinkResolveRequest;
(function (DocumentLinkResolveRequest) {
    DocumentLinkResolveRequest.method = 'documentLink/resolve';
    DocumentLinkResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentLinkResolveRequest.type = new messages_1.ProtocolRequestType(DocumentLinkResolveRequest.method);
})(DocumentLinkResolveRequest || (exports.DocumentLinkResolveRequest = DocumentLinkResolveRequest = {}));
/**
 * A request to format a whole document.
 */
var DocumentFormattingRequest;
(function (DocumentFormattingRequest) {
    DocumentFormattingRequest.method = 'textDocument/formatting';
    DocumentFormattingRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentFormattingRequest.method);
})(DocumentFormattingRequest || (exports.DocumentFormattingRequest = DocumentFormattingRequest = {}));
/**
 * A request to format a range in a document.
 */
var DocumentRangeFormattingRequest;
(function (DocumentRangeFormattingRequest) {
    DocumentRangeFormattingRequest.method = 'textDocument/rangeFormatting';
    DocumentRangeFormattingRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentRangeFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentRangeFormattingRequest.method);
})(DocumentRangeFormattingRequest || (exports.DocumentRangeFormattingRequest = DocumentRangeFormattingRequest = {}));
/**
 * A request to format ranges in a document.
 *
 * @since 3.18.0
 * @proposed
 */
var DocumentRangesFormattingRequest;
(function (DocumentRangesFormattingRequest) {
    DocumentRangesFormattingRequest.method = 'textDocument/rangesFormatting';
    DocumentRangesFormattingRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentRangesFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentRangesFormattingRequest.method);
})(DocumentRangesFormattingRequest || (exports.DocumentRangesFormattingRequest = DocumentRangesFormattingRequest = {}));
/**
 * A request to format a document on type.
 */
var DocumentOnTypeFormattingRequest;
(function (DocumentOnTypeFormattingRequest) {
    DocumentOnTypeFormattingRequest.method = 'textDocument/onTypeFormatting';
    DocumentOnTypeFormattingRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    DocumentOnTypeFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentOnTypeFormattingRequest.method);
})(DocumentOnTypeFormattingRequest || (exports.DocumentOnTypeFormattingRequest = DocumentOnTypeFormattingRequest = {}));
//---- Rename ----------------------------------------------
var PrepareSupportDefaultBehavior;
(function (PrepareSupportDefaultBehavior) {
    /**
     * The client's default behavior is to select the identifier
     * according the to language's syntax rule.
     */
    PrepareSupportDefaultBehavior.Identifier = 1;
})(PrepareSupportDefaultBehavior || (exports.PrepareSupportDefaultBehavior = PrepareSupportDefaultBehavior = {}));
/**
 * A request to rename a symbol.
 */
var RenameRequest;
(function (RenameRequest) {
    RenameRequest.method = 'textDocument/rename';
    RenameRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    RenameRequest.type = new messages_1.ProtocolRequestType(RenameRequest.method);
})(RenameRequest || (exports.RenameRequest = RenameRequest = {}));
/**
 * A request to test and perform the setup necessary for a rename.
 *
 * @since 3.16 - support for default behavior
 */
var PrepareRenameRequest;
(function (PrepareRenameRequest) {
    PrepareRenameRequest.method = 'textDocument/prepareRename';
    PrepareRenameRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    PrepareRenameRequest.type = new messages_1.ProtocolRequestType(PrepareRenameRequest.method);
})(PrepareRenameRequest || (exports.PrepareRenameRequest = PrepareRenameRequest = {}));
/**
 * A request send from the client to the server to execute a command. The request might return
 * a workspace edit which the client will apply to the workspace.
 */
var ExecuteCommandRequest;
(function (ExecuteCommandRequest) {
    ExecuteCommandRequest.method = 'workspace/executeCommand';
    ExecuteCommandRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    ExecuteCommandRequest.type = new messages_1.ProtocolRequestType(ExecuteCommandRequest.method);
})(ExecuteCommandRequest || (exports.ExecuteCommandRequest = ExecuteCommandRequest = {}));
/**
 * A request sent from the server to the client to modified certain resources.
 */
var ApplyWorkspaceEditRequest;
(function (ApplyWorkspaceEditRequest) {
    ApplyWorkspaceEditRequest.method = 'workspace/applyEdit';
    ApplyWorkspaceEditRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    ApplyWorkspaceEditRequest.type = new messages_1.ProtocolRequestType('workspace/applyEdit');
})(ApplyWorkspaceEditRequest || (exports.ApplyWorkspaceEditRequest = ApplyWorkspaceEditRequest = {}));


/***/ },

/***/ 5259
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js ***!
  \********************************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinkedEditingRangeRequest = void 0;
const messages_1 = __webpack_require__(/*! ./messages */ 7153);
/**
 * A request to provide ranges that can be edited together.
 *
 * @since 3.16.0
 */
var LinkedEditingRangeRequest;
(function (LinkedEditingRangeRequest) {
    LinkedEditingRangeRequest.method = 'textDocument/linkedEditingRange';
    LinkedEditingRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    LinkedEditingRangeRequest.type = new messages_1.ProtocolRequestType(LinkedEditingRangeRequest.method);
})(LinkedEditingRangeRequest || (exports.LinkedEditingRangeRequest = LinkedEditingRangeRequest = {}));


/***/ },

/***/ 2318
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js ***!
  \*********************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MonikerRequest = exports.MonikerKind = exports.UniquenessLevel = void 0;
const messages_1 = __webpack_require__(/*! ./messages */ 7153);
/**
 * Moniker uniqueness level to define scope of the moniker.
 *
 * @since 3.16.0
 */
var UniquenessLevel;
(function (UniquenessLevel) {
    /**
     * The moniker is only unique inside a document
     */
    UniquenessLevel.document = 'document';
    /**
     * The moniker is unique inside a project for which a dump got created
     */
    UniquenessLevel.project = 'project';
    /**
     * The moniker is unique inside the group to which a project belongs
     */
    UniquenessLevel.group = 'group';
    /**
     * The moniker is unique inside the moniker scheme.
     */
    UniquenessLevel.scheme = 'scheme';
    /**
     * The moniker is globally unique
     */
    UniquenessLevel.global = 'global';
})(UniquenessLevel || (exports.UniquenessLevel = UniquenessLevel = {}));
/**
 * The moniker kind.
 *
 * @since 3.16.0
 */
var MonikerKind;
(function (MonikerKind) {
    /**
     * The moniker represent a symbol that is imported into a project
     */
    MonikerKind.$import = 'import';
    /**
     * The moniker represents a symbol that is exported from a project
     */
    MonikerKind.$export = 'export';
    /**
     * The moniker represents a symbol that is local to a project (e.g. a local
     * variable of a function, a class not visible outside the project, ...)
     */
    MonikerKind.local = 'local';
})(MonikerKind || (exports.MonikerKind = MonikerKind = {}));
/**
 * A request to get the moniker of a symbol at a given text document position.
 * The request parameter is of type {@link TextDocumentPositionParams}.
 * The response is of type {@link Moniker Moniker[]} or `null`.
 */
var MonikerRequest;
(function (MonikerRequest) {
    MonikerRequest.method = 'textDocument/moniker';
    MonikerRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    MonikerRequest.type = new messages_1.ProtocolRequestType(MonikerRequest.method);
})(MonikerRequest || (exports.MonikerRequest = MonikerRequest = {}));


/***/ },

/***/ 8518
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js ***!
  \**********************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DidCloseNotebookDocumentNotification = exports.DidSaveNotebookDocumentNotification = exports.DidChangeNotebookDocumentNotification = exports.NotebookCellArrayChange = exports.DidOpenNotebookDocumentNotification = exports.NotebookDocumentSyncRegistrationType = exports.NotebookDocument = exports.NotebookCell = exports.ExecutionSummary = exports.NotebookCellKind = void 0;
const vscode_languageserver_types_1 = __webpack_require__(/*! vscode-languageserver-types */ 7159);
const Is = __webpack_require__(/*! ./utils/is */ 8495);
const messages_1 = __webpack_require__(/*! ./messages */ 7153);
/**
 * A notebook cell kind.
 *
 * @since 3.17.0
 */
var NotebookCellKind;
(function (NotebookCellKind) {
    /**
     * A markup-cell is formatted source that is used for display.
     */
    NotebookCellKind.Markup = 1;
    /**
     * A code-cell is source code.
     */
    NotebookCellKind.Code = 2;
    function is(value) {
        return value === 1 || value === 2;
    }
    NotebookCellKind.is = is;
})(NotebookCellKind || (exports.NotebookCellKind = NotebookCellKind = {}));
var ExecutionSummary;
(function (ExecutionSummary) {
    function create(executionOrder, success) {
        const result = { executionOrder };
        if (success === true || success === false) {
            result.success = success;
        }
        return result;
    }
    ExecutionSummary.create = create;
    function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.executionOrder) && (candidate.success === undefined || Is.boolean(candidate.success));
    }
    ExecutionSummary.is = is;
    function equals(one, other) {
        if (one === other) {
            return true;
        }
        if (one === null || one === undefined || other === null || other === undefined) {
            return false;
        }
        return one.executionOrder === other.executionOrder && one.success === other.success;
    }
    ExecutionSummary.equals = equals;
})(ExecutionSummary || (exports.ExecutionSummary = ExecutionSummary = {}));
var NotebookCell;
(function (NotebookCell) {
    function create(kind, document) {
        return { kind, document };
    }
    NotebookCell.create = create;
    function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && NotebookCellKind.is(candidate.kind) && vscode_languageserver_types_1.DocumentUri.is(candidate.document) &&
            (candidate.metadata === undefined || Is.objectLiteral(candidate.metadata));
    }
    NotebookCell.is = is;
    function diff(one, two) {
        const result = new Set();
        if (one.document !== two.document) {
            result.add('document');
        }
        if (one.kind !== two.kind) {
            result.add('kind');
        }
        if (one.executionSummary !== two.executionSummary) {
            result.add('executionSummary');
        }
        if ((one.metadata !== undefined || two.metadata !== undefined) && !equalsMetadata(one.metadata, two.metadata)) {
            result.add('metadata');
        }
        if ((one.executionSummary !== undefined || two.executionSummary !== undefined) && !ExecutionSummary.equals(one.executionSummary, two.executionSummary)) {
            result.add('executionSummary');
        }
        return result;
    }
    NotebookCell.diff = diff;
    function equalsMetadata(one, other) {
        if (one === other) {
            return true;
        }
        if (one === null || one === undefined || other === null || other === undefined) {
            return false;
        }
        if (typeof one !== typeof other) {
            return false;
        }
        if (typeof one !== 'object') {
            return false;
        }
        const oneArray = Array.isArray(one);
        const otherArray = Array.isArray(other);
        if (oneArray !== otherArray) {
            return false;
        }
        if (oneArray && otherArray) {
            if (one.length !== other.length) {
                return false;
            }
            for (let i = 0; i < one.length; i++) {
                if (!equalsMetadata(one[i], other[i])) {
                    return false;
                }
            }
        }
        if (Is.objectLiteral(one) && Is.objectLiteral(other)) {
            const oneKeys = Object.keys(one);
            const otherKeys = Object.keys(other);
            if (oneKeys.length !== otherKeys.length) {
                return false;
            }
            oneKeys.sort();
            otherKeys.sort();
            if (!equalsMetadata(oneKeys, otherKeys)) {
                return false;
            }
            for (let i = 0; i < oneKeys.length; i++) {
                const prop = oneKeys[i];
                if (!equalsMetadata(one[prop], other[prop])) {
                    return false;
                }
            }
        }
        return true;
    }
})(NotebookCell || (exports.NotebookCell = NotebookCell = {}));
var NotebookDocument;
(function (NotebookDocument) {
    function create(uri, notebookType, version, cells) {
        return { uri, notebookType, version, cells };
    }
    NotebookDocument.create = create;
    function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.uri) && vscode_languageserver_types_1.integer.is(candidate.version) && Is.typedArray(candidate.cells, NotebookCell.is);
    }
    NotebookDocument.is = is;
})(NotebookDocument || (exports.NotebookDocument = NotebookDocument = {}));
var NotebookDocumentSyncRegistrationType;
(function (NotebookDocumentSyncRegistrationType) {
    NotebookDocumentSyncRegistrationType.method = 'notebookDocument/sync';
    NotebookDocumentSyncRegistrationType.messageDirection = messages_1.MessageDirection.clientToServer;
    NotebookDocumentSyncRegistrationType.type = new messages_1.RegistrationType(NotebookDocumentSyncRegistrationType.method);
})(NotebookDocumentSyncRegistrationType || (exports.NotebookDocumentSyncRegistrationType = NotebookDocumentSyncRegistrationType = {}));
/**
 * A notification sent when a notebook opens.
 *
 * @since 3.17.0
 */
var DidOpenNotebookDocumentNotification;
(function (DidOpenNotebookDocumentNotification) {
    DidOpenNotebookDocumentNotification.method = 'notebookDocument/didOpen';
    DidOpenNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidOpenNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidOpenNotebookDocumentNotification.method);
    DidOpenNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
})(DidOpenNotebookDocumentNotification || (exports.DidOpenNotebookDocumentNotification = DidOpenNotebookDocumentNotification = {}));
var NotebookCellArrayChange;
(function (NotebookCellArrayChange) {
    function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.start) && vscode_languageserver_types_1.uinteger.is(candidate.deleteCount) && (candidate.cells === undefined || Is.typedArray(candidate.cells, NotebookCell.is));
    }
    NotebookCellArrayChange.is = is;
    function create(start, deleteCount, cells) {
        const result = { start, deleteCount };
        if (cells !== undefined) {
            result.cells = cells;
        }
        return result;
    }
    NotebookCellArrayChange.create = create;
})(NotebookCellArrayChange || (exports.NotebookCellArrayChange = NotebookCellArrayChange = {}));
var DidChangeNotebookDocumentNotification;
(function (DidChangeNotebookDocumentNotification) {
    DidChangeNotebookDocumentNotification.method = 'notebookDocument/didChange';
    DidChangeNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidChangeNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidChangeNotebookDocumentNotification.method);
    DidChangeNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
})(DidChangeNotebookDocumentNotification || (exports.DidChangeNotebookDocumentNotification = DidChangeNotebookDocumentNotification = {}));
/**
 * A notification sent when a notebook document is saved.
 *
 * @since 3.17.0
 */
var DidSaveNotebookDocumentNotification;
(function (DidSaveNotebookDocumentNotification) {
    DidSaveNotebookDocumentNotification.method = 'notebookDocument/didSave';
    DidSaveNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidSaveNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidSaveNotebookDocumentNotification.method);
    DidSaveNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
})(DidSaveNotebookDocumentNotification || (exports.DidSaveNotebookDocumentNotification = DidSaveNotebookDocumentNotification = {}));
/**
 * A notification sent when a notebook closes.
 *
 * @since 3.17.0
 */
var DidCloseNotebookDocumentNotification;
(function (DidCloseNotebookDocumentNotification) {
    DidCloseNotebookDocumentNotification.method = 'notebookDocument/didClose';
    DidCloseNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidCloseNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidCloseNotebookDocumentNotification.method);
    DidCloseNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
})(DidCloseNotebookDocumentNotification || (exports.DidCloseNotebookDocumentNotification = DidCloseNotebookDocumentNotification = {}));


/***/ },

/***/ 8836
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js ***!
  \**********************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkDoneProgressCancelNotification = exports.WorkDoneProgressCreateRequest = exports.WorkDoneProgress = void 0;
const vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ 2009);
const messages_1 = __webpack_require__(/*! ./messages */ 7153);
var WorkDoneProgress;
(function (WorkDoneProgress) {
    WorkDoneProgress.type = new vscode_jsonrpc_1.ProgressType();
    function is(value) {
        return value === WorkDoneProgress.type;
    }
    WorkDoneProgress.is = is;
})(WorkDoneProgress || (exports.WorkDoneProgress = WorkDoneProgress = {}));
/**
 * The `window/workDoneProgress/create` request is sent from the server to the client to initiate progress
 * reporting from the server.
 */
var WorkDoneProgressCreateRequest;
(function (WorkDoneProgressCreateRequest) {
    WorkDoneProgressCreateRequest.method = 'window/workDoneProgress/create';
    WorkDoneProgressCreateRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    WorkDoneProgressCreateRequest.type = new messages_1.ProtocolRequestType(WorkDoneProgressCreateRequest.method);
})(WorkDoneProgressCreateRequest || (exports.WorkDoneProgressCreateRequest = WorkDoneProgressCreateRequest = {}));
/**
 * The `window/workDoneProgress/cancel` notification is sent from  the client to the server to cancel a progress
 * initiated on the server side.
 */
var WorkDoneProgressCancelNotification;
(function (WorkDoneProgressCancelNotification) {
    WorkDoneProgressCancelNotification.method = 'window/workDoneProgress/cancel';
    WorkDoneProgressCancelNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    WorkDoneProgressCancelNotification.type = new messages_1.ProtocolNotificationType(WorkDoneProgressCancelNotification.method);
})(WorkDoneProgressCancelNotification || (exports.WorkDoneProgressCancelNotification = WorkDoneProgressCancelNotification = {}));


/***/ },

/***/ 6124
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js ***!
  \****************************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SelectionRangeRequest = void 0;
const messages_1 = __webpack_require__(/*! ./messages */ 7153);
/**
 * A request to provide selection ranges in a document. The request's
 * parameter is of type {@link SelectionRangeParams}, the
 * response is of type {@link SelectionRange SelectionRange[]} or a Thenable
 * that resolves to such.
 */
var SelectionRangeRequest;
(function (SelectionRangeRequest) {
    SelectionRangeRequest.method = 'textDocument/selectionRange';
    SelectionRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    SelectionRangeRequest.type = new messages_1.ProtocolRequestType(SelectionRangeRequest.method);
})(SelectionRangeRequest || (exports.SelectionRangeRequest = SelectionRangeRequest = {}));


/***/ },

/***/ 4157
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js ***!
  \****************************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SemanticTokensRefreshRequest = exports.SemanticTokensRangeRequest = exports.SemanticTokensDeltaRequest = exports.SemanticTokensRequest = exports.SemanticTokensRegistrationType = exports.TokenFormat = void 0;
const messages_1 = __webpack_require__(/*! ./messages */ 7153);
//------- 'textDocument/semanticTokens' -----
var TokenFormat;
(function (TokenFormat) {
    TokenFormat.Relative = 'relative';
})(TokenFormat || (exports.TokenFormat = TokenFormat = {}));
var SemanticTokensRegistrationType;
(function (SemanticTokensRegistrationType) {
    SemanticTokensRegistrationType.method = 'textDocument/semanticTokens';
    SemanticTokensRegistrationType.type = new messages_1.RegistrationType(SemanticTokensRegistrationType.method);
})(SemanticTokensRegistrationType || (exports.SemanticTokensRegistrationType = SemanticTokensRegistrationType = {}));
/**
 * @since 3.16.0
 */
var SemanticTokensRequest;
(function (SemanticTokensRequest) {
    SemanticTokensRequest.method = 'textDocument/semanticTokens/full';
    SemanticTokensRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    SemanticTokensRequest.type = new messages_1.ProtocolRequestType(SemanticTokensRequest.method);
    SemanticTokensRequest.registrationMethod = SemanticTokensRegistrationType.method;
})(SemanticTokensRequest || (exports.SemanticTokensRequest = SemanticTokensRequest = {}));
/**
 * @since 3.16.0
 */
var SemanticTokensDeltaRequest;
(function (SemanticTokensDeltaRequest) {
    SemanticTokensDeltaRequest.method = 'textDocument/semanticTokens/full/delta';
    SemanticTokensDeltaRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    SemanticTokensDeltaRequest.type = new messages_1.ProtocolRequestType(SemanticTokensDeltaRequest.method);
    SemanticTokensDeltaRequest.registrationMethod = SemanticTokensRegistrationType.method;
})(SemanticTokensDeltaRequest || (exports.SemanticTokensDeltaRequest = SemanticTokensDeltaRequest = {}));
/**
 * @since 3.16.0
 */
var SemanticTokensRangeRequest;
(function (SemanticTokensRangeRequest) {
    SemanticTokensRangeRequest.method = 'textDocument/semanticTokens/range';
    SemanticTokensRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    SemanticTokensRangeRequest.type = new messages_1.ProtocolRequestType(SemanticTokensRangeRequest.method);
    SemanticTokensRangeRequest.registrationMethod = SemanticTokensRegistrationType.method;
})(SemanticTokensRangeRequest || (exports.SemanticTokensRangeRequest = SemanticTokensRangeRequest = {}));
/**
 * @since 3.16.0
 */
var SemanticTokensRefreshRequest;
(function (SemanticTokensRefreshRequest) {
    SemanticTokensRefreshRequest.method = `workspace/semanticTokens/refresh`;
    SemanticTokensRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    SemanticTokensRefreshRequest.type = new messages_1.ProtocolRequestType0(SemanticTokensRefreshRequest.method);
})(SemanticTokensRefreshRequest || (exports.SemanticTokensRefreshRequest = SemanticTokensRefreshRequest = {}));


/***/ },

/***/ 43
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js ***!
  \**************************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShowDocumentRequest = void 0;
const messages_1 = __webpack_require__(/*! ./messages */ 7153);
/**
 * A request to show a document. This request might open an
 * external program depending on the value of the URI to open.
 * For example a request to open `https://code.visualstudio.com/`
 * will very likely open the URI in a WEB browser.
 *
 * @since 3.16.0
*/
var ShowDocumentRequest;
(function (ShowDocumentRequest) {
    ShowDocumentRequest.method = 'window/showDocument';
    ShowDocumentRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    ShowDocumentRequest.type = new messages_1.ProtocolRequestType(ShowDocumentRequest.method);
})(ShowDocumentRequest || (exports.ShowDocumentRequest = ShowDocumentRequest = {}));


/***/ },

/***/ 158
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js ***!
  \****************************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TypeDefinitionRequest = void 0;
const messages_1 = __webpack_require__(/*! ./messages */ 7153);
// @ts-ignore: to avoid inlining LocatioLink as dynamic import
let __noDynamicImport;
/**
 * A request to resolve the type definition locations of a symbol at a given text
 * document position. The request's parameter is of type {@link TextDocumentPositionParams}
 * the response is of type {@link Definition} or a Thenable that resolves to such.
 */
var TypeDefinitionRequest;
(function (TypeDefinitionRequest) {
    TypeDefinitionRequest.method = 'textDocument/typeDefinition';
    TypeDefinitionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    TypeDefinitionRequest.type = new messages_1.ProtocolRequestType(TypeDefinitionRequest.method);
})(TypeDefinitionRequest || (exports.TypeDefinitionRequest = TypeDefinitionRequest = {}));


/***/ },

/***/ 8076
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js ***!
  \***************************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) TypeFox, Microsoft and others. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TypeHierarchySubtypesRequest = exports.TypeHierarchySupertypesRequest = exports.TypeHierarchyPrepareRequest = void 0;
const messages_1 = __webpack_require__(/*! ./messages */ 7153);
/**
 * A request to result a `TypeHierarchyItem` in a document at a given position.
 * Can be used as an input to a subtypes or supertypes type hierarchy.
 *
 * @since 3.17.0
 */
var TypeHierarchyPrepareRequest;
(function (TypeHierarchyPrepareRequest) {
    TypeHierarchyPrepareRequest.method = 'textDocument/prepareTypeHierarchy';
    TypeHierarchyPrepareRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    TypeHierarchyPrepareRequest.type = new messages_1.ProtocolRequestType(TypeHierarchyPrepareRequest.method);
})(TypeHierarchyPrepareRequest || (exports.TypeHierarchyPrepareRequest = TypeHierarchyPrepareRequest = {}));
/**
 * A request to resolve the supertypes for a given `TypeHierarchyItem`.
 *
 * @since 3.17.0
 */
var TypeHierarchySupertypesRequest;
(function (TypeHierarchySupertypesRequest) {
    TypeHierarchySupertypesRequest.method = 'typeHierarchy/supertypes';
    TypeHierarchySupertypesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    TypeHierarchySupertypesRequest.type = new messages_1.ProtocolRequestType(TypeHierarchySupertypesRequest.method);
})(TypeHierarchySupertypesRequest || (exports.TypeHierarchySupertypesRequest = TypeHierarchySupertypesRequest = {}));
/**
 * A request to resolve the subtypes for a given `TypeHierarchyItem`.
 *
 * @since 3.17.0
 */
var TypeHierarchySubtypesRequest;
(function (TypeHierarchySubtypesRequest) {
    TypeHierarchySubtypesRequest.method = 'typeHierarchy/subtypes';
    TypeHierarchySubtypesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
    TypeHierarchySubtypesRequest.type = new messages_1.ProtocolRequestType(TypeHierarchySubtypesRequest.method);
})(TypeHierarchySubtypesRequest || (exports.TypeHierarchySubtypesRequest = TypeHierarchySubtypesRequest = {}));


/***/ },

/***/ 3874
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js ***!
  \*****************************************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DidChangeWorkspaceFoldersNotification = exports.WorkspaceFoldersRequest = void 0;
const messages_1 = __webpack_require__(/*! ./messages */ 7153);
/**
 * The `workspace/workspaceFolders` is sent from the server to the client to fetch the open workspace folders.
 */
var WorkspaceFoldersRequest;
(function (WorkspaceFoldersRequest) {
    WorkspaceFoldersRequest.method = 'workspace/workspaceFolders';
    WorkspaceFoldersRequest.messageDirection = messages_1.MessageDirection.serverToClient;
    WorkspaceFoldersRequest.type = new messages_1.ProtocolRequestType0(WorkspaceFoldersRequest.method);
})(WorkspaceFoldersRequest || (exports.WorkspaceFoldersRequest = WorkspaceFoldersRequest = {}));
/**
 * The `workspace/didChangeWorkspaceFolders` notification is sent from the client to the server when the workspace
 * folder configuration changes.
 */
var DidChangeWorkspaceFoldersNotification;
(function (DidChangeWorkspaceFoldersNotification) {
    DidChangeWorkspaceFoldersNotification.method = 'workspace/didChangeWorkspaceFolders';
    DidChangeWorkspaceFoldersNotification.messageDirection = messages_1.MessageDirection.clientToServer;
    DidChangeWorkspaceFoldersNotification.type = new messages_1.ProtocolNotificationType(DidChangeWorkspaceFoldersNotification.method);
})(DidChangeWorkspaceFoldersNotification || (exports.DidChangeWorkspaceFoldersNotification = DidChangeWorkspaceFoldersNotification = {}));


/***/ },

/***/ 8495
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/utils/is.js ***!
  \*************************************************************************************************************************************/
(__unused_webpack_module, exports) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.objectLiteral = exports.typedArray = exports.stringArray = exports.array = exports.func = exports.error = exports.number = exports.string = exports.boolean = void 0;
function boolean(value) {
    return value === true || value === false;
}
exports.boolean = boolean;
function string(value) {
    return typeof value === 'string' || value instanceof String;
}
exports.string = string;
function number(value) {
    return typeof value === 'number' || value instanceof Number;
}
exports.number = number;
function error(value) {
    return value instanceof Error;
}
exports.error = error;
function func(value) {
    return typeof value === 'function';
}
exports.func = func;
function array(value) {
    return Array.isArray(value);
}
exports.array = array;
function stringArray(value) {
    return array(value) && value.every(elem => string(elem));
}
exports.stringArray = stringArray;
function typedArray(value, check) {
    return Array.isArray(value) && value.every(check);
}
exports.typedArray = typedArray;
function objectLiteral(value) {
    // Strictly speaking class instances pass this check as well. Since the LSP
    // doesn't use classes we ignore this for now. If we do we need to add something
    // like this: `Object.getPrototypeOf(Object.getPrototypeOf(x)) === null`
    return value !== null && typeof value === 'object';
}
exports.objectLiteral = objectLiteral;


/***/ },

/***/ 2195
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/node/main.js ***!
  \*******************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createProtocolConnection = void 0;
const node_1 = __webpack_require__(/*! vscode-jsonrpc/node */ 2037);
__exportStar(__webpack_require__(/*! vscode-jsonrpc/node */ 2037), exports);
__exportStar(__webpack_require__(/*! ../common/api */ 3425), exports);
function createProtocolConnection(input, output, logger, options) {
    return (0, node_1.createMessageConnection)(input, output, logger, options);
}
exports.createProtocolConnection = createProtocolConnection;


/***/ },

/***/ 8403
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/node.js ***!
  \**********************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ----------------------------------------------------------------------------------------- */


module.exports = __webpack_require__(/*! ./lib/node/main */ 2195);

/***/ },

/***/ 7159
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-types@3.17.5/node_modules/vscode-languageserver-types/lib/umd/main.js ***!
  \************************************************************************************************************************/
(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(4731), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    /* --------------------------------------------------------------------------------------------
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for license information.
     * ------------------------------------------------------------------------------------------ */
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextDocument = exports.EOL = exports.WorkspaceFolder = exports.InlineCompletionContext = exports.SelectedCompletionInfo = exports.InlineCompletionTriggerKind = exports.InlineCompletionList = exports.InlineCompletionItem = exports.StringValue = exports.InlayHint = exports.InlayHintLabelPart = exports.InlayHintKind = exports.InlineValueContext = exports.InlineValueEvaluatableExpression = exports.InlineValueVariableLookup = exports.InlineValueText = exports.SemanticTokens = exports.SemanticTokenModifiers = exports.SemanticTokenTypes = exports.SelectionRange = exports.DocumentLink = exports.FormattingOptions = exports.CodeLens = exports.CodeAction = exports.CodeActionContext = exports.CodeActionTriggerKind = exports.CodeActionKind = exports.DocumentSymbol = exports.WorkspaceSymbol = exports.SymbolInformation = exports.SymbolTag = exports.SymbolKind = exports.DocumentHighlight = exports.DocumentHighlightKind = exports.SignatureInformation = exports.ParameterInformation = exports.Hover = exports.MarkedString = exports.CompletionList = exports.CompletionItem = exports.CompletionItemLabelDetails = exports.InsertTextMode = exports.InsertReplaceEdit = exports.CompletionItemTag = exports.InsertTextFormat = exports.CompletionItemKind = exports.MarkupContent = exports.MarkupKind = exports.TextDocumentItem = exports.OptionalVersionedTextDocumentIdentifier = exports.VersionedTextDocumentIdentifier = exports.TextDocumentIdentifier = exports.WorkspaceChange = exports.WorkspaceEdit = exports.DeleteFile = exports.RenameFile = exports.CreateFile = exports.TextDocumentEdit = exports.AnnotatedTextEdit = exports.ChangeAnnotationIdentifier = exports.ChangeAnnotation = exports.TextEdit = exports.Command = exports.Diagnostic = exports.CodeDescription = exports.DiagnosticTag = exports.DiagnosticSeverity = exports.DiagnosticRelatedInformation = exports.FoldingRange = exports.FoldingRangeKind = exports.ColorPresentation = exports.ColorInformation = exports.Color = exports.LocationLink = exports.Location = exports.Range = exports.Position = exports.uinteger = exports.integer = exports.URI = exports.DocumentUri = void 0;
    var DocumentUri;
    (function (DocumentUri) {
        function is(value) {
            return typeof value === 'string';
        }
        DocumentUri.is = is;
    })(DocumentUri || (exports.DocumentUri = DocumentUri = {}));
    var URI;
    (function (URI) {
        function is(value) {
            return typeof value === 'string';
        }
        URI.is = is;
    })(URI || (exports.URI = URI = {}));
    var integer;
    (function (integer) {
        integer.MIN_VALUE = -2147483648;
        integer.MAX_VALUE = 2147483647;
        function is(value) {
            return typeof value === 'number' && integer.MIN_VALUE <= value && value <= integer.MAX_VALUE;
        }
        integer.is = is;
    })(integer || (exports.integer = integer = {}));
    var uinteger;
    (function (uinteger) {
        uinteger.MIN_VALUE = 0;
        uinteger.MAX_VALUE = 2147483647;
        function is(value) {
            return typeof value === 'number' && uinteger.MIN_VALUE <= value && value <= uinteger.MAX_VALUE;
        }
        uinteger.is = is;
    })(uinteger || (exports.uinteger = uinteger = {}));
    /**
     * The Position namespace provides helper functions to work with
     * {@link Position} literals.
     */
    var Position;
    (function (Position) {
        /**
         * Creates a new Position literal from the given line and character.
         * @param line The position's line.
         * @param character The position's character.
         */
        function create(line, character) {
            if (line === Number.MAX_VALUE) {
                line = uinteger.MAX_VALUE;
            }
            if (character === Number.MAX_VALUE) {
                character = uinteger.MAX_VALUE;
            }
            return { line: line, character: character };
        }
        Position.create = create;
        /**
         * Checks whether the given literal conforms to the {@link Position} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Is.uinteger(candidate.line) && Is.uinteger(candidate.character);
        }
        Position.is = is;
    })(Position || (exports.Position = Position = {}));
    /**
     * The Range namespace provides helper functions to work with
     * {@link Range} literals.
     */
    var Range;
    (function (Range) {
        function create(one, two, three, four) {
            if (Is.uinteger(one) && Is.uinteger(two) && Is.uinteger(three) && Is.uinteger(four)) {
                return { start: Position.create(one, two), end: Position.create(three, four) };
            }
            else if (Position.is(one) && Position.is(two)) {
                return { start: one, end: two };
            }
            else {
                throw new Error("Range#create called with invalid arguments[".concat(one, ", ").concat(two, ", ").concat(three, ", ").concat(four, "]"));
            }
        }
        Range.create = create;
        /**
         * Checks whether the given literal conforms to the {@link Range} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
        }
        Range.is = is;
    })(Range || (exports.Range = Range = {}));
    /**
     * The Location namespace provides helper functions to work with
     * {@link Location} literals.
     */
    var Location;
    (function (Location) {
        /**
         * Creates a Location literal.
         * @param uri The location's uri.
         * @param range The location's range.
         */
        function create(uri, range) {
            return { uri: uri, range: range };
        }
        Location.create = create;
        /**
         * Checks whether the given literal conforms to the {@link Location} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
        }
        Location.is = is;
    })(Location || (exports.Location = Location = {}));
    /**
     * The LocationLink namespace provides helper functions to work with
     * {@link LocationLink} literals.
     */
    var LocationLink;
    (function (LocationLink) {
        /**
         * Creates a LocationLink literal.
         * @param targetUri The definition's uri.
         * @param targetRange The full range of the definition.
         * @param targetSelectionRange The span of the symbol definition at the target.
         * @param originSelectionRange The span of the symbol being defined in the originating source file.
         */
        function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
            return { targetUri: targetUri, targetRange: targetRange, targetSelectionRange: targetSelectionRange, originSelectionRange: originSelectionRange };
        }
        LocationLink.create = create;
        /**
         * Checks whether the given literal conforms to the {@link LocationLink} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri)
                && Range.is(candidate.targetSelectionRange)
                && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
        }
        LocationLink.is = is;
    })(LocationLink || (exports.LocationLink = LocationLink = {}));
    /**
     * The Color namespace provides helper functions to work with
     * {@link Color} literals.
     */
    var Color;
    (function (Color) {
        /**
         * Creates a new Color literal.
         */
        function create(red, green, blue, alpha) {
            return {
                red: red,
                green: green,
                blue: blue,
                alpha: alpha,
            };
        }
        Color.create = create;
        /**
         * Checks whether the given literal conforms to the {@link Color} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Is.numberRange(candidate.red, 0, 1)
                && Is.numberRange(candidate.green, 0, 1)
                && Is.numberRange(candidate.blue, 0, 1)
                && Is.numberRange(candidate.alpha, 0, 1);
        }
        Color.is = is;
    })(Color || (exports.Color = Color = {}));
    /**
     * The ColorInformation namespace provides helper functions to work with
     * {@link ColorInformation} literals.
     */
    var ColorInformation;
    (function (ColorInformation) {
        /**
         * Creates a new ColorInformation literal.
         */
        function create(range, color) {
            return {
                range: range,
                color: color,
            };
        }
        ColorInformation.create = create;
        /**
         * Checks whether the given literal conforms to the {@link ColorInformation} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Range.is(candidate.range) && Color.is(candidate.color);
        }
        ColorInformation.is = is;
    })(ColorInformation || (exports.ColorInformation = ColorInformation = {}));
    /**
     * The Color namespace provides helper functions to work with
     * {@link ColorPresentation} literals.
     */
    var ColorPresentation;
    (function (ColorPresentation) {
        /**
         * Creates a new ColorInformation literal.
         */
        function create(label, textEdit, additionalTextEdits) {
            return {
                label: label,
                textEdit: textEdit,
                additionalTextEdits: additionalTextEdits,
            };
        }
        ColorPresentation.create = create;
        /**
         * Checks whether the given literal conforms to the {@link ColorInformation} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Is.string(candidate.label)
                && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate))
                && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
        }
        ColorPresentation.is = is;
    })(ColorPresentation || (exports.ColorPresentation = ColorPresentation = {}));
    /**
     * A set of predefined range kinds.
     */
    var FoldingRangeKind;
    (function (FoldingRangeKind) {
        /**
         * Folding range for a comment
         */
        FoldingRangeKind.Comment = 'comment';
        /**
         * Folding range for an import or include
         */
        FoldingRangeKind.Imports = 'imports';
        /**
         * Folding range for a region (e.g. `#region`)
         */
        FoldingRangeKind.Region = 'region';
    })(FoldingRangeKind || (exports.FoldingRangeKind = FoldingRangeKind = {}));
    /**
     * The folding range namespace provides helper functions to work with
     * {@link FoldingRange} literals.
     */
    var FoldingRange;
    (function (FoldingRange) {
        /**
         * Creates a new FoldingRange literal.
         */
        function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
            var result = {
                startLine: startLine,
                endLine: endLine
            };
            if (Is.defined(startCharacter)) {
                result.startCharacter = startCharacter;
            }
            if (Is.defined(endCharacter)) {
                result.endCharacter = endCharacter;
            }
            if (Is.defined(kind)) {
                result.kind = kind;
            }
            if (Is.defined(collapsedText)) {
                result.collapsedText = collapsedText;
            }
            return result;
        }
        FoldingRange.create = create;
        /**
         * Checks whether the given literal conforms to the {@link FoldingRange} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Is.uinteger(candidate.startLine) && Is.uinteger(candidate.startLine)
                && (Is.undefined(candidate.startCharacter) || Is.uinteger(candidate.startCharacter))
                && (Is.undefined(candidate.endCharacter) || Is.uinteger(candidate.endCharacter))
                && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
        }
        FoldingRange.is = is;
    })(FoldingRange || (exports.FoldingRange = FoldingRange = {}));
    /**
     * The DiagnosticRelatedInformation namespace provides helper functions to work with
     * {@link DiagnosticRelatedInformation} literals.
     */
    var DiagnosticRelatedInformation;
    (function (DiagnosticRelatedInformation) {
        /**
         * Creates a new DiagnosticRelatedInformation literal.
         */
        function create(location, message) {
            return {
                location: location,
                message: message
            };
        }
        DiagnosticRelatedInformation.create = create;
        /**
         * Checks whether the given literal conforms to the {@link DiagnosticRelatedInformation} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
        }
        DiagnosticRelatedInformation.is = is;
    })(DiagnosticRelatedInformation || (exports.DiagnosticRelatedInformation = DiagnosticRelatedInformation = {}));
    /**
     * The diagnostic's severity.
     */
    var DiagnosticSeverity;
    (function (DiagnosticSeverity) {
        /**
         * Reports an error.
         */
        DiagnosticSeverity.Error = 1;
        /**
         * Reports a warning.
         */
        DiagnosticSeverity.Warning = 2;
        /**
         * Reports an information.
         */
        DiagnosticSeverity.Information = 3;
        /**
         * Reports a hint.
         */
        DiagnosticSeverity.Hint = 4;
    })(DiagnosticSeverity || (exports.DiagnosticSeverity = DiagnosticSeverity = {}));
    /**
     * The diagnostic tags.
     *
     * @since 3.15.0
     */
    var DiagnosticTag;
    (function (DiagnosticTag) {
        /**
         * Unused or unnecessary code.
         *
         * Clients are allowed to render diagnostics with this tag faded out instead of having
         * an error squiggle.
         */
        DiagnosticTag.Unnecessary = 1;
        /**
         * Deprecated or obsolete code.
         *
         * Clients are allowed to rendered diagnostics with this tag strike through.
         */
        DiagnosticTag.Deprecated = 2;
    })(DiagnosticTag || (exports.DiagnosticTag = DiagnosticTag = {}));
    /**
     * The CodeDescription namespace provides functions to deal with descriptions for diagnostic codes.
     *
     * @since 3.16.0
     */
    var CodeDescription;
    (function (CodeDescription) {
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Is.string(candidate.href);
        }
        CodeDescription.is = is;
    })(CodeDescription || (exports.CodeDescription = CodeDescription = {}));
    /**
     * The Diagnostic namespace provides helper functions to work with
     * {@link Diagnostic} literals.
     */
    var Diagnostic;
    (function (Diagnostic) {
        /**
         * Creates a new Diagnostic literal.
         */
        function create(range, message, severity, code, source, relatedInformation) {
            var result = { range: range, message: message };
            if (Is.defined(severity)) {
                result.severity = severity;
            }
            if (Is.defined(code)) {
                result.code = code;
            }
            if (Is.defined(source)) {
                result.source = source;
            }
            if (Is.defined(relatedInformation)) {
                result.relatedInformation = relatedInformation;
            }
            return result;
        }
        Diagnostic.create = create;
        /**
         * Checks whether the given literal conforms to the {@link Diagnostic} interface.
         */
        function is(value) {
            var _a;
            var candidate = value;
            return Is.defined(candidate)
                && Range.is(candidate.range)
                && Is.string(candidate.message)
                && (Is.number(candidate.severity) || Is.undefined(candidate.severity))
                && (Is.integer(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code))
                && (Is.undefined(candidate.codeDescription) || (Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)))
                && (Is.string(candidate.source) || Is.undefined(candidate.source))
                && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
        }
        Diagnostic.is = is;
    })(Diagnostic || (exports.Diagnostic = Diagnostic = {}));
    /**
     * The Command namespace provides helper functions to work with
     * {@link Command} literals.
     */
    var Command;
    (function (Command) {
        /**
         * Creates a new Command literal.
         */
        function create(title, command) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            var result = { title: title, command: command };
            if (Is.defined(args) && args.length > 0) {
                result.arguments = args;
            }
            return result;
        }
        Command.create = create;
        /**
         * Checks whether the given literal conforms to the {@link Command} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.title) && Is.string(candidate.command);
        }
        Command.is = is;
    })(Command || (exports.Command = Command = {}));
    /**
     * The TextEdit namespace provides helper function to create replace,
     * insert and delete edits more easily.
     */
    var TextEdit;
    (function (TextEdit) {
        /**
         * Creates a replace text edit.
         * @param range The range of text to be replaced.
         * @param newText The new text.
         */
        function replace(range, newText) {
            return { range: range, newText: newText };
        }
        TextEdit.replace = replace;
        /**
         * Creates an insert text edit.
         * @param position The position to insert the text at.
         * @param newText The text to be inserted.
         */
        function insert(position, newText) {
            return { range: { start: position, end: position }, newText: newText };
        }
        TextEdit.insert = insert;
        /**
         * Creates a delete text edit.
         * @param range The range of text to be deleted.
         */
        function del(range) {
            return { range: range, newText: '' };
        }
        TextEdit.del = del;
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate)
                && Is.string(candidate.newText)
                && Range.is(candidate.range);
        }
        TextEdit.is = is;
    })(TextEdit || (exports.TextEdit = TextEdit = {}));
    var ChangeAnnotation;
    (function (ChangeAnnotation) {
        function create(label, needsConfirmation, description) {
            var result = { label: label };
            if (needsConfirmation !== undefined) {
                result.needsConfirmation = needsConfirmation;
            }
            if (description !== undefined) {
                result.description = description;
            }
            return result;
        }
        ChangeAnnotation.create = create;
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Is.string(candidate.label) &&
                (Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === undefined) &&
                (Is.string(candidate.description) || candidate.description === undefined);
        }
        ChangeAnnotation.is = is;
    })(ChangeAnnotation || (exports.ChangeAnnotation = ChangeAnnotation = {}));
    var ChangeAnnotationIdentifier;
    (function (ChangeAnnotationIdentifier) {
        function is(value) {
            var candidate = value;
            return Is.string(candidate);
        }
        ChangeAnnotationIdentifier.is = is;
    })(ChangeAnnotationIdentifier || (exports.ChangeAnnotationIdentifier = ChangeAnnotationIdentifier = {}));
    var AnnotatedTextEdit;
    (function (AnnotatedTextEdit) {
        /**
         * Creates an annotated replace text edit.
         *
         * @param range The range of text to be replaced.
         * @param newText The new text.
         * @param annotation The annotation.
         */
        function replace(range, newText, annotation) {
            return { range: range, newText: newText, annotationId: annotation };
        }
        AnnotatedTextEdit.replace = replace;
        /**
         * Creates an annotated insert text edit.
         *
         * @param position The position to insert the text at.
         * @param newText The text to be inserted.
         * @param annotation The annotation.
         */
        function insert(position, newText, annotation) {
            return { range: { start: position, end: position }, newText: newText, annotationId: annotation };
        }
        AnnotatedTextEdit.insert = insert;
        /**
         * Creates an annotated delete text edit.
         *
         * @param range The range of text to be deleted.
         * @param annotation The annotation.
         */
        function del(range, annotation) {
            return { range: range, newText: '', annotationId: annotation };
        }
        AnnotatedTextEdit.del = del;
        function is(value) {
            var candidate = value;
            return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        AnnotatedTextEdit.is = is;
    })(AnnotatedTextEdit || (exports.AnnotatedTextEdit = AnnotatedTextEdit = {}));
    /**
     * The TextDocumentEdit namespace provides helper function to create
     * an edit that manipulates a text document.
     */
    var TextDocumentEdit;
    (function (TextDocumentEdit) {
        /**
         * Creates a new `TextDocumentEdit`
         */
        function create(textDocument, edits) {
            return { textDocument: textDocument, edits: edits };
        }
        TextDocumentEdit.create = create;
        function is(value) {
            var candidate = value;
            return Is.defined(candidate)
                && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument)
                && Array.isArray(candidate.edits);
        }
        TextDocumentEdit.is = is;
    })(TextDocumentEdit || (exports.TextDocumentEdit = TextDocumentEdit = {}));
    var CreateFile;
    (function (CreateFile) {
        function create(uri, options, annotation) {
            var result = {
                kind: 'create',
                uri: uri
            };
            if (options !== undefined && (options.overwrite !== undefined || options.ignoreIfExists !== undefined)) {
                result.options = options;
            }
            if (annotation !== undefined) {
                result.annotationId = annotation;
            }
            return result;
        }
        CreateFile.create = create;
        function is(value) {
            var candidate = value;
            return candidate && candidate.kind === 'create' && Is.string(candidate.uri) && (candidate.options === undefined ||
                ((candidate.options.overwrite === undefined || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === undefined || Is.boolean(candidate.options.ignoreIfExists)))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        CreateFile.is = is;
    })(CreateFile || (exports.CreateFile = CreateFile = {}));
    var RenameFile;
    (function (RenameFile) {
        function create(oldUri, newUri, options, annotation) {
            var result = {
                kind: 'rename',
                oldUri: oldUri,
                newUri: newUri
            };
            if (options !== undefined && (options.overwrite !== undefined || options.ignoreIfExists !== undefined)) {
                result.options = options;
            }
            if (annotation !== undefined) {
                result.annotationId = annotation;
            }
            return result;
        }
        RenameFile.create = create;
        function is(value) {
            var candidate = value;
            return candidate && candidate.kind === 'rename' && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === undefined ||
                ((candidate.options.overwrite === undefined || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === undefined || Is.boolean(candidate.options.ignoreIfExists)))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        RenameFile.is = is;
    })(RenameFile || (exports.RenameFile = RenameFile = {}));
    var DeleteFile;
    (function (DeleteFile) {
        function create(uri, options, annotation) {
            var result = {
                kind: 'delete',
                uri: uri
            };
            if (options !== undefined && (options.recursive !== undefined || options.ignoreIfNotExists !== undefined)) {
                result.options = options;
            }
            if (annotation !== undefined) {
                result.annotationId = annotation;
            }
            return result;
        }
        DeleteFile.create = create;
        function is(value) {
            var candidate = value;
            return candidate && candidate.kind === 'delete' && Is.string(candidate.uri) && (candidate.options === undefined ||
                ((candidate.options.recursive === undefined || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === undefined || Is.boolean(candidate.options.ignoreIfNotExists)))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        DeleteFile.is = is;
    })(DeleteFile || (exports.DeleteFile = DeleteFile = {}));
    var WorkspaceEdit;
    (function (WorkspaceEdit) {
        function is(value) {
            var candidate = value;
            return candidate &&
                (candidate.changes !== undefined || candidate.documentChanges !== undefined) &&
                (candidate.documentChanges === undefined || candidate.documentChanges.every(function (change) {
                    if (Is.string(change.kind)) {
                        return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
                    }
                    else {
                        return TextDocumentEdit.is(change);
                    }
                }));
        }
        WorkspaceEdit.is = is;
    })(WorkspaceEdit || (exports.WorkspaceEdit = WorkspaceEdit = {}));
    var TextEditChangeImpl = /** @class */ (function () {
        function TextEditChangeImpl(edits, changeAnnotations) {
            this.edits = edits;
            this.changeAnnotations = changeAnnotations;
        }
        TextEditChangeImpl.prototype.insert = function (position, newText, annotation) {
            var edit;
            var id;
            if (annotation === undefined) {
                edit = TextEdit.insert(position, newText);
            }
            else if (ChangeAnnotationIdentifier.is(annotation)) {
                id = annotation;
                edit = AnnotatedTextEdit.insert(position, newText, annotation);
            }
            else {
                this.assertChangeAnnotations(this.changeAnnotations);
                id = this.changeAnnotations.manage(annotation);
                edit = AnnotatedTextEdit.insert(position, newText, id);
            }
            this.edits.push(edit);
            if (id !== undefined) {
                return id;
            }
        };
        TextEditChangeImpl.prototype.replace = function (range, newText, annotation) {
            var edit;
            var id;
            if (annotation === undefined) {
                edit = TextEdit.replace(range, newText);
            }
            else if (ChangeAnnotationIdentifier.is(annotation)) {
                id = annotation;
                edit = AnnotatedTextEdit.replace(range, newText, annotation);
            }
            else {
                this.assertChangeAnnotations(this.changeAnnotations);
                id = this.changeAnnotations.manage(annotation);
                edit = AnnotatedTextEdit.replace(range, newText, id);
            }
            this.edits.push(edit);
            if (id !== undefined) {
                return id;
            }
        };
        TextEditChangeImpl.prototype.delete = function (range, annotation) {
            var edit;
            var id;
            if (annotation === undefined) {
                edit = TextEdit.del(range);
            }
            else if (ChangeAnnotationIdentifier.is(annotation)) {
                id = annotation;
                edit = AnnotatedTextEdit.del(range, annotation);
            }
            else {
                this.assertChangeAnnotations(this.changeAnnotations);
                id = this.changeAnnotations.manage(annotation);
                edit = AnnotatedTextEdit.del(range, id);
            }
            this.edits.push(edit);
            if (id !== undefined) {
                return id;
            }
        };
        TextEditChangeImpl.prototype.add = function (edit) {
            this.edits.push(edit);
        };
        TextEditChangeImpl.prototype.all = function () {
            return this.edits;
        };
        TextEditChangeImpl.prototype.clear = function () {
            this.edits.splice(0, this.edits.length);
        };
        TextEditChangeImpl.prototype.assertChangeAnnotations = function (value) {
            if (value === undefined) {
                throw new Error("Text edit change is not configured to manage change annotations.");
            }
        };
        return TextEditChangeImpl;
    }());
    /**
     * A helper class
     */
    var ChangeAnnotations = /** @class */ (function () {
        function ChangeAnnotations(annotations) {
            this._annotations = annotations === undefined ? Object.create(null) : annotations;
            this._counter = 0;
            this._size = 0;
        }
        ChangeAnnotations.prototype.all = function () {
            return this._annotations;
        };
        Object.defineProperty(ChangeAnnotations.prototype, "size", {
            get: function () {
                return this._size;
            },
            enumerable: false,
            configurable: true
        });
        ChangeAnnotations.prototype.manage = function (idOrAnnotation, annotation) {
            var id;
            if (ChangeAnnotationIdentifier.is(idOrAnnotation)) {
                id = idOrAnnotation;
            }
            else {
                id = this.nextId();
                annotation = idOrAnnotation;
            }
            if (this._annotations[id] !== undefined) {
                throw new Error("Id ".concat(id, " is already in use."));
            }
            if (annotation === undefined) {
                throw new Error("No annotation provided for id ".concat(id));
            }
            this._annotations[id] = annotation;
            this._size++;
            return id;
        };
        ChangeAnnotations.prototype.nextId = function () {
            this._counter++;
            return this._counter.toString();
        };
        return ChangeAnnotations;
    }());
    /**
     * A workspace change helps constructing changes to a workspace.
     */
    var WorkspaceChange = /** @class */ (function () {
        function WorkspaceChange(workspaceEdit) {
            var _this = this;
            this._textEditChanges = Object.create(null);
            if (workspaceEdit !== undefined) {
                this._workspaceEdit = workspaceEdit;
                if (workspaceEdit.documentChanges) {
                    this._changeAnnotations = new ChangeAnnotations(workspaceEdit.changeAnnotations);
                    workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                    workspaceEdit.documentChanges.forEach(function (change) {
                        if (TextDocumentEdit.is(change)) {
                            var textEditChange = new TextEditChangeImpl(change.edits, _this._changeAnnotations);
                            _this._textEditChanges[change.textDocument.uri] = textEditChange;
                        }
                    });
                }
                else if (workspaceEdit.changes) {
                    Object.keys(workspaceEdit.changes).forEach(function (key) {
                        var textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
                        _this._textEditChanges[key] = textEditChange;
                    });
                }
            }
            else {
                this._workspaceEdit = {};
            }
        }
        Object.defineProperty(WorkspaceChange.prototype, "edit", {
            /**
             * Returns the underlying {@link WorkspaceEdit} literal
             * use to be returned from a workspace edit operation like rename.
             */
            get: function () {
                this.initDocumentChanges();
                if (this._changeAnnotations !== undefined) {
                    if (this._changeAnnotations.size === 0) {
                        this._workspaceEdit.changeAnnotations = undefined;
                    }
                    else {
                        this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                    }
                }
                return this._workspaceEdit;
            },
            enumerable: false,
            configurable: true
        });
        WorkspaceChange.prototype.getTextEditChange = function (key) {
            if (OptionalVersionedTextDocumentIdentifier.is(key)) {
                this.initDocumentChanges();
                if (this._workspaceEdit.documentChanges === undefined) {
                    throw new Error('Workspace edit is not configured for document changes.');
                }
                var textDocument = { uri: key.uri, version: key.version };
                var result = this._textEditChanges[textDocument.uri];
                if (!result) {
                    var edits = [];
                    var textDocumentEdit = {
                        textDocument: textDocument,
                        edits: edits
                    };
                    this._workspaceEdit.documentChanges.push(textDocumentEdit);
                    result = new TextEditChangeImpl(edits, this._changeAnnotations);
                    this._textEditChanges[textDocument.uri] = result;
                }
                return result;
            }
            else {
                this.initChanges();
                if (this._workspaceEdit.changes === undefined) {
                    throw new Error('Workspace edit is not configured for normal text edit changes.');
                }
                var result = this._textEditChanges[key];
                if (!result) {
                    var edits = [];
                    this._workspaceEdit.changes[key] = edits;
                    result = new TextEditChangeImpl(edits);
                    this._textEditChanges[key] = result;
                }
                return result;
            }
        };
        WorkspaceChange.prototype.initDocumentChanges = function () {
            if (this._workspaceEdit.documentChanges === undefined && this._workspaceEdit.changes === undefined) {
                this._changeAnnotations = new ChangeAnnotations();
                this._workspaceEdit.documentChanges = [];
                this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
            }
        };
        WorkspaceChange.prototype.initChanges = function () {
            if (this._workspaceEdit.documentChanges === undefined && this._workspaceEdit.changes === undefined) {
                this._workspaceEdit.changes = Object.create(null);
            }
        };
        WorkspaceChange.prototype.createFile = function (uri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === undefined) {
                throw new Error('Workspace edit is not configured for document changes.');
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
                annotation = optionsOrAnnotation;
            }
            else {
                options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === undefined) {
                operation = CreateFile.create(uri, options);
            }
            else {
                id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
                operation = CreateFile.create(uri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== undefined) {
                return id;
            }
        };
        WorkspaceChange.prototype.renameFile = function (oldUri, newUri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === undefined) {
                throw new Error('Workspace edit is not configured for document changes.');
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
                annotation = optionsOrAnnotation;
            }
            else {
                options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === undefined) {
                operation = RenameFile.create(oldUri, newUri, options);
            }
            else {
                id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
                operation = RenameFile.create(oldUri, newUri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== undefined) {
                return id;
            }
        };
        WorkspaceChange.prototype.deleteFile = function (uri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === undefined) {
                throw new Error('Workspace edit is not configured for document changes.');
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
                annotation = optionsOrAnnotation;
            }
            else {
                options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === undefined) {
                operation = DeleteFile.create(uri, options);
            }
            else {
                id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
                operation = DeleteFile.create(uri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== undefined) {
                return id;
            }
        };
        return WorkspaceChange;
    }());
    exports.WorkspaceChange = WorkspaceChange;
    /**
     * The TextDocumentIdentifier namespace provides helper functions to work with
     * {@link TextDocumentIdentifier} literals.
     */
    var TextDocumentIdentifier;
    (function (TextDocumentIdentifier) {
        /**
         * Creates a new TextDocumentIdentifier literal.
         * @param uri The document's uri.
         */
        function create(uri) {
            return { uri: uri };
        }
        TextDocumentIdentifier.create = create;
        /**
         * Checks whether the given literal conforms to the {@link TextDocumentIdentifier} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.uri);
        }
        TextDocumentIdentifier.is = is;
    })(TextDocumentIdentifier || (exports.TextDocumentIdentifier = TextDocumentIdentifier = {}));
    /**
     * The VersionedTextDocumentIdentifier namespace provides helper functions to work with
     * {@link VersionedTextDocumentIdentifier} literals.
     */
    var VersionedTextDocumentIdentifier;
    (function (VersionedTextDocumentIdentifier) {
        /**
         * Creates a new VersionedTextDocumentIdentifier literal.
         * @param uri The document's uri.
         * @param version The document's version.
         */
        function create(uri, version) {
            return { uri: uri, version: version };
        }
        VersionedTextDocumentIdentifier.create = create;
        /**
         * Checks whether the given literal conforms to the {@link VersionedTextDocumentIdentifier} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.uri) && Is.integer(candidate.version);
        }
        VersionedTextDocumentIdentifier.is = is;
    })(VersionedTextDocumentIdentifier || (exports.VersionedTextDocumentIdentifier = VersionedTextDocumentIdentifier = {}));
    /**
     * The OptionalVersionedTextDocumentIdentifier namespace provides helper functions to work with
     * {@link OptionalVersionedTextDocumentIdentifier} literals.
     */
    var OptionalVersionedTextDocumentIdentifier;
    (function (OptionalVersionedTextDocumentIdentifier) {
        /**
         * Creates a new OptionalVersionedTextDocumentIdentifier literal.
         * @param uri The document's uri.
         * @param version The document's version.
         */
        function create(uri, version) {
            return { uri: uri, version: version };
        }
        OptionalVersionedTextDocumentIdentifier.create = create;
        /**
         * Checks whether the given literal conforms to the {@link OptionalVersionedTextDocumentIdentifier} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.integer(candidate.version));
        }
        OptionalVersionedTextDocumentIdentifier.is = is;
    })(OptionalVersionedTextDocumentIdentifier || (exports.OptionalVersionedTextDocumentIdentifier = OptionalVersionedTextDocumentIdentifier = {}));
    /**
     * The TextDocumentItem namespace provides helper functions to work with
     * {@link TextDocumentItem} literals.
     */
    var TextDocumentItem;
    (function (TextDocumentItem) {
        /**
         * Creates a new TextDocumentItem literal.
         * @param uri The document's uri.
         * @param languageId The document's language identifier.
         * @param version The document's version number.
         * @param text The document's text.
         */
        function create(uri, languageId, version, text) {
            return { uri: uri, languageId: languageId, version: version, text: text };
        }
        TextDocumentItem.create = create;
        /**
         * Checks whether the given literal conforms to the {@link TextDocumentItem} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.integer(candidate.version) && Is.string(candidate.text);
        }
        TextDocumentItem.is = is;
    })(TextDocumentItem || (exports.TextDocumentItem = TextDocumentItem = {}));
    /**
     * Describes the content type that a client supports in various
     * result literals like `Hover`, `ParameterInfo` or `CompletionItem`.
     *
     * Please note that `MarkupKinds` must not start with a `$`. This kinds
     * are reserved for internal usage.
     */
    var MarkupKind;
    (function (MarkupKind) {
        /**
         * Plain text is supported as a content format
         */
        MarkupKind.PlainText = 'plaintext';
        /**
         * Markdown is supported as a content format
         */
        MarkupKind.Markdown = 'markdown';
        /**
         * Checks whether the given value is a value of the {@link MarkupKind} type.
         */
        function is(value) {
            var candidate = value;
            return candidate === MarkupKind.PlainText || candidate === MarkupKind.Markdown;
        }
        MarkupKind.is = is;
    })(MarkupKind || (exports.MarkupKind = MarkupKind = {}));
    var MarkupContent;
    (function (MarkupContent) {
        /**
         * Checks whether the given value conforms to the {@link MarkupContent} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
        }
        MarkupContent.is = is;
    })(MarkupContent || (exports.MarkupContent = MarkupContent = {}));
    /**
     * The kind of a completion entry.
     */
    var CompletionItemKind;
    (function (CompletionItemKind) {
        CompletionItemKind.Text = 1;
        CompletionItemKind.Method = 2;
        CompletionItemKind.Function = 3;
        CompletionItemKind.Constructor = 4;
        CompletionItemKind.Field = 5;
        CompletionItemKind.Variable = 6;
        CompletionItemKind.Class = 7;
        CompletionItemKind.Interface = 8;
        CompletionItemKind.Module = 9;
        CompletionItemKind.Property = 10;
        CompletionItemKind.Unit = 11;
        CompletionItemKind.Value = 12;
        CompletionItemKind.Enum = 13;
        CompletionItemKind.Keyword = 14;
        CompletionItemKind.Snippet = 15;
        CompletionItemKind.Color = 16;
        CompletionItemKind.File = 17;
        CompletionItemKind.Reference = 18;
        CompletionItemKind.Folder = 19;
        CompletionItemKind.EnumMember = 20;
        CompletionItemKind.Constant = 21;
        CompletionItemKind.Struct = 22;
        CompletionItemKind.Event = 23;
        CompletionItemKind.Operator = 24;
        CompletionItemKind.TypeParameter = 25;
    })(CompletionItemKind || (exports.CompletionItemKind = CompletionItemKind = {}));
    /**
     * Defines whether the insert text in a completion item should be interpreted as
     * plain text or a snippet.
     */
    var InsertTextFormat;
    (function (InsertTextFormat) {
        /**
         * The primary text to be inserted is treated as a plain string.
         */
        InsertTextFormat.PlainText = 1;
        /**
         * The primary text to be inserted is treated as a snippet.
         *
         * A snippet can define tab stops and placeholders with `$1`, `$2`
         * and `${3:foo}`. `$0` defines the final tab stop, it defaults to
         * the end of the snippet. Placeholders with equal identifiers are linked,
         * that is typing in one will update others too.
         *
         * See also: https://microsoft.github.io/language-server-protocol/specifications/specification-current/#snippet_syntax
         */
        InsertTextFormat.Snippet = 2;
    })(InsertTextFormat || (exports.InsertTextFormat = InsertTextFormat = {}));
    /**
     * Completion item tags are extra annotations that tweak the rendering of a completion
     * item.
     *
     * @since 3.15.0
     */
    var CompletionItemTag;
    (function (CompletionItemTag) {
        /**
         * Render a completion as obsolete, usually using a strike-out.
         */
        CompletionItemTag.Deprecated = 1;
    })(CompletionItemTag || (exports.CompletionItemTag = CompletionItemTag = {}));
    /**
     * The InsertReplaceEdit namespace provides functions to deal with insert / replace edits.
     *
     * @since 3.16.0
     */
    var InsertReplaceEdit;
    (function (InsertReplaceEdit) {
        /**
         * Creates a new insert / replace edit
         */
        function create(newText, insert, replace) {
            return { newText: newText, insert: insert, replace: replace };
        }
        InsertReplaceEdit.create = create;
        /**
         * Checks whether the given literal conforms to the {@link InsertReplaceEdit} interface.
         */
        function is(value) {
            var candidate = value;
            return candidate && Is.string(candidate.newText) && Range.is(candidate.insert) && Range.is(candidate.replace);
        }
        InsertReplaceEdit.is = is;
    })(InsertReplaceEdit || (exports.InsertReplaceEdit = InsertReplaceEdit = {}));
    /**
     * How whitespace and indentation is handled during completion
     * item insertion.
     *
     * @since 3.16.0
     */
    var InsertTextMode;
    (function (InsertTextMode) {
        /**
         * The insertion or replace strings is taken as it is. If the
         * value is multi line the lines below the cursor will be
         * inserted using the indentation defined in the string value.
         * The client will not apply any kind of adjustments to the
         * string.
         */
        InsertTextMode.asIs = 1;
        /**
         * The editor adjusts leading whitespace of new lines so that
         * they match the indentation up to the cursor of the line for
         * which the item is accepted.
         *
         * Consider a line like this: <2tabs><cursor><3tabs>foo. Accepting a
         * multi line completion item is indented using 2 tabs and all
         * following lines inserted will be indented using 2 tabs as well.
         */
        InsertTextMode.adjustIndentation = 2;
    })(InsertTextMode || (exports.InsertTextMode = InsertTextMode = {}));
    var CompletionItemLabelDetails;
    (function (CompletionItemLabelDetails) {
        function is(value) {
            var candidate = value;
            return candidate && (Is.string(candidate.detail) || candidate.detail === undefined) &&
                (Is.string(candidate.description) || candidate.description === undefined);
        }
        CompletionItemLabelDetails.is = is;
    })(CompletionItemLabelDetails || (exports.CompletionItemLabelDetails = CompletionItemLabelDetails = {}));
    /**
     * The CompletionItem namespace provides functions to deal with
     * completion items.
     */
    var CompletionItem;
    (function (CompletionItem) {
        /**
         * Create a completion item and seed it with a label.
         * @param label The completion item's label
         */
        function create(label) {
            return { label: label };
        }
        CompletionItem.create = create;
    })(CompletionItem || (exports.CompletionItem = CompletionItem = {}));
    /**
     * The CompletionList namespace provides functions to deal with
     * completion lists.
     */
    var CompletionList;
    (function (CompletionList) {
        /**
         * Creates a new completion list.
         *
         * @param items The completion items.
         * @param isIncomplete The list is not complete.
         */
        function create(items, isIncomplete) {
            return { items: items ? items : [], isIncomplete: !!isIncomplete };
        }
        CompletionList.create = create;
    })(CompletionList || (exports.CompletionList = CompletionList = {}));
    var MarkedString;
    (function (MarkedString) {
        /**
         * Creates a marked string from plain text.
         *
         * @param plainText The plain text.
         */
        function fromPlainText(plainText) {
            return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&'); // escape markdown syntax tokens: http://daringfireball.net/projects/markdown/syntax#backslash
        }
        MarkedString.fromPlainText = fromPlainText;
        /**
         * Checks whether the given value conforms to the {@link MarkedString} type.
         */
        function is(value) {
            var candidate = value;
            return Is.string(candidate) || (Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value));
        }
        MarkedString.is = is;
    })(MarkedString || (exports.MarkedString = MarkedString = {}));
    var Hover;
    (function (Hover) {
        /**
         * Checks whether the given value conforms to the {@link Hover} interface.
         */
        function is(value) {
            var candidate = value;
            return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) ||
                MarkedString.is(candidate.contents) ||
                Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === undefined || Range.is(value.range));
        }
        Hover.is = is;
    })(Hover || (exports.Hover = Hover = {}));
    /**
     * The ParameterInformation namespace provides helper functions to work with
     * {@link ParameterInformation} literals.
     */
    var ParameterInformation;
    (function (ParameterInformation) {
        /**
         * Creates a new parameter information literal.
         *
         * @param label A label string.
         * @param documentation A doc string.
         */
        function create(label, documentation) {
            return documentation ? { label: label, documentation: documentation } : { label: label };
        }
        ParameterInformation.create = create;
    })(ParameterInformation || (exports.ParameterInformation = ParameterInformation = {}));
    /**
     * The SignatureInformation namespace provides helper functions to work with
     * {@link SignatureInformation} literals.
     */
    var SignatureInformation;
    (function (SignatureInformation) {
        function create(label, documentation) {
            var parameters = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                parameters[_i - 2] = arguments[_i];
            }
            var result = { label: label };
            if (Is.defined(documentation)) {
                result.documentation = documentation;
            }
            if (Is.defined(parameters)) {
                result.parameters = parameters;
            }
            else {
                result.parameters = [];
            }
            return result;
        }
        SignatureInformation.create = create;
    })(SignatureInformation || (exports.SignatureInformation = SignatureInformation = {}));
    /**
     * A document highlight kind.
     */
    var DocumentHighlightKind;
    (function (DocumentHighlightKind) {
        /**
         * A textual occurrence.
         */
        DocumentHighlightKind.Text = 1;
        /**
         * Read-access of a symbol, like reading a variable.
         */
        DocumentHighlightKind.Read = 2;
        /**
         * Write-access of a symbol, like writing to a variable.
         */
        DocumentHighlightKind.Write = 3;
    })(DocumentHighlightKind || (exports.DocumentHighlightKind = DocumentHighlightKind = {}));
    /**
     * DocumentHighlight namespace to provide helper functions to work with
     * {@link DocumentHighlight} literals.
     */
    var DocumentHighlight;
    (function (DocumentHighlight) {
        /**
         * Create a DocumentHighlight object.
         * @param range The range the highlight applies to.
         * @param kind The highlight kind
         */
        function create(range, kind) {
            var result = { range: range };
            if (Is.number(kind)) {
                result.kind = kind;
            }
            return result;
        }
        DocumentHighlight.create = create;
    })(DocumentHighlight || (exports.DocumentHighlight = DocumentHighlight = {}));
    /**
     * A symbol kind.
     */
    var SymbolKind;
    (function (SymbolKind) {
        SymbolKind.File = 1;
        SymbolKind.Module = 2;
        SymbolKind.Namespace = 3;
        SymbolKind.Package = 4;
        SymbolKind.Class = 5;
        SymbolKind.Method = 6;
        SymbolKind.Property = 7;
        SymbolKind.Field = 8;
        SymbolKind.Constructor = 9;
        SymbolKind.Enum = 10;
        SymbolKind.Interface = 11;
        SymbolKind.Function = 12;
        SymbolKind.Variable = 13;
        SymbolKind.Constant = 14;
        SymbolKind.String = 15;
        SymbolKind.Number = 16;
        SymbolKind.Boolean = 17;
        SymbolKind.Array = 18;
        SymbolKind.Object = 19;
        SymbolKind.Key = 20;
        SymbolKind.Null = 21;
        SymbolKind.EnumMember = 22;
        SymbolKind.Struct = 23;
        SymbolKind.Event = 24;
        SymbolKind.Operator = 25;
        SymbolKind.TypeParameter = 26;
    })(SymbolKind || (exports.SymbolKind = SymbolKind = {}));
    /**
     * Symbol tags are extra annotations that tweak the rendering of a symbol.
     *
     * @since 3.16
     */
    var SymbolTag;
    (function (SymbolTag) {
        /**
         * Render a symbol as obsolete, usually using a strike-out.
         */
        SymbolTag.Deprecated = 1;
    })(SymbolTag || (exports.SymbolTag = SymbolTag = {}));
    var SymbolInformation;
    (function (SymbolInformation) {
        /**
         * Creates a new symbol information literal.
         *
         * @param name The name of the symbol.
         * @param kind The kind of the symbol.
         * @param range The range of the location of the symbol.
         * @param uri The resource of the location of symbol.
         * @param containerName The name of the symbol containing the symbol.
         */
        function create(name, kind, range, uri, containerName) {
            var result = {
                name: name,
                kind: kind,
                location: { uri: uri, range: range }
            };
            if (containerName) {
                result.containerName = containerName;
            }
            return result;
        }
        SymbolInformation.create = create;
    })(SymbolInformation || (exports.SymbolInformation = SymbolInformation = {}));
    var WorkspaceSymbol;
    (function (WorkspaceSymbol) {
        /**
         * Create a new workspace symbol.
         *
         * @param name The name of the symbol.
         * @param kind The kind of the symbol.
         * @param uri The resource of the location of the symbol.
         * @param range An options range of the location.
         * @returns A WorkspaceSymbol.
         */
        function create(name, kind, uri, range) {
            return range !== undefined
                ? { name: name, kind: kind, location: { uri: uri, range: range } }
                : { name: name, kind: kind, location: { uri: uri } };
        }
        WorkspaceSymbol.create = create;
    })(WorkspaceSymbol || (exports.WorkspaceSymbol = WorkspaceSymbol = {}));
    var DocumentSymbol;
    (function (DocumentSymbol) {
        /**
         * Creates a new symbol information literal.
         *
         * @param name The name of the symbol.
         * @param detail The detail of the symbol.
         * @param kind The kind of the symbol.
         * @param range The range of the symbol.
         * @param selectionRange The selectionRange of the symbol.
         * @param children Children of the symbol.
         */
        function create(name, detail, kind, range, selectionRange, children) {
            var result = {
                name: name,
                detail: detail,
                kind: kind,
                range: range,
                selectionRange: selectionRange
            };
            if (children !== undefined) {
                result.children = children;
            }
            return result;
        }
        DocumentSymbol.create = create;
        /**
         * Checks whether the given literal conforms to the {@link DocumentSymbol} interface.
         */
        function is(value) {
            var candidate = value;
            return candidate &&
                Is.string(candidate.name) && Is.number(candidate.kind) &&
                Range.is(candidate.range) && Range.is(candidate.selectionRange) &&
                (candidate.detail === undefined || Is.string(candidate.detail)) &&
                (candidate.deprecated === undefined || Is.boolean(candidate.deprecated)) &&
                (candidate.children === undefined || Array.isArray(candidate.children)) &&
                (candidate.tags === undefined || Array.isArray(candidate.tags));
        }
        DocumentSymbol.is = is;
    })(DocumentSymbol || (exports.DocumentSymbol = DocumentSymbol = {}));
    /**
     * A set of predefined code action kinds
     */
    var CodeActionKind;
    (function (CodeActionKind) {
        /**
         * Empty kind.
         */
        CodeActionKind.Empty = '';
        /**
         * Base kind for quickfix actions: 'quickfix'
         */
        CodeActionKind.QuickFix = 'quickfix';
        /**
         * Base kind for refactoring actions: 'refactor'
         */
        CodeActionKind.Refactor = 'refactor';
        /**
         * Base kind for refactoring extraction actions: 'refactor.extract'
         *
         * Example extract actions:
         *
         * - Extract method
         * - Extract function
         * - Extract variable
         * - Extract interface from class
         * - ...
         */
        CodeActionKind.RefactorExtract = 'refactor.extract';
        /**
         * Base kind for refactoring inline actions: 'refactor.inline'
         *
         * Example inline actions:
         *
         * - Inline function
         * - Inline variable
         * - Inline constant
         * - ...
         */
        CodeActionKind.RefactorInline = 'refactor.inline';
        /**
         * Base kind for refactoring rewrite actions: 'refactor.rewrite'
         *
         * Example rewrite actions:
         *
         * - Convert JavaScript function to class
         * - Add or remove parameter
         * - Encapsulate field
         * - Make method static
         * - Move method to base class
         * - ...
         */
        CodeActionKind.RefactorRewrite = 'refactor.rewrite';
        /**
         * Base kind for source actions: `source`
         *
         * Source code actions apply to the entire file.
         */
        CodeActionKind.Source = 'source';
        /**
         * Base kind for an organize imports source action: `source.organizeImports`
         */
        CodeActionKind.SourceOrganizeImports = 'source.organizeImports';
        /**
         * Base kind for auto-fix source actions: `source.fixAll`.
         *
         * Fix all actions automatically fix errors that have a clear fix that do not require user input.
         * They should not suppress errors or perform unsafe fixes such as generating new types or classes.
         *
         * @since 3.15.0
         */
        CodeActionKind.SourceFixAll = 'source.fixAll';
    })(CodeActionKind || (exports.CodeActionKind = CodeActionKind = {}));
    /**
     * The reason why code actions were requested.
     *
     * @since 3.17.0
     */
    var CodeActionTriggerKind;
    (function (CodeActionTriggerKind) {
        /**
         * Code actions were explicitly requested by the user or by an extension.
         */
        CodeActionTriggerKind.Invoked = 1;
        /**
         * Code actions were requested automatically.
         *
         * This typically happens when current selection in a file changes, but can
         * also be triggered when file content changes.
         */
        CodeActionTriggerKind.Automatic = 2;
    })(CodeActionTriggerKind || (exports.CodeActionTriggerKind = CodeActionTriggerKind = {}));
    /**
     * The CodeActionContext namespace provides helper functions to work with
     * {@link CodeActionContext} literals.
     */
    var CodeActionContext;
    (function (CodeActionContext) {
        /**
         * Creates a new CodeActionContext literal.
         */
        function create(diagnostics, only, triggerKind) {
            var result = { diagnostics: diagnostics };
            if (only !== undefined && only !== null) {
                result.only = only;
            }
            if (triggerKind !== undefined && triggerKind !== null) {
                result.triggerKind = triggerKind;
            }
            return result;
        }
        CodeActionContext.create = create;
        /**
         * Checks whether the given literal conforms to the {@link CodeActionContext} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is)
                && (candidate.only === undefined || Is.typedArray(candidate.only, Is.string))
                && (candidate.triggerKind === undefined || candidate.triggerKind === CodeActionTriggerKind.Invoked || candidate.triggerKind === CodeActionTriggerKind.Automatic);
        }
        CodeActionContext.is = is;
    })(CodeActionContext || (exports.CodeActionContext = CodeActionContext = {}));
    var CodeAction;
    (function (CodeAction) {
        function create(title, kindOrCommandOrEdit, kind) {
            var result = { title: title };
            var checkKind = true;
            if (typeof kindOrCommandOrEdit === 'string') {
                checkKind = false;
                result.kind = kindOrCommandOrEdit;
            }
            else if (Command.is(kindOrCommandOrEdit)) {
                result.command = kindOrCommandOrEdit;
            }
            else {
                result.edit = kindOrCommandOrEdit;
            }
            if (checkKind && kind !== undefined) {
                result.kind = kind;
            }
            return result;
        }
        CodeAction.create = create;
        function is(value) {
            var candidate = value;
            return candidate && Is.string(candidate.title) &&
                (candidate.diagnostics === undefined || Is.typedArray(candidate.diagnostics, Diagnostic.is)) &&
                (candidate.kind === undefined || Is.string(candidate.kind)) &&
                (candidate.edit !== undefined || candidate.command !== undefined) &&
                (candidate.command === undefined || Command.is(candidate.command)) &&
                (candidate.isPreferred === undefined || Is.boolean(candidate.isPreferred)) &&
                (candidate.edit === undefined || WorkspaceEdit.is(candidate.edit));
        }
        CodeAction.is = is;
    })(CodeAction || (exports.CodeAction = CodeAction = {}));
    /**
     * The CodeLens namespace provides helper functions to work with
     * {@link CodeLens} literals.
     */
    var CodeLens;
    (function (CodeLens) {
        /**
         * Creates a new CodeLens literal.
         */
        function create(range, data) {
            var result = { range: range };
            if (Is.defined(data)) {
                result.data = data;
            }
            return result;
        }
        CodeLens.create = create;
        /**
         * Checks whether the given literal conforms to the {@link CodeLens} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
        }
        CodeLens.is = is;
    })(CodeLens || (exports.CodeLens = CodeLens = {}));
    /**
     * The FormattingOptions namespace provides helper functions to work with
     * {@link FormattingOptions} literals.
     */
    var FormattingOptions;
    (function (FormattingOptions) {
        /**
         * Creates a new FormattingOptions literal.
         */
        function create(tabSize, insertSpaces) {
            return { tabSize: tabSize, insertSpaces: insertSpaces };
        }
        FormattingOptions.create = create;
        /**
         * Checks whether the given literal conforms to the {@link FormattingOptions} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.uinteger(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
        }
        FormattingOptions.is = is;
    })(FormattingOptions || (exports.FormattingOptions = FormattingOptions = {}));
    /**
     * The DocumentLink namespace provides helper functions to work with
     * {@link DocumentLink} literals.
     */
    var DocumentLink;
    (function (DocumentLink) {
        /**
         * Creates a new DocumentLink literal.
         */
        function create(range, target, data) {
            return { range: range, target: target, data: data };
        }
        DocumentLink.create = create;
        /**
         * Checks whether the given literal conforms to the {@link DocumentLink} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
        }
        DocumentLink.is = is;
    })(DocumentLink || (exports.DocumentLink = DocumentLink = {}));
    /**
     * The SelectionRange namespace provides helper function to work with
     * SelectionRange literals.
     */
    var SelectionRange;
    (function (SelectionRange) {
        /**
         * Creates a new SelectionRange
         * @param range the range.
         * @param parent an optional parent.
         */
        function create(range, parent) {
            return { range: range, parent: parent };
        }
        SelectionRange.create = create;
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Range.is(candidate.range) && (candidate.parent === undefined || SelectionRange.is(candidate.parent));
        }
        SelectionRange.is = is;
    })(SelectionRange || (exports.SelectionRange = SelectionRange = {}));
    /**
     * A set of predefined token types. This set is not fixed
     * an clients can specify additional token types via the
     * corresponding client capabilities.
     *
     * @since 3.16.0
     */
    var SemanticTokenTypes;
    (function (SemanticTokenTypes) {
        SemanticTokenTypes["namespace"] = "namespace";
        /**
         * Represents a generic type. Acts as a fallback for types which can't be mapped to
         * a specific type like class or enum.
         */
        SemanticTokenTypes["type"] = "type";
        SemanticTokenTypes["class"] = "class";
        SemanticTokenTypes["enum"] = "enum";
        SemanticTokenTypes["interface"] = "interface";
        SemanticTokenTypes["struct"] = "struct";
        SemanticTokenTypes["typeParameter"] = "typeParameter";
        SemanticTokenTypes["parameter"] = "parameter";
        SemanticTokenTypes["variable"] = "variable";
        SemanticTokenTypes["property"] = "property";
        SemanticTokenTypes["enumMember"] = "enumMember";
        SemanticTokenTypes["event"] = "event";
        SemanticTokenTypes["function"] = "function";
        SemanticTokenTypes["method"] = "method";
        SemanticTokenTypes["macro"] = "macro";
        SemanticTokenTypes["keyword"] = "keyword";
        SemanticTokenTypes["modifier"] = "modifier";
        SemanticTokenTypes["comment"] = "comment";
        SemanticTokenTypes["string"] = "string";
        SemanticTokenTypes["number"] = "number";
        SemanticTokenTypes["regexp"] = "regexp";
        SemanticTokenTypes["operator"] = "operator";
        /**
         * @since 3.17.0
         */
        SemanticTokenTypes["decorator"] = "decorator";
    })(SemanticTokenTypes || (exports.SemanticTokenTypes = SemanticTokenTypes = {}));
    /**
     * A set of predefined token modifiers. This set is not fixed
     * an clients can specify additional token types via the
     * corresponding client capabilities.
     *
     * @since 3.16.0
     */
    var SemanticTokenModifiers;
    (function (SemanticTokenModifiers) {
        SemanticTokenModifiers["declaration"] = "declaration";
        SemanticTokenModifiers["definition"] = "definition";
        SemanticTokenModifiers["readonly"] = "readonly";
        SemanticTokenModifiers["static"] = "static";
        SemanticTokenModifiers["deprecated"] = "deprecated";
        SemanticTokenModifiers["abstract"] = "abstract";
        SemanticTokenModifiers["async"] = "async";
        SemanticTokenModifiers["modification"] = "modification";
        SemanticTokenModifiers["documentation"] = "documentation";
        SemanticTokenModifiers["defaultLibrary"] = "defaultLibrary";
    })(SemanticTokenModifiers || (exports.SemanticTokenModifiers = SemanticTokenModifiers = {}));
    /**
     * @since 3.16.0
     */
    var SemanticTokens;
    (function (SemanticTokens) {
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && (candidate.resultId === undefined || typeof candidate.resultId === 'string') &&
                Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === 'number');
        }
        SemanticTokens.is = is;
    })(SemanticTokens || (exports.SemanticTokens = SemanticTokens = {}));
    /**
     * The InlineValueText namespace provides functions to deal with InlineValueTexts.
     *
     * @since 3.17.0
     */
    var InlineValueText;
    (function (InlineValueText) {
        /**
         * Creates a new InlineValueText literal.
         */
        function create(range, text) {
            return { range: range, text: text };
        }
        InlineValueText.create = create;
        function is(value) {
            var candidate = value;
            return candidate !== undefined && candidate !== null && Range.is(candidate.range) && Is.string(candidate.text);
        }
        InlineValueText.is = is;
    })(InlineValueText || (exports.InlineValueText = InlineValueText = {}));
    /**
     * The InlineValueVariableLookup namespace provides functions to deal with InlineValueVariableLookups.
     *
     * @since 3.17.0
     */
    var InlineValueVariableLookup;
    (function (InlineValueVariableLookup) {
        /**
         * Creates a new InlineValueText literal.
         */
        function create(range, variableName, caseSensitiveLookup) {
            return { range: range, variableName: variableName, caseSensitiveLookup: caseSensitiveLookup };
        }
        InlineValueVariableLookup.create = create;
        function is(value) {
            var candidate = value;
            return candidate !== undefined && candidate !== null && Range.is(candidate.range) && Is.boolean(candidate.caseSensitiveLookup)
                && (Is.string(candidate.variableName) || candidate.variableName === undefined);
        }
        InlineValueVariableLookup.is = is;
    })(InlineValueVariableLookup || (exports.InlineValueVariableLookup = InlineValueVariableLookup = {}));
    /**
     * The InlineValueEvaluatableExpression namespace provides functions to deal with InlineValueEvaluatableExpression.
     *
     * @since 3.17.0
     */
    var InlineValueEvaluatableExpression;
    (function (InlineValueEvaluatableExpression) {
        /**
         * Creates a new InlineValueEvaluatableExpression literal.
         */
        function create(range, expression) {
            return { range: range, expression: expression };
        }
        InlineValueEvaluatableExpression.create = create;
        function is(value) {
            var candidate = value;
            return candidate !== undefined && candidate !== null && Range.is(candidate.range)
                && (Is.string(candidate.expression) || candidate.expression === undefined);
        }
        InlineValueEvaluatableExpression.is = is;
    })(InlineValueEvaluatableExpression || (exports.InlineValueEvaluatableExpression = InlineValueEvaluatableExpression = {}));
    /**
     * The InlineValueContext namespace provides helper functions to work with
     * {@link InlineValueContext} literals.
     *
     * @since 3.17.0
     */
    var InlineValueContext;
    (function (InlineValueContext) {
        /**
         * Creates a new InlineValueContext literal.
         */
        function create(frameId, stoppedLocation) {
            return { frameId: frameId, stoppedLocation: stoppedLocation };
        }
        InlineValueContext.create = create;
        /**
         * Checks whether the given literal conforms to the {@link InlineValueContext} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Range.is(value.stoppedLocation);
        }
        InlineValueContext.is = is;
    })(InlineValueContext || (exports.InlineValueContext = InlineValueContext = {}));
    /**
     * Inlay hint kinds.
     *
     * @since 3.17.0
     */
    var InlayHintKind;
    (function (InlayHintKind) {
        /**
         * An inlay hint that for a type annotation.
         */
        InlayHintKind.Type = 1;
        /**
         * An inlay hint that is for a parameter.
         */
        InlayHintKind.Parameter = 2;
        function is(value) {
            return value === 1 || value === 2;
        }
        InlayHintKind.is = is;
    })(InlayHintKind || (exports.InlayHintKind = InlayHintKind = {}));
    var InlayHintLabelPart;
    (function (InlayHintLabelPart) {
        function create(value) {
            return { value: value };
        }
        InlayHintLabelPart.create = create;
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate)
                && (candidate.tooltip === undefined || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip))
                && (candidate.location === undefined || Location.is(candidate.location))
                && (candidate.command === undefined || Command.is(candidate.command));
        }
        InlayHintLabelPart.is = is;
    })(InlayHintLabelPart || (exports.InlayHintLabelPart = InlayHintLabelPart = {}));
    var InlayHint;
    (function (InlayHint) {
        function create(position, label, kind) {
            var result = { position: position, label: label };
            if (kind !== undefined) {
                result.kind = kind;
            }
            return result;
        }
        InlayHint.create = create;
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Position.is(candidate.position)
                && (Is.string(candidate.label) || Is.typedArray(candidate.label, InlayHintLabelPart.is))
                && (candidate.kind === undefined || InlayHintKind.is(candidate.kind))
                && (candidate.textEdits === undefined) || Is.typedArray(candidate.textEdits, TextEdit.is)
                && (candidate.tooltip === undefined || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip))
                && (candidate.paddingLeft === undefined || Is.boolean(candidate.paddingLeft))
                && (candidate.paddingRight === undefined || Is.boolean(candidate.paddingRight));
        }
        InlayHint.is = is;
    })(InlayHint || (exports.InlayHint = InlayHint = {}));
    var StringValue;
    (function (StringValue) {
        function createSnippet(value) {
            return { kind: 'snippet', value: value };
        }
        StringValue.createSnippet = createSnippet;
    })(StringValue || (exports.StringValue = StringValue = {}));
    var InlineCompletionItem;
    (function (InlineCompletionItem) {
        function create(insertText, filterText, range, command) {
            return { insertText: insertText, filterText: filterText, range: range, command: command };
        }
        InlineCompletionItem.create = create;
    })(InlineCompletionItem || (exports.InlineCompletionItem = InlineCompletionItem = {}));
    var InlineCompletionList;
    (function (InlineCompletionList) {
        function create(items) {
            return { items: items };
        }
        InlineCompletionList.create = create;
    })(InlineCompletionList || (exports.InlineCompletionList = InlineCompletionList = {}));
    /**
     * Describes how an {@link InlineCompletionItemProvider inline completion provider} was triggered.
     *
     * @since 3.18.0
     * @proposed
     */
    var InlineCompletionTriggerKind;
    (function (InlineCompletionTriggerKind) {
        /**
         * Completion was triggered explicitly by a user gesture.
         */
        InlineCompletionTriggerKind.Invoked = 0;
        /**
         * Completion was triggered automatically while editing.
         */
        InlineCompletionTriggerKind.Automatic = 1;
    })(InlineCompletionTriggerKind || (exports.InlineCompletionTriggerKind = InlineCompletionTriggerKind = {}));
    var SelectedCompletionInfo;
    (function (SelectedCompletionInfo) {
        function create(range, text) {
            return { range: range, text: text };
        }
        SelectedCompletionInfo.create = create;
    })(SelectedCompletionInfo || (exports.SelectedCompletionInfo = SelectedCompletionInfo = {}));
    var InlineCompletionContext;
    (function (InlineCompletionContext) {
        function create(triggerKind, selectedCompletionInfo) {
            return { triggerKind: triggerKind, selectedCompletionInfo: selectedCompletionInfo };
        }
        InlineCompletionContext.create = create;
    })(InlineCompletionContext || (exports.InlineCompletionContext = InlineCompletionContext = {}));
    var WorkspaceFolder;
    (function (WorkspaceFolder) {
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && URI.is(candidate.uri) && Is.string(candidate.name);
        }
        WorkspaceFolder.is = is;
    })(WorkspaceFolder || (exports.WorkspaceFolder = WorkspaceFolder = {}));
    exports.EOL = ['\n', '\r\n', '\r'];
    /**
     * @deprecated Use the text document from the new vscode-languageserver-textdocument package.
     */
    var TextDocument;
    (function (TextDocument) {
        /**
         * Creates a new ITextDocument literal from the given uri and content.
         * @param uri The document's uri.
         * @param languageId The document's language Id.
         * @param version The document's version.
         * @param content The document's content.
         */
        function create(uri, languageId, version, content) {
            return new FullTextDocument(uri, languageId, version, content);
        }
        TextDocument.create = create;
        /**
         * Checks whether the given literal conforms to the {@link ITextDocument} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.uinteger(candidate.lineCount)
                && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
        }
        TextDocument.is = is;
        function applyEdits(document, edits) {
            var text = document.getText();
            var sortedEdits = mergeSort(edits, function (a, b) {
                var diff = a.range.start.line - b.range.start.line;
                if (diff === 0) {
                    return a.range.start.character - b.range.start.character;
                }
                return diff;
            });
            var lastModifiedOffset = text.length;
            for (var i = sortedEdits.length - 1; i >= 0; i--) {
                var e = sortedEdits[i];
                var startOffset = document.offsetAt(e.range.start);
                var endOffset = document.offsetAt(e.range.end);
                if (endOffset <= lastModifiedOffset) {
                    text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
                }
                else {
                    throw new Error('Overlapping edit');
                }
                lastModifiedOffset = startOffset;
            }
            return text;
        }
        TextDocument.applyEdits = applyEdits;
        function mergeSort(data, compare) {
            if (data.length <= 1) {
                // sorted
                return data;
            }
            var p = (data.length / 2) | 0;
            var left = data.slice(0, p);
            var right = data.slice(p);
            mergeSort(left, compare);
            mergeSort(right, compare);
            var leftIdx = 0;
            var rightIdx = 0;
            var i = 0;
            while (leftIdx < left.length && rightIdx < right.length) {
                var ret = compare(left[leftIdx], right[rightIdx]);
                if (ret <= 0) {
                    // smaller_equal -> take left to preserve order
                    data[i++] = left[leftIdx++];
                }
                else {
                    // greater -> take right
                    data[i++] = right[rightIdx++];
                }
            }
            while (leftIdx < left.length) {
                data[i++] = left[leftIdx++];
            }
            while (rightIdx < right.length) {
                data[i++] = right[rightIdx++];
            }
            return data;
        }
    })(TextDocument || (exports.TextDocument = TextDocument = {}));
    /**
     * @deprecated Use the text document from the new vscode-languageserver-textdocument package.
     */
    var FullTextDocument = /** @class */ (function () {
        function FullTextDocument(uri, languageId, version, content) {
            this._uri = uri;
            this._languageId = languageId;
            this._version = version;
            this._content = content;
            this._lineOffsets = undefined;
        }
        Object.defineProperty(FullTextDocument.prototype, "uri", {
            get: function () {
                return this._uri;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FullTextDocument.prototype, "languageId", {
            get: function () {
                return this._languageId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FullTextDocument.prototype, "version", {
            get: function () {
                return this._version;
            },
            enumerable: false,
            configurable: true
        });
        FullTextDocument.prototype.getText = function (range) {
            if (range) {
                var start = this.offsetAt(range.start);
                var end = this.offsetAt(range.end);
                return this._content.substring(start, end);
            }
            return this._content;
        };
        FullTextDocument.prototype.update = function (event, version) {
            this._content = event.text;
            this._version = version;
            this._lineOffsets = undefined;
        };
        FullTextDocument.prototype.getLineOffsets = function () {
            if (this._lineOffsets === undefined) {
                var lineOffsets = [];
                var text = this._content;
                var isLineStart = true;
                for (var i = 0; i < text.length; i++) {
                    if (isLineStart) {
                        lineOffsets.push(i);
                        isLineStart = false;
                    }
                    var ch = text.charAt(i);
                    isLineStart = (ch === '\r' || ch === '\n');
                    if (ch === '\r' && i + 1 < text.length && text.charAt(i + 1) === '\n') {
                        i++;
                    }
                }
                if (isLineStart && text.length > 0) {
                    lineOffsets.push(text.length);
                }
                this._lineOffsets = lineOffsets;
            }
            return this._lineOffsets;
        };
        FullTextDocument.prototype.positionAt = function (offset) {
            offset = Math.max(Math.min(offset, this._content.length), 0);
            var lineOffsets = this.getLineOffsets();
            var low = 0, high = lineOffsets.length;
            if (high === 0) {
                return Position.create(0, offset);
            }
            while (low < high) {
                var mid = Math.floor((low + high) / 2);
                if (lineOffsets[mid] > offset) {
                    high = mid;
                }
                else {
                    low = mid + 1;
                }
            }
            // low is the least x for which the line offset is larger than the current offset
            // or array.length if no line offset is larger than the current offset
            var line = low - 1;
            return Position.create(line, offset - lineOffsets[line]);
        };
        FullTextDocument.prototype.offsetAt = function (position) {
            var lineOffsets = this.getLineOffsets();
            if (position.line >= lineOffsets.length) {
                return this._content.length;
            }
            else if (position.line < 0) {
                return 0;
            }
            var lineOffset = lineOffsets[position.line];
            var nextLineOffset = (position.line + 1 < lineOffsets.length) ? lineOffsets[position.line + 1] : this._content.length;
            return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
        };
        Object.defineProperty(FullTextDocument.prototype, "lineCount", {
            get: function () {
                return this.getLineOffsets().length;
            },
            enumerable: false,
            configurable: true
        });
        return FullTextDocument;
    }());
    var Is;
    (function (Is) {
        var toString = Object.prototype.toString;
        function defined(value) {
            return typeof value !== 'undefined';
        }
        Is.defined = defined;
        function undefined(value) {
            return typeof value === 'undefined';
        }
        Is.undefined = undefined;
        function boolean(value) {
            return value === true || value === false;
        }
        Is.boolean = boolean;
        function string(value) {
            return toString.call(value) === '[object String]';
        }
        Is.string = string;
        function number(value) {
            return toString.call(value) === '[object Number]';
        }
        Is.number = number;
        function numberRange(value, min, max) {
            return toString.call(value) === '[object Number]' && min <= value && value <= max;
        }
        Is.numberRange = numberRange;
        function integer(value) {
            return toString.call(value) === '[object Number]' && -2147483648 <= value && value <= 2147483647;
        }
        Is.integer = integer;
        function uinteger(value) {
            return toString.call(value) === '[object Number]' && 0 <= value && value <= 2147483647;
        }
        Is.uinteger = uinteger;
        function func(value) {
            return toString.call(value) === '[object Function]';
        }
        Is.func = func;
        function objectLiteral(value) {
            // Strictly speaking class instances pass this check as well. Since the LSP
            // doesn't use classes we ignore this for now. If we do we need to add something
            // like this: `Object.getPrototypeOf(Object.getPrototypeOf(x)) === null`
            return value !== null && typeof value === 'object';
        }
        Is.objectLiteral = objectLiteral;
        function typedArray(value, check) {
            return Array.isArray(value) && value.every(check);
        }
        Is.typedArray = typedArray;
    })(Is || (Is = {}));
});


/***/ },

/***/ 7353
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/api.js ***!
  \*************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProposedFeatures = exports.NotebookDocuments = exports.TextDocuments = exports.SemanticTokensBuilder = void 0;
const semanticTokens_1 = __webpack_require__(/*! ./semanticTokens */ 6563);
Object.defineProperty(exports, "SemanticTokensBuilder", ({ enumerable: true, get: function () { return semanticTokens_1.SemanticTokensBuilder; } }));
const ic = __webpack_require__(/*! ./inlineCompletion.proposed */ 2216);
__exportStar(__webpack_require__(/*! vscode-languageserver-protocol/ */ 2195), exports);
const textDocuments_1 = __webpack_require__(/*! ./textDocuments */ 1178);
Object.defineProperty(exports, "TextDocuments", ({ enumerable: true, get: function () { return textDocuments_1.TextDocuments; } }));
const notebook_1 = __webpack_require__(/*! ./notebook */ 6536);
Object.defineProperty(exports, "NotebookDocuments", ({ enumerable: true, get: function () { return notebook_1.NotebookDocuments; } }));
__exportStar(__webpack_require__(/*! ./server */ 2238), exports);
var ProposedFeatures;
(function (ProposedFeatures) {
    ProposedFeatures.all = {
        __brand: 'features',
        languages: ic.InlineCompletionFeature
    };
})(ProposedFeatures || (exports.ProposedFeatures = ProposedFeatures = {}));


/***/ },

/***/ 4066
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/callHierarchy.js ***!
  \***********************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CallHierarchyFeature = void 0;
const vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ 2195);
const CallHierarchyFeature = (Base) => {
    return class extends Base {
        get callHierarchy() {
            return {
                onPrepare: (handler) => {
                    return this.connection.onRequest(vscode_languageserver_protocol_1.CallHierarchyPrepareRequest.type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), undefined);
                    });
                },
                onIncomingCalls: (handler) => {
                    const type = vscode_languageserver_protocol_1.CallHierarchyIncomingCallsRequest.type;
                    return this.connection.onRequest(type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                    });
                },
                onOutgoingCalls: (handler) => {
                    const type = vscode_languageserver_protocol_1.CallHierarchyOutgoingCallsRequest.type;
                    return this.connection.onRequest(type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                    });
                }
            };
        }
    };
};
exports.CallHierarchyFeature = CallHierarchyFeature;


/***/ },

/***/ 3383
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/configuration.js ***!
  \***********************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigurationFeature = void 0;
const vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ 2195);
const Is = __webpack_require__(/*! ./utils/is */ 5527);
const ConfigurationFeature = (Base) => {
    return class extends Base {
        getConfiguration(arg) {
            if (!arg) {
                return this._getConfiguration({});
            }
            else if (Is.string(arg)) {
                return this._getConfiguration({ section: arg });
            }
            else {
                return this._getConfiguration(arg);
            }
        }
        _getConfiguration(arg) {
            let params = {
                items: Array.isArray(arg) ? arg : [arg]
            };
            return this.connection.sendRequest(vscode_languageserver_protocol_1.ConfigurationRequest.type, params).then((result) => {
                if (Array.isArray(result)) {
                    return Array.isArray(arg) ? result : result[0];
                }
                else {
                    return Array.isArray(arg) ? [] : null;
                }
            });
        }
    };
};
exports.ConfigurationFeature = ConfigurationFeature;


/***/ },

/***/ 8486
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/diagnostic.js ***!
  \********************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DiagnosticFeature = void 0;
const vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ 2195);
const DiagnosticFeature = (Base) => {
    return class extends Base {
        get diagnostics() {
            return {
                refresh: () => {
                    return this.connection.sendRequest(vscode_languageserver_protocol_1.DiagnosticRefreshRequest.type);
                },
                on: (handler) => {
                    return this.connection.onRequest(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.partialResult, params));
                    });
                },
                onWorkspace: (handler) => {
                    return this.connection.onRequest(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.partialResult, params));
                    });
                }
            };
        }
    };
};
exports.DiagnosticFeature = DiagnosticFeature;


/***/ },

/***/ 9389
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/fileOperations.js ***!
  \************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileOperationsFeature = void 0;
const vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ 2195);
const FileOperationsFeature = (Base) => {
    return class extends Base {
        onDidCreateFiles(handler) {
            return this.connection.onNotification(vscode_languageserver_protocol_1.DidCreateFilesNotification.type, (params) => {
                handler(params);
            });
        }
        onDidRenameFiles(handler) {
            return this.connection.onNotification(vscode_languageserver_protocol_1.DidRenameFilesNotification.type, (params) => {
                handler(params);
            });
        }
        onDidDeleteFiles(handler) {
            return this.connection.onNotification(vscode_languageserver_protocol_1.DidDeleteFilesNotification.type, (params) => {
                handler(params);
            });
        }
        onWillCreateFiles(handler) {
            return this.connection.onRequest(vscode_languageserver_protocol_1.WillCreateFilesRequest.type, (params, cancel) => {
                return handler(params, cancel);
            });
        }
        onWillRenameFiles(handler) {
            return this.connection.onRequest(vscode_languageserver_protocol_1.WillRenameFilesRequest.type, (params, cancel) => {
                return handler(params, cancel);
            });
        }
        onWillDeleteFiles(handler) {
            return this.connection.onRequest(vscode_languageserver_protocol_1.WillDeleteFilesRequest.type, (params, cancel) => {
                return handler(params, cancel);
            });
        }
    };
};
exports.FileOperationsFeature = FileOperationsFeature;


/***/ },

/***/ 4579
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/foldingRange.js ***!
  \**********************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FoldingRangeFeature = void 0;
const vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ 2195);
const FoldingRangeFeature = (Base) => {
    return class extends Base {
        get foldingRange() {
            return {
                refresh: () => {
                    return this.connection.sendRequest(vscode_languageserver_protocol_1.FoldingRangeRefreshRequest.type);
                },
                on: (handler) => {
                    const type = vscode_languageserver_protocol_1.FoldingRangeRequest.type;
                    return this.connection.onRequest(type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                    });
                }
            };
        }
    };
};
exports.FoldingRangeFeature = FoldingRangeFeature;


/***/ },

/***/ 5223
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/inlayHint.js ***!
  \*******************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InlayHintFeature = void 0;
const vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ 2195);
const InlayHintFeature = (Base) => {
    return class extends Base {
        get inlayHint() {
            return {
                refresh: () => {
                    return this.connection.sendRequest(vscode_languageserver_protocol_1.InlayHintRefreshRequest.type);
                },
                on: (handler) => {
                    return this.connection.onRequest(vscode_languageserver_protocol_1.InlayHintRequest.type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params));
                    });
                },
                resolve: (handler) => {
                    return this.connection.onRequest(vscode_languageserver_protocol_1.InlayHintResolveRequest.type, (params, cancel) => {
                        return handler(params, cancel);
                    });
                }
            };
        }
    };
};
exports.InlayHintFeature = InlayHintFeature;


/***/ },

/***/ 2216
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/inlineCompletion.proposed.js ***!
  \***********************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InlineCompletionFeature = void 0;
const vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ 2195);
const InlineCompletionFeature = (Base) => {
    return class extends Base {
        get inlineCompletion() {
            return {
                on: (handler) => {
                    return this.connection.onRequest(vscode_languageserver_protocol_1.InlineCompletionRequest.type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params));
                    });
                }
            };
        }
    };
};
exports.InlineCompletionFeature = InlineCompletionFeature;


/***/ },

/***/ 387
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/inlineValue.js ***!
  \*********************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InlineValueFeature = void 0;
const vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ 2195);
const InlineValueFeature = (Base) => {
    return class extends Base {
        get inlineValue() {
            return {
                refresh: () => {
                    return this.connection.sendRequest(vscode_languageserver_protocol_1.InlineValueRefreshRequest.type);
                },
                on: (handler) => {
                    return this.connection.onRequest(vscode_languageserver_protocol_1.InlineValueRequest.type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params));
                    });
                }
            };
        }
    };
};
exports.InlineValueFeature = InlineValueFeature;


/***/ },

/***/ 8137
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/linkedEditingRange.js ***!
  \****************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinkedEditingRangeFeature = void 0;
const vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ 2195);
const LinkedEditingRangeFeature = (Base) => {
    return class extends Base {
        onLinkedEditingRange(handler) {
            return this.connection.onRequest(vscode_languageserver_protocol_1.LinkedEditingRangeRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), undefined);
            });
        }
    };
};
exports.LinkedEditingRangeFeature = LinkedEditingRangeFeature;


/***/ },

/***/ 740
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/moniker.js ***!
  \*****************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MonikerFeature = void 0;
const vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ 2195);
const MonikerFeature = (Base) => {
    return class extends Base {
        get moniker() {
            return {
                on: (handler) => {
                    const type = vscode_languageserver_protocol_1.MonikerRequest.type;
                    return this.connection.onRequest(type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                    });
                },
            };
        }
    };
};
exports.MonikerFeature = MonikerFeature;


/***/ },

/***/ 6536
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/notebook.js ***!
  \******************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotebookDocuments = exports.NotebookSyncFeature = void 0;
const vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ 2195);
const textDocuments_1 = __webpack_require__(/*! ./textDocuments */ 1178);
const NotebookSyncFeature = (Base) => {
    return class extends Base {
        get synchronization() {
            return {
                onDidOpenNotebookDocument: (handler) => {
                    return this.connection.onNotification(vscode_languageserver_protocol_1.DidOpenNotebookDocumentNotification.type, (params) => {
                        handler(params);
                    });
                },
                onDidChangeNotebookDocument: (handler) => {
                    return this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeNotebookDocumentNotification.type, (params) => {
                        handler(params);
                    });
                },
                onDidSaveNotebookDocument: (handler) => {
                    return this.connection.onNotification(vscode_languageserver_protocol_1.DidSaveNotebookDocumentNotification.type, (params) => {
                        handler(params);
                    });
                },
                onDidCloseNotebookDocument: (handler) => {
                    return this.connection.onNotification(vscode_languageserver_protocol_1.DidCloseNotebookDocumentNotification.type, (params) => {
                        handler(params);
                    });
                }
            };
        }
    };
};
exports.NotebookSyncFeature = NotebookSyncFeature;
class CellTextDocumentConnection {
    onDidOpenTextDocument(handler) {
        this.openHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => { this.openHandler = undefined; });
    }
    openTextDocument(params) {
        this.openHandler && this.openHandler(params);
    }
    onDidChangeTextDocument(handler) {
        this.changeHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => { this.changeHandler = handler; });
    }
    changeTextDocument(params) {
        this.changeHandler && this.changeHandler(params);
    }
    onDidCloseTextDocument(handler) {
        this.closeHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => { this.closeHandler = undefined; });
    }
    closeTextDocument(params) {
        this.closeHandler && this.closeHandler(params);
    }
    onWillSaveTextDocument() {
        return CellTextDocumentConnection.NULL_DISPOSE;
    }
    onWillSaveTextDocumentWaitUntil() {
        return CellTextDocumentConnection.NULL_DISPOSE;
    }
    onDidSaveTextDocument() {
        return CellTextDocumentConnection.NULL_DISPOSE;
    }
}
CellTextDocumentConnection.NULL_DISPOSE = Object.freeze({ dispose: () => { } });
class NotebookDocuments {
    constructor(configurationOrTextDocuments) {
        if (configurationOrTextDocuments instanceof textDocuments_1.TextDocuments) {
            this._cellTextDocuments = configurationOrTextDocuments;
        }
        else {
            this._cellTextDocuments = new textDocuments_1.TextDocuments(configurationOrTextDocuments);
        }
        this.notebookDocuments = new Map();
        this.notebookCellMap = new Map();
        this._onDidOpen = new vscode_languageserver_protocol_1.Emitter();
        this._onDidChange = new vscode_languageserver_protocol_1.Emitter();
        this._onDidSave = new vscode_languageserver_protocol_1.Emitter();
        this._onDidClose = new vscode_languageserver_protocol_1.Emitter();
    }
    get cellTextDocuments() {
        return this._cellTextDocuments;
    }
    getCellTextDocument(cell) {
        return this._cellTextDocuments.get(cell.document);
    }
    getNotebookDocument(uri) {
        return this.notebookDocuments.get(uri);
    }
    getNotebookCell(uri) {
        const value = this.notebookCellMap.get(uri);
        return value && value[0];
    }
    findNotebookDocumentForCell(cell) {
        const key = typeof cell === 'string' ? cell : cell.document;
        const value = this.notebookCellMap.get(key);
        return value && value[1];
    }
    get onDidOpen() {
        return this._onDidOpen.event;
    }
    get onDidSave() {
        return this._onDidSave.event;
    }
    get onDidChange() {
        return this._onDidChange.event;
    }
    get onDidClose() {
        return this._onDidClose.event;
    }
    /**
     * Listens for `low level` notification on the given connection to
     * update the notebook documents managed by this instance.
     *
     * Please note that the connection only provides handlers not an event model. Therefore
     * listening on a connection will overwrite the following handlers on a connection:
     * `onDidOpenNotebookDocument`, `onDidChangeNotebookDocument`, `onDidSaveNotebookDocument`,
     *  and `onDidCloseNotebookDocument`.
     *
     * @param connection The connection to listen on.
     */
    listen(connection) {
        const cellTextDocumentConnection = new CellTextDocumentConnection();
        const disposables = [];
        disposables.push(this.cellTextDocuments.listen(cellTextDocumentConnection));
        disposables.push(connection.notebooks.synchronization.onDidOpenNotebookDocument((params) => {
            this.notebookDocuments.set(params.notebookDocument.uri, params.notebookDocument);
            for (const cellTextDocument of params.cellTextDocuments) {
                cellTextDocumentConnection.openTextDocument({ textDocument: cellTextDocument });
            }
            this.updateCellMap(params.notebookDocument);
            this._onDidOpen.fire(params.notebookDocument);
        }));
        disposables.push(connection.notebooks.synchronization.onDidChangeNotebookDocument((params) => {
            const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
            if (notebookDocument === undefined) {
                return;
            }
            notebookDocument.version = params.notebookDocument.version;
            const oldMetadata = notebookDocument.metadata;
            let metadataChanged = false;
            const change = params.change;
            if (change.metadata !== undefined) {
                metadataChanged = true;
                notebookDocument.metadata = change.metadata;
            }
            const opened = [];
            const closed = [];
            const data = [];
            const text = [];
            if (change.cells !== undefined) {
                const changedCells = change.cells;
                if (changedCells.structure !== undefined) {
                    const array = changedCells.structure.array;
                    notebookDocument.cells.splice(array.start, array.deleteCount, ...(array.cells !== undefined ? array.cells : []));
                    // Additional open cell text documents.
                    if (changedCells.structure.didOpen !== undefined) {
                        for (const open of changedCells.structure.didOpen) {
                            cellTextDocumentConnection.openTextDocument({ textDocument: open });
                            opened.push(open.uri);
                        }
                    }
                    // Additional closed cell test documents.
                    if (changedCells.structure.didClose) {
                        for (const close of changedCells.structure.didClose) {
                            cellTextDocumentConnection.closeTextDocument({ textDocument: close });
                            closed.push(close.uri);
                        }
                    }
                }
                if (changedCells.data !== undefined) {
                    const cellUpdates = new Map(changedCells.data.map(cell => [cell.document, cell]));
                    for (let i = 0; i <= notebookDocument.cells.length; i++) {
                        const change = cellUpdates.get(notebookDocument.cells[i].document);
                        if (change !== undefined) {
                            const old = notebookDocument.cells.splice(i, 1, change);
                            data.push({ old: old[0], new: change });
                            cellUpdates.delete(change.document);
                            if (cellUpdates.size === 0) {
                                break;
                            }
                        }
                    }
                }
                if (changedCells.textContent !== undefined) {
                    for (const cellTextDocument of changedCells.textContent) {
                        cellTextDocumentConnection.changeTextDocument({ textDocument: cellTextDocument.document, contentChanges: cellTextDocument.changes });
                        text.push(cellTextDocument.document.uri);
                    }
                }
            }
            // Update internal data structure.
            this.updateCellMap(notebookDocument);
            const changeEvent = { notebookDocument };
            if (metadataChanged) {
                changeEvent.metadata = { old: oldMetadata, new: notebookDocument.metadata };
            }
            const added = [];
            for (const open of opened) {
                added.push(this.getNotebookCell(open));
            }
            const removed = [];
            for (const close of closed) {
                removed.push(this.getNotebookCell(close));
            }
            const textContent = [];
            for (const change of text) {
                textContent.push(this.getNotebookCell(change));
            }
            if (added.length > 0 || removed.length > 0 || data.length > 0 || textContent.length > 0) {
                changeEvent.cells = { added, removed, changed: { data, textContent } };
            }
            if (changeEvent.metadata !== undefined || changeEvent.cells !== undefined) {
                this._onDidChange.fire(changeEvent);
            }
        }));
        disposables.push(connection.notebooks.synchronization.onDidSaveNotebookDocument((params) => {
            const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
            if (notebookDocument === undefined) {
                return;
            }
            this._onDidSave.fire(notebookDocument);
        }));
        disposables.push(connection.notebooks.synchronization.onDidCloseNotebookDocument((params) => {
            const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
            if (notebookDocument === undefined) {
                return;
            }
            this._onDidClose.fire(notebookDocument);
            for (const cellTextDocument of params.cellTextDocuments) {
                cellTextDocumentConnection.closeTextDocument({ textDocument: cellTextDocument });
            }
            this.notebookDocuments.delete(params.notebookDocument.uri);
            for (const cell of notebookDocument.cells) {
                this.notebookCellMap.delete(cell.document);
            }
        }));
        return vscode_languageserver_protocol_1.Disposable.create(() => { disposables.forEach(disposable => disposable.dispose()); });
    }
    updateCellMap(notebookDocument) {
        for (const cell of notebookDocument.cells) {
            this.notebookCellMap.set(cell.document, [cell, notebookDocument]);
        }
    }
}
exports.NotebookDocuments = NotebookDocuments;


/***/ },

/***/ 422
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/progress.js ***!
  \******************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.attachPartialResult = exports.ProgressFeature = exports.attachWorkDone = void 0;
const vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ 2195);
const uuid_1 = __webpack_require__(/*! ./utils/uuid */ 6192);
class WorkDoneProgressReporterImpl {
    constructor(_connection, _token) {
        this._connection = _connection;
        this._token = _token;
        WorkDoneProgressReporterImpl.Instances.set(this._token, this);
    }
    begin(title, percentage, message, cancellable) {
        let param = {
            kind: 'begin',
            title,
            percentage,
            message,
            cancellable
        };
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
    }
    report(arg0, arg1) {
        let param = {
            kind: 'report'
        };
        if (typeof arg0 === 'number') {
            param.percentage = arg0;
            if (arg1 !== undefined) {
                param.message = arg1;
            }
        }
        else {
            param.message = arg0;
        }
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
    }
    done() {
        WorkDoneProgressReporterImpl.Instances.delete(this._token);
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, { kind: 'end' });
    }
}
WorkDoneProgressReporterImpl.Instances = new Map();
class WorkDoneProgressServerReporterImpl extends WorkDoneProgressReporterImpl {
    constructor(connection, token) {
        super(connection, token);
        this._source = new vscode_languageserver_protocol_1.CancellationTokenSource();
    }
    get token() {
        return this._source.token;
    }
    done() {
        this._source.dispose();
        super.done();
    }
    cancel() {
        this._source.cancel();
    }
}
class NullProgressReporter {
    constructor() {
    }
    begin() {
    }
    report() {
    }
    done() {
    }
}
class NullProgressServerReporter extends NullProgressReporter {
    constructor() {
        super();
        this._source = new vscode_languageserver_protocol_1.CancellationTokenSource();
    }
    get token() {
        return this._source.token;
    }
    done() {
        this._source.dispose();
    }
    cancel() {
        this._source.cancel();
    }
}
function attachWorkDone(connection, params) {
    if (params === undefined || params.workDoneToken === undefined) {
        return new NullProgressReporter();
    }
    const token = params.workDoneToken;
    delete params.workDoneToken;
    return new WorkDoneProgressReporterImpl(connection, token);
}
exports.attachWorkDone = attachWorkDone;
const ProgressFeature = (Base) => {
    return class extends Base {
        constructor() {
            super();
            this._progressSupported = false;
        }
        initialize(capabilities) {
            super.initialize(capabilities);
            if (capabilities?.window?.workDoneProgress === true) {
                this._progressSupported = true;
                this.connection.onNotification(vscode_languageserver_protocol_1.WorkDoneProgressCancelNotification.type, (params) => {
                    let progress = WorkDoneProgressReporterImpl.Instances.get(params.token);
                    if (progress instanceof WorkDoneProgressServerReporterImpl || progress instanceof NullProgressServerReporter) {
                        progress.cancel();
                    }
                });
            }
        }
        attachWorkDoneProgress(token) {
            if (token === undefined) {
                return new NullProgressReporter();
            }
            else {
                return new WorkDoneProgressReporterImpl(this.connection, token);
            }
        }
        createWorkDoneProgress() {
            if (this._progressSupported) {
                const token = (0, uuid_1.generateUuid)();
                return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkDoneProgressCreateRequest.type, { token }).then(() => {
                    const result = new WorkDoneProgressServerReporterImpl(this.connection, token);
                    return result;
                });
            }
            else {
                return Promise.resolve(new NullProgressServerReporter());
            }
        }
    };
};
exports.ProgressFeature = ProgressFeature;
var ResultProgress;
(function (ResultProgress) {
    ResultProgress.type = new vscode_languageserver_protocol_1.ProgressType();
})(ResultProgress || (ResultProgress = {}));
class ResultProgressReporterImpl {
    constructor(_connection, _token) {
        this._connection = _connection;
        this._token = _token;
    }
    report(data) {
        this._connection.sendProgress(ResultProgress.type, this._token, data);
    }
}
function attachPartialResult(connection, params) {
    if (params === undefined || params.partialResultToken === undefined) {
        return undefined;
    }
    const token = params.partialResultToken;
    delete params.partialResultToken;
    return new ResultProgressReporterImpl(connection, token);
}
exports.attachPartialResult = attachPartialResult;


/***/ },

/***/ 6563
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/semanticTokens.js ***!
  \************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SemanticTokensBuilder = exports.SemanticTokensDiff = exports.SemanticTokensFeature = void 0;
const vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ 2195);
const SemanticTokensFeature = (Base) => {
    return class extends Base {
        get semanticTokens() {
            return {
                refresh: () => {
                    return this.connection.sendRequest(vscode_languageserver_protocol_1.SemanticTokensRefreshRequest.type);
                },
                on: (handler) => {
                    const type = vscode_languageserver_protocol_1.SemanticTokensRequest.type;
                    return this.connection.onRequest(type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                    });
                },
                onDelta: (handler) => {
                    const type = vscode_languageserver_protocol_1.SemanticTokensDeltaRequest.type;
                    return this.connection.onRequest(type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                    });
                },
                onRange: (handler) => {
                    const type = vscode_languageserver_protocol_1.SemanticTokensRangeRequest.type;
                    return this.connection.onRequest(type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                    });
                }
            };
        }
    };
};
exports.SemanticTokensFeature = SemanticTokensFeature;
class SemanticTokensDiff {
    constructor(originalSequence, modifiedSequence) {
        this.originalSequence = originalSequence;
        this.modifiedSequence = modifiedSequence;
    }
    computeDiff() {
        const originalLength = this.originalSequence.length;
        const modifiedLength = this.modifiedSequence.length;
        let startIndex = 0;
        while (startIndex < modifiedLength && startIndex < originalLength && this.originalSequence[startIndex] === this.modifiedSequence[startIndex]) {
            startIndex++;
        }
        if (startIndex < modifiedLength && startIndex < originalLength) {
            let originalEndIndex = originalLength - 1;
            let modifiedEndIndex = modifiedLength - 1;
            while (originalEndIndex >= startIndex && modifiedEndIndex >= startIndex && this.originalSequence[originalEndIndex] === this.modifiedSequence[modifiedEndIndex]) {
                originalEndIndex--;
                modifiedEndIndex--;
            }
            // if one moved behind the start index move them forward again
            if (originalEndIndex < startIndex || modifiedEndIndex < startIndex) {
                originalEndIndex++;
                modifiedEndIndex++;
            }
            const deleteCount = originalEndIndex - startIndex + 1;
            const newData = this.modifiedSequence.slice(startIndex, modifiedEndIndex + 1);
            // If we moved behind the start index we could have missed a simple delete.
            if (newData.length === 1 && newData[0] === this.originalSequence[originalEndIndex]) {
                return [
                    { start: startIndex, deleteCount: deleteCount - 1 }
                ];
            }
            else {
                return [
                    { start: startIndex, deleteCount, data: newData }
                ];
            }
        }
        else if (startIndex < modifiedLength) {
            return [
                { start: startIndex, deleteCount: 0, data: this.modifiedSequence.slice(startIndex) }
            ];
        }
        else if (startIndex < originalLength) {
            return [
                { start: startIndex, deleteCount: originalLength - startIndex }
            ];
        }
        else {
            // The two arrays are the same.
            return [];
        }
    }
}
exports.SemanticTokensDiff = SemanticTokensDiff;
class SemanticTokensBuilder {
    constructor() {
        this._prevData = undefined;
        this.initialize();
    }
    initialize() {
        this._id = Date.now();
        this._prevLine = 0;
        this._prevChar = 0;
        this._data = [];
        this._dataLen = 0;
    }
    push(line, char, length, tokenType, tokenModifiers) {
        let pushLine = line;
        let pushChar = char;
        if (this._dataLen > 0) {
            pushLine -= this._prevLine;
            if (pushLine === 0) {
                pushChar -= this._prevChar;
            }
        }
        this._data[this._dataLen++] = pushLine;
        this._data[this._dataLen++] = pushChar;
        this._data[this._dataLen++] = length;
        this._data[this._dataLen++] = tokenType;
        this._data[this._dataLen++] = tokenModifiers;
        this._prevLine = line;
        this._prevChar = char;
    }
    get id() {
        return this._id.toString();
    }
    previousResult(id) {
        if (this.id === id) {
            this._prevData = this._data;
        }
        this.initialize();
    }
    build() {
        this._prevData = undefined;
        return {
            resultId: this.id,
            data: this._data
        };
    }
    canBuildEdits() {
        return this._prevData !== undefined;
    }
    buildEdits() {
        if (this._prevData !== undefined) {
            return {
                resultId: this.id,
                edits: (new SemanticTokensDiff(this._prevData, this._data)).computeDiff()
            };
        }
        else {
            return this.build();
        }
    }
}
exports.SemanticTokensBuilder = SemanticTokensBuilder;


/***/ },

/***/ 2238
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/server.js ***!
  \****************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createConnection = exports.combineFeatures = exports.combineNotebooksFeatures = exports.combineLanguagesFeatures = exports.combineWorkspaceFeatures = exports.combineWindowFeatures = exports.combineClientFeatures = exports.combineTracerFeatures = exports.combineTelemetryFeatures = exports.combineConsoleFeatures = exports._NotebooksImpl = exports._LanguagesImpl = exports.BulkUnregistration = exports.BulkRegistration = exports.ErrorMessageTracker = void 0;
const vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ 2195);
const Is = __webpack_require__(/*! ./utils/is */ 5527);
const UUID = __webpack_require__(/*! ./utils/uuid */ 6192);
const progress_1 = __webpack_require__(/*! ./progress */ 422);
const configuration_1 = __webpack_require__(/*! ./configuration */ 3383);
const workspaceFolder_1 = __webpack_require__(/*! ./workspaceFolder */ 8124);
const callHierarchy_1 = __webpack_require__(/*! ./callHierarchy */ 4066);
const semanticTokens_1 = __webpack_require__(/*! ./semanticTokens */ 6563);
const showDocument_1 = __webpack_require__(/*! ./showDocument */ 5421);
const fileOperations_1 = __webpack_require__(/*! ./fileOperations */ 9389);
const linkedEditingRange_1 = __webpack_require__(/*! ./linkedEditingRange */ 8137);
const typeHierarchy_1 = __webpack_require__(/*! ./typeHierarchy */ 9654);
const inlineValue_1 = __webpack_require__(/*! ./inlineValue */ 387);
const foldingRange_1 = __webpack_require__(/*! ./foldingRange */ 4579);
// import { InlineCompletionFeatureShape, InlineCompletionFeature } from './inlineCompletion.proposed';
const inlayHint_1 = __webpack_require__(/*! ./inlayHint */ 5223);
const diagnostic_1 = __webpack_require__(/*! ./diagnostic */ 8486);
const notebook_1 = __webpack_require__(/*! ./notebook */ 6536);
const moniker_1 = __webpack_require__(/*! ./moniker */ 740);
function null2Undefined(value) {
    if (value === null) {
        return undefined;
    }
    return value;
}
/**
 * Helps tracking error message. Equal occurrences of the same
 * message are only stored once. This class is for example
 * useful if text documents are validated in a loop and equal
 * error message should be folded into one.
 */
class ErrorMessageTracker {
    constructor() {
        this._messages = Object.create(null);
    }
    /**
     * Add a message to the tracker.
     *
     * @param message The message to add.
     */
    add(message) {
        let count = this._messages[message];
        if (!count) {
            count = 0;
        }
        count++;
        this._messages[message] = count;
    }
    /**
     * Send all tracked messages to the connection's window.
     *
     * @param connection The connection established between client and server.
     */
    sendErrors(connection) {
        Object.keys(this._messages).forEach(message => {
            connection.window.showErrorMessage(message);
        });
    }
}
exports.ErrorMessageTracker = ErrorMessageTracker;
class RemoteConsoleImpl {
    constructor() {
    }
    rawAttach(connection) {
        this._rawConnection = connection;
    }
    attach(connection) {
        this._connection = connection;
    }
    get connection() {
        if (!this._connection) {
            throw new Error('Remote is not attached to a connection yet.');
        }
        return this._connection;
    }
    fillServerCapabilities(_capabilities) {
    }
    initialize(_capabilities) {
    }
    error(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Error, message);
    }
    warn(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Warning, message);
    }
    info(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Info, message);
    }
    log(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Log, message);
    }
    debug(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Debug, message);
    }
    send(type, message) {
        if (this._rawConnection) {
            this._rawConnection.sendNotification(vscode_languageserver_protocol_1.LogMessageNotification.type, { type, message }).catch(() => {
                (0, vscode_languageserver_protocol_1.RAL)().console.error(`Sending log message failed`);
            });
        }
    }
}
class _RemoteWindowImpl {
    constructor() {
    }
    attach(connection) {
        this._connection = connection;
    }
    get connection() {
        if (!this._connection) {
            throw new Error('Remote is not attached to a connection yet.');
        }
        return this._connection;
    }
    initialize(_capabilities) {
    }
    fillServerCapabilities(_capabilities) {
    }
    showErrorMessage(message, ...actions) {
        let params = { type: vscode_languageserver_protocol_1.MessageType.Error, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
    }
    showWarningMessage(message, ...actions) {
        let params = { type: vscode_languageserver_protocol_1.MessageType.Warning, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
    }
    showInformationMessage(message, ...actions) {
        let params = { type: vscode_languageserver_protocol_1.MessageType.Info, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
    }
}
const RemoteWindowImpl = (0, showDocument_1.ShowDocumentFeature)((0, progress_1.ProgressFeature)(_RemoteWindowImpl));
var BulkRegistration;
(function (BulkRegistration) {
    /**
     * Creates a new bulk registration.
     * @return an empty bulk registration.
     */
    function create() {
        return new BulkRegistrationImpl();
    }
    BulkRegistration.create = create;
})(BulkRegistration || (exports.BulkRegistration = BulkRegistration = {}));
class BulkRegistrationImpl {
    constructor() {
        this._registrations = [];
        this._registered = new Set();
    }
    add(type, registerOptions) {
        const method = Is.string(type) ? type : type.method;
        if (this._registered.has(method)) {
            throw new Error(`${method} is already added to this registration`);
        }
        const id = UUID.generateUuid();
        this._registrations.push({
            id: id,
            method: method,
            registerOptions: registerOptions || {}
        });
        this._registered.add(method);
    }
    asRegistrationParams() {
        return {
            registrations: this._registrations
        };
    }
}
var BulkUnregistration;
(function (BulkUnregistration) {
    function create() {
        return new BulkUnregistrationImpl(undefined, []);
    }
    BulkUnregistration.create = create;
})(BulkUnregistration || (exports.BulkUnregistration = BulkUnregistration = {}));
class BulkUnregistrationImpl {
    constructor(_connection, unregistrations) {
        this._connection = _connection;
        this._unregistrations = new Map();
        unregistrations.forEach(unregistration => {
            this._unregistrations.set(unregistration.method, unregistration);
        });
    }
    get isAttached() {
        return !!this._connection;
    }
    attach(connection) {
        this._connection = connection;
    }
    add(unregistration) {
        this._unregistrations.set(unregistration.method, unregistration);
    }
    dispose() {
        let unregistrations = [];
        for (let unregistration of this._unregistrations.values()) {
            unregistrations.push(unregistration);
        }
        let params = {
            unregisterations: unregistrations
        };
        this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
            this._connection.console.info(`Bulk unregistration failed.`);
        });
    }
    disposeSingle(arg) {
        const method = Is.string(arg) ? arg : arg.method;
        const unregistration = this._unregistrations.get(method);
        if (!unregistration) {
            return false;
        }
        let params = {
            unregisterations: [unregistration]
        };
        this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).then(() => {
            this._unregistrations.delete(method);
        }, (_error) => {
            this._connection.console.info(`Un-registering request handler for ${unregistration.id} failed.`);
        });
        return true;
    }
}
class RemoteClientImpl {
    attach(connection) {
        this._connection = connection;
    }
    get connection() {
        if (!this._connection) {
            throw new Error('Remote is not attached to a connection yet.');
        }
        return this._connection;
    }
    initialize(_capabilities) {
    }
    fillServerCapabilities(_capabilities) {
    }
    register(typeOrRegistrations, registerOptionsOrType, registerOptions) {
        if (typeOrRegistrations instanceof BulkRegistrationImpl) {
            return this.registerMany(typeOrRegistrations);
        }
        else if (typeOrRegistrations instanceof BulkUnregistrationImpl) {
            return this.registerSingle1(typeOrRegistrations, registerOptionsOrType, registerOptions);
        }
        else {
            return this.registerSingle2(typeOrRegistrations, registerOptionsOrType);
        }
    }
    registerSingle1(unregistration, type, registerOptions) {
        const method = Is.string(type) ? type : type.method;
        const id = UUID.generateUuid();
        let params = {
            registrations: [{ id, method, registerOptions: registerOptions || {} }]
        };
        if (!unregistration.isAttached) {
            unregistration.attach(this.connection);
        }
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
            unregistration.add({ id: id, method: method });
            return unregistration;
        }, (_error) => {
            this.connection.console.info(`Registering request handler for ${method} failed.`);
            return Promise.reject(_error);
        });
    }
    registerSingle2(type, registerOptions) {
        const method = Is.string(type) ? type : type.method;
        const id = UUID.generateUuid();
        let params = {
            registrations: [{ id, method, registerOptions: registerOptions || {} }]
        };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
            return vscode_languageserver_protocol_1.Disposable.create(() => {
                this.unregisterSingle(id, method).catch(() => { this.connection.console.info(`Un-registering capability with id ${id} failed.`); });
            });
        }, (_error) => {
            this.connection.console.info(`Registering request handler for ${method} failed.`);
            return Promise.reject(_error);
        });
    }
    unregisterSingle(id, method) {
        let params = {
            unregisterations: [{ id, method }]
        };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
            this.connection.console.info(`Un-registering request handler for ${id} failed.`);
        });
    }
    registerMany(registrations) {
        let params = registrations.asRegistrationParams();
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then(() => {
            return new BulkUnregistrationImpl(this._connection, params.registrations.map(registration => { return { id: registration.id, method: registration.method }; }));
        }, (_error) => {
            this.connection.console.info(`Bulk registration failed.`);
            return Promise.reject(_error);
        });
    }
}
class _RemoteWorkspaceImpl {
    constructor() {
    }
    attach(connection) {
        this._connection = connection;
    }
    get connection() {
        if (!this._connection) {
            throw new Error('Remote is not attached to a connection yet.');
        }
        return this._connection;
    }
    initialize(_capabilities) {
    }
    fillServerCapabilities(_capabilities) {
    }
    applyEdit(paramOrEdit) {
        function isApplyWorkspaceEditParams(value) {
            return value && !!value.edit;
        }
        let params = isApplyWorkspaceEditParams(paramOrEdit) ? paramOrEdit : { edit: paramOrEdit };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ApplyWorkspaceEditRequest.type, params);
    }
}
const RemoteWorkspaceImpl = (0, fileOperations_1.FileOperationsFeature)((0, workspaceFolder_1.WorkspaceFoldersFeature)((0, configuration_1.ConfigurationFeature)(_RemoteWorkspaceImpl)));
class TracerImpl {
    constructor() {
        this._trace = vscode_languageserver_protocol_1.Trace.Off;
    }
    attach(connection) {
        this._connection = connection;
    }
    get connection() {
        if (!this._connection) {
            throw new Error('Remote is not attached to a connection yet.');
        }
        return this._connection;
    }
    initialize(_capabilities) {
    }
    fillServerCapabilities(_capabilities) {
    }
    set trace(value) {
        this._trace = value;
    }
    log(message, verbose) {
        if (this._trace === vscode_languageserver_protocol_1.Trace.Off) {
            return;
        }
        this.connection.sendNotification(vscode_languageserver_protocol_1.LogTraceNotification.type, {
            message: message,
            verbose: this._trace === vscode_languageserver_protocol_1.Trace.Verbose ? verbose : undefined
        }).catch(() => {
            // Very hard to decide what to do. We tried to send a log
            // message which failed so we can't simply send another :-(.
        });
    }
}
class TelemetryImpl {
    constructor() {
    }
    attach(connection) {
        this._connection = connection;
    }
    get connection() {
        if (!this._connection) {
            throw new Error('Remote is not attached to a connection yet.');
        }
        return this._connection;
    }
    initialize(_capabilities) {
    }
    fillServerCapabilities(_capabilities) {
    }
    logEvent(data) {
        this.connection.sendNotification(vscode_languageserver_protocol_1.TelemetryEventNotification.type, data).catch(() => {
            this.connection.console.log(`Sending TelemetryEventNotification failed`);
        });
    }
}
class _LanguagesImpl {
    constructor() {
    }
    attach(connection) {
        this._connection = connection;
    }
    get connection() {
        if (!this._connection) {
            throw new Error('Remote is not attached to a connection yet.');
        }
        return this._connection;
    }
    initialize(_capabilities) {
    }
    fillServerCapabilities(_capabilities) {
    }
    attachWorkDoneProgress(params) {
        return (0, progress_1.attachWorkDone)(this.connection, params);
    }
    attachPartialResultProgress(_type, params) {
        return (0, progress_1.attachPartialResult)(this.connection, params);
    }
}
exports._LanguagesImpl = _LanguagesImpl;
const LanguagesImpl = (0, foldingRange_1.FoldingRangeFeature)((0, moniker_1.MonikerFeature)((0, diagnostic_1.DiagnosticFeature)((0, inlayHint_1.InlayHintFeature)((0, inlineValue_1.InlineValueFeature)((0, typeHierarchy_1.TypeHierarchyFeature)((0, linkedEditingRange_1.LinkedEditingRangeFeature)((0, semanticTokens_1.SemanticTokensFeature)((0, callHierarchy_1.CallHierarchyFeature)(_LanguagesImpl)))))))));
class _NotebooksImpl {
    constructor() {
    }
    attach(connection) {
        this._connection = connection;
    }
    get connection() {
        if (!this._connection) {
            throw new Error('Remote is not attached to a connection yet.');
        }
        return this._connection;
    }
    initialize(_capabilities) {
    }
    fillServerCapabilities(_capabilities) {
    }
    attachWorkDoneProgress(params) {
        return (0, progress_1.attachWorkDone)(this.connection, params);
    }
    attachPartialResultProgress(_type, params) {
        return (0, progress_1.attachPartialResult)(this.connection, params);
    }
}
exports._NotebooksImpl = _NotebooksImpl;
const NotebooksImpl = (0, notebook_1.NotebookSyncFeature)(_NotebooksImpl);
function combineConsoleFeatures(one, two) {
    return function (Base) {
        return two(one(Base));
    };
}
exports.combineConsoleFeatures = combineConsoleFeatures;
function combineTelemetryFeatures(one, two) {
    return function (Base) {
        return two(one(Base));
    };
}
exports.combineTelemetryFeatures = combineTelemetryFeatures;
function combineTracerFeatures(one, two) {
    return function (Base) {
        return two(one(Base));
    };
}
exports.combineTracerFeatures = combineTracerFeatures;
function combineClientFeatures(one, two) {
    return function (Base) {
        return two(one(Base));
    };
}
exports.combineClientFeatures = combineClientFeatures;
function combineWindowFeatures(one, two) {
    return function (Base) {
        return two(one(Base));
    };
}
exports.combineWindowFeatures = combineWindowFeatures;
function combineWorkspaceFeatures(one, two) {
    return function (Base) {
        return two(one(Base));
    };
}
exports.combineWorkspaceFeatures = combineWorkspaceFeatures;
function combineLanguagesFeatures(one, two) {
    return function (Base) {
        return two(one(Base));
    };
}
exports.combineLanguagesFeatures = combineLanguagesFeatures;
function combineNotebooksFeatures(one, two) {
    return function (Base) {
        return two(one(Base));
    };
}
exports.combineNotebooksFeatures = combineNotebooksFeatures;
function combineFeatures(one, two) {
    function combine(one, two, func) {
        if (one && two) {
            return func(one, two);
        }
        else if (one) {
            return one;
        }
        else {
            return two;
        }
    }
    let result = {
        __brand: 'features',
        console: combine(one.console, two.console, combineConsoleFeatures),
        tracer: combine(one.tracer, two.tracer, combineTracerFeatures),
        telemetry: combine(one.telemetry, two.telemetry, combineTelemetryFeatures),
        client: combine(one.client, two.client, combineClientFeatures),
        window: combine(one.window, two.window, combineWindowFeatures),
        workspace: combine(one.workspace, two.workspace, combineWorkspaceFeatures),
        languages: combine(one.languages, two.languages, combineLanguagesFeatures),
        notebooks: combine(one.notebooks, two.notebooks, combineNotebooksFeatures)
    };
    return result;
}
exports.combineFeatures = combineFeatures;
function createConnection(connectionFactory, watchDog, factories) {
    const logger = (factories && factories.console ? new (factories.console(RemoteConsoleImpl))() : new RemoteConsoleImpl());
    const connection = connectionFactory(logger);
    logger.rawAttach(connection);
    const tracer = (factories && factories.tracer ? new (factories.tracer(TracerImpl))() : new TracerImpl());
    const telemetry = (factories && factories.telemetry ? new (factories.telemetry(TelemetryImpl))() : new TelemetryImpl());
    const client = (factories && factories.client ? new (factories.client(RemoteClientImpl))() : new RemoteClientImpl());
    const remoteWindow = (factories && factories.window ? new (factories.window(RemoteWindowImpl))() : new RemoteWindowImpl());
    const workspace = (factories && factories.workspace ? new (factories.workspace(RemoteWorkspaceImpl))() : new RemoteWorkspaceImpl());
    const languages = (factories && factories.languages ? new (factories.languages(LanguagesImpl))() : new LanguagesImpl());
    const notebooks = (factories && factories.notebooks ? new (factories.notebooks(NotebooksImpl))() : new NotebooksImpl());
    const allRemotes = [logger, tracer, telemetry, client, remoteWindow, workspace, languages, notebooks];
    function asPromise(value) {
        if (value instanceof Promise) {
            return value;
        }
        else if (Is.thenable(value)) {
            return new Promise((resolve, reject) => {
                value.then((resolved) => resolve(resolved), (error) => reject(error));
            });
        }
        else {
            return Promise.resolve(value);
        }
    }
    let shutdownHandler = undefined;
    let initializeHandler = undefined;
    let exitHandler = undefined;
    let protocolConnection = {
        listen: () => connection.listen(),
        sendRequest: (type, ...params) => connection.sendRequest(Is.string(type) ? type : type.method, ...params),
        onRequest: (type, handler) => connection.onRequest(type, handler),
        sendNotification: (type, param) => {
            const method = Is.string(type) ? type : type.method;
            return connection.sendNotification(method, param);
        },
        onNotification: (type, handler) => connection.onNotification(type, handler),
        onProgress: connection.onProgress,
        sendProgress: connection.sendProgress,
        onInitialize: (handler) => {
            initializeHandler = handler;
            return {
                dispose: () => {
                    initializeHandler = undefined;
                }
            };
        },
        onInitialized: (handler) => connection.onNotification(vscode_languageserver_protocol_1.InitializedNotification.type, handler),
        onShutdown: (handler) => {
            shutdownHandler = handler;
            return {
                dispose: () => {
                    shutdownHandler = undefined;
                }
            };
        },
        onExit: (handler) => {
            exitHandler = handler;
            return {
                dispose: () => {
                    exitHandler = undefined;
                }
            };
        },
        get console() { return logger; },
        get telemetry() { return telemetry; },
        get tracer() { return tracer; },
        get client() { return client; },
        get window() { return remoteWindow; },
        get workspace() { return workspace; },
        get languages() { return languages; },
        get notebooks() { return notebooks; },
        onDidChangeConfiguration: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type, handler),
        onDidChangeWatchedFiles: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidChangeWatchedFilesNotification.type, handler),
        __textDocumentSync: undefined,
        onDidOpenTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.type, handler),
        onDidChangeTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, handler),
        onDidCloseTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidCloseTextDocumentNotification.type, handler),
        onWillSaveTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.WillSaveTextDocumentNotification.type, handler),
        onWillSaveTextDocumentWaitUntil: (handler) => connection.onRequest(vscode_languageserver_protocol_1.WillSaveTextDocumentWaitUntilRequest.type, handler),
        onDidSaveTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidSaveTextDocumentNotification.type, handler),
        sendDiagnostics: (params) => connection.sendNotification(vscode_languageserver_protocol_1.PublishDiagnosticsNotification.type, params),
        onHover: (handler) => connection.onRequest(vscode_languageserver_protocol_1.HoverRequest.type, (params, cancel) => {
            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), undefined);
        }),
        onCompletion: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CompletionRequest.type, (params, cancel) => {
            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onCompletionResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CompletionResolveRequest.type, handler),
        onSignatureHelp: (handler) => connection.onRequest(vscode_languageserver_protocol_1.SignatureHelpRequest.type, (params, cancel) => {
            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), undefined);
        }),
        onDeclaration: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DeclarationRequest.type, (params, cancel) => {
            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onDefinition: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DefinitionRequest.type, (params, cancel) => {
            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onTypeDefinition: (handler) => connection.onRequest(vscode_languageserver_protocol_1.TypeDefinitionRequest.type, (params, cancel) => {
            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onImplementation: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ImplementationRequest.type, (params, cancel) => {
            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onReferences: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ReferencesRequest.type, (params, cancel) => {
            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onDocumentHighlight: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentHighlightRequest.type, (params, cancel) => {
            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onDocumentSymbol: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentSymbolRequest.type, (params, cancel) => {
            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onWorkspaceSymbol: (handler) => connection.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolRequest.type, (params, cancel) => {
            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onWorkspaceSymbolResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolResolveRequest.type, handler),
        onCodeAction: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeActionRequest.type, (params, cancel) => {
            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onCodeActionResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeActionResolveRequest.type, (params, cancel) => {
            return handler(params, cancel);
        }),
        onCodeLens: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeLensRequest.type, (params, cancel) => {
            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onCodeLensResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeLensResolveRequest.type, (params, cancel) => {
            return handler(params, cancel);
        }),
        onDocumentFormatting: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentFormattingRequest.type, (params, cancel) => {
            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), undefined);
        }),
        onDocumentRangeFormatting: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentRangeFormattingRequest.type, (params, cancel) => {
            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), undefined);
        }),
        onDocumentOnTypeFormatting: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentOnTypeFormattingRequest.type, (params, cancel) => {
            return handler(params, cancel);
        }),
        onRenameRequest: (handler) => connection.onRequest(vscode_languageserver_protocol_1.RenameRequest.type, (params, cancel) => {
            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), undefined);
        }),
        onPrepareRename: (handler) => connection.onRequest(vscode_languageserver_protocol_1.PrepareRenameRequest.type, (params, cancel) => {
            return handler(params, cancel);
        }),
        onDocumentLinks: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentLinkRequest.type, (params, cancel) => {
            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onDocumentLinkResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentLinkResolveRequest.type, (params, cancel) => {
            return handler(params, cancel);
        }),
        onDocumentColor: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentColorRequest.type, (params, cancel) => {
            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onColorPresentation: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ColorPresentationRequest.type, (params, cancel) => {
            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onFoldingRanges: (handler) => connection.onRequest(vscode_languageserver_protocol_1.FoldingRangeRequest.type, (params, cancel) => {
            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onSelectionRanges: (handler) => connection.onRequest(vscode_languageserver_protocol_1.SelectionRangeRequest.type, (params, cancel) => {
            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
        }),
        onExecuteCommand: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, (params, cancel) => {
            return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), undefined);
        }),
        dispose: () => connection.dispose()
    };
    for (let remote of allRemotes) {
        remote.attach(protocolConnection);
    }
    connection.onRequest(vscode_languageserver_protocol_1.InitializeRequest.type, (params) => {
        watchDog.initialize(params);
        if (Is.string(params.trace)) {
            tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.trace);
        }
        for (let remote of allRemotes) {
            remote.initialize(params.capabilities);
        }
        if (initializeHandler) {
            let result = initializeHandler(params, new vscode_languageserver_protocol_1.CancellationTokenSource().token, (0, progress_1.attachWorkDone)(connection, params), undefined);
            return asPromise(result).then((value) => {
                if (value instanceof vscode_languageserver_protocol_1.ResponseError) {
                    return value;
                }
                let result = value;
                if (!result) {
                    result = { capabilities: {} };
                }
                let capabilities = result.capabilities;
                if (!capabilities) {
                    capabilities = {};
                    result.capabilities = capabilities;
                }
                if (capabilities.textDocumentSync === undefined || capabilities.textDocumentSync === null) {
                    capabilities.textDocumentSync = Is.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
                }
                else if (!Is.number(capabilities.textDocumentSync) && !Is.number(capabilities.textDocumentSync.change)) {
                    capabilities.textDocumentSync.change = Is.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
                }
                for (let remote of allRemotes) {
                    remote.fillServerCapabilities(capabilities);
                }
                return result;
            });
        }
        else {
            let result = { capabilities: { textDocumentSync: vscode_languageserver_protocol_1.TextDocumentSyncKind.None } };
            for (let remote of allRemotes) {
                remote.fillServerCapabilities(result.capabilities);
            }
            return result;
        }
    });
    connection.onRequest(vscode_languageserver_protocol_1.ShutdownRequest.type, () => {
        watchDog.shutdownReceived = true;
        if (shutdownHandler) {
            return shutdownHandler(new vscode_languageserver_protocol_1.CancellationTokenSource().token);
        }
        else {
            return undefined;
        }
    });
    connection.onNotification(vscode_languageserver_protocol_1.ExitNotification.type, () => {
        try {
            if (exitHandler) {
                exitHandler();
            }
        }
        finally {
            if (watchDog.shutdownReceived) {
                watchDog.exit(0);
            }
            else {
                watchDog.exit(1);
            }
        }
    });
    connection.onNotification(vscode_languageserver_protocol_1.SetTraceNotification.type, (params) => {
        tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.value);
    });
    return protocolConnection;
}
exports.createConnection = createConnection;


/***/ },

/***/ 5421
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/showDocument.js ***!
  \**********************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShowDocumentFeature = void 0;
const vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ 2195);
const ShowDocumentFeature = (Base) => {
    return class extends Base {
        showDocument(params) {
            return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowDocumentRequest.type, params);
        }
    };
};
exports.ShowDocumentFeature = ShowDocumentFeature;


/***/ },

/***/ 1178
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/textDocuments.js ***!
  \***********************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextDocuments = void 0;
const vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ 2195);
/**
 * A manager for simple text documents. The manager requires at a minimum that
 * the server registered for the following text document sync events in the
 * initialize handler or via dynamic registration:
 *
 * - open and close events.
 * - change events.
 *
 * Registering for save and will save events is optional.
 */
class TextDocuments {
    /**
     * Create a new text document manager.
     */
    constructor(configuration) {
        this._configuration = configuration;
        this._syncedDocuments = new Map();
        this._onDidChangeContent = new vscode_languageserver_protocol_1.Emitter();
        this._onDidOpen = new vscode_languageserver_protocol_1.Emitter();
        this._onDidClose = new vscode_languageserver_protocol_1.Emitter();
        this._onDidSave = new vscode_languageserver_protocol_1.Emitter();
        this._onWillSave = new vscode_languageserver_protocol_1.Emitter();
    }
    /**
     * An event that fires when a text document managed by this manager
     * has been opened.
     */
    get onDidOpen() {
        return this._onDidOpen.event;
    }
    /**
     * An event that fires when a text document managed by this manager
     * has been opened or the content changes.
     */
    get onDidChangeContent() {
        return this._onDidChangeContent.event;
    }
    /**
     * An event that fires when a text document managed by this manager
     * will be saved.
     */
    get onWillSave() {
        return this._onWillSave.event;
    }
    /**
     * Sets a handler that will be called if a participant wants to provide
     * edits during a text document save.
     */
    onWillSaveWaitUntil(handler) {
        this._willSaveWaitUntil = handler;
    }
    /**
     * An event that fires when a text document managed by this manager
     * has been saved.
     */
    get onDidSave() {
        return this._onDidSave.event;
    }
    /**
     * An event that fires when a text document managed by this manager
     * has been closed.
     */
    get onDidClose() {
        return this._onDidClose.event;
    }
    /**
     * Returns the document for the given URI. Returns undefined if
     * the document is not managed by this instance.
     *
     * @param uri The text document's URI to retrieve.
     * @return the text document or `undefined`.
     */
    get(uri) {
        return this._syncedDocuments.get(uri);
    }
    /**
     * Returns all text documents managed by this instance.
     *
     * @return all text documents.
     */
    all() {
        return Array.from(this._syncedDocuments.values());
    }
    /**
     * Returns the URIs of all text documents managed by this instance.
     *
     * @return the URI's of all text documents.
     */
    keys() {
        return Array.from(this._syncedDocuments.keys());
    }
    /**
     * Listens for `low level` notification on the given connection to
     * update the text documents managed by this instance.
     *
     * Please note that the connection only provides handlers not an event model. Therefore
     * listening on a connection will overwrite the following handlers on a connection:
     * `onDidOpenTextDocument`, `onDidChangeTextDocument`, `onDidCloseTextDocument`,
     * `onWillSaveTextDocument`, `onWillSaveTextDocumentWaitUntil` and `onDidSaveTextDocument`.
     *
     * Use the corresponding events on the TextDocuments instance instead.
     *
     * @param connection The connection to listen on.
     */
    listen(connection) {
        connection.__textDocumentSync = vscode_languageserver_protocol_1.TextDocumentSyncKind.Incremental;
        const disposables = [];
        disposables.push(connection.onDidOpenTextDocument((event) => {
            const td = event.textDocument;
            const document = this._configuration.create(td.uri, td.languageId, td.version, td.text);
            this._syncedDocuments.set(td.uri, document);
            const toFire = Object.freeze({ document });
            this._onDidOpen.fire(toFire);
            this._onDidChangeContent.fire(toFire);
        }));
        disposables.push(connection.onDidChangeTextDocument((event) => {
            const td = event.textDocument;
            const changes = event.contentChanges;
            if (changes.length === 0) {
                return;
            }
            const { version } = td;
            if (version === null || version === undefined) {
                throw new Error(`Received document change event for ${td.uri} without valid version identifier`);
            }
            let syncedDocument = this._syncedDocuments.get(td.uri);
            if (syncedDocument !== undefined) {
                syncedDocument = this._configuration.update(syncedDocument, changes, version);
                this._syncedDocuments.set(td.uri, syncedDocument);
                this._onDidChangeContent.fire(Object.freeze({ document: syncedDocument }));
            }
        }));
        disposables.push(connection.onDidCloseTextDocument((event) => {
            let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
            if (syncedDocument !== undefined) {
                this._syncedDocuments.delete(event.textDocument.uri);
                this._onDidClose.fire(Object.freeze({ document: syncedDocument }));
            }
        }));
        disposables.push(connection.onWillSaveTextDocument((event) => {
            let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
            if (syncedDocument !== undefined) {
                this._onWillSave.fire(Object.freeze({ document: syncedDocument, reason: event.reason }));
            }
        }));
        disposables.push(connection.onWillSaveTextDocumentWaitUntil((event, token) => {
            let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
            if (syncedDocument !== undefined && this._willSaveWaitUntil) {
                return this._willSaveWaitUntil(Object.freeze({ document: syncedDocument, reason: event.reason }), token);
            }
            else {
                return [];
            }
        }));
        disposables.push(connection.onDidSaveTextDocument((event) => {
            let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
            if (syncedDocument !== undefined) {
                this._onDidSave.fire(Object.freeze({ document: syncedDocument }));
            }
        }));
        return vscode_languageserver_protocol_1.Disposable.create(() => { disposables.forEach(disposable => disposable.dispose()); });
    }
}
exports.TextDocuments = TextDocuments;


/***/ },

/***/ 9654
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/typeHierarchy.js ***!
  \***********************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TypeHierarchyFeature = void 0;
const vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ 2195);
const TypeHierarchyFeature = (Base) => {
    return class extends Base {
        get typeHierarchy() {
            return {
                onPrepare: (handler) => {
                    return this.connection.onRequest(vscode_languageserver_protocol_1.TypeHierarchyPrepareRequest.type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), undefined);
                    });
                },
                onSupertypes: (handler) => {
                    const type = vscode_languageserver_protocol_1.TypeHierarchySupertypesRequest.type;
                    return this.connection.onRequest(type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                    });
                },
                onSubtypes: (handler) => {
                    const type = vscode_languageserver_protocol_1.TypeHierarchySubtypesRequest.type;
                    return this.connection.onRequest(type, (params, cancel) => {
                        return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                    });
                }
            };
        }
    };
};
exports.TypeHierarchyFeature = TypeHierarchyFeature;


/***/ },

/***/ 5527
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/utils/is.js ***!
  \******************************************************************************************************************/
(__unused_webpack_module, exports) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.thenable = exports.typedArray = exports.stringArray = exports.array = exports.func = exports.error = exports.number = exports.string = exports.boolean = void 0;
function boolean(value) {
    return value === true || value === false;
}
exports.boolean = boolean;
function string(value) {
    return typeof value === 'string' || value instanceof String;
}
exports.string = string;
function number(value) {
    return typeof value === 'number' || value instanceof Number;
}
exports.number = number;
function error(value) {
    return value instanceof Error;
}
exports.error = error;
function func(value) {
    return typeof value === 'function';
}
exports.func = func;
function array(value) {
    return Array.isArray(value);
}
exports.array = array;
function stringArray(value) {
    return array(value) && value.every(elem => string(elem));
}
exports.stringArray = stringArray;
function typedArray(value, check) {
    return Array.isArray(value) && value.every(check);
}
exports.typedArray = typedArray;
function thenable(value) {
    return value && func(value.then);
}
exports.thenable = thenable;


/***/ },

/***/ 6192
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/utils/uuid.js ***!
  \********************************************************************************************************************/
(__unused_webpack_module, exports) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateUuid = exports.parse = exports.isUUID = exports.v4 = exports.empty = void 0;
class ValueUUID {
    constructor(_value) {
        this._value = _value;
        // empty
    }
    asHex() {
        return this._value;
    }
    equals(other) {
        return this.asHex() === other.asHex();
    }
}
class V4UUID extends ValueUUID {
    static _oneOf(array) {
        return array[Math.floor(array.length * Math.random())];
    }
    static _randomHex() {
        return V4UUID._oneOf(V4UUID._chars);
    }
    constructor() {
        super([
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            '-',
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            '-',
            '4',
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            '-',
            V4UUID._oneOf(V4UUID._timeHighBits),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            '-',
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
        ].join(''));
    }
}
V4UUID._chars = ['0', '1', '2', '3', '4', '5', '6', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
V4UUID._timeHighBits = ['8', '9', 'a', 'b'];
/**
 * An empty UUID that contains only zeros.
 */
exports.empty = new ValueUUID('00000000-0000-0000-0000-000000000000');
function v4() {
    return new V4UUID();
}
exports.v4 = v4;
const _UUIDPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function isUUID(value) {
    return _UUIDPattern.test(value);
}
exports.isUUID = isUUID;
/**
 * Parses a UUID that is of the format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.
 * @param value A uuid string.
 */
function parse(value) {
    if (!isUUID(value)) {
        throw new Error('invalid uuid');
    }
    return new ValueUUID(value);
}
exports.parse = parse;
function generateUuid() {
    return v4().asHex();
}
exports.generateUuid = generateUuid;


/***/ },

/***/ 8124
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/common/workspaceFolder.js ***!
  \*************************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkspaceFoldersFeature = void 0;
const vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ 2195);
const WorkspaceFoldersFeature = (Base) => {
    return class extends Base {
        constructor() {
            super();
            this._notificationIsAutoRegistered = false;
        }
        initialize(capabilities) {
            super.initialize(capabilities);
            let workspaceCapabilities = capabilities.workspace;
            if (workspaceCapabilities && workspaceCapabilities.workspaceFolders) {
                this._onDidChangeWorkspaceFolders = new vscode_languageserver_protocol_1.Emitter();
                this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type, (params) => {
                    this._onDidChangeWorkspaceFolders.fire(params.event);
                });
            }
        }
        fillServerCapabilities(capabilities) {
            super.fillServerCapabilities(capabilities);
            const changeNotifications = capabilities.workspace?.workspaceFolders?.changeNotifications;
            this._notificationIsAutoRegistered = changeNotifications === true || typeof changeNotifications === 'string';
        }
        getWorkspaceFolders() {
            return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkspaceFoldersRequest.type);
        }
        get onDidChangeWorkspaceFolders() {
            if (!this._onDidChangeWorkspaceFolders) {
                throw new Error('Client doesn\'t support sending workspace folder change events.');
            }
            if (!this._notificationIsAutoRegistered && !this._unregistration) {
                this._unregistration = this.connection.client.register(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type);
            }
            return this._onDidChangeWorkspaceFolders.event;
        }
    };
};
exports.WorkspaceFoldersFeature = WorkspaceFoldersFeature;


/***/ },

/***/ 1939
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/node/files.js ***!
  \*************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveModulePath = exports.FileSystem = exports.resolveGlobalYarnPath = exports.resolveGlobalNodePath = exports.resolve = exports.uriToFilePath = void 0;
const url = __webpack_require__(/*! url */ 7016);
const path = __webpack_require__(/*! path */ 6928);
const fs = __webpack_require__(/*! fs */ 9896);
const child_process_1 = __webpack_require__(/*! child_process */ 5317);
/**
 * @deprecated Use the `vscode-uri` npm module which provides a more
 * complete implementation of handling VS Code URIs.
 */
function uriToFilePath(uri) {
    let parsed = url.parse(uri);
    if (parsed.protocol !== 'file:' || !parsed.path) {
        return undefined;
    }
    let segments = parsed.path.split('/');
    for (var i = 0, len = segments.length; i < len; i++) {
        segments[i] = decodeURIComponent(segments[i]);
    }
    if (process.platform === 'win32' && segments.length > 1) {
        let first = segments[0];
        let second = segments[1];
        // Do we have a drive letter and we started with a / which is the
        // case if the first segement is empty (see split above)
        if (first.length === 0 && second.length > 1 && second[1] === ':') {
            // Remove first slash
            segments.shift();
        }
    }
    return path.normalize(segments.join('/'));
}
exports.uriToFilePath = uriToFilePath;
function isWindows() {
    return process.platform === 'win32';
}
function resolve(moduleName, nodePath, cwd, tracer) {
    const nodePathKey = 'NODE_PATH';
    const app = [
        'var p = process;',
        'p.on(\'message\',function(m){',
        'if(m.c===\'e\'){',
        'p.exit(0);',
        '}',
        'else if(m.c===\'rs\'){',
        'try{',
        'var r=require.resolve(m.a);',
        'p.send({c:\'r\',s:true,r:r});',
        '}',
        'catch(err){',
        'p.send({c:\'r\',s:false});',
        '}',
        '}',
        '});'
    ].join('');
    return new Promise((resolve, reject) => {
        let env = process.env;
        let newEnv = Object.create(null);
        Object.keys(env).forEach(key => newEnv[key] = env[key]);
        if (nodePath && fs.existsSync(nodePath) /* see issue 545 */) {
            if (newEnv[nodePathKey]) {
                newEnv[nodePathKey] = nodePath + path.delimiter + newEnv[nodePathKey];
            }
            else {
                newEnv[nodePathKey] = nodePath;
            }
            if (tracer) {
                tracer(`NODE_PATH value is: ${newEnv[nodePathKey]}`);
            }
        }
        newEnv['ELECTRON_RUN_AS_NODE'] = '1';
        try {
            let cp = (0, child_process_1.fork)('', [], {
                cwd: cwd,
                env: newEnv,
                execArgv: ['-e', app]
            });
            if (cp.pid === void 0) {
                reject(new Error(`Starting process to resolve node module  ${moduleName} failed`));
                return;
            }
            cp.on('error', (error) => {
                reject(error);
            });
            cp.on('message', (message) => {
                if (message.c === 'r') {
                    cp.send({ c: 'e' });
                    if (message.s) {
                        resolve(message.r);
                    }
                    else {
                        reject(new Error(`Failed to resolve module: ${moduleName}`));
                    }
                }
            });
            let message = {
                c: 'rs',
                a: moduleName
            };
            cp.send(message);
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.resolve = resolve;
/**
 * Resolve the global npm package path.
 * @deprecated Since this depends on the used package manager and their version the best is that servers
 * implement this themselves since they know best what kind of package managers to support.
 * @param tracer the tracer to use
 */
function resolveGlobalNodePath(tracer) {
    let npmCommand = 'npm';
    const env = Object.create(null);
    Object.keys(process.env).forEach(key => env[key] = process.env[key]);
    env['NO_UPDATE_NOTIFIER'] = 'true';
    const options = {
        encoding: 'utf8',
        env
    };
    if (isWindows()) {
        npmCommand = 'npm.cmd';
        options.shell = true;
    }
    let handler = () => { };
    try {
        process.on('SIGPIPE', handler);
        let stdout = (0, child_process_1.spawnSync)(npmCommand, ['config', 'get', 'prefix'], options).stdout;
        if (!stdout) {
            if (tracer) {
                tracer(`'npm config get prefix' didn't return a value.`);
            }
            return undefined;
        }
        let prefix = stdout.trim();
        if (tracer) {
            tracer(`'npm config get prefix' value is: ${prefix}`);
        }
        if (prefix.length > 0) {
            if (isWindows()) {
                return path.join(prefix, 'node_modules');
            }
            else {
                return path.join(prefix, 'lib', 'node_modules');
            }
        }
        return undefined;
    }
    catch (err) {
        return undefined;
    }
    finally {
        process.removeListener('SIGPIPE', handler);
    }
}
exports.resolveGlobalNodePath = resolveGlobalNodePath;
/*
 * Resolve the global yarn pakage path.
 * @deprecated Since this depends on the used package manager and their version the best is that servers
 * implement this themselves since they know best what kind of package managers to support.
 * @param tracer the tracer to use
 */
function resolveGlobalYarnPath(tracer) {
    let yarnCommand = 'yarn';
    let options = {
        encoding: 'utf8'
    };
    if (isWindows()) {
        yarnCommand = 'yarn.cmd';
        options.shell = true;
    }
    let handler = () => { };
    try {
        process.on('SIGPIPE', handler);
        let results = (0, child_process_1.spawnSync)(yarnCommand, ['global', 'dir', '--json'], options);
        let stdout = results.stdout;
        if (!stdout) {
            if (tracer) {
                tracer(`'yarn global dir' didn't return a value.`);
                if (results.stderr) {
                    tracer(results.stderr);
                }
            }
            return undefined;
        }
        let lines = stdout.trim().split(/\r?\n/);
        for (let line of lines) {
            try {
                let yarn = JSON.parse(line);
                if (yarn.type === 'log') {
                    return path.join(yarn.data, 'node_modules');
                }
            }
            catch (e) {
                // Do nothing. Ignore the line
            }
        }
        return undefined;
    }
    catch (err) {
        return undefined;
    }
    finally {
        process.removeListener('SIGPIPE', handler);
    }
}
exports.resolveGlobalYarnPath = resolveGlobalYarnPath;
var FileSystem;
(function (FileSystem) {
    let _isCaseSensitive = undefined;
    function isCaseSensitive() {
        if (_isCaseSensitive !== void 0) {
            return _isCaseSensitive;
        }
        if (process.platform === 'win32') {
            _isCaseSensitive = false;
        }
        else {
            // convert current file name to upper case / lower case and check if file exists
            // (guards against cases when name is already all uppercase or lowercase)
            _isCaseSensitive = !fs.existsSync(__filename.toUpperCase()) || !fs.existsSync(__filename.toLowerCase());
        }
        return _isCaseSensitive;
    }
    FileSystem.isCaseSensitive = isCaseSensitive;
    function isParent(parent, child) {
        if (isCaseSensitive()) {
            return path.normalize(child).indexOf(path.normalize(parent)) === 0;
        }
        else {
            return path.normalize(child).toLowerCase().indexOf(path.normalize(parent).toLowerCase()) === 0;
        }
    }
    FileSystem.isParent = isParent;
})(FileSystem || (exports.FileSystem = FileSystem = {}));
function resolveModulePath(workspaceRoot, moduleName, nodePath, tracer) {
    if (nodePath) {
        if (!path.isAbsolute(nodePath)) {
            nodePath = path.join(workspaceRoot, nodePath);
        }
        return resolve(moduleName, nodePath, nodePath, tracer).then((value) => {
            if (FileSystem.isParent(nodePath, value)) {
                return value;
            }
            else {
                return Promise.reject(new Error(`Failed to load ${moduleName} from node path location.`));
            }
        }).then(undefined, (_error) => {
            return resolve(moduleName, resolveGlobalNodePath(tracer), workspaceRoot, tracer);
        });
    }
    else {
        return resolve(moduleName, resolveGlobalNodePath(tracer), workspaceRoot, tracer);
    }
}
exports.resolveModulePath = resolveModulePath;


/***/ },

/***/ 875
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/lib/node/main.js ***!
  \************************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
/// <reference path="../../typings/thenable.d.ts" />
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createConnection = exports.Files = void 0;
const node_util_1 = __webpack_require__(/*! node:util */ 7975);
const Is = __webpack_require__(/*! ../common/utils/is */ 5527);
const server_1 = __webpack_require__(/*! ../common/server */ 2238);
const fm = __webpack_require__(/*! ./files */ 1939);
const node_1 = __webpack_require__(/*! vscode-languageserver-protocol/node */ 8403);
__exportStar(__webpack_require__(/*! vscode-languageserver-protocol/node */ 8403), exports);
__exportStar(__webpack_require__(/*! ../common/api */ 7353), exports);
var Files;
(function (Files) {
    Files.uriToFilePath = fm.uriToFilePath;
    Files.resolveGlobalNodePath = fm.resolveGlobalNodePath;
    Files.resolveGlobalYarnPath = fm.resolveGlobalYarnPath;
    Files.resolve = fm.resolve;
    Files.resolveModulePath = fm.resolveModulePath;
})(Files || (exports.Files = Files = {}));
let _protocolConnection;
function endProtocolConnection() {
    if (_protocolConnection === undefined) {
        return;
    }
    try {
        _protocolConnection.end();
    }
    catch (_err) {
        // Ignore. The client process could have already
        // did and we can't send an end into the connection.
    }
}
let _shutdownReceived = false;
let exitTimer = undefined;
function setupExitTimer() {
    const argName = '--clientProcessId';
    function runTimer(value) {
        try {
            let processId = parseInt(value);
            if (!isNaN(processId)) {
                exitTimer = setInterval(() => {
                    try {
                        process.kill(processId, 0);
                    }
                    catch (ex) {
                        // Parent process doesn't exist anymore. Exit the server.
                        endProtocolConnection();
                        process.exit(_shutdownReceived ? 0 : 1);
                    }
                }, 3000);
            }
        }
        catch (e) {
            // Ignore errors;
        }
    }
    for (let i = 2; i < process.argv.length; i++) {
        let arg = process.argv[i];
        if (arg === argName && i + 1 < process.argv.length) {
            runTimer(process.argv[i + 1]);
            return;
        }
        else {
            let args = arg.split('=');
            if (args[0] === argName) {
                runTimer(args[1]);
            }
        }
    }
}
setupExitTimer();
const watchDog = {
    initialize: (params) => {
        const processId = params.processId;
        if (Is.number(processId) && exitTimer === undefined) {
            // We received a parent process id. Set up a timer to periodically check
            // if the parent is still alive.
            setInterval(() => {
                try {
                    process.kill(processId, 0);
                }
                catch (ex) {
                    // Parent process doesn't exist anymore. Exit the server.
                    process.exit(_shutdownReceived ? 0 : 1);
                }
            }, 3000);
        }
    },
    get shutdownReceived() {
        return _shutdownReceived;
    },
    set shutdownReceived(value) {
        _shutdownReceived = value;
    },
    exit: (code) => {
        endProtocolConnection();
        process.exit(code);
    }
};
function createConnection(arg1, arg2, arg3, arg4) {
    let factories;
    let input;
    let output;
    let options;
    if (arg1 !== void 0 && arg1.__brand === 'features') {
        factories = arg1;
        arg1 = arg2;
        arg2 = arg3;
        arg3 = arg4;
    }
    if (node_1.ConnectionStrategy.is(arg1) || node_1.ConnectionOptions.is(arg1)) {
        options = arg1;
    }
    else {
        input = arg1;
        output = arg2;
        options = arg3;
    }
    return _createConnection(input, output, options, factories);
}
exports.createConnection = createConnection;
function _createConnection(input, output, options, factories) {
    let stdio = false;
    if (!input && !output && process.argv.length > 2) {
        let port = void 0;
        let pipeName = void 0;
        let argv = process.argv.slice(2);
        for (let i = 0; i < argv.length; i++) {
            let arg = argv[i];
            if (arg === '--node-ipc') {
                input = new node_1.IPCMessageReader(process);
                output = new node_1.IPCMessageWriter(process);
                break;
            }
            else if (arg === '--stdio') {
                stdio = true;
                input = process.stdin;
                output = process.stdout;
                break;
            }
            else if (arg === '--socket') {
                port = parseInt(argv[i + 1]);
                break;
            }
            else if (arg === '--pipe') {
                pipeName = argv[i + 1];
                break;
            }
            else {
                var args = arg.split('=');
                if (args[0] === '--socket') {
                    port = parseInt(args[1]);
                    break;
                }
                else if (args[0] === '--pipe') {
                    pipeName = args[1];
                    break;
                }
            }
        }
        if (port) {
            let transport = (0, node_1.createServerSocketTransport)(port);
            input = transport[0];
            output = transport[1];
        }
        else if (pipeName) {
            let transport = (0, node_1.createServerPipeTransport)(pipeName);
            input = transport[0];
            output = transport[1];
        }
    }
    var commandLineMessage = 'Use arguments of createConnection or set command line parameters: \'--node-ipc\', \'--stdio\' or \'--socket={number}\'';
    if (!input) {
        throw new Error('Connection input stream is not set. ' + commandLineMessage);
    }
    if (!output) {
        throw new Error('Connection output stream is not set. ' + commandLineMessage);
    }
    // Backwards compatibility
    if (Is.func(input.read) && Is.func(input.on)) {
        let inputStream = input;
        inputStream.on('end', () => {
            endProtocolConnection();
            process.exit(_shutdownReceived ? 0 : 1);
        });
        inputStream.on('close', () => {
            endProtocolConnection();
            process.exit(_shutdownReceived ? 0 : 1);
        });
    }
    const connectionFactory = (logger) => {
        const result = (0, node_1.createProtocolConnection)(input, output, logger, options);
        if (stdio) {
            patchConsole(logger);
        }
        return result;
    };
    return (0, server_1.createConnection)(connectionFactory, watchDog, factories);
}
function patchConsole(logger) {
    function serialize(args) {
        return args.map(arg => typeof arg === 'string' ? arg : (0, node_util_1.inspect)(arg)).join(' ');
    }
    const counters = new Map();
    console.assert = function assert(assertion, ...args) {
        if (assertion) {
            return;
        }
        if (args.length === 0) {
            logger.error('Assertion failed');
        }
        else {
            const [message, ...rest] = args;
            logger.error(`Assertion failed: ${message} ${serialize(rest)}`);
        }
    };
    console.count = function count(label = 'default') {
        const message = String(label);
        let counter = counters.get(message) ?? 0;
        counter += 1;
        counters.set(message, counter);
        logger.log(`${message}: ${message}`);
    };
    console.countReset = function countReset(label) {
        if (label === undefined) {
            counters.clear();
        }
        else {
            counters.delete(String(label));
        }
    };
    console.debug = function debug(...args) {
        logger.log(serialize(args));
    };
    console.dir = function dir(arg, options) {
        // @ts-expect-error https://github.com/DefinitelyTyped/DefinitelyTyped/pull/66626
        logger.log((0, node_util_1.inspect)(arg, options));
    };
    console.log = function log(...args) {
        logger.log(serialize(args));
    };
    console.error = function error(...args) {
        logger.error(serialize(args));
    };
    console.trace = function trace(...args) {
        const stack = new Error().stack.replace(/(.+\n){2}/, '');
        let message = 'Trace';
        if (args.length !== 0) {
            message += `: ${serialize(args)}`;
        }
        logger.log(`${message}\n${stack}`);
    };
    console.warn = function warn(...args) {
        logger.warn(serialize(args));
    };
}


/***/ },

/***/ 7979
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/node.js ***!
  \***************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ----------------------------------------------------------------------------------------- */


module.exports = __webpack_require__(/*! ./lib/node/main */ 875);

/***/ },

/***/ 4731
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vscode-languageserver-types@3.17.5/node_modules/vscode-languageserver-types/lib/umd/ sync ***!
  \**********************************************************************************************************************/
(module) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 4731;
module.exports = webpackEmptyContext;

/***/ },

/***/ 2613
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
(module) {

"use strict";
module.exports = require("assert");

/***/ },

/***/ 181
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
(module) {

"use strict";
module.exports = require("buffer");

/***/ },

/***/ 5317
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
(module) {

"use strict";
module.exports = require("child_process");

/***/ },

/***/ 6982
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
(module) {

"use strict";
module.exports = require("crypto");

/***/ },

/***/ 4434
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
(module) {

"use strict";
module.exports = require("events");

/***/ },

/***/ 9896
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
(module) {

"use strict";
module.exports = require("fs");

/***/ },

/***/ 8611
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
(module) {

"use strict";
module.exports = require("http");

/***/ },

/***/ 5692
/*!************************!*\
  !*** external "https" ***!
  \************************/
(module) {

"use strict";
module.exports = require("https");

/***/ },

/***/ 9278
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
(module) {

"use strict";
module.exports = require("net");

/***/ },

/***/ 7975
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
(module) {

"use strict";
module.exports = require("node:util");

/***/ },

/***/ 857
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
(module) {

"use strict";
module.exports = require("os");

/***/ },

/***/ 6928
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
(module) {

"use strict";
module.exports = require("path");

/***/ },

/***/ 2203
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
(module) {

"use strict";
module.exports = require("stream");

/***/ },

/***/ 4756
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
(module) {

"use strict";
module.exports = require("tls");

/***/ },

/***/ 2018
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
(module) {

"use strict";
module.exports = require("tty");

/***/ },

/***/ 7016
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
(module) {

"use strict";
module.exports = require("url");

/***/ },

/***/ 9023
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
(module) {

"use strict";
module.exports = require("util");

/***/ },

/***/ 3106
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
(module) {

"use strict";
module.exports = require("zlib");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			784: 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					var installedChunk = require("./" + __webpack_require__.u(chunkId));
/******/ 					if (!installedChunks[chunkId]) {
/******/ 						installChunk(installedChunk);
/******/ 					}
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**************************************************!*\
  !*** ./src/languageserver/index.ts + 30 modules ***!
  \**************************************************/

// EXTERNAL MODULE: ./node_modules/.pnpm/vscode-languageserver@9.0.1/node_modules/vscode-languageserver/node.js
var node = __webpack_require__(7979);
;// ./src/languageserver/connection.ts

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = (0,node.createConnection)(node.ProposedFeatures.all);
let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
// The global settings
const defaultSettings = {
    moduleRoot: ''
};
let globalSettings = (/* unused pure expression or super */ null && (defaultSettings));
function getGlobalSettings() {
    return globalSettings;
}
connection.onInitialize((params) => {
    const capabilities = params.capabilities;
    // Does the client support the `workspace/configuration` request?
    // If not, we fall back using global settings.
    // 但是如果没有 workspace configuration，globalSettings 也没法用啊
    // 一般来说都会有的，否则我们怎么从 workspage 里面加载设置呢
    hasConfigurationCapability = !!(capabilities.workspace && !!capabilities.workspace.configuration);
    hasWorkspaceFolderCapability = !!(capabilities.workspace && !!capabilities.workspace.workspaceFolders);
    const result = {
        capabilities: {
            textDocumentSync: node.TextDocumentSyncKind.Incremental,
            definitionProvider: true,
            // 提供符号，用于展示大纲
            documentSymbolProvider: true,
            hoverProvider: true,
            // Tell the client that this server supports code completion.
            completionProvider: {
                // resolveProvider: true,
                // 使其支持字符串内的自动补全
                triggerCharacters: ['.', ' ', '"', "\'", '\`']
            },
            diagnosticProvider: {
                interFileDependencies: false,
                workspaceDiagnostics: false
            },
            workspace: {
                workspaceFolders: {
                    supported: true,
                    changeNotifications: true
                }
            }
        }
    };
    if (hasWorkspaceFolderCapability)
        result.capabilities.workspace = {
            workspaceFolders: {
                supported: true
            }
        };
    return result;
});
// connection.onDidChangeConfiguration(change => { // 这个参数也用不着，我们直接用 workspace getConfiguration 全量重设
//     if (hasConfigurationCapability) 
//         connection.workspace.getConfiguration('dolphindb').then((settings: LanguageServerSettings) => {
//             globalSettings = settings
//             ddbModules.setModuleRoot(settings.moduleRoot)
//         })
//     // Refresh the diagnostics since the `maxNumberOfProblems` could have changed.
//     // We could optimize things here and re-fetch the setting first can compare it
//     // to the existing setting, but this is out of scope for this example.
//     connection.languages.diagnostics.refresh()
// })
// connection.onDidChangeWatchedFiles(_change => {
//     // Monitored files have change in VSCode
//     connection.console.log('We received a file change event')
// })
// Listen on the connection
connection.listen();

;// ./node_modules/.pnpm/vscode-languageserver-textdocument@1.0.12/node_modules/vscode-languageserver-textdocument/lib/esm/main.js
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

class FullTextDocument {
    constructor(uri, languageId, version, content) {
        this._uri = uri;
        this._languageId = languageId;
        this._version = version;
        this._content = content;
        this._lineOffsets = undefined;
    }
    get uri() {
        return this._uri;
    }
    get languageId() {
        return this._languageId;
    }
    get version() {
        return this._version;
    }
    getText(range) {
        if (range) {
            const start = this.offsetAt(range.start);
            const end = this.offsetAt(range.end);
            return this._content.substring(start, end);
        }
        return this._content;
    }
    update(changes, version) {
        for (const change of changes) {
            if (FullTextDocument.isIncremental(change)) {
                // makes sure start is before end
                const range = getWellformedRange(change.range);
                // update content
                const startOffset = this.offsetAt(range.start);
                const endOffset = this.offsetAt(range.end);
                this._content = this._content.substring(0, startOffset) + change.text + this._content.substring(endOffset, this._content.length);
                // update the offsets
                const startLine = Math.max(range.start.line, 0);
                const endLine = Math.max(range.end.line, 0);
                let lineOffsets = this._lineOffsets;
                const addedLineOffsets = computeLineOffsets(change.text, false, startOffset);
                if (endLine - startLine === addedLineOffsets.length) {
                    for (let i = 0, len = addedLineOffsets.length; i < len; i++) {
                        lineOffsets[i + startLine + 1] = addedLineOffsets[i];
                    }
                }
                else {
                    if (addedLineOffsets.length < 10000) {
                        lineOffsets.splice(startLine + 1, endLine - startLine, ...addedLineOffsets);
                    }
                    else { // avoid too many arguments for splice
                        this._lineOffsets = lineOffsets = lineOffsets.slice(0, startLine + 1).concat(addedLineOffsets, lineOffsets.slice(endLine + 1));
                    }
                }
                const diff = change.text.length - (endOffset - startOffset);
                if (diff !== 0) {
                    for (let i = startLine + 1 + addedLineOffsets.length, len = lineOffsets.length; i < len; i++) {
                        lineOffsets[i] = lineOffsets[i] + diff;
                    }
                }
            }
            else if (FullTextDocument.isFull(change)) {
                this._content = change.text;
                this._lineOffsets = undefined;
            }
            else {
                throw new Error('Unknown change event received');
            }
        }
        this._version = version;
    }
    getLineOffsets() {
        if (this._lineOffsets === undefined) {
            this._lineOffsets = computeLineOffsets(this._content, true);
        }
        return this._lineOffsets;
    }
    positionAt(offset) {
        offset = Math.max(Math.min(offset, this._content.length), 0);
        const lineOffsets = this.getLineOffsets();
        let low = 0, high = lineOffsets.length;
        if (high === 0) {
            return { line: 0, character: offset };
        }
        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            if (lineOffsets[mid] > offset) {
                high = mid;
            }
            else {
                low = mid + 1;
            }
        }
        // low is the least x for which the line offset is larger than the current offset
        // or array.length if no line offset is larger than the current offset
        const line = low - 1;
        offset = this.ensureBeforeEOL(offset, lineOffsets[line]);
        return { line, character: offset - lineOffsets[line] };
    }
    offsetAt(position) {
        const lineOffsets = this.getLineOffsets();
        if (position.line >= lineOffsets.length) {
            return this._content.length;
        }
        else if (position.line < 0) {
            return 0;
        }
        const lineOffset = lineOffsets[position.line];
        if (position.character <= 0) {
            return lineOffset;
        }
        const nextLineOffset = (position.line + 1 < lineOffsets.length) ? lineOffsets[position.line + 1] : this._content.length;
        const offset = Math.min(lineOffset + position.character, nextLineOffset);
        return this.ensureBeforeEOL(offset, lineOffset);
    }
    ensureBeforeEOL(offset, lineOffset) {
        while (offset > lineOffset && isEOL(this._content.charCodeAt(offset - 1))) {
            offset--;
        }
        return offset;
    }
    get lineCount() {
        return this.getLineOffsets().length;
    }
    static isIncremental(event) {
        const candidate = event;
        return candidate !== undefined && candidate !== null &&
            typeof candidate.text === 'string' && candidate.range !== undefined &&
            (candidate.rangeLength === undefined || typeof candidate.rangeLength === 'number');
    }
    static isFull(event) {
        const candidate = event;
        return candidate !== undefined && candidate !== null &&
            typeof candidate.text === 'string' && candidate.range === undefined && candidate.rangeLength === undefined;
    }
}
var TextDocument;
(function (TextDocument) {
    /**
     * Creates a new text document.
     *
     * @param uri The document's uri.
     * @param languageId  The document's language Id.
     * @param version The document's initial version number.
     * @param content The document's content.
     */
    function create(uri, languageId, version, content) {
        return new FullTextDocument(uri, languageId, version, content);
    }
    TextDocument.create = create;
    /**
     * Updates a TextDocument by modifying its content.
     *
     * @param document the document to update. Only documents created by TextDocument.create are valid inputs.
     * @param changes the changes to apply to the document.
     * @param version the changes version for the document.
     * @returns The updated TextDocument. Note: That's the same document instance passed in as first parameter.
     *
     */
    function update(document, changes, version) {
        if (document instanceof FullTextDocument) {
            document.update(changes, version);
            return document;
        }
        else {
            throw new Error('TextDocument.update: document must be created by TextDocument.create');
        }
    }
    TextDocument.update = update;
    function applyEdits(document, edits) {
        const text = document.getText();
        const sortedEdits = mergeSort(edits.map(getWellformedEdit), (a, b) => {
            const diff = a.range.start.line - b.range.start.line;
            if (diff === 0) {
                return a.range.start.character - b.range.start.character;
            }
            return diff;
        });
        let lastModifiedOffset = 0;
        const spans = [];
        for (const e of sortedEdits) {
            const startOffset = document.offsetAt(e.range.start);
            if (startOffset < lastModifiedOffset) {
                throw new Error('Overlapping edit');
            }
            else if (startOffset > lastModifiedOffset) {
                spans.push(text.substring(lastModifiedOffset, startOffset));
            }
            if (e.newText.length) {
                spans.push(e.newText);
            }
            lastModifiedOffset = document.offsetAt(e.range.end);
        }
        spans.push(text.substr(lastModifiedOffset));
        return spans.join('');
    }
    TextDocument.applyEdits = applyEdits;
})(TextDocument || (TextDocument = {}));
function mergeSort(data, compare) {
    if (data.length <= 1) {
        // sorted
        return data;
    }
    const p = (data.length / 2) | 0;
    const left = data.slice(0, p);
    const right = data.slice(p);
    mergeSort(left, compare);
    mergeSort(right, compare);
    let leftIdx = 0;
    let rightIdx = 0;
    let i = 0;
    while (leftIdx < left.length && rightIdx < right.length) {
        const ret = compare(left[leftIdx], right[rightIdx]);
        if (ret <= 0) {
            // smaller_equal -> take left to preserve order
            data[i++] = left[leftIdx++];
        }
        else {
            // greater -> take right
            data[i++] = right[rightIdx++];
        }
    }
    while (leftIdx < left.length) {
        data[i++] = left[leftIdx++];
    }
    while (rightIdx < right.length) {
        data[i++] = right[rightIdx++];
    }
    return data;
}
function computeLineOffsets(text, isAtLineStart, textOffset = 0) {
    const result = isAtLineStart ? [textOffset] : [];
    for (let i = 0; i < text.length; i++) {
        const ch = text.charCodeAt(i);
        if (isEOL(ch)) {
            if (ch === 13 /* CharCode.CarriageReturn */ && i + 1 < text.length && text.charCodeAt(i + 1) === 10 /* CharCode.LineFeed */) {
                i++;
            }
            result.push(textOffset + i + 1);
        }
    }
    return result;
}
function isEOL(char) {
    return char === 13 /* CharCode.CarriageReturn */ || char === 10 /* CharCode.LineFeed */;
}
function getWellformedRange(range) {
    const start = range.start;
    const end = range.end;
    if (start.line > end.line || (start.line === end.line && start.character > end.character)) {
        return { start: end, end: start };
    }
    return range;
}
function getWellformedEdit(textEdit) {
    const range = getWellformedRange(textEdit.range);
    if (range !== textEdit.range) {
        return { newText: textEdit.newText, range };
    }
    return textEdit;
}

;// external "node:fs/promises"
const promises_namespaceObject = require("node:fs/promises");
var promises_default = /*#__PURE__*/__webpack_require__.n(promises_namespaceObject);
;// ./src/languageserver/utils.ts


async function readFileByPath(path) {
    const isWindows = process.platform === 'win32';
    let truePath = path;
    if (isWindows && path.startsWith('/'))
        truePath = path.substring(1);
    return promises_default().readFile(truePath, { encoding: 'utf-8' });
}
function getWordAtPosition(line, character) {
    const regex = /\b\w+\b/g;
    let match;
    while ((match = regex.exec(line)) !== null)
        if (match.index <= character && regex.lastIndex >= character)
            return match[0];
    return null;
}
function getLineContentsBeforePosition(text, position) {
    if (position.line < 0 || position.character < 0)
        return '';
    const lines = text.split('\n');
    if (position.line >= lines.length)
        return '';
    const line = lines[position.line];
    if (position.character > line.length)
        return line;
    return line.substring(0, position.character);
}
function extractModuleName(line) {
    // 如果是 use catalog 语句，返回 null
    if (/^use\s+catalog\s+/i.test(line.trim()))
        return null;
    const regex = /use\s+([\w:]+)\s*[:;]?/;
    const match = regex.exec(line);
    return match ? match[1] : null;
}
function extractFirstloadTableArgument(input) {
    const regex = /loadTable\(\s*((['"])([^'"]*)\2|([^,'"]+))\s*,/;
    const match = regex.exec(input);
    if (match)
        return match[2] ? match[1] : match[4];
    else
        return null;
}
function isParenthesisBalanced(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(')
            count++;
        else if (str[i] === ')')
            count--;
        // 关键点: count 始终不能小于 0
        if (count < 0)
            return true; // 出现 ')' 多于 '(' 的情况，直接视为闭合
    }
    return count === 0;
}
function createRegexForFunctionNames(functionNames) {
    if (!Array.isArray(functionNames) || functionNames.length === 0)
        return null; // 或者抛出错误，根据你的需要
    // 转义函数名中的特殊字符
    const escapedFunctionNames = functionNames.map(escapeRegExp);
    // 使用 | 连接函数名，构建正则表达式模式
    const pattern = `(${escapedFunctionNames.join('|')})\\(`;
    return new RegExp(pattern);
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function buildFunctionCommentDocs(comment) {
    const lines = comment.split('\n');
    let functionName = '';
    let brief = '';
    const params = [];
    let returnDesc = '';
    let sampleUsage = '';
    let additionalInfo = '';
    for (const line of lines)
        if (line.startsWith('@FunctionName:'))
            functionName = line.substring('@FunctionName:'.length).trim();
        else if (line.startsWith('@Brief:'))
            brief = line.substring('@Brief:'.length).trim();
        else if (line.startsWith('@Param:')) {
            const paramLine = line.substring('@Param:'.length).trim();
            const paramParts = /^(\w+)(=\w+)?\s*:\s*(.*)$/.exec(paramLine);
            if (paramParts) {
                const paramName = paramParts[1];
                const paramDesc = paramParts[3];
                params.push({ name: paramName, description: paramDesc });
            }
        }
        else if (line.startsWith('@Return:'))
            returnDesc = line.substring('@Return:'.length).trim();
        else if (line.startsWith('@SampleUsage:'))
            sampleUsage = line.substring('@SampleUsage:'.length).trim();
        else if (!line.trim().startsWith('@'))
            additionalInfo += line.trim() + '  \n';
    const documentation = {
        kind: node.MarkupKind.Markdown,
        value: [
            brief ? `**Brief:** ${brief}` : '',
            params.length > 0 ? '**Parameters:**' : '',
            ...params.map(p => `* \`${p.name}\`: ${p.description}`),
            returnDesc ? `**Return:** ${returnDesc}` : '',
            sampleUsage ? `**Sample Usage:**\n\n\`\`\`\n${sampleUsage}\n\`\`\`` : '',
            additionalInfo ? `\n\n${additionalInfo.trim()}` : '', // Add additional info with separator
        ].filter(s => s).join('\n\n'),
    };
    return documentation;
}

;// ./src/languageserver/types.ts
// symbols
const SymbolType = {
    Function: 0,
    Table: 1,
    FieldName: 2,
    Database: 3,
    Variable: 4,
    Param: 5,
    File: 6,
};

;// ./src/languageserver/symbols.ts




// Helper function to remove comments from text while preserving line structure
function removeComments(text) {
    const lines = text.split('\n');
    const result = [];
    let inBlockComment = false;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        let cleanLine = '';
        let j = 0;
        while (j < line.length)
            if (inBlockComment) {
                // Look for end of block comment
                if (j < line.length - 1 && line[j] === '*' && line[j + 1] === '/') {
                    inBlockComment = false;
                    j += 2;
                    continue;
                }
                // Replace comment content with space to preserve character positions
                cleanLine += ' ';
                j++;
            }
            else {
                // Check for start of block comment
                if (j < line.length - 1 && line[j] === '/' && line[j + 1] === '*') {
                    inBlockComment = true;
                    cleanLine += '  '; // Replace with spaces
                    j += 2;
                    continue;
                }
                // Check for single line comment
                if (j < line.length - 1 && line[j] === '/' && line[j + 1] === '/') {
                    // Replace rest of line with spaces
                    cleanLine += ' '.repeat(line.length - j);
                    break;
                }
                // Regular character
                cleanLine += line[j];
                j++;
            }
        result.push(cleanLine);
    }
    return result.join('\n');
}
class SymbolService {
    // 标识符可以是 uri 或 filePath，textDocument 的时候用 uri，没有办法获取 uri 的时候用 filePath
    symbols = new Map();
    getSymbols(filePath) {
        return this.symbols.get(filePath)?.symbols || [];
    }
    getUsedModules(filePath) {
        return this.symbols.get(filePath)?.use || [];
    }
    buildSymbolsByFile(raw_text, filePath) {
        // 转换 CRLF 到 LF
        const text = raw_text.replaceAll('\r\n', '\n');
        // 移除注释但保持行结构，避免扫描注释中的符号
        const filteredText = removeComments(text);
        return [
            ...getFunctionSymbols(filteredText, filePath, text),
            ...getVariableSymbols(filteredText, filePath, text),
        ];
    }
    buildSymbolByDocument(document) {
        const filePath = document.uri;
        const text = document.getText();
        const symbols = this.buildSymbolsByFile(text, filePath);
        const use = getFileUsedModule(text);
        this.symbols.set(filePath, {
            symbols,
            use,
            module: getFileModule(text)
        });
    }
    async buildSymbolByModule(module) {
        if (!module.moduleName)
            return;
        const text = await readFileByPath(module.filePath);
        const symbols = this.buildSymbolsByFile(text, module.filePath);
        this.symbols.set(module.filePath, {
            symbols,
            use: [],
            module: module.moduleName
        });
    }
    deleteSymbolByUri(uri) {
        this.symbols.delete(uri);
    }
    onCloseDocument(document) {
        this.symbols.delete(document.uri);
    }
}
const symbolService = new SymbolService();
// 正则表达式
// 正则表达式匹配变量定义，避免匹配 '==' 和 '==='
const variableRegex = /^(.*?)??([a-zA-Z0-9_]\w*)\s*=\s*(?![=])(.*)$/;
// 正则表达式匹配函数定义的开始
const funcStartRegex = /^\s*(def|defg)\s+([a-zA-Z0-9_]\w*)\s*\(/;
function findScopes(lines) {
    const scopeStack = [];
    const scopes = [];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        for (let j = 0; j < line.length; j++) {
            const char = line[j];
            if (char === '{')
                scopeStack.push({ startLine: i, startChar: j });
            else if (char === '}' && scopeStack.length > 0) {
                const scope = scopeStack.pop();
                scopes.push({
                    startLine: scope.startLine,
                    startChar: scope.startChar,
                    endLine: i,
                    endChar: j,
                });
            }
        }
    }
    return scopes;
}
function isPositionInScope(line, char, scope) {
    if (line < scope.startLine || line > scope.endLine)
        return false;
    if (line === scope.startLine && char < scope.startChar)
        return false;
    if (line === scope.endLine && char > scope.endChar)
        return false;
    return true;
}
function findInnermostScope(line, char, scopes) {
    let innermost = null;
    for (const scope of scopes)
        if (isPositionInScope(line, char, scope))
            if (!innermost || (scope.startLine > innermost.startLine ||
                (scope.startLine === innermost.startLine && scope.startChar > innermost.startChar)))
                innermost = scope;
    return innermost;
}
function collectComments(lines, defLine) {
    let commentLine = defLine - 1;
    let inBlockComment = false;
    const commentLines = [];
    while (commentLine >= 0) {
        const currentLine = lines[commentLine].trim();
        if (inBlockComment) {
            const startBlockMatch = /^\/\*/.exec(currentLine);
            if (startBlockMatch) {
                const content = currentLine.replace(/^\/\*/, '').trim();
                if (content)
                    commentLines.unshift(content);
                inBlockComment = false;
            }
            else {
                const lineContent = currentLine.replace(/^\*/, '').trim();
                commentLines.unshift(lineContent);
            }
        }
        else {
            const singleLineMatch = /^\/\/(.*)/.exec(currentLine);
            if (singleLineMatch)
                commentLines.unshift(singleLineMatch[1].trim());
            else {
                const endBlockMatch = /\*\/$/.exec(currentLine);
                if (endBlockMatch) {
                    const content = currentLine.replace(/\*\/$/, '').replace(/^\/\*/, '').trim();
                    if (content)
                        commentLines.unshift(content);
                    if (!/^\/\*/.exec(currentLine))
                        inBlockComment = true;
                }
                else
                    break;
            }
        }
        commentLine--;
    }
    return commentLines.join('\n');
}
function getFunctionSymbols(text, filePath, originalText) {
    const symbols = [];
    const lines = text.split('\n');
    const totalLines = lines.length;
    const scopes = findScopes(lines);
    let i = 0;
    while (i < totalLines) {
        const line = lines[i];
        const match = funcStartRegex.exec(line);
        if (match) {
            const functionName = match[2];
            const defLine = i;
            const defColumn = line.indexOf(functionName, line.indexOf('def'));
            const comments = collectComments(originalText ? originalText.split('\n') : lines, defLine);
            // 提取参数列表
            let paramsText = '';
            let paramsEnd = false;
            let parenthesisBalance = 0;
            // 找到第一个 '('
            const openParenIndex = line.indexOf('(', match.index);
            if (openParenIndex !== -1) {
                parenthesisBalance = 1;
                paramsText += line.slice(openParenIndex + 1);
            }
            // 如果括号未平衡，继续读取后续行
            let j = i + 1;
            while (j < totalLines && !paramsEnd) {
                const currentLine = lines[j].trim();
                paramsText += ' ' + currentLine;
                for (const char of currentLine)
                    if (char === '(')
                        parenthesisBalance++;
                    else if (char === ')') {
                        parenthesisBalance--;
                        if (parenthesisBalance === 0) {
                            paramsEnd = true;
                            break;
                        }
                    }
                if (!paramsEnd)
                    j++;
            }
            // 提取到的参数文本应位于第一个 ')' 之前
            const closingParenIndex = paramsText.indexOf(')');
            if (closingParenIndex !== -1)
                paramsText = paramsText.slice(0, closingParenIndex);
            // 解析参数名称，去除所有前导关键字，取最后一个单词作为参数名
            // 支持参数是否被逗号分割
            const argnames = paramsText
                .split(',') // 首先按逗号分割
                .map(param => param.trim().split('=')[0].trim())
                .filter(param => param.length > 0);
            // 查找函数定义所在的最内层作用域（即函数的外部作用域）
            const functionScope = findInnermostScope(defLine, defColumn, scopes);
            // 查找函数体的起始 '{'
            let braceFound = false;
            let braceLine = defLine;
            let braceColumn = -1;
            // 首先检查函数定义行是否包含 '{'
            const braceMatchInDef = /\{/.exec(line.slice(openParenIndex + 1));
            if (braceMatchInDef) {
                braceFound = true;
                braceLine = defLine;
                braceColumn = openParenIndex + 1 + braceMatchInDef.index;
            }
            else
                // 如果函数定义行没有 '{'，继续查找后续行
                for (let k = j; k < totalLines; k++) {
                    const braceMatch = /\{/.exec(lines[k]);
                    if (braceMatch) {
                        braceFound = true;
                        braceLine = k;
                        braceColumn = braceMatch.index;
                        break;
                    }
                    // 如果遇到分号，可能是函数结束
                    if (lines[k].includes(';'))
                        break;
                }
            if (!braceFound) {
                // 未找到 '{'，跳过此函数
                i = j + 1;
                continue;
            }
            // 寻找对应的 '}' 以确定函数体的范围
            let braceBalanceScope = 1;
            let endBraceLine = braceLine;
            let endBraceColumn = braceColumn;
            let foundClosing = false;
            for (let k = braceLine; k < totalLines; k++) {
                const currentLine = lines[k];
                // 开始从第一个 '{' 之后的位置开始查找
                const startChar = k === braceLine ? braceColumn + 1 : 0;
                for (let c = startChar; c < currentLine.length; c++) {
                    const char = currentLine[c];
                    if (char === '{')
                        braceBalanceScope++;
                    else if (char === '}') {
                        braceBalanceScope--;
                        if (braceBalanceScope === 0) {
                            endBraceLine = k;
                            endBraceColumn = c;
                            foundClosing = true;
                            break;
                        }
                    }
                }
                if (foundClosing)
                    break;
            }
            if (!foundClosing) {
                // 未找到闭合的 '}'，跳过此函数
                i = braceLine + 1;
                continue;
            }
            // 定义函数体的范围
            const functionBodyScope = [
                { line: braceLine, character: braceColumn },
                { line: endBraceLine, character: endBraceColumn },
            ];
            const top_level = !functionScope;
            const functionScopeRange = functionScope
                ? [
                    { line: functionScope.startLine, character: functionScope.startChar },
                    { line: functionScope.endLine, character: functionScope.endChar },
                ]
                : [
                    { line: 0, character: 0 },
                    { line: totalLines - 1, character: lines[totalLines - 1].length },
                ];
            const nameRange = {
                start: { line: defLine, character: defColumn },
                end: { line: defLine, character: defColumn + functionName.length },
            };
            const position = { line: defLine, character: defColumn };
            symbols.push({
                name: functionName,
                type: SymbolType.Function,
                position: position,
                range: nameRange,
                filePath,
                metadata: {
                    argnames,
                    scope: functionScopeRange,
                    functionBodyScope,
                    top_level,
                    comments,
                },
            });
            // 为每个参数创建 Param 符号，并设置其作用域为函数体内部
            argnames.forEach(_arg => {
                const arg = escapeRegExp(_arg);
                // 在参数列表中查找参数的位置
                const paramRegex = new RegExp(`\\b${arg}\\b`);
                const paramMatch = paramRegex.exec(paramsText);
                let argLine = defLine;
                let argColumn = 0;
                if (paramMatch)
                    // 计算参数在函数定义行的位置
                    argColumn = openParenIndex + 1 + paramMatch.index;
                else
                    // 如果参数在当前行未找到，尝试在后续行查找
                    for (let searchLine = i + 1; searchLine <= j; searchLine++) {
                        const searchMatch = new RegExp(`\\b${arg}\\b`).exec(lines[searchLine]);
                        if (searchMatch) {
                            argLine = searchLine;
                            argColumn = searchMatch.index;
                            break;
                        }
                    }
                const paramRange = {
                    start: { line: argLine, character: argColumn },
                    end: { line: argLine, character: argColumn + arg.length },
                };
                symbols.push({
                    name: arg,
                    type: SymbolType.Param,
                    position: { line: argLine, character: argColumn },
                    range: paramRange,
                    filePath,
                    metadata: {
                        scope: functionBodyScope,
                        funcname: functionName,
                    },
                });
            });
            // 跳过函数体，继续解析下一个
            i = endBraceLine + 1;
        }
        else
            i++;
    }
    return symbols;
}
function getVariableSymbols(text, filePath, originalText) {
    const symbols = [];
    const lines = text.split('\n');
    const totalLines = lines.length;
    const scopes = findScopes(lines);
    let i = 0;
    while (i < totalLines) {
        const line = lines[i];
        const match = variableRegex.exec(line);
        if (match && !funcStartRegex.exec(line)) {
            const variableName = match[2];
            const defLine = i;
            const defColumn = line.indexOf(variableName);
            const comments = collectComments(originalText ? originalText.split('\n') : lines, defLine);
            const innermostScope = findInnermostScope(defLine, defColumn, scopes);
            const scopeRange = innermostScope
                ? [
                    { line: defLine, character: defColumn },
                    { line: innermostScope.endLine, character: innermostScope.endChar },
                ]
                : [
                    { line: defLine, character: defColumn },
                    { line: totalLines - 1, character: lines[totalLines - 1].length },
                ];
            const nameRange = {
                start: { line: defLine, character: defColumn },
                end: { line: defLine, character: defColumn + variableName.length },
            };
            symbols.push({
                name: variableName,
                type: SymbolType.Variable,
                position: { line: defLine, character: defColumn },
                range: nameRange,
                filePath,
                metadata: {
                    scope: scopeRange,
                    comments,
                },
            });
        }
        // 继续解析下一行, 不管匹不匹配都要加一
        i++;
    }
    return symbols;
}
function getFileModule(raw_text) {
    // 查找第一个 module 声明语句。例如：
    // module fileLog
    const text = raw_text.replaceAll('\r\n', '\n');
    const lines = removeComments(text).split('\n');
    for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('module')) {
            const match = /^module\s+([a-zA-Z0-9_:]*)/.exec(trimmed);
            if (match)
                return match[1];
        }
    }
    return undefined;
}
function getFileUsedModule(text) {
    // 正则表达式匹配 `use` 语句，捕获模块名部分
    const useRegex = /^use\s+([^;\/\/\s]+(?:\s*::\s*[^;\/\/\s]+)*);?/;
    return removeComments(text)
        // 按照换行符分割文本，兼容不同的换行符
        .split(/\r?\n/)
        // 逐行处理
        .map(line => 
    // 去除行首尾空白字符
    line.trim())
        // 过滤出以 `use` 开头的行，但排除 `use catalog` 
        .filter(line => line.startsWith('use') && !line.startsWith('use catalog'))
        // 使用正则表达式提取模块名
        .map(line => {
        const match = useRegex.exec(line);
        return match ? match[1].replace(/\s*::\s*/g, '::') : null;
    })
        // 过滤掉未匹配成功的行
        .filter((moduleName) => moduleName !== null);
}
connection.onDocumentSymbol(params => {
    const filePath = params.textDocument.uri;
    // Work on a copy to avoid mutating the cached symbols.
    const symbols = symbolService.getSymbols(filePath).slice();
    const result = [];
    // 先处理函数，对于每个函数，找到其参数，并将其添加到字节点，然后从 symbols 中删除
    const functionSymbols = symbols.filter(symbol => symbol.type === SymbolType.Function);
    for (const funcSymbol of functionSymbols) {
        // 查找相关的 Params
        const relatedParams = symbols.filter(symbol => symbol.type === SymbolType.Param &&
            symbol.metadata?.funcname === funcSymbol.name);
        const item = {
            name: funcSymbol.name,
            kind: node.SymbolKind.Function,
            range: funcSymbol.range || {
                start: funcSymbol.position,
                end: funcSymbol.position,
            },
            selectionRange: funcSymbol.range || {
                start: funcSymbol.position,
                end: funcSymbol.position,
            },
            children: [],
        };
        if (relatedParams.length > 0)
            item.children = relatedParams.map(param => ({
                name: param.name,
                kind: node.SymbolKind.Variable,
                range: param.range || {
                    start: param.position,
                    end: param.position,
                },
                selectionRange: param.range || {
                    start: param.position,
                    end: param.position,
                },
            }));
        // 还需要将函数作用域范围下的变量也加入
        const functionScope = funcSymbol.metadata?.functionBodyScope;
        if (functionScope) {
            const start = functionScope[0];
            const end = functionScope[1];
            const functionScopeSymbols = symbols.filter(symbol => symbol.type === SymbolType.Variable &&
                symbol.position.line >= start.line &&
                symbol.position.line <= end.line &&
                (symbol.position.line > start.line || symbol.position.character >= start.character) &&
                (symbol.position.line < end.line || symbol.position.character <= end.character));
            functionScopeSymbols.forEach(variable => {
                const variableItem = {
                    name: variable.name,
                    kind: node.SymbolKind.Variable,
                    range: variable.range || {
                        start: variable.position,
                        end: variable.position,
                    },
                    selectionRange: variable.range || {
                        start: variable.position,
                        end: variable.position,
                    },
                    children: [],
                };
                item.children.push(variableItem);
            });
            // 将相关的变量也删除
            functionScopeSymbols.forEach(variable => {
                const index = symbols.indexOf(variable);
                if (index !== -1)
                    symbols.splice(index, 1);
            });
        }
        // 将函数从 symbols 中删除
        const index = symbols.indexOf(funcSymbol);
        if (index !== -1)
            symbols.splice(index, 1);
        // 将相关的 Params 也删除
        relatedParams.forEach(param => {
            const index = symbols.indexOf(param);
            if (index !== -1)
                symbols.splice(index, 1);
        });
        result.push(item);
    }
    // 处理剩余的变量
    symbols.forEach(symbol => {
        const item = {
            name: symbol.name,
            kind: node.SymbolKind.Variable,
            range: symbol.range || {
                start: symbol.position,
                end: symbol.position,
            },
            selectionRange: symbol.range || {
                start: symbol.position,
                end: symbol.position,
            },
            children: [],
        };
        result.push(item);
    });
    return result;
});

;// external "node:stream"
const external_node_stream_namespaceObject = require("node:stream");
// EXTERNAL MODULE: external "node:util"
var external_node_util_ = __webpack_require__(7975);
;// external "node:crypto"
const external_node_crypto_namespaceObject = require("node:crypto");
;// external "timers/promises"
const external_timers_promises_namespaceObject = require("timers/promises");
;// ./node_modules/.pnpm/ansi-regex@6.2.2/node_modules/ansi-regex/index.js
function ansiRegex({onlyFirst = false} = {}) {
	// Valid string terminator sequences are BEL, ESC\, and 0x9c
	const ST = '(?:\\u0007|\\u001B\\u005C|\\u009C)';

	// OSC sequences only: ESC ] ... ST (non-greedy until the first ST)
	const osc = `(?:\\u001B\\][\\s\\S]*?${ST})`;

	// CSI and related: ESC/C1, optional intermediates, optional params (supports ; and :) then final byte
	const csi = '[\\u001B\\u009B][[\\]()#;?]*(?:\\d{1,4}(?:[;:]\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]';

	const pattern = `${osc}|${csi}`;

	return new RegExp(pattern, onlyFirst ? undefined : 'g');
}

;// ./node_modules/.pnpm/strip-ansi@7.2.0/node_modules/strip-ansi/index.js


const regex = ansiRegex();

function stripAnsi(string) {
	if (typeof string !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
	}

	// Fast path: ANSI codes require ESC (7-bit) or CSI (8-bit) introducer
	if (!string.includes('\u001B') && !string.includes('\u009B')) {
		return string;
	}

	// Even though the regex is global, we don't need to reset the `.lastIndex`
	// because unlike `.exec()` and `.test()`, `.replace()` does it automatically
	// and doing it manually has a performance penalty.
	return string.replace(regex, '');
}

;// ./node_modules/.pnpm/xshell@1.3.48_react-dom@19.2.4_react@19.2.4_/node_modules/xshell/platform.common.js
let platform;
function set_platform(_platform) {
    platform = _platform;
}
//# sourceMappingURL=platform.common.js.map
;// ./node_modules/.pnpm/xshell@1.3.48_react-dom@19.2.4_react@19.2.4_/node_modules/xshell/platform.js




function get_buffer(length) {
    return Buffer.allocUnsafe(length);
}
function encode(str) {
    // 用 Buffer.from 是因为可以利用 buffer pool，避免 encoder.encode 创建大量小且独立的 array buffer
    return Buffer.from(str);
}
async function delay(milliseconds, options) {
    return external_timers_promises_namespaceObject.setTimeout(milliseconds, undefined, options);
}
set_platform({
    nodejs: true,
    browser: false,
    get_buffer,
    encode,
    delay,
    strip_ansi: stripAnsi,
    async get_websocket() {
        return (await __webpack_require__.e(/*! import() */ 496).then(__webpack_require__.bind(__webpack_require__, /*! ws */ 1496)))
            .WebSocket;
    },
    async get_https_proxy_agent() {
        return (await __webpack_require__.e(/*! import() */ 475).then(__webpack_require__.bind(__webpack_require__, /*! https-proxy-agent */ 5475)))
            .HttpsProxyAgent;
    }
});
//# sourceMappingURL=platform.js.map
;// ./node_modules/.pnpm/emoji-regex@10.6.0/node_modules/emoji-regex/index.mjs
/* harmony default export */ const emoji_regex = (() => {
	// https://mths.be/emoji
	return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
});

;// ./node_modules/.pnpm/i18next@25.8.1_typescript@5.9.3/node_modules/i18next/dist/esm/i18next.js
const isString = obj => typeof obj === 'string';
const defer = () => {
  let res;
  let rej;
  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
};
const makeString = object => {
  if (object == null) return '';
  return '' + object;
};
const copy = (a, s, t) => {
  a.forEach(m => {
    if (s[m]) t[m] = s[m];
  });
};
const lastOfPathSeparatorRegExp = /###/g;
const cleanKey = key => key && key.indexOf('###') > -1 ? key.replace(lastOfPathSeparatorRegExp, '.') : key;
const canNotTraverseDeeper = object => !object || isString(object);
const getLastOfPath = (object, path, Empty) => {
  const stack = !isString(path) ? path : path.split('.');
  let stackIndex = 0;
  while (stackIndex < stack.length - 1) {
    if (canNotTraverseDeeper(object)) return {};
    const key = cleanKey(stack[stackIndex]);
    if (!object[key] && Empty) object[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
    ++stackIndex;
  }
  if (canNotTraverseDeeper(object)) return {};
  return {
    obj: object,
    k: cleanKey(stack[stackIndex])
  };
};
const setPath = (object, path, newValue) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path, Object);
  if (obj !== undefined || path.length === 1) {
    obj[k] = newValue;
    return;
  }
  let e = path[path.length - 1];
  let p = path.slice(0, path.length - 1);
  let last = getLastOfPath(object, p, Object);
  while (last.obj === undefined && p.length) {
    e = `${p[p.length - 1]}.${e}`;
    p = p.slice(0, p.length - 1);
    last = getLastOfPath(object, p, Object);
    if (last?.obj && typeof last.obj[`${last.k}.${e}`] !== 'undefined') {
      last.obj = undefined;
    }
  }
  last.obj[`${last.k}.${e}`] = newValue;
};
const pushPath = (object, path, newValue, concat) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path, Object);
  obj[k] = obj[k] || [];
  obj[k].push(newValue);
};
const getPath = (object, path) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path);
  if (!obj) return undefined;
  if (!Object.prototype.hasOwnProperty.call(obj, k)) return undefined;
  return obj[k];
};
const getPathWithDefaults = (data, defaultData, key) => {
  const value = getPath(data, key);
  if (value !== undefined) {
    return value;
  }
  return getPath(defaultData, key);
};
const deepExtend = (target, source, overwrite) => {
  for (const prop in source) {
    if (prop !== '__proto__' && prop !== 'constructor') {
      if (prop in target) {
        if (isString(target[prop]) || target[prop] instanceof String || isString(source[prop]) || source[prop] instanceof String) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
};
const regexEscape = str => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var _entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};
const i18next_escape = data => {
  if (isString(data)) {
    return data.replace(/[&<>"'\/]/g, s => _entityMap[s]);
  }
  return data;
};
class RegExpCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.regExpMap = new Map();
    this.regExpQueue = [];
  }
  getRegExp(pattern) {
    const regExpFromCache = this.regExpMap.get(pattern);
    if (regExpFromCache !== undefined) {
      return regExpFromCache;
    }
    const regExpNew = new RegExp(pattern);
    if (this.regExpQueue.length === this.capacity) {
      this.regExpMap.delete(this.regExpQueue.shift());
    }
    this.regExpMap.set(pattern, regExpNew);
    this.regExpQueue.push(pattern);
    return regExpNew;
  }
}
const chars = [' ', ',', '?', '!', ';'];
const looksLikeObjectPathRegExpCache = new RegExpCache(20);
const looksLikeObjectPath = (key, nsSeparator, keySeparator) => {
  nsSeparator = nsSeparator || '';
  keySeparator = keySeparator || '';
  const possibleChars = chars.filter(c => nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0);
  if (possibleChars.length === 0) return true;
  const r = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map(c => c === '?' ? '\\?' : c).join('|')})`);
  let matched = !r.test(key);
  if (!matched) {
    const ki = key.indexOf(keySeparator);
    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }
  return matched;
};
const deepFind = (obj, path, keySeparator = '.') => {
  if (!obj) return undefined;
  if (obj[path]) {
    if (!Object.prototype.hasOwnProperty.call(obj, path)) return undefined;
    return obj[path];
  }
  const tokens = path.split(keySeparator);
  let current = obj;
  for (let i = 0; i < tokens.length;) {
    if (!current || typeof current !== 'object') {
      return undefined;
    }
    let next;
    let nextPath = '';
    for (let j = i; j < tokens.length; ++j) {
      if (j !== i) {
        nextPath += keySeparator;
      }
      nextPath += tokens[j];
      next = current[nextPath];
      if (next !== undefined) {
        if (['string', 'number', 'boolean'].indexOf(typeof next) > -1 && j < tokens.length - 1) {
          continue;
        }
        i += j - i + 1;
        break;
      }
    }
    current = next;
  }
  return current;
};
const getCleanedCode = code => code?.replace('_', '-');

const consoleLogger = {
  type: 'logger',
  log(args) {
    this.output('log', args);
  },
  warn(args) {
    this.output('warn', args);
  },
  error(args) {
    this.output('error', args);
  },
  output(type, args) {
    console?.[type]?.apply?.(console, args);
  }
};
class Logger {
  constructor(concreteLogger, options = {}) {
    this.init(concreteLogger, options);
  }
  init(concreteLogger, options = {}) {
    this.prefix = options.prefix || 'i18next:';
    this.logger = concreteLogger || consoleLogger;
    this.options = options;
    this.debug = options.debug;
  }
  log(...args) {
    return this.forward(args, 'log', '', true);
  }
  warn(...args) {
    return this.forward(args, 'warn', '', true);
  }
  error(...args) {
    return this.forward(args, 'error', '');
  }
  deprecate(...args) {
    return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
  }
  forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug) return null;
    if (isString(args[0])) args[0] = `${prefix}${this.prefix} ${args[0]}`;
    return this.logger[lvl](args);
  }
  create(moduleName) {
    return new Logger(this.logger, {
      ...{
        prefix: `${this.prefix}:${moduleName}:`
      },
      ...this.options
    });
  }
  clone(options) {
    options = options || this.options;
    options.prefix = options.prefix || this.prefix;
    return new Logger(this.logger, options);
  }
}
var baseLogger = new Logger();

class EventEmitter {
  constructor() {
    this.observers = {};
  }
  on(events, listener) {
    events.split(' ').forEach(event => {
      if (!this.observers[event]) this.observers[event] = new Map();
      const numListeners = this.observers[event].get(listener) || 0;
      this.observers[event].set(listener, numListeners + 1);
    });
    return this;
  }
  off(event, listener) {
    if (!this.observers[event]) return;
    if (!listener) {
      delete this.observers[event];
      return;
    }
    this.observers[event].delete(listener);
  }
  emit(event, ...args) {
    if (this.observers[event]) {
      const cloned = Array.from(this.observers[event].entries());
      cloned.forEach(([observer, numTimesAdded]) => {
        for (let i = 0; i < numTimesAdded; i++) {
          observer(...args);
        }
      });
    }
    if (this.observers['*']) {
      const cloned = Array.from(this.observers['*'].entries());
      cloned.forEach(([observer, numTimesAdded]) => {
        for (let i = 0; i < numTimesAdded; i++) {
          observer.apply(observer, [event, ...args]);
        }
      });
    }
  }
}

class ResourceStore extends EventEmitter {
  constructor(data, options = {
    ns: ['translation'],
    defaultNS: 'translation'
  }) {
    super();
    this.data = data || {};
    this.options = options;
    if (this.options.keySeparator === undefined) {
      this.options.keySeparator = '.';
    }
    if (this.options.ignoreJSONStructure === undefined) {
      this.options.ignoreJSONStructure = true;
    }
  }
  addNamespaces(ns) {
    if (this.options.ns.indexOf(ns) < 0) {
      this.options.ns.push(ns);
    }
  }
  removeNamespaces(ns) {
    const index = this.options.ns.indexOf(ns);
    if (index > -1) {
      this.options.ns.splice(index, 1);
    }
  }
  getResource(lng, ns, key, options = {}) {
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    const ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let path;
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
    } else {
      path = [lng, ns];
      if (key) {
        if (Array.isArray(key)) {
          path.push(...key);
        } else if (isString(key) && keySeparator) {
          path.push(...key.split(keySeparator));
        } else {
          path.push(key);
        }
      }
    }
    const result = getPath(this.data, path);
    if (!result && !ns && !key && lng.indexOf('.') > -1) {
      lng = path[0];
      ns = path[1];
      key = path.slice(2).join('.');
    }
    if (result || !ignoreJSONStructure || !isString(key)) return result;
    return deepFind(this.data?.[lng]?.[ns], key, keySeparator);
  }
  addResource(lng, ns, key, value, options = {
    silent: false
  }) {
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    let path = [lng, ns];
    if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
      value = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    setPath(this.data, path, value);
    if (!options.silent) this.emit('added', lng, ns, key, value);
  }
  addResources(lng, ns, resources, options = {
    silent: false
  }) {
    for (const m in resources) {
      if (isString(resources[m]) || Array.isArray(resources[m])) this.addResource(lng, ns, m, resources[m], {
        silent: true
      });
    }
    if (!options.silent) this.emit('added', lng, ns, resources);
  }
  addResourceBundle(lng, ns, resources, deep, overwrite, options = {
    silent: false,
    skipCopy: false
  }) {
    let path = [lng, ns];
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
      deep = resources;
      resources = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    let pack = getPath(this.data, path) || {};
    if (!options.skipCopy) resources = JSON.parse(JSON.stringify(resources));
    if (deep) {
      deepExtend(pack, resources, overwrite);
    } else {
      pack = {
        ...pack,
        ...resources
      };
    }
    setPath(this.data, path, pack);
    if (!options.silent) this.emit('added', lng, ns, resources);
  }
  removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);
    this.emit('removed', lng, ns);
  }
  hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== undefined;
  }
  getResourceBundle(lng, ns) {
    if (!ns) ns = this.options.defaultNS;
    return this.getResource(lng, ns);
  }
  getDataByLanguage(lng) {
    return this.data[lng];
  }
  hasLanguageSomeTranslations(lng) {
    const data = this.getDataByLanguage(lng);
    const n = data && Object.keys(data) || [];
    return !!n.find(v => data[v] && Object.keys(data[v]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}

var postProcessor = {
  processors: {},
  addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle(processors, value, key, options, translator) {
    processors.forEach(processor => {
      value = this.processors[processor]?.process(value, key, options, translator) ?? value;
    });
    return value;
  }
};

const PATH_KEY = Symbol('i18next/PATH_KEY');
function createProxy() {
  const state = [];
  const handler = Object.create(null);
  let proxy;
  handler.get = (target, key) => {
    proxy?.revoke?.();
    if (key === PATH_KEY) return state;
    state.push(key);
    proxy = Proxy.revocable(target, handler);
    return proxy.proxy;
  };
  return Proxy.revocable(Object.create(null), handler).proxy;
}
function keysFromSelector(selector, opts) {
  const {
    [PATH_KEY]: path
  } = selector(createProxy());
  return path.join(opts?.keySeparator ?? '.');
}

const checkedLoadedFor = {};
const shouldHandleAsObject = res => !isString(res) && typeof res !== 'boolean' && typeof res !== 'number';
class Translator extends EventEmitter {
  constructor(services, options = {}) {
    super();
    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, this);
    this.options = options;
    if (this.options.keySeparator === undefined) {
      this.options.keySeparator = '.';
    }
    this.logger = baseLogger.create('translator');
  }
  changeLanguage(lng) {
    if (lng) this.language = lng;
  }
  exists(key, o = {
    interpolation: {}
  }) {
    const opt = {
      ...o
    };
    if (key == null) return false;
    const resolved = this.resolve(key, opt);
    if (resolved?.res === undefined) return false;
    const isObject = shouldHandleAsObject(resolved.res);
    if (opt.returnObjects === false && isObject) {
      return false;
    }
    return true;
  }
  extractFromKey(key, opt) {
    let nsSeparator = opt.nsSeparator !== undefined ? opt.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === undefined) nsSeparator = ':';
    const keySeparator = opt.keySeparator !== undefined ? opt.keySeparator : this.options.keySeparator;
    let namespaces = opt.ns || this.options.defaultNS || [];
    const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
    const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !opt.keySeparator && !this.options.userDefinedNsSeparator && !opt.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
    if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
      const m = key.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) {
        return {
          key,
          namespaces: isString(namespaces) ? [namespaces] : namespaces
        };
      }
      const parts = key.split(nsSeparator);
      if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
      key = parts.join(keySeparator);
    }
    return {
      key,
      namespaces: isString(namespaces) ? [namespaces] : namespaces
    };
  }
  translate(keys, o, lastKey) {
    let opt = typeof o === 'object' ? {
      ...o
    } : o;
    if (typeof opt !== 'object' && this.options.overloadTranslationOptionHandler) {
      opt = this.options.overloadTranslationOptionHandler(arguments);
    }
    if (typeof opt === 'object') opt = {
      ...opt
    };
    if (!opt) opt = {};
    if (keys == null) return '';
    if (typeof keys === 'function') keys = keysFromSelector(keys, {
      ...this.options,
      ...opt
    });
    if (!Array.isArray(keys)) keys = [String(keys)];
    const returnDetails = opt.returnDetails !== undefined ? opt.returnDetails : this.options.returnDetails;
    const keySeparator = opt.keySeparator !== undefined ? opt.keySeparator : this.options.keySeparator;
    const {
      key,
      namespaces
    } = this.extractFromKey(keys[keys.length - 1], opt);
    const namespace = namespaces[namespaces.length - 1];
    let nsSeparator = opt.nsSeparator !== undefined ? opt.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === undefined) nsSeparator = ':';
    const lng = opt.lng || this.language;
    const appendNamespaceToCIMode = opt.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (lng?.toLowerCase() === 'cimode') {
      if (appendNamespaceToCIMode) {
        if (returnDetails) {
          return {
            res: `${namespace}${nsSeparator}${key}`,
            usedKey: key,
            exactUsedKey: key,
            usedLng: lng,
            usedNS: namespace,
            usedParams: this.getUsedParamsDetails(opt)
          };
        }
        return `${namespace}${nsSeparator}${key}`;
      }
      if (returnDetails) {
        return {
          res: key,
          usedKey: key,
          exactUsedKey: key,
          usedLng: lng,
          usedNS: namespace,
          usedParams: this.getUsedParamsDetails(opt)
        };
      }
      return key;
    }
    const resolved = this.resolve(keys, opt);
    let res = resolved?.res;
    const resUsedKey = resolved?.usedKey || key;
    const resExactUsedKey = resolved?.exactUsedKey || key;
    const noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
    const joinArrays = opt.joinArrays !== undefined ? opt.joinArrays : this.options.joinArrays;
    const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
    const needsPluralHandling = opt.count !== undefined && !isString(opt.count);
    const hasDefaultValue = Translator.hasDefaultValue(opt);
    const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, opt) : '';
    const defaultValueSuffixOrdinalFallback = opt.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, {
      ordinal: false
    }) : '';
    const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
    const defaultValue = needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] || opt[`defaultValue${defaultValueSuffix}`] || opt[`defaultValue${defaultValueSuffixOrdinalFallback}`] || opt.defaultValue;
    let resForObjHndl = res;
    if (handleAsObjectInI18nFormat && !res && hasDefaultValue) {
      resForObjHndl = defaultValue;
    }
    const handleAsObject = shouldHandleAsObject(resForObjHndl);
    const resType = Object.prototype.toString.apply(resForObjHndl);
    if (handleAsObjectInI18nFormat && resForObjHndl && handleAsObject && noObject.indexOf(resType) < 0 && !(isString(joinArrays) && Array.isArray(resForObjHndl))) {
      if (!opt.returnObjects && !this.options.returnObjects) {
        if (!this.options.returnedObjectHandler) {
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        }
        const r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, resForObjHndl, {
          ...opt,
          ns: namespaces
        }) : `key '${key} (${this.language})' returned an object instead of string.`;
        if (returnDetails) {
          resolved.res = r;
          resolved.usedParams = this.getUsedParamsDetails(opt);
          return resolved;
        }
        return r;
      }
      if (keySeparator) {
        const resTypeIsArray = Array.isArray(resForObjHndl);
        const copy = resTypeIsArray ? [] : {};
        const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
        for (const m in resForObjHndl) {
          if (Object.prototype.hasOwnProperty.call(resForObjHndl, m)) {
            const deepKey = `${newKeyToUse}${keySeparator}${m}`;
            if (hasDefaultValue && !res) {
              copy[m] = this.translate(deepKey, {
                ...opt,
                defaultValue: shouldHandleAsObject(defaultValue) ? defaultValue[m] : undefined,
                ...{
                  joinArrays: false,
                  ns: namespaces
                }
              });
            } else {
              copy[m] = this.translate(deepKey, {
                ...opt,
                ...{
                  joinArrays: false,
                  ns: namespaces
                }
              });
            }
            if (copy[m] === deepKey) copy[m] = resForObjHndl[m];
          }
        }
        res = copy;
      }
    } else if (handleAsObjectInI18nFormat && isString(joinArrays) && Array.isArray(res)) {
      res = res.join(joinArrays);
      if (res) res = this.extendTranslation(res, keys, opt, lastKey);
    } else {
      let usedDefault = false;
      let usedKey = false;
      if (!this.isValidLookup(res) && hasDefaultValue) {
        usedDefault = true;
        res = defaultValue;
      }
      if (!this.isValidLookup(res)) {
        usedKey = true;
        res = key;
      }
      const missingKeyNoValueFallbackToKey = opt.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
      const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
      const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
      if (usedKey || usedDefault || updateMissing) {
        this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);
        if (keySeparator) {
          const fk = this.resolve(key, {
            ...opt,
            keySeparator: false
          });
          if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
        }
        let lngs = [];
        const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, opt.lng || this.language);
        if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
          for (let i = 0; i < fallbackLngs.length; i++) {
            lngs.push(fallbackLngs[i]);
          }
        } else if (this.options.saveMissingTo === 'all') {
          lngs = this.languageUtils.toResolveHierarchy(opt.lng || this.language);
        } else {
          lngs.push(opt.lng || this.language);
        }
        const send = (l, k, specificDefaultValue) => {
          const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
          if (this.options.missingKeyHandler) {
            this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, opt);
          } else if (this.backendConnector?.saveMissing) {
            this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, opt);
          }
          this.emit('missingKey', l, namespace, k, res);
        };
        if (this.options.saveMissing) {
          if (this.options.saveMissingPlurals && needsPluralHandling) {
            lngs.forEach(language => {
              const suffixes = this.pluralResolver.getSuffixes(language, opt);
              if (needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] && suffixes.indexOf(`${this.options.pluralSeparator}zero`) < 0) {
                suffixes.push(`${this.options.pluralSeparator}zero`);
              }
              suffixes.forEach(suffix => {
                send([language], key + suffix, opt[`defaultValue${suffix}`] || defaultValue);
              });
            });
          } else {
            send(lngs, key, defaultValue);
          }
        }
      }
      res = this.extendTranslation(res, keys, opt, resolved, lastKey);
      if (usedKey && res === key && this.options.appendNamespaceToMissingKey) {
        res = `${namespace}${nsSeparator}${key}`;
      }
      if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
        res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}${nsSeparator}${key}` : key, usedDefault ? res : undefined, opt);
      }
    }
    if (returnDetails) {
      resolved.res = res;
      resolved.usedParams = this.getUsedParamsDetails(opt);
      return resolved;
    }
    return res;
  }
  extendTranslation(res, key, opt, resolved, lastKey) {
    if (this.i18nFormat?.parse) {
      res = this.i18nFormat.parse(res, {
        ...this.options.interpolation.defaultVariables,
        ...opt
      }, opt.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
        resolved
      });
    } else if (!opt.skipInterpolation) {
      if (opt.interpolation) this.interpolator.init({
        ...opt,
        ...{
          interpolation: {
            ...this.options.interpolation,
            ...opt.interpolation
          }
        }
      });
      const skipOnVariables = isString(res) && (opt?.interpolation?.skipOnVariables !== undefined ? opt.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let nestBef;
      if (skipOnVariables) {
        const nb = res.match(this.interpolator.nestingRegexp);
        nestBef = nb && nb.length;
      }
      let data = opt.replace && !isString(opt.replace) ? opt.replace : opt;
      if (this.options.interpolation.defaultVariables) data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
      res = this.interpolator.interpolate(res, data, opt.lng || this.language || resolved.usedLng, opt);
      if (skipOnVariables) {
        const na = res.match(this.interpolator.nestingRegexp);
        const nestAft = na && na.length;
        if (nestBef < nestAft) opt.nest = false;
      }
      if (!opt.lng && resolved && resolved.res) opt.lng = this.language || resolved.usedLng;
      if (opt.nest !== false) res = this.interpolator.nest(res, (...args) => {
        if (lastKey?.[0] === args[0] && !opt.context) {
          this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
          return null;
        }
        return this.translate(...args, key);
      }, opt);
      if (opt.interpolation) this.interpolator.reset();
    }
    const postProcess = opt.postProcess || this.options.postProcess;
    const postProcessorNames = isString(postProcess) ? [postProcess] : postProcess;
    if (res != null && postProcessorNames?.length && opt.applyPostProcessor !== false) {
      res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
        i18nResolved: {
          ...resolved,
          usedParams: this.getUsedParamsDetails(opt)
        },
        ...opt
      } : opt, this);
    }
    return res;
  }
  resolve(keys, opt = {}) {
    let found;
    let usedKey;
    let exactUsedKey;
    let usedLng;
    let usedNS;
    if (isString(keys)) keys = [keys];
    keys.forEach(k => {
      if (this.isValidLookup(found)) return;
      const extracted = this.extractFromKey(k, opt);
      const key = extracted.key;
      usedKey = key;
      let namespaces = extracted.namespaces;
      if (this.options.fallbackNS) namespaces = namespaces.concat(this.options.fallbackNS);
      const needsPluralHandling = opt.count !== undefined && !isString(opt.count);
      const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
      const needsContextHandling = opt.context !== undefined && (isString(opt.context) || typeof opt.context === 'number') && opt.context !== '';
      const codes = opt.lngs ? opt.lngs : this.languageUtils.toResolveHierarchy(opt.lng || this.language, opt.fallbackLng);
      namespaces.forEach(ns => {
        if (this.isValidLookup(found)) return;
        usedNS = ns;
        if (!checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(usedNS)) {
          checkedLoadedFor[`${codes[0]}-${ns}`] = true;
          this.logger.warn(`key "${usedKey}" for languages "${codes.join(', ')}" won't get resolved as namespace "${usedNS}" was not yet loaded`, 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
        }
        codes.forEach(code => {
          if (this.isValidLookup(found)) return;
          usedLng = code;
          const finalKeys = [key];
          if (this.i18nFormat?.addLookupKeys) {
            this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, opt);
          } else {
            let pluralSuffix;
            if (needsPluralHandling) pluralSuffix = this.pluralResolver.getSuffix(code, opt.count, opt);
            const zeroSuffix = `${this.options.pluralSeparator}zero`;
            const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (needsPluralHandling) {
              if (opt.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
              }
              finalKeys.push(key + pluralSuffix);
              if (needsZeroSuffixLookup) {
                finalKeys.push(key + zeroSuffix);
              }
            }
            if (needsContextHandling) {
              const contextKey = `${key}${this.options.contextSeparator || '_'}${opt.context}`;
              finalKeys.push(contextKey);
              if (needsPluralHandling) {
                if (opt.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                  finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                }
                finalKeys.push(contextKey + pluralSuffix);
                if (needsZeroSuffixLookup) {
                  finalKeys.push(contextKey + zeroSuffix);
                }
              }
            }
          }
          let possibleKey;
          while (possibleKey = finalKeys.pop()) {
            if (!this.isValidLookup(found)) {
              exactUsedKey = possibleKey;
              found = this.getResource(code, ns, possibleKey, opt);
            }
          }
        });
      });
    });
    return {
      res: found,
      usedKey,
      exactUsedKey,
      usedLng,
      usedNS
    };
  }
  isValidLookup(res) {
    return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
  }
  getResource(code, ns, key, options = {}) {
    if (this.i18nFormat?.getResource) return this.i18nFormat.getResource(code, ns, key, options);
    return this.resourceStore.getResource(code, ns, key, options);
  }
  getUsedParamsDetails(options = {}) {
    const optionsKeys = ['defaultValue', 'ordinal', 'context', 'replace', 'lng', 'lngs', 'fallbackLng', 'ns', 'keySeparator', 'nsSeparator', 'returnObjects', 'returnDetails', 'joinArrays', 'postProcess', 'interpolation'];
    const useOptionsReplaceForData = options.replace && !isString(options.replace);
    let data = useOptionsReplaceForData ? options.replace : options;
    if (useOptionsReplaceForData && typeof options.count !== 'undefined') {
      data.count = options.count;
    }
    if (this.options.interpolation.defaultVariables) {
      data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
    }
    if (!useOptionsReplaceForData) {
      data = {
        ...data
      };
      for (const key of optionsKeys) {
        delete data[key];
      }
    }
    return data;
  }
  static hasDefaultValue(options) {
    const prefix = 'defaultValue';
    for (const option in options) {
      if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && undefined !== options[option]) {
        return true;
      }
    }
    return false;
  }
}

class LanguageUtil {
  constructor(options) {
    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create('languageUtils');
  }
  getScriptPartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf('-') < 0) return null;
    const p = code.split('-');
    if (p.length === 2) return null;
    p.pop();
    if (p[p.length - 1].toLowerCase() === 'x') return null;
    return this.formatLanguageCode(p.join('-'));
  }
  getLanguagePartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf('-') < 0) return code;
    const p = code.split('-');
    return this.formatLanguageCode(p[0]);
  }
  formatLanguageCode(code) {
    if (isString(code) && code.indexOf('-') > -1) {
      let formattedCode;
      try {
        formattedCode = Intl.getCanonicalLocales(code)[0];
      } catch (e) {}
      if (formattedCode && this.options.lowerCaseLng) {
        formattedCode = formattedCode.toLowerCase();
      }
      if (formattedCode) return formattedCode;
      if (this.options.lowerCaseLng) {
        return code.toLowerCase();
      }
      return code;
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
  }
  isSupportedCode(code) {
    if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
  }
  getBestMatchFromCodes(codes) {
    if (!codes) return null;
    let found;
    codes.forEach(code => {
      if (found) return;
      const cleanedLng = this.formatLanguageCode(code);
      if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng)) found = cleanedLng;
    });
    if (!found && this.options.supportedLngs) {
      codes.forEach(code => {
        if (found) return;
        const lngScOnly = this.getScriptPartFromCode(code);
        if (this.isSupportedCode(lngScOnly)) return found = lngScOnly;
        const lngOnly = this.getLanguagePartFromCode(code);
        if (this.isSupportedCode(lngOnly)) return found = lngOnly;
        found = this.options.supportedLngs.find(supportedLng => {
          if (supportedLng === lngOnly) return supportedLng;
          if (supportedLng.indexOf('-') < 0 && lngOnly.indexOf('-') < 0) return;
          if (supportedLng.indexOf('-') > 0 && lngOnly.indexOf('-') < 0 && supportedLng.substring(0, supportedLng.indexOf('-')) === lngOnly) return supportedLng;
          if (supportedLng.indexOf(lngOnly) === 0 && lngOnly.length > 1) return supportedLng;
        });
      });
    }
    if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
    return found;
  }
  getFallbackCodes(fallbacks, code) {
    if (!fallbacks) return [];
    if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
    if (isString(fallbacks)) fallbacks = [fallbacks];
    if (Array.isArray(fallbacks)) return fallbacks;
    if (!code) return fallbacks.default || [];
    let found = fallbacks[code];
    if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
    if (!found) found = fallbacks[this.formatLanguageCode(code)];
    if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
    if (!found) found = fallbacks.default;
    return found || [];
  }
  toResolveHierarchy(code, fallbackCode) {
    const fallbackCodes = this.getFallbackCodes((fallbackCode === false ? [] : fallbackCode) || this.options.fallbackLng || [], code);
    const codes = [];
    const addCode = c => {
      if (!c) return;
      if (this.isSupportedCode(c)) {
        codes.push(c);
      } else {
        this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`);
      }
    };
    if (isString(code) && (code.indexOf('-') > -1 || code.indexOf('_') > -1)) {
      if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
      if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
      if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
    } else if (isString(code)) {
      addCode(this.formatLanguageCode(code));
    }
    fallbackCodes.forEach(fc => {
      if (codes.indexOf(fc) < 0) addCode(this.formatLanguageCode(fc));
    });
    return codes;
  }
}

const suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
const dummyRule = {
  select: count => count === 1 ? 'one' : 'other',
  resolvedOptions: () => ({
    pluralCategories: ['one', 'other']
  })
};
class PluralResolver {
  constructor(languageUtils, options = {}) {
    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create('pluralResolver');
    this.pluralRulesCache = {};
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(code, options = {}) {
    const cleanedCode = getCleanedCode(code === 'dev' ? 'en' : code);
    const type = options.ordinal ? 'ordinal' : 'cardinal';
    const cacheKey = JSON.stringify({
      cleanedCode,
      type
    });
    if (cacheKey in this.pluralRulesCache) {
      return this.pluralRulesCache[cacheKey];
    }
    let rule;
    try {
      rule = new Intl.PluralRules(cleanedCode, {
        type
      });
    } catch (err) {
      if (!Intl) {
        this.logger.error('No Intl support, please use an Intl polyfill!');
        return dummyRule;
      }
      if (!code.match(/-|_/)) return dummyRule;
      const lngPart = this.languageUtils.getLanguagePartFromCode(code);
      rule = this.getRule(lngPart, options);
    }
    this.pluralRulesCache[cacheKey] = rule;
    return rule;
  }
  needsPlural(code, options = {}) {
    let rule = this.getRule(code, options);
    if (!rule) rule = this.getRule('dev', options);
    return rule?.resolvedOptions().pluralCategories.length > 1;
  }
  getPluralFormsOfKey(code, key, options = {}) {
    return this.getSuffixes(code, options).map(suffix => `${key}${suffix}`);
  }
  getSuffixes(code, options = {}) {
    let rule = this.getRule(code, options);
    if (!rule) rule = this.getRule('dev', options);
    if (!rule) return [];
    return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map(pluralCategory => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ''}${pluralCategory}`);
  }
  getSuffix(code, count, options = {}) {
    const rule = this.getRule(code, options);
    if (rule) {
      return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ''}${rule.select(count)}`;
    }
    this.logger.warn(`no plural rule found for: ${code}`);
    return this.getSuffix('dev', count, options);
  }
}

const deepFindWithDefaults = (data, defaultData, key, keySeparator = '.', ignoreJSONStructure = true) => {
  let path = getPathWithDefaults(data, defaultData, key);
  if (!path && ignoreJSONStructure && isString(key)) {
    path = deepFind(data, key, keySeparator);
    if (path === undefined) path = deepFind(defaultData, key, keySeparator);
  }
  return path;
};
const regexSafe = val => val.replace(/\$/g, '$$$$');
class Interpolator {
  constructor(options = {}) {
    this.logger = baseLogger.create('interpolator');
    this.options = options;
    this.format = options?.interpolation?.format || (value => value);
    this.init(options);
  }
  init(options = {}) {
    if (!options.interpolation) options.interpolation = {
      escapeValue: true
    };
    const {
      escape: escape$1,
      escapeValue,
      useRawValueToEscape,
      prefix,
      prefixEscaped,
      suffix,
      suffixEscaped,
      formatSeparator,
      unescapeSuffix,
      unescapePrefix,
      nestingPrefix,
      nestingPrefixEscaped,
      nestingSuffix,
      nestingSuffixEscaped,
      nestingOptionsSeparator,
      maxReplaces,
      alwaysFormat
    } = options.interpolation;
    this.escape = escape$1 !== undefined ? escape$1 : i18next_escape;
    this.escapeValue = escapeValue !== undefined ? escapeValue : true;
    this.useRawValueToEscape = useRawValueToEscape !== undefined ? useRawValueToEscape : false;
    this.prefix = prefix ? regexEscape(prefix) : prefixEscaped || '{{';
    this.suffix = suffix ? regexEscape(suffix) : suffixEscaped || '}}';
    this.formatSeparator = formatSeparator || ',';
    this.unescapePrefix = unescapeSuffix ? '' : unescapePrefix || '-';
    this.unescapeSuffix = this.unescapePrefix ? '' : unescapeSuffix || '';
    this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape('$t(');
    this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(')');
    this.nestingOptionsSeparator = nestingOptionsSeparator || ',';
    this.maxReplaces = maxReplaces || 1000;
    this.alwaysFormat = alwaysFormat !== undefined ? alwaysFormat : false;
    this.resetRegExp();
  }
  reset() {
    if (this.options) this.init(this.options);
  }
  resetRegExp() {
    const getOrResetRegExp = (existingRegExp, pattern) => {
      if (existingRegExp?.source === pattern) {
        existingRegExp.lastIndex = 0;
        return existingRegExp;
      }
      return new RegExp(pattern, 'g');
    };
    this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
    this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
    this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(str, data, lng, options) {
    let match;
    let value;
    let replaces;
    const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    const handleFormat = key => {
      if (key.indexOf(this.formatSeparator) < 0) {
        const path = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(path, undefined, lng, {
          ...options,
          ...data,
          interpolationkey: key
        }) : path;
      }
      const p = key.split(this.formatSeparator);
      const k = p.shift().trim();
      const f = p.join(this.formatSeparator).trim();
      return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
        ...options,
        ...data,
        interpolationkey: k
      });
    };
    this.resetRegExp();
    const missingInterpolationHandler = options?.missingInterpolationHandler || this.options.missingInterpolationHandler;
    const skipOnVariables = options?.interpolation?.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    const todos = [{
      regex: this.regexpUnescape,
      safeValue: val => regexSafe(val)
    }, {
      regex: this.regexp,
      safeValue: val => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
    }];
    todos.forEach(todo => {
      replaces = 0;
      while (match = todo.regex.exec(str)) {
        const matchedVar = match[1].trim();
        value = handleFormat(matchedVar);
        if (value === undefined) {
          if (typeof missingInterpolationHandler === 'function') {
            const temp = missingInterpolationHandler(str, match, options);
            value = isString(temp) ? temp : '';
          } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
            value = '';
          } else if (skipOnVariables) {
            value = match[0];
            continue;
          } else {
            this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
            value = '';
          }
        } else if (!isString(value) && !this.useRawValueToEscape) {
          value = makeString(value);
        }
        const safeValue = todo.safeValue(value);
        str = str.replace(match[0], safeValue);
        if (skipOnVariables) {
          todo.regex.lastIndex += value.length;
          todo.regex.lastIndex -= match[0].length;
        } else {
          todo.regex.lastIndex = 0;
        }
        replaces++;
        if (replaces >= this.maxReplaces) {
          break;
        }
      }
    });
    return str;
  }
  nest(str, fc, options = {}) {
    let match;
    let value;
    let clonedOptions;
    const handleHasOptions = (key, inheritedOptions) => {
      const sep = this.nestingOptionsSeparator;
      if (key.indexOf(sep) < 0) return key;
      const c = key.split(new RegExp(`${sep}[ ]*{`));
      let optionsString = `{${c[1]}`;
      key = c[0];
      optionsString = this.interpolate(optionsString, clonedOptions);
      const matchedSingleQuotes = optionsString.match(/'/g);
      const matchedDoubleQuotes = optionsString.match(/"/g);
      if ((matchedSingleQuotes?.length ?? 0) % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
        optionsString = optionsString.replace(/'/g, '"');
      }
      try {
        clonedOptions = JSON.parse(optionsString);
        if (inheritedOptions) clonedOptions = {
          ...inheritedOptions,
          ...clonedOptions
        };
      } catch (e) {
        this.logger.warn(`failed parsing options string in nesting for key ${key}`, e);
        return `${key}${sep}${optionsString}`;
      }
      if (clonedOptions.defaultValue && clonedOptions.defaultValue.indexOf(this.prefix) > -1) delete clonedOptions.defaultValue;
      return key;
    };
    while (match = this.nestingRegexp.exec(str)) {
      let formatters = [];
      clonedOptions = {
        ...options
      };
      clonedOptions = clonedOptions.replace && !isString(clonedOptions.replace) ? clonedOptions.replace : clonedOptions;
      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;
      const keyEndIndex = /{.*}/.test(match[1]) ? match[1].lastIndexOf('}') + 1 : match[1].indexOf(this.formatSeparator);
      if (keyEndIndex !== -1) {
        formatters = match[1].slice(keyEndIndex).split(this.formatSeparator).map(elem => elem.trim()).filter(Boolean);
        match[1] = match[1].slice(0, keyEndIndex);
      }
      value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
      if (value && match[0] === str && !isString(value)) return value;
      if (!isString(value)) value = makeString(value);
      if (!value) {
        this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
        value = '';
      }
      if (formatters.length) {
        value = formatters.reduce((v, f) => this.format(v, f, options.lng, {
          ...options,
          interpolationkey: match[1].trim()
        }), value.trim());
      }
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  }
}

const parseFormatStr = formatStr => {
  let formatName = formatStr.toLowerCase().trim();
  const formatOptions = {};
  if (formatStr.indexOf('(') > -1) {
    const p = formatStr.split('(');
    formatName = p[0].toLowerCase().trim();
    const optStr = p[1].substring(0, p[1].length - 1);
    if (formatName === 'currency' && optStr.indexOf(':') < 0) {
      if (!formatOptions.currency) formatOptions.currency = optStr.trim();
    } else if (formatName === 'relativetime' && optStr.indexOf(':') < 0) {
      if (!formatOptions.range) formatOptions.range = optStr.trim();
    } else {
      const opts = optStr.split(';');
      opts.forEach(opt => {
        if (opt) {
          const [key, ...rest] = opt.split(':');
          const val = rest.join(':').trim().replace(/^'+|'+$/g, '');
          const trimmedKey = key.trim();
          if (!formatOptions[trimmedKey]) formatOptions[trimmedKey] = val;
          if (val === 'false') formatOptions[trimmedKey] = false;
          if (val === 'true') formatOptions[trimmedKey] = true;
          if (!isNaN(val)) formatOptions[trimmedKey] = parseInt(val, 10);
        }
      });
    }
  }
  return {
    formatName,
    formatOptions
  };
};
const createCachedFormatter = fn => {
  const cache = {};
  return (v, l, o) => {
    let optForCache = o;
    if (o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey]) {
      optForCache = {
        ...optForCache,
        [o.interpolationkey]: undefined
      };
    }
    const key = l + JSON.stringify(optForCache);
    let frm = cache[key];
    if (!frm) {
      frm = fn(getCleanedCode(l), o);
      cache[key] = frm;
    }
    return frm(v);
  };
};
const createNonCachedFormatter = fn => (v, l, o) => fn(getCleanedCode(l), o)(v);
class Formatter {
  constructor(options = {}) {
    this.logger = baseLogger.create('formatter');
    this.options = options;
    this.init(options);
  }
  init(services, options = {
    interpolation: {}
  }) {
    this.formatSeparator = options.interpolation.formatSeparator || ',';
    const cf = options.cacheInBuiltFormats ? createCachedFormatter : createNonCachedFormatter;
    this.formats = {
      number: cf((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt
        });
        return val => formatter.format(val);
      }),
      currency: cf((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt,
          style: 'currency'
        });
        return val => formatter.format(val);
      }),
      datetime: cf((lng, opt) => {
        const formatter = new Intl.DateTimeFormat(lng, {
          ...opt
        });
        return val => formatter.format(val);
      }),
      relativetime: cf((lng, opt) => {
        const formatter = new Intl.RelativeTimeFormat(lng, {
          ...opt
        });
        return val => formatter.format(val, opt.range || 'day');
      }),
      list: cf((lng, opt) => {
        const formatter = new Intl.ListFormat(lng, {
          ...opt
        });
        return val => formatter.format(val);
      })
    };
  }
  add(name, fc) {
    this.formats[name.toLowerCase().trim()] = fc;
  }
  addCached(name, fc) {
    this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
  }
  format(value, format, lng, options = {}) {
    const formats = format.split(this.formatSeparator);
    if (formats.length > 1 && formats[0].indexOf('(') > 1 && formats[0].indexOf(')') < 0 && formats.find(f => f.indexOf(')') > -1)) {
      const lastIndex = formats.findIndex(f => f.indexOf(')') > -1);
      formats[0] = [formats[0], ...formats.splice(1, lastIndex)].join(this.formatSeparator);
    }
    const result = formats.reduce((mem, f) => {
      const {
        formatName,
        formatOptions
      } = parseFormatStr(f);
      if (this.formats[formatName]) {
        let formatted = mem;
        try {
          const valOptions = options?.formatParams?.[options.interpolationkey] || {};
          const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
          formatted = this.formats[formatName](mem, l, {
            ...formatOptions,
            ...options,
            ...valOptions
          });
        } catch (error) {
          this.logger.warn(error);
        }
        return formatted;
      } else {
        this.logger.warn(`there was no format function for ${formatName}`);
      }
      return mem;
    }, value);
    return result;
  }
}

const removePending = (q, name) => {
  if (q.pending[name] !== undefined) {
    delete q.pending[name];
    q.pendingCount--;
  }
};
class Connector extends EventEmitter {
  constructor(backend, store, services, options = {}) {
    super();
    this.backend = backend;
    this.store = store;
    this.services = services;
    this.languageUtils = services.languageUtils;
    this.options = options;
    this.logger = baseLogger.create('backendConnector');
    this.waitingReads = [];
    this.maxParallelReads = options.maxParallelReads || 10;
    this.readingCalls = 0;
    this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
    this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
    this.state = {};
    this.queue = [];
    this.backend?.init?.(services, options.backend, options);
  }
  queueLoad(languages, namespaces, options, callback) {
    const toLoad = {};
    const pending = {};
    const toLoadLanguages = {};
    const toLoadNamespaces = {};
    languages.forEach(lng => {
      let hasAllNamespaces = true;
      namespaces.forEach(ns => {
        const name = `${lng}|${ns}`;
        if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
          this.state[name] = 2;
        } else if (this.state[name] < 0) ; else if (this.state[name] === 1) {
          if (pending[name] === undefined) pending[name] = true;
        } else {
          this.state[name] = 1;
          hasAllNamespaces = false;
          if (pending[name] === undefined) pending[name] = true;
          if (toLoad[name] === undefined) toLoad[name] = true;
          if (toLoadNamespaces[ns] === undefined) toLoadNamespaces[ns] = true;
        }
      });
      if (!hasAllNamespaces) toLoadLanguages[lng] = true;
    });
    if (Object.keys(toLoad).length || Object.keys(pending).length) {
      this.queue.push({
        pending,
        pendingCount: Object.keys(pending).length,
        loaded: {},
        errors: [],
        callback
      });
    }
    return {
      toLoad: Object.keys(toLoad),
      pending: Object.keys(pending),
      toLoadLanguages: Object.keys(toLoadLanguages),
      toLoadNamespaces: Object.keys(toLoadNamespaces)
    };
  }
  loaded(name, err, data) {
    const s = name.split('|');
    const lng = s[0];
    const ns = s[1];
    if (err) this.emit('failedLoading', lng, ns, err);
    if (!err && data) {
      this.store.addResourceBundle(lng, ns, data, undefined, undefined, {
        skipCopy: true
      });
    }
    this.state[name] = err ? -1 : 2;
    if (err && data) this.state[name] = 0;
    const loaded = {};
    this.queue.forEach(q => {
      pushPath(q.loaded, [lng], ns);
      removePending(q, name);
      if (err) q.errors.push(err);
      if (q.pendingCount === 0 && !q.done) {
        Object.keys(q.loaded).forEach(l => {
          if (!loaded[l]) loaded[l] = {};
          const loadedKeys = q.loaded[l];
          if (loadedKeys.length) {
            loadedKeys.forEach(n => {
              if (loaded[l][n] === undefined) loaded[l][n] = true;
            });
          }
        });
        q.done = true;
        if (q.errors.length) {
          q.callback(q.errors);
        } else {
          q.callback();
        }
      }
    });
    this.emit('loaded', loaded);
    this.queue = this.queue.filter(q => !q.done);
  }
  read(lng, ns, fcName, tried = 0, wait = this.retryTimeout, callback) {
    if (!lng.length) return callback(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng,
        ns,
        fcName,
        tried,
        wait,
        callback
      });
      return;
    }
    this.readingCalls++;
    const resolver = (err, data) => {
      this.readingCalls--;
      if (this.waitingReads.length > 0) {
        const next = this.waitingReads.shift();
        this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
      }
      if (err && data && tried < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data);
    };
    const fc = this.backend[fcName].bind(this.backend);
    if (fc.length === 2) {
      try {
        const r = fc(lng, ns);
        if (r && typeof r.then === 'function') {
          r.then(data => resolver(null, data)).catch(resolver);
        } else {
          resolver(null, r);
        }
      } catch (err) {
        resolver(err);
      }
      return;
    }
    return fc(lng, ns, resolver);
  }
  prepareLoading(languages, namespaces, options = {}, callback) {
    if (!this.backend) {
      this.logger.warn('No backend was added via i18next.use. Will not load resources.');
      return callback && callback();
    }
    if (isString(languages)) languages = this.languageUtils.toResolveHierarchy(languages);
    if (isString(namespaces)) namespaces = [namespaces];
    const toLoad = this.queueLoad(languages, namespaces, options, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length) callback();
      return null;
    }
    toLoad.toLoad.forEach(name => {
      this.loadOne(name);
    });
  }
  load(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {}, callback);
  }
  reload(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {
      reload: true
    }, callback);
  }
  loadOne(name, prefix = '') {
    const s = name.split('|');
    const lng = s[0];
    const ns = s[1];
    this.read(lng, ns, 'read', undefined, undefined, (err, data) => {
      if (err) this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
      if (!err && data) this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
      this.loaded(name, err, data);
    });
  }
  saveMissing(languages, namespace, key, fallbackValue, isUpdate, options = {}, clb = () => {}) {
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(namespace)) {
      this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
      return;
    }
    if (key === undefined || key === null || key === '') return;
    if (this.backend?.create) {
      const opts = {
        ...options,
        isUpdate
      };
      const fc = this.backend.create.bind(this.backend);
      if (fc.length < 6) {
        try {
          let r;
          if (fc.length === 5) {
            r = fc(languages, namespace, key, fallbackValue, opts);
          } else {
            r = fc(languages, namespace, key, fallbackValue);
          }
          if (r && typeof r.then === 'function') {
            r.then(data => clb(null, data)).catch(clb);
          } else {
            clb(null, r);
          }
        } catch (err) {
          clb(err);
        }
      } else {
        fc(languages, namespace, key, fallbackValue, clb, opts);
      }
    }
    if (!languages || !languages[0]) return;
    this.store.addResource(languages[0], namespace, key, fallbackValue);
  }
}

const get = () => ({
  debug: false,
  initAsync: true,
  ns: ['translation'],
  defaultNS: ['translation'],
  fallbackLng: ['dev'],
  fallbackNS: false,
  supportedLngs: false,
  nonExplicitSupportedLngs: false,
  load: 'all',
  preload: false,
  simplifyPluralSuffix: true,
  keySeparator: '.',
  nsSeparator: ':',
  pluralSeparator: '_',
  contextSeparator: '_',
  partialBundledLanguages: false,
  saveMissing: false,
  updateMissing: false,
  saveMissingTo: 'fallback',
  saveMissingPlurals: true,
  missingKeyHandler: false,
  missingInterpolationHandler: false,
  postProcess: false,
  postProcessPassResolved: false,
  returnNull: false,
  returnEmptyString: true,
  returnObjects: false,
  joinArrays: false,
  returnedObjectHandler: false,
  parseMissingKeyHandler: false,
  appendNamespaceToMissingKey: false,
  appendNamespaceToCIMode: false,
  overloadTranslationOptionHandler: args => {
    let ret = {};
    if (typeof args[1] === 'object') ret = args[1];
    if (isString(args[1])) ret.defaultValue = args[1];
    if (isString(args[2])) ret.tDescription = args[2];
    if (typeof args[2] === 'object' || typeof args[3] === 'object') {
      const options = args[3] || args[2];
      Object.keys(options).forEach(key => {
        ret[key] = options[key];
      });
    }
    return ret;
  },
  interpolation: {
    escapeValue: true,
    format: value => value,
    prefix: '{{',
    suffix: '}}',
    formatSeparator: ',',
    unescapePrefix: '-',
    nestingPrefix: '$t(',
    nestingSuffix: ')',
    nestingOptionsSeparator: ',',
    maxReplaces: 1000,
    skipOnVariables: true
  },
  cacheInBuiltFormats: true
});
const transformOptions = options => {
  if (isString(options.ns)) options.ns = [options.ns];
  if (isString(options.fallbackLng)) options.fallbackLng = [options.fallbackLng];
  if (isString(options.fallbackNS)) options.fallbackNS = [options.fallbackNS];
  if (options.supportedLngs?.indexOf?.('cimode') < 0) {
    options.supportedLngs = options.supportedLngs.concat(['cimode']);
  }
  if (typeof options.initImmediate === 'boolean') options.initAsync = options.initImmediate;
  return options;
};

const noop = () => {};
const bindMemberFunctions = inst => {
  const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach(mem => {
    if (typeof inst[mem] === 'function') {
      inst[mem] = inst[mem].bind(inst);
    }
  });
};
class I18n extends EventEmitter {
  constructor(options = {}, callback) {
    super();
    this.options = transformOptions(options);
    this.services = {};
    this.logger = baseLogger;
    this.modules = {
      external: []
    };
    bindMemberFunctions(this);
    if (callback && !this.isInitialized && !options.isClone) {
      if (!this.options.initAsync) {
        this.init(options, callback);
        return this;
      }
      setTimeout(() => {
        this.init(options, callback);
      }, 0);
    }
  }
  init(options = {}, callback) {
    this.isInitializing = true;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (options.defaultNS == null && options.ns) {
      if (isString(options.ns)) {
        options.defaultNS = options.ns;
      } else if (options.ns.indexOf('translation') < 0) {
        options.defaultNS = options.ns[0];
      }
    }
    const defOpts = get();
    this.options = {
      ...defOpts,
      ...this.options,
      ...transformOptions(options)
    };
    this.options.interpolation = {
      ...defOpts.interpolation,
      ...this.options.interpolation
    };
    if (options.keySeparator !== undefined) {
      this.options.userDefinedKeySeparator = options.keySeparator;
    }
    if (options.nsSeparator !== undefined) {
      this.options.userDefinedNsSeparator = options.nsSeparator;
    }
    if (typeof this.options.overloadTranslationOptionHandler !== 'function') {
      this.options.overloadTranslationOptionHandler = defOpts.overloadTranslationOptionHandler;
    }
    if (this.options.debug === true) {
      if (typeof console !== 'undefined') console.warn('i18next is maintained with support from locize.com — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com');
    }
    const createClassOnDemand = ClassOrObject => {
      if (!ClassOrObject) return null;
      if (typeof ClassOrObject === 'function') return new ClassOrObject();
      return ClassOrObject;
    };
    if (!this.options.isClone) {
      if (this.modules.logger) {
        baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
      } else {
        baseLogger.init(null, this.options);
      }
      let formatter;
      if (this.modules.formatter) {
        formatter = this.modules.formatter;
      } else {
        formatter = Formatter;
      }
      const lu = new LanguageUtil(this.options);
      this.store = new ResourceStore(this.options.resources, this.options);
      const s = this.services;
      s.logger = baseLogger;
      s.resourceStore = this.store;
      s.languageUtils = lu;
      s.pluralResolver = new PluralResolver(lu, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      });
      const usingLegacyFormatFunction = this.options.interpolation.format && this.options.interpolation.format !== defOpts.interpolation.format;
      if (usingLegacyFormatFunction) {
        this.logger.deprecate(`init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting`);
      }
      if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
        s.formatter = createClassOnDemand(formatter);
        if (s.formatter.init) s.formatter.init(s, this.options);
        this.options.interpolation.format = s.formatter.format.bind(s.formatter);
      }
      s.interpolator = new Interpolator(this.options);
      s.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      };
      s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
      s.backendConnector.on('*', (event, ...args) => {
        this.emit(event, ...args);
      });
      if (this.modules.languageDetector) {
        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
        if (s.languageDetector.init) s.languageDetector.init(s, this.options.detection, this.options);
      }
      if (this.modules.i18nFormat) {
        s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
        if (s.i18nFormat.init) s.i18nFormat.init(this);
      }
      this.translator = new Translator(this.services, this.options);
      this.translator.on('*', (event, ...args) => {
        this.emit(event, ...args);
      });
      this.modules.external.forEach(m => {
        if (m.init) m.init(this);
      });
    }
    this.format = this.options.interpolation.format;
    if (!callback) callback = noop;
    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
    }
    if (!this.services.languageDetector && !this.options.lng) {
      this.logger.warn('init: no languageDetector is used and no lng is defined');
    }
    const storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
    storeApi.forEach(fcName => {
      this[fcName] = (...args) => this.store[fcName](...args);
    });
    const storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
    storeApiChained.forEach(fcName => {
      this[fcName] = (...args) => {
        this.store[fcName](...args);
        return this;
      };
    });
    const deferred = defer();
    const load = () => {
      const finish = (err, t) => {
        this.isInitializing = false;
        if (this.isInitialized && !this.initializedStoreOnce) this.logger.warn('init: i18next is already initialized. You should call init just once!');
        this.isInitialized = true;
        if (!this.options.isClone) this.logger.log('initialized', this.options);
        this.emit('initialized', this.options);
        deferred.resolve(t);
        callback(err, t);
      };
      if (this.languages && !this.isInitialized) return finish(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, finish);
    };
    if (this.options.resources || !this.options.initAsync) {
      load();
    } else {
      setTimeout(load, 0);
    }
    return deferred;
  }
  loadResources(language, callback = noop) {
    let usedCallback = callback;
    const usedLng = isString(language) ? language : this.language;
    if (typeof language === 'function') usedCallback = language;
    if (!this.options.resources || this.options.partialBundledLanguages) {
      if (usedLng?.toLowerCase() === 'cimode' && (!this.options.preload || this.options.preload.length === 0)) return usedCallback();
      const toLoad = [];
      const append = lng => {
        if (!lng) return;
        if (lng === 'cimode') return;
        const lngs = this.services.languageUtils.toResolveHierarchy(lng);
        lngs.forEach(l => {
          if (l === 'cimode') return;
          if (toLoad.indexOf(l) < 0) toLoad.push(l);
        });
      };
      if (!usedLng) {
        const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        fallbacks.forEach(l => append(l));
      } else {
        append(usedLng);
      }
      this.options.preload?.forEach?.(l => append(l));
      this.services.backendConnector.load(toLoad, this.options.ns, e => {
        if (!e && !this.resolvedLanguage && this.language) this.setResolvedLanguage(this.language);
        usedCallback(e);
      });
    } else {
      usedCallback(null);
    }
  }
  reloadResources(lngs, ns, callback) {
    const deferred = defer();
    if (typeof lngs === 'function') {
      callback = lngs;
      lngs = undefined;
    }
    if (typeof ns === 'function') {
      callback = ns;
      ns = undefined;
    }
    if (!lngs) lngs = this.languages;
    if (!ns) ns = this.options.ns;
    if (!callback) callback = noop;
    this.services.backendConnector.reload(lngs, ns, err => {
      deferred.resolve();
      callback(err);
    });
    return deferred;
  }
  use(module) {
    if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
    if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');
    if (module.type === 'backend') {
      this.modules.backend = module;
    }
    if (module.type === 'logger' || module.log && module.warn && module.error) {
      this.modules.logger = module;
    }
    if (module.type === 'languageDetector') {
      this.modules.languageDetector = module;
    }
    if (module.type === 'i18nFormat') {
      this.modules.i18nFormat = module;
    }
    if (module.type === 'postProcessor') {
      postProcessor.addPostProcessor(module);
    }
    if (module.type === 'formatter') {
      this.modules.formatter = module;
    }
    if (module.type === '3rdParty') {
      this.modules.external.push(module);
    }
    return this;
  }
  setResolvedLanguage(l) {
    if (!l || !this.languages) return;
    if (['cimode', 'dev'].indexOf(l) > -1) return;
    for (let li = 0; li < this.languages.length; li++) {
      const lngInLngs = this.languages[li];
      if (['cimode', 'dev'].indexOf(lngInLngs) > -1) continue;
      if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
        this.resolvedLanguage = lngInLngs;
        break;
      }
    }
    if (!this.resolvedLanguage && this.languages.indexOf(l) < 0 && this.store.hasLanguageSomeTranslations(l)) {
      this.resolvedLanguage = l;
      this.languages.unshift(l);
    }
  }
  changeLanguage(lng, callback) {
    this.isLanguageChangingTo = lng;
    const deferred = defer();
    this.emit('languageChanging', lng);
    const setLngProps = l => {
      this.language = l;
      this.languages = this.services.languageUtils.toResolveHierarchy(l);
      this.resolvedLanguage = undefined;
      this.setResolvedLanguage(l);
    };
    const done = (err, l) => {
      if (l) {
        if (this.isLanguageChangingTo === lng) {
          setLngProps(l);
          this.translator.changeLanguage(l);
          this.isLanguageChangingTo = undefined;
          this.emit('languageChanged', l);
          this.logger.log('languageChanged', l);
        }
      } else {
        this.isLanguageChangingTo = undefined;
      }
      deferred.resolve((...args) => this.t(...args));
      if (callback) callback(err, (...args) => this.t(...args));
    };
    const setLng = lngs => {
      if (!lng && !lngs && this.services.languageDetector) lngs = [];
      const fl = isString(lngs) ? lngs : lngs && lngs[0];
      const l = this.store.hasLanguageSomeTranslations(fl) ? fl : this.services.languageUtils.getBestMatchFromCodes(isString(lngs) ? [lngs] : lngs);
      if (l) {
        if (!this.language) {
          setLngProps(l);
        }
        if (!this.translator.language) this.translator.changeLanguage(l);
        this.services.languageDetector?.cacheUserLanguage?.(l);
      }
      this.loadResources(l, err => {
        done(err, l);
      });
    };
    if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
      setLng(this.services.languageDetector.detect());
    } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
      if (this.services.languageDetector.detect.length === 0) {
        this.services.languageDetector.detect().then(setLng);
      } else {
        this.services.languageDetector.detect(setLng);
      }
    } else {
      setLng(lng);
    }
    return deferred;
  }
  getFixedT(lng, ns, keyPrefix) {
    const fixedT = (key, opts, ...rest) => {
      let o;
      if (typeof opts !== 'object') {
        o = this.options.overloadTranslationOptionHandler([key, opts].concat(rest));
      } else {
        o = {
          ...opts
        };
      }
      o.lng = o.lng || fixedT.lng;
      o.lngs = o.lngs || fixedT.lngs;
      o.ns = o.ns || fixedT.ns;
      if (o.keyPrefix !== '') o.keyPrefix = o.keyPrefix || keyPrefix || fixedT.keyPrefix;
      const keySeparator = this.options.keySeparator || '.';
      let resultKey;
      if (o.keyPrefix && Array.isArray(key)) {
        resultKey = key.map(k => {
          if (typeof k === 'function') k = keysFromSelector(k, {
            ...this.options,
            ...opts
          });
          return `${o.keyPrefix}${keySeparator}${k}`;
        });
      } else {
        if (typeof key === 'function') key = keysFromSelector(key, {
          ...this.options,
          ...opts
        });
        resultKey = o.keyPrefix ? `${o.keyPrefix}${keySeparator}${key}` : key;
      }
      return this.t(resultKey, o);
    };
    if (isString(lng)) {
      fixedT.lng = lng;
    } else {
      fixedT.lngs = lng;
    }
    fixedT.ns = ns;
    fixedT.keyPrefix = keyPrefix;
    return fixedT;
  }
  t(...args) {
    return this.translator?.translate(...args);
  }
  exists(...args) {
    return this.translator?.exists(...args);
  }
  setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  }
  hasLoadedNamespace(ns, options = {}) {
    if (!this.isInitialized) {
      this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
      return false;
    }
    if (!this.languages || !this.languages.length) {
      this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
      return false;
    }
    const lng = options.lng || this.resolvedLanguage || this.languages[0];
    const fallbackLng = this.options ? this.options.fallbackLng : false;
    const lastLng = this.languages[this.languages.length - 1];
    if (lng.toLowerCase() === 'cimode') return true;
    const loadNotPending = (l, n) => {
      const loadState = this.services.backendConnector.state[`${l}|${n}`];
      return loadState === -1 || loadState === 0 || loadState === 2;
    };
    if (options.precheck) {
      const preResult = options.precheck(this, loadNotPending);
      if (preResult !== undefined) return preResult;
    }
    if (this.hasResourceBundle(lng, ns)) return true;
    if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
    if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
    return false;
  }
  loadNamespaces(ns, callback) {
    const deferred = defer();
    if (!this.options.ns) {
      if (callback) callback();
      return Promise.resolve();
    }
    if (isString(ns)) ns = [ns];
    ns.forEach(n => {
      if (this.options.ns.indexOf(n) < 0) this.options.ns.push(n);
    });
    this.loadResources(err => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  loadLanguages(lngs, callback) {
    const deferred = defer();
    if (isString(lngs)) lngs = [lngs];
    const preloaded = this.options.preload || [];
    const newLngs = lngs.filter(lng => preloaded.indexOf(lng) < 0 && this.services.languageUtils.isSupportedCode(lng));
    if (!newLngs.length) {
      if (callback) callback();
      return Promise.resolve();
    }
    this.options.preload = preloaded.concat(newLngs);
    this.loadResources(err => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  dir(lng) {
    if (!lng) lng = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language);
    if (!lng) return 'rtl';
    try {
      const l = new Intl.Locale(lng);
      if (l && l.getTextInfo) {
        const ti = l.getTextInfo();
        if (ti && ti.direction) return ti.direction;
      }
    } catch (e) {}
    const rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam', 'ckb'];
    const languageUtils = this.services?.languageUtils || new LanguageUtil(get());
    if (lng.toLowerCase().indexOf('-latn') > 1) return 'ltr';
    return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
  }
  static createInstance(options = {}, callback) {
    const instance = new I18n(options, callback);
    instance.createInstance = I18n.createInstance;
    return instance;
  }
  cloneInstance(options = {}, callback = noop) {
    const forkResourceStore = options.forkResourceStore;
    if (forkResourceStore) delete options.forkResourceStore;
    const mergedOptions = {
      ...this.options,
      ...options,
      ...{
        isClone: true
      }
    };
    const clone = new I18n(mergedOptions);
    if (options.debug !== undefined || options.prefix !== undefined) {
      clone.logger = clone.logger.clone(options);
    }
    const membersToCopy = ['store', 'services', 'language'];
    membersToCopy.forEach(m => {
      clone[m] = this[m];
    });
    clone.services = {
      ...this.services
    };
    clone.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    if (forkResourceStore) {
      const clonedData = Object.keys(this.store.data).reduce((prev, l) => {
        prev[l] = {
          ...this.store.data[l]
        };
        prev[l] = Object.keys(prev[l]).reduce((acc, n) => {
          acc[n] = {
            ...prev[l][n]
          };
          return acc;
        }, prev[l]);
        return prev;
      }, {});
      clone.store = new ResourceStore(clonedData, mergedOptions);
      clone.services.resourceStore = clone.store;
    }
    if (options.interpolation) {
      const defOpts = get();
      const mergedInterpolation = {
        ...defOpts.interpolation,
        ...this.options.interpolation,
        ...options.interpolation
      };
      const mergedForInterpolator = {
        ...mergedOptions,
        interpolation: mergedInterpolation
      };
      clone.services.interpolator = new Interpolator(mergedForInterpolator);
    }
    clone.translator = new Translator(clone.services, mergedOptions);
    clone.translator.on('*', (event, ...args) => {
      clone.emit(event, ...args);
    });
    clone.init(mergedOptions, callback);
    clone.translator.options = mergedOptions;
    clone.translator.backendConnector.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    return clone;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const instance = I18n.createInstance();

const createInstance = instance.createInstance;
const dir = instance.dir;
const init = instance.init;
const loadResources = instance.loadResources;
const reloadResources = instance.reloadResources;
const use = instance.use;
const changeLanguage = instance.changeLanguage;
const getFixedT = instance.getFixedT;
const t = instance.t;
const exists = instance.exists;
const setDefaultNamespace = instance.setDefaultNamespace;
const hasLoadedNamespace = instance.hasLoadedNamespace;
const loadNamespaces = instance.loadNamespaces;
const loadLanguages = instance.loadLanguages;



;// ./node_modules/.pnpm/xshell@1.3.48_react-dom@19.2.4_react@19.2.4_/node_modules/xshell/i18n/dict.js
class Dict {
    _dict;
    constructor(_dict = {}) {
        this._dict = _dict;
    }
    get(key, language) {
        if (!key)
            return '';
        const item = this._dict[key];
        if (language)
            return item ?
                item[language] || ''
                :
                    '';
        return item;
    }
    to_resources() {
        return Object.entries(this._dict).reduce((acc, [key, item]) => {
            Object.entries(item).forEach(([language, translation]) => {
                if (!translation || !acc[language])
                    return;
                acc[language].translation[key] = translation;
            });
            return acc;
        }, {
            zh: { translation: {} },
            en: { translation: {} },
            ja: { translation: {} },
            ko: { translation: {} },
        });
    }
}
//# sourceMappingURL=dict.js.map
;// ./node_modules/.pnpm/xshell@1.3.48_react-dom@19.2.4_react@19.2.4_/node_modules/xshell/i18n/index.js


const languages = (/* unused pure expression or super */ null && (['zh', 'en', 'ja', 'ko']));
/**
    提供翻译文本功能，自动解析当前语言
    @see https://github.com/ShenHongFei/xshell/tree/master/i18n
*/
class I18N {
    static LANGUAGE_REGEXP = /^(zh|en|ja|ko)$/;
    /** (ISO 639-1 标准语言代码) 可能取 zh, en, ja, ko */
    language;
    /** hostname shortcuts */
    hosts;
    /** url prefix shortcuts */
    roots;
    /** 标记静态文本，以便扫描词条，并在运行时根据当前语言获取翻译 */
    t;
    /** render: 翻译配置字段 */
    r;
    i18next;
    /** react-i18next <Trans/> 组件 */
    Trans = ({ children }) => children;
    /** ```ts
        import dict from './dict.json'  // { "添加": { "en": "Add", "ja": "追加", "ko": "추가" } }
        
        const i18n = new I18N(dict, 'zh')  // 创建实例，传入词典 dict 并指定语言（NodeJS 环境），
        const i18n = new I18N(dict)        // 创建实例，传入词典 dict 并自动判断当前语言（浏览器环境），
        const i18n = new I18N({ })         // 创建实例，传入空词典
        ```
        @see https://github.com/ShenHongFei/xshell/tree/master/i18n
    */
    constructor(_dict, language) {
        const is_browser = typeof window !== 'undefined' && typeof location !== 'undefined';
        const dict = new Dict(_dict);
        if (!language && is_browser)
            language = (new URLSearchParams(location.search).get('language') ||
                window.language);
        if (!language)
            language = Intl.DateTimeFormat().resolvedOptions().locale.slice(0, 2);
        if (!I18N.LANGUAGE_REGEXP.test(language)) {
            if (language)
                console.error('invalid language:', language);
            language = 'zh';
        }
        // console.log('language:', language)
        this.language = language;
        this.t = (text, options) => {
            options = options || {};
            const language = options.language || this.language;
            return this.i18next.t(text, { ...options, lng: language, defaultValue: text });
        };
        this.r = (field, language = this.language) => field ?
            field[language] || field.zh || field.en || field || ''
            :
                field || '';
        // --- init i18next
        this.i18next = instance.createInstance();
        // this.i18next = i18next.createInstance({ showSupportNotice: false })
        if (is_browser)
            try {
                // 在无 React 的浏览器环境下避免 react-i18next 中执行 React.createContext() 报错
                // const React = require('react') as typeof import('react')
                const { initReactI18next, Trans: I18NextTrans } = require('react-i18next');
                this.i18next.use(initReactI18next);
                const _i18next = this.i18next;
                // 绑定 Trans 组件的 i18n 到 this.i18next, 解决多个 i18next 冲突的问题
                // react-i18next/context.js 中 i18n 实例只在模块级别维护，多次 this.i18next.use(initReactI18next) 会覆盖前面的 i18n，导致 Trans 无法翻译
                // https://github.com/i18next/react-i18next/issues/726
                this.Trans = function Trans({ i18n = _i18next, ...others }) {
                    // 简单转发，性能更好
                    return I18NextTrans({ i18n, ...others });
                    // return React.createElement(I18NextTrans, { i18n, ...others } as any, children)
                    // return <I18NextTrans {...{ i18n, ...others } }>{children}</I18NextTrans>
                };
            }
            catch { }
        this.i18next.init({
            lng: this.language,
            // LOCAL
            // debug: true,
            debug: false,
            fallbackLng: {
                en: ['zh'],
                ja: ['en', 'zh'],
                ko: ['en', 'zh']
            },
            // 禁用 : 和 . 作为 seperator
            keySeparator: false,
            nsSeparator: false,
            resources: dict.to_resources(),
            interpolation: {
                escapeValue: false
            },
            react: {
                transKeepBasicHtmlNodesFor: []
            },
        });
        if (typeof window !== 'undefined' && window && !('i18n' in window))
            window.i18n = this;
    }
    /** 加载词典文件 (需要将这两行单独放一个文件里，以保证在 import 其他文件之前执行)
        
        @example
        import dict from './dict.json'  // { "添加": { "en": "Add", "ja": "追加", "ko": "추가" } }
        i18n.init(dict)
    */
    init(dict) {
        const resources = new Dict(dict).to_resources();
        for (const language in resources)
            this.i18next.addResources(language, 'translation', resources[language].translation);
    }
    toJSON() {
        return {
            language: this.language,
        };
    }
}
//# sourceMappingURL=index.js.map
;// ./node_modules/.pnpm/xshell@1.3.48_react-dom@19.2.4_react@19.2.4_/node_modules/xshell/i18n/dict.json
const i18n_dict_namespaceObject = /*#__PURE__*/JSON.parse('{"存在":{"en":"exists"},"不存在":{"en":"not exists"},"打开文件":{"en":"open file"},"fp 必须是绝对路径，或传入 dir 参数: ":{"en":"fp must be absolute path, or pass in \'dir\' parameters:"},"读取":{"en":"read"}," 的编码可能是 ":{"en":"\'s encoding might be "},"写入":{"en":"write"},"追加":{"en":"append"},"data 不是 Buffer 或 string":{"en":"data is not a buffer or string"}," 必须是绝对路径":{"en":" must be absolute path"},"参数 fpd: ":{"en":"argument fpd: "}," 必须以 / 结尾":{"en":"must ends with /"},"fp 必须是绝对路径":{"en":"fp must be absolute path"},"删除了文件夹: ":{"en":"deleted folder: "},"删除了文件: ":{"en":"deleted file: "},"文件夹已不存在: ":{"en":"folder no longer exists: "},"文件已不存在: ":{"en":"file no longer exists: "},"fp_src 和 fp_dst 必须同为文件路径或文件夹路径":{"en":"fp_src and fp_dst must be the same as file paths or folder paths"},"fp_src 和 fp_dst 必须为完整路径":{"en":"fp_src and fp_dst must be complete paths"},"复制":{"en":"copy"},"src 和 dst 必须同为文件路径或文件夹路径":{"en":"src and dst must be the same as file paths or folder paths"},"src 和 dst 必须为完整路径":{"en":"src and dst must be complete paths"},"移动":{"en":"move"},"fp 和 fp_ 必须是绝对路径":{"en":"fp and fp_ must be absolute paths"},"重命名":{"en":"rename"},"文件已存在：":{"en":"file already exists: "},"fpd 必须是绝对路径: ":{"en":"fpd must be absolute path"},"fpd 必须以 / 结尾: ":{"en":"fpd must end with /"},"fp_real 和 fp_link 必须同为文件路径或文件夹路径":{"en":"fp_real and fp_link must be the same as file paths or folder paths"},"存在同名":{"en":"exists the same name "},"文件夹":{"en":"folder"},"文件":{"en":"file"},"，无法创建链接":{"en":", unable to create link"},"已将源文件 ":{"en":"linked src file"}," 链接到 ":{"en":" to "},"fp 必须是完整路径":{"en":"fp must be complete path"},"文件修改 (":{"en":"file changed ("},"remote.send(): websocket client 已断开":{"en":"remote.send(): websocket client disconnected"},"找不到 rpc handler":{"en":"cannot find rpc handler"},"凌晨":{"en":"early morning"},"清晨":{"en":"early morning"},"早上":{"en":"morning"},"上午":{"en":"morning"},"中午":{"en":"noon"},"下午":{"en":"afternoon"},"晚上":{"en":"night"},"深夜":{"en":"late at night"},"断言失败":{"en":"assertion failed"},"检查失败":{"en":"check failed"}," 太短":{"en":" is too short"},"xshell 正在启动":{"en":"xshell is booting"},"repl 已启动":{"en":"repl has started"},"server 正在启动":{"en":"server is starting"},"server 已启动":{"en":"server has started"},"xshell 启动完成":{"en":"xshell booted"},"xshell 正在监听: ":{"en":"xshell is listening at: "},"已加载":{"en":"loaded"},"所有模块全部加载":{"en":"all modules were loaded"},"状态码 {{status}}, 非 2xx: {{url}}":{"en":"status code {{code}} is not 2xx: {{url}}"},"请求参数:":{"en":"request.params:"},"请求体:":{"en":"request.body:"},"响应状态码:":{"en":"response.code:"},"响应错误:":{"en":"response.error:"},"响应头:":{"en":"response.headers:"},"响应体:":{"en":"response.body:"},"调用栈:":{"en":"call stack:"},"已存在":{"en":"exists"},"进程":{"en":"process"},"异常结束, 错误码:":{"en":"exited abnormally with error code:"},"信号:":{"en":"signal"},"正常结束":{"en":"exited normally"},"xshell 开始启动":{"en":"xshell is booting"},"nodejs.repl 启动成功":{"en":"nodejs.repl started successfully"},"server 启动成功":{"en":"server started successfully"},"xshell 启动成功":{"en":"xshell started successfully"},"xshell 正在退出":{"en":"xshell is exiting"},"所有模块加载成功":{"en":"all modules were loaded successfully"}," 已连接":{"en":" connected"}," 已正常关闭":{"en":" closed normally"},"被关闭":{"en":"was closed"},"原因":{"en":"reason"},"已创建文件夹":{"en":"created folder"},"已存在文件夹":{"en":"folder already exists:"}," 太短，防止误删文件":{"en":" is too short (prevent accidental deletion of files)"},"异常结束":{"en":"exited abnormally"},"结束":{"en":"exited"},"不能太短，防止误删文件":{"en":"can not be too short to prevent accidental deletion of files"},"连接出错了":{"en":"connection errored"},"超过等待时间:":{"en":"response.timeout exceeded:"},"等待 {{duration}} 秒后重试 fetch ({{_count}}) …":{"en":"Wait {{duration}} seconds to retry fetching ({{_count}}) …"},"状态码 {{status}} 非 2xx":{"en":"Status code {{status}} is not 2xx"},"传入 request 的 headers 参数中 key 应该都是小写的，实际为 {{key}}":{"en":"The key in the headers parameter of the incoming request should be all lowercase, and it is actually {{key}}"},"dir 必须以 / 结尾":{"en":"dir must end with /"},"fp 必须是文件，不能以 / 结尾":{"en":"fp must be a file and cannot end with /"},"fp 必须是绝对路径:":{"en":"fp must be an absolute path:"},"fp 必须是绝对路径，当前为:":{"en":"fp must be an absolute path, currently:"},"已正常关闭":{"en":"closed normally"},"websocket close 事件时应该已经 settled":{"en":"Promise should have been settled in websocket close event"},"连接被关闭":{"en":"connection closed"},"状态码 {{status}}, 非 2xx":{"en":"Status code {{status}}, not 2xx"},"构建 Remote 时 url 和 websocket 最多只能传一个":{"en":"When building Remote, only one url and websocket can be passed at most"},"创建 Remote 时传入的 websocket 连接已断开":{"en":"The incoming websocket connection was broken while creating the Remote"},"传入的 websocket 连接已断开":{"en":"The incoming websocket connection was disconnected"},"尝试释放未锁定的锁，这不应该发生":{"en":"Attempt to release an unlocked lock, this should not happen"},"超时错误":{"en":"timeout error"},"xshell 启动成功，用时 {{duration}}，正在监听: http://localhost:8421\\n":{"en":"xshell started successfully, took {{duration}}, is listening: http://localhost:8421\\n"},"xshell 启动成功，用时 ":{"en":"xshell started successfully, it took "},"正在监听: http://localhost:8421\\n":{"en":"listening: http://localhost:8421\\n"},"flist: 参数 fpd: \'{{fpd}}\' 必须是绝对路径":{"en":"flist: parameter fpd: \'{{fpd}}\' must be an absolute path"},"flist: 参数 fpd: \'{{fpd}}\' 必须以 / 结尾":{"en":"flist: argument fpd: \'{{fpd}}\' must end with /"},"fstat: 参数 fp: \'{{fp}}\' 必须是绝对路径":{"en":"fstat: parameter fp: \'{{fp}}\' must be an absolute path"},"不存在且无法创建文件夹 {{fpd}}":{"en":"Folder {{fpd}} does not exist and cannot be created"},"message.data 必须是数组":{"en":"message.data must be an array"},"fsend 必须传 absolute 选项或 root 文件夹":{"en":"fsend must pass absolute option or root folder"},"message.data 数组中不能有 undefined 的项, 因为 json 序列化后会变为 null":{"en":"There cannot be undefined items in the message.data array, because json will become null after serialization"},"xshell 启动成功，正在监听: http://localhost:8421":{"en":"xshell started successfully and is listening: http://localhost:8421"},"flstat: 参数 fp: \'{{fp}}\' 必须是绝对路径":{"en":"flstat: parameter fp: \'{{fp}}\' must be an absolute path"},"filter 选项只适用于 fp_src 为文件夹":{"en":"filter option only applies to fp_src for folders"},"已订阅 stdio":{"en":"subscribed to stdio"},"由于 websocket 连接关闭，stdio 订阅被关闭":{"en":"stdio subscription was closed due to websocket connection closed"},"已取消订阅 stdio":{"en":"stdio unsubscribed"},"{{name}} 启动成功，正在监听 {{ports}} 端口":{"en":"{{name}} started successfully and is listening on {{ports}} port"},"删除了文件夹":{"en":"deleted folder"},"删除了文件":{"en":"deleted file"},"已不存在文件":{"en":"file no longer exists:"},"已不存在文件夹":{"en":"folder no longer exists:"},"不支持 content-encoding: {{encoding}} 的 http 请求":{"en":"http requests with content-encoding: {{encoding}} are not supported"},"等待 {{duration}} 秒后重试 request (已尝试 {{_count}} 次) …":{"en":"Wait {{duration}} seconds before retrying request (tried {{_count}} times) …"},"fsend 必须传 absolute 选项, sea 选项, 或 fpd_root 文件夹":{"en":"fsend must be passed the absolute option, the sea option, or the fpd_root folder"},"对端关闭":{"en":"endpoint is going away"},"网络中断":{"en":"network interruption"},"chtext":{"en":"chtext"},"key":{"en":"key"}}');
;// ./node_modules/.pnpm/xshell@1.3.48_react-dom@19.2.4_react@19.2.4_/node_modules/xshell/i18n/instance.js


let i18n = new I18N(i18n_dict_namespaceObject);
const { t: instance_t, language } = i18n;

//# sourceMappingURL=instance.js.map
;// ./node_modules/.pnpm/xshell@1.3.48_react-dom@19.2.4_react@19.2.4_/node_modules/xshell/prototype.common.js


const prototype_common_emoji_regex = emoji_regex();

const prototype_common_noop = () => { };
const ident = (x) => x;
const prototype_common_select = (key) => (obj) => obj[key];
/** value 不为 null 或 undefined */
const not_empty = (value) => value !== null && value !== undefined;
/** value 为 null 或 undefined */
const empty = (value) => value === undefined || value === null;
const key_types = ['string', 'number', 'symbol'];
const is_key_type = ((key) => key_types.includes(typeof key));
function rethrow(error) {
    throw error;
}
const greater = (a, b) => a > b;
const less = (a, b) => a < b;
function to_snake_case(str) {
    return str.replace(/([A-Z])/g, '_$1')
        .toLowerCase()
        .replace('-', '_')
        .strip_if_start('_');
}
function to_space_case(str) {
    return str.replace(/([A-Z])/g, ' $1')
        .toLowerCase()
        .replaceAll('_', ' ')
        .strip_if_start(' ');
}
/** 在常量对象上添加反向映射（value -> key）
    ```ts
    const Modifier = { lshift: 0xa0, rshift: 0xa1 } as const
    set_reverse(Modifier)
    // Modifier[0xa0] === 'lshift'
    ``` */
function set_reverse(obj) {
    for (const key in obj)
        obj[obj[key]] = key;
    return obj;
}
function to_method_property_descriptors(methods) {
    return Object.fromEntries(Object.entries(methods)
        .map(([name, value]) => ([name, {
            configurable: true,
            writable: true,
            enumerable: false,
            value,
        }])));
}
function to_getter_property_descriptors(getters) {
    return Object.fromEntries(Object.entries(getters)
        .map(([name, get]) => ([name, {
            configurable: true,
            enumerable: false,
            get,
        }])));
}
const cjk = '([\u2e80-\u9fff\uf900-\ufaff])';
const quotes = {
    single: "'",
    double: '"',
    backtick: '`',
};
const brackets = {
    round: ['(', ')'],
    square: ['[', ']'],
    curly: ['{', '}'],
    pointy: ['<', '>'],
    corner: ['「', '」'],
    fat: ['【', '】'],
    tortoise_shell: ['〔', '〕'],
};
if (!globalThis.my_prototype_defined) {
    Object.defineProperties(String.prototype, {
        ...to_getter_property_descriptors({
            width() {
                const s = platform.strip_ansi(this.replace(prototype_common_emoji_regex, '  '));
                let width = 0;
                for (let i = 0; i < s.length; ++i) {
                    const code = s.codePointAt(i);
                    if ((code <= 0x1f || (code >= 0x7f && code <= 0x9f)) || // ignore control characters
                        code >= 0x300 && code <= 0x36f // ignore combining characters
                    )
                        continue;
                    // surrogates
                    if (code > 0xffff)
                        ++i;
                    width += is_codepoint_fullwidth(code) ? 2 : 1;
                }
                return width;
            },
            // ------------ 文件路径操作
            isdir() {
                return this.endsWith('/');
            },
            fp() {
                if (!this)
                    return this;
                const fp = this.replaceAll('\\', '/');
                // 转换小写盘符开头的路径
                return fp[1] === ':' && 'a' <= fp[0] && fp[0] <= 'z'
                    ? fp[0].toUpperCase() + fp.slice(1)
                    : fp;
            },
            fpd() {
                const { fp } = this;
                return fp.endsWith('/') ? fp : `${fp}/`;
            },
            fdir() {
                return this.fp.strip_end(this.fname);
            },
            fname() {
                const { fp } = this;
                const ilast = fp.lastIndexOf('/');
                if (ilast === -1)
                    return fp; // 没有斜杠时返回整个字符串
                // 以斜杠结尾的情况
                if (ilast === fp.length - 1) {
                    const iprev = fp.lastIndexOf('/', ilast - 1);
                    return iprev === -1
                        ? fp // 只有一个斜杠且在末尾
                        : fp.slice(iprev + 1);
                }
                // 返回最后一个斜杠后的内容
                return fp.slice(ilast + 1);
            },
            fext() {
                if (this.endsWith('/'))
                    return '';
                const { fname } = this;
                const index = fname.lastIndexOf('.');
                return index <= 0 ? '' : fname.slice(index + 1);
            }
        }),
        // ------------ 文本处理工具方法
        ...to_method_property_descriptors({
            truncate(width, storage = false) {
                if (storage)
                    return this.length <= width ?
                        this
                        :
                            this.slice(0, width - 2) + '··';
                const color_bak = this.startsWith('\u001b') ? this.slice(0, 5) : '';
                const s = platform.strip_ansi(this);
                if (width <= 2)
                    return this.slice(0, width);
                let i_fitted = 0;
                let fitted_width = 0;
                let cur_width = 0;
                for (let i = 0; i < s.length; i++) {
                    const code = s.codePointAt(i);
                    if ((code <= 0x1F || (code >= 0x7F && code <= 0x9F)) || // Ignore control characters
                        code >= 0x300 && code <= 0x36F // Ignore combining characters
                    )
                        continue;
                    // surrogates (codepoint 需要用两个 utf-16 编码单位表示，因此这里跳过第二个编码单位，防止重复计算显示宽度)
                    if (code > 0xFFFF)
                        i++;
                    const w = is_codepoint_fullwidth(code) ? 2 : 1;
                    if (cur_width + w + 2 <= width) {
                        i_fitted = i;
                        fitted_width += w;
                    }
                    cur_width += w;
                    if (cur_width > width) {
                        const i_fitted_next = i_fitted + 1;
                        // … 在 winterm 中对不齐，使用 ·· 代替
                        const t = s.slice(0, i_fitted_next) + ' '.repeat(width - 2 - fitted_width) + '··';
                        return color_bak ? color_bak + t + '\u001b[39m' : t;
                    }
                }
                return this;
            },
            pad(width, { character = ' ', position = 'right' } = {}) {
                const _width = this.width;
                if (_width >= width)
                    return this;
                if (position === 'right')
                    return this + character.repeat((width - _width) / character.width);
                return character.repeat(width - _width) + this;
            },
            limit(width, { character = ' ', position = 'right' } = {}) {
                return this.pad(width, { character, position }).truncate(width);
            },
            to_regexp(preservations, flags = '') {
                const preserved_chars = new Set(preservations);
                const replace_chars = Array.prototype.filter.call('|\\{}()[]^$+*?.-', (c) => !preserved_chars.has(c))
                    .map((c) => c === ']' ? '\\]' : c).join('');
                return new RegExp(this.replace(new RegExp(`[${replace_chars}]`, 'g'), '\\$&'), flags);
            },
            to_snake_case() {
                return to_snake_case(this);
            },
            to_space_case() {
                return to_space_case(this);
            },
            refmt(pattern, pattern_, preservations = '', flags = '', transformer = (name, value) => value || '', pattern_placeholder = /\{.*?\}/g) {
                // --- 转换 pattern 为 pattern_regx
                let last_end = 0;
                // placeholder matched group indexes
                let $placeholders = {};
                let regx_parts = [];
                function add_part(left, right) {
                    const part = pattern.slice(left, right);
                    if (part)
                        regx_parts.push(part.to_regexp(preservations).source.bracket());
                }
                pattern.replace(pattern_placeholder, ($0, offset) => {
                    add_part(last_end, offset);
                    last_end = offset + $0.length;
                    const placeholder = $0.slice(1, -1);
                    let [placeholder_name, placeholder_pattern] = placeholder.split(':').map(s => s.trim());
                    let optional = false;
                    if (placeholder_name.endsWith('?')) {
                        placeholder_name = placeholder_name.slice(0, -1);
                        optional = true;
                    }
                    $placeholders[placeholder_name] = regx_parts.push(placeholder_pattern ?
                        `${placeholder_pattern.bracket()}${optional ? '?' : ''}`
                        :
                            '(.*?)');
                    return '';
                });
                add_part(last_end);
                // 最后一个 (.*?) 改为贪心匹配，满足 .{suffix} 的需要
                regx_parts = regx_parts.filter(part => part);
                if (regx_parts[regx_parts.length - 1] === '(.*?)')
                    regx_parts[regx_parts.length - 1] = '(.*)';
                const pattern_regx = new RegExp(regx_parts.join(''), flags);
                // --- 根据 pattern_regx 去匹配原有字符串，获取匹配结果，生成 placeholders 词典
                const matches = pattern_regx.exec(this);
                if (!matches)
                    return this;
                const placeholders = Object.fromEntries(Object.entries($placeholders)
                    .map(([name, $i]) => [
                    [name, matches[$i]],
                    [`${name}.before`, matches[$i - 1] || ''],
                    [`${name}.after`, matches[$i + 1] || ''],
                ])
                    .flat());
                // --- 转换 pattern_ 为 replacement_str，如果有 transformer 则在遇到 placeholder 时应用
                last_end = 0;
                let replacement_parts = [];
                pattern_.replace(pattern_placeholder, ($0, offset) => {
                    replacement_parts.push(pattern_.slice(last_end, offset));
                    last_end = offset + $0.length;
                    const placeholder_name = $0.slice(1, -1);
                    replacement_parts.push(transformer(placeholder_name, placeholders[placeholder_name], placeholders));
                    return '';
                });
                replacement_parts.push(pattern_.slice(last_end));
                return this.replace(pattern_regx, replacement_parts.join(''));
            },
            find(pattern, preservations = '', flags = '', pattern_placeholder = /\{.*?\}/g) {
                // --- 转换 pattern 为 pattern_regx
                let last_end = 0;
                // placeholder matched group index
                let $placeholders = {};
                let regx_parts = [];
                function add_part(left, right) {
                    const part = pattern.slice(left, right);
                    if (part)
                        regx_parts.push(part.to_regexp(preservations).source.bracket());
                }
                pattern.replace(pattern_placeholder, ($0, offset) => {
                    add_part(last_end, offset);
                    last_end = offset + $0.length;
                    const placeholder = $0.slice(1, -1);
                    let [placeholder_name, placeholder_pattern] = placeholder.split(':').map(s => s.trim());
                    let optional = false;
                    if (placeholder_name.endsWith('?')) {
                        placeholder_name = placeholder_name.slice(0, -1);
                        optional = true;
                    }
                    $placeholders[placeholder_name] = regx_parts.push(placeholder_pattern ?
                        `${placeholder_pattern.bracket()}${optional ? '?' : ''}`
                        :
                            '(.*?)');
                    return '';
                });
                add_part(last_end);
                // 最后一个 (.*?) 改为贪心匹配，满足 .{suffix} 的需要
                regx_parts = regx_parts.filter(part => part);
                if (regx_parts[regx_parts.length - 1] === '(.*?)')
                    regx_parts[regx_parts.length - 1] = '(.*)';
                const pattern_regx = new RegExp(regx_parts.join(''), flags);
                // --- 根据 pattern_regx 去匹配原有字符串，获取匹配结果，生成 placeholders 词典
                const matches = pattern_regx.exec(this);
                if (!matches)
                    return {};
                return Object.fromEntries(Object.entries($placeholders)
                    .map(([name, $i]) => [name, matches[$i] || '']));
            },
            /** 查找子串或字符出现的次数 */
            count(search) {
                if (!search)
                    throw new Error('count 的 search 不能为空');
                let count = 0;
                for (let i = 0; (i = this.indexOf(search, i)) !== -1; i += search.length)
                    count++;
                return count;
            },
            quote(type = 'single') {
                if (type === 'psh')
                    return `& ${this.quote()}`;
                return this.surround(quotes[type]);
            },
            bracket(shape = 'round') {
                return this.surround(...brackets[shape]);
            },
            surround(left, right) {
                return left + this + (right || left);
            },
            surround_tag(tag_name) {
                return '<' + tag_name + '>' + this + '</' + tag_name + '>';
            },
            to_lf() {
                return this.replace(/\r\n/g, '\n');
            },
            rm(pattern, flags = 'g') {
                if (typeof pattern === 'string')
                    pattern = new RegExp(pattern, flags);
                return this.replace(pattern, '');
            },
            split_lines(delimiter = /\r?\n/) {
                let lines = this.split(delimiter);
                if (lines[lines.length - 1] === '')
                    lines.pop();
                return lines;
            },
            split_indent() {
                let i = 0;
                let indent = 0;
                for (; i < this.length; i++)
                    if (this[i] === ' ')
                        indent++;
                    else if (this[i] === '\t')
                        indent += 4;
                    else
                        break;
                return {
                    indent,
                    text: this.slice(i)
                };
            },
            split2(splitter, { last = false, optional = false } = {}) {
                const isplitter = last ? this.lastIndexOf(splitter) : this.indexOf(splitter);
                if (isplitter === -1)
                    if (optional)
                        return [this];
                    else
                        throw new Error(`字符串: ${this} 必须包含 splitter: ${splitter}`);
                return [this.slice(0, isplitter), this.slice(isplitter + splitter.length)];
            },
            strip_start(prefix, validate) {
                if (validate && !this.startsWith(prefix))
                    throw new Error(`字符串没有以前缀 ${prefix} 开头: ${this}`);
                return this.slice(prefix.length);
            },
            strip_if_start(prefix) {
                return this.startsWith(prefix) ? this.slice(prefix.length) : this;
            },
            strip_end(suffix, validate) {
                if (validate && !this.endsWith(suffix))
                    throw new Error(`字符串没有以后缀 ${suffix} 结尾: ${this}`);
                return this.slice(0, -suffix.length);
            },
            strip_if_end(suffix) {
                return this.endsWith(suffix) ? this.slice(0, -suffix.length) : this;
            },
            ensure_start(prefix) {
                return this.startsWith(prefix) ? this : prefix + this;
            },
            ensure_end(suffix = '\n') {
                return this.endsWith(suffix) ? this : this + suffix;
            },
            slice_from(search, { include = false, last = false, optional = false } = {}) {
                const i = last ? this.lastIndexOf(search) : this.indexOf(search);
                if (i === -1)
                    if (optional)
                        return this;
                    else
                        throw new Error(`slice_from 在字符串 ${this} 中找不到 search: ${search}`);
                else
                    return this.slice(include ? i : i + search.length);
            },
            slice_to(search, { include = false, last = false, optional = false } = {}) {
                const i = last ? this.lastIndexOf(search) : this.indexOf(search);
                if (i === -1)
                    if (optional)
                        return this;
                    else
                        throw new Error(`slice_to 在字符串 ${this} 中找不到 search: ${search}`);
                else
                    return this.slice(0, include ? i + search.length : i);
            },
            space() {
                if (!this)
                    return this;
                let text_;
                text_ = this
                    .replace(space_patterns[0], '$1 $2')
                    .replace(space_patterns[1], '$1 $2')
                    .replace(space_patterns[2], '$1$2$3')
                    .replace(space_patterns[3], '$1 $2 $3')
                    .replace(space_patterns[4], '$1 $2 $3');
                const text_bak = text_;
                text_ = text_.replace(space_patterns[5], '$1 $2 $4');
                if (text_ === text_bak)
                    text_ = text_
                        .replace(space_patterns[6], '$1 $2')
                        .replace(space_patterns[7], '$1 $2');
                return text_
                    .replace(space_patterns[8], '$1$3$5')
                    .replace(space_patterns[9], '$1$2 $3')
                    .replace(space_patterns[10], '$1 $2')
                    .replace(space_patterns[11], '$1 $2');
            }
        })
    });
    const space_patterns = [
        new RegExp(cjk + '([\'"])', 'g'),
        new RegExp('([\'"])' + cjk, 'g'),
        /(["']+)\s*(.+?)\s*(["']+)/g,
        new RegExp(cjk + '([\\+\\-\\*\\/=&\\\\\\|<>])([A-Za-z0-9])', 'g'),
        new RegExp('([A-Za-z0-9])([\\+\\-\\*\\/=&\\\\\\|<>])' + cjk, 'g'),
        new RegExp(cjk + '([\\(\\[\\{<\u201c]+(.*?)[\\)\\]\\}>\u201d]+)' + cjk, 'g'),
        new RegExp(cjk + '([\\(\\[\\{<\u201c>])', 'g'),
        new RegExp('([\\)\\]\\}>\u201d<])' + cjk, 'g'),
        /([\(\[\{<\u201c]+)(\s*)(.+?)(\s*)([\)\]\}>\u201d]+)/g,
        new RegExp(cjk + '([~!;:,\\.\\?\u2026])([A-Za-z0-9])', 'g'),
        new RegExp(cjk + '([A-Za-z0-9`\\$%\\^&\\*\\-=\\+\\\\\\|\\/@\u00a1-\u00ff\u2022\u2027\u2150-\u218f])', 'g'),
        new RegExp('([A-Za-z0-9`\\$%\\^&\\*\\-=\\+\\\\\\|\\/@\u00a1-\u00ff\u2022\u2027\u2150-\u218f])' + cjk, 'g')
    ];
    Object.defineProperties(Date.prototype, to_method_property_descriptors({
        to_str(ms) {
            return `${this.to_date_str()} ${this.to_time_str(ms)}`;
        },
        to_date_str() {
            // 2024.01.01
            return this.getFullYear() + '.' +
                String(this.getMonth() + 1).padStart(2, '0') + '.' +
                String(this.getDate()).padStart(2, '0');
        },
        to_time_str(ms) {
            // 早上 09:00:00
            const [ampm, hour] = get_twelve_hour_clock(this);
            return `${ampm} ${get_time_str(this, hour, ms, ':')}`;
        },
        to_dot_time_str(ms) {
            // 17.03.02
            return get_time_str(this, this.getHours(), ms, '.');
        },
        to_dot_str(ms) {
            return `${this.to_date_str()} ${this.to_dot_time_str(ms)}`;
        },
        to_formal_time_str(ms) {
            // 17:03:02
            return get_time_str(this, this.getHours(), ms, ':');
        },
        to_formal_str(ms) {
            return `${this.to_date_str()} ${this.to_formal_time_str(ms)}`;
        }
    }));
    function get_twelve_hour_clock(date) {
        let hour = date.getHours();
        if (hour <= 6)
            return [instance_t('凌晨'), hour];
        if (hour <= 8)
            return [instance_t('清晨'), hour];
        if (hour <= 9)
            return [instance_t('早上'), hour];
        if (hour <= 10)
            return [instance_t('上午'), hour];
        if (hour <= 12)
            return [instance_t('中午'), hour];
        hour -= 12;
        if (hour <= 5)
            return [instance_t('下午'), hour];
        if (hour <= 10)
            return [instance_t('晚上'), hour];
        return [instance_t('深夜'), hour];
    }
    function get_time_str(date, hour, ms, splitter) {
        return String(hour).padStart(2, '0') + splitter +
            String(date.getMinutes()).padStart(2, '0') + splitter +
            String(date.getSeconds()).padStart(2, '0') +
            (ms
                ? '.' + String(date.getMilliseconds()).padStart(3, '0')
                : '');
    }
    Object.defineProperties(Number.prototype, to_method_property_descriptors({
        to_fsize_str() {
            return byte_size(this);
        },
        to_bin_str() {
            return `0b${this.toString(2)}`;
        },
        to_hex_str(length) {
            const s = Math.abs(this).toString(16);
            // 长度自动对齐到 4 的倍数
            if (length === undefined)
                length = Math.ceil(s.length / 4) * 4;
            return `${this < 0 ? '-' : ''}0x${'0'.repeat(length - s.length)}${s}`;
        },
        to_oct_str() {
            return `0o${this.toString(8)}`;
        },
    }));
    Object.defineProperties(Array.prototype, {
        ...to_getter_property_descriptors({
            last() {
                return this.at(-1);
            }
        }),
        ...to_method_property_descriptors({
            trim_lines({ trim_line = true, rm_empty_lines = true, rm_last_empty_lines = false } = {}) {
                if (!this.length)
                    return this;
                let lines = this;
                if (trim_line)
                    lines = lines.map(line => line.trim());
                if (rm_empty_lines)
                    return lines.filter(Boolean);
                if (rm_last_empty_lines) {
                    const index = lines.findLastIndex(Boolean);
                    return index === -1 ? [] : lines.slice(0, index + 1);
                }
                return lines;
            },
            indent(width = 4, character = ' ') {
                const indent = character.repeat(width);
                return this.map(line => indent + line);
            },
            sum(zero, mapper) {
                if (!this.length)
                    return zero;
                // 快捷路径
                const first = this[0];
                if ((typeof first === 'number' || typeof first === 'bigint') && !mapper)
                    return this.reduce((acc, x) => acc + x, zero);
                if (is_key_type(mapper))
                    mapper = prototype_common_select(mapper);
                mapper ??= ident;
                return this.reduce((acc, x) => acc + mapper(x), zero);
            },
            max(mapper = ident, _greater = greater) {
                if (!this.length)
                    return undefined;
                if (is_key_type(mapper))
                    mapper = prototype_common_select(mapper);
                let max = mapper(this[0]);
                let imax = 0;
                for (let i = 1; i < this.length; i++) {
                    const value = mapper(this[i]);
                    if (_greater(value, max)) {
                        max = value;
                        imax = i;
                    }
                }
                return this[imax];
            },
            min(mapper = ident, _less = less) {
                if (!this.length)
                    return undefined;
                if (is_key_type(mapper))
                    mapper = prototype_common_select(mapper);
                let min = mapper(this[0]);
                let imin = 0;
                for (let i = 1; i < this.length; i++) {
                    const value = mapper(this[i]);
                    if (_less(value, min)) {
                        min = value;
                        imin = i;
                    }
                }
                return this[imin];
            },
            unique(mapper) {
                if (!mapper)
                    return [...new Set(this)];
                if (is_key_type(mapper))
                    mapper = prototype_common_select(mapper);
                let map = new Map();
                for (const x of this)
                    map.set(mapper(x), x);
                return [...map.values()];
            },
            join_lines(append = Boolean(this.length)) {
                return `${this.join('\n')}${append ? '\n' : ''}`;
            },
            select(key) {
                return this.map(prototype_common_select(key));
            }
        })
    });
    Object.defineProperties(BigInt.prototype, to_method_property_descriptors({
        to_fsize_str() {
            return byte_size(this);
        },
        toJSON() {
            return this.toString();
        }
    }));
    Object.defineProperties(Error.prototype, to_method_property_descriptors({
        toJSON() {
            return Object.fromEntries(Object.getOwnPropertyNames(this)
                .map(name => [name, this[name]]));
        }
    }));
    Object.defineProperties(Set.prototype, to_method_property_descriptors({
        map(mapfn) {
            return Array.from(this, mapfn);
        }
    }));
    Object.defineProperties(Uint8Array.prototype, to_getter_property_descriptors({
        dataview() {
            return new DataView(this.buffer, this.byteOffset, this.byteLength);
        }
    }));
}
function to_json(obj, replacer) {
    return JSON.stringify(obj, replacer, 4) + '\n';
}
function to_json_safely(obj, replacer) {
    return to_json(obj, replacer)
        .replace(/\u2028/g, '\\u2028')
        .replace(/\u2029/g, '\\u2029')
        .replace(/<\/script>/g, '<\\/script>');
}
const units = ['b', 'kb', 'mb', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb'];
const bytes_table = units.map((unit, i) => ({
    start: i === 0 ? 0 : 2 ** (i * 10),
    end: 2 ** ((i + 1) * 10),
    unit
}));
function byte_size(bytes) {
    bytes = Number(bytes);
    if (Number.isNaN(bytes)) {
        console.error(new Error('Number.byte_size() 不能传入 NaN'));
        return '';
    }
    const sign = bytes < 0 ? '-' : '';
    bytes = Math.abs(bytes);
    const { unit, start } = bytes_table.find(range => range.start <= bytes && bytes < range.end);
    return `${sign}${(start === 0 ? bytes : bytes / start).toFixed()} ${unit}`;
}
function is_codepoint_fullwidth(codepoint) {
    // code points are derived from:
    // http://www.unix.org/Public/UNIDATA/EastAsianWidth.txt
    return (!Number.isNaN(codepoint) &&
        codepoint >= 0x1100 &&
        (codepoint <= 0x115f || // hangul jamo
            codepoint === 0x201c || codepoint === 0x201d || // 
            codepoint === 0x2026 || // …
            codepoint === 0x203b || // ※
            // arrows
            (0x2190 <= codepoint && codepoint <= 0x21FF) ||
            codepoint === 0x2329 || // left-pointing angle bracket
            codepoint === 0x232a || // right-pointing angle bracket
            // ①
            (0x2460 <= codepoint && codepoint <= 0x24ff) ||
            // box drawing
            (0x2500 <= codepoint && codepoint <= 0x257f) ||
            // shapes, symbols, …
            (0x2580 <= codepoint && codepoint <= 0x2bef) ||
            // cjk radicals supplement .. enclosed cjk letters and months
            (0x2e80 <= codepoint && codepoint <= 0x3247 && codepoint !== 0x303f) ||
            // enclosed cjk letters and months .. cjk unified ideographs extension a
            (0x3250 <= codepoint && codepoint <= 0x4dbf) ||
            // cjk unified ideographs .. yi radicals
            (0x4E00 <= codepoint && codepoint <= 0xA4C6) ||
            // hangul jamo extended-a
            (0xa960 <= codepoint && codepoint <= 0xa97c) ||
            // hangul syllables
            (0xac00 <= codepoint && codepoint <= 0xd7a3) ||
            // cjk compatibility ideographs
            (0xf900 <= codepoint && codepoint <= 0xfaff) ||
            // vertical forms
            (0xfe10 <= codepoint && codepoint <= 0xfe19) ||
            // cjk compatibility forms .. small form variants
            (0xfe30 <= codepoint && codepoint <= 0xfe6b) ||
            // halfwidth and fullwidth forms
            (0xff01 <= codepoint && codepoint <= 0xff60) ||
            (0xffe0 <= codepoint && codepoint <= 0xffe6) ||
            // kana supplement
            (0x1b000 <= codepoint && codepoint <= 0x1b001) ||
            // enclosed ideographic supplement
            (0x1f200 <= codepoint && codepoint <= 0x1f251) ||
            // cjk unified ideographs extension b .. tertiary ideographic plane
            (0x20000 <= codepoint && codepoint <= 0x3fffd)));
}
//# sourceMappingURL=prototype.common.js.map
;// ./node_modules/.pnpm/xshell@1.3.48_react-dom@19.2.4_react@19.2.4_/node_modules/xshell/prototype.js




if (!globalThis.my_prototype_defined) {
    Object.defineProperties(String.prototype, {
        ...to_method_property_descriptors({
            quote_if_space(type = 'single') {
                return this.includes(' ') ? this.quote(type) : this;
            },
            trim_doc_comment() {
                return `/** ${this.slice(3, -2).replace(/\s*\*\s*/g, '  ').replace(/@(param|params|return) \{.*?\}\s*/g, '').trim()} */`;
            },
            to_base64() {
                return Buffer.from(this).toString('base64');
            },
            decode_base64(buffer = false) {
                const buf = Buffer.from(this, 'base64');
                if (buffer)
                    return buf;
                return buf.toString();
            },
            strip_ansi() {
                return platform.strip_ansi(this);
            },
            to_backslash() {
                return this.replaceAll('/', '\\');
            }
        }),
        // ------------ colors
        ...Object.fromEntries([
            'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'gray',
            'red_', 'green_', 'yellow_', 'blue_', 'magenta_', 'cyan_',
            'underline',
        ].map(color => {
            const style = color.endsWith('_') ? `${color.slice(0, -1)}Bright` : color;
            return [color, {
                    configurable: true,
                    ...external_node_util_.styleText ? {
                        get() {
                            return external_node_util_.styleText(style, this, { validateStream: false });
                        }
                    } : {
                        get() {
                            return this;
                        }
                    }
                }];
        }))
    });
    Object.defineProperties(Array.prototype, to_method_property_descriptors({
        log(limit = 10000) {
            const text = this.join('\n') + '\n';
            if (limit === -1 || this.length <= limit)
                console.log(text);
            else if (limit > 0)
                console.log(text.slice(0, limit) + '\n...'.blue);
            else
                console.log('...\n'.blue + text.slice(limit));
        },
        trim_license() {
            const i = this.indexOf('/*');
            const j = this.indexOf('*/');
            if (i === 0 && this[i + 1].includes('License'))
                return this.slice(j + 1);
            else
                return this;
        },
        split_indents() {
            return this.map(line => line.split_indent());
        },
        indent2to4() {
            return this.split_indents()
                .map(line => ' '.repeat(line.indent * 2) + line.text);
        }
    }));
}
//# sourceMappingURL=prototype.js.map
;// ./node_modules/.pnpm/xshell@1.3.48_react-dom@19.2.4_react@19.2.4_/node_modules/xshell/utils.common.js
/* unused harmony import specifier */ var utils_common_t;
/* unused harmony import specifier */ var utils_common_is_key_type;
/* unused harmony import specifier */ var utils_common_select;
/* unused harmony import specifier */ var utils_common_to_snake_case;
/* unused harmony import specifier */ var utils_common_not_empty;
/* unused harmony import specifier */ var utils_common_noop;
/* unused harmony import specifier */ var utils_common_platform;



async function utils_common_delay(milliseconds, options) {
    return utils_common_platform.delay(milliseconds, options);
}
function assert(assertion, message) {
    if (!assertion) {
        debugger;
        throw new Error(`${instance_t('断言失败')}: ${message ? `${message}: ` : ''}`);
    }
    return assertion;
}
/** 做参数校验，逻辑检查 */
function check(condition, message) {
    if (!condition) {
        debugger;
        throw new Error(message || utils_common_t('检查失败'));
    }
    return condition;
}
/** 生成随机 id (number) */
function genid() {
    return Math.random() * 2 ** 53;
}
/** 生成随机 uint32 */
function genu32() {
    return Math.random() * 2 ** 32 >>> 0;
}
function log(...args) {
    if (args.length === 2) {
        const [label, obj] = args;
        console.log(label, obj);
        return obj;
    }
    else {
        const obj = args[0];
        console.log(obj);
        return obj;
    }
}
/** 生成 0, 1, ..., n - 1 (不包括 n) 的数组，支持传入 generator 函数，通过 index 生成各个元素
    @example seq(10, i => `item-${i}`) */
function seq(n, generator) {
    let a = new Array(n);
    for (let i = 0; i < n; i++)
        a[i] = generator ? generator(i) : i;
    return a;
}
/** 数组或 iterable 去重（可按 mapper 选择或计算某个值来去重），重复值保留最后出现的那个
    - mapper?: 可以是 key (string, number, symbol) 或 (obj: any) => any */
function unique(iterable, mapper) {
    if (!mapper)
        return [...new Set(iterable)];
    if (utils_common_is_key_type(mapper))
        mapper = utils_common_select(mapper);
    let map = new Map();
    for (const x of iterable)
        map.set(mapper(x), x);
    return [...map.values()];
}
/** 字符串字典序比较 */
function strcmp(l, r) {
    if (l === r)
        return 0;
    if (l < r)
        return -1;
    return 1;
}
/** 排序对象中 keys 的顺序，返回新的对象 */
function sort_keys(obj) {
    return Object.fromEntries(Object.entries(obj)
        .sort(([key_l], [key_r]) => strcmp(key_l, key_r)));
}
/** 比较 1.10.02 这种版本号
    - l, r: 两个版本号字符串
    - loose?: `false` 宽松模式，允许两个版本号格式（位数）不一致 */
function vercmp(l, r, loose = false) {
    const lparts = l.split('.').map(x => Number(x));
    const rparts = r.split('.').map(x => Number(x));
    if (!loose && lparts.length !== rparts.length)
        throw new Error('传入 vercmp 的两个版本号格式不一致');
    const minlen = Math.min(lparts.length, rparts.length);
    for (let i = 0; i < minlen; ++i) {
        const l = lparts[i];
        const r = rparts[i];
        check(!isNaN(l) && !isNaN(r), '传入 vercmp 的版本非法');
        if (l !== r)
            return l - r;
    }
    // loose 下按短的优先，否则应该一样，为 0
    return lparts.length - rparts.length;
}
/** 将 keys, values 数组按对应的顺序组合成一个对象 */
function zip_object(keys, values) {
    return keys.reduce((obj, key, i) => {
        obj[key] = values[i];
        return obj;
    }, {});
}
/** 映射对象中的 keys, 返回新对象
    - obj: 对象
    - mapper?: `to_snake_case` (key: string) => string 或者 Record<string, string> 一对一映射键
    - overrider?: 添加一些键到返回的新对象上 */
function map_keys(obj, mapper = utils_common_to_snake_case, overrider) {
    const obj_ = Object.fromEntries(Object.entries(obj)
        .map(typeof mapper === 'function' ?
        ([key, value]) => [mapper(key), value]
        :
            ([key, value]) => [mapper[key] || key, value]));
    return (overrider ? { ...obj_, ...overrider(obj_) } : obj_);
}
/** 返回一个映射对象 keys 的函数，通常和 .map 函数一起使用 */
function get_key_mapper(mapper, overrider) {
    return (obj) => map_keys(obj, mapper, overrider);
}
/** 映射对象中的 values, 返回新对象 */
function map_values(obj, mapper) {
    return Object.fromEntries(Object.entries(obj)
        .map(([key, value]) => [key, mapper(value, key)]));
}
/** 过滤对象中的 keys, 返回新对象 */
function filter_keys(obj, filter) {
    return Object.fromEntries(Object.entries(obj)
        .filter(([key]) => filter(key)));
}
/** 过滤对象中的 values, 返回新对象
    - obj
    - filter?: `not_empty` */
function filter_values(obj, filter = utils_common_not_empty) {
    return Object.fromEntries(Object.entries(obj)
        .filter(([, value]) => filter(value)));
}
/** 简单选择对象中的部分 keys, 返回新对象 */
function pick(obj, keys) {
    return keys.reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
    }, {});
}
/** 忽略对象中的 keys, 返回新对象 */
function omit(obj, omit_keys) {
    const set = omit_keys instanceof Set;
    return filter_keys(obj, set ?
        key => !(omit_keys.has(key))
        :
            key => !(omit_keys.includes(key)));
}
/** 拼接 TypedArrays 生成一个完整的 Uint8Array */
function concat(arrays) {
    let length = 0;
    for (const a of arrays)
        length += a.byteLength;
    let buf = utils_common_platform.get_buffer(length);
    let offset = 0;
    for (const a of arrays) {
        const uint8view = new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
        buf.set(uint8view, offset);
        offset += uint8view.byteLength;
    }
    return buf;
}
let encoder = new TextEncoder();
/** 将字符串简单的编码为 utf-8 的 buffer (Uint8Array)。高频使用或者在流式处理时，考虑使用 TextEncoder 的 encodeInto 方法 */
function utils_common_encode(str) {
    return utils_common_platform.encode(str);
}
function encode_into(str, buf) {
    // 这个是直接用 v8 String::WriteUtf8 最高效的方法了
    return encoder.encodeInto(str, buf);
}
let decoder = new TextDecoder();
/** 将 utf-8 buffer (Uint8Array) 简单的解码为 string。
    在流式处理 (buffer 可能不完整) 时，应使用独立的 TextDecoder 实例调用 decode(buffer, { stream: true }) */
function decode(buffer) {
    return decoder.decode(buffer);
}
/** 比较两个 buffer 内容是否相同，第二个可以传入 string 自动编码转换后比较，
    高频调用时建议提前编码 right 并缓存 */
function buffer_equals(left, right) {
    if (typeof right === 'string')
        right = utils_common_encode(right);
    if (left.length !== right.length)
        return false;
    for (let i = 0; i < left.length; i++)
        if (left[i] !== right[i])
            return false;
    return true;
}
/** 在指定的时间 (milliseconds) 内运行某个任务，超时之后抛出错误或调用 on_timeout
    - milliseconds: 限时毫秒数
    - action?: 要等待运行的任务, async function 或 promise
    - on_timeout?: 超时后调用的函数，或者设置错误消息
        - 若传:
            - 传 string: 作为 TimeoutError 的 error message
            - 传 function: 超时时调用会调用 on_timeout，参数为 TimeoutError，然后等待 on_timeout 执行完成
                - on_timeout 函数正常运行: timeout 函数返回 null
                - on_timeout 报错: timeout 函数最终抛出这个错误
        - 若不传: 直接抛出 TimeoutError
    - print?: `true` 打印已超时任务的错误 */
function timeout(milliseconds, action, on_timeout, print = true) {
    const error = new TimeoutError(typeof on_timeout === 'string' ? on_timeout : undefined);
    let presult = defer2();
    let waiting_on_timeout = false;
    let timeout = setTimeout(async () => {
        if (typeof on_timeout === 'function')
            try {
                waiting_on_timeout = true;
                await on_timeout(error);
                presult.resolve(null);
            }
            catch (error) {
                presult.reject(error);
            }
        else
            presult.reject(error);
    }, milliseconds);
    const paction = typeof action === 'function' ? action() : action;
    paction.then(result => {
        if (presult.settled) {
            if (print)
                console.log('已超时任务最终完成了:', result);
        }
        else if (!waiting_on_timeout) {
            presult.resolve(result);
            clearTimeout(timeout);
        }
    }, error => {
        if (presult.settled) {
            if (print)
                console.error(`已超时任务的错误: ${error.message}`);
        }
        else if (!waiting_on_timeout) {
            presult.reject(error);
            clearTimeout(timeout);
        }
    });
    return presult;
}
/** 轮询尝试 action 共 times 次，每次间隔 duration
    action 返回 trusy 值时认为成功，返回 action 的结果
    如果次数用尽仍然失败，返回 null */
async function poll(duration, times, action) {
    let break_flag = false;
    function _break() {
        break_flag = true;
    }
    for (let i = 0; i < times; ++i) {
        const result = await action(_break);
        if (result)
            return result;
        if (break_flag)
            break;
        await utils_common_delay(duration);
    }
    return null;
}
/** 每天在固定时间执行操作
    - hour: 0 - 23 之间的整数，在这个点执行
    - action */
async function schedule_everyday(hour, minute, action) {
    const now = Date.now();
    let target = new Date();
    target.setHours(hour, minute, 0, 0);
    // 如果目标时间已过，设定为明天的时间
    if (now > target.getTime())
        target.setDate(target.getDate() + 1);
    // 等时间到
    await utils_common_delay(target.getTime() - now);
    for (;;) {
        try {
            await action();
        }
        catch (error) {
            // 往上抛没什么意义，打印个日志算了
            console.error(error);
        }
        // 等一天
        await utils_common_delay(1000 * 60 * 60 * 24);
    }
}
/** 模糊过滤字符串列表或对象列表，常用于根据用户输入补全或搜索过滤
    如果有完全匹配关键词的，只返回完全匹配关键词的候选项
    - query: 查询字符串，要求为全小写
    - items: TItem[], 要过滤的列表
    - keywords: string[][] 每个 item 对应一个全小写字符串的关键词数组，用于实际筛选匹配 */
function fuzzyfilter(query, items, keywords, single_char_startswith = false) {
    if (!query)
        return items;
    if (!items.length)
        return [];
    const query_lower = query.toLowerCase();
    let fullmatches = [];
    keywords.forEach((words, index) => {
        if (words.includes(query_lower))
            fullmatches.push(items[index]);
    });
    if (fullmatches.length)
        return fullmatches;
    if (single_char_startswith && query.length === 1) {
        const c = query[0];
        return items.filter((_, i) => keywords[i].some(x => x.startsWith(c)));
    }
    return items.filter((_, i) => {
        for (const str_lower of keywords[i]) {
            let j = 0;
            let not_found = false;
            for (const c of query_lower) {
                j = str_lower.indexOf(c, j) + 1;
                if (!j) { // 找不到则 j === 0
                    not_found = true;
                    break;
                }
            }
            if (!not_found)
                return true;
        }
        return false;
    });
}
function utils_common_get(obj, keypath) {
    let obj_ = obj;
    for (const key of keypath.split('.'))
        obj_ = obj_[key];
    return obj_;
}
function global_get(keypath) {
    return utils_common_get(globalThis, keypath);
}
function invoke(obj, funcpath, args) {
    const paths = funcpath.split('.');
    let obj_ = obj;
    for (let i = 0; i < paths.length - 1; i++)
        obj_ = obj_[paths[i]];
    return obj_[paths.at(-1)].call(obj_, ...args);
}
/** 时间间隔 (milliseconds) 格式化 */
function delta2str(delta) {
    if (delta < 1)
        return '0 ms';
    // [1, 100) ms
    if (delta < 100)
        return `${delta.toFixed(0)} ms`;
    // [100, 1000) ms
    // 0.8 s
    if (delta <= 950)
        return `${(delta / 1000).toFixed(1)} s`;
    // 3 s
    if (delta < 1000 * 60)
        return `${(delta / 1000).toFixed()} s`;
    // 1 min 12 s [1 min 0s, 60 min)
    const seconds = Math.trunc(delta / 1000);
    if (seconds < 60 * 60)
        return `${Math.trunc(seconds / 60)} min ${seconds % 60} s`;
    const hour = Math.trunc(seconds / 3600);
    return `${hour} h ${Math.trunc((seconds - 3600 * hour) / 60)} min ${seconds % 60} s`;
}
/** 默认日期时间格式 */
const datetime_format = 'YYYY.MM.DD HH:mm:ss';
/** 默认日期格式 */
const date_format = 'YYYY.MM.DD';
/** 默认时间格式 */
const time_format = 'HH:mm:ss';
class Timer {
    started = Date.now();
    ended = 0;
    /** 停止秒表，保存读数 */
    stop() {
        this.ended = Date.now();
    }
    /** 如果秒表未停止，获取当前秒表读数；
        如果秒表已停止，获取停止时的秒表读数; */
    get() {
        return (this.ended || Date.now()) - this.started;
    }
    /** 获取时间表示字符串，如 1.2 s
        - parenthesis?: `true` 字符串前后加上括号，如 (1.2 s) */
    getstr(parenthesis = false) {
        let s = delta2str(this.get());
        if (parenthesis)
            return s.bracket();
        else
            return s;
    }
    print() {
        console.log(this.getstr(true));
    }
    /** 重置 started */
    reset() {
        this.started = Date.now();
        this.ended = 0;
    }
    get_and_reset() {
        const result = this.get();
        this.reset();
        return result;
    }
    getstr_and_reset(parenthesis) {
        const result = this.getstr(parenthesis);
        this.reset();
        return result;
    }
}
class TimeoutError extends (/* unused pure expression or super */ null && (Error)) {
    name = 'TimeoutError';
}
/** 创建一个 promise，后续可调用 promise.resolve, promise.reject 方法设置其状态和值
    - initial?: `undefined` 传入非 undefined 值（包括 null）时直接设置为 resolved 状态
    注: 下面的方法不能标记为 aysnc function, 否则会对返回值再做一层 Promise.resolve() 导致 reject, resolve 属性丢失 */
// eslint-disable-next-line @typescript-eslint/promise-function-async
function utils_common_defer(initial) {
    if (initial === undefined) {
        let { promise, resolve, reject } = Promise.withResolvers();
        let p = promise;
        p.resolve = resolve;
        p.reject = reject;
        return p;
    }
    else {
        let p = Promise.resolve(initial);
        p.resolve = prototype_common_noop;
        p.reject = prototype_common_noop;
        return p;
    }
}
/** 有 settled 状态的 defer */
// eslint-disable-next-line @typescript-eslint/promise-function-async
function defer2(initial) {
    if (initial === undefined) {
        let settled = false;
        let { promise, resolve, reject } = Promise.withResolvers();
        let p = promise;
        p.resolve = (value) => {
            settled = true;
            resolve(value);
        };
        p.reject = (error) => {
            settled = true;
            reject(error);
        };
        Object.defineProperty(p, 'settled', {
            get() { return settled; },
            enumerable: true,
            configurable: true
        });
        return p;
    }
    else {
        let p = Promise.resolve(initial);
        p.resolve = utils_common_noop;
        p.reject = utils_common_noop;
        p.settled = true;
        return p;
    }
}
/** @example
    let lock = new Lock(redis)
    
    // 锁定资源后在 action 回调中操作资源，回调 promise 完成后自动释放资源，
    // 三秒内未成功独占资源直接抛出 TimeoutError (开始执行后不受 signal abort 影响)
    await lock.request(async redis => {
        const value = await redis.get('key')
        await redis.set('key', value * 2)
    }, AbortSignal.timeout(3000))
    
    参考:
    https://developer.mozilla.org/en-US/docs/Web/API/Web_Locks_API
    https://github.com/metarhia/web-locks
    https://www.npmjs.com/package/async-lock  */
class Lock {
    /** 如果操作不需要独占资源，可以直接通过 lock.resource 访问，否则需要通过 await lock.request() 独占资源后再访问 */
    resource;
    /** 等待链，新的 await lock.request() 调用会等待当前等待链尾部的 promise 完成，并作为新的尾部 */
    ptail = utils_common_defer(null);
    /** 查询当前资源是否属于被锁定的状态，方便在资源闲置时做一些可选操作（操作前仍需锁定），或者做一些状态展示 */
    locked = false;
    /** 可以不传 resource，表示管理某个抽象或虚拟的资源 */
    constructor(resource) {
        this.resource = resource;
    }
    /** 通过 await lock.request() 锁定资源以便独占访问，锁定资源后在 action 回调中操作资源，回调 promise 完成 (fullfilled 或 rejected) 后自动释放资源 */
    async request(action, signal) {
        signal?.throwIfAborted();
        const ptail = this.ptail;
        let pcurrent = this.ptail = utils_common_defer();
        this.locked = true;
        return new Promise((resolve, reject) => {
            // 下面两种情况，先发生的决定 request 返回的 promise 状态
            // 不管是否 aborted, 都要等资源被前一次调用释放，先 aborted 只是将控制权交回给调用者，在锁定资源后不执行 action， 直接释放
            /** 防止执行过程中 signal abort */
            let executing = false;
            signal?.addEventListener('abort', () => {
                if (!executing)
                    // 这里不能释放锁，需要等 ptail resolve 后拿到资源再释放
                    reject(signal.reason);
            }, { once: true });
            ptail.then(async () => {
                // 这里已经能保证独占访问资源
                // 如果 aborted, 可以理解为独占资源失败，调用者不会使用资源，直接释放
                if (signal?.aborted)
                    reject(signal.reason);
                else
                    // 由调用者去操作资源
                    try {
                        executing = true;
                        resolve(await action(this.resource));
                    }
                    catch (error) {
                        reject(error);
                    }
                // 下面开始释放锁
                this.locked = false;
                pcurrent.resolve();
            });
        });
    }
}
/** 过滤符合 pattern 的行 */
function grep(str, pattern) {
    return str.split_lines()
        .filter(typeof pattern === 'string'
        ? line => line.includes(pattern)
        : line => pattern.test(line))
        .join_lines();
}
function lowercase_first_letter(str) {
    return str[0].toLowerCase() + str.slice(1);
}
/** 大于 n 的最小的 2 的幂次 */
function ceil2(n) {
    let power = 1;
    // 不能用 power <<= 1, 结果可能会超过 32 bit 整数导致位运算溢出为 0，死循环
    for (; power <= n; power += power)
        ;
    return power;
}
/** 节流，最多只在时间间隔末尾调用一次，可以设置首次调用是否延后 */
function throttle(duration, func, delay_first = false) {
    let timeout = 0;
    let last = 0;
    let saved_this;
    let saved_args;
    return function throttled(...args) {
        // 当前时间间隔已预定执行，本次调用仅更新调用参数
        if (timeout) {
            saved_this = this;
            saved_args = args;
            return;
        }
        const now = Date.now();
        if (last === 0 && delay_first)
            last = now;
        const ellapsed = now - last;
        // 过了时间间隔末尾，直接执行
        if (ellapsed >= duration) {
            last = now;
            func.apply(this, args);
        }
        else { // 预定在间隔末尾执行
            saved_this = this;
            saved_args = args;
            timeout = setTimeout(() => {
                timeout = null;
                last = Date.now();
                func.apply(saved_this, saved_args);
                saved_this = null;
                saved_args = null;
            }, duration - ellapsed);
        }
    };
}
/** 防抖，间隔一段时间不再触发时调用，同时大幅优化减少 setTimeout, clearTimeout 的调用次数 */
function debounce(duration, func) {
    const half = Math.floor(duration / 2);
    let timeout;
    let last = 0;
    let saved_args;
    let saved_this;
    function debounce_callback() {
        timeout = null;
        func.apply(saved_this, saved_args);
        saved_this = null;
        saved_args = null;
    }
    return function debounced(...args) {
        if (!timeout) {
            timeout = setTimeout(debounce_callback, duration);
            last = Date.now();
            return;
        }
        const now = Date.now();
        saved_args = args;
        saved_this = this;
        if (now - last < half)
            return;
        clearTimeout(timeout);
        setTimeout(debounce_callback, duration);
        last = now;
    };
}
function tomorrow(date) {
    date = typeof date === 'undefined' ? new Date() : new Date(date);
    date.setDate(date.getDate() + 1);
    return date;
}
function to_csv_field(str) {
    return /[,"\n\r]/.test(str) ? str.replaceAll('"', '""').quote('double') : str;
}
/** 设置 error.message 同时更新 error.stack */
function set_error_message(error, message) {
    error.message = message;
    error.stack = `${error.name}: ${message}\n` +
        error.stack.slice_from('\n', { optional: true });
    return error;
}
/** 比较两个数组中的元素完全相同，数组元素用引用比较 */
function array_equals(a, b) {
    if (!a && !b)
        return true;
    if (a && !b || !a && b)
        return false;
    return a.every((x, i) => x === b[i]);
}
function nowstr(with_date = false) {
    const date = new Date();
    return with_date ? date.to_str() : date.to_time_str();
}
//# sourceMappingURL=utils.common.js.map
;// ./node_modules/.pnpm/xshell@1.3.48_react-dom@19.2.4_react@19.2.4_/node_modules/xshell/utils.js
/* unused harmony import specifier */ var util;
/* unused harmony import specifier */ var ncrypto;
/* unused harmony import specifier */ var utils_decode;







/** `180` 输出字符宽度 */
const output_width = 180;
const url_width = 52;
/** - colors?: `true` */
function set_inspect_options(colors = true) {
    util.inspect.defaultOptions.maxArrayLength = 40;
    util.inspect.defaultOptions.maxStringLength = 10000;
    util.inspect.defaultOptions.breakLength = output_width;
    util.inspect.defaultOptions.colors = colors;
    util.inspect.defaultOptions.compact = false;
    util.inspect.defaultOptions.getters = true;
    util.inspect.defaultOptions.depth = 2;
    util.inspect.defaultOptions.sorted = false;
    util.inspect.defaultOptions.showProxy = true;
    util.inspect.styles.number = 'green';
    util.inspect.styles.string = 'cyan';
    util.inspect.styles.boolean = 'blue';
    util.inspect.styles.date = 'magenta';
    util.inspect.styles.special = 'white';
}
function typed_array_to_buffer(view) {
    return Buffer.from(view.buffer, view.byteOffset, view.byteLength);
}
function log_line() {
    console.log('---');
}
function sha256(data) {
    return ncrypto.hash('sha256', data);
}
function sha1(data) {
    return ncrypto.hash('sha1', data);
}
function has_chinese(str) {
    return /[\u4E00-\u9FA5]/.test(str);
}
function escape_line_feed(str) {
    return str.replace(/\n/g, '\\n');
}
/** util.inspect(obj)
    - options
        - limit?: `10000`  传 0 时不限制
        - omit?: string[] */
function inspect(obj, options = {}) {
    if (options.omit) {
        obj = { ...obj };
        for (const key of options.omit)
            delete obj[key];
        // 改变了 obj 的引用，去掉 inspect.custom 防止无限递归 inspect
        delete obj[inspect.custom];
    }
    let text = external_node_util_.inspect(obj, options);
    const limit = options.limit ?? 10000;
    if (limit && text.length > limit)
        return `${text.slice(0, limit)}……'\u001b[39m\n`;
    else
        return text;
}
inspect.custom = external_node_util_.inspect.custom;
inspect.defaultOptions = external_node_util_.inspect.defaultOptions;
/** 根据 enabled 选项返回有 / 无颜色的字符串 (str) */
function colored(str, color, enabled = inspect.defaultOptions.colors) {
    return enabled ? str[color] : str;
}
// ------------------------------------ stream
/** 消费一个可读流 */
async function consume_stream(stream, ignore_error = false) {
    try {
        for await (const chunk of stream)
            ;
    }
    catch (error) {
        if (!ignore_error)
            throw error;
    }
}
async function* stream_to_lines(stream) {
    let buf = '';
    for await (const chunk of stream) {
        let j = 0;
        for (let i = 0; (i = chunk.indexOf('\n', j)) >= 0;) {
            let line = chunk.slice(j, i);
            if (buf) {
                line = buf + line;
                buf = '';
            }
            j = i + 1;
            yield line;
        }
        buf = chunk.slice(j);
    }
}
class WritableMemoryStream extends external_node_stream_namespaceObject.Writable {
    chunks = [];
    pbuffer = utils_common_defer();
    constructor() {
        super({ highWaterMark: 2 ** 30, decodeStrings: false });
    }
    _write(chunk, encoding, callback) {
        this.chunks.push(chunk);
        callback();
    }
    _writev(chunks, callback) {
        for (const { chunk } of chunks)
            this.chunks.push(chunk);
        callback();
    }
    _final(callback) {
        this.pbuffer.resolve(Buffer.concat(this.chunks));
        this.chunks = null;
        callback();
    }
}
/** 用 TextDecoder 通过 .pipe 方法持续的解码 process.stdout 等流，
    主要在 process.ts#start 中使用
    https://nodejs.org/api/stream.html#implementing-a-transform-stream */
class DecoderStream extends external_node_stream_namespaceObject.Transform {
    decoder;
    constructor(encoding) {
        super({ encoding: 'utf-8' });
        this.decoder = new TextDecoder(encoding);
    }
    _transform(chunk, encoding, callback) {
        assert(chunk instanceof Uint8Array);
        const str = this.decoder.decode(chunk, { stream: true });
        if (str.length)
            this.push(str, 'utf-8');
        callback();
    }
    _flush(callback) {
        const str = this.decoder.decode();
        if (str.length)
            this.push(str, 'utf-8');
        callback();
    }
}
/** 根据 range 生成整数序列 (iterable)
    - range: 取值为逗号分割的多个可用值或值区间 (不能含有空格)，比如：`8321,8322,8300-8310,11000-11999`
    - reverse?: `false` 在 range 内从后往前生成 */
function* range_to_numbers(range, reverse = false) {
    let parts = range.split(',');
    if (reverse)
        parts.reverse();
    for (const part of parts) {
        const [left, right] = part.split('-').map(n => Number(n));
        if (!right)
            yield left;
        if (reverse)
            for (let i = right; i >= left; i--)
                yield i;
        else
            for (let i = left; i <= right; i++)
                yield i;
    }
}
function decode_buffer_hex_string(str) {
    return utils_decode(Buffer.from(str.split(' ')
        .map(x => parseInt(x, 16))));
}
//# sourceMappingURL=utils.js.map
;// ./src/languageserver/database.ts


class DatabaseService {
    dfsDatabases = [];
    catalogs = [];
    dbTables = new Map();
    sharedTables = [];
    // 半分钟触发一次
    update = throttle(30000, async () => {
        try {
            this.catalogs = await connection.sendRequest('ddb/getAllCatalogs');
            this.dfsDatabases = await connection.sendRequest('ddb/getClusterDFSDatabases');
            this.sharedTables = await connection.sendRequest('ddb/getSharedTables');
        }
        catch (error) {
            console.log(`Failed to update: ${error}`);
        }
    });
    // 连续触发，30s 才能执行一次。
    throttle_update_table_of_db = throttle(30000, async (db) => {
        connection.sendRequest('ddb/listTables', db).then((tables) => this.dbTables.set(db, tables));
    });
    async update_table_of_db(db) {
        if (this.dbTables.has(db)) {
            // 如果有了，不阻塞，只更新，并且不能很频繁
            this.throttle_update_table_of_db(db);
            return;
        }
        // 没用，阻塞并等待结果
        const tables = await connection.sendRequest('ddb/listTables', db);
        this.dbTables.set(db, tables);
    }
    async getColnames(dbHandle) {
        try {
            let db = dbHandle;
            if (/['"\`]/.exec(dbHandle) && !(/(loadTable)/.exec(dbHandle))) {
                const strArr = dbHandle.replaceAll("'", '').replaceAll('"', '').replaceAll('`', '').split('.');
                const dbName = strArr?.[0] ?? '';
                const tbName = strArr?.[1] ?? '';
                db = `loadTable("${dbName}", "${tbName}")`;
            }
            const result = await connection.sendRequest('ddb/schema', db);
            return result.colDefs.select('name');
        }
        catch (error) {
            return [];
        }
    }
    async getSchemasByCatalog(catalog) {
        try {
            return await connection.sendRequest('ddb/getSchemaByCatalog', catalog);
        }
        catch (error) {
            return [];
        }
    }
    async getTablesByCatalogAndSchema(catalog, schema) {
        try {
            return await connection.sendRequest('ddb/getSchemaTables', [catalog, schema]);
        }
        catch (error) {
            return [];
        }
    }
}
const dbService = new DatabaseService();

;// ./src/languageserver/documents.ts





// Create a simple text document manager.
const documents = new node.TextDocuments(TextDocument);
documents.onDidOpen(e => {
    // handle document open
    symbolService.buildSymbolByDocument(e.document);
    dbService.update();
});
// Only keep settings for open documents
documents.onDidClose(e => {
    // handle document close
    symbolService.onCloseDocument(e.document);
});
// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
    // validateTextDocument(change.document);
    symbolService.buildSymbolByDocument(change.document);
    // dbService.update()
});
// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

;// ./src/languageserver/modules.ts



class DdbModules {
    modules = [];
    isModuleIndexInit = false;
    // 设置初始化或者更新的时候调用
    async init() {
        const files = await connection.sendRequest('lsp/getFiles');
        await this.handleInitFiles(files);
        this.isModuleIndexInit = true;
    }
    async handleInitFiles(files) {
        for (const file of files) {
            const text = await readFileByPath(file.path);
            const module = {
                uri: file.external,
                moduleName: getFileModule(text),
                filePath: file.path
            };
            this.putModule(module);
        }
    }
    async handleFileUpdate(file) {
        const text = await readFileByPath(file.path);
        const module = {
            uri: file.external,
            moduleName: getFileModule(text),
            filePath: file.path
        };
        this.putModule(module);
    }
    async handleFileDelete(file) {
        this.removeModule(file.path);
    }
    putModule(module) {
        // 先尝试 remove
        this.removeModule(module.filePath);
        this.modules.push(module);
        symbolService.buildSymbolByModule(module);
    }
    removeModule(filePath) {
        const index = this.modules.findIndex(e => e.filePath === filePath);
        if (index >= 0) {
            this.modules.splice(index, 1);
            symbolService.deleteSymbolByUri(filePath);
        }
    }
    getModules() {
        return this.modules;
    }
    getIsInitModuleIndex() {
        return this.isModuleIndexInit;
    }
}
const ddbModules = new DdbModules();
connection.onInitialized(() => {
    ddbModules.init();
});
connection.onRequest('lsp/handleFileCreate', async (uri) => {
    await ddbModules.handleFileUpdate(uri);
});
connection.onRequest('lsp/handleFileDelete', async (uri) => {
    await ddbModules.handleFileDelete(uri);
});

;// ./src/languageserver/sql-completions.ts



async function getSqlCompletions(position) {
    const items = [];
    const lineBefore = getLineContentsBeforePosition(documents.get(position.textDocument.uri).getText(), position.position);
    const extact = extractComplitionRequest(lineBefore);
    if (extact) {
        const { type, data, fromForm } = extact;
        if (type === 'from') {
            const result = await getFormCompletions.call(this, fromForm, data);
            items.push(...result);
        }
        if (type === 'update') {
            const result = await getFormCompletions.call(this, fromForm, data);
            items.push(...result);
        }
        if (type === 'insert') {
            const result = await getFormCompletions.call(this, 'only-memtable', data);
            items.push(...result);
        }
        if (type === 'colnames' || type === 'order by') {
            const tbHandle = data;
            const colnames = [];
            const colsFromSchema = await dbService.getColnames(tbHandle);
            colnames.push(...colsFromSchema);
            if (type === 'order by')
                colnames.push(...['asc', 'desc', 'nulls first', 'nulls last']);
            items.push(...colnames.map(colname => this.buildColNameCompletionItem(colname, true, false)));
        }
    }
    else {
        /** 处理 create, drop database */
        const sql = lineBefore;
        const dropDbMatch = /drop database\s*(.+)/i.exec(sql);
        if (dropDbMatch) {
            const dropMatch = dropDbMatch?.[1]?.trim() ?? '';
            if (dropMatch) {
                const form = extractTableCompletionsForm(dropMatch);
                if (['catalog', 'schema'].includes(form)) {
                    const result = await getFormCompletions.call(this, form, dropMatch);
                    items.push(...result);
                }
            }
            else {
                const result = await getFormCompletions.call(this, 'catalog', '');
                const dbResult = await dbService.dfsDatabases;
                const isHaveQuota = /["'\`]/.test(sql);
                items.push(...dbResult.map(url => this.buildDatabaseCompletionItem(url, isHaveQuota, false)));
                items.push(...result);
            }
        }
        const createDbMatch = /create database/i.exec(sql);
        if (createDbMatch)
            items.push(...dbService.catalogs.map(catalog => this.buildCatalogCompletionItem(catalog, true, false)));
    }
    return items;
}
/** 根据 from 子句中的点号数量返回相应的数据
    @param fromClause from 子句，例如 "myTable", "mySchema.myTable", "catalog.mySchema.myTable"
    @returns catalog, schema 或 tablename */
function extractTableCompletionsForm(fromClause) {
    const parts = fromClause.split('.');
    switch (parts.length) {
        case 1:
            return 'catalog';
        case 2:
            return 'schema';
        case 3:
            return 'tablename';
        default:
            return 'catalog'; // 默认返回 catalog
    }
}
function extractComplitionRequest(sql) {
    // 匹配 select ... from 模式，支持 from 后跟函数调用或表名
    const selectFromMatch = /select\s+(.+?)\s+from\s+(.*)/i.exec(sql);
    if (selectFromMatch) {
        // 从 from 子句中提取数据
        let fromClause = selectFromMatch?.[2]?.trim() ?? '';
        const match = /^(.*?)\s+(where|group by|context by|pivot by|order by)/i.exec(fromClause);
        if (match)
            fromClause = match[1].trim();
        // 检查 order by
        if (/order\s+by/i.exec(sql))
            return { type: 'order by', data: fromClause };
        // 检查 where, group by, context by, pivot by
        else if (/where|group\s+by|context\s+by|pivot\s+by/i.exec(sql))
            return { type: 'colnames', data: fromClause };
        // 处理 from 子句
        else
            return { type: 'from', fromForm: extractTableCompletionsForm(fromClause), data: fromClause };
    }
    const updateMatch = /(alter\s+table|drop\s+table|insert\s+into|update|delete\s+from)\s*(.+?)(\s+where.*|\s+set.*)?$/i.exec(sql);
    if (updateMatch) {
        let tableClause = updateMatch?.[2]?.trim() ?? '';
        let whereClause = updateMatch?.[3]?.trim() ?? '';
        if (whereClause)
            return { type: 'colnames', data: tableClause };
        if (/insert\s+into/.test(sql))
            return { type: 'insert', fromForm: extractTableCompletionsForm(tableClause), data: tableClause };
        return { type: 'update', fromForm: extractTableCompletionsForm(tableClause), data: tableClause };
    }
    const createTableMatch = /create table\s*(.+)/i.exec(sql);
    if (createTableMatch) {
        const formMatch = createTableMatch?.[1]?.trim() ?? '';
        if (formMatch) {
            const fromForm = extractTableCompletionsForm(formMatch);
            if (fromForm === 'tablename')
                return null;
            return { type: 'from', fromForm, data: formMatch };
        }
        return { type: 'update', fromForm: 'catalog', data: formMatch };
    }
    return null;
}
async function getFormCompletions(form, data, withDbUrl = false) {
    let symbolToFind = data;
    const items = [];
    if (form === 'catalog') {
        const catalogs = dbService.catalogs;
        // 也可以是 shared table
        const sharedTables = dbService.sharedTables;
        items.push(...sharedTables.map(tableName => this.buildSharedTableCompletionItem(tableName, true, false)));
        items.push(...catalogs.map(url => this.buildCatalogCompletionItem(url, true, false)));
        if (withDbUrl) {
            const isHaveQuota = /["'\`]/.test(data);
            items.push(...dbService.dfsDatabases.map(url => this.buildDatabaseCompletionItem(url, isHaveQuota, false)));
        }
    }
    const lastDotIndex = symbolToFind.lastIndexOf('.');
    const wordsBeforeLastDot = symbolToFind.substring(0, lastDotIndex);
    if (form === 'schema') {
        if (withDbUrl) {
            const isHaveQuota = /["'\`]/.test(data);
            const dbname = wordsBeforeLastDot
                .replaceAll("'", '')
                .replaceAll('"', '')
                .replaceAll('`', '');
            if (isHaveQuota) {
                await dbService.update_table_of_db(dbname);
                const dburls = dbService.dbTables.get(dbname);
                if (dburls)
                    items.push(...dburls.map(url => this.buildDatabaseCompletionItem(url, true, false)));
            }
        }
        const schemas = await dbService.getSchemasByCatalog(wordsBeforeLastDot);
        items.push(...schemas.map(schema => this.buildCatalogCompletionItem(schema, true, false)));
    }
    if (form === 'tablename') {
        const catalog = wordsBeforeLastDot.split('.')?.[0] ?? '';
        const schema = wordsBeforeLastDot.split('.')?.[1] ?? '';
        const tables = await dbService.getTablesByCatalogAndSchema(catalog, schema);
        items.push(...tables.map(tableName => this.buildTableCompletionItem(tableName, true, false)));
    }
    if (form === 'only-memtable') {
        const sharedTables = dbService.sharedTables;
        items.push(...sharedTables.map(tableName => this.buildSharedTableCompletionItem(tableName, true, false)));
    }
    return items;
}

;// ./src/languageserver/completions.ts









// This handler provides the initial list of the completion items.
connection.onCompletion(async (_textDocumentPosition) => {
    // The pass parameter contains the position of the text document in
    // which code complete got requested. For the example we ignore this
    // info and always provide the same completion items.
    const lineContent = getLineContent(documents.get(_textDocumentPosition.textDocument.uri), _textDocumentPosition.position.line);
    const { context } = _textDocumentPosition;
    const triggerChar = context?.triggerCharacter ?? '';
    const isBlankTrigger = triggerChar === ' ';
    // 忽略注释的行，目前只能做到识别单行注释
    if (lineContent.trim().startsWith('//'))
        return [];
    const items = [];
    // 模块提示暂时不可用
    // const mc = getModuleCompletions(_textDocumentPosition)
    // if (mc.length > 0)  // 如果是模块提示，那么只给模块提示，因为不太可能用其他的提示
    //     return mc
    const result = await completionsService.complete(_textDocumentPosition, isBlankTrigger);
    items.push(...result);
    return items;
});
// This handler resolves additional information for the item selected in
// the completion list.
// connection.onCompletionResolve(
//     // 一般来说用来根据item获取额外信息
//     // 其实就是一个管道，进来的是原来的 item，出去的是补充了额外信息的 item
//     // 留着参考
//     (item: CompletionItem): CompletionItem => {
//         if (item.data === 1) {
//             item.detail = 'TypeScript details'
//             item.documentation = 'TypeScript documentation'
//         }
//         return item
//     }
// )
// function getModuleCompletions (pos: TextDocumentPositionParams): CompletionItem[] {
//     const doc = documents.get(pos.textDocument.uri)
//     if (doc) {
//         const lineContent = getLineContent(doc, pos.position.line)
//         if (lineContent.trim().startsWith('use')) {
//             const modules = ddbModules.getModules()
//             return modules.map(m => {
//                 return {
//                     label: m.moduleName,
//                     kind: CompletionItemKind.Module,
//                     documentation: `Dolphin DB Module\n${m.moduleName}\n${m.path}`,
//                     insertText: m.moduleName,
//                 }
//             })
//         }
//     }
//     return [ ]
// }
function getLineContent(document, line) {
    const lineStart = node.Position.create(line, 0);
    const lineEnd = node.Position.create(line + 1, 0);
    const range = {
        start: lineStart,
        end: lineEnd,
    };
    const text = document.getText(range);
    // 如果行不存在，返回 ''
    if (!text)
        return '';
    // 去掉行尾的换行符
    return text.trimEnd();
}
class CompletionsService {
    symbolService = symbolService;
    dbService = dbService;
    getSelectCompletions = getSqlCompletions.bind(this);
    getFunctionSnippets(position) {
        const symbols = symbolService.getSymbols(position.textDocument.uri);
        const functionSymbols = symbols.filter(s => s.type === SymbolType.Function);
        const functionCompletions = functionSymbols.map(s => ({
            label: s.name,
            kind: node.CompletionItemKind.Function,
            documentation: s.metadata?.comments ? buildFunctionCommentDocs(s.metadata.comments) : '',
            insertText: `${s.name}(\${0})`,
            insertTextFormat: node.InsertTextFormat.Snippet
        }));
        return [...functionCompletions];
    }
    getVariableSnippets(position) {
        const completionItems = [];
        const uri = position.textDocument.uri;
        const currentPos = position.position;
        // 获取所有符号
        const symbols = symbolService.getSymbols(uri);
        // 找出所有作用域包含当前位置的符号
        const symbolsInScope = symbols.filter(symbol => {
            if (!symbol.metadata || !('scope' in symbol.metadata))
                return false;
            return completions_isPositionInScope(currentPos, symbol.metadata.scope);
        });
        if (symbolsInScope.length === 0)
            return completionItems;
        const notDuplicateSymbols = [];
        const duplicateSymbols = [];
        for (const symbol of symbolsInScope)
            // 不要滤掉不重复的符号
            if (!hasDuplicatesByKey(symbolsInScope, 'name'))
                notDuplicateSymbols.push(symbol);
            else
                duplicateSymbols.push(symbol);
        // 按作用域起始位置降序排序，起始位置越靠近当前位置的作用域越靠前
        duplicateSymbols.sort((a, b) => {
            const aStart = a.metadata.scope[0];
            const bStart = b.metadata.scope[0];
            if (aStart.line !== bStart.line)
                return bStart.line - aStart.line;
            return bStart.character - aStart.character;
        });
        // 获取最靠近的作用域起始位置
        let closestSymbols = [];
        if (duplicateSymbols.length > 0) {
            const closestScopeStart = duplicateSymbols[0].metadata.scope[0];
            closestSymbols = duplicateSymbols.filter(symbol => {
                const scopeStart = symbol.metadata.scope[0];
                return scopeStart.line === closestScopeStart.line && scopeStart.character === closestScopeStart.character;
            });
        }
        const symbolsToComplete = [...notDuplicateSymbols, ...closestSymbols];
        // 生成补全项
        symbolsToComplete.forEach(symbol => {
            if (symbol.type === SymbolType.Variable && symbol.metadata) {
                const varMeta = symbol.metadata;
                completionItems.push({
                    label: symbol.name,
                    kind: node.CompletionItemKind.Variable,
                    documentation: varMeta.comments || '',
                });
            }
            else if (symbol.type === SymbolType.Param && symbol.metadata)
                completionItems.push({
                    label: symbol.name,
                    kind: node.CompletionItemKind.Variable,
                    detail: `Parameter of ${symbol.metadata.funcname}`,
                });
        });
        return completionItems;
    }
    getModuleUseSnippets(position) {
        const items = [];
        const allModules = ddbModules.getModules().filter(module => module.moduleName);
        for (const module of allModules) {
            const moduleName = module.moduleName;
            const textDocument = documents.get(position.textDocument.uri);
            const line = textDocument.getText({
                start: { line: position.position.line, character: 0 },
                end: { line: position.position.line + 1, character: 0 }
            });
            // 如果当前行是 use catalog，则不提供模块补全
            if (/^use\s+catalog/i.test(line.trim()))
                continue;
            const insertText = line.trim().startsWith('use') ? `${moduleName}` : `use ${moduleName}`;
            items.push({
                label: `use ${moduleName}`,
                kind: node.CompletionItemKind.Module,
                documentation: `Use module ${moduleName}`,
                insertText: insertText,
            });
        }
        return items;
    }
    getModuleTopLevelFunctions(position) {
        const documentUri = position.textDocument.uri;
        const uses = symbolService.symbols.get(documentUri)?.use ?? [];
        const currentPisitionModuleName = symbolService.symbols.get(documentUri)?.module;
        const items = [];
        const allModules = ddbModules.getModules()
            .filter(module => module.moduleName)
            // 不要导入当前文件的模块
            .filter(module => module.moduleName !== currentPisitionModuleName);
        for (const mod of allModules) {
            const modulePath = mod.filePath;
            const symbolsInPath = symbolService.getSymbols(modulePath).filter(s => s.type === SymbolType.Function);
            for (const s of symbolsInPath) {
                const top_level = s.metadata.top_level;
                if (top_level) {
                    const argumentCompletions = s.metadata.argnames.map((arg, i) => `\$\{${i + 1}:${arg}\}`);
                    const additionalTextEdits = [];
                    if (!uses.includes(mod.moduleName))
                        if (currentPisitionModuleName)
                            // 如果存在 moduleName，则在第二行添加 `use ${moduleName}`
                            additionalTextEdits.push({
                                range: {
                                    start: { line: 1, character: 0 }, // 第二行（行索引从0开始）
                                    end: { line: 1, character: 0 }
                                },
                                newText: `use ${mod.moduleName}\n`
                            });
                        else
                            // 如果不存在 moduleName，则在第一行插入 `use ${moduleName}`
                            additionalTextEdits.push({
                                range: {
                                    start: { line: 0, character: 0 },
                                    end: { line: 0, character: 0 }
                                },
                                newText: `use ${mod.moduleName}\n`
                            });
                    items.push({
                        label: s.name,
                        kind: node.CompletionItemKind.Function,
                        documentation: {
                            kind: node.MarkupKind.Markdown,
                            value: `Function from module \`${mod.moduleName}\`\n` +
                                (s.metadata?.comments ? buildFunctionCommentDocs(s.metadata.comments).value : '')
                        },
                        insertText: `${mod.moduleName}::${s.name}(${argumentCompletions.join(', ')})`,
                        insertTextFormat: node.InsertTextFormat.Snippet,
                        additionalTextEdits
                    });
                }
            }
        }
        return items;
    }
    buildDatabaseCompletionItem(url, skipQuota, commonOrder) {
        return {
            label: skipQuota ? `${url}` : `"${url}"`,
            kind: node.CompletionItemKind.Value,
            insertText: skipQuota ? `${url}` : `"${url}"`,
            insertTextFormat: node.InsertTextFormat.Snippet,
            order: commonOrder ? undefined : 1
        };
    }
    buildColNameCompletionItem(colName, skipQuota, commonOrder) {
        return {
            label: skipQuota ? `${colName}` : `"${colName}"`,
            kind: node.CompletionItemKind.Value,
            insertText: skipQuota ? `${colName}` : `"${colName}"`,
            insertTextFormat: node.InsertTextFormat.Snippet,
            order: commonOrder ? undefined : 2
        };
    }
    buildCatalogCompletionItem(url, skipQuota, commonOrder) {
        return {
            label: skipQuota ? `${url}` : `"${url}"`,
            kind: node.CompletionItemKind.Value,
            insertText: skipQuota ? `${url}` : `"${url}"`,
            insertTextFormat: node.InsertTextFormat.Snippet,
            order: commonOrder ? undefined : 1
        };
    }
    buildTableCompletionItem(tableName, skipQuota, commonOrder) {
        return {
            label: skipQuota ? `${tableName}` : `"${tableName}"`,
            kind: node.CompletionItemKind.Value,
            insertText: skipQuota ? `${tableName}` : `"${tableName}"`,
            insertTextFormat: node.InsertTextFormat.Snippet,
            order: commonOrder ? undefined : 2
        };
    }
    buildSharedTableCompletionItem(tableName, skipQuota, commonOrder) {
        return {
            label: skipQuota ? `${tableName}` : `"${tableName}"`,
            kind: node.CompletionItemKind.Value,
            insertText: skipQuota ? `${tableName}` : `"${tableName}"`,
            insertTextFormat: node.InsertTextFormat.Snippet,
            order: commonOrder ? undefined : 1
        };
    }
    getDatabsaseSnippets(position) {
        const lineBefore = getLineContentsBeforePosition(documents.get(position.textDocument.uri).getText(), position.position);
        const dburls = dbService.dfsDatabases;
        const items = [];
        const isBalanced = isParenthesisBalanced(lineBefore);
        const funcs = ['loadTable', 'database', 'dropDatabase'];
        if (createRegexForFunctionNames(funcs).exec(lineBefore)) {
            const skipQuota = /["'\`]/.test(lineBefore[lineBefore.length - 1]);
            items.push(...dburls.map(url => this.buildDatabaseCompletionItem(url, skipQuota, isBalanced)));
        }
        return items;
    }
    getCatalogSnippets(position) {
        const items = [];
        const catalogs = dbService.catalogs;
        const lineBefore = getLineContentsBeforePosition(documents.get(position.textDocument.uri).getText(), position.position);
        const isBalanced = isParenthesisBalanced(lineBefore);
        const funcs = ['dropCatalog'];
        if (createRegexForFunctionNames(funcs).exec(lineBefore)) {
            const skipQuota = /["'\`]/.test(lineBefore[lineBefore.length - 1]);
            items.push(...catalogs.map(url => this.buildCatalogCompletionItem(url, skipQuota, isBalanced)));
        }
        return items;
    }
    async getTableSnippets(position) {
        const items = [];
        const lineBefore = getLineContentsBeforePosition(documents.get(position.textDocument.uri).getText(), position.position);
        const dburl = extractFirstloadTableArgument(lineBefore);
        const isBalanced = isParenthesisBalanced(lineBefore);
        if (dburl)
            if (dburl.startsWith("'") || dburl.startsWith('"')) {
                let db = dburl.replaceAll("'", '').replaceAll('"', '');
                await dbService.update_table_of_db(db);
                const tables = dbService.dbTables.get(db);
                const skipQuota = /["'\`]/.test(lineBefore[lineBefore.length - 1]);
                if (tables)
                    items.push(...tables.map(tableName => (this.buildTableCompletionItem(tableName, skipQuota, isBalanced))));
            }
        return items;
    }
    filterHighestOrderCompletions(items) {
        if (!items.some(item => item.order !== undefined))
            return items;
        const highestOrder = items.reduce((max, item) => (item.order !== undefined && item.order > max ? item.order : max), -Infinity);
        return items.filter(item => item.order === highestOrder);
    }
    getCommonSnippets(position) {
        return [
            {
                label: 'def',
                kind: node.CompletionItemKind.Snippet,
                documentation: 'Define a function',
                insertText: [
                    'def ${1:functionName}(${2:params}) {',
                    '\t${3:// body}',
                    '}'
                ].join('\n'),
                insertTextFormat: node.InsertTextFormat.Snippet
            }
        ];
    }
    async complete(position, isBlankTrigger = false) {
        const selectCompletions = await this.getSelectCompletions(position);
        const tableCompletions = await this.getTableSnippets(position);
        const commonCompletions = [
            ...this.getDatabsaseSnippets(position),
            ...this.getCatalogSnippets(position),
            ...this.getCommonSnippets(position),
            ...this.getFunctionSnippets(position),
            ...this.getVariableSnippets(position),
            ...this.getModuleUseSnippets(position),
            ...this.getModuleTopLevelFunctions(position),
        ];
        const items = [
            ...selectCompletions,
            ...tableCompletions,
            ...(isBlankTrigger ? [] : commonCompletions),
        ];
        return this.filterHighestOrderCompletions(items);
    }
}
// 辅助函数：判断当前位置是否在作用域内
function completions_isPositionInScope(pos, scope) {
    const [start, end] = scope;
    if (pos.line < start.line || pos.line > end.line)
        return false;
    if (pos.line === start.line && pos.character < start.character)
        return false;
    if (pos.line === end.line && pos.character > end.character)
        return false;
    return true;
}
function hasDuplicatesByKey(arr, key) {
    const seen = new Map(); // 或使用普通对象 {}  但 Map 效率更高
    for (const item of arr) {
        if (seen.has(item[key]))
            return true;
        seen.set(item[key], item);
    }
    return false;
}
const completionsService = new CompletionsService();

;// ./src/languageserver/diagnostics.ts





connection.languages.diagnostics.on(async (params) => {
    const document = documents.get(params.textDocument.uri);
    if (document !== undefined)
        return {
            kind: node.DocumentDiagnosticReportKind.Full,
            items: await validateTextDocument(document)
        };
    else
        // We don't know the document. We can either try to read it from disk
        // or we don't report problems for it.
        return {
            kind: node.DocumentDiagnosticReportKind.Full,
            items: []
        };
});
async function validateTextDocument(textDocument) {
    const text = textDocument.getText();
    const lines = text.split('\n');
    const diagnostics = [];
    lines.forEach((line, index) => {
        diagnostics.push(...validateUseModule(line, index));
    });
    return diagnostics;
}
function validateUseModule(line, lnindex) {
    // 索引必须已经建立
    if (!ddbModules.getIsInitModuleIndex())
        return [];
    const ln = line.trim();
    if (ln.startsWith('use')) {
        const moduleName = extractModuleName(ln);
        const modules = ddbModules.getModules();
        const module = modules.find(e => e.moduleName === moduleName);
        if (moduleName && !module)
            return [{
                    severity: node.DiagnosticSeverity.Warning,
                    range: {
                        start: node.Position.create(lnindex, 0),
                        end: node.Position.create(lnindex, line.length)
                    },
                    message: `Cannot find module ${moduleName} in current workspace`,
                    source: 'dolphindb'
                }];
    }
    return [];
}

;// ./src/languageserver/definitions.ts








// 通用函数：获取光标所在的单词
function definitions_getWordAtPosition(text, position) {
    const lines = text.split('\n');
    if (position.line >= lines.length)
        return { word: null, isFunction: false };
    const line = lines[position.line];
    if (position.character > line.length)
        return { word: null, isFunction: false };
    const wordRegex = /[a-zA-Z_][a-zA-Z0-9::_]*/g; // 或者 /[a-zA-Z_]+/g 取决于您的变量名规则
    let match;
    while ((match = wordRegex.exec(line)) !== null) {
        const start = match.index;
        const end = match.index + match[0].length;
        if (position.character >= start && position.character <= end) {
            // 检查word后面是否有(，判断是否为函数
            const restOfLine = line.substring(end).trimStart();
            const isFunction = restOfLine.startsWith('(');
            return { word: match[0], isFunction };
        }
    }
    return { word: null, isFunction: false };
}
// 通用函数：获取当前作用域内的符号
function getSymbolsInScope(symbols, position) {
    const symbolsInScope = symbols.filter(s => {
        if (!s.metadata || !('scope' in s.metadata))
            return false;
        return completions_isPositionInScope(position, s.metadata.scope);
    });
    // 按作用域起始位置降序排序，起始位置越靠近当前位置的作用域越靠前
    symbolsInScope.sort((a, b) => {
        const aStart = a.metadata.scope[0];
        const bStart = b.metadata.scope[0];
        if (aStart.line !== bStart.line)
            return bStart.line - aStart.line;
        return bStart.character - aStart.character;
    });
    return symbolsInScope;
}
// 通用函数：查找符号
function findSymbols(symbolsInScope, symbols, word) {
    let foundSymbols = symbolsInScope.filter(s => s.name === word);
    const funcDefs = symbols.filter(s => s.name === word && s.type === SymbolType.Function);
    if (funcDefs.length > 0)
        foundSymbols.push(...funcDefs);
    return foundSymbols;
}
// 通用函数：生成 Hover 内容
function generateHoverContent(symbol) {
    let contents = [];
    switch (symbol.type) {
        case SymbolType.Function:
            const funcMeta = symbol.metadata;
            if (funcMeta) {
                const params = funcMeta.argnames.join(', ');
                contents.push(`**Function** \`${symbol.name}(${params})\``);
                if (funcMeta.comments)
                    contents.push(`${buildFunctionCommentDocs(funcMeta.comments).value}`);
            }
            break;
        case SymbolType.Variable:
            const varMeta = symbol.metadata;
            if (varMeta) {
                contents.push(`**Variable** \`${symbol.name}\``);
                if (varMeta.comments)
                    contents.push(`${varMeta.comments.replaceAll('\n', '\\\n')}`);
            }
            break;
        case SymbolType.Param:
            const paramMeta = symbol.metadata;
            if (paramMeta)
                contents.push(`**Parameter** \`${symbol.name}\` of function \`${paramMeta.funcname}\``);
            break;
        case SymbolType.Table:
            contents.push(`**Table** \`${symbol.name}\``);
            break;
        case SymbolType.FieldName:
            contents.push(`**Field** \`${symbol.name}\``);
            break;
        case SymbolType.Database:
            contents.push(`**Database** \`${symbol.name}\``);
            break;
        default:
            contents.push(`**Symbol** \`${symbol.name}\``);
    }
    return {
        kind: node.MarkupKind.Markdown,
        value: contents.join('\n\n')
    };
}
// 通用函数：获取符号
async function getSymbolsAtPosition(documentUri, position) {
    const document = documents.get(documentUri);
    if (!document)
        return [];
    const text = document.getText();
    const { word, isFunction } = definitions_getWordAtPosition(text, position);
    if (!word)
        return [];
    const symbols = symbolService.getSymbols(document.uri);
    const symbolsInScope = getSymbolsInScope(symbols, position);
    let foundSymbols = findSymbols(symbolsInScope, symbols, word);
    // 在本文件内找不到，考虑引入的模块
    if (foundSymbols.length < 1) {
        const usedModules = symbolService.getUsedModules(document.uri);
        if (word.includes('::')) { // 完全路径的其他模块函数引用
            const moduleName = splitByLastDoubleColon(word).prefix;
            if (usedModules.includes(moduleName)) {
                const modulePath = ddbModules.getModules().find(m => m.moduleName === moduleName)?.filePath ?? '';
                const moduleSymbols = symbolService.getSymbols(modulePath);
                // 只找函数，并且必须 top_level
                foundSymbols = moduleSymbols.filter(s => s.type === SymbolType.Function
                    && s.name === splitByLastDoubleColon(word).suffix
                    && s.metadata.top_level);
            }
        }
        else
            // 非完全路径的函数引用，在所有已经利用的模块中查找
            for (const moduleName of usedModules) {
                const modulePath = ddbModules.getModules().find(m => m.moduleName === moduleName)?.filePath ?? '';
                const moduleSymbols = symbolService.getSymbols(modulePath);
                foundSymbols = foundSymbols.concat(moduleSymbols.filter(s => s.type === SymbolType.Function && s.name === word));
            }
    }
    if (isFunction)
        foundSymbols = foundSymbols.filter(s => s.type === SymbolType.Function);
    else
        foundSymbols = foundSymbols.filter(s => s.type !== SymbolType.Function);
    return foundSymbols;
}
function getModuleImportAtPosition(documentUri, position) {
    const document = documents.get(documentUri);
    if (!document)
        return null;
    const text = document.getText();
    const line = text.split('\n')[position.line];
    const moduleName = line.replace('use', '').replace(/\/\/.*$/, '').trim();
    const mod = ddbModules.getModules().find(m => m.moduleName === moduleName);
    if (mod) {
        const moduleSymbol = {
            name: moduleName,
            type: SymbolType.File,
            filePath: mod.filePath,
            position: { line: position.line, character: 0 },
        };
        return moduleSymbol;
    }
    else
        return null;
}
function splitByLastDoubleColon(input) {
    const delimiter = '::';
    const lastIndex = input.lastIndexOf(delimiter);
    if (lastIndex === -1)
        // 如果找不到 "::"，返回原始字符串作为前缀，后缀为空字符串
        return { prefix: input, suffix: '' };
    // 提取前缀和后缀
    const prefix = input.substring(0, lastIndex);
    const suffix = input.substring(lastIndex + delimiter.length);
    return { prefix, suffix };
}
// 定义查找处理器
connection.onDefinition(async ({ textDocument, position }) => {
    const symbols = await getSymbolsAtPosition(textDocument.uri, position)
        || [getModuleImportAtPosition(textDocument.uri, position)];
    if (symbols.length < 1)
        return null;
    return symbols.map(s => ({
        uri: s.filePath,
        range: {
            start: s.position,
            end: s.range?.end || s.position
        }
    }));
});
// Hover 处理器
connection.onHover(async (params) => {
    const symbols = await getSymbolsAtPosition(params.textDocument.uri, params.position);
    if (symbols.length < 1)
        return null;
    const symbol = symbols[0];
    // 生成 Hover 内容
    const hoverContent = generateHoverContent(symbol);
    if (hoverContent)
        return {
            contents: hoverContent,
            range: {
                start: symbol.position,
                end: symbol.range ? symbol.range.end : symbol.position,
            }
        };
    return null;
});

;// ./src/languageserver/index.ts






})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=languageserver.cjs.map