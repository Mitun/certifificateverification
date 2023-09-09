"use client";

import Image from "next/image";
import Header from "./components/Header";
import CertificationVerify from "./components/CertificationVerify.json";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./components/styling.css";

export default function Home() {
  const mycontract = "0xFCa3A60762Ced92A1389b2347e52f761Ea5F41ca";
  const [address, setAddress] = useState(null);
  const [contract, setContract] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [successMessage2, setSuccessMessage2] = useState("");
  const [wrongMessage, setwrongMessage] = useState("");
  const [wrongMessage2, setwrongMessage2] = useState("");
  const [show, setShow] = useState(false);
  const [data11, setData11] = useState("");

  const [certificateDetails, setCertificateDetails] = useState(null);
  const [formdata, setFormdata] = useState({
    certificateID: "",
    certificateName: "",
    CertificateRecepient: "",
    cgpaObtained: "",
    cgpaMaximum: "",
    institution: "",
  });
  const [formdataa, setFormdataa] = useState({
    certificateID: "",
  });

  function generateUniqueNumber(min, max, usedNumbers) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (
      usedNumbers.includes(randomNumber) ||
      randomNumber.toString().length !== 5
    );

    usedNumbers.push(randomNumber);
    return randomNumber;
  }
  const usedNumbers = [];

  useEffect(() => {
    async function initialize() {
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAddress(address);
        const contract = new ethers.Contract(
          mycontract,
          CertificationVerify,
          signer
        );
        setContract(contract);
        console.log("Ethereum provider:", provider);
      }
    }
    initialize();
  }, []);

  function toggleFormVisibility() {
    setShowForm(!false);
    setShowForm2(false);
    setShow(false);
    setSuccessMessage(false);
    setCertificateDetails(false);
    setwrongMessage(false);
  }
  function toggleFormVisibility2() {
    setShowForm(false);
    setShowForm2(!false);
    setShow(false);
    setSuccessMessage(false);
    setCertificateDetails(false);
    setwrongMessage(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, value } = e.target;

    setFormdata((data) => ({ ...data, [name]: value }));
    let shouldRerun = true;
    const uniqueNumber = generateUniqueNumber(10000, 99999, usedNumbers);
    console.log("Unique Number:", uniqueNumber);

    setData11(uniqueNumber);
  }
  function handleSubmit2(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormdataa((data) => ({ ...data, [name]: value }));
  }

  // function handleSubmit2(e) {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   setFormdata((data) => ({ ...data, [name]: value }));
  // }
  async function submittingFormData() {
    const data1 = data11;
    console.log("data1 is:", data1);
    // const data1 = formdata.certificateID;
    const data2 = formdata.certificateName;
    const data3 = formdata.CertificateRecepient;
    const data4 = formdata.cgpaObtained;
    const data5 = formdata.cgpaMaximum;
    const data6 = formdata.institution;
    console.log("dataaaaa", data1);
    try {
      if (
        data1 === "" ||
        data2 === "" ||
        data3 === "" ||
        data4 === "" ||
        data5 === "" ||
        data6 === ""
      ) {
        //setShowForm(true);

        setwrongMessage2("All fields required.");
        //successMessage(false);
      } else {
        // console.log(mydeporesult);
        // setData1(data1);
        const mydeporesult = await contract?.addNewCertificates(
          data1,
          data2,
          data3,
          data4,
          data5,
          data6
        );
        setSuccessMessage(
          "Congratulations! Your data has been successfully submitted."
        );

        setwrongMessage(false);
        setShowForm(false);
        setShowForm2(false);
        setwrongMessage2(false);
      }
    } catch (error) {
      console.error("Error submitting data to the contract:", error);
    }
  }

  async function retrievingFormData() {
    console.log("Retrieving form data function called");
    const mydeporesult = await contract?.getCertificateDetails(
      formdataa.certificateID
    );
    console.log("hello:", mydeporesult.certificateName);
    // if () {
    //   console.log("data not found man");
    // } else {
    //   console.log("data found");
    // }
    console.log("output", mydeporesult);
    setCertificateDetails(mydeporesult);
    console.log("output certificate", certificateDetails);
    if (mydeporesult.certificateName === "") {
      console.log("its first loop");
      setwrongMessage("Not Verified!!");
      setCertificateDetails(false);
      setShowForm(false);
      setShowForm2(false);
    } else {
      setShowForm(false);
      setShowForm2(false);
      setSuccessMessage("Verification Successfull!!");
    }
  }

  const certificateForm = (
    <form className="mt-4">
      {/* <div className="mb-4">
        <label htmlFor="certificateID" className="block font-bold">
          Certificate ID:
        </label>
        <input
          type="number"
          id="certificateID"
          name="certificateID"
          placeholder=" i.e. 123456"
          className="border rounded p-2"
          value={formdata.certificateID}
          required
          onChange={handleSubmit}
        />
      </div> */}
      <div className="mb-4">
        <label htmlFor="certificateName" className="block font-bold">
          Certificate Completed:
        </label>
        <input
          type="text"
          id="certificateName"
          name="certificateName"
          placeholder=" i.e. SSC or HSC or BSC"
          className="border rounded p-2"
          value={formdata.certificateName}
          required
          onChange={handleSubmit}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="CertificateRecepient" className="block font-bold">
          Certificate Recipient:
        </label>
        <input
          type="text"
          id="CertificateRecepient"
          name="CertificateRecepient"
          placeholder=" i.e. Abid Adnan"
          className="border rounded p-2"
          value={formdata.CertificateRecepient}
          required
          onChange={handleSubmit}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cgpaObtained" className="block font-bold">
          CGPA Obtained:
        </label>
        <input
          type="number"
          id="cgpaObtained"
          name="cgpaObtained"
          placeholder=" i.e. for 3.98 write 398"
          className="border rounded p-2"
          value={formdata.cgpaObtained}
          required
          onChange={handleSubmit}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cgpaMaximum" className="block font-bold">
          Maximum CGPA:
        </label>
        <input
          type="number"
          id="cgpaMaximum"
          name="cgpaMaximum"
          placeholder=" i.e. 4"
          className="border rounded p-2"
          value={formdata.cgpaMaximum}
          required
          onChange={handleSubmit}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="institution" className="block font-bold">
          Institution Name:
        </label>
        <input
          type="text"
          id="institution"
          name="institution"
          placeholder=" i.e. Harvard University"
          className="border rounded p-2"
          value={formdata.institution}
          required
          onChange={handleSubmit}
        />
      </div>
      {wrongMessage2 && (
        <div className="text-red-900 text-xl mt-5 font-bold mb-4">
          {wrongMessage2}
        </div>
      )}
      <button
        type="button"
        className="flex justify-center bg-blue-500 hover:bg-blue-400  text-white font-bold py-2 px-4 rounded"
        onClick={submittingFormData}
      >
        Submit
      </button>
    </form>
  );
  const certificateForm2 = (
    <form onSubmit={handleSubmit2} className="mt-4 ">
      <div className="mb-4">
        <label htmlFor="certificateID" className="block font-bold">
          Certificate ID:
        </label>
        <input
          type="number"
          id="certificateID"
          name="certificateID"
          placeholder=" i.e. 123456"
          className="border rounded p-2"
          value={formdataa.certificateID}
          required
          onChange={handleSubmit2}
        />
      </div>
      <button
        type="button"
        className="flex justify-center bg-blue-500 hover:bg-blue-400  text-white font-bold py-2 px-4 rounded"
        onClick={retrievingFormData}
      >
        CHECK
      </button>
    </form>
  );
  return (
    <main className="gradient-background flex min-h-screen flex-col ">
      <Header></Header>

      <div className="flex flex-col items-center py-10  mt-10 mb-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-orange-100 mb-10">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              Blockchain-Powered Certificate Verification: Verify with
              Confidence
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <button
            class=" bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={toggleFormVisibility}
          >
            Add Certificate
          </button>
          <button
            class=" bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={toggleFormVisibility2}
          >
            Verify
          </button>
        </div>
        {showForm ? certificateForm : showForm2 && certificateForm2}
        {successMessage && (
          <div className="mt-10 items-center flex flex-col justify-center text-center">
            <Image
              src="/img3.png"
              alt="Image Description"
              width={150}
              height={40}
            />
            <div className="text-green-900 text-xl mt-4 font-bold">
              {successMessage}
            </div>
          </div>
        )}
        {!certificateDetails && successMessage && (
          <div>
            <p className="font-bold text-xl mt-5 text-center">
              Your Unique ID: {data11}
            </p>
            <p className="font-bold text-xl text-center">
              Please make sure to keep a note of your ID for future reference.
            </p>
          </div>
        )}

        {certificateDetails && (
          <div className="mt-4 mb-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-green-100 mb-10">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">
                  <h3 className="mb-4">Certificate Details</h3>

                  <p className="text-left">
                    Certificate ID: {certificateDetails[0].toNumber()}
                  </p>
                  <p className="text-left">
                    Certificate Name: {certificateDetails[1]}
                  </p>
                  <p className="text-left">
                    Recipient: {certificateDetails[2]}
                  </p>
                  <p className="text-left">
                    CGPA Obtained: {certificateDetails[3].toNumber()}
                  </p>
                  <p className="text-left">
                    Maximum CGPA: {certificateDetails[4].toNumber()}
                  </p>
                  <p className="text-left">
                    Institution: {certificateDetails[5]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {wrongMessage && (
          <div className=" mt-10 items-center flex flex-col justify-center text-center">
            <Image
              src="/img4.png"
              alt="Image Description"
              width={150} // Replace with the desired width
              height={40}
            />
            <div className="text-red-900  text-xl mt-11 font-bold mb-4">
              {wrongMessage}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
