import { extend } from 'vee-validate'

import { required, max, min } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: '{_field_} لا يمكن ان تكون فارغة'
})

extend('max', {
  ...max,
  message: '{_field_} لا يمكن ان يكون اكبر من {length} حرف'
})

extend('min', {
  ...min,
  message: '{_field_} لا يمكن ان يكون اصغر من {length} حرف'
})
