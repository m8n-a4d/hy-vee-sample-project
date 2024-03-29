"use client";
import Image from "next/image";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
// import styles from "../page.module.css";

const Home = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState([]);
  const [loading, setloading] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const data = name && country;
  const data1 = age && gender;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name) {
      await getCountry(name);
    } else {
      toast("please enter the name");
    }
  };

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
          console.log(countries);

          setCountry(countries);
          await getAge(name, countries[0].id);
          await getGender(name, countries[0].id);
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
        setShowCard(true);
      } catch (error) {
        console.error("Error fetch data", error);
      }
    }
  };

  const fetchDetailsByName = async (name, countryId) => {
    console.log("entered fetch details by name", countryId);
    setloading(true);
    await getAge(name, countryId);
    await getGender(name, countryId);
    setloading(false);
  };

  return (
    <Container>
      <>
        <Row>
          <div
            style={{
              marginBottom: "1px",
              marginLeft: "130px",
            }}
          >
            <Image
              // src="/hyveelogo.png"
              src="/220.jpg"
              alt="hy-vee Logo"
              width={400} // Adjust width as needed
              height={200} // Adjust height as needed
              priority
              style={{
                marginLeft: "130px",
              }}
            />

            <ToastContainer />
          </div>
        </Row>
        <Form onSubmit={handleSubmit}>
          <>
            <FormGroup row>
              <Label for="name" sm={2}>
                Name
              </Label>
              <Col sm={5}>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="off"
                />
              </Col>
              <Col sm={3}>
                <Button color="primary">Submit</Button>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="country" sm={2}>
                Select Country
              </Label>
              <Col sm={5}>
                <Input
                  id="country"
                  name="country"
                  type="select"
                  onChange={(e) => fetchDetailsByName(name, e.target.value)}
                >
                  {country.map((aCountry, index) => (
                    <option key={index} value={aCountry.id}>
                      {aCountry.name}
                    </option>
                  ))}
                </Input>
              </Col>
            </FormGroup>
          </>
        </Form>
        {loading && <p>Loading...</p>}
        {showCard && (
          <Card
            className="my-1"
            style={{
              width: "20rem",
              left: "14rem",
              top: "1rem",
              backgroundColor: "#767676",
              borderBlockColor: "#000000",
            }}
          >
            <CardHeader tag="h3" style={{ color: "#FFFFFF" }}>
              User Details
            </CardHeader>
            <CardBody style={{ color: "#FFFFFF" }}>
              <CardText>
                <Label sm={10}>{`Age : ${
                  age.age ? age.age : "Data Not Available"
                }`}</Label>
                <Label sm={10}>{`Gender : ${
                  gender.gender ? gender.gender : "Data Not Available"
                }`}</Label>
              </CardText>
            </CardBody>
          </Card>
        )}
      </>
    </Container>
  );
};

export default Home;
