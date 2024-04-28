import { Container, Space, Button, Image } from "@mantine/core";

import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/charge.css";
export default function Charge() {
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
      <div className="c">
        <Container>
          <div className="text-light text-center">
            <h1>Help Me Charge</h1>
            <p>
              Find the charging solution that meets your needs by answering
              questions about your home, driving habits and lifestyle.
            </p>
            <Button>Get Started</Button>
          </div>
        </Container>
      </div>
    </>
  );
}
