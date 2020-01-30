import * as React from "react";
import { ResumeSection } from "./ResumeSection";
import { SkillsSection } from "./SkillsSection";
import Jumbotron from "react-bootstrap/Jumbotron";
export interface ResumeProps { userName: string; }
export interface ResumeState { }

export class CarList extends React.Component<ResumeProps, {}> {
  render() {
    let mySkills: string[] = Array();
    return (

      <div>
        <Jumbotron fluid>
          <h1>Welcome!</h1>
        </Jumbotron>
        <div>
          <h2>Cars for {this.props.userName} </h2>
          <ol><SkillsSection skillType="Vie catalog"
            skillList={mySkills}  ></SkillsSection></ol>
        </div>
        
        <div>
          <ResumeSection type=""></ResumeSection>
        </div>

      </div>
    );
  }
}