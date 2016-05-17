import React from 'react';
import AppBar from 'material-ui/AppBar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class TestComponent extends React.Component {
    
    getChildContext() {
      return {muiTheme: getMuiTheme(baseTheme)};
    }
    render() {
        return (
            <AppBar
                title="Jssust day"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        );
    }
};

TestComponent.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
}
export default TestComponent;