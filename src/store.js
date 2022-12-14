import { createRef } from "react";
import { Vector3 } from "three";

const state = {
  sections: 31,
  pages: 25,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "Who are you Today?",
      image: "/img (17).jpeg",
      aspect: 1.3,
      text: "",
    },
    {
      offset: 2,
      factor: 1.75,
      header: "we the people",
      image: "/img (14).jpeg",
      aspect: 1.7,
      text: "",
    },
    {
      offset: 3,
      factor: 1.75,
      header: "clinging to life",
      image: "/img (13).jpeg",
      aspect: 1.7,
      text: "Lord, what a splendid world we ruined",
    },
    {
      offset: 4,
      factor: 1.75,
      header: "control",
      image: "/img (12).jpeg",
      aspect: 1.7,
      text: "When we lose our principles, we invite chaos",
    },
    {
      offset: 5,
      factor: 1.75,
      header: "grays",
      image: "/img (11).jpeg",
      aspect: 1.7,
      text: "those who look on and do nothing",
    },
    {
      offset: 6,
      factor: 1.75,
      header: "",
      image: "/img (49).jpeg",
      aspect: 0.8,
      text: "those who look on and do nothing",
    },
    {
      offset: 7,
      factor: 1.75,
      header: "catch",
      image: "/img (48).jpeg",
      aspect: 0.8,
      text:
        "I'm starving, said the voice, and the night is chilly for a man without clothes.",
    },
    {
      offset: 8,
      factor: 1.75,
      header: "magnetism",
      image: "/img (47).jpeg",
      aspect: 0.8,
      text: "I tried to swim to the side",
    },
    {
      offset: 9,
      factor: 1.75,
      header: "moon",
      image: "/img (46).jpeg",
      aspect: 0.8,
      text:
        "sometimes a lonesome feeling comes to my door and the whole world turns blue",
    },
    {
      offset: 10,
      factor: 1.75,
      header: "lift home",
      image: "/img (45).jpeg",
      aspect: 0.8,
      text: "you can call me anything you want",
    },
    {
      offset: 11,
      factor: 1.75,
      header: "zeniba",
      image: "/img (44).jpeg",
      aspect: 0.8,
      text:
        "Once you meet someone, you never really forget them. It just takes a while for your memory to come back to you",
    },
    {
      offset: 12,
      factor: 1.75,
      header: "how soon is now?",
      image: "/img (40).jpeg",
      aspect: 0.8,
      text: "Do you really think She'll pull through",
    },
    {
      offset: 13,
      factor: 1.75,
      header: "feed off the hive",
      image: "/img (39).jpeg",
      aspect: 0.8,
      text: "Good day to hide",
    },
    {
      offset: 14,
      factor: 1.75,
      header: "notes",
      image: "/img (37).jpeg",
      aspect: 0.8,
      text: "I'm not human at all, I have no heart",
    },
    {
      offset: 15,
      factor: 1.75,
      header: "through the blizzard",
      image: "/img (36).jpeg",
      aspect: 0.8,
      text: "someday we will foresee obstacles",
    },
    {
      offset: 16,
      factor: 1.75,
      header: "morty",
      image: "/img (35).jpeg",
      aspect: 0.8,
      text:
        "nobody exists on purpose. Nobody belongs anywhere. We???re all going to die. Come watch TV.",
    },
    {
      offset: 17,
      factor: 1.75,
      header: "james",
      image: "/img (32).jpeg",
      aspect: 0.8,
      text: "that was the day I learned that silence is really loud",
    },
    {
      offset: 18,
      factor: 1.75,
      header: "haunt the field",
      image: "/img (31).jpeg",
      aspect: 0.8,
      text: "how do you want me to find sleep?",
    },
    {
      offset: 19,
      factor: 1.75,
      header: "wrong reasons",
      image: "/img (26).jpeg",
      aspect: 0.8,
      text: "i'm quite illiterate, but I read a lot.",
    },
    {
      offset: 20,
      factor: 1.75,
      header: "it???s called love",
      image: "/img (25).jpeg",
      aspect: 0.8,
      text: "staying in this room is what will make you sick",
    },
    {
      offset: 21,
      factor: 1.75,
      header: "choir of smoke",
      image: "/img (24).jpeg",
      aspect: 0.8,
      text: "we're lonely, babe, in a boat, again",
    },
    {
      offset: 22,
      factor: 1.75,
      header: "voice",
      image: "/img (20).jpeg",
      aspect: 0.8,
      text: "the smell of wood, the pose, the joke",
    },
    {
      offset: 23,
      factor: 1.75,
      header: "yelling",
      image: "/img (16).jpeg",
      aspect: 0.8,
      text: "don't wanna think about anything else ",
    },
    {
      offset: 24,
      factor: 1.75,
      header: "Totoro",
      image: "/img (2).jpeg",
      aspect: 1.3,
      text: "",
    },
    {
      offset: 25,
      factor: 1.75,
      header: "Ponyo loves Sosuke",
      image: "/img (3).jpeg",
      aspect: 1.7,
      text: "",
    },
    {
      offset: 26,
      factor: 1.75,
      header: "Jiji at ezo",
      image: "/img (4).jpeg",
      aspect: 1.7,
      text: "",
    },
    {
      offset: 27,
      factor: 1.75,
      header: "Kiki & Tombo",
      image: "/img (5).jpeg",
      aspect: 1.7,
      text: "",
    },
    {
      offset: 28,
      factor: 1.75,
      header: "inlove",
      image: "/img (6).jpeg",
      aspect: 1.7,
      text: "You wer?? the one we where waiting for",
    },
    {
      offset: 29,
      factor: 1.75,
      header: "Soot Sprites",
      image: "/img (7).jpeg",
      aspect: 1.7,
      text: "can you save the girl you love?",
    },
    {
      offset: 30,
      factor: 1.75,
      header: "Hold your breath",
      image: "/img (8).jpeg",
      aspect: 1.7,
      text: "even the tiniest breath will break the spell.",
    },
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 },
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 14, factor: 4 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 1.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 1.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 2.25, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 1.8, factor: 2 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 2.5, factor: 6 },
  ],
  top: createRef(),
};

export default state;
