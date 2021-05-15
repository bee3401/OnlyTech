import React from "react";
import Form from "react-bootstrap/Form";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup"
import ToggleButton from 'react-bootstrap/ToggleButton'
import Button from 'react-bootstrap/Button'
import axios from "axios";
import {Link} from "react-router-dom";

//stylesheet
import './createNewProject.css'

//make things required
//bold text
//make checkbuttons only be able to mark one of them
//make responsive
/*
make choice open --
investor: amount looking for
developer: feature looking to be developed
user -- nothing (?)
*/
//deal with wanting more than one option (investor, developer, user)
class CreateNewProject extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: "",
            user: "test",
            description: "",
            typeProject: "",
            lookingFor: "",
            projectStage: 0,
            github: "",
        }
    }

    handleChangeName = (event) => {this.setState({name: event.target.value});}

    handleChangeDescription = (event) => {this.setState ({description: event.target.value});}

    handleProjectStage = (event) => {this.setState ({projectStage: event.target.value})}

    handleTypeClicked = (event) => {this.setState ({typeProject: event.target.value});}

    handleLookingFor = (event) => {this.setState ({typeProject: event.target.value});}

    handleGithubLink = (event) => {this.setState ({github: event.target.value})}

    handleSumbit = (event) => {
        event.preventDefault();

        let databody = {
            "name": this.state.name,
            "user": this.state.user,
            "description": this.state.description, 
            "typeProject": this.state.typeProject,
            "lookingFor": this.state.lookingFor,
            "projectStage": this.state.projectStage,
            "github": this.state.github,
        }

        /*try {
            await axios.post (
                "http://localhost::5000/posts",
                databody
            );
        } catch (err){
            console.log(err);
        }*/
    }

    render () {
        return ( 
            <Form className = "compelte-form" onSubmit={this.handleSumbit}>
               <Form.Group className="inputForm">
               <Form.Label className = "formText">PROJECT NAME:</Form.Label>
                    <Form.Control type="text" placeholder="Enter project name" value = {this.state.name} onChange={this.handleChangeName}/>
                </Form.Group>
                <Form.Group className="inputForm" controlId="exampleForm.ControlTextArea1">
                    <Form.Label className = "formText">PROJECT DESCRIPTION:</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder="Describe the project in a few scentences" value = {this.state.description} onChange = {this.handleChangeDescription}/>
                </Form.Group>
                <Form.Group className="inputForm">
                    <Form.Label className="formText"> PROJECT STAGE: </Form.Label>
                    <Form.Check name="terms" label="Stage 1: Idea Validation Process" value={1} onClick={this.handleProjectStage}/>
                    <Form.Check name="terms" label="Stage 2: Starting Code" value={2} onClick={this.handleProjectStage}/>
                    <Form.Check name="terms" label="Stage 3: Mostly Developed" value={3} onClick={this.handleProjectStage}/>
                </Form.Group>
                <div className = "row_div">
                <Form.Group className = "toggleGroup">
                    <Form.Label className = "formText">TYPE OF PROJECT:</Form.Label>
                    <br/>    
                    <ToggleButtonGroup name = "options" type = "radio">
                        <ToggleButton value = {"project"} className = "toggleButtons" onClick={this.handleTypeClicked}>Side Project</ToggleButton>
                        <ToggleButton value = {"startup"} className = "toggleButtons" onClick={this.handleTypeClicked}>Start Up</ToggleButton>
                    </ToggleButtonGroup>
                 </Form.Group>
                 <Form.Group className = "toggleGroup1">
                    <Form.Label className = "formText">LOOKING FOR:</Form.Label>
                    <br/>    
                    <ToggleButtonGroup type="radio" name = "options">
                        <ToggleButton className = "toggleButtons" value={"developer"}>Developer</ToggleButton>
                        <ToggleButton className = "toggleButtons" value={"users"}>Users</ToggleButton>
                        <ToggleButton className = "toggleButtons" value={"investor"}>Investor</ToggleButton>
                    </ToggleButtonGroup>
                    <br/>
                 </Form.Group>
                 </div>
                 <Form.Group className = "inputForm">
                     <Form.Label className= "formText"> INSERT IMAGE: </Form.Label>
                      <Form.File id="custom-file" label="Custom file input" custom  accept="image/x-png,image/gif,image/jpeg" />
                 </Form.Group>
                 <Form.Group className="inputForm">
                    <Form.Label className = "formText">GITHUB REPO:</Form.Label>
                    <Form.Control type="text" placeholder="Enter github link" value = {this.state.github} onChange={this.handleGithubLink}/>
                </Form.Group>
                <Form.Group  className = "buttonGroup">
                    <Button variant="primary" type="sumbit">Submit</Button>
                    <Button className = "next_button" variant="secondary" type="cancel"><Link to="/">Cancel</Link></Button>
                </Form.Group>
            </Form>
        );
    }
}

export default CreateNewProject;