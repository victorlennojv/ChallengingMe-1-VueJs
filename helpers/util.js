import moment from 'moment'

const formatDate = (value, format = 'DD/MM/YYYY') =>
  moment(value).utc().format(format)

export { formatDate }
