export default ({ $axios, store, redirect }) => {
  // Admin

  // Auth
  // Signup
  $axios.$signup = (payload) => {
    return $axios.$post('/signup', payload)
      .then((response) => {
        return response
      })
  }

  // Addresses
  // Add Address
  $axios.$postAddress = (payload) => {
    return $axios.$post('/address', payload)
      .then((response) => {
        return response
      })
  }

  // Get Addresses
  $axios.$getAddresses = () => {
    return $axios.$get('/addresses')
      .then((response) => {
        return response
      })
  }

  // Get Single Address
  $axios.$getAddress = (id) => {
    return $axios.$get(`/addresses/${id}`)
      .then((response) => {
        return response
      })
  }

  // Get Countries
  $axios.$getCountries = () => {
    return $axios.$get('/countries')
      .then((response) => {
        return response
      })
  }

  // Delete Address
  $axios.$deleteAddress = (id) => {
    return $axios.$delete(`/addresses/${id}`)
      .then((response) => {
        return response
      })
  }

  // Edit Address
  $axios.$editAddress = (payload) => {
    return $axios.$put(`/addresses/${payload.id}`, payload.data)
      .then((response) => {
        return response
      })
  }

  // Set Address as Default
  $axios.$setAddress = (id) => {
    return $axios.$put('/addresses/set/default', id)
      .then((response) => {
        return response
      })
  }
}