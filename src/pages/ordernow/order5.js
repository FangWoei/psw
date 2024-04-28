import { Image, Grid, Accordion, Checkbox } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";

const groceries = [
  {
    value: "EST. $60,990",
    description: "REAR-WHEEL DRIVE",
    list1: "- AVAILABLE IN 2025",
    list2: "- 250 MI. RANGE (EST.)",
    list3: "- 6.5 SEC. 0-60 MPH",
  },
  {
    value: "EST. $79,990",
    description: "REAR-WHEEL DRIVE",
    list1: "- AVAILABLE IN 2025",
    list2: "- 250 MI. RANGE (EST.)",
    list3: "- 6.5 SEC. 0-60 MPH",
  },
  {
    value: "EST. $99,990",
    description: "REAR-WHEEL DRIVE",
    list1: "- AVAILABLE IN 2025",
    list2: "- 250 MI. RANGE (EST.)",
    list3: "- 6.5 SEC. 0-60 MPH",
  },
];

export default function Order5() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const handleCheckboxChange = (group, value) => {
    setSelectedOptions({
      ...selectedOptions,
      [group]: value,
    });
  };

  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control className="bg-light text-dark d-flex">
        {item.value}
        <Checkbox />
      </Accordion.Control>
      <Accordion.Panel className="bg-light text-dark">
        {item.description}
      </Accordion.Panel>
      <Accordion.Panel className="bg-light text-dark">
        <div>{item.list1}</div>
        <div>{item.list2}</div>
        <div>{item.list3}</div>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <Link to="/">
            <svg
              width="150px"
              height="100px"
              class="tds-icon tds-icon-logo-wordmark tds-site-logo-icon"
              viewBox="0 0 342 35"
              color="black"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
                fill="currentColor"></path>
            </svg>
          </Link>
        </div>
      </nav>
      <div className="bg-dark">
        <Grid>
          <Grid.Col span={{ base: 12, md: 12, lg: 8 }} className="mt-3">
            <div className="">
              <Image
                src="./img/ordernow/order5/ct_reservation_mobile.avif"
                className="img-fluid"
              />
            </div>
          </Grid.Col>
          <Grid.Col
            className="px-5 bg-dark text-light"
            span={{ base: 12, md: 12, lg: 4 }}>
            <div className="text-center my-5 py-5">
              <h1>RESERVE NOW</h1>
            </div>
            <Accordion variant="contained" radius="xl">
              {items}
            </Accordion>
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
}
