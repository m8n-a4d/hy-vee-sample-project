"use client";
import styles from "../page.module.css";
import Image from "next/image";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, Table, Container, ButtonGroup } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState([]);
  const [loading, setloading] = useState(false);
  const [showCountry, setShowCountry] = useState(false);
  const data = name && country;
  const data1 = age && gender;

  const getCountry = async (name) => {
    if (name.trim() !== "") {
      try {
        const response = await fetch(`https://api.nationalize.io?name=${name}`);

        const data = await response.json();

        if (data.country && Array.isArray(data.country)) {
          let countries = [];
          let countryNames = new Intl.DisplayNames(["en"], { type: "region" });
          data.country.forEach((value) => {
            countries.push({
              id: value.country_id,
              name: countryNames.of(value.country_id),
            });
          });

          setCountry(countries);

          // getAge(name, countries[0].id);
          // getGender(name, countries[0].id);
        }
      } catch (error) {
        console.error("Error fetch data wait for response", error);
      }
    }
  };

  const getAge = async (name, countryIDs) => {
    if (name.trim() !== "") {
      try {
        const response = await fetch(
          `https://api.agify.io?name=${name}&country_id=${countryIDs}`
        );
        const data = await response.json();
        setAge(data);
      } catch (error) {
        console.error("Error fetch data", error);
      }
    }
  };
  const getGender = async (name, countryIDs) => {
    if (name.trim() !== "") {
      try {
        const response = await fetch(
          `https://api.genderize.io?name=${name}&country_id=${countryIDs}`
        );
        console.log(response.status);
        const data = await response.json();
        setGender(data);
      } catch (error) {
        console.error("Error fetch data", error);
      }
    }
  };

  const fetchDetailsByName = async (name, countryId, skipCountry = false) => {
    setloading(true);
    if (skipCountry) {
      await getAge(name, countryId);
      await getGender(name, countryId);
    } else {
      await getCountry(name);
    }
    setloading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAge("");
    setCountry([]);
    setGender("");
    setShowCountry(false);
    if (name) {
      fetchDetailsByName(name);
      setShowCountry(true);
    } else {
      toast("please enter the name");
    }
  };

  return (
    <div className={styles.main}>
      <Container>
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
              {data1 && (
                <di>
                  <p>
                    <span>Age:</span>
                    <span className={styles.inputData}>
                      {age.age ? age.age : "No Data Available"}
                    </span>
                  </p>
                  <p>
                    <span>Gender:</span>
                    <span className={styles.inputData}>
                      {gender.gender ? gender.gender : "No Data Available"}
                    </span>
                  </p>
                </di>
              )}
              {showCountry && (
                <p>
                  <span>Country:</span>
                  {country.map((aCountry, index) => (
                    <div key={index}>
                      <ButtonGroup>
                        <Button
                          color="success"
                          onClick={() =>
                            fetchDetailsByName(name, aCountry.id, true)
                          }
                        >
                          {aCountry.name}
                        </Button>
                      </ButtonGroup>
                    </div>
                  ))}
                </p>
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
