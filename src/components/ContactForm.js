import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { media } from '../utils/style.utils'

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

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
      mailSent: false,
      error: null,
    }
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

  render() {
    return (
      <div>
        <p>Contact Me</p>
        <FormWrapper>
          <form action="#">
            <label>First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              value={this.state.fname}
              onChange={e => this.setState({ fname: e.target.value })}
            />

            <label>Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              value={this.state.lname}
              onChange={e => this.setState({ lname: e.target.value })}
            />

            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />

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
