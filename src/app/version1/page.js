"use client";
import styles from "../page.module.css";
import Image from "next/image";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import countryValue from "../country";

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setloading] = useState(false);
  const data = name && age && gender && country;

  const getAge = async (name) => {
    if (name.trim() !== "") {
      try {
        const response = await fetch(`https://api.agify.io?name=${name}`);
        const data = await response.json();
        setAge(data);
      } catch (error) {
        console.error("Error fetch data", error);
      }
    }
  };
  const getGender = async (name) => {
    if (name.trim() !== "") {
      try {
        const response = await fetch(`https://api.genderize.io?name=${name}`);
        console.log(response.status);
        const data = await response.json();
        setGender(data);
      } catch (error) {
        console.error("Error fetch data", error);
      }
    }
  };

  const getCountry = async (name) => {
    if (name.trim() !== "") {
      try {
        const response = await fetch(`https://api.nationalize.io?name=${name}`);
        console.log(response.status);
        const data = await response.json();
        // console.log({
        //   MaximumAttempts: response.headers.get("x-rate-limit-limit"),
        // });
        // console.log({
        //   RemainingAttempts: response.headers.get("x-rate-limit-remaining"),
        // });
        let dataValue = data.country;
        const countryNames = countryValue();
        let countryID = [];
        let countriesNameValue = [];
        dataValue.map((value) => {
          countryID.push(value.country_id);
        });
        countryNames.map((country) => {
          countryID.map((id) => {
            if (country.code === id) {
              countriesNameValue.push(country.name);
            }
          });
        });
        console.log(countriesNameValue);
        setCountry(countriesNameValue);
      } catch (error) {
        console.error("Error fetch data wait for response", error);
      }
    }
  };

  const fetchDetailsByName = async (name) => {
    setloading(true);
    await getAge(name);
    await getGender(name);
    await getCountry(name);
    setloading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      fetchDetailsByName(name);
    } else {
      toast("please enter the name");
    }
  };

  return (
    <div className={styles.main}>
      <Image
        className={styles.logo}
        src="/220.jpg"
        alt="hy-vee Logo"
        width={370}
        height={180}
        priority
      />
      <ToastContainer />

      <form onSubmit={handleSubmit}>
        <div className={styles.input}>
          <input
            placeholder="Enter the name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="yes"
          />

          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      <div className={styles.result}>
        {name && (
          <p>
            <span>Name:</span>
            <span className={styles.inputData}>{name}</span>
          </p>
        )}

        {loading && <p>Loading...</p>}

        {!loading && data && (
          <div>
            <p>
              <span>Age:</span>
              <span className={styles.inputData}>{age.age}</span>
            </p>
            <p>
              <span>Gender:</span>
              <span className={styles.inputData}>{gender.gender}</span>
            </p>
            <p>
              <span>Country:</span>
              <span className={styles.inputData}>{country}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
