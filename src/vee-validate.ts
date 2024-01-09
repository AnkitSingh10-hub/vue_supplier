import { defineRule, configure } from 'vee-validate'
import { required, email, min, min_value, max_value } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'
import ne from '@vee-validate/i18n/dist/locale/ne.json'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('min_value', min_value)
defineRule('max_value', max_value)

configure({
  generateMessage: localize({ en, ne })
})

// import AllRules from "@vee-validate/rules";

// Object.keys(AllRules).forEach((rule) => {
//   defineRule(rule, AllRules[rule]);
// });

// import { setLocale } from '@vee-validate/i18n';
// setLocale('ne');
