import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import project1 from "../../assets/portfolio/project1.png";
import project2 from "../../assets/portfolio/project2.png";
import project3 from "../../assets/portfolio/project3.png";
import project4 from "../../assets/portfolio/project4.png";
import project5 from "../../assets/portfolio/project5.png";
import project6 from "../../assets/portfolio/project6.png";
import project7 from "../../assets/portfolio/project7.png";
import project8 from "../../assets/portfolio/project8.png";

export default function ImgList() {
  return (
    <div className="lg:mx-20 mx-5 my-20">
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <a href={item.href} target="_blank">
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </a>
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: project1,
    title: "Kayi Tribe Restaurant",
    author: "@salehahmed",
    href: "https://restaurants-e7203.web.app/",
    // rows: 2,
    // cols: 2,
    // featured: true,
  },
  {
    img: project2,
    title: "Architect",
    author: "@salehahmed",
    href: "https://architect-website-61fbd.web.app/",
  },
  {
    img: project3,
    title: "BugsBytes",
    author: "@salehahmed",
    href: "https://bugsbytes.com/",
  },
  {
    img: project4,
    title: "MEHRAF",
    author: "@salehahmed",
    href: "https://mehraf-all-it-solution.web.app/",
  },
  {
    img: project5,
    title: "Convention Center",
    author: "@salehahmed",
    href: "https://convention-center-s-a-dev.netlify.app/",
  },
  {
    img: project6,
    title: "Influencer Gear",
    author: "@salehahmed",
    href: "https://salehahmed19.github.io/Influencer-Gear/",
  },
  {
    img: project7,
    title: "Penguin Fashion",
    author: "@salehahmed",
    href: "https://salehahmed19.github.io/Penguin-Fashion/",
  },
  {
    img: project8,
    title: "Panda Commerce",
    author: "@salehahmed",
    href: "https://salehahmed19.github.io/Panda-Commerce/",
  },
];
