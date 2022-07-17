import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Seo from "../components/seo";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ContentCard from "../components/contentCard";
import ContentData from "../data"

function ContentPage() {
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
      <Seo site={site} />
      <title>Content Page</title>

      <Container fixed>
        <Grid
          container
          spacing={3}
          alignContent="center"
          justifyContent="center"
        >
          {ContentData.map((item, index) => (
            <Grid item xs="auto" key={index}>
              <ContentCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}

export default ContentPage;
