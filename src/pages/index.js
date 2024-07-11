import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Seo from "../components/seo";
import ParticlesBg from "../components/particles";

import Grid from "@mui/material/Grid";
import OutlinedCard from "../components/outlinedCard";

function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          siteUrl
        }
        buildTime
      }
    }
  `);
  const { site } = data;

  return (
    <main>
      <ParticlesBg />
      <Seo site={site} />
      <title>Home Page</title>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{
          height: "100%",
          position: "absolute",
        }}
      >
        <Grid item xl={6} />
        <h1 style={{ display: "none" }}> hhaluk.me </h1>
        <OutlinedCard />
      </Grid>
    </main>
  );
}

export default IndexPage;
