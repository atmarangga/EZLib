import React, {PureComponent} from 'react';
import {StyleSheet} from 'react-native';
import {Icon, View} from 'native-base';
import PropTypes from 'prop-types';
import {iconSizes, colors} from '../../helpers/constants';
import BlueBG from './BlueCircleBG';
import Text from '../Text';

class IconDefault extends PureComponent {
  constructor(props) {
    super(props);
    this.prepareContent = this.prepareContent.bind(this);
    this.prepareStyle = this.prepareStyle.bind(this);
    this.prepareText = this.prepareText.bind(this);
  }

  prepareContent() {
    const {name} = this.props;
    // make corrections in naming here
    // strip underscores, add seperator and other related to icon naming here
    return name.toString();
  }

  prepareText() {
    const {label} = this.props;
    // internationalizing here ?

    return label.toString();
  }

  prepareStyle() {
    const {style, isLarge, isSmall, isHuge} = this.props;

    if (isLarge) {
      return {...styles.large, ...style};
    } else if (isSmall) {
      return {...styles.small, ...style};
    } else if (isHuge) {
      return {...styles.huge, ...style};
    }
    return {...styles.normal, ...style};
  }

  render() {
    const {isCustom, label} = this.props;
    const IconRender = (
      <Icon
        name={this.prepareContent()}
        style={this.prepareStyle()}
        type="FontAwesome5"
      />
    );
    const IconFinal = isCustom ? <BlueBG>{IconRender}</BlueBG> : IconRender;
    const IconReturn = label ? (
      <View style={styles.container}>
        {IconFinal}
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.textLabel}
          label={this.prepareText()}
        />
      </View>
    ) : (
      IconFinal
    );
    return IconReturn;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 100,
  },
  textLabel: {
    textAlign: 'center',
  },
  small: {
    color: colors.textBlue,
    fontSize: iconSizes.iconSmall,
  },
  large: {
    color: colors.textBlue,
    fontSize: iconSizes.iconLarge,
  },
  normal: {
    color: colors.textBlue,
    fontSize: iconSizes.iconNormal,
  },
  huge: {
    color: colors.textBlue,
    fontSize: iconSizes.iconHuge,
  },
});

IconDefault.propTypes = {
  name: PropTypes.string,
  isCustom: PropTypes.bool,
  label: PropTypes.string,
};

IconDefault.defaultProps = {
  name: 'question-circle',
  isCustom: false,
};

export default IconDefault;
