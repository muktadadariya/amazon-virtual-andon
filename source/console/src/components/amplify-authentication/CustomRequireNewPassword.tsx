/*********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/

// Import React and Amplify packages
import React from 'react';
import { RequireNewPassword } from 'aws-amplify-react';

// Import React Bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Import custom setting
import { getLocaleString } from '../../util/CustomUtil';

/**
 * Customized Amplify required new password
 * @class CustomRequireNewPassword
 */
class CustomRequireNewPassword extends RequireNewPassword {
  private password: string;
  private confirmPassword: string;

  constructor(props: any) {
    super(props);
    this._validAuthStates = ['requireNewPassword'];

    this.password = '';
    this.confirmPassword = '';

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
  }

  /**
   * Handle the key down event
   * @param event {any} - Key down event
   */
  handleKeyDown(event: any) {
    // If an enter key (key code 13) is down, call the change function.
    if (event.keyCode === 13) {
      event.preventDefault();
      this.checkPassword();
    }
  }

  /**
   * Check if the password is not empty, and the password the confirm password is same.
   */
  checkPassword() {
    if (this.password.trim() === '') {
      this.error(getLocaleString('Password cannot be empty.'));
    } else if (this.password !== this.confirmPassword) {
      this.error(getLocaleString('Password and confirm password are different.'));
    } else {
      this.change();
    }
  }

  /**
   * Show customized component
   */
  showComponent() {
    return (
      <div className="main-wrapper">
        <Navbar bg="light">
          <Navbar.Brand href="/">
            Amazon Virtual Andon
          </Navbar.Brand>
        </Navbar>
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={6} md={8} xs={12}>
              <h4>{ getLocaleString('Change Password') }</h4>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg={6} md={6} xs={12}>
              <Form>
                <Form.Group as={Row} controlId="formPassword" key="formPassword">
                  <Form.Label column md={3}>
                    { getLocaleString('New Password') }
                  </Form.Label>
                  <Col md={9}>
                    <Form.Control key="password" name="password" type="password" placeholder={ getLocaleString('New Password') } onKeyDown={this.handleKeyDown} onChange={(event: any) => { this.handleInputChange(event); this.password = event.target.value }} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formConfirmPassword" key="formConfirmPassword">
                  <Form.Label column md={3}>
                    { getLocaleString('Confirm Password') }
                  </Form.Label>
                  <Col md={9}>
                    <Form.Control key="confirmPassword" name="confirmPassword" type="password" placeholder={ getLocaleString('Confirm Password') } onKeyDown={this.handleKeyDown} onChange={(event: any) => { this.confirmPassword = event.target.value }} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="justify-content-between">
                  <Button key="buttonBackToSignIn" variant="link" onClick={() => this.changeState('signIn')}>{ getLocaleString('Back to Sign In') }</Button>
                  <Button key="buttonSend" className="pull-right" variant="primary" onClick={this.checkPassword}>{ getLocaleString('Change') }</Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CustomRequireNewPassword;