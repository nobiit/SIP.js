// enums can't really be declared, so they are set here.
// pulled out of individual files to avoid circular dependencies

export enum DialogStatus {
  STATUS_EARLY = 1,
  STATUS_CONFIRMED = 2
}

export enum SessionStatus {
  // Session states
  STATUS_NULL,
  STATUS_INVITE_SENT,
  STATUS_1XX_RECEIVED,
  STATUS_INVITE_RECEIVED,
  STATUS_WAITING_FOR_ANSWER,
  STATUS_ANSWERED,
  STATUS_WAITING_FOR_PRACK,
  STATUS_WAITING_FOR_ACK,
  STATUS_CANCELED,
  STATUS_TERMINATED,
  STATUS_ANSWERED_WAITING_FOR_PRACK,
  STATUS_EARLY_MEDIA,
  STATUS_CONFIRMED
}

export enum TransactionStatus {
  // Transaction states
  STATUS_TRYING = 1,
  STATUS_PROCEEDING = 2,
  STATUS_CALLING = 3,
  STATUS_ACCEPTED = 4,
  STATUS_COMPLETED = 5,
  STATUS_TERMINATED = 6,
  STATUS_CONFIRMED = 7
}

export enum TypeStrings {
  AckClientTransaction,
  ClientContext,
  ConfigurationError,
  Dialog,
  DigestAuthentication,
  DTMF,
  IncomingMessage,
  IncomingRequest,
  IncomingResponse,
  InvalidStateError,
  InviteClientContext,
  InviteClientTransaction,
  InviteServerContext,
  InviteServerTransaction,
  Logger,
  LoggerFactory,
  MethodParameterError,
  NameAddrHeader,
  NonInviteClientTransaction,
  NonInviteServerTransaction,
  NotSupportedError,
  OutgoingRequest,
  Parameters,
  PublishContext,
  ReferClientContext,
  ReferServerContext,
  RegisterContext,
  RenegotiationError,
  RequestSender,
  ServerContext,
  Session,
  SessionDescriptionHandler,
  SessionDescriptionHandlerError,
  SessionDescriptionHandlerObserver,
  Subscription,
  Transport,
  TransportError,
  UA,
  URI
}

// UA status codes
export enum UAStatus {
  STATUS_INIT,
  STATUS_STARTING,
  STATUS_READY,
  STATUS_USER_CLOSED,
  STATUS_NOT_READY
}
