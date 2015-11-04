# Forms #

Toto je kniznica na validaciu formularov v JS

### Zakladne pouzitie ###
#### HTML ####
```
#!html

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

#### javascript ####
```
#!javascript

	var options = {
		'formSelector': '#form-1', // id #kvak
		'rules': {
			'input[name=name],input[name=age],input[name=email],input[name=phone],input[name=psc]': {
				'type': 'required', // phone|email|PSC|age|custom|required
				'errorMessage': 'Toto policko musite vyplnit'
			},
			'input[name=email]': {
				'type': 'email', // phone|email|PSC|age|custom|required
				'errorMessage': 'Zadali ste neplatny email'
			},
			'input[name=age]': {
				'type': 'age', // phone|email|PSC|age|custom|required
				'errorMessage': 'Zadali ste neplatny vek'
			},
			'input[name=phone]': {
				'type': 'phone', // phone|email|PSC|age|custom|required
				'errorMessage': 'Zadali ste neplatny telefon'
			},
			'input[name=psc]': {
				'type': 'custom', // phone|email|PSC|age|custom|required
				'errorMessage': 'Zadali ste neplatne psc',
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

#### Nastavenia ####

```
#!javascript

var options = {
		'formSelector': '#form-1', // id #kvak
		'rules': {
			'input[name=name],input[name=age],input[name=email],input[name=phone],input[name=psc]': {
				'type': 'required', // phone|email|PSC|age|custom|required
				'errorMessage': 'Toto policko musite vyplnit'
			},
			'input[name=email]': {
				'type': 'email', // phone|email|PSC|age|custom|required
				'errorMessage': 'Zadali ste neplatny email'
			},
			'input[name=age]': {
				'type': 'age', // phone|email|PSC|age|custom|required
				'errorMessage': 'Zadali ste neplatny vek'
			},
			'input[name=phone]': {
				'type': 'phone', // phone|email|PSC|age|custom|required
				'errorMessage': 'Zadali ste neplatny telefon'
			},
			'input[name=psc]': {
				'type': 'custom', // phone|email|PSC|age|custom|required
				'errorMessage': 'Zadali ste neplatne psc',
				'validationFunc': function () {
					return false;
				}
			}
		}
	};
```