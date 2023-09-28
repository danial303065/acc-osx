// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ValidatorCollection.sol";

/// @notice 가맹점컬랙션
contract ShopCollection {
    /// @notice 검증자의 상태코드
    enum ShopStatus {
        INVALID,
        ACTIVE
    }

    /// @notice 가맹점의 데이터
    struct ShopData {
        string shopId; // 가맹점 아이디
        uint256 provideWaitTime; // 제품구매 후 포인트 지급시간
        uint256 providePercent; // 구매금액에 대한 포인트 지급량
        uint256 providedPoint; // 제공된 포인트 총량
        uint256 usedPoint; // 사용된 포인트 총량
        uint256 clearedPoint; // 정산된 포인트 총량
        ShopStatus status;
    }

    mapping(string => ShopData) private shops;

    string[] private items;

    address public validatorAddress;
    ValidatorCollection private validatorCollection;

    /// @notice 가맹점이 추가될 때 발생되는 이벤트
    event AddedShop(string shopId, uint256 provideWaitTime, uint256 providePercent);
    /// @notice 가맹점의 포인트가 증가할 때 발생되는 이벤트
    event IncreasedProvidedPoint(string shopId, uint256 increase, uint256 total, string purchaseId);
    /// @notice 사용자의 포인트가 증가할 때 발생되는 이벤트
    event IncreasedUsedPoint(string shopId, uint256 increase, uint256 total, string purchaseId);
    /// @notice 정산된 마일리가 증가할 때 발생되는 이벤트
    event IncreasedClearedPoint(string shopId, uint256 increase, uint256 total, string purchaseId);

    address public ledgerAddress;
    address public deployer;

    /// @notice 생성자
    /// @param _validatorAddress 검증자컬랙션의 주소
    constructor(address _validatorAddress) {
        validatorAddress = _validatorAddress;

        validatorCollection = ValidatorCollection(_validatorAddress);
        ledgerAddress = address(0x00);
        deployer = msg.sender;
    }

    /// @notice 원장 컨트랙트의 주소를 호출한다.
    function setLedgerAddress(address _ledgerAddress) public {
        require(msg.sender == deployer, "No permissions");
        ledgerAddress = _ledgerAddress;
        deployer = address(0x00);
    }

    /// @notice 검증자들만 호출할 수 있도록 해준다.
    modifier onlyValidator(address _account) {
        require(validatorCollection.isActiveValidator(_account), "Not validator");
        _;
    }

    /// @notice 원장 컨트랙트에서만 호출될 수 있도록 해준다.
    modifier onlyLedger() {
        require(msg.sender == ledgerAddress, "Not ledger");
        _;
    }

    /// @notice 가맹점을 추가한다
    /// @param _shopId 가맹점 아이디
    /// @param _provideWaitTime 제품구매 후 포인트가 지급될 시간
    /// @param _providePercent 구매금액에 대한 포인트 지급량
    function add(
        string memory _shopId,
        uint256 _provideWaitTime,
        uint256 _providePercent
    ) public onlyValidator(msg.sender) {
        _add(_shopId, _provideWaitTime, _providePercent);
    }

    function _add(string memory _shopId, uint256 _provideWaitTime, uint256 _providePercent) internal {
        ShopData memory data = ShopData({
            shopId: _shopId,
            provideWaitTime: _provideWaitTime,
            providePercent: _providePercent,
            providedPoint: 0,
            usedPoint: 0,
            clearedPoint: 0,
            status: ShopStatus.ACTIVE
        });
        items.push(_shopId);
        shops[_shopId] = data;

        emit AddedShop(_shopId, _provideWaitTime, _providePercent);
    }

    /// @notice 지급된 총 마일지리를 누적한다
    function addProvidedPoint(string memory _shopId, uint256 _amount, string memory _purchaseId) public onlyLedger {
        if (shops[_shopId].status == ShopStatus.INVALID) {
            _add(_shopId, 0, 5);
        }

        shops[_shopId].providedPoint += _amount;
        emit IncreasedProvidedPoint(_shopId, _amount, shops[_shopId].providedPoint, _purchaseId);
    }

    /// @notice 사용된 총 마일지리를 누적한다
    function addUsedPoint(string memory _shopId, uint256 _amount, string memory _purchaseId) public onlyLedger {
        if (shops[_shopId].status == ShopStatus.INVALID) {
            _add(_shopId, 0, 5);
        }
        shops[_shopId].usedPoint += _amount;
        emit IncreasedUsedPoint(_shopId, _amount, shops[_shopId].usedPoint, _purchaseId);
    }

    /// @notice 정산된 총 마일지리를 누적한다
    function addClearedPoint(string memory _shopId, uint256 _amount, string memory _purchaseId) public onlyLedger {
        if (shops[_shopId].status == ShopStatus.INVALID) {
            _add(_shopId, 0, 5);
        }
        shops[_shopId].clearedPoint += _amount;
        emit IncreasedClearedPoint(_shopId, _amount, shops[_shopId].clearedPoint, _purchaseId);
    }

    /// @notice 정산되어야 할 마일지리의 량을 리턴합니다.
    function getClearPoint(string memory _shopId) public view returns (uint256) {
        if (shops[_shopId].status == ShopStatus.ACTIVE) {
            ShopData memory data = shops[_shopId];
            if (data.providedPoint + data.clearedPoint < data.usedPoint) {
                return (data.usedPoint - data.providedPoint - data.clearedPoint);
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    }

    /// @notice 가맹점 데이터를 리턴한다
    /// @param _shopId 가맹점의 아이디
    function shopOf(string memory _shopId) public view returns (ShopData memory) {
        return shops[_shopId];
    }

    /// @notice 가맹점의 아이디를 리턴한다
    /// @param _idx 배열의 순번
    function shopIdOf(uint256 _idx) public view returns (string memory) {
        return items[_idx];
    }

    /// @notice 가맹점의 갯수를 리턴한다
    function shopsLength() public view returns (uint256) {
        return items.length;
    }
}
