// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ChangedToLoyaltyToken extends ethereum.Event {
  get params(): ChangedToLoyaltyToken__Params {
    return new ChangedToLoyaltyToken__Params(this);
  }
}

export class ChangedToLoyaltyToken__Params {
  _event: ChangedToLoyaltyToken;

  constructor(event: ChangedToLoyaltyToken) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amountToken(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amountPoint(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get balanceToken(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ChangedToPayablePoint extends ethereum.Event {
  get params(): ChangedToPayablePoint__Params {
    return new ChangedToPayablePoint__Params(this);
  }
}

export class ChangedToPayablePoint__Params {
  _event: ChangedToPayablePoint;

  constructor(event: ChangedToPayablePoint) {
    this._event = event;
  }

  get phone(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get changedPoint(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get changedValue(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get balancePoint(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Deposited extends ethereum.Event {
  get params(): Deposited__Params {
    return new Deposited__Params(this);
  }
}

export class Deposited__Params {
  _event: Deposited;

  constructor(event: Deposited) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get depositedToken(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get depositedValue(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get balanceToken(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class LoyaltyPaymentEvent extends ethereum.Event {
  get params(): LoyaltyPaymentEvent__Params {
    return new LoyaltyPaymentEvent__Params(this);
  }
}

export class LoyaltyPaymentEvent__Params {
  _event: LoyaltyPaymentEvent;

  constructor(event: LoyaltyPaymentEvent) {
    this._event = event;
  }

  get payment(): LoyaltyPaymentEventPaymentStruct {
    return changetype<LoyaltyPaymentEventPaymentStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }

  get balance(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class LoyaltyPaymentEventPaymentStruct extends ethereum.Tuple {
  get paymentId(): Bytes {
    return this[0].toBytes();
  }

  get purchaseId(): string {
    return this[1].toString();
  }

  get currency(): string {
    return this[2].toString();
  }

  get shopId(): Bytes {
    return this[3].toBytes();
  }

  get account(): Address {
    return this[4].toAddress();
  }

  get timestamp(): BigInt {
    return this[5].toBigInt();
  }

  get loyaltyType(): i32 {
    return this[6].toI32();
  }

  get paidPoint(): BigInt {
    return this[7].toBigInt();
  }

  get paidToken(): BigInt {
    return this[8].toBigInt();
  }

  get paidValue(): BigInt {
    return this[9].toBigInt();
  }

  get feePoint(): BigInt {
    return this[10].toBigInt();
  }

  get feeToken(): BigInt {
    return this[11].toBigInt();
  }

  get feeValue(): BigInt {
    return this[12].toBigInt();
  }

  get usedValueShop(): BigInt {
    return this[13].toBigInt();
  }

  get status(): i32 {
    return this[14].toI32();
  }
}

export class ProvidedPoint extends ethereum.Event {
  get params(): ProvidedPoint__Params {
    return new ProvidedPoint__Params(this);
  }
}

export class ProvidedPoint__Params {
  _event: ProvidedPoint;

  constructor(event: ProvidedPoint) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get providedPoint(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get providedValue(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get currency(): string {
    return this._event.parameters[3].value.toString();
  }

  get balancePoint(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get purchaseId(): string {
    return this._event.parameters[5].value.toString();
  }

  get shopId(): Bytes {
    return this._event.parameters[6].value.toBytes();
  }
}

export class ProvidedToken extends ethereum.Event {
  get params(): ProvidedToken__Params {
    return new ProvidedToken__Params(this);
  }
}

export class ProvidedToken__Params {
  _event: ProvidedToken;

  constructor(event: ProvidedToken) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get providedToken(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get providedValue(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get currency(): string {
    return this._event.parameters[3].value.toString();
  }

  get balanceToken(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get purchaseId(): string {
    return this._event.parameters[5].value.toString();
  }

  get shopId(): Bytes {
    return this._event.parameters[6].value.toBytes();
  }
}

export class ProvidedTokenForSettlement extends ethereum.Event {
  get params(): ProvidedTokenForSettlement__Params {
    return new ProvidedTokenForSettlement__Params(this);
  }
}

export class ProvidedTokenForSettlement__Params {
  _event: ProvidedTokenForSettlement;

  constructor(event: ProvidedTokenForSettlement) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get shopId(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get providedPoint(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get providedToken(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get providedValue(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get currency(): string {
    return this._event.parameters[5].value.toString();
  }

  get balanceToken(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get purchaseId(): string {
    return this._event.parameters[7].value.toString();
  }
}

export class ProvidedUnPayablePoint extends ethereum.Event {
  get params(): ProvidedUnPayablePoint__Params {
    return new ProvidedUnPayablePoint__Params(this);
  }
}

export class ProvidedUnPayablePoint__Params {
  _event: ProvidedUnPayablePoint;

  constructor(event: ProvidedUnPayablePoint) {
    this._event = event;
  }

  get phone(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get providedPoint(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get providedValue(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get currency(): string {
    return this._event.parameters[3].value.toString();
  }

  get balancePoint(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get purchaseId(): string {
    return this._event.parameters[5].value.toString();
  }

  get shopId(): Bytes {
    return this._event.parameters[6].value.toBytes();
  }
}

export class SavedPurchase extends ethereum.Event {
  get params(): SavedPurchase__Params {
    return new SavedPurchase__Params(this);
  }
}

export class SavedPurchase__Params {
  _event: SavedPurchase;

  constructor(event: SavedPurchase) {
    this._event = event;
  }

  get purchaseId(): string {
    return this._event.parameters[0].value.toString();
  }

  get timestamp(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get currency(): string {
    return this._event.parameters[3].value.toString();
  }

  get shopId(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get method(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get account(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get phone(): Bytes {
    return this._event.parameters[7].value.toBytes();
  }
}

export class Withdrawn extends ethereum.Event {
  get params(): Withdrawn__Params {
    return new Withdrawn__Params(this);
  }
}

export class Withdrawn__Params {
  _event: Withdrawn;

  constructor(event: Withdrawn) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get withdrawnToken(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get withdrawnValue(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get balanceToken(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Ledger__loyaltyPaymentOfResultValue0Struct extends ethereum.Tuple {
  get paymentId(): Bytes {
    return this[0].toBytes();
  }

  get purchaseId(): string {
    return this[1].toString();
  }

  get currency(): string {
    return this[2].toString();
  }

  get shopId(): Bytes {
    return this[3].toBytes();
  }

  get account(): Address {
    return this[4].toAddress();
  }

  get timestamp(): BigInt {
    return this[5].toBigInt();
  }

  get loyaltyType(): i32 {
    return this[6].toI32();
  }

  get paidPoint(): BigInt {
    return this[7].toBigInt();
  }

  get paidToken(): BigInt {
    return this[8].toBigInt();
  }

  get paidValue(): BigInt {
    return this[9].toBigInt();
  }

  get feePoint(): BigInt {
    return this[10].toBigInt();
  }

  get feeToken(): BigInt {
    return this[11].toBigInt();
  }

  get feeValue(): BigInt {
    return this[12].toBigInt();
  }

  get usedValueShop(): BigInt {
    return this[13].toBigInt();
  }

  get status(): i32 {
    return this[14].toI32();
  }
}

export class Ledger extends ethereum.SmartContract {
  static bind(address: Address): Ledger {
    return new Ledger("Ledger", address);
  }

  MAX_FEE(): BigInt {
    let result = super.call("MAX_FEE", "MAX_FEE():(uint32)", []);

    return result[0].toBigInt();
  }

  try_MAX_FEE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MAX_FEE", "MAX_FEE():(uint32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  NULL(): Bytes {
    let result = super.call("NULL", "NULL():(bytes32)", []);

    return result[0].toBytes();
  }

  try_NULL(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("NULL", "NULL():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  fee(): BigInt {
    let result = super.call("fee", "fee():(uint32)", []);

    return result[0].toBigInt();
  }

  try_fee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("fee", "fee():(uint32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  feeAccount(): Address {
    let result = super.call("feeAccount", "feeAccount():(address)", []);

    return result[0].toAddress();
  }

  try_feeAccount(): ethereum.CallResult<Address> {
    let result = super.tryCall("feeAccount", "feeAccount():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  foundationAccount(): Address {
    let result = super.call(
      "foundationAccount",
      "foundationAccount():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_foundationAccount(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "foundationAccount",
      "foundationAccount():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isAvailablePaymentId(_paymentId: Bytes): boolean {
    let result = super.call(
      "isAvailablePaymentId",
      "isAvailablePaymentId(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(_paymentId)]
    );

    return result[0].toBoolean();
  }

  try_isAvailablePaymentId(_paymentId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isAvailablePaymentId",
      "isAvailablePaymentId(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(_paymentId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  loyaltyPaymentOf(
    _paymentId: Bytes
  ): Ledger__loyaltyPaymentOfResultValue0Struct {
    let result = super.call(
      "loyaltyPaymentOf",
      "loyaltyPaymentOf(bytes32):((bytes32,string,string,bytes32,address,uint256,uint8,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint8))",
      [ethereum.Value.fromFixedBytes(_paymentId)]
    );

    return changetype<Ledger__loyaltyPaymentOfResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_loyaltyPaymentOf(
    _paymentId: Bytes
  ): ethereum.CallResult<Ledger__loyaltyPaymentOfResultValue0Struct> {
    let result = super.tryCall(
      "loyaltyPaymentOf",
      "loyaltyPaymentOf(bytes32):((bytes32,string,string,bytes32,address,uint256,uint8,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint8))",
      [ethereum.Value.fromFixedBytes(_paymentId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Ledger__loyaltyPaymentOfResultValue0Struct>(value[0].toTuple())
    );
  }

  loyaltyTypeOf(_account: Address): i32 {
    let result = super.call("loyaltyTypeOf", "loyaltyTypeOf(address):(uint8)", [
      ethereum.Value.fromAddress(_account)
    ]);

    return result[0].toI32();
  }

  try_loyaltyTypeOf(_account: Address): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "loyaltyTypeOf",
      "loyaltyTypeOf(address):(uint8)",
      [ethereum.Value.fromAddress(_account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  nonceOf(_account: Address): BigInt {
    let result = super.call("nonceOf", "nonceOf(address):(uint256)", [
      ethereum.Value.fromAddress(_account)
    ]);

    return result[0].toBigInt();
  }

  try_nonceOf(_account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nonceOf", "nonceOf(address):(uint256)", [
      ethereum.Value.fromAddress(_account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  pointBalanceOf(_account: Address): BigInt {
    let result = super.call(
      "pointBalanceOf",
      "pointBalanceOf(address):(uint256)",
      [ethereum.Value.fromAddress(_account)]
    );

    return result[0].toBigInt();
  }

  try_pointBalanceOf(_account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "pointBalanceOf",
      "pointBalanceOf(address):(uint256)",
      [ethereum.Value.fromAddress(_account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  settlementAccount(): Address {
    let result = super.call(
      "settlementAccount",
      "settlementAccount():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_settlementAccount(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "settlementAccount",
      "settlementAccount():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  temporaryAddress(): Address {
    let result = super.call(
      "temporaryAddress",
      "temporaryAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_temporaryAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "temporaryAddress",
      "temporaryAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokenBalanceOf(_account: Address): BigInt {
    let result = super.call(
      "tokenBalanceOf",
      "tokenBalanceOf(address):(uint256)",
      [ethereum.Value.fromAddress(_account)]
    );

    return result[0].toBigInt();
  }

  try_tokenBalanceOf(_account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenBalanceOf",
      "tokenBalanceOf(address):(uint256)",
      [ethereum.Value.fromAddress(_account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  unPayablePointBalanceOf(_hash: Bytes): BigInt {
    let result = super.call(
      "unPayablePointBalanceOf",
      "unPayablePointBalanceOf(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(_hash)]
    );

    return result[0].toBigInt();
  }

  try_unPayablePointBalanceOf(_hash: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "unPayablePointBalanceOf",
      "unPayablePointBalanceOf(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(_hash)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _foundationAccount(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _settlementAccount(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _feeAccount(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _certifierAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _validatorAddress(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _linkCollectionAddress(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _currencyRateAddress(): Address {
    return this._call.inputValues[7].value.toAddress();
  }

  get _shopCollectionAddress(): Address {
    return this._call.inputValues[8].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ChangeToLoyaltyTokenCall extends ethereum.Call {
  get inputs(): ChangeToLoyaltyTokenCall__Inputs {
    return new ChangeToLoyaltyTokenCall__Inputs(this);
  }

  get outputs(): ChangeToLoyaltyTokenCall__Outputs {
    return new ChangeToLoyaltyTokenCall__Outputs(this);
  }
}

export class ChangeToLoyaltyTokenCall__Inputs {
  _call: ChangeToLoyaltyTokenCall;

  constructor(call: ChangeToLoyaltyTokenCall) {
    this._call = call;
  }

  get _account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _signature(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class ChangeToLoyaltyTokenCall__Outputs {
  _call: ChangeToLoyaltyTokenCall;

  constructor(call: ChangeToLoyaltyTokenCall) {
    this._call = call;
  }
}

export class ChangeToLoyaltyTokenDirectCall extends ethereum.Call {
  get inputs(): ChangeToLoyaltyTokenDirectCall__Inputs {
    return new ChangeToLoyaltyTokenDirectCall__Inputs(this);
  }

  get outputs(): ChangeToLoyaltyTokenDirectCall__Outputs {
    return new ChangeToLoyaltyTokenDirectCall__Outputs(this);
  }
}

export class ChangeToLoyaltyTokenDirectCall__Inputs {
  _call: ChangeToLoyaltyTokenDirectCall;

  constructor(call: ChangeToLoyaltyTokenDirectCall) {
    this._call = call;
  }
}

export class ChangeToLoyaltyTokenDirectCall__Outputs {
  _call: ChangeToLoyaltyTokenDirectCall;

  constructor(call: ChangeToLoyaltyTokenDirectCall) {
    this._call = call;
  }
}

export class ChangeToPayablePointCall extends ethereum.Call {
  get inputs(): ChangeToPayablePointCall__Inputs {
    return new ChangeToPayablePointCall__Inputs(this);
  }

  get outputs(): ChangeToPayablePointCall__Outputs {
    return new ChangeToPayablePointCall__Outputs(this);
  }
}

export class ChangeToPayablePointCall__Inputs {
  _call: ChangeToPayablePointCall;

  constructor(call: ChangeToPayablePointCall) {
    this._call = call;
  }

  get _phone(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _signature(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class ChangeToPayablePointCall__Outputs {
  _call: ChangeToPayablePointCall;

  constructor(call: ChangeToPayablePointCall) {
    this._call = call;
  }
}

export class ChangeToPayablePointDirectCall extends ethereum.Call {
  get inputs(): ChangeToPayablePointDirectCall__Inputs {
    return new ChangeToPayablePointDirectCall__Inputs(this);
  }

  get outputs(): ChangeToPayablePointDirectCall__Outputs {
    return new ChangeToPayablePointDirectCall__Outputs(this);
  }
}

export class ChangeToPayablePointDirectCall__Inputs {
  _call: ChangeToPayablePointDirectCall;

  constructor(call: ChangeToPayablePointDirectCall) {
    this._call = call;
  }

  get _phone(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class ChangeToPayablePointDirectCall__Outputs {
  _call: ChangeToPayablePointDirectCall;

  constructor(call: ChangeToPayablePointDirectCall) {
    this._call = call;
  }
}

export class CloseCancelLoyaltyPaymentCall extends ethereum.Call {
  get inputs(): CloseCancelLoyaltyPaymentCall__Inputs {
    return new CloseCancelLoyaltyPaymentCall__Inputs(this);
  }

  get outputs(): CloseCancelLoyaltyPaymentCall__Outputs {
    return new CloseCancelLoyaltyPaymentCall__Outputs(this);
  }
}

export class CloseCancelLoyaltyPaymentCall__Inputs {
  _call: CloseCancelLoyaltyPaymentCall;

  constructor(call: CloseCancelLoyaltyPaymentCall) {
    this._call = call;
  }

  get _paymentId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _confirm(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class CloseCancelLoyaltyPaymentCall__Outputs {
  _call: CloseCancelLoyaltyPaymentCall;

  constructor(call: CloseCancelLoyaltyPaymentCall) {
    this._call = call;
  }
}

export class CloseNewLoyaltyPaymentCall extends ethereum.Call {
  get inputs(): CloseNewLoyaltyPaymentCall__Inputs {
    return new CloseNewLoyaltyPaymentCall__Inputs(this);
  }

  get outputs(): CloseNewLoyaltyPaymentCall__Outputs {
    return new CloseNewLoyaltyPaymentCall__Outputs(this);
  }
}

export class CloseNewLoyaltyPaymentCall__Inputs {
  _call: CloseNewLoyaltyPaymentCall;

  constructor(call: CloseNewLoyaltyPaymentCall) {
    this._call = call;
  }

  get _paymentId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _confirm(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class CloseNewLoyaltyPaymentCall__Outputs {
  _call: CloseNewLoyaltyPaymentCall;

  constructor(call: CloseNewLoyaltyPaymentCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class OpenCancelLoyaltyPaymentCall extends ethereum.Call {
  get inputs(): OpenCancelLoyaltyPaymentCall__Inputs {
    return new OpenCancelLoyaltyPaymentCall__Inputs(this);
  }

  get outputs(): OpenCancelLoyaltyPaymentCall__Outputs {
    return new OpenCancelLoyaltyPaymentCall__Outputs(this);
  }
}

export class OpenCancelLoyaltyPaymentCall__Inputs {
  _call: OpenCancelLoyaltyPaymentCall;

  constructor(call: OpenCancelLoyaltyPaymentCall) {
    this._call = call;
  }

  get _paymentId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _signature(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class OpenCancelLoyaltyPaymentCall__Outputs {
  _call: OpenCancelLoyaltyPaymentCall;

  constructor(call: OpenCancelLoyaltyPaymentCall) {
    this._call = call;
  }
}

export class OpenNewLoyaltyPaymentCall extends ethereum.Call {
  get inputs(): OpenNewLoyaltyPaymentCall__Inputs {
    return new OpenNewLoyaltyPaymentCall__Inputs(this);
  }

  get outputs(): OpenNewLoyaltyPaymentCall__Outputs {
    return new OpenNewLoyaltyPaymentCall__Outputs(this);
  }
}

export class OpenNewLoyaltyPaymentCall__Inputs {
  _call: OpenNewLoyaltyPaymentCall;

  constructor(call: OpenNewLoyaltyPaymentCall) {
    this._call = call;
  }

  get data(): OpenNewLoyaltyPaymentCallDataStruct {
    return changetype<OpenNewLoyaltyPaymentCallDataStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class OpenNewLoyaltyPaymentCall__Outputs {
  _call: OpenNewLoyaltyPaymentCall;

  constructor(call: OpenNewLoyaltyPaymentCall) {
    this._call = call;
  }
}

export class OpenNewLoyaltyPaymentCallDataStruct extends ethereum.Tuple {
  get paymentId(): Bytes {
    return this[0].toBytes();
  }

  get purchaseId(): string {
    return this[1].toString();
  }

  get amount(): BigInt {
    return this[2].toBigInt();
  }

  get currency(): string {
    return this[3].toString();
  }

  get shopId(): Bytes {
    return this[4].toBytes();
  }

  get account(): Address {
    return this[5].toAddress();
  }

  get signature(): Bytes {
    return this[6].toBytes();
  }
}

export class SavePurchaseCall extends ethereum.Call {
  get inputs(): SavePurchaseCall__Inputs {
    return new SavePurchaseCall__Inputs(this);
  }

  get outputs(): SavePurchaseCall__Outputs {
    return new SavePurchaseCall__Outputs(this);
  }
}

export class SavePurchaseCall__Inputs {
  _call: SavePurchaseCall;

  constructor(call: SavePurchaseCall) {
    this._call = call;
  }

  get data(): SavePurchaseCallDataStruct {
    return changetype<SavePurchaseCallDataStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class SavePurchaseCall__Outputs {
  _call: SavePurchaseCall;

  constructor(call: SavePurchaseCall) {
    this._call = call;
  }
}

export class SavePurchaseCallDataStruct extends ethereum.Tuple {
  get purchaseId(): string {
    return this[0].toString();
  }

  get timestamp(): BigInt {
    return this[1].toBigInt();
  }

  get amount(): BigInt {
    return this[2].toBigInt();
  }

  get currency(): string {
    return this[3].toString();
  }

  get shopId(): Bytes {
    return this[4].toBytes();
  }

  get method(): BigInt {
    return this[5].toBigInt();
  }

  get account(): Address {
    return this[6].toAddress();
  }

  get phone(): Bytes {
    return this[7].toBytes();
  }
}

export class SetFeeCall extends ethereum.Call {
  get inputs(): SetFeeCall__Inputs {
    return new SetFeeCall__Inputs(this);
  }

  get outputs(): SetFeeCall__Outputs {
    return new SetFeeCall__Outputs(this);
  }
}

export class SetFeeCall__Inputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }

  get _fee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFeeCall__Outputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
