import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {Input, View } from 'native-base';
import Text from '../Text';
import {colors, componentSize, textSizes} from '../../helpers/constants';

class LabelInput extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {label, children} = this.props;
    return (
      <View style={styles.textLabelContainer}>
        <Text label={label} isBold style={styles.lblLabelStyle} />
        {children}
      </View>
    );
  }
}

LabelInput.propTypes = {
  label: PropTypes.string,
};
LabelInput.defaultProps = {
  label: '',
};

class InputCustom extends PureComponent {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.preparePlaceholder = this.preparePlaceholder.bind(this);
    this.prepareLabel = this.prepareLabel.bind(this);
    this.handleStyle = this.handleStyle.bind(this);
    this.handleInputStyle = this.handleInputStyle.bind(this);
    this.state = {
      filteredValue: null,
    };
  }

  handleInputStyle(defaultStyle) {
    const {isAlignRight, isAlignCenter} = this.props;
    // check right alignment
    if (isAlignRight) {
      return {...defaultStyle, ...styles.inputAlignRight};
    }
    // check center alignment
    return isAlignCenter
      ? {...defaultStyle, ...styles.inputAlignCenter}
      : {...defaultStyle};
  }

  handleStyle() {
    const {isHalf, isQuarter, style} = this.props;
    let defaultStyle = {...styles.textContainer};
    if (isHalf) {
      defaultStyle = {...defaultStyle, ...styles.textContainerHalf};
    }
    if (isQuarter) {
      defaultStyle = {...defaultStyle, ...styles.textContainerQuarter};
    }
    return {...defaultStyle, ...style};
  }

  handleInput(values) {
    const {isNumber} = this.props;
    let newValues = values;
    console.log('newValues', newValues);
    if (values && newValues) {
      if (isNumber) {
        if (newValues === null || newValues === '' || newValues === undefined) {
          console.log('Is null and needs reset');
          newValues = '';
        } else {
          console.log('change numbers');
          newValues = values.replace(/[^-0-9.,]+/, '');
        }
      }
    }
    this.setState({filteredValue: newValues}, () => {
      // onValueChange(newValues);
    });
  }

  preparePlaceholder() {
    const {placeholder} = this.props;
    return placeholder;
  }

  prepareLabel() {
    const {labelTop, labelBold, label} = this.props;
    if (labelTop) {
      return (
        <Text isBold={labelBold} style={styles.textLabel} label={labelTop} />
      );
    }
    return label;
  }

  render() {
    const {
      withLabel,
      maxLength,
      label,
      noStyle,
      isPassword,
      isNumber,
      isCurrency,
    } = this.props;
    if (noStyle)
      return (
        <Input
          keyboardType={isNumber ? 'number-pad' : 'default'}
          secureTextEntry={isPassword}
          maxLength={maxLength}
          multiLine={false}
          style={this.handleInputStyle(styles.lblInputStyle)}
          placeholder={this.preparePlaceholder()}
          onChangeText={this.handleInput}
          value={this.state.filteredValue}
        />
      );
    return withLabel ? (
      <LabelInput label={label}>
        <Input
          keyboardType={isNumber ? 'number-pad' : 'default'}
          secureTextEntry={isPassword}
          maxLength={maxLength}
          multiLine={false}
          style={this.handleInputStyle(styles.lblInputStyle)}
          placeholder={this.preparePlaceholder()}
          onChangeText={this.handleInput}
          value={this.state.filteredValue}
        />
      </LabelInput>
    ) : (
      <>
        {this.prepareLabel()}
        <View style={this.handleStyle()}>
          <Input
            keyboardType={isNumber ? 'number-pad' : 'default'}
            secureTextEntry={isPassword}
            maxLength={maxLength}
            multiLine={false}
            style={this.handleInputStyle(styles.textInputStyle)}
            placeholder={this.preparePlaceholder()}
            onChangeText={this.handleInput}
            value={this.state.filteredValue}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  lblInputStyle: {
    // backgroundColor: '#00f',
    textAlign: 'right',
    marginRight: 5,
    height: 40,
    fontSize: textSizes.textLarge,
  },
  lblLabelStyle: {
    // backgroundColor: '#0ff',
    textAlign: 'left',
    marginRight: 10,
    marginLeft: 5,
    // height: textSizes.textLarge + 4,
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  textInputStyle: {
    height: 40,
    fontSize: textSizes.textLarge,
  },
  textLabel: {
    marginLeft: 7,
  },
  textContainer: {
    backgroundColor: colors.backgroundWhite,
    borderRadius: 5,
    margin: 2,
    borderColor: colors.backgroundBlue,
    borderWidth: 1,
    height: 40,
  },
  textLabelContainer: {
    backgroundColor: colors.backgroundWhite,
    borderRadius: 5,
    margin: 2,
    borderColor: colors.backgroundBlue,
    borderWidth: 1,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContainerHalf: {
    width: componentSize.halfWidth,
  },
  textContainerQuarter: {
    width: componentSize.quarterWidth,
  },
  inputAlignRight: {
    textAlign: 'right',
  },
  inputAlignCenter: {
    textAlign: 'center',
  },
});

InputCustom.propTypes = {
  placeholder: PropTypes.string,
  maxChar: PropTypes.number,
  isNumber: PropTypes.bool,
  isCurrency: PropTypes.bool,
  isHalf: PropTypes.bool,
  isQuarter: PropTypes.bool,
  label: PropTypes.string,
  labelBold: PropTypes.bool,
  withLabel: PropTypes.bool,
  noStyle: PropTypes.bool,
  isPassword: PropTypes.bool,
  isAlignRight: PropTypes.bool,
  isAlignCenter: PropTypes.bool,
};

InputCustom.defaultProps = {
  maxChar: 100,
  isNumber: false,
  isCurrency: false,
  isHalf: false,
  isQuarter: false,
  label: null,
  labelBold: false,
  withLabel: false,
  noStyle: false,
  isPassword: false,
  isAlignRight: false,
  isAlignCenter: false,
};

export default InputCustom;
