import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class TextFields extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleOnSubmit}>
        <TextField
          id="search"
          label="Search"
          type="search"
          className={classes.textField}
          margin="normal"
          onChange={e => this.props.onChange(e)}
        />
      </form>
    );
  }
}

export default withStyles(styles)(TextFields);
