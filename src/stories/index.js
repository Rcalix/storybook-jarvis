import React from 'react';
import data from './data.json';
import { StyleRoot } from "radium";
import '@storybook/addon-knobs/register'
import { withNotes } from '@storybook/addon-notes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';
import Button from "backpack-ui/dist/components/button";
import AvatarMarker from "backpack-ui/dist/components/avatarMarker";
import ArticleAuthor from "backpack-ui/dist/components/articleAuthor";
import ImageCarousel from "backpack-ui/dist/components/imageCarousel";
import MastheadSlider from "backpack-ui/dist/components/mastheadSlider";
import Slide from "backpack-ui/dist/components/slide";
import Author from "backpack-ui/dist/components/author";
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add("Button - primary", withNotes('A very simple component')(() => (
    <Button
      color={select("Color", ["blue", "white", "gray", "red", "transparent"], "blue")}
      size={select("Size", ["tiny", "small", "medium", "large", "huge"], "medium")}
      border={boolean("Border", true)}
      disabled={boolean("Disabled", false)}
      full={boolean("Full width", false)}
      rounded={boolean("Rounded", false)}
      onClick={action("clicked")}
    >
      {text("Text", "Hello Button")}
    </Button>
  )));

storiesOf('Author', module)
  .addDecorator(withKnobs)
  .add("Article author", () => (
    <ArticleAuthor
      name={text("Name", "Alex Butler")}
      title={text("Title", "Global news reporter")}
      avatarSrc={text("Avatar image URL", data.avatar.default)}
    />
  ))
  .add("Author", () => (
    <Author
      name={text("Name", "Alex Butler")}
      title={text("Title", "Global news reporter")}
      alignment={select("Alignment", ["left", "center", "right"], "left")}
    />
  ));

  storiesOf("Carousels", module)
  .addDecorator(withKnobs)
  .add("Image carousel", () => (
    <ImageCarousel
      images={[
        "https://s3.amazonaws.com/static-asset/backpack-ui/scotland-1.770x430.jpg",
        "https://s3.amazonaws.com/static-asset/backpack-ui/scotland-2.770x430.jpg",
        "https://s3.amazonaws.com/static-asset/backpack-ui/scotland-3.770x430.jpg",
      ]}
      imageSize={[770, 430]}
      index={null}
    />
  ))
  .add("Masthead slider", () => {
    const items = [{
      adPosition: "",
      image: "https://lonelyplanetstatic.imgix.net/copilot%2Fimages%2FR2V0dHlJbWFnZXMtNjA3Njk2MTAzX2Z1bGwuanBnV2VkIEZlYiAwMSAyMDE3IDA5OjAxOjU1IEdNVCswMDAwIChVVEMp.jpg?q=40&sharp=10&w=2500",
      type: "Featured article",
      headline: "Honeymoon hacks: a guide for newly-weds abroad",
      description: ["Item 1", "Item 2"],
      callToAction: {
        text: "Happily Ever After",
        icon: "Play",
        link: "https://www.lonelyplanet.com/travel-tips-and-articles/honeymoon-survival-the-ultimate-guide-for-newlyweds-abroad",
      },
      id: 3,
    }, {
      adPosition: "",
      tabTitle: "Sicily?s best coastal hikes",
      image: "https://lonelyplanetstatic.imgix.net/copilot/images/R2V0dHlJbWFnZXMtNDY3NTY3MjI4X3N1cGVyLTc1YzEyMjJjOGNhOC5qcGdUdWUgSmFuIDMxIDIwMTcgMTA6NDA6MzUgR01UKzAwMDAgKFVUQyk%3D.jpg?q=40&sharp=10&w=2500",
      type: "FEATURED ARTICLE",
      headline: "Sicily?s best coastal hikes",
      description: "",
      callToAction: {
        text: "Isles for Miles",
        icon: "Play",
        link: "https://www.lonelyplanet.com/italy/sicily/aeolian-islands/travel-tips-and-articles/sicilys-best-coastal-hikes",
      },
      id: 1,
    }, {
      adPosition: "",
      tabTitle: "Architecture for travellers: a novice's guide",
      image: "https://lonelyplanetstatic.imgix.net/copilot%2Fimages%2FR2V0dHlJbWFnZXMtNTM0NzUzNjQ1X3N1cGVyLmpwZ01vbiBKYW4gMzAgMjAxNyAwOTo0MToyOSBHTVQrMDAwMCAoVVRDKQ%3D%3D.jpg?q=40&sharp=10&w=2500",
      type: "FEATURED ARTICLE",
      headline: "Architecture for travellers: a novice's guide",
      graphic: "https://s3.amazonaws.com/static-asset/op-video-sync/assets/gopro_graphic_test.png",
      description: "",
      callToAction: {
        text: "Play",
        icon: "Play",
        link: "https://www.lonelyplanet.com/travel-tips-and-articles/architecture-for-travellers-a-novices-guide",
      },
      id: 4,
    }];
    const slides = items.map((item, index) => <Slide key={index} {...item} />);
    return (
      <StyleRoot>
        <MastheadSlider
          height={text("Masthead Heighst", "100vh")}
          slides={slides}
        />
      </StyleRoot>
    );
  });