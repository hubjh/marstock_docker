import React from "react";
import SwitchSelector from "react-switch-selector";

const LearningSelectSwitch = ({ setSelectLearning }) => {
  const options = [
    {
      label: "Arima",
      value: "arima",
      selectedBackgroundColor: "white",
      selectedFontColor: "black",
    },
    {
      label: "LSTM",
      value: "lstm",
      selectedBackgroundColor: "white",
      selectedFontColor: "black",
    },
  ];

  const onChange = (newValue) => {
    console.log("newValue :", newValue);
    newValue === "arima" ? setSelectLearning(false) : setSelectLearning(true);
  };
  // const initialSelectedIndex = options.findIndex(
  //   ({ value }) => value === "bar"
  // );
  return (
    <>
      <div className="your-required-wrapper" style={{ width: 240, height: 40 }}>
        <SwitchSelector
          onChange={onChange}
          options={options}
          // initialSelectedIndex={0}
          backgroundColor={"#ff954f"}
          fontColor={"white"}
          fontSize={26}
        />
      </div>
    </>
  );
};

export default LearningSelectSwitch;
