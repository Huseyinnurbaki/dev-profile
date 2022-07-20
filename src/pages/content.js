import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Seo from "../components/seo";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import ContentCard from "../components/contentCard";
import ContentData from "../data";

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

  let hashs = [];
  ContentData.map((item) => {
    hashs = hashs.concat(item.hashtags);
  });

  // eslint-disable-next-line no-undef
  hashs = [...new Set(hashs)];

  const [selectedHashtags, setSelectedHashtags] = React.useState(hashs);

  function onChipClick(hashtag) {
    if (selectedHashtags.includes(hashtag)) {
      const newHashtagList = selectedHashtags.filter((selected) => {
        return selected !== hashtag;
      });
      console.log("newHashtagList", newHashtagList);
      setSelectedHashtags(newHashtagList);
    } else {
      const updateHashtagList = Object.assign([], selectedHashtags);
      updateHashtagList.push(hashtag);

      setSelectedHashtags(updateHashtagList);
    }
  }

  return (
    <main>
      <Seo site={site} />
      <title>Content Page</title>

      <Container fixed>
        <Stack spacing={2}>
          <Grid
            container
            spacing={3}
            alignContent="center"
            justifyContent="center"
          >
            {hashs.map((item, key) => (
              <Grid item xs="auto" key={key}>
                <Chip
                  variant={
                    selectedHashtags.includes(item) ? "filled" : "outlined"
                  }
                  value={item}
                  onClick={() => onChipClick(item)}
                  label={`#${item}`}
                  clickable
                  color="warning"
                />
              </Grid>
            ))}
          </Grid>
          <Grid
            container
            spacing={3}
            alignContent="center"
            justifyContent="center"
          >
            {ContentData.map(
              (item, index) =>
                selectedHashtags.some((r) => item.hashtags.includes(r)) && (
                  <Grid item xs="auto" key={index}>
                    <ContentCard item={item} />
                  </Grid>
                )
            )}
          </Grid>
        </Stack>
      </Container>
    </main>
  );
}

export default ContentPage;
