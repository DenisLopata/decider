import React, { MouseEvent, useEffect, useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../styles/randomChoice.css";

//form data interface
interface RandomChoiceData {
  imageSource: string;
  choiceText: string;
  isSending: boolean;
}

//material ui custom styles
const useStyles = makeStyles((theme : Theme) => 
  createStyles({
    bntMarginTop: {
      marginTop: theme.spacing(2),
    },
  }),
);

export default function RandomChoice() {
  const classes = useStyles();
  const [choiceData, setChoiceData] = useState<RandomChoiceData>({
    imageSource: "",
    choiceText: "",
    isSending: false,
  });
  const [shouldUpdate, setShouldUpdate] = useState(false);
  //useRef do not fetch data on first load
  const firstUpdate = useRef(true);

  const handleMakeDecisionClick = (event: MouseEvent) => {
    setChoiceData({ imageSource: "none", choiceText: "", isSending: true });
    setShouldUpdate(!shouldUpdate);
  };

  useEffect(() => {
    setChoiceData({ imageSource: "none", choiceText: "", isSending: false });
    if (!firstUpdate.current) {
      console.log("Fetching data...");
      fetch("https://yesno.wtf/api")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch from API");
          }
          return response.json();
        })
        .then((data) => {
          setChoiceData({
            imageSource: data.image,
            choiceText: data.answer,
            isSending: false,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      firstUpdate.current = false;
    }
  }, [shouldUpdate]);

  return (
      <Container>
        {choiceData.imageSource !== "none" ? (
          <img
            className="imgChoiceImg"
            src={choiceData?.imageSource}
            alt="gifImg"
          ></img>
        ) : (
          <div className="divNoChoice"></div>
        )}
        <div className="divChoiceText">{choiceData.choiceText}</div>

        <Button
          name="btnMakeDecision"
          variant="contained"
          color="primary"
          disabled={choiceData.isSending}
          onClick={handleMakeDecisionClick}
          className = {classes.bntMarginTop}
        >
          Make Decision
        </Button>
      </Container>
  );
}
