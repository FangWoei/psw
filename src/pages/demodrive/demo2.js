import { Container, Grid, TextInput, Card, Text, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { DateTimePicker } from "@mantine/dates";
export default function Demo2() {
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
      <Container size="md">
        <div className="my-4">
          <h1>Demo Drive Model 3</h1>
          <h5>
            Experience Full Self-Driving (Supervised), Learn About Charging and
            Get All Your Questions Answered
          </h5>
        </div>
        <div className="mb-4">
          <h3>Find Location and Time</h3>
          <h5>Zip Code: 41200</h5>
        </div>
        <div>
          <h5>Select Location</h5>
          <Grid>
            <Grid.Col span={{ base: "12", md: "6", lg: "4" }}>
              <Card
                shadow="sm"
                padding="xl"
                style={{ border: "2px solid black", width: "300px" }}>
                <Text fw={500} size="lg" mt="md">
                  Tulsa-6010 S 129th E Ave Tulsa OK
                </Text>
                <Text mt="xs" c="dimmed" size="sm">
                  6010 S 129th E Ave, OK 74134
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: "12", md: "6", lg: "4" }}>
              <Card
                shadow="sm"
                padding="xl"
                style={{ border: "2px solid black", width: "300px" }}>
                <Text fw={500} size="lg" mt="md">
                  Tulsa-6010 S 129th E Ave Tulsa OK
                </Text>
                <Text mt="xs" c="dimmed" size="sm">
                  6010 S 129th E Ave, OK 74134
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: "12", md: "6", lg: "4" }}>
              <Card
                shadow="sm"
                padding="xl"
                style={{ border: "2px solid black", width: "300px" }}>
                <Text fw={500} size="lg" mt="md">
                  Tulsa-6010 S 129th E Ave Tulsa OK
                </Text>
                <Text mt="xs" c="dimmed" size="sm">
                  6010 S 129th E Ave, OK 74134
                </Text>
              </Card>
            </Grid.Col>
          </Grid>
        </div>
        <div className="my-3">
          <Grid>
            <Grid.Col span={{ base: "6", md: "6", lg: "6" }}>
              <DateTimePicker label="Date" placeholder="Date" />
            </Grid.Col>
            <Grid.Col span={{ base: "6", md: "6", lg: "6" }}>
              <DateTimePicker label="Time" placeholder="Time" />
            </Grid.Col>
          </Grid>
        </div>
        <div className="my-5 py-5">
          <h2>Contact Information</h2>
          <Grid>
            <Grid.Col span={{ base: "6", md: "6", lg: "6" }}>
              <TextInput label="First Name" placeholder="First Name" />
            </Grid.Col>
            <Grid.Col span={{ base: "6", md: "6", lg: "6" }}>
              <TextInput label="Last Name" placeholder="Last Name" />
            </Grid.Col>
            <Grid.Col span={{ base: "6", md: "6", lg: "6" }}>
              <TextInput label="Email Address" placeholder="Email Address" />
            </Grid.Col>
            <Grid.Col span={{ base: "6", md: "6", lg: "6" }}>
              <TextInput label="Phone Number" placeholder="Phone Number" />
            </Grid.Col>
            <Grid.Col span={{ base: "6", md: "6", lg: "6" }}>
              <Button className="my-3" fullWidth>Schedule Demo Drive</Button>
            </Grid.Col>
          </Grid>
        </div>
      </Container>
    </>
  );
}
