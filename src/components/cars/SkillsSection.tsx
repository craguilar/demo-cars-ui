import * as React from "react";

export interface SkillsProps { 
  skillType : string;
  skillList: Array<string>;
}

export interface SkillsState { }

export class SkillsSection extends React.Component<SkillsProps, SkillsState>{

  render(){
    return (
      <b>{this.props.skillType} :</b>
    );
  }
  
}