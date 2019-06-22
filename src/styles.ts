import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FEFEFE'
  },
  accountHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20
  },
  accountHeaderText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.6)'
  },
  accountHeaderFilter: {
    marginTop: -13,
    marginLeft: 49
  },
  accountHeaderFilterText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.3)'
  }
});

export default styles;
