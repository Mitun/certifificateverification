// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract NewCertificate is Ownable {
    event CertificateAdded(
        uint256 indexed certificateID,
        address indexed userAddress,
        string certificateName,
        string CertificateRecepient,
        int cgpaObtained,
        int cgpaMaximum,
        string institution,
        string uriData,
        bool isPublic
    );

    event CertificateVisibilityChanged(uint256 certificateID, bool isPublic);

    struct CertificateDetails {
        uint256 certificateID;
        address userAddress;
        string certificateName;
        string CertificateRecepient;
        int cgpaObtained;
        int cgpaMaximum;
        string institution;
        string uriData;
        bool isPublic;
    }

    mapping(uint256 => CertificateDetails) public allCertificates;

    function addNewCertificates(
        uint256 _certificateID,
        address _userAddress,
        string memory _certificateName,
        string memory _CertificateRecepient,
        int _cgpaObtained,
        int _cgpaMaximum,
        string memory _institution,
        string memory _uriData,
        bool _isPublic
    ) public payable {
        require(msg.value >= 100000000000000000 wei, "Insufficient Ether sent for certificate addition");

        payable(owner()).transfer(msg.value);

        CertificateDetails storage newCertificate = allCertificates[_certificateID];
        newCertificate.certificateID = _certificateID;
        newCertificate.userAddress = _userAddress;
        newCertificate.certificateName = _certificateName;
        newCertificate.CertificateRecepient = _CertificateRecepient;
        newCertificate.cgpaObtained = _cgpaObtained;
        newCertificate.cgpaMaximum = _cgpaMaximum;
        newCertificate.institution = _institution;
        newCertificate.uriData = _uriData;
        newCertificate.isPublic = _isPublic;

        emit CertificateAdded(
            _certificateID,
            _userAddress,
            _certificateName,
            _CertificateRecepient,
            _cgpaObtained,
            _cgpaMaximum,
            _institution,
            _uriData,
            _isPublic
        );
    }

    function setCertificateVisibility(uint256 _certificateID, bool _isPublic) public {
        // Check that the caller is the owner of the certificate
        require(allCertificates[_certificateID].userAddress == msg.sender, "Access denied");
        
        // Update the certificate's visibility state
        allCertificates[_certificateID].isPublic = _isPublic;
        emit CertificateVisibilityChanged(_certificateID, _isPublic);
    }
    function getCertificateID(uint256 _certificateID) public view returns (uint256) {
        return allCertificates[_certificateID].certificateID;
    }

    function getCertificateDetails(uint256 _certificateID) public view returns (
        uint256 certificateID,
        string memory certificateName,
        string memory CertificateRecepient,
        int cgpaObtained,
        int cgpaMaximum,
        string memory institution,
        string memory uriData
    ) {
        require(allCertificates[_certificateID].certificateID == _certificateID, "Certificate not found");
        
        
        if (allCertificates[_certificateID].isPublic==false && allCertificates[_certificateID].userAddress == msg.sender) {
            return (
                allCertificates[_certificateID].certificateID,
                allCertificates[_certificateID].certificateName,
                allCertificates[_certificateID].CertificateRecepient,
                allCertificates[_certificateID].cgpaObtained,
                allCertificates[_certificateID].cgpaMaximum,
                allCertificates[_certificateID].institution,
                allCertificates[_certificateID].uriData
                
            );
        } 
        else if  (allCertificates[_certificateID].isPublic==true) {
            return (
                allCertificates[_certificateID].certificateID,
                allCertificates[_certificateID].certificateName,
                allCertificates[_certificateID].CertificateRecepient,
                allCertificates[_certificateID].cgpaObtained,
                allCertificates[_certificateID].cgpaMaximum,
                allCertificates[_certificateID].institution,
                allCertificates[_certificateID].uriData
                
            );
        } 
        
        
        else {
            revert("Access denied");
        }
        
    }
}
