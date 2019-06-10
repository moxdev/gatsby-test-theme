import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { media } from '../utils/style.utils'

// Look into Formik
// https://jaredpalmer.com/formik/docs/overview

const FormWrapper = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  label,
  input {
    margin: 10px 0;
  }

  input {
    border: 1px solid grey;
    display: block;
  }

  textarea {
    display: block;
    border: 1px solid grey;
    margin: 10px 0;
  }
`
const API_PATH = 'https://www.shanebiggs.com/api/contact/index.php'

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
)

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fname: null,
      lname: null,
      email: null,
      message: null,
      mailSent: false,
      formErrors: {
        fname: '',
        lname: '',
        email: '',
      },
      emailValid: false,
      formValid: false,
    }
  }

  handleUserInput = e => {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value }, () => {
      this.validateField(name, value)
    })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state,
    })
      .then(result => {
        if (result.data.sent) {
          this.setState({
            mailSent: result.data.sent,
          })
          this.setState({ error: false })
        } else {
          this.setState({ error: true })
        }
      })
      .catch(error => this.setState({ error: error.message }))
  }

  validateField(fieldName, value) {
    const fieldValidationErrors = this.state.formErrors
    let emailValid = this.state.emailValid

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        fieldValidationErrors.email = emailValid ? '' : ' is invalid'
        break
      default:
        break
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid,
      },
      this.validateForm
    )
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid,
    })
  }

  errorClass(error) {
    return error.length === 0 ? '' : 'has-error'
  }

  render() {
    const { errors } = this.state
    return (
      <div>
        <p>Contact Me</p>
        <FormWrapper>
          <form action="#">
            <label>First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Your name.."
              value={this.state.fname}
              onChange={this.handleUserInput}
              noValidate
            />
            {errors.email.length > 0 && (
              <span className="error">{errors.fname}</span>
            )}

            <label>Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Your last name.."
              value={this.state.lname}
              onChange={this.handleUserInput}
              noValidate
            />
            {errors.email.length > 0 && (
              <span className="error">{errors.lname}</span>
            )}

            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={this.state.email}
              onChange={this.handleUserInput}
              noValidate
            />
            {errors.email.length > 0 && (
              <span className="error">{errors.email}</span>
            )}

            <label>Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write something.."
              onChange={e => this.setState({ message: e.target.value })}
              value={this.state.message}
            />

            <input
              type="submit"
              onClick={e => this.handleFormSubmit(e)}
              value="Submit"
            />
            <div>
              {this.state.mailSent && (
                <div className="sucsess">Thank you for contcting me.</div>
              )}
              {this.state.error && (
                <div className="error">Sorry we had some problems.</div>
              )}
            </div>
          </form>
        </FormWrapper>
      </div>
    )
  }
}

export default ContactForm

// FloorPlanLightbox.displayName = 'FloorPlanLightbox'
// FloorPlanLightbox.propTypes = {
//   floorplans: PropTypes.array.isRequired,
// }
