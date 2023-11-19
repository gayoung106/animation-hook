import React, { RefObject } from "react";
import useFadeIn from "../hooks/useFadeIn";
import {
  Wrapper,
  Label,
  Title,
  ItemWrapper,
  ItemBox,
  ItemTitle,
  ItemDescription,
  ItemButton,
} from "../styles/home";
import { ElementStyles } from "../types/animationType";

const SAMPLE_ITEMS = [
  {
    title: "Volutpat odio",
    description:
      "Facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing. In hac habitasse platea dictumst quisque sagittis purus.",
    button: "Get started",
  },
  {
    title: "Diam donec",
    description:
      "Adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Pulvinar elementum integer enim neque volutpat ac.",
    button: "Switch over",
  },
  {
    title: "Elit at imperdiet",
    description:
      "Dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent.",
    button: "Read more",
  },
];

type AnimatedItem = {
  ref: RefObject<HTMLDivElement>;
  style: ElementStyles;
};

const Home = () => {
  const animatedItem: { [key: number]: AnimatedItem } = {
    0: useFadeIn("up", 1, 0),
    1: useFadeIn("up", 1, 0.2),
    2: useFadeIn("up", 1, 0.3),
  };

  return (
    <Wrapper>
      <Label>Our Services</Label>
      <Title>
        Quis hendrerit dolor
        <br />
        Magna eget est
      </Title>
      <ItemWrapper>
        {SAMPLE_ITEMS.map((item, index) => (
          <ItemBox key={item.title} {...animatedItem[index]}>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemDescription>{item.description}</ItemDescription>
            <ItemButton>{item.button}</ItemButton>
          </ItemBox>
        ))}
      </ItemWrapper>
    </Wrapper>
  );
};

export default Home;
