//noinspection JSUnusedAssignment
var Form = Form || {};

Form.Validator = function (options) {

	this.form = null;
	if (typeof options.formSelector != 'undefined' && !this.isEmpty(options.formSelector)) {
		this.form = document.querySelector(options.formSelector);
	} else {
		console.error('empty form selector');
	}

	this.rules = [];
	if (typeof options.rules != 'undefined' && !this.isEmpty(options.rules)) {
		this.rules = options.rules;
	} else {
		console.error('empty form rules');
	}

	this.errors = [];

	this.validate = function () {
		if (!this.isEmpty(this.rules)) {
			for (var key in this.rules) {
				if (this.rules.hasOwnProperty(key)) {
					this.validateOne(key, this.rules[key]);
				}
			}
		}
	};

	this.validateOne = function (selector, rule) {

		var inputs = this.form.querySelectorAll(selector);
		var ruleTypes = rule.type.split(/[\s|,]/);

		for (var key in inputs) {
			if (inputs.hasOwnProperty(key)) {
				var input = inputs[key];

				for (var i = 0; i < ruleTypes.length; i++) {

					var isValid = false;

					switch (ruleTypes[i].trim()) {
						case 'required':
							isValid = this.isEmpty(input.value) === false;
							break;
						case 'phone':
							isValid = this.isPhone(input.value);
							break;
						case 'email':
							isValid = this.isEmail(input.value);
							break;
						case 'psc':
							isValid = this.isPsc(input.value);
							break;
						case 'age':
							isValid = this.isAge(input.value);
							break;
						case 'custom':
							if (typeof rule.validationFunc == "function") {
								isValid = rule.validationFunc(input);
							}
							break;
					}

					if (isValid === false) {
						var error = {
							element: input,
							errorMessage: rule.errorMessage
						};
						this.addError(error);
					}
				}

			}
		}

	};

	this.addError = function (error) {
		this.errors.push(error);
	};

	this.getErrors = function () {
		return this.errors;
	};

	this.clearErrors = function () {
		this.errors = [];
	};
};

Form.Validator.prototype.isEmpty = function (str) {
	return (str.length === 0);
};

Form.Validator.prototype.isEmail = function (email) {
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	return re.test(email);
};

Form.Validator.prototype.isPhone = function (phone) {
	var re = /^[+]?[0-9|.|\s|-]{9,}$/;
	return re.test(phone);
};

Form.Validator.prototype.isAge = function (age) {
	return age > 0 && age < 130;
};

Form.Validator.prototype.isPsc = function (psc) {
	var re = /^\d{3}\s?\d{2}$/;
	return re.test(psc);
};

