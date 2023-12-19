import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'

export default (app) => {
  // Define validation rules
  defineRule('required', required)
  defineRule('email', email)
  defineRule('min', min)

  // Configure VeeValidate with a custom error message generator
  configure({
    generateMessage: (context) => {
      // Custom message for the required rule
      if (context?.rule?.name === 'required') {
        return `${context.field} is required`
      }
      if (context?.rule?.name === 'email') {
        return `${context.field} must be a valid email`
      }
      if (context?.rule?.name === 'min') {
        return `${context.field} must be at least 8 characters long`
      }
      // Default message for other rules
      return `The field ${context.field} is invalid`
    }
  })
  // configure({
  //   generateMessage: localize('en', {
  //     messages: {
  //       required: 'This field is required',
  //       email: 'This is not a valid email'
  //     }
  //   })
  // })

  // Set up localization with custom messages
  localize('en', en)

  // Set up VeeValidate components
  app.component('VeeForm', Form)
  app.component('VeeField', Field)
  app.component('VeeErrorMessage', ErrorMessage)
}
