import { Box, Grid, Paper } from "@material-ui/core";
import React, { Component, useState } from "react";
import { Styles } from "./styles";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import { renderText } from "../DisplayComponent";
import { toast } from "react-toastify";

import { Step, StepLabel, Stepper } from "@mui/material";
import PersonalBio from "./FormSteps/PersonalBio";
import AdditionlInfo from "./FormSteps/AdditionalInformation";
import ProfessionalInfo from "./FormSteps/ProfessionalInformation";

class RegistrationForm extends Component {
  toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  handleValidation = () => {
    const { skillSet, educationSet, sector, summary, gender, type } =
      this.state.data;
    console.log(skillSet);
    if (skillSet.length < 1 || skillSet[0].skill === "") {
      toast.error("Please add atleast one skill", this.toastOptions);
      return false;
    } else if (educationSet.length < 1 || educationSet[0].skill === "") {
      toast.error(
        "Please add atleast one education background",
        this.toastOptions
      );
      return false;
    } else if (sector === "") {
      toast.error("Please specify your sector", this.toastOptions);
      return false;
    } else if (summary === "") {
      toast.error("Please tell us about yourself(Summary)", this.toastOptions);
      return false;
    } else if (gender === "") {
      toast.error("Please select your gender", this.toastOptions);
      return false;
    } else if (type === "") {
      toast.error("Please specify your user type", this.toastOptions);
      return false;
    }
    return true;
  };
  extractSkills = () => {
    const { data } = this.state;
    data.skillSet.forEach(function (value) {
      if (value.skill !== "") data.skills.push(value.skill);
    });
    this.setState({ data });
  };
  extractWorks = () => {
    const { data } = this.state;
    data.workSet.forEach(function (value) {
      data.work.push(value.skill);
    });
    this.setState({ data });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(this.handleValidation());
    const data = this.state.data;
    if (data.type === "Applicant") {
      // console.log(data.skillSet);
      // console.log(data.educationSet);
      console.log(data.workSet);
      this.extractSkills();
    }
    // if (handleValidation()) {
    //   const { data } = await axios.post(registerRoute, {
    //     username,
    //     email,
    //     password,
    //   });
    //   if (data.status === false) {
    //     toast.error(data.msg, toastOptions);
    //   } else {
    //     localStorage.setItem("user", JSON.stringify(data.user));
    //     navigate("/chat");
    //   }
    // }
  };
  state = {
    data: {
      firstName: "",
      lastName: "",
      gender: "",
      phone: "",
      email: "",
      type: "",
      username: "",
      password: "",

      cname: "",
      country: "",
      region: "",
      cabout: "",
      cdesc: "",

      avatar: "",
      csector: "",

      title: "",
      skills: [],
      skillSet: [{ skill: "" }],
      sector: "",
      summary: "",

      work: [],
      workSet: [
        {
          wtitle: "",
          wcompany: "",
          wlocation: "",
          wtype: "",
          wstart: "",
          wend: "",
        },
      ],

      education: [],
      educationSet: [{ etitle: "", ecollege: "", estart: "", eend: "" }],
    },
    errors: {},
    currentStep: 0,
  };
  render() {
    const { classes } = this.props;

    const handleOnChange = ({ target }) => {
      const { data, errors } = this.state;
      target.value.length <= 3
        ? (errors[
            target.name
          ] = `Length of ${target.name} must be greater than 3`)
        : (errors[target.name] = "");
      data[target.name] = target.value;
      this.setState({ data, errors });
    };

    const handleOnSkillChange = (e, index) => {
      const { data, errors } = this.state;
      e.target.value.length <= 2
        ? (errors[
            e.target.name
          ] = `Length of ${e.target.name} must be greater than 3`)
        : (errors[e.target.name] = "");
      data.skillSet[index].skill = e.target.value;
      this.setState({ data, errors });
    };

    const handleOnWorkChange = (e, property, index) => {
      const { data, errors } = this.state;
      e.target.value.length <= 0
        ? (errors[e.target.name] = ` ${e.target.name} must not be null`)
        : (errors[e.target.name] = "");
      data.workSet[index][property] = e.target.value;
      this.setState({ data, errors });
    };
    const handleOnEduChange = (e, property, index) => {
      const { data } = this.state;

      // e.target.value.length <= 0
      //   ? (errors[e.target.name] = ` ${e.target.name} must not be null`)
      //   : (errors[e.target.name] = "");
      data.educationSet[index][property] = e.target.value;
      this.setState({ data });
    };
    const setProfile = (file) => {
      const { data, errors } = this.state;
      data.avatar = file;
      this.setState({ data, errors });
      console.log(file);
    };

    const handleAddSkill = () => {
      const { data, errors } = this.state;
      data.skillSet = [...data.skillSet, { skill: "" }];
      this.setState({ data, errors });
    };
    const handleAddEdu = () => {
      const { data, errors } = this.state;
      data.educationSet = [
        ...data.educationSet,
        { etitle: "", ecollege: "", estart: "", eend: "" },
      ];
      this.setState({ data, errors });
    };
    const handleAddWork = () => {
      const { data, errors } = this.state;
      data.workSet = [
        ...data.workSet,
        {
          wtitle: "",
          wcompany: "",
          wlocation: "",
          wtype: "",
          wstart: "",
          wend: "",
        },
      ];
      this.setState({ data, errors });
    };

    const handleRemoveWork = (index) => {
      const { data, errors } = this.state;
      const values = [...data.workSet];
      values.splice(index, 1);
      data.workSet = values;
      this.setState({ data, errors });
    };
    const handleRemoveEdu = (index) => {
      const { data, errors } = this.state;
      const values = [...data.educationSet];
      values.splice(index, 1);
      data.educationSet = values;
      this.setState({ data, errors });
    };
    const handleRemoveSkill = (index) => {
      const { data, errors } = this.state;
      const values = [...data.skillSet];
      values.splice(index, 1);
      data.skillSet = values;
      this.setState({ data, errors });
    };

    const handleNext = () => {
      let { currentStep } = this.state;
      currentStep = currentStep + 1;
      this.setState({ currentStep });
    };
    const handleDateEdu = (date, index, type) => {
      const { data, errors } = this.state;
      data.educationSet[index][type] = date;
      this.setState({ data, errors });
    };
    const handleDateWork = (date, index, type) => {
      const { data, errors } = this.state;
      data.workSet[index][type] = date;
      this.setState({ data, errors });
    };
    const handlePrev = () => {
      let { currentStep } = this.state;
      currentStep = currentStep - 1;
      this.setState({ currentStep });
    };
    const selectCountry = (val) => {
      this.state.data.country = val;
      this.setState({ country: val });
    };

    const selectRegion = (val) => {
      this.state.data.region = val;
      this.setState({ region: val });
    };
    const steps = [
      { label: "Personal Bio" },
      { label: "Additional Information" },
      { label: "Professional Information" },
    ];

    const getStepsItems = (steps) => {
      switch (steps) {
        case 0:
          return (
            <PersonalBio
              state={this.state}
              handleOnChange={handleOnChange}
              handleNext={handleNext}
            />
          );
        case 1:
          return (
            <AdditionlInfo
              state={this.state}
              handleOnChange={handleOnChange}
              handleNext={handleNext}
              handlePrev={handlePrev}
              selectCountry={selectCountry}
              selectRegion={selectRegion}
              handleOnSkillChange={handleOnSkillChange}
              handleAddSkill={handleAddSkill}
              handleRemoveSkill={handleRemoveSkill}
              setProfile={setProfile}
            />
          );
        case 2:
          return (
            <ProfessionalInfo
              state={this.state}
              handleOnChange={handleOnChange}
              handleFinish={handleNext}
              handlePrev={handlePrev}
              handleDateEdu={handleDateEdu}
              handleAddEdu={handleAddEdu}
              handleRemoveEdu={handleRemoveEdu}
              handleOnWorkChange={handleOnWorkChange}
              handleDateWork={handleDateWork}
              handleRemoveWork={handleRemoveWork}
              handleOnEduChange={handleOnEduChange}
              handleAddWork={handleAddWork}
            />
          );
        default:
          return (
            <PersonalBio
              state={this.state}
              handleOnChange={handleOnChange}
              handleNext={handleNext}
            />
          );
      }
    };
    return (
      <div>
        <Grid container className={classes.formContainer}>
          <Grid item xs={12} sm={7}>
            <Paper>
              <Box p={2} mb={2} component={Paper}>
                <Box mb={1}>
                  {renderText({
                    label: "HireHub Registration Form",
                    variant: "h5",
                  })}
                </Box>
                <Stepper activeStep={this.state.currentStep} alternativeLabel>
                  {steps.map((item, i) => (
                    <Step key={i}>
                      <StepLabel>{item.label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Paper>

            <Box mb={16} component={Paper}>
              <form
                className={classes.form}
                onSubmit={(event) => this.handleSubmit(event)}
              >
                {getStepsItems(this.state.currentStep)}
              </form>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}

RegistrationForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(RegistrationForm);