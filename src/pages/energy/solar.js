import {
  Image,
  Grid,
  Input,
  Card,
  Text,
  Container,
  Space,
} from "@mantine/core";
import "../css/order1.css";
import { Link } from "react-router-dom";

import { useState } from "react";

export default function Solar() {
  return (
    <>
      {/* nav */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <Container className="py-4">
          <div class="container-fluid d-flex">
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
            <Space w="100px" />

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item pe-3">
                  <Link className="text-dark" to="/inventory">
                    Inventory
                  </Link>
                </li>
                <li class="nav-item pe-3">
                  <Link className="text-dark" to="/trade">
                    Trade-in
                  </Link>
                </li>
                <li class="nav-item pe-3">
                  <Link className="text-dark" to="/charge">
                    Help Me Charge
                  </Link>
                </li>
                <li class="nav-item pe-3">
                  <Link className="text-dark" to="/solar">
                    Schedule a Consultation
                  </Link>
                </li>
                <li class="nav-item pe-3">
                  <Link className="text-dark" to="/voting">
                    Supercharger Voting
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </nav>
      {/* nav */}
      <div>
        <Grid>
          <Grid.Col span={{ base: 12, md: 12, lg: 8 }} className="mt-3 left">
            <div>
              <Image
                src={
                  "https://digitalassets.tesla.com/image/upload/q_auto/f_auto/w_1920/prod/fulfillment/energy/Order/VirtualConsultations/VC_d_v2"
                }
                className="img-fluid"
              />
            </div>
          </Grid.Col>
          <Grid.Col className="px-5" span={{ base: 12, md: 12, lg: 4 }}>
            <div className="my-5 py-5">
              <Image
                src={
                  "https://digitalassets.tesla.com/image/upload/q_auto/f_auto/w_1920/prod/fulfillment/energy/Order/VirtualConsultations/VC_d_v2"
                }
                className="img-fluid one my-5"
                style={{ display: "none " }}
              />
              <h1 className="text-center">Virtual Consultation</h1>
              <p>
                Tesla Advisors can walk you through our energy products,
                financing quotes, eligibility for local incentives and answer
                any questions you may have.
              </p>
              <p>
                Schedule a 15-30 minute online consultation with a Tesla Advisor
              </p>
              <Input.Wrapper label="Enter Address" className="my-5">
                <Input placeholder="Input inside Input.Wrapper" />
              </Input.Wrapper>

              <h3>Select Product Interest</h3>

              <Card
                shadow="sm"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank">
                <Card.Section>
                  <Image
                    src="https://digitalassets.tesla.com/image/upload/q_auto/f_auto/w_2048/prod/fulfillment/energy/Order/EnergyConfigurator/sr-selector-image-desktop"
                    h={160}
                  />
                </Card.Section>

                <Text fw={500} size="lg" mt="md">
                  Solar Panels + Powerwall
                </Text>

                <Text mt="xs" c="dimmed" size="sm">
                  Panels for your existing roof with backup protection
                </Text>
              </Card>
              <Card
                shadow="sm"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank">
                <Card.Section>
                  <Image
                    src="https://digitalassets.tesla.com/image/upload/q_auto/f_auto/w_2048/prod/fulfillment/energy/Order/EnergyConfigurator/sr-selector-image-desktop"
                    h={160}
                  />
                </Card.Section>

                <Text fw={500} size="lg" mt="md">
                  Solar Panels + Powerwall
                </Text>

                <Text mt="xs" c="dimmed" size="sm">
                  New luxury integrated solar roof with backup protection
                </Text>
              </Card>
              <Card shadow="sm" padding="xl" target="_blank">
                <Card.Section>
                  <Image
                    src="https://digitalassets.tesla.com/image/upload/q_auto/f_auto/w_2048/prod/fulfillment/energy/Order/EnergyConfigurator/pw-selector-image"
                    h={160}
                  />
                </Card.Section>

                <Text fw={500} size="lg" mt="md">
                  Powerwall Only
                </Text>

                <Text mt="xs" c="dimmed" size="sm">
                  Energy backup for your home
                </Text>
              </Card>
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
}
