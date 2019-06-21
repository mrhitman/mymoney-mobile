import { Container, Header, Tab, Tabs, Text } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ExportSettings from '../components/ExportSettings';
import GeneralSettings from '../components/GeneralSettings';
import SecuritySettings from '../components/SecuritySettings';
import SyncSettings from '../components/SyncSettings';

export class SettingsScreen extends Component {
  public render() {
    return (
      <Container>
        <Header hasTabs>
          <Text style={styles.headerText}>SETTINGS</Text>
        </Header>
        <Tabs>
          <Tab heading="General">
            <GeneralSettings />
          </Tab>
          <Tab heading="Export">
            <ExportSettings />
          </Tab>
          <Tab heading="Security">
            <SecuritySettings />
          </Tab>
          <Tab heading="Cloud">
            <SyncSettings />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FEFEFE'
  },
  header: {},
  headerText: {
    marginTop: 10,
    fontSize: 19,
    fontWeight: 'bold',
    color: 'rgba(255,255,255,0.6)'
  }
});

export default SettingsScreen;
