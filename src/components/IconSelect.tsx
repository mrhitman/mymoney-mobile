import React, { Component } from 'react';
import { Container, Header, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const icons = {
  AntDesign: [
    'creditcard',
    'laptop',
    'shoppingcart',
    'mail',
    'book',
    'customerservice',
    'phone',
    'windows',
    'camera',
    'medicinebox',
    'rest',
    'Safety',
    'wallet',
    'bank',
    'Trophy',
    'android1',
    'apple1',
    'instagram',
    'twitter'
  ],
  Entypo: [
    'app-store',
    'aircraft',
    'beamed-note',
    'baidu',
    'address',
    'credit',
    'credit-card',
    'mobile',
    'wallet'
  ]
};
export class IconSelect extends Component {
  render() {
    const widthItems = Math.ceil(width / 64);
    console.log(widthItems);
    return (
      <Container>
        <Header />
        <Grid>
          <Row>
            <Col style={styles.icon}>
              <Icon type="AntDesign" name="wallet" />
            </Col>
            <Col style={styles.icon}>
              <Icon type="AntDesign" name="wallet" />
            </Col>
            <Col style={styles.icon}>
              <Icon type="AntDesign" name="wallet" />
            </Col>
            <Col style={styles.icon}>
              <Icon type="AntDesign" name="wallet" />
            </Col>
            <Col style={styles.icon}>
              <Icon type="AntDesign" name="wallet" />
            </Col>
            <Col style={styles.icon}>
              <Icon type="AntDesign" name="wallet" />
            </Col>
            <Col style={styles.icon}>
              <Icon type="AntDesign" name="wallet" />
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  icon: {}
});

export default IconSelect;
