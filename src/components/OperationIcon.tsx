import { Icon } from 'native-base';
import React, { Component } from 'react';

interface OperationIconProps {
  operation: {
    icon: string;
    color: string;
  };
}

export class OperationIcon extends Component<OperationIconProps> {
  public render() {
    const { operation } = this.props;
    return (
      <Icon
        type="Entypo"
        name={operation.icon}
        style={{
          fontSize: 50,
          lineHeight: 80,
          height: 120,
          color: operation.color
        }}
      />
    );
  }
}

export default OperationIcon;
