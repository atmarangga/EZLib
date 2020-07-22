import React, {PureComponent} from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {View} from 'native-base';
import Icon from '../Icon';
import {phoneDimension} from '../../helpers/constants';
class IconList extends PureComponent {
  constructor(props) {
    super(props);
    this.handleIconStyles = this.handleIconStyles.bind(this);
    this.iconHandler = this.iconHandler.bind(this);
    this.rowHandler = this.rowHandler.bind(this);
  }

  handleIconStyles(defaultStyle) {
    const {columns} = this.props;
    const widthItem = phoneDimension.width / columns;
    console.log('widthItem ?', widthItem);

    return {
      ...defaultStyle,
      width: widthItem,
      alignContent: 'flex-start',
    };
  }

  rowHandler() {
    const {items, columns} = this.props;
    const rows = Math.ceil(items.length / columns);
    console.log('rows ?', rows);
    let itemCounter = 0;
    const returnedComponent = [];
    for (let i = 0; i < rows; i += 1) {
      const columnIcons = [];
      for (let y = 0; y < columns; y += 1) {
        const {name, link, label} = items[itemCounter];
        const ItemIcon = (
          <View style={this.handleIconStyles(styles.item)}>
            <Icon label={label} isLarge name={name} onClick={link} />
          </View>
        );
        columnIcons.push(ItemIcon);
        itemCounter += 1;
      }
      returnedComponent.push(<View style={styles.item}>{columnIcons}</View>);
    }
    return returnedComponent;
  }

  iconHandler() {
    return [];
  }
  render() {
    return <View style={styles.containerStyle}>{this.rowHandler()}</View>;
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    margin: 5,
    padding: 5,
    flexDirection: 'column',
    alignContent: 'center',
  },
  item: {
    flexDirection: 'row',
    margin: 2,
    padding: 2,
    alignContent: 'center',
    justifyContent: 'center',
  },
});

IconList.propTypes = {
  items: PropTypes.array,
  columns: PropTypes.number,
};

IconList.defaultProps = {
  items: [],
  columns: 2,
};

export default IconList;
