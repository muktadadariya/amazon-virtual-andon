/**********************************************************************************************************************
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

// Import React Bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import EmptyCol
import EmptyCol from './EmptyCol';

/**
 * The class returns an empty row.
 * @class EmptyRow
 */
class EmptyRow extends React.Component {
  /**
   * Render the page
   */
  render() {
    return (
      <Row>
        <Col>
          <EmptyCol />
        </Col>
      </Row>
    );
  }
}

export default EmptyRow;