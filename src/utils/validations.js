export const validateEmail = (value) => {
	let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (value) {
		return emailRegex.test(value) ? null : 'Correo no valido';
	}
	return null;
};

export const validatePassword = (value) => {
	let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&:()._-]{8,}$/;
	if (value) {
		return passRegex.test(value)
			? null
			: 'Debe contener mayúscula, minúscula, números y 8 o más caracteres';
	}
	return value;
};

export const firebaseValidations = (error) => {
	if (error.code === 'auth/email-already-in-use') return 'We detect that this number is linked to another account, please provide a new number';
	if (error.code === 'auth/invalid-email') return 'Invalid Email';
	if (error.code === 'auth/user-not-found') return 'User not found';
	if (error.code === 'auth/wrong-password') return 'incorrect password';
	if (error.code === 'auth/account-exists-with-different-credential') return 'There is an account created with this email, but it is not linked to Facebook, please verify.';
	if (error.code === 'auth/invalid-phone-number') return 'The provided number is invalid';
	if (error.code === 'auth/invalid-verification-code') return 'The code is invalid';
	if (error.code === 'auth/unknown') return 'It seems that there was an error making your verification, please try again';
}