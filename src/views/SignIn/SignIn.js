

import { Link, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import validate from 'validate.js';



//ok
const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'Es requerido' },
    length: {
      maximum: 128
    }
  }
};

const useStyles = makeStyles(theme => ({
  // root: {
  //   backgroundColor: 'primary',
  //   height: '100%'
  // },
  // grid: {
  //   height: '100%'
  // },
  // quoteContainer: {
  //  [theme.breakpoints.down('md')]: {
  //    display: 'none'
  //    }
  // },

  // quoteInner: {
  //   textAlign: 'center',
  //   flexBasis: '600px'
  // },
  // quoteText: {
  //   color: 'primary',
  //   fontWeight: 300
  // },
  // name: {
  //   marginTop: theme.spacing(3),
  //   color: 'white'
  // },
  // bio: {
  //   color: 'blue'
  // },
  // contentContainer: {},
  // content: {
  //   height: '100%',
  //   display: 'flex',
  //   flexDirection: 'column'
  // },
  // contentHeader: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   paddingTop: theme.spacing(5),
  //   paddingBototm: theme.spacing(2),
  //   paddingLeft: theme.spacing(2),
  //   paddingRight: theme.spacing(2)
  // },
  
  // contentBody: {
  //   flexGrow: 1,
  //   display: 'flex',
  //   alignItems: 'center',
  //   [theme.breakpoints.down('md')]: {
  //     justifyContent: 'center'
  //   }
  // },
  // form: {
  //   paddingLeft: 100,
  //   paddingRight: 100,
  //   paddingBottom: 125,
  //   [theme.breakpoints.down('sm')]: {
  //     paddingLeft: theme.spacing(2),
  //     paddingRight: theme.spacing(2)
  //   }
  // },
  title: {
    marginTop: theme.spacing(3)
  },
  // socialButtons: {
  //   marginTop: theme.spacing(3)
  // },
  // socialIcon: {
  //   marginRight: theme.spacing(1)
  // },
  // sugestion: {
  //   marginTop: theme.spacing(2)
  // },
  textField: {
    marginTop: theme.spacing(2)
  },
  signInButton: {
    margin: theme.spacing(2, 0)
  }
}));

const SignIn = props => {
  const { history } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });
//ok
  useEffect(() => {
    const errors = validate(formState.values, schema); 

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);


  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSignIn = event => {
    event.preventDefault();
    history.push('/');
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

   
  return (
  
      
      <GridItem xs={12} sm={12} md={12}>
        <Card>
        <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}> Bienvenido a  My Pet</h4> 
              {/* no tiene el estilo */}
            </CardHeader>
            
              <CardBody
                // className={classes.form}
                onSubmit={handleSignIn}
              >
                <Typography
                  className={classes.title}
                  variant="h2"
                >
                  Iniciar sesion
                </Typography>
               
                <TextField
                  className={classes.textField}
                  error={hasError('email')}
                  fullWidth
                  helperText={
                    hasError('email') ? formState.errors.email[0] : null
                  }
                  label="Correo Electronico"
                  name="email"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.email || ''}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  error={hasError('Contraseña')}
                  fullWidth
                  helperText={
                    hasError('password') ? formState.errors.password[0] : null
                  }
                  label="Contraseña"
                  name="password"
                  onChange={handleChange}
                  type="password"
                  value={formState.values.password || ''}
                  variant="outlined"
                />
                <Button
                  className={classes.signInButton}
                  color="primary"
                  disabled={!formState.isValid}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Ingresar
                </Button>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  ¿No tienes cuenta?{' '}
                  <Link
                    component={RouterLink}
                    to="/sign-up"
                    variant="h6"
                  >
                    Registrarte aqui
                  </Link>
                </Typography>
              </CardBody>
        </Card>
      </GridItem>
  );
};

SignIn.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignIn);
