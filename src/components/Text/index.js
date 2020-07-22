import React, {PureComponent} from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Text} from 'native-base';
import {colors, months} from '../../helpers/constants';
import {moneyFormat} from '../../helpers/utils';

class TextComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.styleHelper = this.styleHelper.bind(this);
    this.formatText = this.formatText.bind(this);
  }

  formatText() {
    const {
      label,
      isDate,
      isCurrency,
      allCaps,
      dateFormat,
      currency,
    } = this.props;
    let finalText = label;

    if (isDate) {
      const f = new Date(label);
      if (dateFormat === 'dd-mm-yyyy') {
        finalText = `${f.getDate()} - ${f.getMonth() + 1} - ${f.getFullYear()}`;
      } else if (dateFormat === 'dd-mmm-yyyy') {
        finalText = `${f.getDate()} - ${
          months[f.getMonth()]
        } - ${f.getFullYear()}`;
      }
    } else if (isCurrency) {
      finalText = moneyFormat(finalText, currency);
    }
    if (allCaps) {
      finalText = finalText.toString().toUpperCase();
    }
    return finalText;
  }

  styleHelper() {
    const {invert, style, isBold, isItalic, isBlue} = this.props;
    let defaultStyle = invert ? styles.invert : styles.default;
    defaultStyle = isBlue ? styles.blue : defaultStyle;
    defaultStyle = isBold
      ? {...defaultStyle, ...styles.bold}
      : {...defaultStyle};
    defaultStyle = isItalic
      ? {...defaultStyle, ...styles.italic}
      : {...defaultStyle};
    return {...defaultStyle, ...style};
  }

  render() {
    const {ellipsizeMode, numberOfLines} = this.props;
    return (
      <>
        <Text
          ellipsizeMode={ellipsizeMode}
          numberOfLines={numberOfLines}
          style={this.styleHelper()}>
          {this.formatText()}
        </Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
  default: {
    color: colors.textPrimary,
  },
  blue: {
    color: colors.textBlue,
  },
  invert: {
    color: colors.textInverse,
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
});

TextComponent.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  isBold: PropTypes.bool,
  isItalic: PropTypes.bool,
  isCurrency: PropTypes.bool,
  isDate: PropTypes.bool,
  invert: PropTypes.bool,
  allCaps: PropTypes.bool,
  dateFormat: PropTypes.oneOf(['dd-mm-yyyy', 'dd-mmm-yyyy']),
  currency: PropTypes.string,
  isBlue: PropTypes.bool,
  numberOfLines: PropTypes.number,
  ellipsizeMode: PropTypes.oneOf(['head', 'middle', 'tail']),
};

TextComponent.defaultProps = {
  label: '',
  isBold: false,
  isItalic: false,
  isCurrency: false,
  isDate: false,
  invert: false,
  allCaps: false,
  isBlue: false,
  dateFormat: 'dd-mm-yyyy',
  currency: 'Rp.',
  numberOfLines: 1,
  ellipsizeMode: 'tail',
};

export default TextComponent;
