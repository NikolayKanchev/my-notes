import React from 'react';
import clsx from 'clsx';
import ErrorIcon from '@material-ui/icons/Error';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { makeStyles, Theme } from '@material-ui/core/styles';

const variantIcon = {
  error: ErrorIcon,
};

const useStyles1 = makeStyles((theme: Theme) => ({
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export interface Props {
  className?: string;
  message?: string;
  variant: keyof typeof variantIcon;
}

function MySnackbarContentWrapper(props: Props) {
  const classes = useStyles1();
  const { className, message, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      {...other}
    />
  );
}

export default function CustomizedSnackbars(err: any) {

  return (
    <div>
      <MySnackbarContentWrapper
        variant="error"
        message={err.message}
      />
    </div>
  );
}