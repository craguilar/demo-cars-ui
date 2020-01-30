import * as React from "react";

export interface ResumeSectionProps {
  type: string
}

export interface ResumeSectionState { }

export class ResumeSection extends React.Component<ResumeSectionProps, ResumeSectionState>{

  render() {
    return (<h2>{this.props.type}</h2>);
  }
}