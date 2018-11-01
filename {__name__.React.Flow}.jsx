/**
 * {__name__}.jsx
 * @Author: {__author__}({__email__})
 * @Link: {__link__}
 * @Date: {__date__}
 */

// @flow

import * as React from 'react';

type Props = {
  name: string
};

export default class Component extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return <div />;
  }
}
