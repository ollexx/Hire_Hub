import React from "react";
import Categories from "./ApplicantPageComponents/Company/CompaniesSection/index";
import {
  catObjOne,
  catObjThree,
  catObjTwo,
} from "./ApplicantPageComponents/Company/CompaniesSection/Data";
import CompanyHeadSection from "./ApplicantPageComponents/Company/CompaniesHeadSection";
const SeekerCompany = () => {
  return (
    <div id="category">
      <CompanyHeadSection />
      <Categories {...catObjOne} />
      <Categories {...catObjTwo} />
      <Categories {...catObjThree} />
    </div>
  );
};

export default SeekerCompany;