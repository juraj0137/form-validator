# Forms #

Lib for validation form in JS

### Usage ###
#### HTML ####
```html
<form action="" id="form-1">
	<label>
		name
		<input type="text" name="name">
	</label>
	<label>
		email
		<input type="text" name="email">
	</label><br>
	<label>
		age
		<input type="text" name="age">
	</label><br>
	<label>
		phone
		<input type="text" name="phone">
	</label><br>
	<label>
		psc
		<input type="text" name="psc">
	</label><br>

	<button id="validate">validate</button>
</form>
```

#### JS ####
```javascript

var options = {
	'formSelector': '#form-1',
	'rules': {
		'input[name=name],input[name=age],input[name=email],input[name=phone],input[name=psc]': {
			'type': 'required',
			'errorMessage': 'this field is rquired'
		},
		'input[name=email]': {
			'type': 'email',
			'errorMessage': 'your email is incorrect'
		},
		'input[name=age]': {
			'type': 'age',
			'errorMessage': 'your age is incorrect'
		},
		'input[name=phone]': {
			'type': 'phone',
			'errorMessage': 'your phone number is incorrect'
		},
		'input[name=psc]': {
			'type': 'custom',
			'errorMessage': 'Your PSC is incorrect',
			'validationFunc': function () {
				return false;
			}
		}
	}
};
var _formValidator = new Form.Validator(options);

document.getElementById('validate').onclick = function (event) {
	event.preventDefault();
	_formValidator.clearErrors();
	_formValidator.validate();
	console.log(_formValidator.getErrors());
}
```

#### Settings ####

```javascript

var options = {
	'formSelector': '--form selector--', // #form, .form123
		'rules': {
			'--input/s selector--': { // input[name=psc] alebo input[name=psc],input[name=email],input[name=street],...
				'type': '--validation type--',
				'errorMessage': 'Something is wrong',
				'validationFunc': function (input) { // own validation
					return false/true;
				}
			},
			...
		}
	};
```

#### Validation types ####
* phone
* email
* PSC
* age
* required
* custom
