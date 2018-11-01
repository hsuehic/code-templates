/**
 * {__name__}.jsx
 * @Author: {__author__}({__email__})
 * @Link: {__link__}
 * @Date: {__date__}
 */

// @flow

import * as React from 'react';

type PropTypes = {
  name: string
};

type StateTypes = {
  isShow: boolean
};

export class Component extends React.Component<PropTypes, StateTypes> {
  constructor(props: PropTypes, context: any) {
    super(props, context);
    this.state = {
      isShow: true
    };
  }
  render() {
    return <div />;
  }
}
