// regrex
const regX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateEmails (emails){
	const invalidEmails = emails.split(',').map((email) => email.trim()).filter(email => regX.test(email) === false);

	if (invalidEmails.length) {
		return `These Emails are invalid: ${invalidEmails}`;
	}

	return;
}

export default validateEmails;
