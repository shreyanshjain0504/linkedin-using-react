import React, { PureComponent } from 'react';
import Label from '../atoms/Label.jsx';
import Input from '../atoms/Input.jsx'
import Button from '../atoms/Button.jsx';
import saveData from '../helpers/saveData.js';

class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      experienceArray: JSON.parse(localStorage.getItem('experience')) || [],
      educationArray: JSON.parse(localStorage.getItem('education')) || [],
      formData: {
        position: '',
        company: '',
        from: '',
        to: '',
        desc: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    for (let index in this.state.formData) {
      if (this.state.formData[index] === '') {
        return;
      }
    }

    if (this.props.formType === 'education') {
      this.createEducation();
    } else {
      this.createExperience();
    }
  };

  createExperience = () => {
    const newExperience = {
      ...this.state.formData,
      type: 'experience',
      time: new Date().getTime(),
    };
    const updatedExperienceArray = [newExperience, ...this.state.experienceArray];
    this.props.updateExperience(updatedExperienceArray);
    saveData('experience', JSON.stringify(updatedExperienceArray));
    this.props.setToggle(false); 
  };

  createEducation = () => {
    const newEducation = {
      ...this.state.formData,
      type: 'education',
      time: new Date().getTime(),
    };
    const updatedEducationArray = [newEducation, ...this.state.educationArray];
    this.props.updateEducation(updatedEducationArray);
    saveData('education', JSON.stringify(updatedEducationArray));
    this.props.setToggle(false); 
  };

  render() {
    return (
      <div id="popupOverlay" className="overlay-container">
        <div className="popup-box">
          <form className="form-container" onSubmit={this.handleSubmit}>
            <Label htmlFor="position" value={this.props.formType === 'education' ? 'Branch' : 'Position'} />
            <Input
              placeholder={this.props.formType === 'education' ? 'Enter your Branch' : 'Enter your Position'}
              id="position"
              name="position"
              value={this.state.formData.position}
              onChange={this.handleChange}
            />

            <Label htmlFor="company" value={this.props.formType === 'education' ? 'College' : 'Company'} />
            <Input
              placeholder={this.props.formType === 'education' ? 'Enter your College' : 'Enter your Company'}
              id="company"
              name="company"
              value={this.state.formData.company}
              onChange={this.handleChange}
            />

            <Label htmlFor="from" value="From" />
            <Input
              placeholder="From"
              id="from"
              name="from"
              value={this.state.formData.from}
              onChange={this.handleChange}
            />

            <Label htmlFor="to" value="To" />
            <Input
              placeholder="To"
              id="to"
              name="to"
              value={this.state.formData.to}
              onChange={this.handleChange}
            />

            <Label htmlFor="desc" value="Description" />
            <Input
              placeholder="Description"
              id="desc"
              name="desc"
              value={this.state.formData.desc}
              onChange={this.handleChange}
            />

            <div className="btn-collection">
              <Button
                className="btn-submit"
                value={this.props.formType}
                textContent={this.props.formType === 'education' ? 'Add Education' : 'Add Experience'}
                onClick={this.handleSubmit}
              />
            </div>
          </form>

          <Button
            className="btn-close-popup"
            onClick={() => this.props.setToggle(false)}
            textContent="Close"
            value="close"
          />
        </div>
      </div>
    );
  }
}

export default Form;